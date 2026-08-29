Title: Eight pattern gaps from the crypto/launch genre, each needing a call before anything is written

---

Follow-up to #54. The three rules I was confident about are in a PR. These eight
are the ones where CONTRIBUTING says to open an issue first, either because the
false-positive class is a genuine human habit or because the rule would touch a
threshold that already ships. One comment rather than eight issues; happy to
split any of them out.

Format for each: the shape, an example from the genre, what the nearest existing
rule does and does not cover, and the call I am asking for.

---

### 1. Dash substitutes that survive a de-slop pass

**Shape.** A spaced hyphen or a spaced en dash doing em-dash duty, or a comma
splice carrying the old dash rhythm.

> The prover is the bottleneck - not the sequencer - and that changed the whole
> roadmap.

> The prover is the bottleneck – not the sequencer – and that changed the whole
> roadmap.

**Existing coverage.** The Formatting rule names `—` and `--`, and the detector's
rate check counts both. Neither the spaced hyphen nor the en dash is counted.

**Why it matters here specifically.** This is the artifact this repo's own advice
produces. Someone told to strip em dashes swaps the character and keeps the
clause structure, and the result reads exactly as before to anyone who was
reading the structure rather than the glyph.

**The call.** Two options, and I do not think it is mine to pick. Either count
substitutes toward the existing 1-per-1,000 budget — which changes a shipping
threshold and needs an FP run before it lands — or leave the rate alone and
handle the swap as skill prose under Formatting. The en dash is the awkward half:
spaced en dash is the standard dash in British and Oxford house style, so a rate
rule that counts it will fire on correct human typography from a whole publishing
tradition.

---

### 2. Decorative colon reveal in running prose

**Shape.** A short noun-phrase label, a colon, then the payload, mid-paragraph.

> The promise: proofs cheap enough to post every block.

> The takeaway: nobody has solved the data-availability cost yet.

> The point is simple: the fee market is the product.

**Existing coverage.** List-label periods handles the bullet case, and in the
opposite direction — it says a human writes the colon where the LLM writes a
period. The running-prose case is the reverse move and is not covered: in a
paragraph, the colon-reveal is the tell and a full clause is the fix.

