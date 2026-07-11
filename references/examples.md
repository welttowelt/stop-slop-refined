# Stop Slop - Examples

See SKILL.md for usage.

# Before and after examples

Each example shows the AI-tells, the rewrite, and what changed.

---

## Example 1. Throat-clearing, binary contrast, and emphasis crutch

**Before:**
> Here's the thing: building products is hard. Not because the technology is complex. Because people are complex. Let that sink in.

**After:**
> Building products is hard because people are complex.

**Changed:** Removed the opener, binary contrast, and empty emphasis. Kept the useful claim in one complete sentence.

---

## Example 2. Filler, hedging, and a permission-granting close

**Before:**
> It turns out that most teams struggle with alignment. The uncomfortable truth is that nobody wants to admit they're confused. And that's okay.

**After:**
> Teams struggle with alignment when people hide what they do not understand.

**Changed:** Removed two throat-clearing phrases and the permission-granting ending. Replaced the absolute claim with a direct cause.

---

## Example 3. Business jargon stack

**Before:**
> In today's fast-paced landscape, we need to lean into discomfort and navigate uncertainty with clarity. This matters because your competition isn't waiting.

**After:**
> The team needs a clear way to decide when the evidence is incomplete.

**Changed:** Replaced the jargon with the operational problem. Removed the unsupported claim about competitors.

---

## Example 4. Significance inflation and promotional language

**Before:**
> AI-assisted coding serves as an enduring testament to the transformative potential of large language models, marking a pivotal moment in the evolution of software development.

**After:**
> AI coding assistants change how developers write software. Add a concrete, sourced example before claiming a broader effect.

**Changed:** Removed copula avoidance and inflated language. Kept the claim inside the source and left the missing evidence visible.

---

## Example 5. Vague attribution and a superficial `-ing` chain

**Before:**
> Industry observers have noted that adoption has accelerated from hobbyist experiments to enterprise-wide rollouts, showcasing how AI can contribute to better outcomes, highlighting the intricate interplay between automation and human judgment.

**After:**
> The deployment log shows that more teams moved from pilot testing to weekly use during the first half of the year. Add the verified counts before publishing.

**Changed:** Named the required source and removed the false range and `-ing` chain. Left the missing figures visible instead of inventing them.

---

## Example 6. Heading restatement and generic conclusion

**Before:**
> ## Performance
>
> Speed matters.
>
> When users hit a slow page, they leave. The future of web performance looks bright as new optimization techniques continue to emerge.

**After:**
> ## Performance
>
> A slow page delays the user's next action.

**Changed:** Removed the restating one-liner and generic conclusion. Kept one concrete consequence.

---

## Example 7. Chatbot opener and closer

**Before:**
> Great question! Here's an overview of the French Revolution. The revolution began in 1789 when financial crisis and food shortages led to widespread unrest. I hope this helps! Let me know if you'd like me to expand on any section.

**After:**
> The French Revolution began in 1789 when financial crisis and food shortages led to widespread unrest.

**Changed:** Removed sycophancy, meta-narration, and the generic closing offer.

---

## Example 8. False agency and passive voice

**Before:**
> The decision was reached after much deliberation. The complaint eventually became a fix as the team's culture began to shift toward higher accountability.

**After:**
> After discussing the complaint, the team agreed on a fix. Add the verified actor, timeline, and process change if the source contains them.

**Changed:** Named the team and removed false agency. Left the timeline and process details open because the source draft does not provide them.

---

## Example 9. Rule of three and synonym cycling

**Before:**
> The protagonist faces many challenges. The main character must overcome obstacles. The central figure eventually triumphs. The hero returns home.

**After:**
> The protagonist overcomes the main challenge and returns home.

**Changed:** Repeated the correct noun and removed the padded three-part rhythm.

---

## Example 10. Em-dash overuse and decorative bold

**Before:**
> The term is primarily promoted by Dutch institutions—not by the people themselves. You don't say "Netherlands, Europe" as an address—yet this **mislabeling** continues—even in **official documents**.

**After:**
> Dutch institutions promote the term. The people being described do not use it for themselves. Official documents still use the term.

**Changed:** Removed three em dashes and two decorative bold phrases. Used complete sentences and named the actors.

---

## Example 11. Reasoning-chain leakage

**Before:**
> Let me think step by step about caching in Next.js. First, let's consider request memoization. Step 1: a fetch() call within a single render is automatically deduped. Step 2: the data cache stores results across requests. Step 3: the router cache stores rendered routes on the client.

**After:**
> Next.js caches at three layers: request memoization (dedupes fetch() within one render), the data cache (across requests), and the router cache (on the client).

**Changed:** Removed the internal monologue and preserved the factual three-part taxonomy because the system has exactly three cache layers.

---

## Example 12. Stalling transition, meta-narration, and list inflation

**Before:**
> Let's dive into the top 5 ways AI is transforming customer service. Without further ado, here's what you need to know:
>
> 1. Faster response times
> 2. 24/7 availability
> 3. Personalization at scale
> 4. Cost reduction
> 5. Better insights

**After:**
> The draft lists several possible effects of AI on customer service without evidence. Choose one supported effect and add the source, mechanism, and limit.

**Changed:** Removed the stalling phrases and empty list. Refused to invent a mechanism, percentage, or failure condition.

# Regression cases

