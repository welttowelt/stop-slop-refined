# Stop Slop - AI Role and Reader Fit

This file turns the Chen/Chan and Radivojevic papers into operational Stop Slop rules.

Use it when a draft was AI-assisted, especially if it is public-facing, social, founder-led, strategic, or voice-sensitive.

## Core thesis

```text
AI help depends on the writer, the task, and who supplies the first draft.
In Chen and Chan's ad-copy study, sounding-board feedback helped non-experts while AI ghostwriting hurt experts.
In Radivojevic et al.'s static social threads, readers identified authorship poorly and reported less comfort with replies they believed were written by bots.
```

Stop Slop removes visible AI phrases, checks whether an AI first draft anchored the final shape, and checks reader fit when the channel calls for it.

Fast route:

```text
AI-first draft -> anti-anchoring.
Social-distribution draft -> reader-fit.
Public long-form -> reader-fit only for opening, ending, share copy, CTA, and reply surfaces.
Final prose -> Stop Slop cleanup.
Personal voice -> voice overlay after those gates.
```

## Add this gate before Stop Slop

Before line-editing an AI-assisted draft, ask:

```text
Who chose the first creative shape?
```

Use this router:

| Situation | AI role | Stop Slop instruction |
|---|---|---|
| Writer is below the task baseline | Scaffold or sounding board | Let AI help structure and critique, but keep the writer making final choices |
| Writer is expert, founder, or voice-sensitive | Critic, adversary, QA | Human draft first; AI attacks gaps and stale cues |
| Task needs many angles | Divergence generator (house method) | Ask for 2-4 genuinely different centers, each with a different audience, tension, evidence type, and risk |
| Draft already exists | Critique-before-rewrite | Make AI name problems before improving text |
| AI wrote the first draft | Anchor detector | Do not line edit yet; rebuild around the non-average human claim |
| Draft provenance is unknown | Light center-check | Do not guess authorship from surface tells; check the center before line edits |
| Social post feels clean but off | Reader-fit auditor | Check social presence, platform fit, and conversational context |

Below baseline does not mean AI-first by default. The strongest evidence here is for AI feedback on the human's own draft.

AI-first is acceptable for low-stakes boilerplate, neutral summaries, extraction, outlines, and drafts where voice or creative angle is not the asset. Still run Stop Slop before publication.

If you do not know who chose the first creative shape, do not infer authorship from surface tells. Ask once if the workflow allows. If you cannot ask, label provenance as unknown and run a light center-check before line edits:

```text
1. What is the central claim?
2. Is it generic or human-specific?
3. Does the structure feel inherited from a template?
4. What source, constraint, tradeoff, or judgment would make it publishable?
```

## Do

- Draft the first version yourself when you have taste, expertise, context, or a strong point of view.
- Use AI as a critic before using it as a rewriter.
- Ask AI to find missing angles, weak claims, stale platform cues, and unsupported confidence.
- Make AI generate alternatives when you need breadth, then choose manually.
- Rewrite from the human claim, not from the AI draft's default center.
- Treat social posts as situated speech, not generic content assets.
- Check whether a post responds to a specific trigger, claim, question, tension, or audience.
- Preserve useful repetition when it helps the reader track the main object.
- Let some asymmetry remain. A human piece does not need every paragraph to carry equal polish.

## Avoid

- Letting AI choose the opening frame for expert or founder writing.
- Line-editing an AI-first draft before asking whether the whole center is wrong.
- Treating polish as evidence that the draft is ready.
- Treating "readers cannot tell it is AI" as a quality bar.
- Keeping social-ad cues because they arrived in the first draft: emoji bullets, hashtag stacks, generic CTAs, "link in bio", "get yours now", empty excitement.
- Keeping cross-format average cues because they sound smooth: generic center, uniform rhythm, unsupported confidence, no human tradeoff.
- Using stale platform gestures as decoration: "unlock", "elevate", "game-changer", empty excitement.
- Making every paragraph the same weight, length, and shape.
- Letting the model write social replies that could be dropped under any post.
- Using confidence when the draft needs evidence, boundary, or lived judgment.

