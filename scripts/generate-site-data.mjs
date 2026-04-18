import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

function collectSection(lines, startHeading) {
  const start = lines.findIndex(line => line.startsWith(startHeading));
  if (start === -1) return [];
  const out = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.startsWith("## ")) break;
    out.push(line);
  }
  return out;
}

function parseWordsTable(lines) {
  return lines
    .filter(line => /^\|/.test(line))
    .filter(line => !/^\|\s*---/.test(line))
    .filter(line => !/word or phrase/.test(line))
    .map(line => line.split("|").slice(1, -1).map(part => part.trim()))
    .filter(parts => parts.length === 2 && parts[0] && parts[1]);
}

function parseBullets(lines) {
  return lines
    .filter(line => /^\s*-\s+/.test(line))
    .map(line => line.replace(/^\s*-\s+/, "").trim())
    .map(line => line.replace(/^`|`$/g, ""));
}

function parseWords(md) {
  const lines = md.split(/\r?\n/);
  return {
    tier1: parseWordsTable(collectSection(lines, "## Tier 1:")),
    tier2: parseWordsTable(collectSection(lines, "## Tier 2:")),
    tier3: parseBullets(collectSection(lines, "## Tier 3:")),
    openers: parseBullets(collectSection(lines, "## Common bad openers")),
    fillers: parseBullets(collectSection(lines, "## Common filler phrases"))
  };
}

function normalizeGroup(heading) {
  const value = heading.replace(/^##\s+/, "").trim().toLowerCase();
  if (value === "sentence patterns") return "sentence";
  if (value === "structural patterns") return "structural";
  if (value === "voice and stance patterns") return "voice";
  if (value === "formatting artifacts") return "formatting";
  return value;
}

function parsePatterns(md) {
  const lines = md.split(/\r?\n/);
  const patterns = [];
  let group = "";
  let current = null;
  let inExamples = false;

  function pushCurrent() {
    if (current) patterns.push(current);
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      pushCurrent();
      current = null;
      group = normalizeGroup(line);
      inExamples = false;
      continue;
    }

    if (line.startsWith("### ")) {
      pushCurrent();
      current = {
        group,
        title: line.replace(/^###\s+/, "").trim(),
        examples: [],
        fix: ""
      };
      inExamples = false;
      continue;
    }

    if (!current) continue;

    if (/^Examples?:$/i.test(line)) {
      inExamples = true;
      continue;
    }

    if (line.startsWith("Fix:")) {
      current.fix = line.replace(/^Fix:\s*/, "").trim();
      inExamples = false;
      continue;
    }

    if (inExamples && line.startsWith("- ")) {
      current.examples.push(line.replace(/^- /, "").trim().replace(/^`|`$/g, ""));
    }
  }

  pushCurrent();
  return patterns;
}

function buildDetectorPatterns(patterns) {
  const byTitle = new Map(patterns.map(pattern => [pattern.title, pattern]));
  const regexMap = {
    "binary contrast": [
      { source: "\\bnot (?:a )?[\\w'-]+[,.;:]\\s+(?:it'?s\\s+)?(?:a\\s+|but\\s+)[\\w'-]+", flags: "gi" }
    ],
    "negative listing": [
      { source: "(?:^|[.!?]\\s+)(?:not\\s+[^.!?]+[.!?]\\s*){2,}", flags: "gi" }
    ],
    "rhetorical question transition": [
      { source: "\\b(?:so why|but what|but how) (?:does|do|is|are) this\\b", flags: "gi" }
    ],
    signposting: [
      { source: "\\blet's dive in(?:to)?\\b", flags: "gi" },
      { source: "\\bin this section\\b", flags: "gi" },
      { source: "\\bhere'?s what you need to know\\b", flags: "gi" }
    ],
    "reasoning-chain leakage": [
      { source: "\\blet me think step by step\\b", flags: "gi" },
      { source: "\\bworking through this logically\\b", flags: "gi" },
      { source: "\\bstep 1:\\b", flags: "gi" }
    ],
    "false agency": [
      { source: "\\b(?:the data|the market|the complaint|the product) (?:tells us|decided|became|knows)\\b", flags: "gi" }
    ],
    "vague attribution": [
      { source: "\\b(?:experts believe|experts say|research shows|industry observers note|studies show)\\b", flags: "gi" }
    ],
    "significance inflation": [
      { source: "\\b(?:a pivotal moment in the evolution of|a watershed moment|a testament to)\\b", flags: "gi" }
    ],
    "promotional description": [
      { source: "\\b(?:vibrant|thriving|bustling) (?:hub|ecosystem|community)\\b", flags: "gi" },
      { source: "\\bnestled in\\b", flags: "gi" }
    ],
    "emotional flatline": [
      { source: "\\bwhat surprised me most was\\b", flags: "gi" },
      { source: "\\bi was fascinated to discover\\b", flags: "gi" }
    ],
    "markdown in plain text": [
      { source: "\\*\\*[^*]+\\*\\*", flags: "g" }
    ],
    "em dash overuse": [
      { source: "—", flags: "g" }
    ]
  };

  return [...byTitle.keys()].flatMap(title => {
    const entries = regexMap[title];
    if (!entries) return [];
    return entries.map(entry => ({
      label: title,
      source: entry.source,
      flags: entry.flags
    }));
  });
}

const wordsMd = await readFile(path.join(repoRoot, "references", "words.md"), "utf8");
const patternsMd = await readFile(path.join(repoRoot, "references", "patterns.md"), "utf8");

const words = parseWords(wordsMd);
const patterns = parsePatterns(patternsMd);

const data = {
  tier1: words.tier1,
  tier2: words.tier2,
  tier3: words.tier3,
  openers: words.openers,
  fillers: words.fillers,
  patterns,
  detectorPatterns: buildDetectorPatterns(patterns)
};

const output = `// generated from references/words.md and references/patterns.md\n// do not edit by hand. run \`node scripts/generate-site-data.mjs\`.\nwindow.STOP_SLOP_DATA = ${JSON.stringify(data, null, 2)};\n`;

await writeFile(path.join(repoRoot, "docs", "site-data.js"), output);
console.log("wrote docs/site-data.js");