**The call.** Whether the two rules can coexist without contradicting each other
in a reader's head. They are consistent (bullet label wants a colon, prose
sentence wants a clause) but the pair needs to be written carefully or it reads
as the skill flip-flopping. Also worth deciding whether the exemption list is
worth it: short social posts do use a genuine label opener ("shipped: the
migration doc"), which is content, not staging.

---

### 3. Transformation crutch

**Shape.** Summary glue that asserts a state change without naming an actor, a
threshold, or a consequence.

> Once custody moves on-chain, the compliance question turns into an
> engineering question.

> The risk becomes real when the bridge is the only exit.

> It stops being a pile of notes and starts being a system.

**Existing coverage.** The split-sentence negation rule quotes "stops being X and
starts being Y", but as an instance of the contrast structure. The bare
transformation with no contrast in it — "turns into", "becomes real" — has no
home.

**Fix I use.** Name the action, the threshold, or the party. "Once custody moves
on-chain, the compliance team has to review the contract, not the counterparty."

**The call.** This is judgment-only in my read: "turns into" is ordinary English
and a regex on it would flag half the technical writing in existence. If you
agree, it is a SKILL.md paragraph and a §C line. If you think there is a
detectable sub-shape, I would rather you scope it than guess.

---

### 4. Dramatized contrast against the crowd

**Shape.** A true fact with a trailing clause inventing a lagging crowd.

> We shipped it in 2022, while everyone else was still debating timelines.

> Built it in a weekend, while the industry wrote thinkpieces.

**Existing coverage.** "Forced contrarianism" is in the never-inject list — a
constraint on the rewriter, not a detection on the text. So the skill will not
add one, but it also will not flag one the author wrote.

**Why it is a tell and not just a brag.** The crowd is never named and its
position is never quoted. The clause is a strawman with a date attached, which is
what separates it from a real competitive claim ("Polygon shipped theirs in
2023").

**The call.** Whether a never-inject entry should imply a detection entry. There
may be a general principle here worth deciding once, since the same asymmetry
applies to fake first person and manufactured stakes.

---

### 5. Credential-announcing openers

**Shape.**

> As a protocol engineer, I can tell you the fee math does not work.

> Speaking as someone who has run a validator since 2021, this is optimistic.

**Existing coverage.** None that I can find. Nearest neighbours are notability
name-dropping (piling on others' credentials) and vague third-party validation
(an unnamed authority). This is the first-person version: the writer's own
credential, front-loaded, doing the work the argument should do.

**Carve-out that makes it hard.** The credential is sometimes the whole content —
a disclosure ("as the author of the EIP this thread is about"), or the answer to
a question about standing. Same structure as your conflict-of-interest carve-out
under narrated candor.

**The call.** Whether that carve-out can be drawn tightly enough to be worth a
rule.

---

### 6. Fake-casual staging

**Shape.** The costume a model puts on when asked for lowercase-casual social
voice. Three sub-shapes:

- label-prefix openers: `hot take:`, `unpopular opinion:`, `fun fact:`,
  `pro tip:`, `PSA:`, `hard truth:`, `friendly reminder:`
- one-word verdict closers: `wild.`, `insane.`, `unhinged.`
- stage directions: `*checks notes*`, `*chef's kiss*`, `*mic drop*`

**Existing coverage.** Infomercial engagement hooks covers `Plot twist:` and the
fake-candid register (`Real talk:`, `Honestly?`, `Look,`). The rest of the family
is not listed.

**Why I did not put this in the PR.** Every one of these is a real human internet
idiom that humans invented and models copy. A flat regex on `hot take:` flags
ordinary Twitter. I think the honest version is a cluster rule — two or more
staging moves in one short post — or nothing, and a cluster rule needs a
threshold I would rather not pick unilaterally.

**The call.** Cluster rule, prose-only, or drop it.

---

### 7. Model-average claim

**Shape.** A claim that is true, safe, and centred on the field's consensus,
carrying no tension, constraint, or tradeoff.

> AI improves developer productivity.

> Privacy is important for institutional adoption.

> Agents need verifiable identity.

**Existing coverage.** Nothing directly. The treadmill-effect test ("what's
actually new here?") is adjacent but asks about a paragraph restating its own
premise; this is about a claim that never had a stake in the first place.

**Fix I use.** Add the specific tension, constraint, tradeoff, or decision that
makes the claim worth saying. "Privacy is important for institutional adoption"
→ name the compliance bottleneck or the disclosure boundary.

**The call.** This is a writer-side test in the same family as
paragraph-reshuffle immunity, so it may belong there rather than in the flagging
catalog.

---

### 8. AI-first anchoring — the one I would most like your read on

**Shape.** Not a phrase. The model wrote the first draft, a human cleaned it, and
the finished piece still sits at the model's default centre: its angle, its
structure, its examples, its rhythm. Every flag clears and the piece is still
the model's.

**Existing coverage.** The "Never inject these" section is the mirror image of
this — constraints on the editor, justified by provenance being invisible to any
pattern. That section already argues the key point ("the difference is
provenance, which no pattern can see"). What is missing is the other half: what
to do when provenance runs the other way and the *source* is the model's.

**What I run.** When AI supplied the first shape, or provenance is unknown and
the writer is an expert, line edits are the wrong move — they preserve the shape.
Instead: name the human claim in one sentence, rebuild the structure from it,
then write. For expert, founder, and voice-sensitive work the default is human
draft first, AI critique second.

**The call.** Whether this belongs in this repo at all. It is a pipeline rule
rather than a text rule, and it may be out of scope for a skill that audits text
it is handed. But it is the single largest structural difference between the two
catalogs, so I would rather ask than assume.

---

Happy to PR any of these once you have called them, or to drop the ones you have
already considered and rejected. If it is easier, mark the ones you want and I
will work through them in that order.
