import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const publicDir = path.join(repoRoot, "public");
const templatePath = path.join(repoRoot, "scripts", "gh-pages", "r-index.html");
const rIndexPath = path.join(publicDir, "r", "index.html");
const indexPath = path.join(publicDir, "index.html");

async function ensureStaticMarker() {
  const html = await readFile(indexPath, "utf8");
  if (html.includes('data-static-only="1"')) {
    return;
  }

  const htmlTagMatch = html.match(/<html[^>]*>/i);
  if (!htmlTagMatch) {
    throw new Error("Could not find <html> tag in public/index.html");
  }

  const htmlTag = htmlTagMatch[0];
  const updatedTag = htmlTag.replace("<html", '<html data-static-only="1"');
  const updatedHtml = html.replace(htmlTag, updatedTag);
  await writeFile(indexPath, updatedHtml, "utf8");
}

async function copyRIndex() {
  await mkdir(path.dirname(rIndexPath), { recursive: true });
  await copyFile(templatePath, rIndexPath);
}

await copyRIndex();
await ensureStaticMarker();
