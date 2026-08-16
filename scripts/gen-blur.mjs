import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const hero = path.join(root, "public/images/hero.webp");
const buf = await sharp(hero)
  .resize(12, 8, { fit: "cover" })
  .webp({ quality: 40 })
  .toBuffer();
const url = `data:image/webp;base64,${buf.toString("base64")}`;
fs.writeFileSync(
  path.join(root, "src/data/placeholders.ts"),
  `/** Tiny LQIP for hero */\nexport const heroBlurDataURL = "${url}";\n`
);
console.log("ok", buf.length);
