# Stop Slop

Stop Slop edits AI-assisted drafts that sound polished but generic. It cuts canned wording and repeated sentence shapes while keeping the draft's facts, uncertainty, technical terms, and useful voice.

[Try the browser workbench](https://odinfree.github.io/stop-slop-refined/) or [read the skill](SKILL.md).

## Use it for

- emails, memos, and leadership updates
- posts, launch copy, and website text
- documentation and research notes
- a detect-only review before publication

## What it does

- `rewrite` returns clean prose first. It keeps diagnosis backstage unless the user asks for it.
- `detect` quotes the problem, explains the reader consequence, and suggests the smallest repair.
- It keeps claims inside the attached sources and preserves qualifications and necessary technical language.
- Before line edits, it checks whether AI chose the claim, outline, and first example. If it did, the editor rebuilds from the human point.
- The final pass catches overused AI wording, paste debris, formulaic structure, and fake-casual social copy.

The browser workbench is an editing aid. It does not identify who wrote the text.

## Quick use

Rewrite a draft:

```text
Rewrite this with Stop Slop. Preserve every supported claim and qualification. Return the clean draft first.
```

Audit without rewriting:

```text
Run Stop Slop in detect mode. Quote each problem, explain the reader consequence, and give the smallest repair.
```

## Install

### Claude Code

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/odinfree/stop-slop-refined.git ~/.claude/skills/stop-slop
```

### Codex

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/odinfree/stop-slop-refined.git ~/.codex/skills/stop-slop
```

### ChatGPT or Claude projects

Attach the full package to the project. If the platform accepts only selected files, start with `SKILL.md` and add the references it names as needed.

### Update an existing clone

```bash
git -C ~/.claude/skills/stop-slop pull --ff-only
git -C ~/.codex/skills/stop-slop pull --ff-only
```

## Editing order

1. Protect facts, uncertainty, and source limits.
2. Check who chose the first creative shape.
3. Fix the argument and sentence structure.
4. Apply the plain-writing baseline.
5. Remove formulaic wording, patterns, and formatting debris.
6. Read the result again as a first-time reader.

## Reference files

| File | Open it when you need |
|---|---|
| [`references/words.md`](references/words.md) | word tiers, phrase bans, and replacements |
| [`references/patterns.md`](references/patterns.md) | sentence, structure, voice, and formatting checks |
| [`references/examples.md`](references/examples.md) | before-and-after examples and 14 regression cases |
| [`references/ai-role-and-reader-fit.md`](references/ai-role-and-reader-fit.md) | anti-anchoring, source boundaries, and reader fit |
| [`references/revision-artifact.md`](references/revision-artifact.md) | the trigger and data format for an inspectable second-pass diff |

Personal and team voice profiles stay outside this public package. Add a local voice overlay when a writer needs one.

## Revision artifact

A substantive second pass can produce an HTML file with the first draft, final draft, and sentence-level changes. Read the [artifact workflow](references/revision-artifact.md), then run:

```bash
node scripts/build_revision_artifact.mjs \
  --data /path/to/revision-data.json \
  --output /tmp/stop-slop-revision.html
```

## Development

Regenerate the browser data after changing the word or pattern references:

```bash
node scripts/generate-site-data.mjs
git diff --exit-code -- docs/site-data.js
node --check docs/app.js
node --check scripts/generate-site-data.mjs
```

Serve `docs/` with any static file server.

Current public release: 3.1.1. See [CHANGELOG.md](CHANGELOG.md) for release notes.

## Attribution and license

See [ATTRIBUTION.md](ATTRIBUTION.md) for the source and license boundaries. This repository is MIT licensed. Attribution does not change the license of a source that has no license of its own.
