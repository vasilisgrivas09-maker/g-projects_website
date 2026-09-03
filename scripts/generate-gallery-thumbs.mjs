/**
 * Generate grid thumbnails from public/gallery full-size webps.
 * Full images stay untouched for lightbox; thumbs go to public/gallery/thumbs/
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const galleryDir = path.join(root, "public", "gallery");
const thumbsDir = path.join(galleryDir, "thumbs");

const THUMB_WIDTH = 640;
const THUMB_QUALITY = 82;

fs.mkdirSync(thumbsDir, { recursive: true });

const files = fs
  .readdirSync(galleryDir)
  .filter((f) => f.endsWith(".webp"))
  .sort();

let created = 0;
let skipped = 0;
let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const src = path.join(galleryDir, file);
  const dest = path.join(thumbsDir, file);
  const before = fs.statSync(src).size;
  totalBefore += before;

  if (fs.existsSync(dest)) {
    const existing = fs.statSync(dest);
    if (existing > 0 && existing < before) {
      totalAfter += existing;
      skipped++;
      continue;
    }
  }

  await sharp(src)
    .rotate()
    .resize({
      width: THUMB_WIDTH,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: THUMB_QUALITY, effort: 4 })
    .toFile(dest);

  const after = fs.statSync(dest).size;
  totalAfter += after;
  created++;
}

console.log(`Gallery thumbs: ${files.length} sources`);
console.log(`Created/updated: ${created}, skipped (existing): ${skipped}`);
console.log(
  `Size: ${Math.round(totalBefore / 1024 / 1024)}MB full → ${Math.round(totalAfter / 1024 / 1024)}MB thumbs`
);
