# 2026-09 · From Prompt Engineering to Graph Engineering — open items

Working notes for whoever picks this up next, including a future session with no
memory of how the deck got here. Everything below is either an open decision, a
piece of work, or a fact that would be expensive to re-derive.

**Deliverable**: `index.html` — one file, **22 slides: FOUR chapters + a closing Q&A** (restructured
2026-08-28 from the old two-part shape; CH1 condensed from four slides to three on
2026-08-29; CH2 condensed from ten slides to six on 2026-09-01 — each of those three
passes renumbered the whole deck), bilingual (zh-Hant default / EN toggle),
scroll + slide modes. `details/*.html` are appendix deep dives that
link back to `#s5`.

---

## Where it stands

| | |
|---|---|
| Title | **Settled.** 從 Prompt 到 Graph Engineering |
| Date | **Placeholder** — `2026-09-01`, hero carries a `DATE TBD` badge |
| Cover numbers | **WRONG and knowingly unfixed.** All three hooks mis-measured; see the table below. The speaker's call: 封面真正要用的方案待定 |
| Outline (02) | **Settled.** `大綱`, four rows, no lede. Maps 1:1 to the four dividers |
| Chapter copy | **Settled except §4.** 章節名稱 / 標題 / 敘述 per chapter; §4's title and description are marked placeholders |
| CH1 · 03–05 | **Done, condensed 2026-08-29.** Divider + the stack + the top rung. The old three content slides became two, both now ONE large figure with almost no prose: 04 is a five-step staircase whose risers carry the problem each rung solves and whose columns are drawn as stacked slabs (so "cumulative, not replacement" is countable); 05 is a two-part figure (adopted 2026-08-31 from `_preview-05d.html`): the upper half is the GRAPH drawn as a flowchart — start, four nodes, a branch, a merge, a human gate, and a dashed send-back cycle — and the lower half zooms ONE node open to show what a single call is made of (PROMPT + CONTEXT → HARNESS containing MODEL → a test → out, or back round the LOOP). Everything cut lives in `details/five-rungs.html` + `speaker-notes.md` |
| CH2 · 06–15 | **Written.** Divider + vehicle + map + six patterns + wrap-up |
| CH3 · 16–23 | **Draft, and now mis-titled.** Divider + seven tips slides. The chapter is named 「工具推薦」 but no slide covers typeless / herdr / eli5 — content gap, see below. Density also still open |
| CH4 · 24–25 | **Skeleton only.** Divider + a three-block placeholder. Material: CH2's wrap-up, CH3's meter, and the closing beat below. Do NOT invent numbers there. |
| Q&A · 26 | **Done.** Closing divider ported from the 2026-06 deck |
| Speaker notes | **CH1 only, and S5's section is STALE.** `speaker-notes.md` covers S3–S5, but its S5 notes describe a slide that no longer exists — see the open item below. S6 onward is still missing |

---

## Open decisions — these need the speaker, not an agent

1. **The date.** Once the slot is booked: replace `2026-09-01` and drop the
   `DATE TBD` badge in the hero, and update BOTH the static card and the
   `SESSIONS` array in `../index.html` (the file says so in a comment).

2. **Part 2 density.** The section is 8 slides and the speaker flagged wanting
   another pass. Cuts already identified, in the order I would make them.
   **WARNING — the slide numbers in this block are PRE-RESTRUCTURE and do not
   match the deck.** They were written against the old two-part shape; the
   four-chapter restructure (2026-08-28), the CH1 condense (2026-08-29) and the
   CH2 condense (2026-09-01) have all moved things since. Re-map each one against
   the live `slide-tag` values before acting on it; do not shift them by a
   constant, because the three changes were not uniform. (For the record, CH2's
   condense shifted everything from the old S16 onward by exactly −4, so the old
   17 / 19 / 21 / 22 / 23 in this block are today's 13 / 15 / 17 / 18 / 19 — but
   the earlier two passes were not uniform, so verify rather than trust that.) Identify the slides by what they contain, not by number:
   - **17 (opening number) and 23 (the meter) are both number walls.** If one
     goes, cut 17 and fold its one line — *half my sessions took two messages* —
     into the 16 divider.
   - **19's distribution chart is the most technical thing in Part 2.** The slide
     still lands with just `91.4%` plus the six-cell single-session block.
   - **22's A–L twelve-cell grid** is the likeliest "too much text" complaint.
     It survives as the `915` number plus the three K-rule cards.
   - **21's word wall is not meant to be read.** Say so out loud — *the point of
     the left column is that you can't read it* — or it reads as a slide that
     failed.

