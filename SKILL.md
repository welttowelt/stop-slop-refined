---
name: stop-slop
description: Audit and rewrite prose with a plain-writing baseline, source-preserving cleanup, AI-role checks, context-aware voice, and an optional detect-only mode. Use when drafting, editing, simplifying, or reviewing prose that should be clear, direct, and free of formulaic AI writing.
version: 3.0.0
license: MIT
metadata:
  trigger: Writing, editing, simplifying, or reviewing prose; "make this sound human"; "plain writing"; "anti-slop"; "remove AI tells"; "audit this"
  updated: "2026-07-10"
  sources:
    - hardikpandya/stop-slop
    - conorbronsdon/avoid-ai-writing
    - jalaalrd/anti-ai-slop-writing
    - blader/humanizer
    - shreyashankar/plain-writing-skill@d9f45d3e567bfae2ebd7ebed344069f4ed0dd99f
---

# Stop Slop

Remove formulaic AI writing while preserving the claim, the evidence, the uncertainty, and the writer's useful voice.

This file is the package router and default operating guide.

References:

- [Word and phrase rules](references/words.md)
- [Pattern catalogue](references/patterns.md)
- [Examples and regression cases](references/examples.md)
- [AI role and reader fit](references/ai-role-and-reader-fit.md)
- [Revision artifact workflow](references/revision-artifact.md)

## Modes

**`rewrite`** is the default. Diagnose the draft internally, rewrite it, then read the rewrite once more as a new reader. Return the clean prose first. Show issues, scores, or a diff only when the user asks or the changes need review.

**`detect`** flags problems without rewriting. Use it when the patterns may be intentional, when auditing someone else's writing, or when the writer wants to make the edits.

Trigger detect when the user says `detect`, `flag`, `scan`, `audit only`, or `what is wrong with this`. Default to rewrite otherwise.

## Plain baseline

Use plain writing for neutral notes, summaries, reports, documentation, research, and ordinary email.

- Prefer common words.
- Write complete sentences and keep connected clauses together.
- Explain the literal mechanism before adding style.
- Keep a necessary technical term and explain it once.
- Repeat the correct noun when a synonym would make the subject harder to track.
- Remove filler and decorative formatting.

An intentional fragment may stay when the source voice or format earns it. An analogy may stay when it helps a new reader after the literal explanation is clear.

## Working order

```text
check facts and source boundaries
-> check the AI role when relevant
-> fix structure and coherence
-> apply the plain baseline
-> remove formulaic words and patterns
-> preserve the writer's useful voice
-> run the second reader pass
-> create a revision artifact when triggered
```

## Core rules

1. **Cut filler.** Remove throat-clearing, empty emphasis, decorative jargon, and hedges that do no useful work.
2. **Break formulas.** Rewrite binary contrasts, negative listings, forced triads, rhetorical setups, and other repeated templates.
3. **Name responsibility.** Name the person or group when a sentence assigns judgment, intent, choice, or responsibility. Ordinary literal subjects are fine. A report can show a result, a system can return an error, and a paper can argue a position.
4. **Be specific.** Replace vague importance with the action, limit, reason, evidence, or consequence.
5. **Keep the reader close.** Use the reader, actor, object, and situation instead of distant abstractions.
6. **Vary rhythm.** Mix sentence and paragraph shapes. Do not pad a list to three for cadence.
7. **Trust the reader.** State the point without reassurance or repeated justification.
8. **Cut manufactured quotables.** Rewrite lines built to sound profound instead of useful.
9. **Earn emphasis.** Show the change or tension instead of announcing that it is surprising or important.
10. **Check the AI role.** If AI chose the first creative shape, run the [AI role and reader-fit check](references/ai-role-and-reader-fit.md) before line edits.
11. **Protect clarity.** A cleanup can need more words when the draft compresses logic a first-time reader needs.

## Fast pass

1. Preserve the claim, uncertainty, and source boundary. Remove invented facts.
2. Check who supplied the first creative shape when AI use is known or unclear.
3. Expand cramped logic and keep connected clauses together.
4. Cut filler, empty emphasis, decorative jargon, and formulaic contrasts.
5. Name responsibility without rewriting ordinary literal subjects.
6. Replace vague importance with a specific action, limit, reason, or consequence.
7. Vary sentence and paragraph shape. Keep factual lists even when they contain three items.
8. Keep necessary technical terms and explain each one once for the intended reader.
9. State the literal mechanism before an analogy. Keep the analogy only when it helps.
10. Match punctuation and formatting to the destination.
11. Preserve owned voice, useful repetition, and intentional roughness.
12. Read the result once more as a first-time reader.

