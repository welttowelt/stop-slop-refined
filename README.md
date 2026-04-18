# Stop Slop

A public writing skill for removing common AI patterns from prose.

Use it to audit drafts, rewrite content, or pressure-test writing that feels too polished, too generic, or too obviously machine-generated.

This repo is intentionally generic. It does **not** include private overlays, personal voice systems, or team-specific guidance.

## What it does

- flags common AI writing patterns
- supports two modes: `rewrite` and `detect`
- separates word-level issues from structural issues
- encourages a second pass instead of a one-shot cleanup
- works as a local skill or as a prompt pack for ChatGPT, Claude, Codex, and similar tools

## Repo contents

```text
stop-slop-public/
├── SKILL.md
├── references/
│   ├── words.md
│   ├── patterns.md
│   └── examples.md
├── ATTRIBUTION.md
├── LICENSE
└── README.md
```

## Install

### Claude Code

```bash
mkdir -p ~/.claude/skills
cp -R stop-slop-public ~/.claude/skills/stop-slop
```

### Codex

```bash
mkdir -p ~/.codex/skills
cp -R stop-slop-public ~/.codex/skills/stop-slop
```

### ChatGPT or Claude projects

Use `SKILL.md` as the main instruction file. Pull in the files under `references/` when you want the word list, the pattern list, or examples.

### Plain chat use

Paste the key parts of `SKILL.md` into a project instruction, custom instruction, or the first message of a thread.

## Usage

Examples:

- `rewrite this with stop slop`
- `audit this for ai writing patterns`
- `detect only. do not rewrite`
- `use stop slop on this memo`

## Design choices

- short core file
- references split by job
- no personal voice layer
- no private company context
- no influencer-style fluff in the skill itself

## Credits

This repo was built with inspiration from several public projects. See [ATTRIBUTION.md](ATTRIBUTION.md) for source links, authors, and license notes.

## License

MIT. See [LICENSE](LICENSE).
