# 2026-09 · From Prompt Engineering to Graph Engineering — open items

Working notes for whoever picks this up next, including a future session with no
memory of how the deck got here. Everything below is either an open decision, a
piece of work, or a fact that would be expensive to re-derive.

**Deliverable**: `index.html` — one file, **20 slides: FOUR chapters + a closing Q&A** (restructured
2026-08-28 from the old two-part shape; CH1 condensed from four slides to three on
2026-08-29; CH2 condensed from ten slides to six on 2026-09-01; CH3 rewritten from
eight slides to four on 2026-09-04; CH2 gained one slide on 2026-09-07; CH4's
skeleton became two written slides on 2026-09-08 — each of those passes renumbered
the whole deck), bilingual (zh-Hant default / EN toggle), scroll + slide modes.
`details/*.html` are appendix deep dives; `five-rungs.html` is CH1's and is linked
from 04 and 05, the other three back-link to `#s8`.

---

## Where it stands

Slide numbers below are the LIVE `data-num` values after the 2026-09-07 CH2
addition. Anything quoting other numbers is stale — verify against `index.html`.

| | |
|---|---|
| Title | **Settled.** 從 Prompt 到 Graph Engineering |
| Date | **Placeholder** — `2026-09-01`, hero carries a `DATE TBD` badge |
| Cover (01) | **OPEN — item 1 below.** Needs a fine-tune pass. All three hooks are mis-measured; the `1/3` one links to `#s17`, which is now CH4's real divider and still does not frame that number; the date badge is up. CH4 now owns two figures a hook could use (`0 → 5`, and `8 / 494` which is off-slide by choice) |
| Outline (02) | **Settled.** Copy and ranges match the live deck (CH2 S6–S12, CH3 S13–S16, CH4 S17–S20) |
| Chapter copy | **Settled.** 章節名稱 / 標題 / 敘述 per chapter; §4's placeholders were replaced 2026-09-08 (換到了什麼 / 兩件事 — 成果，以及一串 skill 跟一張 workflow 差在哪) |
| CH1 · 03–05 | **Done 2026-09-08.** Divider + the stack + the top rung (condensed 2026-08-29, both content pages figure-first), and all three now carry their script in the deck the way CH2 does — item 2 shipped. `speaker-notes.md` is a pointer index only |
| CH2 · 06–12 | **Done.** Divider + vehicle + pattern + two pattern grids + **dynamic workflows (S11, added 2026-09-07)** + wrap-up. Figure-first, and every cut sentence lives in each slide's own `<details class="notes">` — this is the model CH1 has to match |
| CH3 · 13–16 | **Done 2026-09-04.** Divider + Typeless + herdr + /eli5, figure-first, notes in the deck. The previous seven tips slides were cut, not moved to CH4 (git still has them). The fourth concept that was briefly parked here went to CH2 instead — see item 5 |
| CH4 · 17–19 | **Done 2026-09-08 — item 4 shipped.** Divider + `18 / WHAT MOVED` (the result) + `19 / SKILLS · WORKFLOW` (the argument). Both carry their script in the deck. Open for fine-tuning, not for re-litigating: see item 4 |
| Q&A · 20 | **Done.** Closing divider ported from the 2026-06 deck |

---

## The open items — set by the speaker 2026-09-01; items 5 & 6 added and shipped 2026-09-07

Items 1 and 4 are still open. Items 2, 3, 5 and 6 are kept as shipped records —
they hold decisions that a fresh session would otherwise undo.

### 1. Fine-tune the cover (S1)

Not just the numbers — the whole page gets a pass. What is known to be wrong:

- **All three hooks are mis-measured.** `33×` → 41.1×, `1/3` → 76.6%, `91.4%`
  → 95.4%. The measured table is under "Numbers on the deck that are WRONG".
