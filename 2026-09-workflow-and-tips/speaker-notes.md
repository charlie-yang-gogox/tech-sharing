# Speaker notes — 2026-09 · 從 Prompt 到 Graph Engineering

Same shape as the 2026-06 session's notes: one block per slide, in delivery order.

**Status: CH1 (S3–S5) here; CH2 (S7–S11) lives in the deck itself.** The
2026-09-01 CH2 pass made every CH2 page figure-first and moved its whole script
into that slide's own `<details class="notes">` block in `index.html` — read it
there, and edit it there, or the two copies will drift. CH3 (S13–S19) and CH4
(S20–S22) still have no notes anywhere.

When you add them, keep the `## SN · <slide tag> / <zh label>` heading form so a
numbering change is a find-and-replace rather than a re-read. Slide numbers here
follow the 22-slide deck (CH1 was condensed four slides → three on 2026-08-29;
CH2 ten → six on 2026-09-01, which shifted everything from the old S16 by −4).

---

## S3 · §1 Divider · Five levels

One line, then move. The divider exists so the room knows a vocabulary section is
starting; do not explain the five rungs here, the next slide is the explanation.

> 這一章只做一件事：把五個字的意思講清楚，後面才有東西可以講。

---

## S4 · 04 / THE STACK · 五層樓梯

**One message: each rung exists because the one below it left a problem.**

Do not read the staircase out. Walk it. Start at the bottom step and say the
riser, not the tread — the risers are the argument:

1. PROMPT — 你怎麼問。一段字。
2. 「它看不到我的世界」→ so CONTEXT. 措辭再好，模型手上沒有那份檔案、那張票、那段 log。
3. 「它沒有手」→ so HARNESS. 脈絡整理得再乾淨，它還是只能講話。
4. 「每一步都要我按」→ so LOOP. 工具齊了，但它做完一步就停下來等我 —— 所以我變成那個迴圈。
5. 「同時跑，會撞在一起」→ so GRAPH. 一個會自己跑的東西很好用；十幾個會搶同一個檔案、同一台裝置、同一張票。

**Point at the strata.** This is the beat that earns the closing rule. The GRAPH
column is drawn out of five slabs; the PROMPT column out of one. Say it out loud —
「累加不是取代」不是一句口號，你數得出來：站在第五階，腳下還有四層。

**Say this, because the deck no longer does** (it moved to the appendix):

> 而且爬到頂不是每個人都該做的事。「大部分的工作根本不需要堆疊的頂端 —— 今天很多
> 上了 production 的 agent，正確地說，就只是一段脈絡整理得很好的 prompt 待在一個
> 還不錯的 harness 裡。」今天講的六個 pattern 全部住在最上面那一層，那是因為我的
> 問題長在那裡，不是因為第三層不夠好。

**Hand-off:** 前三層在問「這一次做得好不好」；第四層開始換問題 —— 「我不在的時候
它會怎麼樣」。下一頁就是最上面那兩層的差別。

**If asked** where the five rungs come from: four independent write-ups that agree
on the ordering and on loops being a special case of graphs (Analytics Vidhya,
Sarthak AI, TrueFoundry, LangChain). Full definitions: `details/five-rungs.html`.

---

## S5 · 05 / THE TOP RUNG · 路徑由誰決定

**One message: loop and graph differ on exactly one thing — who decides the route.**

Name the two colours before anything else, because slide 04 already showed them
and 07/08 will reuse them: 淺藍 = 機器當場決定路徑，琥珀 = 你事先決定路徑. Never say
"sky" or "amber" on stage — those are variable names in the stylesheet, not words.

**Left panel (LOOP).** 你只給兩端：一個起點，一個「到了就停」。中間怎麼走是機器當場
決定的，而且那條路徑**沒有寫在任何地方** —— 跑兩次可能兩條不一樣的路。

**The one thing worth insisting on:** 那個「到了」要是**真的檢查**。測試綠了、schema
過了、CI 綠了、review 沒有未解決的討論。**不是問模型「你覺得可以了嗎」** —— 模型答
「可以了」的成本是零，所以那個答案不承載任何資訊。

**Right panel (GRAPH).** 每一條邊都是你事先畫的，它不能自己開新路。

**Then the move the whole slide is built for — point at the upper node.** 裡面那張
小圖就是左邊那一整張：同一個灰色起點、同一條淺藍路徑、同一個琥珀 gate。

> 迴圈本身就是一張有環的圖，所以它可以直接當別人的一個方塊。圖不是取代迴圈，是把
> 迴圈**包進去**。外面的路你畫的，裡面怎麼繞是機器的事。

**Takeaway card:** 節點之間互相看不到 —— 同時跑的方塊各拿乾淨的脈絡，一個人的誤判不
會傳染。台上只留這一句，但要補上為什麼它值錢：省掉它圖還是會跑，只是三個節點會一起
錯同一個方向。

**Cut from this slide — say only if the room asks:**
- 三種停法：A 沒有判斷式（永遠不會停，帳單先告訴你）／B 只有次數上限（不會失控，但
  它停下來時你分不出成功跟放棄）／C 真的檢查 + 上限當保險。**只有 C 叫 loop
  engineering。**
- GGC 的 `/ggx-pr-review-loop` 就是 C：review 乾淨且沒有未解決的討論才退出，
  `--max-rounds=5` 當保險，逾時的那一次不計入次數（逾時不是一次失敗的嘗試）。
- 人類點頭的位置是設計的一部分：核准閘放在後果最集中的那一條邊上，不是平均散在每一
  步。每一步都問等於沒有閘 —— 人會開始一路按 yes。
- 全部寫在 `details/five-rungs.html`。

**Hand-off:** 最上面那一層，接下來會展開成六個 pattern。

---

## S6 – S11 · CH2

In `index.html`, not here — each CH2 slide carries its own `<details class="notes">`
block (07 the vehicle, 08 the pattern · GGC today, 09–10 the two pattern grids,
11 the wrap-up). That is where the CH2 script was put when those slides were cut
down to one figure each; duplicating it into this file would create a second copy
that nothing keeps in sync.

## S12 onward · CH3, CH4

Not written yet.