3. **Output style.** The original tip list said "/eli5 推薦, output style", but
   **no output style is configured** — `~/.claude/settings.json` has no
   `outputStyle` key and `~/.claude/output-styles/` does not exist. Either drop
   the mention or configure one before the talk. Slide 21 currently only claims
   `/eli5`, which is true.

4. **`graph engineering` is never defined in the body.** The term appears only
   in the title, the `<title>` tag and the footer. The closest thing to a
   definition arrives at s11 (CH2's wrap-up): 「會寫 skill，你是寫功能的人；會用
   pattern 把 skill 串成圖跟迴圈，你才是 loop / graph engineer」 — which is "who
   you become", not "what the discipline is", and it comes very late. The cover
   subtitle states the idea without naming the term. Cheapest fix on the table:
   put a one-line definition immediately before that s11 sentence. Rejected:
   putting it on S05, which would displace the copy that page needs.

5. **Pattern names are glossed inconsistently.** Of the six, only Pattern 3
   carries a Chinese gloss (`Adversarial verification — 雙審 panel`); the other
   five are bare English. Either gloss all six or drop that one.

6. **S04's h2 and §1's 敘述 describe the same relation with opposite words.**
   S04 says 「每一層都在解決**下一層**留下的問題」 (physically true — the staircase
   climbs from PROMPT to GRAPH, each rung solving what the rung BELOW left) while
   the outline row and §1's divider say 「每層都在解決**上一層**留下的問題」
   (narrative "the previous one"). Both are defensible Chinese, but side by side
   they read as a contradiction. Suggested fix: use 「前一層」 in all three places,
   which is unambiguous whichever way you read the stack.

7. **Whether to put the graph-engineering verdict on stage.** The research
   produced a 16-criteria scorecard (13 met / 2 partial / 1 absent, plus one
   enterprise-governance criterion that does not apply to a personal harness).
   It is drawn as plate 07 of the eli5 artifact but is **not** in the deck. It
   would earn the title hard; it also invites "who decided these criteria".

---

## Open work — an agent can just do these

- [ ] **Rewrite `speaker-notes.md`'s S5 section — it describes a slide that no
      longer exists.** The notes are written for a TWO-PANEL slide ("Left panel
      (LOOP)" / "Right panel (GRAPH)", then "point at the upper node — the small
      diagram inside is that whole left panel"). S05 is now ONE stacked figure:
      the GRAPH flowchart on top, one node zoomed open below. Three specific
      things in the notes no longer land: the left/right panel walkthrough, the
      instruction to point at a nested node, and the takeaway card (the notes say
      「節點之間互相看不到」 but the slide's own bottom line is now 「框外面的路是你
      畫的；框裡面要不要再繞一輪，是它當場決定」). What still holds and should be
      kept: the two colour meanings (淺藍 = 機器當場決定，琥珀 = 你事先決定 — never
      say "sky"/"amber" on stage), the insistence that the loop's exit be a REAL
      test rather than asking the model whether it is done, and the cut material
      (three ways to stop, where the approval gate goes, `/ggx-pr-review-loop`).
      Do NOT invent new stage script beyond re-aiming these at the new figure.

- [ ] **Add the closing beat.** The deck currently ends Part 2 on the meter with
      no honest gap named. Part 1 already does this once (Tournament is marked
      `NOT PRESENT`); the system-level version is the stronger close:

      > 圖我畫得出來，判準十六條我對上十三條。但那些圖的外面還缺一個外殼：
      > `/loop` 不是我寫的，`on-duty` 我停掉了，24 小時那份還是計畫。
      > **畫圖我會了，讓它整夜自己跑還沒。這就是下一場。**

      Evidence for every clause is in "Facts worth not re-deriving" below. This
      also hands the fifth session its subject.

- [ ] **Refresh the measured numbers** if the talk slips past early September.
      Every figure has a stated window; the commands are below. The herdr
      snapshot on slide 14 is explicitly "right now, 2026-08-27 14:57 CST" — it
      is the one that ages worst and the one worth re-taking on the day.

- [ ] **Finish `speaker-notes.md`.** CH1 (S3–S5) is written and follows the
      2026-06 session's shape. CH2 (S7–S11) is written but lives in the DECK, in
      each slide's own `<details class="notes">` block — that is deliberate, do
      not copy it into this file. CH3 (S13–S19) and CH4 (S20–S22) are still empty.
      CH1's notes carry three things that are now ONLY spoken, so they must not be
      dropped: the "most tasks don't need the top of the stack" quote, the three
      ways a loop can stop, and `/ggx-pr-review-loop`'s real exit condition. Keep
      the `## SN · <slide tag> / <zh label>` heading form so the next renumbering
      is a find-and-replace instead of a re-read.

- [ ] **Consider two held-back Part 2 candidates.** Both are good and both were
      cut for pulling the section away from its "one person, a fleet" spine:
      - **Bash is 66% of all tool calls** (29,670 of 44,861 in main sessions;
        Linear MCP is ~2,700 combined). The leverage is the 48-entry Bash
        allowlist in `settings.json` plus `defaultMode: auto`, not installing
        more MCP servers. Counter-intuitive and immediately actionable.
      - **The harness grew code and tests.** 402 commits to gogox-claude since
        the June talk; it is now 31,711 lines of markdown prompt + 20,870 lines
        of py/js/sh + 6 pytest files. Thesis: *prompts written far enough start
        growing scripts that need testing — at that point a skill is not a
        prompt any more.* Slots in naturally after slide 18.

---

## Facts worth not re-deriving

### Scope of every number

Two different windows, and mixing them up produces wrong slides:

- **Behavioural stats** (messages, tool calls, sessions, context peaks,
  `/loop` counts) — **2026-07-01 → 08-27 only.** Transcripts older than that
  have been pruned from `~/.claude/projects/`. Do not present these as
  four-month figures.
- **Cost / token / session totals** — **2026-04-17 → 08-27**, from
  `~/.claude/metrics/session_metrics.csv` (1,359 rows, one per session, appended
  by `/session-metrics`).
- **The herdr snapshot** — a single live moment, not an average.

### Numbers on the deck that are WRONG — re-measured 2026-08-28

The re-measurement below replaced an earlier count that had two defects: it
double-counted subagent transcripts through an overlapping glob, and it treated
injected agent prompts and slash-command echoes as human typing. The correct
human-typing filter is `promptSource in ('typed','queued')` on main-session
`type == "user"` records, with `isMeta` / `isSidechain` / `isCompactSummary`
dropped. Tool calls must be summed over THREE non-overlapping tiers:
`*/*.jsonl`, `*/*/subagents/*.jsonl`, `*/*/subagents/workflows/*/*.jsonl`.

| where | deck says | measured | note |
|---|---|---|---|
| cover hook 1 | `33×` tool calls per typed message | **41.1×** (August alone 42.0×) | 1,612 typed / 66,236 tool calls |
| cover hook 2 | `1/3` of sessions I was never in | **76.6%** | 647 of 845 main sessions have zero typed input; sessions with `total_turns == 0` in the metrics CSV are only 3.0%, which is a different question |
| cover hook 3 | `91.4%` never compacted | **95.4%** | 39 of 845 sessions hit compact — and the speaker already cut the compact framing as non-factual, so this hook has no slide behind it |
| slide 14 title | `2,163 則訊息` | **1,612** | the 2,163 count included injected agent prompts and command echoes |

Two scoping limits that must be said out loud if any of these go on stage:
transcripts only reach back to **2026-07-20** (older ones are pruned), so the
per-session shares cover July–August only, not the four months the cost chart
covers. And the cover currently links its three hooks to slides that no longer
frame those numbers.

Metrics that were tried and DO NOT survive scrutiny — do not resurrect them:

- **Messages per ticket (8.31 → 2.98).** Two independent defects. 69% of CAF
  inputs (682 of 992) live in the trunk checkout, not in per-ticket worktrees,
  so a worktree-only scan misses most of them — and the July sample is
  self-selected, since transcripts start 7/20 and only 16 of July's 97
  PR-opening tickets are measurable at all. A ±25-record attribution window
  also flips the sign, which means the metric is not robust.
- **Tool calls per turn doubling.** That is the model, not the graph:
  opus-4-6/4-7/4-8 measure 6.4/6.3/6.0/5.8, and opus-5 was already 12.7 in July
  before the workflow work landed.
- **PR size** and **ticket volume** — both explicitly rejected by the speaker as
  comparison indicators.
- **"Hand-typed review text" as a before/after contrast.** It does not exist:
  April PR comments already carried skill-generated `# Internal code review`
  reports, so review automation predates the workflow work by three months.

The one clean, unconfounded whole-period story is **gogox-claude's own git
history**, measured 2026-06-03 (the June talk) vs 2026-08-28:

| | 2026-06-03 | 2026-08-28 |
|---|---|---|
| prompt files (`commands/`, `skills/` `.md`) | 55 | 84 |
| script files (`.sh` / `.py` / `.js`) | 7 | 77 |
| workflow graphs (`.workflow.js`) | 0 | 5 |
| agent definitions | 15 | **15** |

Agent definitions did not move while the orchestration grew elevenfold — that
is the "from prompt to graph" thesis in four rows, and it needs no baseline
argument.

### How to re-measure

```bash
# human-typed messages vs tool calls (exclude tool results, system reminders,
# task notifications and command echoes — otherwise the count is ~20x too high)
#   -> 1,612 typed/queued human messages / 66,236 tool calls / 76.6% of main
#      sessions with zero typed input. The 2,163 / 70,815 / 33% figures still on
#      the slides are WRONG -- see the table above.
#   filter: type==user, promptSource in (typed,queued), not isMeta/isSidechain/
#      isCompactSummary; tool calls summed over the three non-overlapping tiers

# tool histogram, main sessions vs spawned agents
cd ~/.claude/projects && grep -roh '"type":"tool_use","id":"[^"]*","name":"[^"]*"' \
  --include='*.jsonl' . | sed 's/.*"name":"//; s/"$//' | sort | uniq -c | sort -rn

# context peak per session = max(input + cache_read + cache_write) over its requests
#   -> median 178k / p90 474k / max 753k. The 91.4%-never-compacted figure is
#      wrong: 806 of 845 main sessions (95.4%) never compacted.
#   compaction shows up as "isCompactSummary" lines

# monthly cost / tokens / sessions
python3 -c "import csv,collections; ..."   # group session_metrics.csv by timestamp[:7]

# the single extreme session on slide 15 (4.5h, 74.8M tokens, 0 compactions, \$143)
#   find it by sorting session_metrics.csv on total_tokens rather than by ticket id

# live workbench snapshot for slide 14
herdr api snapshot | python3 -c "import json,sys; d=json.load(sys.stdin)['result']['snapshot']; ..."

# the rulebook on slide 18
wc -l -c ~/.claude/CLAUDE.md && grep -c '^### [A-Z][0-9]' ~/.claude/CLAUDE.md
```

### The 13 / 2 / 1 scorecard

16 criteria distilled from the four sources below. **13 met, 2 partial, 1
absent**, plus one enterprise identity-governance criterion marked n/a.

- Fully met: topology (5/5), node isolation (4/4), handoff (2/2), plus
  execution-graph recording and approval gates from the governance group.
- Partial: per-node cost/latency attribution (session-level exists,
  per-node does not); correlation identifiers (`runId` + `agentId` + `phase`
  exist, no unified cross-gateway token).
- Absent: per-graph / per-node budget. `budgetAllowsRetry()` in
  `dispatch-fanout.workflow.js` says so in its own comment — *"the workflow
  harness here exposes no `budget` global (confirmed: grep found none)"*.

**An earlier draft of this said 12 met. That was an arithmetic slip; the count
is 13.** If a number other than 13 appears anywhere, it is stale.

### The unattended gap — why the closing beat is honest

- `/loop` is **Claude Code's own skill**, not in gogox-claude. Used 97 times
  (most-used command); usually `/loop /ggx-dispatcher`.
- `ScheduleWakeup`: 133 calls, median wait 40 minutes, 77% over 30 minutes.
- `/ggx-on-duty` — the only always-on supervisor loop — is **DEPRECATED and
  PAUSED since 2026-06-23**, and its analyze leg is dead (would fail on every
  tick, since the skill it called was merged into `/ggx-investigate`).
- `plans/ggc-24h-local-loop.md` (drafted 2026-08-01, 138 lines) is **a plan, not
  shipped**, and explicitly does not revive on-duty.

So: the graph rung is reached; what is missing is **unattended operation**,
which is a different axis from which rung of the stack you are on. Do not
re-frame this as "loop engineering is missing" — the sources are explicit that
graphs absorb loops rather than replace them.

### Decisions a fresh session should not silently undo

- **SUPERSEDED 2026-08-28 by the speaker:** the vehicle no longer opens the talk.
  CH1 (the stack) now comes first so the vocabulary lands before anything else;
  the vehicle and the map open CH2. The old note read: *"the vehicle opens Part 1
  deliberately, so the concrete thing lands before any abstraction."*
- **The stack slides (now 04–05) sit BEFORE the six patterns**, so the patterns
  arrive with the vocabulary already in place. They are not adjacent to the
  patterns, so the hand-off is deliberately vague about distance: 05 closes on
  「最上面那一層，等一下會展開成六個 pattern」 (NOT "the next six slides", which was
  wrong once CH2's divider, vehicle and map moved in between). 07's matching
  closing line — "each of the next six slides is one shape this diagram can
  take" — was REMOVED by the 2026-09-01 CH2 condense, because the six patterns
  now sit on two slides. 05's line is the only hand-off left; moving 05 breaks it.
- **04 and 05 are ONE FIGURE EACH, and the figures are the argument** (rewritten
  2026-08-29 at the speaker's instruction: two pages, image-heavy, minimum text,
  FAANG-style). Two things inside them are load-bearing and easy to destroy by
  "tidying":
  1. **04's columns are drawn as stacked slabs.** GRAPH stands on five, PROMPT
     on one. That is the entire proof of the closing rule; flatten the columns
     into five equal boxes and the slide contradicts its own conclusion (which
     is exactly what the old table did).
  2. **05's nesting is PROMPT ⊂ CONTEXT ⊂ HARNESS ⊂ LOOP ⊂ GRAPH, drawn as real
     containment.** The amber outer frame and every edge are what you drew; the
     sky LOOP node is the one place the machine decides. Do not "simplify" the
     nesting into siblings — the containment IS the claim that a graph absorbs
     the rungs below rather than replacing them.
  Both figures set fill / stroke / font-size as presentation attributes rather
  than through the old `svg .w*` class vocabulary, which was deleted: a class
  that sets `font-size` beats an attribute, and these figures need type far
  larger than those classes allowed.
- **`.bigdia`'s slide-mode height rule must stay more specific than the deck's
  default.** `body.mode-slide figure.dia svg { max-height: 42vh }` outranks a
  plain `.bigdia svg` selector (more element selectors), so the rule is written
  `body.mode-slide figure.dia.bigdia svg`. Shorten it and both figures silently
  render at 0.8 scale with no error anywhere.
- **One file, not one file per chapter.** Switching HTML files mid-presentation
  drops slide mode, resets the progress counter and shows the room a page load.
  Deep dives stay separate because nobody reads them on stage.
- **Each chapter has THREE separate strings, not one name (settled 2026-08-28).**
  The speaker restructured chapter copy into three columns, and they are
  deliberately DIFFERENT text — do NOT "fix" them into agreement:
    1. **章節名稱 / chapter name** — English, lives in the marker
       `§N · <name>`, uppercased by CSS. Appears in the outline's left column
       (`.chlist .n`) and in the divider's `chapter-tag`. These two must match
       each other exactly.
    2. **標題 / title** — the divider's `h2` and the outline row's `.chlist .t`.
       These two must match each other exactly.
    3. **敘述 / description** — the divider's `chapter-sub` and the outline
       row's `.chlist .d`. These two must match each other exactly.
  So the rule is three PAIRS, not one shared name. An earlier version of this
  file demanded the same words everywhere; that was superseded. Renaming a
  chapter means editing the matching pair in both places in the same edit.

  Current table (speaker-approved 2026-08-28):

  | | 章節名稱 | 標題 | 敘述 |
  |---|---|---|---|
  | §1 | Five levels | from prompt to graph | 每層都在解決上一層留下的問題 |
  | §2 | Dynamic workflow | 誰先跑、誰接手、誰決定 | Anthropic cookbook 的六種組法 + GGC 實際用法 |
  | §3 | The toolkit | 工具推薦 | 加速溝通，管好 session |
  | §4 | Conclusions | **placeholder** | **placeholder** |

- **§2's 標題 pulls the cover's own phrase down into the chapter (chosen by the
  speaker 2026-08-28).** It reads 誰先跑、誰接手、誰決定 / "Who runs first, who takes
  over, and who decides" — word-for-word the promise the cover subtitle makes, so
  the cover states it and §2 delivers it. Two rejected alternatives, for the
  record: 「每個任務一套 harness」 (cites Anthropic's article title but `harness` is
  jargon) and 「如何讓 agents 合作」 (the speaker's own first idea; plainer, but
  measured against CH2's slides it misses two things — 08「計畫從 Claude 的腦袋裡，
  搬進一支 .js」 is about moving orchestration into code, not cooperation, and
  `Loop until done` can be one agent re-running). The chosen wording covers all
  nine CH2 slides: 誰先跑 = 08's .js encodes the order; 誰接手 = 09's four-stage
  relay and fan-out's synthesize step; 誰決定 = routing (10), the two-judge panel
  (12), the filter (13), the tournament winner (14) and the loop's exit (15).
  The EN version carries an explicit `<br>` after the second comma — without it
  the browser breaks mid-phrase at "who takes / over" (measured at 1440×900).
- **§3's content does not match its copy yet — OPEN.** §3's 標題 is 「工具推薦」
  and its 敘述 is 「加速溝通，管好 session」 (the speaker swapped the two on
  2026-08-28: the recommendation is the point, the two benefits are the
  supporting line). The speaker named the tools: **typeless, herdr, eli5**, with the
  stated reasons being (a) faster communication with the AI and (b) better
  session management. But CH3's seven existing slides (18 量測 / 19 同時開 18 個 /
  20 一題一 session / 21 誰開的 session / 22 圖扛機制 / 23 被糾正一次 / 24 四個月
  量表) contain **no slide about any of those three tools**. So this is a content
  gap, not a rename: either new tool slides go in, or some of the existing seven
  move to another chapter. The speaker has not decided the direction yet.
- **§4's 標題 and 敘述 are deliberate placeholders (speaker: 先放 placeholder
  未來再決定).** The divider h2 keeps 結語 with a `.tbd` `TITLE TBD` badge and
  carries a `chapter-sub` that says so; the outline row's `.d` reads 敘述待定.
  Drop both markers when the real copy lands — CH4's body is still a skeleton,
  so this line should be written after the content, not before it.

- **Bilingual convention, stated by the speaker 2026-08-31.** Proper nouns stay
  English; ORDINARY vocabulary must carry a `.zh` / `.en` pair. A string with no
  pair is a defect unless it is a proper noun. Audited 2026-08-31 — the only
  unpaired strings left are legitimate: the five cookbook pattern names
  (`Classify-and-act`, `Fan-out-and-synthesize`, `Generate-and-filter`,
  `Tournament`, `Loop until done`), `Q & A`, and six `.cite` lines that hold file
  paths and URLs. §1's 標題 was the one real violation and is now
  `從 prompt 到 graph` / `from prompt to graph` — `prompt` and `graph` stay
  English inside the Chinese string.
- **§1's 標題 keeps lower case** (`從 prompt 到 graph`, not `從 Prompt 到 Graph`).
  The deck's own title is Title Case; §1's is deliberately not, so it reads as a
  phrase rather than a second title.
- **S05's copy, settled 2026-08-31.** 標題 `graph 不是新東西 — 它只決定兩件事：誰先
  誰後、結果怎麼匯合`; the bottom insight `框外面的路是你畫的；框裡面要不要再繞一輪，
  是它當場決定`. Three rejected candidates and why: `圖是你畫的；攤開任何一個方塊，
  五個字就是它的零件` (came with `_preview-05d`; describes the figure instead of
  making a claim), `graph engineering 是把 agent 如何協作定義出來` (the figure's
  lower half is ONE call — the word "agent" appears zero times in it — and the
  claim already appears on the cover subtitle and again as §2's 標題), and
  `不是五個階段 — 是同一部機器上的五個位置` (answers a question nobody asked;
  S04's staircase already says 累加，不是取代). `匯合` rather than `整合` because
  the figure's own node is labelled 匯合後 / merged.
- **Do not let a pasted SVG keep generic marker ids.** Porting `_preview-05d`'s
  figure in verbatim would have introduced a second `marker id="e1"`; s13 already
  defines one (purple `#a78bfa`). Duplicate SVG ids resolve to the FIRST in
  document order, so s5 would have silently repainted the purple arrowheads of
  the Tournament figure grey (that figure lived on s13 then; since the
  2026-09-01 CH2 condense it sits inside the s10 grid, still owning `e1`).
  S05's markers are `r5a`–`r5d`. Related pre-existing smell: `marker id="g-a"` is
  defined eight times inside s21 — harmless only because all eight are the same
  green, so a future colour change there will not do what it looks like.
- **Marker grammar is the 2026-06 deck's (restored 2026-08-28).** The marker is
  `§N · <章節名稱>`, uppercased by CSS — NOT a bare `§N` (that was a wrong
  over-correction; the speaker asked for the 2026-06 form). `.slide-range` also
  follows 2026-06: `S3 – S6`, spaced en dash, no zero padding. The outline's left
  column is a fixed **`200px`** track with `white-space: nowrap`, sized to the
  longest marker measured in the browser (`§2 · DYNAMIC WORKFLOW` = 194px at
  13px mono / 1.4px tracking). If a chapter name gets longer, re-measure with the
  track temporarily set to `max-content` instead of letting it wrap.
- **Chapter identity colours follow the 2026-06 deck's vocabulary** (added
  2026-08-28 at the speaker's instruction to reference that deck): `§1` sky,
  `§2` violet, `§3` amber, `§4` rose. Each divider carries `divider-slide <c>`
  plus `chapter-tag <c>`; the h2 gradient follows. The outline (s2) uses the same
  `§N` markers and per-chapter colours but is laid out **top-to-bottom as a list**
  (`.chlist`), NOT as cards — the speaker rejected a card grid as "像網站".
  Dividers are tag + h2 + ONE line; do not re-add a second sub or a meta row.
- **CH2 is figure-first, settled 2026-09-01 after five review rounds.** Every
  CH2 page follows the 04/05 template: slide tag, an h2 that states a claim, ONE
  large figure, one `.rungnote` insight line, cite. No lede, no bullet lists, no
  prose blocks. Every sentence taken off a slide was MOVED into that slide's
  `<details class="notes">`, not deleted — the notes are the script, so do not
  "tidy" them by cutting. Four things inside this are load-bearing:
  1. **Colour on 08 means PATTERN, never stage.** The four stage frames use
     `.c-neutral` and `.sarrow` is grey. The page's whole argument is that each
     stage's dot row maps back to the six names above it; recolour the frames and
     the dots stop meaning anything. This was the speaker's first CH2 note.
  2. **08's cards are the ORIGINAL card design on purpose.** A hand-drawn SVG
     replacement was built and rejected — the speaker wants the cards, with the
     bottom dot row that pops up on hover and the in-card deep-dive link (now a
     bare `↗`, the label kept as `title`). The cards scale up under
     `body.mode-slide`; without that block the slide renders at 437/900 and reads
     as a footnote.
  3. **09 / 10 are 3×2 grids: post figure on top, GGC figure below.** The inline
     GGC SVGs cannot ride the deck's `<img>` lightbox, so there is a SECOND
     lightbox, `#lbf`, that clones `svg, img` out of any `.pcfig`. Both figures
     and both lightboxes must survive together. `.pchead` has `min-height: 56px`
     purely so the two figure rows line up across columns — Pattern 3's glossed
     name is the only two-line heading, and it sets that number.
  4. **11's two rows are separate arguments.** The purpose row (six patterns
     grouped into three jobs) and the thesis row (`Skill + Pattern = Workflow`)
     are divided by the deck's own `.blk` label. Remove it and the page reads as
     one 3×2 table, which is exactly the misreading the speaker flagged.
  Deliberately removed on this pass: 07's `.wfjs` code example, 08's lede and its
  two `.pbhead` labels, 08's roster glosses, the six per-cell sentences on
  09 / 10, and 11's Anthropic five-blocks derivation. All of it is in the notes.
