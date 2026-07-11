# Stop Slop - Patterns

See SKILL.md for usage.

# Pattern catalog

Each entry: pattern -> why it's slop -> fix. Grouped by category.

---

## Sentence-level patterns

### Binary contrasts
- "Not because X. Because Y." / "Not because X, but because Y."
- "[X] isn't the problem. [Y] is."
- "The answer isn't X. It's Y."
- "It feels like X. It's actually Y."
- "Not X. But Y." / "not X, it's Y" / "isn't X, it's Y"
- "stops being X and starts being Y"
- "it stops being X"
- "doesn't mean X, but actually Y"
- "X is a feature, not a bug" / "not a bug, a feature"
- "an X that isn't Y" (indirection — prefer "X is broken")

**Fix:** State Y directly. Drop the negation. Keep the negation only when it names and rejects a specific belief the target audience actually holds. Know whose belief it is, and name it in the text when the holder is not obvious from context. AI contrasts negate strawmen nobody holds. A rebuttal of a live belief is doing work.

### Negative listing (rhetorical striptease)
- "Not a X… Not a Y… A Z."
- "It wasn't X. It wasn't Y. It was Z."

**Fix:** State Z. Skip the runway.

### Negative parallelism
- "Not just X, but Y"
- "It's not merely X, it's Y"
- "It's not only X but also Y"

**Fix:** Pick one. State it.

### Dramatized contrast against the crowd
- "shipped it in 2022, while everyone else debated timelines"
- "built it in a weekend, while the industry wrote thinkpieces"

**Fix:** State the fact and cut the trailing crowd clause, or name the actual competitor and what they actually did. The implied lagging crowd is a strawman with a date.

### Colons in shareable prose
- "The point is simple: X."
- "The reason is this: Y."
- "The promise: Z."
- "The takeaway: W."

**Fix:** Treat plain colons, or double points, as a hard AI-signature pattern in public marketing copy, shareable memos, and short internal drafts. Use a full sentence, a period, a line break, or a plain connective instead. Keep them for URLs, timestamps, frontmatter, code, transcripts, data labels, source quotations, genuine lists, and label-style openers in short social posts ("shipped: the migration doc").

### Tailing negation
- "The options come from the selected item, no guessing."
- "…no wasted motion."

**Fix:** Rewrite as a full clause. ("The options come from the selected item without forcing the user to guess.")

### Dramatic fragmentation
- "[Noun]. That's it. That's the [thing]."
- "X. And Y. And Z."
- "This unlocks something. [Word]."

**Fix:** Use complete sentences by default. Keep an intentional fragment when the source voice or format earns it.

### Rhetorical questions as transitions
- "But what does this mean for developers?"
- "So why should you care?"
- "What's next?"

**Fix:** If you know the answer, just state it. Rhetorical questions are earned by setup, not dropped as section transitions.

### Payoff announcements and snap questions
- "Here's the kicker" / "the wild part" / "the crazy part"
- "The best part?" / "The catch?" / "The result?"
- "The kicker? X." (fragment question, then the answer)
- "Let me explain." as a one-line follow to a bold claim
- "Is it fast? Yes. Is it cheap? Also yes." (self-QA volley)

**Fix:** State the payload. If it lands, it did not need an announcer.

### Concession-fragment reassurance
- "Not always. Not perfectly." after a bold claim
- "Not everyone. But most."

**Fix:** Fold the concession into a full clause that says when the claim fails. Empty concessions get cut.

### Vague demonstrative openers
Sentences or paragraphs opening with This/That/These/Those pointing at a whole preceding idea, or bare summary nouns like "the result" and "the point".

**Fix:** Attach a noun ("this failure mode", "that constraint") or name the thing. One clear-antecedent "This is why X fails" is fine. Flag when the reader has to re-read to find what "this" is.

### Parenthetical hedging
- "(and, increasingly, Z)"
- "(or, more precisely, Y)"
- "(and perhaps more importantly, W)"

**Fix:** If the aside changes the read, give it a sentence. If not, cut it.

### False concession
- "While X is impressive, Y remains a challenge."
- "Although X has made strides, Y is still an open question."