- **Two hooks have no slide behind them any more.** Hook 3's compact framing was
  cut as non-factual on 2026-08-28. The `href` targets (`#s13` / `#s16` / `#s15`)
  were written for the pre-condense deck and were **not** retargeted when CH3
  shrank on 2026-09-04; they land on Typeless / the CH4 divider / /eli5. The
  2026-09-07 renumber shifted them to `#s14` / `#s17` / `#s16` so they keep
  landing on those same three slides — that was preservation, NOT a fix.
  Do not silently re-point them at better slides; that decides the open question.
- **The date badge.** `2026-09-01` + `DATE TBD` both come down once the slot is
  booked; the hub's static card and its `SESSIONS` array change in the same pass.

Still undecided and the speaker's call: **封面真正要用的方案待定** — whether the
three-hook shape survives at all, or the cover carries different numbers, or
none. Do not silently re-point the hooks at new slides as a "fix"; that decides
the question by accident.

### 2. CH1's speaker notes are in the deck — SHIPPED 2026-09-08

S3 / S4 / S5 each carry a `<details class="notes">` block, same markup and same
bilingual `zh` / `en` span shape as CH2's. Verified in a browser: visible in
scroll mode, `display: none` in slide mode (so they are never projected), the
EN toggle switches them cleanly, no console errors.

What landed where, and why — do not re-derive it:

- **S3 (the divider) got one too, and that is deliberate.** CH2's and CH3's
  dividers carry none, so this is one step past "the way CH2 has them": the
  divider's single line ("one line, then move; do not explain the five rungs
  here") had nowhere else to live once `speaker-notes.md` stopped holding
  prose, and dropping it was not allowed. It sits OUTSIDE `.divider-slide`, so
  the centred divider layout is untouched.
