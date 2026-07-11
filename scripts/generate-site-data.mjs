import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

function collectSection(lines, headingPattern) {
  const start = lines.findIndex(line => headingPattern.test(line));
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
    .map(line => line.split("|").slice(1, -1).map(part => part.trim()))
    .filter(parts => parts.length === 2 && parts[0] && parts[1])
    .filter(parts => !/^(?:replace|word|word or phrase)$/i.test(parts[0]));
}

function parseBullets(lines) {
  return lines
    .filter(line => /^\s*-\s+/.test(line))
    .map(line => line.replace(/^\s*-\s+/, "").trim())
    .map(line => line.replace(/^`|`$/g, ""));
}

function parseWords(md) {
  const lines = md.split(/\r?\n/);
  const tier3Section = collectSection(lines, /^## Tier 3\b/i);
  const tier3Table = parseWordsTable(tier3Section);
  return {
    tier1: parseWordsTable(collectSection(lines, /^## Tier 1\b/i)),
    tier2: parseWordsTable(collectSection(lines, /^## Tier 2\b/i)),
    tier3: tier3Table.length ? tier3Table.map(([word]) => word) : parseBullets(tier3Section),
    openers: parseBullets(collectSection(lines, /^## (?:Common bad openers|Banned sentence openers)\b/i)),
    fillers: parseBullets(collectSection(lines, /^## (?:Common filler phrases|Banned phrases)\b/i))
  };
}

function normalizeGroup(heading) {
  const value = heading.replace(/^##\s+/, "").trim().toLowerCase();
  if (value === "sentence patterns" || value === "sentence-level patterns") return "sentence";
  if (value === "word-use patterns") return "word use";
  if (value === "structural patterns") return "structural";
  if (value === "voice and stance patterns") return "voice";
  if (value === "formatting artifacts") return "formatting";
  if (value === "chatbot-origin artifacts") return "chatbot";
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
      inExamples = true;
      continue;
    }

    if (!current) continue;

    if (/^Examples?:$/i.test(line)) {
      inExamples = true;
      continue;
    }

    if (/^(?:\*\*)?Fix:(?:\*\*)?/i.test(line)) {
      current.fix = line.replace(/^(?:\*\*)?Fix:(?:\*\*)?\s*/i, "").trim();
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
  const byTitle = new Map(patterns.map(pattern => [pattern.title.toLowerCase(), pattern]));
  const regexMap = {
    "binary contrasts": [
      { source: "\\bnot (?:a )?[\\w'-]+[,.;:]\\s+(?:it'?s\\s+)?(?:a\\s+|but\\s+)[\\w'-]+", flags: "gi" }
    ],
    "negative listing (rhetorical striptease)": [
      { source: "(?:^|[.!?]\\s+)(?:not\\s+[^.!?]+[.!?]\\s*){2,}", flags: "gi" }
    ],
    "rhetorical questions as transitions": [
      { source: "\\b(?:so why|but what|but how) (?:does|do|is|are) this\\b", flags: "gi" }
    ],
    "\"let's\" stalling transitions": [
      { source: "\\blet's dive in(?:to)?\\b", flags: "gi" },
      { source: "\\blet's (?:explore|break this down|take a look)\\b", flags: "gi" }
    ],
    "reasoning-chain leakage": [
      { source: "\\blet me think step by step\\b", flags: "gi" },
      { source: "\\bworking through this logically\\b", flags: "gi" },
      { source: "\\bstep 1:\\b", flags: "gi" }
    ],
    "false agency": [
      { source: "\\b(?:the data|the market|the complaint|the product) (?:tells us|decided|became|knows)\\b", flags: "gi" }
    ],
    "vague attributions": [
      { source: "\\b(?:experts believe|experts say|research shows|industry observers note|studies show)\\b", flags: "gi" }
    ],
    "significance inflation": [
      { source: "\\b(?:a pivotal moment in the evolution of|a watershed moment|a testament to)\\b", flags: "gi" }
    ],
    "promotional language": [
      { source: "\\b(?:vibrant|thriving|bustling) (?:hub|ecosystem|community)\\b", flags: "gi" },
      { source: "\\bnestled in\\b", flags: "gi" }
    ],
    "emotional flatline": [
      { source: "\\bwhat surprised me most was\\b", flags: "gi" },
      { source: "\\bi was fascinated to discover\\b", flags: "gi" }
    ],
    "markdown in plain-text contexts": [
      { source: "\\*\\*[^*]+\\*\\*", flags: "g" }
    ],
    "payoff announcements and snap questions": [
      { source: "\\b(?:here'?s the kicker|the wild part|the crazy part|the best part\\?|the catch\\?|the result\\?)", flags: "gi" }
    ],
    "fake-casual register": [
      { source: "\\b(?:hot take|plot twist|fun fact|pro tip|psa|unpopular opinion|real talk|spoiler):", flags: "gi" },
      { source: "\\b(?:wild|insane|unhinged)\\.", flags: "gi" }
    ],
    "paste artifacts": [
      { source: "\\butm_source=(?:chatgpt\\.com|claude\\.ai|perplexity\\.ai)\\b", flags: "gi" },
      { source: "\\b(?:citeturn\\d+search\\d+|oaicite|contentReference)\\b", flags: "gi" },
      { source: "\\[(?:Your Name|Company)\\]", flags: "g" }
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