**Fix:** Make both halves specific or pick a side and argue it.

### False breadth
- "Whether you're [X] or [Y]…" (X and Y are everyone)

**Fix:** Pick the actual audience.

### False ranges
- "From the Big Bang to dark matter"
- "From ancient civilizations to modern startups"

**Fix:** Pick the actual topic.

### Speculative scenario openers
- "Imagine a world where…"
- "Picture a future in which…"

**Fix:** Start with the concrete thing. Keep instructional setups ("imagine you have a sorted array") and genuine fiction.

### Wh-openers
Sentences starting with What/When/Where/Which/Who/Why/How as a habit.

**Fix:** Lead with the subject or the verb. ("What makes this hard is…" -> "The constraint is…")

### "Let's" stalling transitions
- "Let's explore"
- "Let's break this down"
- "Let's take a look"

**Fix:** Just start with the point.

### Acknowledgment loops
- "You're asking about…"
- "The question of whether…"
- "To answer your question…"

**Fix:** The reader knows what they asked. Just answer.

---

## Word-use patterns

### Copula avoidance
AI substitutes fancy verbs for "is" and "has": serves as, features, boasts, presents, represents, functions as, stands as, marks.

**Fix:** Default to "is"/"has" unless the fancier verb genuinely adds meaning.

### Synonym cycling (elegant variation)
Rotating "developers… engineers… practitioners… builders" in one paragraph.

**Fix:** Repeat the right word. Forced variation reads as thesaurus abuse.

### Lazy extremes
"every," "always," "never," "everyone," "nobody."

**Fix:** Use specifics instead of sweeping claims.

### Hollow intensifiers
"genuine," "real" (as in "a real improvement"), "truly," "quite frankly," "to be honest."

**Fix:** Cut. State the fact.

User preference: treat "real" as a hard avoid outside quotes, titles, and fixed technical terms. Use concrete alternatives such as "actual," "concrete," "live," "practical," "existing," or "material" only when they add meaning.

### Vague endorsement
"worth reading," "worth a look," "worth checking out."

**Fix:** Substitute a specific reason. Say why the reader should care.

### Excessive hedging
"perhaps," "could potentially," "it's important to note," "to be clear," "may possibly."

**Fix:** Make the point.

### Adverb spam
All -ly adverbs and the soft fillers: really, just, literally, genuinely, honestly, simply, actually, deeply, truly, fundamentally, inherently, inevitably, interestingly, importantly, crucially, quietly, casually, famously, notoriously.

**Fix:** Cut an adverb when it adds emphasis without information. Keep it when removing it changes the claim, timing, degree, or technical meaning. `quietly` earns its place only when something literally made no sound or shipped with no announcement. As drama ("quietly became the biggest") it is a crutch.

### Hyphenated word-pair stacking
AI hyphenates uniformly: cross-functional, data-driven, real-time, decision-making, well-known, high-quality, long-term, end-to-end.

**Fix:** Keep familiar compounds that normal writers use. Rewrite coined compounds that compress a point into a clever label. Avoid uniform stacks.

### Decorative analogy
The analogy adds style while the literal mechanism stays unclear.

**Fix:** State the mechanism in plain words first. Keep the analogy only when it helps the intended reader understand an unfamiliar idea. Neutral notes and technical explanations should usually use the literal version alone.

---

## Structural patterns

### Rule of three
AI defaults to triads: "speed, quality, cost"; "innovation, inspiration, insight"; verb-verb-verb chains.

**Fix:** Treat three-item lists, three-verb chains, and three-part slogans as a hard AI-signature pattern in public marketing copy unless the content is factually exactly three named parts. Use 2 items, 4 items, 1 item, or a full sentence. Max one rhetorical triad per piece, and factual lists are exempt from that cap. In tweets, quote-tweets, hooks, and short social replies, treat three-part noun stacks, three-beat paragraph structures, and three-item evidence lists as publish-blockers unless the source itself requires exactly three named parts.

### AI-first anchoring
The model wrote the first draft and the final piece still follows the model's default center. The prose may look clean, but the angle, structure, CTA, examples, and rhythm still come from the first model output.

