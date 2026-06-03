# `/ggx-dispatcher` — Tech Sharing

> 一句話：把 Linear 上「準備好的票」自動撈起來，平行丟給 `/port:ff` 或 `/dev:ff` 跑完。

---

## 1. 解決什麼問題？

過去的工作流：

1. 打開 Linear → 找出今天要做的票
2. 一張一張手動跑 `/port:ff` 或 `/dev:ff`
3. 中間還要等、要切 worktree、要 follow up

當票數量一多 (例如一次 10 張)，這件事變成純體力活，而且開太多 session 也很容易忘記哪張在哪。

**Dispatcher 把這層人力跑批給自動化了。** 一個指令、一個 session，平行 fan-out N 張票。

---

## 2. 核心概念

| 概念 | 說明 |
|---|---|
| **Manual batch worker** | 不是 cron、不是 daemon。使用者開一個 session 主動觸發。 |
| **Linear label = 信號** | 票上掛 `ready-to-port` / `ready-to-dev` 才會被撈。Label 就是「夠資格被派工」的入場券。 |
| **Race-lock** | 撈到票後 atomic 換 label 成 `dispatcher-*-in-flight`，避免多個 session 同時搶同一張。 |
| **Fan-out parallel** | N 張票 = 1 個訊息內 spawn N 個 background agent，平行跑。 |
| **Crash recovery** | 中途掛了？下次 dispatcher 看到 `*-in-flight` label 就會自動接續。 |

---

## 3. 整體流程（六步）

```
┌─ Step 0  解析 profile（哪個 repo / 哪個 team）
├─ Step 1  Pre-flight（lockfile、main worktree、clean tree、gh auth）
├─ Step 2  撈票（Q1~Q4 四條 Linear query：兩條 fresh + 兩條 recovery）
├─ Step 3  反重複（已有 PR / 已有 branch → skip）
├─ Step 4  Race-lock（swap label、設 In Progress、指派 assignee、留 comment）
├─ Step 5  Spawn（1 message 內：印表格 + N agents + 1 poller，全部一起發）
└─ Step 6  Join → fallback → 寫 report → 釋放 lock
```

---

## 4. 幾個值得拿出來講的設計

### 4.1 為什麼用 Label 當信號，不用 Status？

Port → spec-review → Dev 的交接過程中，**status 不會被重置**。  
如果用 `state: unstarted` 篩，會把所有 post-port 的 dev 票都漏掉。  
所以 Q1/Q3 故意「不篩 state」，改在拿到結果後用 `statusType` 過濾完成 / 已 review 的票。

> 教訓：**在自家系統內訂自己定義的 label**，比起借用平台原生欄位更穩定，因為 label 是專門為你的工作流設計的。

### 4.2 為什麼一個 message 內必須同時 spawn N agents + 1 poller？

如果你發完表格就停下來等使用者「確認」，使用者就會以為 dispatcher 卡了，最後跑來問「你還在嗎？」。

而且 poller 必須跟 agents 同時起來，不然第一個 stage transition 會被漏掉。

> **平行的關鍵不是 spawn 多少個，而是它們都在同一個 turn 內被發出去。**

### 4.3 為什麼要 `dispatcher-*-in-flight` 這個專屬 label？

- 它是「dispatcher 還沒跑完」的唯一信號
- `/dev:ship` / `/port:ship` 跑完才會拔掉
- 下次 dispatcher 看到它 → 自動接續（recovery lane）
- **手動跑 `/dev:start` 不會加這個 label** → 手動的就保持手動，不會被 dispatcher 偷走

### 4.4 為什麼有獨立的 poller，而不是讓 LLM 自己 heartbeat？

每個 stage 都會寫 marker file (`.dev/apply-result.md`, `.port/synth-report.md`...)，  
那才是「現在進行到哪」的 ground truth。

- LLM 自己 heartbeat → 每次新增 stage 都要改 LLM prompt
- File-based poller → stage 怎麼演化都不用動 poller

> **單一事實來源 (Single source of truth) 比熱鬧的訊息傳遞重要。**

### 4.5 Lockfile = 防止自己打架

`claude-reports/dispatcher/.lock` 保證同一台機器同時只有一個 dispatcher 在跑。  
過期 (>10 min) 就視為 stale 自動覆蓋。每個 exit path（成功 / abort / MCP 出錯）都會清掉。

---

## 5. 一個典型的使用情境

```bash
# 我早上開機，打開這個 repo，跑：
/ggx-dispatcher

# Dispatcher 找到 5 張票（3 張 port、2 張 dev），平行 fan-out。
# 我去喝咖啡 / 開會。
# 30 分鐘後回來看 report：
#   3 張 port 全部進 need-spec-review
#   2 張 dev 全部 In Review，PR 都開好了
```

---

## 6. 它「不做」的事

- ❌ 不會自動 stash / checkout / clean 你的 working tree → 髒了就 abort，要你自己處理
- ❌ 不會發 `AskUserQuestion` → 全程無互動，gate 不過就 abort
- ❌ 不會在 cron 跑 → stdout 是稽核日誌，看不到就無法 debug
- ❌ 不會跨 team 撒網 → `branch_prefix: auto` 的 repo 一定要 `--team:<KEY>`

---

## 7. 一行 demo

```bash
# 預演（看清楚會派什麼但不真的動）
/ggx-dispatcher --dry-run

# 平行上限拉到 5
/ggx-dispatcher --max-parallel:5

# 指定團隊（branch_prefix: auto 的 repo 必填）
/ggx-dispatcher --team:CET
```

---

## 8. Takeaway（如果分享要收尾）

1. **Label-as-signal**：用自家定義的 label 當狀態機，比借用平台欄位穩。
2. **Atomic lock**：race condition 不靠運氣，靠 `save_issue` 一次換掉 label。
3. **Crash recovery 用 label 自帶**：不用額外存 state，重新撈一次就能知道誰沒跑完。
4. **Spawn + poller 同 turn**：parallel 的精髓在「同一個 message」，不是 agent 數量。
5. **File-based truth**：marker files 是 stage 真相，poller 只是把它畫成表格。
