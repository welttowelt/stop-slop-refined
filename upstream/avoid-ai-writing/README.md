# Upstream contribution: conorbronsdon/avoid-ai-writing

Conor closed [#54](https://github.com/conorbronsdon/avoid-ai-writing/issues/54)
with an invitation to send back the patterns this repo's merged catalog has and
that one lacks, since the daily publishing here sits in the genre their Tier 3
phrase cluster rule targets. This directory holds what goes back.

Two pieces, matching the two levels they asked for:

| File | What it is |
|---|---|
| `0001-crypto-launch-genre-patterns.patch` | A commit against `main`, tests passing. Twelve Tier 3 phrases, two detector categories, one judgment-only rule. |
| `PULL_REQUEST.md` | The PR body, filled against their `.github/PULL_REQUEST_TEMPLATE.md`. |
| `ISSUE-pattern-gaps.md` | Eight more gaps with examples, each one a judgment call their CONTRIBUTING says to raise as an issue first. |

## What the patch changes

- **Twelve more Tier 3 phrases.** `democratizing access to`, `permissionless
  innovation`, `powering the next generation of`, `purpose-built for`,
  `first-of-its-kind`, `industry-leading`, `battle-tested`, `unlocking new
  possibilities`, `mass adoption`, `the future of finance / money / the internet
  / work`, `bridging the gap between`, `institutional-grade`. Same density and
  cluster gates as the existing ten.
- **`dramatic-intro`** — the ad-break reveal. "Enter Aegis." / "Think Figma
  meets GitHub."
- **`self-qa-volley`** — "Is it fast? Yes. Is it cheap? Also yes."
- **Domain-term collision** — judgment-only, listed under CATEGORIES.md §C. A
  replacement is wrong when the plainer word is already taken in the domain.

Catalog 61 → 64, engine 47 → 49 `type`s.

## Submitting it

Their repo is not attached to this session, so the patch was built and tested
against a fresh clone rather than pushed. To send it:

```bash
git clone https://github.com/<your-fork>/avoid-ai-writing.git
cd avoid-ai-writing
git checkout -b crypto-genre-patterns
git am /path/to/0001-crypto-launch-genre-patterns.patch
npm test
bash scripts/check-pattern-count.sh
npm run self-scan:check
git push -u origin crypto-genre-patterns
```

Then open the PR with `PULL_REQUEST.md` as the body, and file
`ISSUE-pattern-gaps.md` separately.

## Checks run before the patch was exported

All against upstream `cf60f76` (`docs: refresh repository guidance (#106)`):

- `npm test` — detector fixtures, CATEGORIES.md contract, validator, corpus
  helpers, style checks. Green, including the five new fixtures.
- `bash scripts/check-pattern-count.sh` — 64 categories, 112 word entries.
- `bash scripts/sync-plugin-skill.sh` — plugin copy and `plugin.json` version
  regenerated from the root `SKILL.md` (3.24.0).
- `npm run self-scan:check` — every document still inside its score budget.
