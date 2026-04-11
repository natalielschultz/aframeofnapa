import { readdir, stat, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const IMAGES_DIR = join(ROOT, "public", "images");
const SRC_DIR = join(ROOT, "src");
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"]);
const SIZE_THRESHOLD = 2 * 1024 * 1024; // 2 MB

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function getImageFiles() {
  const entries = await readdir(IMAGES_DIR);
  const images = [];
  for (const name of entries) {
    const ext = name.substring(name.lastIndexOf(".")).toLowerCase();
    if (!IMAGE_EXTS.has(ext)) continue;
    const filePath = join(IMAGES_DIR, name);
    const info = await stat(filePath);
    if (info.isFile()) {
      images.push({ name, size: info.size });
    }
  }
  return images.sort((a, b) => a.name.localeCompare(b.name));
}

async function walkDir(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkDir(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function findReferences() {
  const srcFiles = await walkDir(SRC_DIR);
  const refs = new Map(); // imageName -> Set of source files

  const pattern = /\/images\/([^"'\s)]+)/g;

  for (const filePath of srcFiles) {
    const content = await readFile(filePath, "utf-8");
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const imageName = match[1];
      if (!refs.has(imageName)) refs.set(imageName, new Set());
      refs.get(imageName).add(relative(ROOT, filePath));
    }
  }
  return refs;
}

function printSection(title) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`  ${title}`);
  console.log("=".repeat(60));
}

async function main() {
  const images = await getImageFiles();
  const refs = await findReferences();

  const totalSize = images.reduce((sum, img) => sum + img.size, 0);
  const imageNames = new Set(images.map((img) => img.name));

  // Summary
  printSection("PHOTOS REPORT");
  console.log(`  Total images:  ${images.length}`);
  console.log(`  Total size:    ${formatBytes(totalSize)}`);
  console.log(`  Average size:  ${formatBytes(Math.round(totalSize / images.length))}`);

  // Oversized
  const oversized = images.filter((img) => img.size > SIZE_THRESHOLD);
  printSection(`OVERSIZED (> 2 MB) — ${oversized.length} file(s)`);
  if (oversized.length === 0) {
    console.log("  None");
  } else {
    for (const img of oversized.sort((a, b) => b.size - a.size)) {
      console.log(`  ${formatBytes(img.size).padStart(9)}  ${img.name}`);
    }
  }

  // Unused
  const unused = images.filter((img) => !refs.has(img.name));
  printSection(`UNUSED IMAGES — ${unused.length} file(s)`);
  if (unused.length === 0) {
    console.log("  None");
  } else {
    let unusedSize = 0;
    for (const img of unused) {
      unusedSize += img.size;
      console.log(`  ${formatBytes(img.size).padStart(9)}  ${img.name}`);
    }
    console.log(`\n  Unused total: ${formatBytes(unusedSize)}`);
  }

  // Missing references
  const missing = [...refs.keys()].filter((name) => !imageNames.has(name));
  printSection(`MISSING REFERENCES — ${missing.length} file(s)`);
  if (missing.length === 0) {
    console.log("  None");
  } else {
    for (const name of missing.sort()) {
      const sources = [...refs.get(name)].join(", ");
      console.log(`  ${name}`);
      console.log(`    Referenced in: ${sources}`);
    }
  }

  // Usage detail
  printSection("USAGE DETAIL");
  for (const img of images) {
    const sources = refs.get(img.name);
    const status = sources ? `${sources.size} page(s)` : "UNUSED";
    const sizeWarning = img.size > SIZE_THRESHOLD ? " [!]" : "";
    console.log(`  ${formatBytes(img.size).padStart(9)}  ${img.name}  — ${status}${sizeWarning}`);
    if (sources) {
      for (const src of [...sources].sort()) {
        console.log(`             ${src}`);
      }
    }
  }

  console.log("");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
