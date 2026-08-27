# 2026-09 · From Prompt Engineering to Graph Engineering — open items

Working notes for whoever picks this up next, including a future session with no
memory of how the deck got here. Everything below is either an open decision, a
piece of work, or a fact that would be expensive to re-derive.

**Deliverable**: `index.html` — one file, 23 slides, bilingual (zh-Hant default /
EN toggle), scroll + slide modes. `details/*.html` are appendix deep dives that
link back to `#s5`.

---

## Where it stands

| | |
|---|---|
| Title | **Settled.** 從 Prompt Engineering 到 Graph Engineering |
| Date | **Placeholder** — `2026-09-01`, hero carries a `DATE TBD` badge |
| Part 1 · slides 03–15 | **Written.** Vehicle → map → the stack → loop → graph → six patterns → wrap-up |
| Part 2 · slides 16–23 | **Draft.** Content is in and reviewed once; density and order are still open |
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

### How to re-measure

```bash
# human-typed messages vs tool calls (exclude tool results, system reminders,
# task notifications and command echoes — otherwise the count is ~20x too high)
#   -> 2,163 human messages / 70,815 tool calls / 33% of sessions with zero human input
#   the working script pattern is in the git history of this file's commits

# tool histogram, main sessions vs spawned agents
cd ~/.claude/projects && grep -roh '"type":"tool_use","id":"[^"]*","name":"[^"]*"' \
  --include='*.jsonl' . | sed 's/.*"name":"//; s/"$//' | sort | uniq -c | sort -rn

# context peak per session = max(input + cache_read + cache_write) over its requests
#   -> median 178k / p90 474k / max 753k; 91.4% of 488 sessions never compacted
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

- **The vehicle (04) opens Part 1**, deliberately, so the concrete thing lands
  before any abstraction. Do not move the taxonomy in front of it.
- **The stack slides (06–08) sit BEFORE the six patterns**, so the patterns
  arrive with the vocabulary already in place. 06 closes on "the six patterns
  all live on the top rung"; 08 closes on "each of the next six slides is one
  shape this diagram can take". Moving them breaks both hand-offs.
- **One file, not one file per chapter.** Switching HTML files mid-presentation
  drops slide mode, resets the progress counter and shows the room a page load.
  Deep dives stay separate because nobody reads them on stage.
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
  subject, new claim (1M context means compaction is now a smell).