**Fix:** Do not line edit. Run the anti-anchoring pass in ai-role.md. Name the human claim, rebuild the structure, then rewrite.

### Model-average claim
The point is true, safe, and too centered: "AI improves productivity", "privacy is important", "developers need better tools", "users want seamless experiences."

**Fix:** Add the specific tension, constraint, tradeoff, example, decision, or human judgment that makes the claim worth saying.

Local examples:

- "Starknet is fast and scalable." -> name the buyer loop, constraint, shipped piece, or demo.
- "Privacy will unlock institutional adoption." -> name the compliance bottleneck, disclosure boundary, or operational tradeoff.
- "Agents need verifiable identity." -> name the failure mode, actor, and verification surface.

### Domain term collision
Using `receipt`, `proof`, or `proof point` as generic strategy language in Starknet, ZK, crypto, or post-quantum prose.

**Why it fails:** `receipt` reads like AI lingo. `proof` has a literal cryptographic meaning in this domain. `evidence` is allowed when the sentence means support for a claim.

**Fix:** Name the actual thing. Use `evidence`, `demo`, `working example`, `visible work`, `shipped piece`, `outside commitment`, `public artifact`, `validation signal`, `data point`, `named partner signal`, or `something people can inspect`.

### Synthetic social fit
The post is coherent but unplaced. It could appear under many conversations without changing. It does not answer a live trigger, claim, question, audience, or situation.

**Fix:** Name what the post is responding to. Add a situated observation, constraint, or stance. If no trigger exists, rewrite as a standalone note instead of a reply.

### Transformation crutch
"Turns into", "becomes real", and "it stops being" often read like AI summary glue: "X turns into Y", "the concern turns into panic", "a feature turns into a strategy", "the risk becomes real", "it stops being a pile of notes."

**Fix:** Name the concrete action, threshold, actor, or consequence. Prefer "forces panic coordination", "creates a migration problem", "breaks custody assumptions", or "pushes wallets to move."

### Uniform sentence length
Several consecutive sentences with the same length and shape make prose sound metronomic. Structure is the loudest detection signal. Fix every flagged word and uniform pacing still reads as AI, and three consecutive same-length sentences is the strongest single tell.

**Fix:** Read it aloud. If it sounds like text-to-speech, vary it. In neutral prose, three clipped declaratives in a row usually need subordination that shows how the ideas relate (cause, contrast, qualification). Use complete sentences by default. Keep an intentional fragment when the format or voice earns it.

### Uniform paragraph length
Every paragraph 3-5 sentences, roughly the same size.

**Fix:** Some paragraphs should be one sentence. Some should run long.

### Identical paragraph structure
AI follows: topic sentence -> explanation -> example -> transition.

**Fix:** Some start with questions, some with blunt statements. Some end without a transition.

### Hedging seesaw
Equal-weighted "on one hand / on the other."

**Fix:** Pick a side. Acknowledge the counter in one sentence max.

### Numbered list inflation
"Five things you need to know." Padding to hit a number.

**Fix:** Only use numbered lists when content is genuinely N discrete parallel items.

### Bullet lists of bare noun phrases
Five or more symmetric, verb-less items of six words or fewer ("Reliable pool connectivity / Optimized performance / Seamless integration").

**Fix:** Rewrite each item as a checkable claim with a verb and a number. Changelogs and parameter docs are exempt, since those are genuine lists.

### Excessive headers
3+ headings in under 300 words. Headers like "Overview," "Key Points," "Summary," "Conclusion."

**Fix:** Merge sections. Use prose transitions. Headers should tell the reader something specific.

### Inline-header lists
Bullet items starting with bold headers that restate themselves: "**Performance:** Performance improved by…"

**Fix:** Strip the header and write the point directly.

### Fragmented headers
A heading followed by a one-line restating paragraph before the actual content.

**Fix:** Cut the restate. Go straight to the content.

### Title case headings
"Strategic Negotiations And Key Partnerships."

**Fix:** Sentence case for subheadings. Title case only for the main title.

### "Challenges and Future Prospects" sections
Formulaic "Despite challenges, X continues to thrive" closers.

**Fix:** Name the actual challenge and the actual response. Or cut.

---

