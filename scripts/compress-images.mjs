/**
 * Compress homepage / comparison images in public/.
 * Gallery full sizes use scripts/generate-gallery-thumbs.mjs instead.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public");
const outDir = path.join(__dirname, "..", ".tmp-compress");

const jobs = [
  { file: "images/hero.webp", width: 1920, quality: 80 },
  { file: "images/hero-mobile.webp", width: 1080, quality: 78 },
  { file: "images/kouzina.webp", width: 1600, quality: 80 },
  { file: "images/pergkola.webp", width: 1600, quality: 80 },
  { file: "images/krevati.webp", width: 1600, quality: 80 },
  { file: "images/epipla-mpanio.webp", width: 1600, quality: 80 },
  { file: "images/ntoulapa-kathreftis.webp", width: 1600, quality: 80 },
  { file: "images/eidiki-kataskevi.webp", width: 1600, quality: 80 },
  { file: "images/comparison/cad-plan.webp", width: 1600, quality: 80 },
  { file: "images/comparison/kitchen-cad-before.webp", width: 1600, quality: 80 },
];

fs.mkdirSync(outDir, { recursive: true });

async function compressOne(job) {
  const full = path.join(root, job.file);
  if (!fs.existsSync(full)) {
    console.log("skip missing:", job.file);
    return;
  }
  const before = fs.statSync(full).size;
  const tmp = path.join(outDir, job.file.replace(/[\\/]/g, "__"));
  await sharp(full)
    .rotate()
    .resize({
      width: job.width,
      height: job.width,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: job.quality, effort: 4 })
    .toFile(tmp);

  const after = fs.statSync(tmp).size;
  if (after >= before * 0.98) {
    fs.unlinkSync(tmp);
    console.log(
      "keep",
      job.file,
      Math.round(before / 1024) + "KB (no gain)",
    );
    return;
  }

  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.copyFileSync(tmp, full);
  fs.unlinkSync(tmp);
  console.log(
    "ok",
    job.file,
    Math.round(before / 1024) + "KB →",
    Math.round(after / 1024) + "KB",
  );
}

for (const job of jobs) {
  await compressOne(job);
}

console.log("done");
