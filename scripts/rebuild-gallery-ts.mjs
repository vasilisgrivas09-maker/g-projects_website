/**
 * Rebuild src/data/gallery/* from public/gallery (images untouched).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const galleryDir = path.join(root, "public", "gallery");
const outDir = path.join(root, "src", "data", "gallery");
const legacyTs = path.join(root, "src", "data", "gallery.ts");

/** @type {Record<string, { category: string, title: string }>} */
const meta = {
  kouzinanisi: { category: "Κουζίνα", title: "Ολοκληρωμένη Λευκή" },
  "modern-kitchen": { category: "Κουζίνα", title: "Αντίθεση Υλικών" },
  img: { category: "Κουζίνα", title: "Γυαλιστερό Λευκό" },
  photo: { category: "Κουζίνα", title: "Οργάνωση Soft-Close" },
  pergola: { category: "Πέργκολα", title: "Γκρι Ορίζοντας" },

  "ergo-001": { category: "Έπιπλα", title: "Γραμμική Οροφή" },
  "ergo-002": { category: "Κουζίνα", title: "Τεχνολογία & Καθαρότητα" },
  "ergo-003": { category: "Κουζίνα", title: "Νησί Εστίασης" },
  "ergo-004": { category: "Έπιπλα", title: "Βιβλιοθήκη με Ρυθμό" },
  "ergo-005": { category: "Ντουλάπα", title: "Περσίδες Classic" },
  "ergo-006": { category: "Έπιπλα", title: "Ξύλινο Φίλτρο Φωτός" },
  "ergo-007": { category: "Πέργκολα", title: "Λευκή Σκίαση" },
  "ergo-008": { category: "Έπιπλα", title: "Κουκέτες Boutique" },
  "ergo-009": { category: "Έπιπλα", title: "Διπλός Νιπτήρας" },
  "ergo-010": { category: "Έπιπλα", title: "Γραφείο Minimal" },
  "ergo-011": { category: "Έπιπλα", title: "Κάθετες Γραμμές" },
  "ergo-012": { category: "Ντουλάπα", title: "Συρόμενος Καθρέφτης" },
  "ergo-013": { category: "Κουζίνα", title: "Αψεγάδιαστη Λευκότητα" },
  "ergo-014": { category: "Έπιπλα", title: "Ιδιωτικότητα Υπνοδωματίου" },
  "ergo-015": { category: "Έπιπλα", title: "Ξύλινη Υφή Τοίχου" },
  "ergo-016": { category: "Ντουλάπα", title: "Καθρέφτης στο Ύψος" },
  "ergo-017": { category: "Έπιπλα", title: "Υπνοδωμάτιο με Χαρακτήρα" },
  "ergo-018": { category: "Κουζίνα", title: "Θερμή Δρυς" },
  "ergo-019": { category: "Ντουλάπα", title: "Αποθήκευση Περσίδες" },
  "ergo-020": { category: "Έπιπλα", title: "Διαχωριστικό σε Ρυθμό" },
  "ergo-021": { category: "Έπιπλα", title: "Κουκέτες σε Δρυ" },
  "ergo-022": { category: "Έπιπλα", title: "Sleep Loft Custom" },
  "ergo-023": { category: "Ντουλάπα", title: "Σουίτα με Καθρέφτη" },
  "ergo-024": { category: "Πέργκολα", title: "Πέργκολα Lounge" },
  "ergo-025": { category: "Κουζίνα", title: "Κάβα & Εστία" },
  "ergo-026": { category: "Κουζίνα", title: "Ανοιχτή Τραπεζαρία" },
  "ergo-027": { category: "Έπιπλα", title: "Οροφή με Ρυθμό" },
  "ergo-028": { category: "Κουζίνα", title: "Γωνιακή Δρυς" },
  "ergo-029": { category: "Κουζίνα", title: "Ανθρακί Minimal" },
  "ergo-030": { category: "Κουζίνα", title: "Ξύλινη Ροή" },
  "ergo-031": { category: "Έπιπλα", title: "Βιτρίνα Εστιατορίου" },
  "ergo-032": { category: "Ντουλάπα", title: "Walk-in Γωνία" },
  "ergo-033": { category: "Πόρτα", title: "Είσοδος Statement" },
  "ergo-034": { category: "Έπιπλα", title: "Χαμηλή Σύνθεση" },
  "ergo-035": { category: "Πόρτα", title: "Καθαρή Λευκή Πόρτα" },
  "ergo-036": { category: "Έπιπλα", title: "Σουίτα Υπνοδωματίου" },
  "ergo-037": { category: "Κουζίνα", title: "Μπαρ & Εστία" },
  "ergo-038": { category: "Πόρτα", title: "Δρυς σε Λεπτομέρεια" },
  "ergo-039": { category: "Κουζίνα", title: "Δρυς & Γκρι" },
  "ergo-040": { category: "Κουζίνα", title: "Λεπτομέρεια Πάγκου" },
  "ergo-041": { category: "Ντουλάπα", title: "Απαλές Περσίδες" },
  "ergo-042": { category: "Ντουλάπα", title: "Ανοιχτό Γκρι" },
  "ergo-043": { category: "Ντουλάπα", title: "Αποθήκη Σκάλας" },
  "ergo-044": { category: "Έπιπλα", title: "Πάγκος Παραθύρου" },
  "ergo-045": { category: "Κουζίνα", title: "Γωνιακή Σύνθεση" },
  "ergo-046": { category: "Ντουλάπα", title: "Περσίδες Δρυός" },
  "ergo-047": { category: "Έπιπλα", title: "Λευκή Συρταριέρα" },
  "ergo-048": { category: "Κουζίνα", title: "Ανοιχτό Πλάνο" },
  "ergo-049": { category: "Έπιπλα", title: "Υποδοχή με Ύφος" },
  "ergo-050": { category: "Ντουλάπα", title: "Ντουλάπα Δρυός" },
  "ergo-051": { category: "Πόρτα", title: "Συρόμενη Ξύλινη" },
  "ergo-052": { category: "Έπιπλα", title: "Έπιπλο Υποδοχής" },
  "ergo-053": { category: "Έπιπλα", title: "Σαλόνι με Υφή" },
  "ergo-054": { category: "Κουζίνα", title: "Απαλή Δρυς" },
  "ergo-055": { category: "Κουζίνα", title: "L-Line Σύνθεση" },
  "ergo-056": { category: "Ντουλάπα", title: "Vault κάτω από Σκάλα" },
  "ergo-057": { category: "Ντουλάπα", title: "Σκάλα με Αποθήκευση" },
  "ergo-058": { category: "Ντουλάπα", title: "Τετράφυλλη Γκρι" },
  "ergo-059": { category: "Έπιπλα", title: "Σύνθεση Εισόδου" },
  "ergo-060": { category: "Ντουλάπα", title: "Ντουλάπα Διαδρόμου" },
  "ergo-061": { category: "Έπιπλα", title: "Τοίχος Media" },
  "ergo-062": { category: "Ντουλάπα", title: "Ράφια Σκάλας" },
  "ergo-063": { category: "Κουζίνα", title: "Διπλή Εστία Νερού" },
  "ergo-064": { category: "Κουζίνα", title: "Μεγάλο Νησί" },
  "ergo-065": { category: "Κουζίνα", title: "Λευκό Νησί" },
  "ergo-066": { category: "Πόρτα", title: "Καθαρή Δρυς" },
  "ergo-067": { category: "Ντουλάπα", title: "Walk-in σε Δρυ" },
  "ergo-068": { category: "Πόρτα", title: "Πόρτα Υπνοδωματίου" },
  "ergo-069": { category: "Ντουλάπα", title: "Συρτάρια σε Γραμμή" },
  "ergo-070": { category: "Πόρτα", title: "Κρυφός Μεντεσές" },
  "ergo-071": { category: "Πόρτα", title: "Minimal Door" },
  "ergo-072": { category: "Πόρτα", title: "Λεπτομέρεια Λαβής" },
  "ergo-073": { category: "Πόρτα", title: "Είσοδος σε Δρυς" },
};

