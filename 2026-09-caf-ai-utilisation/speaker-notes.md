# Speaker notes — 2026-09 · CAF 的 AI 成效

**The deck is the home for every slide's script.** Each content slide carries its
own `<details class="notes">` block in `index.html` — read it there and edit it
there. This file is the index that says which slide holds what; it deliberately
keeps no second copy, because two copies drift.

Notes are hidden in slide mode (`body.mode-slide details.notes { display: none }`)
and readable in scroll mode, so they are never projected.

Keep the `## SN · <slide tag> / <zh label>` heading form below so a numbering
change stays a find-and-replace. This deck is 10 slides + Q&A.

---

## Why this deck is 10 slides, not 19

A deliberate departure from the house norm. The audience is a manager, not the
mobile team: the ask was the short cut that survives being forwarded, so the
methodology chapter that a tech sharing would spend four slides on is compressed
into one (S6), and the pipeline internals into one (S7). The long form lives in
the companion report, which carries the full 91-ticket table, the eight-part
evidence appendix and the reproduction commands for every figure.

---

## S1 · Hero / 開場

No notes block. Three hero hooks, each linking to the slide that proves it:
82% → S3, 4.9× → S5, 0 reverts → S9. Open on the second line of the subtitle —
two of the three sources involve no self-assessment — because that is the whole
reason this deck is worth twenty minutes.

## S2 · 02 / OUTLINE

In `index.html`. Holds the opening line to say verbatim, and the instruction for
what to do if the room opens on cost (jump to S9, come back; the four questions
do not depend on each other).

## S3 · 03 / ADOPTION

In `index.html`. Holds the "the point is the dashed line" beat, and the answer to
the July dip (highest-volume month, more small human patches — do not raise it,
answer it if asked).

## S4 · 04 / PARTICIPATION

In `index.html`. Holds why the lines figure sits below the PR figure (human PRs
are larger on average), and where to send "it just produces more" — S9, not here.

## S5 · 05 / SPEED

In `index.html`. **The slide that matters.** Holds the instruction not to lead
with "4.9× faster" (lead with the shape — AI's time does not grow with the
ticket), the small-sample admission for the 5-point band, and the honest half:
12 tickets under 1.5×, all of them 5–9-session hard problems.

## S6 · 06 / METHOD

In `index.html`. Holds why we cut our own headline from 14.6× to 4.9× in public,
and the naming of the weakest link — the manual baseline is a blind AI estimate,
which is exactly why adoption, quality and flow are drawn from git and GitHub.

## S7 · 07 / ROUTES

In `index.html`. Holds the order correction (review runs **before** demo, because
the review loop changes code and footage shot first would be stale), and the
framing of the three gates as a safety property rather than a gap. Also holds the
prepared answer to "could it auto-merge".

## S8 · 08 / FLOW

In `index.html`. Holds the framing instruction — this is the resource ask one
slide early, so do not deliver it as a complaint — and the prepared answer to
"so did AI make things slower" (44.3 h vs 22.8 h median, because AI PRs are
larger and queue behind the same reviewers).

## S9 · 09 / QUALITY & COST

In `index.html`. Holds **the one input to confirm before presenting**: the dollar
figures are API list-price equivalents computed from token counts. On a fixed
seat plan the real spend is the seat cost and every saving figure is a floor.
Also holds why $52 per ticket holds (97.9% cache reads).

## S10 · 10 / SO WHAT

In `index.html`. Holds the closing line to say verbatim, and the instruction to
leave auto-merge as an open question rather than a recommendation.

## S11 · Q & A

Divider, copied from the house pattern. No notes.

---

## Settled

**Slot and framing — 2026-09-10, same day as the workflow talk.** This is not a
standalone session: it is the stage report given inside that session, so the
hero's `DATE TBD` badge is gone, the hero tag reads `PROGRESS REPORT`, and the
hub entry (`../index.html`) carries `kind: "report"` — a mint `階段報告` badge
and a separate line in the stat strip, not a fifth "talk". Both hub places were
updated (static card + `SESSIONS` array); nothing enforces that pair.

## Open before this is presented

1. **Billing model** — see S9's note. Changes nothing about the hours-freed
   figures, changes every dollar figure.
2. **Demo speed-up** — deliberately absent. Automated capture is measured at
   11–45 minutes unattended per ticket, but no baseline for the manual procedure
   was ever recorded, so no percentage is claimed anywhere in the deck. If a
   manual figure turns up, S4's demo tile is where it goes.