- **S4 carries everything the slide itself no longer prints**: the
  riser-by-riser walk, the strata beat ("countable: standing on the fifth step
  there are still four layers under your feet"), the two colours planted here
  and named on S5, the sources, and the "most tasks don't need the top of the
  stack" quote.
- **S5's script was RE-AIMED, not copied.** The `speaker-notes.md` version was
  written for a two-panel LOOP / GRAPH slide that no longer exists. Rewritten
  against the figure actually on the page: walk the upper GRAPH (every edge is
  yours, the dashed send-back only says a graph may have cycles), then the move
  the page is built for — open node ② and show PROMPT / CONTEXT / HARNESS /
  MODEL / the check / the feedback line that IS the loop. The three things that
  did not survive the re-aim are named in `speaker-notes.md`.
- **The takeaway swapped places.** 「節點之間互相看不到」 was the old takeaway card;
  the slide's own bottom line is now 「框外面的路是你畫的；框裡面要不要再繞一輪，是它
  當場決定」, so node isolation was demoted to a spoken point (with its "why it is
  worth money" attached) and the slide's line is what stays on stage.
- **The three cut items are kept as "only if asked"**: the three ways a loop can
  stop (only C is loop engineering), `/ggx-pr-review-loop`'s real exit condition
  (review clean + no unresolved discussion, `--max-rounds=5` as insurance, a
  timed-out round does not count), and where the approval gate goes. None was
  dropped.
- **Decided here: `speaker-notes.md` is now an INDEX, not a script.** Every
  chapter's script lives in its own slide's notes block; the file says which
  slide holds what and keeps no second copy, because two copies drift. CH1's
  prose was moved out, not duplicated — git has it. Same rule now applies to
  CH4: its script went into S18's and S19's own notes blocks on 2026-09-08, not
  back into this file.
- **It is a scaffold, not finished prose.** The speaker is expected to overwrite
  the parts they actually intend to say; the draft's job was to get every piece
  of surviving material into the right slide in delivery order.

### 3. Fine-tune CH3 — SETTLED 2026-09-04

Shipped as divider + three tool slides (S12–S15). Copy:

| | |
|---|---|
| 章節名稱 | Some tips |
| 標題 | 加快開發，管好 session / Faster work, cleaner sessions |
| 敘述 | 三個我平常會用的技巧 — Typeless · herdr · /eli5 |

The previous seven tips slides (opening number, live herdr dump, one-topic
session, who opened sessions, word-wall /eli5, rulebook, four-month meter) were
**cut**, not moved into CH4. Git still has them. CH4's skeleton still lists the
meter as material.

S15's right panel is a visual glossary of the loudest left-hand nouns (picture +
one plain sentence each), not a previous /eli5 artifact and not the pull-model
flowchart that was in the first mock.

### 4. CH4's 結語 — SHIPPED 2026-09-08 as S17–S19

Written with the speaker across five drafts. The first version answered four
questions on four pages (what it bought / how far it got / when to move one /
what is still missing) and was rejected in the speaker's words: **結論太發散，沒
有讓人有種一定要用 workflow 的感覺.** The shipped chapter answers **two**, in the
speaker's order: **(1) 目前改動後的成果，(2) skill set vs workflow and the benefit.**

**S18 `18 / WHAT MOVED`** — one figure (`0 → 5`, in the deck's `.hero-stat gold`)
plus the five migrations, each with the trigger **quoted from that script's own
file header**: dispatch-fanout (an opus judge would not spawn under a worker),
pr-resolver-batch (two fan-out mechanisms collapsed into one), ggx-investigate-batch
(the most expensive stage is independent per ticket; the report should be assembled
mechanically), ggx-demo-capture (a report that never arrived → a duplicate capture →
the dedup contract broken), ggx-chain (handoffs across three gates lived in someone's
head). An earlier draft mis-attributed the login wall to pr-resolver-batch — it is
ggx-demo-capture's; re-read the headers before editing this list.

**S19 `19 / SKILLS · WORKFLOW`** — the argument, and it is **Anthropic's, not ours**.
Both quote bands are verbatim from *Building effective agents*: the trade-off
sentence ("Workflows offer predictability and consistency…") and the chaining
sentence ("You can add programmatic checks (see 'gate' in the diagram) on any
intermediate steps…"). The table is framed as 「可預測」具體是這三件事 plus the cost
row, so it reads as the official claim itemised rather than as our inventory.

**Deliberately OFF the slides — do not put these back:**

- `14 → 14` agent definitions and `8 / 494` commits (speaker: 這兩個數字不重要,
  沒有凸顯的必要). The 「零件沒動，動的是接線」 beat survives in S18's notes.
- **Every speed multiplier.** Pooled 9.0× over 123 tickets; split it and nothing
  is demonstrable (10.0× vs 8.2×, identical lower halves at 4.2 vs 3.9, two
  different harness/model eras, and the dispatcher only picks up `ready-to-dev`).
  The honest answer lives in S18's notes; the slide keeps only the line that turns
  the null result into the argument: **我證不出它比較快 — 但沒有它，我連「快多少」都
  算不出來**.
- **The measurement appendix.** A `details/measurement.html` was drafted (method,
  the `run_stem`-not-`origin` classifier, two pre-stated exclusions, per-ticket
  tables) and then dropped on the speaker's call — not shipping, answer from the
  note.
- **Our own gate mechanics.** The `AskUserQuestion` limit and how `ggx-chain`
  splits the graph at its gates are in S19's notes only (speaker: 不要再提我們的
  做法，而是用官方論證順服聽眾). The slide answers the objection with the vendor's
  sentence and stops.
- **併發 and 脈絡** as table rows. Both are real and both are in the notes; the
  table keeps only the three the closing line names (回報 / 斷掉之後 / 帳) plus the
  cost row (人), which also makes S19 fit a projected slide — 770px against the
  774px of room at 1440×900, in line with the deck's other content slides.

**The closing beat is the speaker's own and is quoted verbatim in S19's notes.**
On the slide it is the last two sentences only; the 「判準十六條對上十三條」 clause
stays off stage because it is not independently verified (an earlier note of the
same scorecard says twelve — an arithmetic slip) and it invites 「這十六條誰定的」.
Evidence for every clause of the gap is under "The unattended gap".

The web draft that got here (five revisions, each with a record of what changed
and why) is the artifact `How Far Up the Stack`. `index.html` is now the source of
truth; the artifact is history.

### 5. Dynamic workflows — SHIPPED 2026-09-07 as CH2's new S11

The speaker's addition: **其實不一定要自己寫出一個固定的 workflow。** Built as
S11 `11 / THIS ONCE, OR EVERY TIME` and placed AFTER the six patterns, BEFORE the
wrap-up — so the room already has the pattern names when the page says the machine
can compose them for you. Everything below is settled and should not be re-litigated
without the speaker.

**What the page says.** h2 `同一件事，它組一次給你，或者你組一次跑一百次`; one
figure, two panels; insight line `當場組的解這一次；要解每一次，還是得自己組一支`.

**The order is load-bearing.** Show what it composes FIRST, name the limit SECOND.
Leading with "it designs the flow for you" turns CH2's own thesis — that you draw
the graph — into a throwaway. The slide's own comment says so; do not "improve" it.

**The example is deliberately tiny**: 把這個 PR 的六個改動檔各審一遍，再併成一份.
Two moves only — fan out, merge back. Nothing else belongs in the left panel.

**The warning has two grounds, both official, neither a preference:**
1. Every run is a **newly written** script, so "your one set" does not exist in the
   auto mode.
2. **A run takes no user input once it starts** — for sign-off between stages, each
   stage has to become its own workflow. That is why a pipeline built on human gates
   cannot be handed over whole, and it is drawn as the amber gate in the right panel.

**Naming, settled.** The feature is **dynamic workflows**. `ultracode` typed into a
prompt opts one task in; `/effort ultracode` makes it decide for every substantive
task in the session. 「Ultra Plan」 is the speaker's spoken shorthand and appears
nowhere in the product — it must not reach a slide.

**Rejected placements, for the record.** CH3 (it is a capability, not one of the three
tools, and the 敘述 says 三個) and CH4 (結語's confirmed spine is the honest-gap close;
a mechanism block there competes with the closing beat and has no room to teach). CH4
should instead carry ONE sentence inside its 對得上的 block: 困難的一次性題目交給它自己
組；要穩定、要客製，才自己畫.

**Rejected slide designs, for the record.** A "same grid drawn twice" comparison (most
crowded, and it cannot say the script survives the run) and an example-only page (the
warning existed only as text, so it lived or died on the delivery). The Tournament beat
from the third draft was kept — as a spoken line in the notes, not on the slide.

**Simplified the same day, at the speaker's request.** The figure kept only what
carries the argument; everything that read as spoken prose moved into the notes.
Off the figure: the right panel's three justification lines (中間可以停下來等人簽核 /
一個 run 跑起來就不收人的輸入 / 要簽核就得把每一段各自變成一個 workflow), the
`你寫的、review 過的` provenance label, and the whole bottom band — that band's
sentence was already the `.rungnote`, so it was saying the same thing twice.
**A mark was tried here and withdrawn as WRONG — do not bring it back.** The left
panel briefly carried **`✕ 中途不能插手`**. The speaker caught it: `No mid-run user
input` is a property of the **workflow runtime**, so it is just as true of the script
you wrote yourself and saved as `/your-command`. As a left-vs-right contrast it was
not merely misplaced, it was false, and anyone who knows the product would catch it
on stage.

**What replaced it (2026-09-07).** The mark came off, and the gate moved ONTO a seam:
`dispatch-fanout.js` → four steps → `人看過 → 才往下走` → `可以 merge 的 PR`. The
gate had been floating under the whole panel, which read as "this script pauses" — it
does not. GGC's real gate sits between the lane finishing and its output being
promoted, i.e. **between two separate runs**, which is exactly the docs' own
prescription ("for sign-off between stages, run each stage as its own workflow").
Drawn on that seam it needs no label pointing at the left panel: the left column runs
unbroken from prompt to report, so the absence of a seam IS the contrast. The real
claim is **the gate has somewhere to stand because you cut the work into stages, and
you could cut it because the composition is yours** — that sentence is in the notes,
and the notes explicitly forbid saying "it cannot pause, mine can". viewBox 396 → 344,
both panels 308 tall, both last boxes on the same baseline.

**The figure names the thing, spanning BOTH panels (2026-09-08).** The page used
`ultracode` in the prompt bar but never said what the keyword produces; the term was
only on S07, four pages earlier. So S11 now carries `DYNAMIC WORKFLOW` **above both
panels** — in S07's exact style (amber mono, 12px, 1.1 tracking, 700), so it reads as
a callback to that page rather than a new term — with the line 「兩邊都是 — 差別只在
這支腳本是誰寫的」. Spanning is the whole point: **labelling only the left panel would
repeat the withdrawn-mark error**, because `dispatch-fanout.js` is itself a saved
Workflow script and both panels run on the same runtime. The panel titles shortened
to 它寫的 / 你寫的 with their one-line claim beside them, so the page lost more words
than it gained. Implementation note: the figure body sits inside
`<g transform="translate(0,22)">` and the label above it, so no inner coordinate
moved. viewBox 344 → 366.

**Not taken, and still open: the reason-carrying insight line.** The alternative
`.rungnote` 「切得開，才有地方放人 —— 而切得開的前提是，那支腳本是你的」 was offered
and the speaker took only the naming change, so the line is still 「當場組的解這一次；
要解每一次，還是得自己組一支」. That line states the DISTINCTION but not the PAYOFF,
so "why write your own" currently lives only in the notes (形狀固定 / 你 review 過 /
切得開才有地方放閘門 / 改一次永久有效 / 不必每次再付規劃成本). Do not swap the line
in without asking — h2 must not end up saying the same thing as the insight line.

**Still owed.** The left panel is drawn from the official docs, not from a run of the
speaker's own. Every other figure in this deck traces to a file, so this is the one
page with no self-evidence. Cheapest fix: run `/deep-research` or one `ultracode` task
once and check the drawn shape (six agents + one merge) against `/workflows`. Do NOT
cite the 106 `Workflow` calls across 35 transcripts as evidence — those are the
speaker's OWN authored scripts, not auto-composed runs.

### 6. CH2's pattern pages got an on-ramp — SHIPPED 2026-09-07

The speaker's concern: the six GGC figures on S09 / S10 might be too complex for a
room to hear *how to use* the patterns. Measured before acting: those six figures
carry **12–24 Chinese labels each, ~96 across the two pages**, and in half of them the
longest line is a *comparison with the post* (「（我們加的）」/「generate 那一半沒有用到」
/「N 刻意只有 2」/「原文停在…」), i.e. second-order commentary arriving before the
first-order shape has landed.

Diagnosis, and it is not "too complex": the room is asking **"which one is mine?"**
while those pages answer **"how GGC wired it, and where we differ from the post"**.
The 2026-09-01 condense had removed the orientation layer in two places at once —
08's roster glosses AND 09/10's per-cell sentences — and kept the detail layer.

Three changes landed. **No figure was redrawn and no coordinate moved.**

1. **S08's roster carries six trigger lines** (`.pit .trig`). They are **conditions,
   not descriptions** — a description makes the room reverse-engineer the condition
   for itself. All six share one grammatical shape, which is what makes them mark out
   each other's boundaries (many of the same KIND → fan-out; many ANSWERS to one
   thing → tournament, the pair most often confused). The wording is the speaker's to
   overrule; it was written, not measured.
