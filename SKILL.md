---
name: stop-slop
description: Audit and rewrite prose to remove AI writing patterns. Merges the best rules from hardikpandya/stop-slop, conorbronsdon/avoid-ai-writing, jalaalrd/anti-ai-slop-writing, blader/humanizer, and Shreya Shankar's plain-writing skill. Use when drafting, editing, or reviewing any text — tweets, emails, articles, docs, posts — where the output must not read as AI-generated. Supports detect-only mode.
version: 3.1.0
license: MIT
metadata:
  trigger: Writing, editing, or reviewing prose; "make this sound human"; "anti-slop"; "remove AI tells"; "audit this"
  updated: "2026-07-11"
  sources:
    - hardikpandya/stop-slop
    - conorbronsdon/avoid-ai-writing
    - jalaalrd/anti-ai-slop-writing
    - blader/humanizer
    - shreyashankar/plain-writing-skill@d9f45d3e567bfae2ebd7ebed344069f4ed0dd99f
---

# Stop Slop

Audit and rewrite prose to remove formulaic AI writing while preserving meaning, clarity, source boundaries, and useful voice.

This file is the package router and default operating guide.

Companion files:
- [references/words.md](references/words.md)
- [references/patterns.md](references/patterns.md)
- [references/examples.md](references/examples.md)
- [references/ai-role-and-reader-fit.md](references/ai-role-and-reader-fit.md)
- [references/revision-artifact.md](references/revision-artifact.md)

## Modes

**`rewrite`** (default) — Diagnose the full draft internally, rewrite it, then run a second reader pass. Return the clean prose first. Show issues, scores, or a diff when the user asks or when the changes need review.

**`detect`** — Flag only. No rewriting. Use when the patterns might be intentional, when auditing someone else's writing, or when the writer wants to fix things themselves.

Trigger detect when the user says "detect," "flag," "scan," "audit," "audit only," or "what's wrong with this." Default to rewrite otherwise.

## Default baseline

Use plain writing for neutral notes, summaries, reports, documentation, research, and ordinary email.

- Use common words.
- Write complete sentences and keep closely related clauses together.
- Explain the literal mechanism before adding style.
- Keep a necessary technical term and explain it once.
- Repeat the correct noun when changing it would make the subject harder to track.
- Remove filler and decorative formatting.

An intentional fragment may stay when the source voice or format earns it. An analogy may stay when it makes an unfamiliar idea easier to understand after the literal explanation is clear. Apply a separate personal-voice overlay only when the user asks for it or the artifact already carries it.

## Domain term collisions

In Starknet, ZK, cryptography, and post-quantum writing, do not use `receipt`, `proof`, or `proof point` as generic strategy words.

- `receipt` reads like AI lingo and most readers do not know what it means.
- `proof` has a literal meaning in this domain. Use it only for mathematical, cryptographic, legal, or source-quoted proof.
- `evidence` is allowed. It is often the plain word when the sentence means support for a claim.

Use the concrete noun when it is clearer. Good replacements include `demo`, `working example`, `visible work`, `shipped piece`, `outside commitment`, `public artifact`, `validation signal`, `evidence`, `data point`, `named partner signal`, or `something people can inspect`.

## Working order

```text
check facts and source boundaries
-> check the AI role and first creative shape when relevant
-> fix structure and coherence
-> apply the plain baseline
-> remove Stop Slop words and patterns
-> apply a requested voice overlay
-> run the second reader pass
-> create the revision artifact when triggered
```

For neutral prose, stop after the second reader pass. After a personal-voice pass, check rhythm and over-performance once more without stripping the owned phrasing.

---

## Core rules

1. **Cut filler.** Throat-clearing, emphasis crutches, adverbs, hedges. See [references/patterns.md](references/patterns.md).
2. **Break formulas.** No binary contrasts ("not X, it's Y"), no rule of three, no three-beat tweet structures, no negative listings, no rhetorical setups. The carve-outs live in [references/patterns.md](references/patterns.md).
3. **Active voice, named actors.** Name the person when a sentence assigns judgment, intent, choice, or responsibility. Ordinary literal subjects are fine: a report can show a result, a system can return an error, and a paper can argue a position.
4. **Be specific.** No vague declaratives ("the implications are significant"). Name the implication. No lazy extremes (every, always, never) doing vague work.
5. **Put the reader in the room.** "You" beats "people." Specifics beat abstractions. No narrator-from-a-distance.
6. **Vary rhythm.** Mix short and long sentences. Two items often beat three. In public marketing copy, treat three-item lists as suspect unless the content is factually exactly three named parts. End paragraphs differently. Uniform pacing can keep prose sounding synthetic after the obvious words are gone.
7. **Trust the reader.** State facts directly. No softening, justification, or hand-holding.
8. **Cut quotables.** In neutral prose, rewrite anything that sounds like a pull-quote. In hooks and launch copy, one deliberate quotable is the job, and a second one per piece is a smell.
9. **Earn emphasis.** Don't tell the reader something is interesting. Make it interesting.
10. **Check the AI role before cleanup.** If AI chose the first creative shape, run [references/ai-role-and-reader-fit.md](references/ai-role-and-reader-fit.md) before line edits. For expert, founder, strategic, or voice-sensitive writing, default to human draft first and AI critique second.
11. **Protect clarity.** A cleanup pass may need more words when the draft compresses logic the reader needs. Keep closely related clauses together, explain a necessary technical term once, and do not cut the bridge that lets a first-time reader follow the point. Rewrite instead of deleting. Unless the user asked for cuts, the rewrite covers everything the original covers.

