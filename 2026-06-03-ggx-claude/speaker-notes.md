## S1 · Hero / 開場

Hi everyone, I'm Charlie, a developer from the Mobile Team in Taiwan.

Today I'm going to introduce gogox-claude. We use this to migrate our current client app from native to flutter, that means 1 codebase support 2 platform

With this ai-workflow, 3 engineers ship 131 PRs in 30 days without human coding, we became 8 times more productive than before

---

## S2 · Outline · 五大段落

The talk has five parts 

Part one is the high-level architecture — the overall framework. 
Part two is a quick demo about a workday with gogox-claude.
Part three is the fundamentals — I will go through the core idea of previous sessions
Part four is the gogox-claude pipeline — today's main event, assembling the parts into one team-level flow. 
And the last part is the conclusion of the talk

---

## S3 · §1 Divider · 架構大圖

First, the big picture — I'll show you the high-level architecture up front, so the whole workflow is clear before we zoom in.

---

## S4 · Architecture Framework / 架構大圖

Think of the whole system as one machine: 

Linear tickets go in on the left, 

merge-ready PRs come out on the right. 

The box in the middle is an AI dev team. 

At the top is the dispatcher: 
it automatically fetches the tickets that are ready to start and handle them in parallel, 
handing each one to the right agent.

There are four role agents, each using its own skills.
PM agent will writes the PRD and nails down what to build
Designer agent reads Figma and defines the UI
Dev agent turns the spec into code
Verify agent guards the spec and stops the AI from hallucinating
Once the four hand off, a PR comes out the right side.

We keep human gates in the middle, preventing AI from heading in the wrong direction

This is just high level map — we'll deep dive in section 4.

---

## S5 · §2 Divider · 我的一天

Rather than walk through more process slides, let's just see what a workday looks like with gogox-claude is in the loop. Here's a 3-minute demo of my day.

---

## S6 · Opening Demo · 我的一天

- Here is a quick demo of my day. The upperside is the timeline

- Before I get off work, I'll prepare tickets for ai

- I'll run /ggx-dispatcher to handover works

- AI spawn 2 agents to do work in parallel

- AI check the details with me, I correct AI's decision. 

- Then ai finished the work and shipped as PR, The detail is recoreded in linear

- At 11pm, AI waked up to record my work today

- At 3am, AI waked up to code review on our PR. 
- It will give rating and note for each PR.

- D2 when I wake up, I will have a quick recap, and AI remind me to take care reopened tickets. There are also some statistic chart

- In the morning, I will check what ai shipped
- In the same time, I review member's PR

- In the afternoon, I will fix what Ai got wrong, DO the pair programming with AI
- and make sure every works correctly

- Then I will prepare the tickets, to check the content is good enough for AI. If it is, I will add tag for it

- Before getting off the work, I will run next round of ggx-dispatcher to handover my work. You can see it spawn 4 agent to handle thet tickets

Notice that the only things I actually did all day were set direction and check what AI shipped. Everything repetitive in between was the agents.

---

## S7 · §3 Divider · 基本觀念

Before we get into the implementation details, let's cover the fundamentals — SDD, OpenSpec, MCP, Skills, multi-agent. Some of you already caught these in the earlier talks, so I'll move through them quickly.

---

## S8 · Vibe → SDD → OpenSpec

There are two styles of working with AI on code.

1.
Style one: Vibe Coding. Throw whatever prompt comes to mind, change whatever it gives back. 

It's fast, the barrier is low, even non-engineers can join in. 
But it's too free-style — the outcome is not stable and hard to maintain
and the worst, the AI hallucinates and builds something completely off from what you wanted.

2.
Style two: SDD — Spec-Driven Development. 

- You have to prepare SPEC with AI in the begin, make sure AI and you are in the same page
- and AI will use the SPEC to coding

3. 
- The workflow kicks off with a Proposal. You provide content and AI sort out as these files
- AI depends on the files to coding
- After everything is finished, we need to archive it into codebase as truth for future reference
- These are the reason why we choose openspec for SDD tool

---

## S9 · MCP + Claude Skills

- LLM just a chatbot

- MCP is the agent's hands. It can integrate with multiple platform and read/write information to outside world

- Skill is the agent's muscle memory. You can pack the things you do over and over into a skill. After then, everytime you want to repeat it, just call the skills as a command

---

## S10 · The Context Dilemma

1
There’s a common trap most people fall into: assuming that feeding the entire codebase to an agent will make it smarter. Quite the opposite. The longer the context you give to agent, the lower the accuracy you will get.

There are several research prove this - The longer the conversation, the more the AI loses focus, it starts to forget thing and not follow your instruction.

2
- if you're using 1 single session to do everything, such as handle pm, design, dev stuffs, it will be easy to use lots of context and lose its focus on the missions.

Solution: distributed context
- sub-agnet
- agent team

Solution: long-context model
If the mission is not too hard, you can use long-context model and feed all of content to it. opus 1M is big enough to handle  most well-separated tasks

---

## S11 · §4 Divider · 整合 pipeline

We've covered the parts — SDD, OpenSpec, MCP, Skills, Agent Team. Section four is the main course: composing those parts into one real, team-level pipeline running across the company.

---

## S12 · Why team-level · 三層 skill sharing

Why build gogox-claude at the team level? Let me use the three phases we actually went through.

Level 1 · individual skills. 
I wrote a bunch of handy skills, and they worked great for me — but there was no way to share the benefit with my teammates.

