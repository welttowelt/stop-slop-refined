Title: Add crypto/launch-genre patterns: 12 Tier 3 phrases, two detectors, one judgment rule

---

## Summary

Taking up the offer from #54. These are the gaps that showed up running this
catalog against a year of daily protocol and launch copy — the genre the Tier 3
phrase cluster rule already targets, which is why the misses cluster there.

**Twelve more Tier 3 phrases**, on the existing density and per-phrase gates:
`democratizing access to`, `permissionless innovation`, `powering the next
generation of`, `purpose-built for`, `first-of-its-kind`, `industry-leading`,
`battle-tested`, `unlocking new possibilities`, `mass adoption`, `the future of
finance / money / the internet / work`, `bridging the gap between`,
`institutional-grade`.

Four candidates were held out on purpose and the reason is in the SKILL.md prose
under the table: `composability`, `capital efficiency`, `trustless`, and
`real-world assets` each name a specific mechanism in DeFi writing, so listing
them would flag the people who use them precisely. Every phrase that did land is
a wrapper — strip it and the sentence loses no checkable claim. That is the test
I used to sort the list.

**`dramatic-intro`** — the ad-break reveal. A build-up sentence about the
problem, then the product name dropped as its own beat: "We tried four
sequencers and every one fell over at the same place. Enter Aegis." Plus the
pitch-deck analogy form, "Think Figma meets GitHub." The name is the only content
in the beat, so the drama is carrying a sentence with no claim in it.

Precision work: case-sensitive and sentence-initial on both branches. The `Enter`
branch carries a stop-list (key names, form-field nouns, determiners) and
requires the sentence to *end* at the name, because the tell is the fragment.
That keeps it off "Enter your API key", "Enter Y to continue", "Enter Ctrl-C",
and "Enter the build directory and run make" — all of which are in the
must-not-fire fixture. A product literally named after a stop-listed word is
missed; that is a recall loss taken in the safe direction.

**`self-qa-volley`** — "Is it fast? Yes. Is it cheap? Also yes." The model
interviewing itself: it poses the question the reader supposedly has, answers in
one word, and repeats. Each question is picked because the answer is favorable,
so the passage reads as coverage while never touching what a skeptic would ask.

Precision work: the pattern is the unit written twice, so a single
question-and-answer pair — ordinary emphasis — stays clean. The gap between the
two beats matches `[ \t]+` only, which is what separates this from the
false-positive class: a real FAQ puts each question in a heading or a list item,
so there is a newline between them. Both cases are fixtures.

**Domain-term collision** — judgment-only, listed under CATEGORIES.md §C. A
replacement is wrong when the plainer word is already taken. `proof` and `proof
point` as generic business nouns in cryptography writing collide with the
mathematical object the system actually produces; `receipts` in the "show your
receipts" sense collides with a protocol that emits literal ones; `foundation`
collides in a piece about a named Foundation. Whether a word collides depends on
the audience, which is not in the text — "the proof is in the pipeline" is a tell
in a ZK post and unremarkable in a marketing memo. So it is skill prose, not a
regex.

Catalog 61 → 64, engine 47 → 49 `type`s, version 3.24.0.

Eight further gaps that need a judgment call before anything is written are in a
separate issue rather than in this PR, per CONTRIBUTING.

## Checklist

- [x] `npm test` passes (engine fixtures + `CATEGORIES.md` contract check)
- [x] If I added a detector `type`: it's documented in `detector/CATEGORIES.md` and has a fixture in `detector/patterns.test.js` (a true positive **and** a must-not-fire case)
- [x] If I added a judgment-only rule: it's listed under "Skill-only" in `detector/CATEGORIES.md`
- [x] I considered false positives and added carve-outs for legitimate human writing
- [x] Any factual claim about how AI or humans write (e.g. "ChatGPT emits X", "humans rarely do Y") cites a source
- [x] The prose I added passes the skill's own audit (no AI-writing tells, terse bullets, no hollow intensifiers)
- [x] `CHANGELOG.md` entry added under a dated `## [X.Y.Z]` heading, and `SKILL.md` `version:` bumped if a rule changed

Notes on two of those boxes:

**Sources.** No frequency claim is made anywhere in this diff, so there is
nothing to cite. The phrase list is described as what it is — phrases observed
in one genre over a year of daily reading — and the two new categories are
argued from what the sentence does to a reader, not from a ratio. If you would
rather the phrase list carry a corpus measurement before it ships, say so and I
will run it against whatever machine corpus you want to point at; `npm run fp`
is already there.

**Self-audit.** `npm run self-scan:check` passes with the new prose in place.
The one edit it prompted: a draft of the self-QA section said the answers are
"always the ones that flatter the subject", which is the gratuitous universal
quantifier this repo flags under moral-adjective category errors. It now reads
"the answers run in the subject's favor."

## Also run

- `bash scripts/check-pattern-count.sh` — 64 categories, 112 word entries
- `bash scripts/sync-plugin-skill.sh` — plugin copy and `plugin.json` regenerated
- `npm run self-scan:check` — every document inside its budget