2. **Provenance command names demoted to `#6b7280`** — S09's four lane commands and
   the three `/port:*` stage names. They were coloured at the same visual weight as the
   pattern names, so the room read them as things to memorise. Node IDENTITIES were
   left alone (`/route` in its diamond, `dev-agent`, `ui-verify-agent`, `dev-reviewer`,
   `prescreen`) — those label which box is which.
3. **The post-comparison asides came off the figures.** The rule: *"how this shape
   works" stays on the slide; "where we differ from the post" moves out.* It turned
   out to be a deletion rather than a move — the slides' own notes already carried
   every one of them; only two sentences had to be added (Classify's ②-fallback line,
   and Loop's 「原文停在『沒有新發現』」). Two follow-ons: Generate-and-filter's now-empty
   dashed callout rect was removed, and the haiku⊗sonnet box's two remaining lines were
   re-centred in a box drawn for three.

**One deliberate deviation from the proposal.** Loop until done's guard line
(`防護：失敗集合沒變 AND 沒有任何修改`) was **kept** on the slide — only its
「（我們加的）」 attribution and its detail line moved. It is the loop's SECOND EXIT,
i.e. structure, and 「只有這個出口是「成功」」 dangles without it.

Result: ~96 labels down to ~78, and the room now gets a way in at 08 before the
evidence at 09 / 10 and the convergence at 12.

**S12's wrap-up was simplified in the same pass (2026-09-07).** The three columns
used to head each job and then LIST the patterns that do it — the fourth appearance
of the six names in one chapter, and it buried the three jobs under six proper
nouns. The names are gone from that page; each column is now the chapter title's own
question as an eyebrow (誰先跑 / 誰接手 / 誰決定) over the job in large type. h2 went
from 「六個 pattern，只做三件事」 to **「workflow 只幫你做三件事」**. The
name→job mapping moved into that slide's notes, labelled "deliberately off this
slide". The `.thesis` row underneath is untouched, and so is the `.blk` label that
divides the two arguments. `.bhead` / `.bpat` / `.bpat s` CSS went with the listing —
S12 was their only consumer; the replacements are `.bq` / `.bj`.

**Two exceptions that must survive future tidying.** Tournament's `0 / 86` stays on
S10 — it is not a difference note, it is the chapter's honest gap, and S12's wrap-up
plus S11's spoken close both lean on it. And the `.trig` lines are NOT glosses of GGC
usage; re-adding "how GGC uses it" there recreates exactly the problem this fixed.


---

## Backlog — real, but not in the open items above

Speaker's call:

1. **`graph engineering` is never defined in the body.** The term appears only in
   the title, the `<title>` tag and the footer. The closest thing to a definition
   arrives at S11: 「會寫 skill，你是寫功能的人；會用 pattern 把 skill 串成圖跟迴圈，
   你才是 loop / graph engineer」 — which is "who you become", not "what the
   discipline is", and it comes very late. Cheapest fix on the table: a one-line
   definition immediately before that sentence. Rejected: putting it on S05,
   which would displace the copy that page needs.

2. **Pattern names are glossed inconsistently.** Of the six, only Pattern 3
   carries a Chinese gloss (`Adversarial verification — 雙審 panel`); the other
   five are bare English. Either gloss all six or drop that one.

3. **S04's h2 and §1's 敘述 describe the same relation with opposite words.**
   S04 says 「每一層都在解決**下一層**留下的問題」 (physically true — the staircase
   climbs from PROMPT to GRAPH, each rung solving what the rung BELOW left) while
   the outline row and §1's divider say 「每層都在解決**上一層**留下的問題」
   (narrative "the previous one"). Both are defensible Chinese; side by side they
   read as a contradiction. Suggested fix: 「前一層」 in all three places.

4. **Output style.** The original tip list said "/eli5 推薦, output style", but
   **no output style is configured** — `~/.claude/settings.json` has no
   `outputStyle` key and `~/.claude/output-styles/` does not exist. Either drop
   the mention or configure one before the talk. The tips slide currently only
   claims `/eli5`, which is true.

5. **Whether to put the graph-engineering verdict on stage.** The research
   produced a 16-criteria scorecard (13 met / 2 partial / 1 absent, plus one
   enterprise-governance criterion that does not apply to a personal harness).
   It is drawn as plate 07 of the eli5 artifact but is **not** in the deck. It
   would earn the title hard; it also invites "who decided these criteria".

An agent can just do these:

- [x] **Fix S2's stale HTML comment** — updated 2026-09-04 to CH1 03–05 / CH2
      06–11 / CH3 12–15 / CH4 16–17 / Q&A 18.

- [x] **Write CH4's script into its own notes blocks** — done 2026-09-08 with
      the chapter itself; S18 and S19 each carry one `<details class="notes">`,
      and `speaker-notes.md` stays a pointer index (`## S17 – S19 · CH4`).

- [ ] **Refresh the measured numbers** if the talk slips past early September.
      Every remaining figure has a stated window; the commands are below. The
      live herdr dump that aged as "right now, 2026-08-27 14:57 CST" was cut
      with the old CH3; S15 is now a stylized drawing with fictional names.

- [ ] **Two held-back CH3 candidates.** Both are good and both were cut for
      pulling the section away from its "one person, a fleet" spine. Item 3
      shipped without them; they stay out unless the speaker brings them back:
      - **Bash is 66% of all tool calls** (29,670 of 44,861 in main sessions;
        Linear MCP is ~2,700 combined). The leverage is the 48-entry Bash
        allowlist in `settings.json` plus `defaultMode: auto`, not installing
        more MCP servers. Counter-intuitive and immediately actionable.
      - **The harness grew code and tests.** 402 commits to gogox-claude since
        the June talk; it is now 31,711 lines of markdown prompt + 20,870 lines
        of py/js/sh + 6 pytest files. Thesis: *prompts written far enough start
        growing scripts that need testing — at that point a skill is not a
        prompt any more.*

- [x] **A leaking HTML comment above S1, fixed 2026-09-07.** `<div class="deck">
      <!-- === S1 · Talk hero === -->` closed the comment on its own line, so the
      next two lines of prose ("Title is settled. The DATE is still a
      placeholder…") rendered as visible text above the topbar on every page load.
      Pre-existing; found while validating the CH2 pass in a browser. The fix was
      dropping the early `-->`.

- [x] **CH3 density, folded into item 3.** The 2026-09-04 rewrite cut the
      opening-number wall, the distribution chart, the A–L grid, the word wall,
      and the meter. What remains is divider + three one-figure tool slides.

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
- **The deck is the only home for speaker notes (settled 2026-09-08).** Every
  chapter's script lives in its own slide's `<details class="notes">` block;
  `speaker-notes.md` is a pointer index that holds no prose. Do NOT copy a
  chapter's script back into that file "so it is easier to read" — the reason
  it is one-way is drift: the deck is what gets edited when a slide changes, and
  a second copy silently stops matching the figure it describes. That is exactly
  what happened to CH1's S5 section, which spent a month describing a two-panel
  slide that had been replaced by a single stacked figure.
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
  | §3 | Some tips | 加快開發，管好 session | 三個我平常會用的技巧 — Typeless · herdr · /eli5 |
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
- **§3 shipped 2026-09-04.** 章節名稱 `Some tips` / 標題「加快開發，管好 session」 /
  敘述「三個我平常會用的技巧 — Typeless · herdr · /eli5」。The older 「工具推薦」
  pair was replaced, not kept as an alternate. The previous seven tips slides
  were cut (git still has them); they were not moved into CH4.
- **§4 shipped 2026-09-08.** 章節名稱 `Conclusions` / 標題「換到了什麼」/ 敘述
  「兩件事 — 三個月搬進去的成果，以及一串 skill 跟一張 workflow 差在哪」。Written
  AFTER the body, as planned; the `TITLE TBD` badge and 敘述待定 are gone. The one
  `.tbd` marker left in the deck is the cover's date.

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
- **S11 exists to answer "which one is mine?" LAST, not first (2026-09-07).** The
  chapter's reading order is now: 08 names the six and says WHEN each applies →
  09 / 10 prove someone really wires them → 11 says the machine can compose them
  for you, but only for this once → 12 converges. Moving 11 before 09 / 10 breaks
  the sequence: its whole payload is that the auto mode uses the six you just saw.
  Its own section comment carries the do-not-reorder rule; keep it there.
- **S12 shows the three JOBS, not the six names (2026-09-07).** The wrap-up used to
  list the patterns under each job. That was the fourth time the six names appeared
  in one chapter and it inverted the page's own hierarchy. Each column is now the
  chapter title's question (誰先跑 / 誰接手 / 誰決定) over the job in large type, and
  the h2 is 「workflow 只幫你做三件事」. The mapping lives in the notes, marked
  "deliberately off this slide" — re-adding the names to the slide undoes the page.
  The `.thesis` row and the `.blk` divider between the two arguments stay.
- **S11's figure holds only what carries the argument (2026-09-07).** Everything that
  read as spoken prose is in that slide's notes. Three things are load-bearing and
  easy to destroy by "tidying":
  1. **The gate stands on a SEAM**, between the lane finishing and `可以 merge 的 PR`
     being promoted — because GGC's real gate is between two separate runs. Parked
     under the whole panel instead, it reads as "this script pauses", which is false.
  2. **The left column is deliberately unbroken**, prompt straight through to report.
     That missing seam IS the contrast; nothing should be added to point at it.
  3. **Never claim "it cannot pause, mine can".** `No mid-run user input` is a
     property of the workflow runtime and is equally true of a script you wrote
     yourself. A mark saying so (`✕ 中途不能插手`) was tried on the left panel and
     withdrawn as wrong; the notes carry the correct sentence instead — the gate has
     somewhere to stand because you cut the work into stages, and you could cut it
     because the composition is yours.
  Also: do not re-add a bottom summary band. Its sentence is the `.rungnote`, one
  line below.
- **S08's six `.trig` lines are CONDITIONS, and that is the point (2026-09-07).**
  The roster used to be names only, which answered "what are they called" and never
  "when would I reach for one". A description would make the room reverse-engineer
  the condition; all six therefore share one grammatical shape, which is also what
  separates the two patterns people confuse (many of the same KIND → fan-out; many
  ANSWERS to one thing → tournament). They are NOT glosses of GGC usage — the
  2026-09-01 condense deliberately cut those, and re-adding "how GGC uses it" here
  recreates the exact problem the trigger lines fixed.
- **On S09 / S10, the figures keep the mechanics and the notes keep the comparison
  (2026-09-07).** The rule is one line: *"how this shape works" stays on the slide;
  "where we differ from the post" moves to the notes.* So 「只印出一個指令，不執行」
  and 「只走一條，不會兩條」 stayed, while 「（我們加的）」, 「N 刻意只有 2」,
  「generate 那一半沒有用到」 and 「原文停在…」 came off. Two exceptions are
  deliberate: **Tournament's `0 / 86` stays on the slide** (it is the chapter's
  honest gap, and both S12's wrap-up and S11's spoken close lean on it), and **Loop
  until done's guard line stays** (it is the loop's second exit, and 「只有這個出口是
  「成功」」 dangles without it). Provenance command names are dim `#6b7280` on
  purpose; node IDENTITIES (`/route`, `dev-agent`, `ui-verify-agent`,
  `dev-reviewer`, `prescreen`) are not.
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

- **Deck**: `index.html` (every chapter’s script is in its slides’ `<details
  class="notes">` blocks) · **speaker notes index**: `speaker-notes.md` (pointers
  only, no prose)
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
