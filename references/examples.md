# Examples and regression cases

Each rewrite preserves the information in the draft. When the source is incomplete, the repair keeps the gap visible instead of inventing evidence.

## Example 1: filler and formula

**Before**

> Here's the thing: the rollout is not a tooling problem. It is a review problem. Let that sink in.

**After**

> The rollout is blocked because two reviewers still need to approve it.

**Why**

The source already named review as the blocker. The rewrite removes the setup and makes the blocker concrete without adding a new cause.

## Example 2: product puffery

**Before**

> This comprehensive platform provides a seamless way to approve expenses from the receipt review screen.

**After**

> Reviewers can approve an expense from the same screen where they check the receipt.

**Why**

The rewrite keeps the product behavior and removes decorative claims.

## Example 3: technical term preserved

**Before**

> The service uses idempotency keys. An idempotency key prevents the same payment request from running twice when a client retries it.

**After**

> The service uses idempotency keys, which stop a retried payment request from running twice.

**Why**

The technical term is necessary and is explained once.

## Example 4: connected clauses kept together

**Before**

> The worker polls the file. It reacts when the file changes.

**After**

> The worker polls the file and reacts when it changes.

**Why**

The two clauses describe one action and are easier to follow together.

## Example 5: responsibility named

**Before**

> The launch was delayed after the risk was reviewed.

**After**

> The release team delayed the launch after reviewing the risk.

**Why**

The draft names no actor. Use this rewrite only when the release team is known from the source. Otherwise keep the actor unknown and ask for it.

## Example 6: literal subject kept

**Before**

> The API returns a 409 error when the request reuses an idempotency key with different data.

**After**

> The API returns a 409 error when the request reuses an idempotency key with different data.

**Why**

The literal subject is clear. Forcing a human actor would make the sentence worse.

## Example 7: vague source boundary

**Before**

> Industry observers say adoption doubled after launch.

**After in detect mode**

> Name the observers and the adoption dataset, or remove the claim.

**Why**

The draft gives no source. A rewrite cannot safely manufacture one.

## Example 8: plain does not mean short

**Before**

> The retry passed after cache invalidation, confirming the issue.

**After**

> The first request used stale cached data and failed. The team cleared the cache, ran the same request again, and it passed. This result points to the cache as the likely cause, but it does not prove the cause by itself.

**Why**

Use the longer version only when the source supports each step. It restores the sequence and keeps the uncertainty.

## Regression cases

Run these after any change to the core skill or references.

| Case | Input | Mode | Expected behavior |
|---|---|---|---|
| 1 | A paragraph with several Tier-1 words but clear facts | rewrite | Replace decorative wording and preserve every fact. |
| 2 | `The API returns a 409 error.` | rewrite | Keep the literal subject and technical result. |
| 3 | A technical term followed by a plain definition | rewrite | Keep the term and explain it once. |
| 4 | `Experts say the market grew 40%.` with no source | rewrite | Do not invent a source. Narrow, flag, or ask. |
| 5 | A factual three-item list | rewrite | Keep all three items when each is required. |
| 6 | A deliberate fragment in a supplied personal voice sample | rewrite | Keep it when the format and voice earn it. |
| 7 | A polished AI-first social draft with no live trigger | detect | Flag AI-first anchoring and synthetic social fit before word cleanup. |
| 8 | A second pass changes a central claim sentence | rewrite | Create a revision artifact or explain that review is needed. |