const categoryOrder = ["Κουζίνα", "Ντουλάπα", "Πόρτα", "Πέργκολα", "Έπιπλα"];
const fileMap = {
  Κουζίνα: "kouzina",
  Ντουλάπα: "ntoulapa",
  Πόρτα: "porta",
  Πέργκολα: "pergola",
  Έπιπλα: "epipla",
};

function listByGroup() {
  /** @type {Map<string, string[]>} */
  const map = new Map();
  for (const file of fs
    .readdirSync(galleryDir)
    .filter((f) => f.endsWith(".webp"))
    .sort()) {
    const m = file.match(
      /^(ergo-\d+|img|kouzinanisi|modern-kitchen|pergola|photo)-/
    );
    if (!m) continue;
    const id = m[1];
    const list = map.get(id) ?? [];
    list.push(file);
    map.set(id, list);
  }
  return map;
}

function formatProject(p) {
  const images = p.images
    .map(
      (img) =>
        `      { src: ${JSON.stringify(img.src)}, alt: ${JSON.stringify(img.alt)} },`
    )
    .join("\n");
  return `  {
    id: ${JSON.stringify(p.id)},
    title: ${JSON.stringify(p.title)},
    category: ${JSON.stringify(p.category)},
    cover: ${JSON.stringify(p.cover)},
    images: [
${images}
    ],
  }`;
}

