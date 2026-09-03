import type { GalleryCategory } from "./types";

export type CategorySlug =
  | "portes"
  | "pergkoles"
  | "kouzines"
  | "ntoulapes"
  | "epipla";

export type GalleryCategoryMeta = {
  slug: CategorySlug;
  /** Matches GalleryProject.category */
  category: GalleryCategory;
  /** Plural label for cards, headings and breadcrumbs */
  label: string;
  /** Cover image for the /projects category card */
  cover: string;
  /** Short line on the category card */
  tagline: string;
  /** Intro paragraph on the category page */
  intro: string;
  metaTitle: string;
  metaDescription: string;
};

/** Card + page order on /projects */
export const galleryCategoryMeta: GalleryCategoryMeta[] = [
  {
    slug: "portes",
    category: "Πόρτα",
    label: "Πόρτες",
    cover: "/gallery/category-porta.webp",
    tagline: "Εσωτερικές, θωρακισμένες και statement είσοδοι",
    intro:
      "Πόρτες εσωτερικού και εισόδου σε μασίφ ξύλο, λάκα και καπλαμά — σχεδιασμένες στις διαστάσεις του χώρου σας.",
    metaTitle: "Πόρτες",
    metaDescription:
      "Έργα πορτών από την G Projects — εσωτερικές πόρτες, είσοδοι και ντουλάπια σε μασίφ ξύλο, λάκα και καπλαμά. Πανελλαδικά.",
  },
  {
    slug: "pergkoles",
    category: "Πέργκολα",
    label: "Πέργκολες",
    cover: "/gallery/category-pergola.webp",
    tagline: "Σκίαση και εξωτερικοί χώροι",
    intro:
      "Πέργκολες και κατασκευές σκίασης για βεράντες, κήπους και roof gardens, με υλικά που αντέχουν στο χρόνο.",
    metaTitle: "Πέργκολες",
    metaDescription:
      "Έργα πέργκολας από την G Projects — κατασκευές σκίασης για βεράντες, κήπους και roof gardens. Πανελλαδικά.",
  },
  {
    slug: "kouzines",
    category: "Κουζίνα",
    label: "Κουζίνες",
    cover: "/gallery/category-kouzina.webp",
    tagline: "Μελέτη, κατασκευή και τοποθέτηση",
    intro:
      "Κουζίνες κατά παραγγελία, από τη μελέτη της κάτοψης και την επιλογή υλικών μέχρι την τοποθέτηση και τα φινιρίσματα.",
    metaTitle: "Κουζίνες",
    metaDescription:
      "Έργα κουζίνας από την G Projects — custom κουζίνες με μελέτη, κατασκευή και τοποθέτηση. Πανελλαδικά.",
  },
  {
    slug: "ntoulapes",
    category: "Ντουλάπα",
    label: "Ντουλάπες",
    cover: "/gallery/category-ntoulapa.webp",
    tagline: "Ντουλάπες, walk-in και αποθηκευτικοί χώροι",
    intro:
      "Ντουλάπες και walk-in closets που εκμεταλλεύονται κάθε εκατοστό — με συρόμενα, περσίδες, καθρέφτες και εσωτερικές οργανώσεις.",
    metaTitle: "Ντουλάπες",
    metaDescription:
      "Έργα ντουλάπας από την G Projects — custom ντουλάπες, walk-in closets και λύσεις αποθήκευσης. Πανελλαδικά.",
  },
  {
    slug: "epipla",
    category: "Έπιπλα",
    label: "Έπιπλα",
    cover: "/gallery/category-epipla.webp",
    tagline: "Custom έπιπλα και ξύλινες λεπτομέρειες",
    intro:
      "Έπιπλα κατά παραγγελία — έπιπλα τηλεόρασης, μπάνιου, βιβλιοθήκες, διαχωριστικά και ξύλινες επενδύσεις τοίχου και οροφής.",
    metaTitle: "Έπιπλα",
    metaDescription:
      "Custom έπιπλα από την G Projects — έπιπλα τηλεόρασης και μπάνιου, βιβλιοθήκες, διαχωριστικά και ξύλινες επενδύσεις. Πανελλαδικά.",
  },
];