## Detail routing

| Need | Open |
|---|---|
| Word and phrase replacements | [words.md](references/words.md) |
| Sentence, structure, formatting, and voice patterns | [patterns.md](references/patterns.md) |
| Before-and-after examples and regression cases | [examples.md](references/examples.md) |
| AI-first anchoring, reader fit, and source boundaries | [ai-role-and-reader-fit.md](references/ai-role-and-reader-fit.md) |
| Inspectable second-pass diff | [revision-artifact.md](references/revision-artifact.md) |

## Punctuation and formatting

- Remove decorative dashes, stacked parentheticals, and punctuation used as stagecraft. Preserve quotations, code, syntax, and punctuation that carries meaning.
- Use sentence case for headings.
- Remove decorative bold, emoji headers, hashtag stacks, and markdown from plain-text destinations.
- Use bullets only for content that is genuinely list-like.
- Keep familiar compound adjectives. Rewrite invented compounds that compress a full idea into a label.

## Voice calibration

Read any supplied sample before editing. Match its sentence length, word choice, paragraph openings, punctuation, recurring phrases, and transition style. Preserve strong claims, useful repetition, and owned roughness.

Without a sample, infer the voice from the format and audience. Ask only when the answer would change the output. The default is plain, direct, complete prose that a first-time reader can follow.

## Context profiles

The plain baseline applies everywhere. Adjust only what the format requires.

| Profile | Adjustment |
|---|---|
| Social post or reply | Answer a live trigger. Keep platform cues only when the channel rewards them. |
| Blog or memo | Preserve argument flow, useful asymmetry, and a followable ending. |
| Technical writing | Preserve exact terms, functional lists, qualified language, and necessary repetition. |
| Investor or leadership email | Lead with the decision, evidence, limit, and next action. |
| Documentation | Optimize for correct use. Keep repetition, passive voice, or structure when it improves precision. |
| Casual or personal | Preserve natural fragments, contractions, and humor when they belong to the writer. |

Use [AI role and reader fit](references/ai-role-and-reader-fit.md) when AI supplied the first draft, provenance is unknown, the writer is expert or voice-sensitive, or the output is public social or promotional text.

## Output

### Rewrite mode

1. **Rewritten version.** Lead with the clean prose. Preserve the structure unless the AI supplied a weak first shape that needs rebuilding.
2. **What changed, when useful.** Add a short note only when the edits are substantive, surprising, or requested.
3. **Revision artifact, when needed.** If the second pass changes a central claim or several sentences, use the [revision artifact workflow](references/revision-artifact.md).

Keep the issue list, AI-role diagnosis, and second-pass notes backstage unless the user asks for an audit or needs to review a sensitive rewrite.

### Detect mode

1. **Exact issue.** Quote the problem and group related hits.
2. **Reader consequence.** Explain the concrete failure.
3. **Smallest repair.** Give a fix direction without rewriting the draft.

## Final reader pass

1. Did the rewrite preserve the claim, uncertainty, and source boundary?
2. Did it invent a fact, number, actor, timeline, mechanism, or causal claim?
3. Can a first-time reader follow every sentence and necessary technical term?
4. Did formulaic words or structures survive?
5. Does the sentence name responsibility without distorting an ordinary literal subject?
6. Does the rhythm fit the format without padding or forced patterns?
7. Does the punctuation and formatting fit the destination?
8. Did the rewrite preserve useful voice and repetition?
9. For public social text, does it answer a live trigger and respect the claim boundary?
10. Did the second pass change a central sentence or several sentences? Create the revision artifact.

## When to rebuild

If the draft combines several high-pressure word hits, several formulaic pattern categories, and a uniform sentence or paragraph shape, line edits will preserve the model's structure. State the core point in one sentence and rebuild from there.

## Self-reference exception

Quoted examples are exempt when writing about AI patterns. Flag the author's prose, not cited examples.

## Maintenance

After changing this file or a reference, run the [regression cases](references/examples.md#regression-cases) and regenerate `docs/site-data.js`.