- **Three copy fixes landed with the CH2 pass (2026-09-01).** Two were typos that
  had been live in 07's figure: 「計畫在他腦袋**裕**」 → 裡, and
  「**趟圈**、分支、中間結果都在這」 → 迴圈 (the EN beside it already said "the
  loop"). The third was a zh/EN mismatch: the left panel's label read
  「一條 FLOW」 (a count) against "ANY ORDINARY FLOW" — it is now 「普通 FLOW」.
- **All pages share `tech-sharing-lang` / `tech-sharing-mode`** in
  localStorage, so the language choice survives a hop into a deep dive. Three
  different keys used to be the bug.
- **Charts here never encode a category by colour.** The deck's five accents
  fail an adjacent-pair CVD check (green↔rose, ΔE 5.8 deutan), so both Part 2
  charts are single-hue with direct labels. The two identity colours on 04/05
  (sky = the machine picks the route, amber = you picked it in advance) do pass:
  ΔE 24.0 protan / 22.9 tritan.
- **Never print the palette names on a slide.** `sky` and `amber` are Tailwind
  variable names (`sky-300` #7dd3fc, `amber-400` #fbbf24) and mean nothing to a
  room — the old 05 had a legend row reading "SKY / AMBER" and the speaker
  caught it on 2026-08-29. The swatch carries the colour; the words carry the
  meaning. 05 now has no legend row at all: the two in-figure labels
  (外面的路：你畫的 / 裡面怎麼繞：機器的事) do that job in place.
- **Slides 04–05 exist because the wrap-up (15) tells the audience they become a
  graph engineer and nothing else ever defines it.** 05 is where the definition
  now lives (explicit topology; every edge is one you wrote). If it is cut, that
  wrap-up line has to go too.
- **The hub's static card and its `SESSIONS` array had drifted apart** — the card
  said `23 slides` while the array said `27`. Both were set to `26` on
  2026-08-29 and to `22` on 2026-09-01. They are two separate edits in `../index.html`; the file's own
  comment says to make them together, and nothing enforces it.

---

## Pointers

- **Deck**: `index.html` · **speaker notes**: `speaker-notes.md` (CH1 only)
- **Deep dives**: `details/{five-rungs,investigator,demo,pr-review-loop}.html`.
  `five-rungs.html` is CH1's appendix (added 2026-08-29) and is linked from both
  04 and 05; the other three back-link to `#s8`, whose label became
  "08 · The Pattern" on 2026-09-01 (it read "08 · The Map" before, and `#s5`
  with "05 · The Map" before that — broken by the four-chapter restructure).
- **Hub**: `../index.html` — the card and the `SESSIONS` array must be edited together
- **eli5 explainer** (8 pictures, zh-Hant), the source for slides 04–05:
  https://claude.ai/code/artifact/e46b0555-64e5-426a-b1d5-c4ce47a4b37a
  Plates 3 (harness = engine + chassis) and 7 (the scorecard) were **not** used
  in the deck and are still available.
- **Taxonomy sources** — four independent write-ups that agree on the ordering
  (prompt → context → harness → loop → graph, cumulative) and on loops being a
  simple case of graphs:
  - Analytics Vidhya, "Agent Harness vs Loop vs Graph Engineering"
  - Sarthak AI, "Harness, Graph and Loop Engineering"
  - TrueFoundry, "Graph Engineering for Multi-Agent Systems"
  - LangChain, "3 Years of Graph Engineering with LangGraph"
- **Do not repeat the June talk.** It already covered cache TTL cost,
  `/session-metrics`, composing small skills, and "don't chase 100%
  automation". Slide 19 is the deliberate successor to the cache tip: same
  subject, but it states the practice ("one topic, one session"), NOT a claim
  about compaction. The earlier framing -- "compaction went from routine to a
  smell" -- was REMOVED on 2026-08-28 as not factual; do not reintroduce it.