function buildProjects(groups) {
  /** @type {any[]} */
  const projects = [];
  for (const [id, files] of groups) {
    const info = meta[id];
    if (!info) {
      console.warn("Missing meta for", id);
      continue;
    }
    const images = files.map((file, i) => ({
      src: `/gallery/${file}`,
      alt: `${info.title} — ${i + 1}`,
    }));
    projects.push({
      id,
      title: info.title,
      category: info.category,
      cover: images[0].src,
      images,
    });
  }
  projects.sort((a, b) => {
    const ca = categoryOrder.indexOf(a.category);
    const cb = categoryOrder.indexOf(b.category);
    if (ca !== cb) return ca - cb;
    return a.id.localeCompare(b.id, undefined, { numeric: true });
  });
  return projects;
}

function writeModules(projects) {
  fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(
    path.join(outDir, "types.ts"),
    `export type GalleryCategory =
  | "Κουζίνα"
  | "Ντουλάπα"
  | "Πόρτα"
  | "Πέργκολα"
  | "Έπιπλα";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryProject = {
  id: string;
  title: string;
  category: GalleryCategory;
  cover: string;
  images: GalleryImage[];
};
`
  );

  for (const category of categoryOrder) {
    const slug = fileMap[category];
    const list = projects.filter((p) => p.category === category);
    const body = list.map(formatProject).join(",\n");
    fs.writeFileSync(
      path.join(outDir, `${slug}.ts`),
      `import type { GalleryProject } from "./types";

export const ${slug}Projects: GalleryProject[] = [
${body}
];
`
    );
  }

  fs.writeFileSync(
    path.join(outDir, "index.ts"),
    `import type { GalleryCategory, GalleryProject } from "./types";
import { kouzinaProjects } from "./kouzina";
import { ntoulapaProjects } from "./ntoulapa";
import { portaProjects } from "./porta";
import { pergolaProjects } from "./pergola";
import { epiplaProjects } from "./epipla";

export type { GalleryCategory, GalleryImage, GalleryProject } from "./types";

export const galleryCategories: GalleryCategory[] = [
  "Κουζίνα",
  "Ντουλάπα",
  "Πόρτα",
  "Πέργκολα",
  "Έπιπλα",
];

/** Full portfolio — category order matches galleryCategories */
export const galleryProjects: GalleryProject[] = [
  ...kouzinaProjects,
  ...ntoulapaProjects,
  ...portaProjects,
  ...pergolaProjects,
  ...epiplaProjects,
];

export const galleryImageCount = galleryProjects.reduce(
  (sum, project) => sum + project.images.length,
  0,
);
`
  );

  if (fs.existsSync(legacyTs)) fs.unlinkSync(legacyTs);
}

const groups = listByGroup();
const missing = [...groups.keys()].filter((id) => !meta[id]);
if (missing.length) {
  console.error("Missing meta:", missing.join(", "));
  process.exit(1);
}

const projects = buildProjects(groups);
writeModules(projects);

const counts = Object.fromEntries(categoryOrder.map((c) => [c, 0]));
for (const p of projects) counts[p.category] += 1;

console.log(`Projects: ${projects.length}`);
console.log(`Images: ${projects.reduce((s, p) => s + p.images.length, 0)}`);
console.log("By category:", counts);
console.log("Wrote", outDir);
