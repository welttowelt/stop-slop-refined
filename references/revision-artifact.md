# Revision artifact

Create an inspectable HTML diff when the second pass changes several sentences or touches a central claim, decision, qualification, or factual boundary.

This workflow adapts the sentence-record idea from Shreya Shankar's Plain Writing skill. The implementation in this repository uses original code and [revision_template.html](../assets/revision_template.html).

## Trigger

Create the artifact when any condition applies:

- the second pass rewrites or removes three or more sentences
- one changed sentence carries a decision, factual boundary, qualification, or central claim
- the user asks to inspect the diff
- the document has a high review cost

Skip it for spelling fixes, punctuation cleanup, or one small rewrite with no change in meaning.

## Sequence

1. Finish structural changes.
2. Save the first cleaned draft before the final reader pass.
3. Run the final reader pass clause by clause.
4. Record each sentence as `keep`, `edit`, or `del`.
5. Group records by paragraph.
6. Save the records as JSON.
7. Run `scripts/build_revision_artifact.mjs`.
8. Open the file once and share its path.

## Builder

```bash
node scripts/build_revision_artifact.mjs \
  --data /path/to/revision-data.json \
  --output /tmp/stop-slop-revision.html
```

Use `--data -` to read JSON from standard input.

## Data shape

```json
[
  {
    "para": 1,
    "items": [
      {"type": "keep", "text": "This sentence stayed the same."},
      {"type": "edit", "old": "This sentence was vague.", "new": "The audit found two unresolved access-control bugs.", "why": "names the result"},
      {"type": "del", "old": "It is worth noting that the result is significant.", "why": "empty emphasis"}
    ]
  }
]
```

## Record rules

- `keep` needs `text`.
- `edit` needs `old`, `new`, and `why`.
- `del` needs `old` and `why`.
- Keep paragraph numbers in source order.
- Record whole sentences.
- Explain section moves separately because a sentence diff cannot show them clearly.

The builder validates the data and safely encodes embedded text before inserting it into the template.