---

## Fast pass

Use this for ordinary rewrites. Open the companion files only when the draft needs a deeper audit.

1. Preserve the claim, uncertainty, and source boundary. Remove invented facts.
2. Check the AI role before line edits when AI supplied the first shape or provenance is unknown. When the draft already carries an owned voice, mark those lines first and clean around them.
3. Apply the plain baseline. Expand cramped logic and keep connected clauses together.
4. Cut filler, empty emphasis, decorative jargon, and formulaic contrasts.
5. Name the actor when the sentence hides judgment or responsibility. Keep literal inanimate subjects.
6. Replace vague importance with the specific action, limit, reason, or consequence.
7. Vary sentence and paragraph shape. Keep factual lists even when they contain three items.
8. Keep necessary technical terms and explain each one once for the intended reader.
9. State the literal mechanism before an analogy. Keep the analogy only when it helps.
10. Apply the punctuation and formatting rules below.
11. Preserve owned voice. Use a separate personal-voice overlay only when requested or already present.
12. Run the second reader pass and create [references/revision-artifact.md](references/revision-artifact.md) when triggered.

### X preflight

For a tweet or short post, check these six before anything heavier. A clean draft ships.

1. Rhetorical triad or three-beat structure.
2. Label-prefix opener (hot take, plot twist) or decorative colon. Keep-list label openers like "shipped: the migration doc" are exempt.
3. Fake-casual verdict word (wild, insane) or wink aside.
4. Snap-question fragment ("The catch?").
5. Binary contrast that rebuts a belief nobody holds.
6. Emoji or hashtag defaults that the source voice and channel did not earn.

## Detail routing

| Need | Open |
|---|---|
| Word and phrase replacements | [references/words.md](references/words.md) |
| Sentence, structure, formatting, and voice patterns | [references/patterns.md](references/patterns.md) |
| Before-and-after examples and regression cases | [references/examples.md](references/examples.md) |
| AI-first anchoring, reader fit, and public review | [references/ai-role-and-reader-fit.md](references/ai-role-and-reader-fit.md) |
| Personal voice | a supplied writing sample or separate voice overlay |
| Inspectable second-pass diff | [references/revision-artifact.md](references/revision-artifact.md) |

---

## Punctuation and formatting

- Remove decorative em dashes, en dashes, and middle dots when a period, comma, connective, or line break is clearer. Preserve source quotations, code, and required syntax.
- Treat the em dash's replacement artifacts as the same tell. A spaced hyphen aside (` - `), a double hyphen (`--`), or a comma splice carrying the old dash rhythm needs the sentence rewritten as full clauses, not the punctuation swapped.
- Avoid decorative colons and semicolons in shareable prose. Keep them for URLs, timestamps, frontmatter, code, transcripts, data labels, source quotations, genuine lists, and label-style openers in short social posts ("shipped: the migration doc").
- Use straight quotes. Use ellipses only for a genuine trailing voice. Keep exclamation marks rare and earned.
- Remove decorative bold, emoji headers, hashtag stacks, and markdown from plain-text destinations. Use bullets only for content that is genuinely list-like.
- Use sentence case for subheadings. Keep familiar compound adjectives and rewrite invented or uniformly stacked compounds.

---

## Voice calibration

Read a supplied writing sample before editing. Match its sentence length, word choice, paragraph openings, punctuation, recurring phrases, and transition style. Preserve strong claims, useful repetition, and owned roughness.

Without a sample, infer the voice from the format and audience. Ask only when the answer would change the output. The default is plain, direct, complete prose that a first-time reader can follow.

Use a supplied writing sample or separate voice overlay for personal voice. Do not improvise personality inside a neutral rewrite.

---

## Context profiles

The plain baseline applies everywhere. Adjust only what the format requires.

