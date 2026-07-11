# Stop Slop

A public writing skill for plain, source-safe prose that removes formulaic AI writing without flattening meaning or voice.

[Open the interactive guide](https://welttowelt.github.io/stop-slop-refined/) or install the skill locally.

## Version 3.1

- Uses plain writing as the neutral baseline.
- Preserves claims, uncertainty, source boundaries, and necessary technical terms.
- Checks who supplied the first creative shape before editing an AI-assisted draft.
- Adds false-positive guards for technical terms, live rebuttals, factual triads, and clean detect passes.
- Covers current model-era tells, paste artifacts, crypto boilerplate, and fake-casual social copy.
- Returns clean prose before audit scaffolding.
- Provides 13 regression cases and an optional HTML revision artifact.
- Keeps personal and team-specific voice rules out of the public package.

## Package

```text
stop-slop-refined/
├── SKILL.md
├── references/
│   ├── words.md
│   ├── patterns.md
│   ├── examples.md
│   ├── ai-role-and-reader-fit.md
│   └── revision-artifact.md
├── assets/
│   └── revision_template.html
├── scripts/
│   ├── build_revision_artifact.mjs
│   └── generate-site-data.mjs
├── docs/
│   └── interactive GitHub Pages site
├── ATTRIBUTION.md
├── CHANGELOG.md
└── LICENSE
```

## Install

### Claude Code

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/welttowelt/stop-slop-refined.git ~/.claude/skills/stop-slop
```

### Codex

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/welttowelt/stop-slop-refined.git ~/.codex/skills/stop-slop
```

### ChatGPT or Claude projects

Use `SKILL.md` as the main instruction file. Add a reference only when the task needs its detail.

## Modes

- `rewrite` returns clean prose first and keeps the audit backstage.
- `detect` flags the exact issue, the reader consequence, and the smallest repair.

## Revision artifact

For a substantive second pass, build an inspectable HTML diff:

```bash
node scripts/build_revision_artifact.mjs \
  --data /path/to/revision-data.json \
  --output /tmp/stop-slop-revision.html
```

## Development

The browser detector reads generated data from the canonical word and pattern references.

```bash
node scripts/generate-site-data.mjs
git diff --exit-code -- docs/site-data.js
```

Serve `docs/` with any static file server.

## Attribution and license

See [ATTRIBUTION.md](ATTRIBUTION.md) for the sources and license boundaries. This repository is MIT licensed. A source without its own license does not become MIT licensed through attribution.