## Voice and stance patterns

### False agency
Sentences that assign human judgment, intent, choice, or responsibility to an inanimate subject:
- "a complaint becomes a fix" — someone fixed it
- "a bet lives or dies" — someone kills it or ships it
- "the decision emerges" — someone decided
- "the culture shifts" — people changed behavior
- "the conversation moves toward" — someone steered
- "the data tells us" — someone read it and concluded
- "the market rewards" — buyers paid

**Fix:** Name the human when the sentence hides responsibility or interpretation. Keep ordinary literal verbs: a report can show a result, a system can return an error, and a paper can argue a position.

### Narrator-from-a-distance
- "Nobody designed this."
- "This happens because…"
- "People tend to…"

**Fix:** Put the reader in the room. "You don't sit down one day and decide to…" beats "Nobody designed this."

### Passive voice
- "X was created" -> name who
- "It is believed that" -> name who believes
- "Mistakes were made" -> name who made them

**Fix:** Find the actor. Lead with them.

### Subjectless fragments
- "No configuration file needed."
- "The results are preserved automatically."

**Fix:** "You don't need a configuration file. The system preserves the results."

### Vague attributions
- "Experts believe"
- "Studies show"
- "Industry leaders agree"

**Fix:** Cite the expert, study, or leader. If no source exists, narrow the claim to what the evidence supports or leave a visible source slot. Do not keep the claim and drop only the attribution.

### Notability name-dropping
"Cited in NYT, BBC, FT, and The Hindu."

**Fix:** One specific reference with context beats four name-drops. ("In a 2024 NYT interview, she argued…")

### Significance inflation
- "marking a pivotal moment in the evolution of…"
- "a watershed moment for the industry"
- "a testament to the transformative power of…"

**Fix:** State what happened. Let the reader judge significance.

### Promotional language
- "nestled in the breathtaking foothills"
- "a vibrant hub of innovation"
- "a thriving ecosystem"

**Fix:** Plain description. "Is a town in Gonder. Has 12 startups."

### Superficial -ing analyses
"…symbolizing the region's commitment to progress, reflecting decades of investment, showcasing a new era of collaboration."

**Fix:** Replace with specific facts or cut entirely.

### Generic positive conclusions
- "The future looks bright"
- "Exciting times lie ahead"
- "This represents a major step in the right direction"

**Fix:** Cut. If the piece needs a closer, make it specific.

### Emotional flatline
- "What surprised me most…"
- "I was fascinated to discover…"
- "What struck me was…"
- "This is genuinely hard"
- "This is what X actually looks like"

**Fix:** If it's surprising, the content should make the reader feel that. Don't announce the emotion or the assessment.

### Novelty inflation
- "He coined the term"
- "a problem nobody talks about"
- "the failure mode nobody's naming"
- "what nobody tells you about"

**Fix:** Most ideas aren't new. Describe what the person *did with* the concept. Assume non-novel and frame accordingly.

### Persuasive authority tropes
- "The real question is"
- "A real problem"
- "A real opportunity"
- "At its core"
- "What really matters"
- "The deeper issue"
- "The heart of the matter"

**Fix:** Cut. These pretend to cut through to deeper truth, then restate an ordinary point.

### Fake-casual register
The register models emit when asked for lowercase-casual social voice. It can sit close to a real house voice, so it slips through cleanup.

- label-prefix openers: "hot take", "plot twist", "fun fact", "pro tip", "PSA", "unpopular opinion", "real talk", "spoiler" (with or without the colon)
- one-word verdict closers: "wild.", "insane.", "unhinged."
- wink asides: "(yes, really)", "(no, seriously)"
- stage directions: "*checks notes*", "*chef's kiss*", "*mic drop*"
- "because of course it does"

**Fix:** Delete the label and say the thing. Replace the verdict word with the specific surprise. Cut the wink and the stage business. A strong observation needs no costume.

### Credential-announcing openers
- "As a [role], I…"
- "Speaking as someone who…"

**Fix:** Say the thing. The credential belongs in the bio, and readers who need it will look it up.

### Aphorism formulas
- "X is the Y of Z" ("privacy is the currency of adoption")
- "the language / currency / architecture of…"
- "X is not a tool but a mirror"