| Profile | Adjustments |
|---|---|
| Social or LinkedIn | Match the live conversation. Keep platform cues only when the channel rewards them. |
| Blog or memo | Preserve argument flow and useful asymmetry. Keep the middle and ending followable. |
| Technical writing | Preserve exact terms, functional lists, and qualified language. Explain unfamiliar terms once. |
| Investor or leadership email | Lead with the decision, evidence, limit, and next action. Remove promotional padding. In Starknet and ZK contexts, avoid casual `proof` language unless the word is literal. |
| Documentation | Optimize for correct use. Keep repetition, passive voice, or structure when they improve precision. |
| Casual or personal | Preserve natural fragments, contractions, and humor when they belong to the writer. |
| Press quote or media statement | One or two attributable sentences. Standard capitalization, no signature closers, no lowercase register. Each sentence must survive alone in print. |
| Telegram or Discord announcement | Plain text, short lines, no markdown headers, no thread mechanics. Link plus one concrete reason to care. |
| GitHub (PRs, issues, READMEs) | Markdown allowed, imperative conventions. Break replies at thought boundaries instead of posting one block. No recap-flattery openers. |

Use [references/ai-role-and-reader-fit.md](references/ai-role-and-reader-fit.md) when AI supplied the first draft, provenance is unknown, the writer is expert or voice-sensitive, or the output is public social or promotional text.

---

## Output format

### Rewrite mode (default)

1. **Rewritten version** — lead with the clean text. Preserve the structure unless an AI-first anchor requires rebuilding it.
2. **What changed when useful** — add a short explanation only when the edits are substantive, surprising, or requested.
3. **Revision artifact when needed** — when the [references/revision-artifact.md](references/revision-artifact.md) trigger fires, build it and give the user the file path.

Keep the issue list, AI-role diagnosis, second-pass notes, and scores backstage unless the user asks for an audit, asks to see the reasoning, or needs to review a sensitive rewrite.

### Detect mode

1. **Issues found** — quote the exact text and group related issues.
2. **Reader consequence** — explain the concrete failure.
3. **Fix direction** — give the smallest useful repair without rewriting.
4. **Clean pass** — when nothing needs fixing, say so and stop. Do not manufacture findings.

Flag clusters of tells, not isolated ones. A single em dash, one transition word, or perfect grammar alone means nothing. Mixed registers, salutations, and curly quotes alone (editors auto-curl them) are not AI evidence.

---

## Final reader pass

This is the second reader pass from the working order. After a personal-voice pass it runs once more for rhythm and over-performance.

1. Did the rewrite preserve the claim, uncertainty, and source boundary?
2. Did it invent a fact, number, actor, timeline, mechanism, or causal claim?
3. Can a first-time reader follow every sentence and necessary technical term?
4. Did formulaic words or structures survive? Check [references/words.md](references/words.md) and [references/patterns.md](references/patterns.md) only when needed.
5. Does the sentence name responsibility without rewriting ordinary literal subjects?
6. Does the rhythm fit the format without padding, forced triads, or dramatic fragments?
7. Does the punctuation and formatting fit the destination?
8. Did the rewrite preserve the writer's useful voice and repetition?
9. For social text, does it answer a live trigger and respect the claim boundary?
10. Did the [references/revision-artifact.md](references/revision-artifact.md) trigger fire? Build it.

## When to rebuild

If the draft has several Tier-1 word hits, several formulaic pattern categories, and uniform sentence or paragraph structure, line edits will probably preserve the model's shape. State the core point in one sentence and rebuild from there.

## Self-reference exception

When writing about AI patterns, quoted examples are exempt. Flag patterns in the author's prose, not in cited examples.

## System maintenance

After changing this skill or a companion rule, run the cases in [references/examples.md](references/examples.md) (Regression cases). Update a case only when the intended behavior changes, then regenerate `docs/site-data.js`.

### Catalog refresh

AI tells are era-stamped and rotate as model generations change. Delve-era words are mostly trained out of current models, and new tells replace them.

- Quarterly, or when a major model generation ships, diff [references/words.md](references/words.md) and [references/patterns.md](references/patterns.md) against Wikipedia's signs-of-AI-writing catalog plus one current external list.
- Date-stamp additions in the Words changelog so stale bans stay visible.
- Keep a short retired list for bans that start eating natural vocabulary. Watch `ecosystem`, which is literal job language for a Head of Ecosystem.

Last sweep 2026-07-11, against conorbronsdon/avoid-ai-writing v3.15.0, hardikpandya/stop-slop, blader/humanizer, jalaalrd/anti-ai-slop-writing, and Shreya Shankar's plain-writing skill.