Level 2

- The problem resolved when we work on the same repo, but we still need to maintain original CA. and it cannot be benefit with the skill we built

Level 3 · team-level — gogox-claude.


- DA revamp is already running with gogox-claude

---

## S13 · E2E ticket journey

Let's look at the pipeline more closely, from two angles.

PART 1 — the nine steps one ticket goes through.

Step 1: PM opens the ticket in Linear — writes the PRD, requirements, acceptance criteria. The PM still owns the definition; the difference is AI now helps structure requirements, auto-scan for gaps, and surface assumptions to confirm — and requirement quality isn't on the PM alone, several gates (/spec-review, dev gap-filling) back it up.

Step 2 ★ Dev: human-check the ticket details. The dev checks whether the ticket is written clearly, fills any gaps, attaches the `ready-to-port` label, and sends it back. This is the first human gate — making sure what we feed the AI is complete. Garbage in, garbage out.

Step 3: the dispatcher picks up the label, classifies the ticket (port, bug, feature), and four agents relay to produce the OpenSpec trio (proposal, design, tasks). When done, the ticket flips to `need-spec-review`. This step is fully automatic.

Step 4 ★ Dev: `/spec-review` — the second human gate. You can't take an agent-written spec at face value. The agent lays out its assumptions one by one for a human to vet and override. Once approved, the ticket flips to `ready-to-dev`.

Step 5: the dispatcher picks up again and runs `/dev:ff` to start building. This step writes the information you confirmed back into the spec, then implements all the way to opening a PR.

Step 6: the auto-reviewer. At 3 a.m. every night, `/code-review` posts its findings back as PR comments. You're asleep, the AI is reviewing code.

Step 7 ★ Dev: the third human gate. We verify what the AI produced and go through the review comments — the final fine-tuning on the PR the AI shipped.

Step 8 ★ Reviewer. Finally, another human reviewer reads the PR through to approval, to guarantee quality.

Step 9: QA acceptance.

PART 2 — how the dispatcher handles many tasks at once.

Everything above is a single ticket — but the dispatcher can process N tickets in parallel, and that heavy parallelism is what lifts output so much. The dispatcher's value isn't "running faster for me," it's "running N lines for me at the same time." And those N tickets don't all take the same path — the diagram color-codes three lanes: <strong>port</strong> (blue, the long path `/port:ff → spec → /dev:ff`), <strong>bug</strong> (red, `/bug:ff` straight to PR), and <strong>feat</strong> (green, `/dev:ff` straight to PR). Bug and feature skip port + spec, so their paths are shorter. `/route` picks the lane automatically from the ticket label, and they all converge into a PR.

One of the keys that makes this work is the worktree. With traditional manual version control we lean on git branches, but it's hard to have an AI operate many branches at once — so we use worktrees to spin up N copies of the codebase and let the AI work on them simultaneously.

★ The line that matters most: don't make the AI do what a human should, and don't make a human do what the AI can. Look at where the four ★ sit — ticket quality, spec alignment, code fixes, final review — it shows HITL still matters, and it's the key to keeping the AI on track.

---

## S14 · Workflow & Skills catalog (appendix · 簡短帶過)

This page is the skills catalog — the gogox-claude pipeline is built out of these skills. Some are self-explanatory; you can tell what they do at a glance. Others come with a sub-page that lays out my original design and thinking. I won't go through all of them today — let me just pull out a few I find more interesting:

- `resolve-conflict`: with this much parallelism, it's easy for several worktrees to touch the same spot. This skill reads both requirements and resolves the conflict for us.
- `summary`: from the session logs, the AI automatically distills the top 5 things that went well and the top 5 to improve.
- `session-metrics`: it tallies how much token and time a given ticket cost — which is exactly how I could tell you, up front, how many times faster the AI made us. It also gives suggestions so you can self-review.

---

## S15 · 人 × 機器：誰該做什麼（§4 capstone）

Wrapping up section four. S13 already walked the nine steps and showed where the four human gates sit, so I won't repeat it — this slide leaves you with one line: **the pipeline isn't here to remove humans, it frees them to do only the judgment calls.**

On the left is what the machine does — the repetitive, rule-able parts: spec generation, implementation, running tests, the nightly auto code-review, opening PRs, fanning out N tickets in parallel, managing worktrees. Hand those to the system; it doesn't tire and it runs many lines at once.

On the right is what humans do — the judgment, which is exactly S13's four ★ gates: ticket quality (garbage in, garbage out), spec alignment (override the AI's assumptions), code fixes (fine-tune the PR the AI shipped), and final review (approve before it ships). Every one of these needs a judgment call, so it stays with a human.

The one line to land: don't make the AI do what a human should, and don't make a human do what the AI can. That's our answer to HITL, and the §4 takeaway.

---

# 過場到 §5

That covers the why, the how, and the assembly. In the final section we'll lead with the 30-day numbers, then a few field tips, and close on something that touches everyone in the room — how AI moves every role (PM, designer, engineer) from doing the work to setting direction and gating judgment — plus what's still in the oven.

---

## S16 · §5 Divider · 收結

Let's wrap up. Three things: the 30-day numbers, a few field tips, and what this means for everyone in the room — not just engineers.

---

## S17 · 30 天成果數字

These numbers are incredible. It would be a mission impossible without deep AI integration
---

## S18 · Pro Tips（投影片只留一行 punch，細節在這當口白）

Slack wil become our only interface with multiple agent to do the work
