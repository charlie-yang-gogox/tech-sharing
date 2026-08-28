# 2026-09 · From Prompt Engineering to Graph Engineering — open items

Working notes for whoever picks this up next, including a future session with no
memory of how the deck got here. Everything below is either an open decision, a
piece of work, or a fact that would be expensive to re-derive.

**Deliverable**: `index.html` — one file, **27 slides: FOUR chapters + a closing Q&A** (restructured
2026-08-28 from the old two-part shape), bilingual (zh-Hant default / EN toggle),
scroll + slide modes. `details/*.html` are appendix deep dives that
link back to `#s5`.

---

## Where it stands

| | |
|---|---|
| Title | **Settled.** 從 Prompt Engineering 到 Graph Engineering |
| Date | **Placeholder** — `2026-09-01`, hero carries a `DATE TBD` badge |
| CH1 · 03–06 | **Written.** Divider + the stack + loop rung + graph rung. **Still to do: condense 04–06 into 2 slides, presentation style (image-heavy), each rung shown solving the previous rung's problem.** |
| CH2 · 07–16 | **Written.** Divider + vehicle + map + six patterns + wrap-up |
| CH3 · 17–24 | **Draft.** Divider + seven tips slides; density still open |
| CH4 · 25–26 | **Skeleton only.** Divider + a three-block placeholder. Material: CH2's wrap-up, CH3's meter, and the closing beat below. Do NOT invent numbers there. |
| Speaker notes | **Missing.** The 2026-06 session has `speaker-notes.md`; this one has none |

---

## Open decisions — these need the speaker, not an agent

1. **The date.** Once the slot is booked: replace `2026-09-01` and drop the
   `DATE TBD` badge in the hero, and update BOTH the static card and the
   `SESSIONS` array in `../index.html` (the file says so in a comment).

2. **Part 2 density.** The section is 8 slides and the speaker flagged wanting
   another pass. Cuts already identified, in the order I would make them:
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

4. **Whether to put the graph-engineering verdict on stage.** The research
   produced a 16-criteria scorecard (13 met / 2 partial / 1 absent, plus one
   enterprise-governance criterion that does not apply to a personal harness).
   It is drawn as plate 07 of the eli5 artifact but is **not** in the deck. It
   would earn the title hard; it also invites "who decided these criteria".

---

## Open work — an agent can just do these

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
      snapshot on slide 18 is explicitly "right now, 2026-08-27 14:57 CST" — it
      is the one that ages worst and the one worth re-taking on the day.

- [ ] **Write `speaker-notes.md`**, matching the 2026-06 session's shape.

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
        prompt any more.* Slots in naturally after slide 22.

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
| slide 18 title | `2,163 則訊息` | **1,612** | the 2,163 count included injected agent prompts and command echoes |

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

# the single extreme session on slide 19 (4.5h, 74.8M tokens, 0 compactions, \$143)
#   find it by sorting session_metrics.csv on total_tokens rather than by ticket id

# live workbench snapshot for slide 18
herdr api snapshot | python3 -c "import json,sys; d=json.load(sys.stdin)['result']['snapshot']; ..."

# the rulebook on slide 22
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
- **The stack slides (now 04–06) sit BEFORE the six patterns**, so the patterns
  arrive with the vocabulary already in place. NOTE: they are no longer adjacent
  to the patterns, so the old hand-off line ("the next six slides") needs a
  rewrite when 04–06 are condensed. 06 closes on "the six patterns
  all live on the top rung"; 08 closes on "each of the next six slides is one
  shape this diagram can take". Moving them breaks both hand-offs.
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
- **All pages share `tech-sharing-lang` / `tech-sharing-mode`** in
  localStorage, so the language choice survives a hop into a deep dive. Three
  different keys used to be the bug.
- **Charts here never encode a category by colour.** The deck's five accents
  fail an adjacent-pair CVD check (green↔rose, ΔE 5.8 deutan), so both Part 2
  charts are single-hue with direct labels. The two identity colours on 07/08
  (sky = the machine picks the route, amber = you picked it in advance) do pass:
  ΔE 24.0 protan / 22.9 tritan.
- **Slides 06–08 exist because the wrap-up (15) tells the audience they become a
  graph engineer and nothing else ever defines it.** If those slides are cut,
  that line has to go too.

---

## Pointers

- **Deck**: `index.html` · **deep dives**: `details/{investigator,demo,pr-review-loop}.html`
- **Hub**: `../index.html` — the card and the `SESSIONS` array must be edited together
- **eli5 explainer** (8 pictures, zh-Hant), the source for slides 06–08:
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
