/**
 * High-quality 2x upscale for public/gallery full WebPs only.
 * Source of truth: .backup/gallery-pre-upscale
 * Does NOT touch public/images (homepage).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const backupDir = path.join(root, ".backup", "gallery-pre-upscale");
const galleryDir = path.join(root, "public", "gallery");

const SCALE = 2;
const MAX_EDGE = 2400;
const WEBP_QUALITY = 85;

if (!fs.existsSync(backupDir)) {
  console.error("Missing backup:", backupDir);
  process.exit(1);
}

const files = fs
  .readdirSync(backupDir)
  .filter((f) => f.endsWith(".webp"))
  .sort();

const only = process.argv[2];
const targets = only ? files.filter((f) => f === only) : files;

console.log(
  `Upscaling ${targets.length} gallery images (up to ${SCALE}x, max edge ${MAX_EDGE}). Homepage untouched.`,
);
const t0 = Date.now();
let done = 0;

for (const file of targets) {
  const src = path.join(backupDir, file);
  const dest = path.join(galleryDir, file);
  const started = Date.now();
  const meta = await sharp(src).metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const longest = Math.max(w, h) || 1;
  const scale = Math.min(SCALE, MAX_EDGE / longest);
  const resizeW = Math.max(1, Math.round(w * scale));

  await sharp(src)
    .rotate()
    .resize({
      width: resizeW,
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .sharpen({ sigma: 0.6, m1: 0.8, m2: 0.4 })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(dest);

  done++;
  const after = await sharp(dest).metadata();
  const sec = ((Date.now() - started) / 1000).toFixed(1);
  console.log(
    `[${done}/${targets.length}] ${file} ${w}x${h} → ${after.width}x${after.height} (${sec}s)`,
  );
}

console.log(`Done in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