**Fix:** Replace the formula with the concrete claim it gestures at. If nothing concrete sits underneath, cut the line.

### Self-labeling significance
- "That last move is the contrarian one."
- "The third bullet is the story."

**Fix:** Cut the label and let the item carry its own weight, or move the item to where it lands. Back-pointing at your own list is emphasis the list did not earn.

---

## Chatbot-origin artifacts

### Conversational tics
- "Certainly!" / "Absolutely!" / "Of course!"
- "I hope this helps!"
- "Let me know if you need anything else."
- "Feel free to reach out."

**Fix:** Remove entirely.

### Sycophancy
- "Great question!"
- "Excellent point!"
- "You're absolutely right!"

**Fix:** Remove. Different from chatbot artifacts in that it specifically validates the reader.

### Meta-narration
- "In this article, we'll explore…"
- "Let's dive in!"
- "Now let's look at…"
- "Without further ado"
- "As we'll see"
- "But that's another post"
- "You already know this, but"

**Fix:** Direct opening. Cut the announcement.

### Reasoning-chain leakage
- "Let me think step by step"
- "Breaking this down"
- "Working through this logically"
- "Step 1:"

**Fix:** State the conclusion, then the evidence. The reader doesn't need the scaffolding.

### Knowledge-cutoff disclaimers
- "As of my last update"
- "While specific details are limited based on available information"
- "I don't have access to real-time data"

**Fix:** Find the info or remove the hedge. Never publish a sentence that admits the writer didn't look something up.

### Curly quotation marks
ChatGPT defaults to curly quotes (" " ' ').

**Fix:** Replace with straight quotes (" ').

### Markdown in plain-text contexts
`**bold**` and `## headers` in emails, DMs, SMS. Asterisks rendering as symbols is an instant tell.

**Fix:** Strip markdown when the destination is plain text.

### Emoji bullets
Every line starting with `✅` or `🔥` or `💡`.

**Fix:** Cut. One or two emoji per social post is the generic ceiling, never as bullet markers. A supplied voice overlay may set the ceiling to zero.

### Hashtag stacks
Five hashtags at the end of a post.

**Fix:** Zero to two, integrated naturally. A supplied voice overlay may set the ceiling to zero.

### Paste artifacts
Debris that survives a copy-paste from a chat window:

- unfilled placeholders: "[Your Name]", "[Company]", "2025-XX-XX"
- citation markup: "citeturn0search0", "oaicite", "contentReference", bracketed "[1][2]" with no reference list
- trailing "Sources:" blocks
- AI-tool URL parameters: "utm_source=chatgpt.com", "utm_source=claude.ai", "utm_source=perplexity.ai"
- chat preambles: "Sure — here's the revised version:"
- apology hedges: "I apologize for the confusion"
- stray JSON keys or half a markdown table

**Fix:** Strip mechanically before any style pass. Check the query string of every pasted link. These are near-deterministic tells, and one leaked utm_source outs the whole post.

### Wall-of-text replies and recap-flattery openers
Slack, GitHub, and forum replies shaped like essays: four or more sentences with zero line breaks, or an opener that restates the other person's own work back at them as praise before getting to the point.

**Fix:** Break at thought boundaries the way a person types. Start at the point. Long-form single paragraphs in articles never flag, since this is a reply-shape rule.

### Stale platform cues
Generic social-ad texture: emoji bullets, hashtag defaults, "unlock", "elevate", "game-changer", "link in bio", "get yours now", empty excitement, generic CTA endings. Launch-copy dramatic introductions belong here too: "Enter X.", "Meet X, your new…", "Say hello to", "Think X meets Y", "your new favorite".

**Fix:** Cut by default. Keep only when the channel, audience, and specific post actually reward the cue.

### Cross-format average cues
The draft has no obvious social-ad texture, but still feels model-centered: generic claim, uniform rhythm, unsupported confidence, no human constraint, no domain-specific tradeoff.

**Fix:** Replace the average center with a concrete claim, evidence, limit, or decision. If the writer is expert or voice-sensitive, run the anti-anchoring pass in ai-role.md before rewriting.