## Promotional and sales calibration

For ads, launch snippets, investor notes, product posts, and promotional copy, concrete usually beats enthusiastic.

Prefer:

- mechanism
- price
- named actor
- user consequence
- technical constraint
- source-backed evidence
- explicit tradeoff

Avoid subjective excitement as the main payload. "You will love this" is weaker than the concrete thing the reader can inspect, use, buy, verify, or challenge.

House calibration. The only paper evidence behind this section is a one-product ad-click regression on subjectivity that the paper itself equivocates on. The extension to investor notes and product posts is ours.

This is a channel calibration, not a ban on point of view. Founder essays and personal posts can carry judgment and personality. Promotional copy still needs stance, but it should earn attention through concrete claims instead of generic excitement.

## Publish review

Pause and review the draft when any of these are true:

- An AI first draft shaped expert, founder, strategic, or voice-sensitive public writing and no anti-anchoring pass was run.
- The central claim is the model's safest average claim.
- The draft has no human observation, constraint, decision, or tradeoff.
- The post could appear under many unrelated conversations without changing.
- The draft uses emoji bullets or hashtags as default decoration.
- The ending is a generic CTA or summary line.
- The writer feels more confident because the text is smooth, but no external check was run.

For sensitive or heavily AI-assisted public drafts, this optional house score can help locate the next fix:

| Gate | Review below |
|---|---:|
| Evidence | 4 |
| Specificity | 4 |
| Originality | 4 |
| Reader fit | 4 |
| Stop Slop residue | 4 |

Score anchors:

```text
1 = absent or unsupported
3 = present but generic, vague, or mostly model-supplied
4 = concrete enough to publish with minor edits
5 = specific, sourced, situated, and clearly human-chosen
```

The human owns the final judgment. A score below 4 points to a specific fix and does not act as an automatic publication block. AI may suggest a score only when it cites the exact passage and names the source gap.

## Anti-anchoring pass

Run this before line edits if the model wrote or strongly shaped the first draft.

```text
1. Name the draft's default center.
2. Mark every phrase, structure, example, and CTA that feels inherited from generic model output.
3. Name the strongest human claim the draft avoids.
4. Name the expert observation, constraint, or tradeoff missing from the draft.
5. Name the evidence the AI chose because it was obvious, and the evidence a domain expert would choose instead.
6. If the brief lacks enough source material to name expert evidence, stop and list the missing source context instead of inventing it.
7. Remove stale platform cues unless the channel specifically rewards them.
8. Write a fresh outline from the human claim.
9. Only then rewrite.
```

Fast prompt:

```text
This draft was AI-first.
Treat it as an anchor, not as the base.

Identify:
1. The model's default center.
2. The generic structures and phrases.
3. The stale platform cues.
4. The missing human judgment.
5. The obvious evidence the AI chose.
6. The evidence a domain expert would choose instead.
7. 2-4 genuinely distinct human centers, each with a different audience, tension, evidence type, and risk.

If the brief does not contain enough source material to name expert evidence, stop and list the missing source context instead of inventing it.

Do not line edit. Propose a new structure from the strongest human center.
```

For Starknet-facing claims, check product, legal, roadmap, role-boundary, or technical notes before strengthening the claim.

## Reader-fit pass

Run this after coherence and originality, before final Stop Slop, for social posts, threads, replies, launch snippets, and share copy.

For public long-form pieces, use reader-fit on openings, endings, share copy, CTAs, and reply surfaces. Do not use Radivojevic as a reason to make technical blog bodies casual. Route those through evidence, information flow, argument function, and source checks first.

```text
Does a situated person seem to be speaking here?
```

Reader fit never overrides claim safety. If the claim is factual, check evidence before voice.

Check:

