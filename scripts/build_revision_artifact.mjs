import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

function fail(message) {
  console.error(`stop-slop revision: ${message}`);
  process.exit(1);
}

function arg(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? null : process.argv[index + 1];
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

function requiredString(value, label) {
  if (typeof value !== "string" || !value.trim()) fail(`${label} must be a non-empty string`);
}

function validate(data) {
  if (!Array.isArray(data) || data.length === 0) fail("data must be a non-empty array of paragraphs");
  data.forEach((paragraph, paragraphIndex) => {
    if (!Number.isInteger(paragraph.para) || paragraph.para < 1) fail(`paragraph ${paragraphIndex + 1} needs a positive integer para`);
    if (!Array.isArray(paragraph.items) || paragraph.items.length === 0) fail(`paragraph ${paragraph.para} needs items`);
    paragraph.items.forEach((item, itemIndex) => {
      const label = `paragraph ${paragraph.para}, item ${itemIndex + 1}`;
      if (!['keep', 'edit', 'del'].includes(item.type)) fail(`${label} has an invalid type`);
      if (item.type === 'keep') requiredString(item.text, `${label} text`);
      if (item.type === 'edit') {
        requiredString(item.old, `${label} old`);
        requiredString(item.new, `${label} new`);
        requiredString(item.why, `${label} why`);
      }
      if (item.type === 'del') {
        requiredString(item.old, `${label} old`);
        requiredString(item.why, `${label} why`);
      }
    });
  });
}

const dataPath = arg("--data");
const outputPath = arg("--output");
if (!dataPath || !outputPath) fail("usage: node scripts/build_revision_artifact.mjs --data file.json|'-' --output file.html");

let data;
try {
  const source = dataPath === "-" ? await readStdin() : await readFile(path.resolve(dataPath), "utf8");
  data = JSON.parse(source);
} catch (error) {
  fail(`could not read JSON: ${error.message}`);
}

validate(data);

const templatePath = path.join(root, "assets", "revision_template.html");
const template = await readFile(templatePath, "utf8");
if (!template.includes("const DATA = __DATA__;")) fail("template placeholder is missing");

const safeJson = JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
const html = template.replace("const DATA = __DATA__;", `const DATA = ${safeJson};`);
const resolvedOutput = path.resolve(outputPath);
await writeFile(resolvedOutput, html, "utf8");
console.log(resolvedOutput);