Use these cases after changing SKILL.md, references/patterns.md, references/words.md, references/ai-role-and-reader-fit.md, references/revision-artifact.md, or a separate voice overlay. A case passes when the rewrite follows the profile and preserves every supported claim.

## Case 1. Keep one connected thought together

**Draft:**
> The migration failed because the new indexer could not read older records, so the team restored the previous version.

**Profile:** Neutral technical note.

**Pass:** Keep the sentence together. The cause, consequence, and response form one connected thought.

**Fail:** Split it into dramatic fragments or remove the reason.

## Case 2. Allow literal inanimate subjects

**Draft:**
> The compiler reports a missing import. The report shows the failed test.

**Profile:** Documentation.

**Pass:** Keep both subjects. The compiler and report perform ordinary literal actions.

**Fail:** Invent a human actor or rewrite both sentences into passive voice.

## Case 3. Keep a technical term and explain it once

**Draft:**
> The API uses an idempotency key, a request token that prevents the server from charging the same request twice.

**Profile:** Technical explanation for a general reader.

**Pass:** Keep `idempotency key` and its plain explanation. Repeat the same term later if the reader must track it.

**Fail:** Replace the technical term, cycle through synonyms, or delete the explanation to make the sentence shorter.

## Case 4. Route analogies by reader and format

**Draft:**
> The queue is a waiting room for jobs. Workers take the oldest waiting job first.

**Profile A:** Neutral documentation.

**Pass A:** Lead with the literal mechanism. The queue stores pending jobs, and workers take the oldest job first.

**Profile B:** Supplied long-form personal voice.

**Pass B:** Keep the analogy after the literal mechanism when it helps the reader.

**Fail:** Preserve a decorative analogy that hides the mechanism or delete a useful analogy only because it is an analogy.

## Case 5. Route fragments by voice

**Draft:**
> same bug. third time this week.

**Profile A:** Neutral incident note.

**Pass A:** Write a complete sentence. The same bug occurred for the third time this week.

**Profile B:** Supplied personal voice for Slack.

**Pass B:** The fragments may stay when they sound owned and the surrounding context makes the meaning clear.

**Fail:** Force fragments into neutral prose or flatten an intentional voice line without a reader benefit.

## Case 6. Remove decorative punctuation

**Draft:**
> The report covers 2024–2026 · three releases.

**Profile:** Neutral note.

**Pass:** Write `The report covers three releases from 2024 to 2026.`

**Fail:** Keep the en dash or middle dot as decoration. Preserve them only inside source quotations, code, or required syntax.

## Case 7. Refuse fabricated specificity

**Draft:**
> Industry observers say adoption accelerated.

**Profile:** Research summary with no source attached.

**Pass:** Ask for the source, narrow the sentence to what the available evidence supports, or leave a visible source slot.

**Fail:** Add a company name, figure, date, benchmark, or causal claim that the source draft does not contain.

## Case 8. Trigger the revision artifact correctly

**Draft:** A second pass rewrites three sentences, removes one sentence, and changes a qualification in the central claim.

**Profile:** Substantive rewrite.

**Pass:** Build the HTML file with references/revision-artifact.md and give the user its absolute path.

**Fail:** Skip the artifact, generate it for a spelling fix, or use it to explain a section move that needs a normal change summary.

## Case 9. Route rhetorical triads by channel

**Draft:**
> starknet fees after the upgrade: cheaper, faster, and nobody can freeze them

**Profile A:** Short personal X post with a house rule against rhetorical triads.

**Pass A:** Break the three-beat structure while keeping all three claims, for example two beats plus a full sentence. The tweet-triad ban is deliberate.

**Profile B:** Neutral documentation stating a system with exactly three parts.

**Pass B:** Keep the factual triad, as in Example 11.

**Fail:** Publish the rhetorical triad as-is under that voice profile, or drop a true claim to force two beats.

## Case 10. Route label colons

**Draft A:**
> shipped: the migration doc

**Draft B:**
> The takeaway: ship faster.

**Profile:** Short social post.

**Pass:** Keep Draft A's label-style opener (it is on the canonical keep-list). Rewrite Draft B into a sentence, since "The takeaway:" is a decorative colon.

**Fail:** Strip the label opener, or keep the takeaway colon.

## Case 11. Keep rebuttals of a live belief

**Draft:**
> the quantum risk isn't the math. it's the migration.

**Profile:** Short expert X post where the audience actually believes the math is the risk.

**Pass:** Keep the negation. It names and rejects a belief the readers hold, which is the informational payload.

**Fail:** Flatten it to "the quantum risk is the migration", or keep a contrast that negates a strawman nobody holds.

## Case 12. One deliberate quotable in launch copy

**Draft:** Launch copy with one strong hook line and two paragraphs of plain claims.

**Profile:** Public launch copy.

**Pass:** Keep exactly one deliberate quotable. If three paragraphs each try to be the hook, keep the strongest and flatten the rest.

**Fail:** Cut the only hook because it sounds like a pull-quote, or keep all three.

## Case 13. Strip paste artifacts mechanically

**Draft:**
> Read the full breakdown here: example.com/post?utm_source=chatgpt.com — adoption grew 3x [1][2]
>
> Sources:

**Profile:** Any public destination.

**Pass:** Strip the utm parameter, the orphan bracket citations, and the trailing Sources block before any style edit.

**Fail:** Leave any of the three, or fix the style while the utm_source survives.