| Cue | Failure | Repair |
|---|---|---|
| Social presence | Smooth but anonymous | Add the writer's actual stance, constraint, decision, or observation |
| Emotional calibration | Too excited, too flat, too solemn | Replace emotion labels with concrete reaction or tradeoff |
| Platform fit | LinkedIn cadence in an X reply, or generic marketing voice anywhere | Match the platform's actual rhythm and context |
| Conversational contingency | Could be dropped under any post | Name the trigger, claim, question, or tension being answered |
| Language mechanics | Uniform rhythm, odd punctuation, repeated structures | Vary sentence length and remove ornamental transitions |
| Specificity (house) | Polished but vague | Add named actors, numbers, technical constraints, or a concrete scene |
| Claim boundary (house) | Confident but unsupported | Add evidence, narrow the claim, or state the limit |

## Critique-before-rewrite prompt for AI-assisted drafts

Use this when a draft already exists and the next move should be critique before rewrite.

```text
Step 1 - Diagnose. Do not rewrite yet.
Identify AI-first anchoring, model-average claims, stale platform cues, reader-fit problems, unsupported confidence, and missing source context.

Step 2 - Source check.
List what must be checked before strengthening claims. If source context is missing, stop instead of inventing evidence.

Step 3 - Rewrite plan.
Name the human center and the concrete revision moves.

Step 4 - Rewrite.
Only rewrite after the diagnosis, source check, and plan are complete.

Step 5 - Final cleanup.
Run Stop Slop residue check. For social-distribution text, add the reader-fit score.
```

## Add to Stop Slop audits

When auditing, add these flags:

| Flag | Meaning | Fix |
|---|---|---|
| `AI-first anchor` | The draft still follows the model's first center | Run anti-anchoring before line edits |
| `Model-average claim` | The point is true but too generic to be worth publishing | Replace with a specific claim, tension, or judgment |
| `Stale platform cue` | The draft imports old social-ad texture | Cut emoji bullets, hashtag default, generic CTA, empty excitement |
| `Synthetic social fit` | The post is coherent but socially unplaced | Add context, stance, and conversational trigger |
| `Confidence bump` | The draft feels done because it is smooth | Score evidence, specificity, originality, reader fit, and Stop Slop residue before publishing |

Local model-average examples:

| Average claim | Repair direction |
|---|---|
| "Starknet is fast and scalable." | Name the buyer loop, constraint, shipped piece, or demo that changes the decision. |
| "Privacy will unlock institutional adoption." | Name the compliance bottleneck, disclosure boundary, or operational tradeoff. |
| "Agents need verifiable identity." | Name the failure mode, actor, and verification surface. |

## Use with a personal voice overlay

For personal or house-voice writing, the workflow derived from Chen/Chan is stricter:

```text
Human draft first.
AI critic second.
AI rewrite only after the human center is chosen.
```

A personal voice overlay should preserve abrasion, asymmetry, and lived judgment. Do not let Stop Slop clean the piece into a polished content machine.

Second-pass questions:

1. Did AI pick the center, or did the writer?
2. Is the strongest line a human judgment or a polished average?
3. Does the post answer a live situation, or could it sit under anything?
4. Did cleanup remove all the weirdness that made the point feel owned?

## Source boundaries

Chen/Chan directly supports the production-side rule:

```text
LLM collaboration mode and writer expertise change creative-work outcomes.
Ghostwriter mode can anchor users and hurt expert output.
Sounding-board mode can help non-experts improve execution.
```

Radivojevic directly supports the reader-side rule:

```text
Readers are weak at identifying LLM-generated social replies, but perceived bot text still produces lower comfort.
```

Do not claim these papers prove:

- AI should never draft.
- AI critique improves expert output. Experts gained from no tested mode, so critic-mode for experts is anchoring-avoidance plus house preference, not a measured benefit.
- Humans cannot improve at AI detection.
- Emojis always hurt all writing.
- A specific house voice always beats AI writing.
- Cryptographic provenance was tested.

Use the papers as workflow evidence:

```text
Choose the model's role before drafting.
Protect expert voice from anchoring.
Check reader fit before final cleanup.
```
