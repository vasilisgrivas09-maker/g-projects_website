export type FeaturedProject = {
  src: string;
  alt: string;
  category: string;
  /** Category page the tile links to */
  href: string;
  span?: "hero" | "side";
};

/** Homepage featured tiles — /public/images (portfolio lives in gallery/) */
export const featuredProjects: FeaturedProject[] = [
  {
    src: "/images/kouzina.webp",
    alt: "Κουζίνα",
    category: "Κουζίνες",
    href: "/projects/kouzines",
    span: "hero",
  },
  {
    src: "/images/pergkola.webp",
    alt: "Πέργκολα",
    category: "Πέργκολες",
    href: "/projects/pergkoles",
    span: "side",
  },
  {
    src: "/images/krevati.webp",
    alt: "Κρεβατοκάμαρα",
    category: "Ειδικές κατασκευές",
    href: "/projects/eidikes-kataskeves",
    span: "side",
  },
  {
    src: "/images/epipla-mpanio.webp",
    alt: "Έπιπλο νιπτήρα",
    category: "Έπιπλα",
    href: "/projects/epipla",
  },
  {
    src: "/images/ntoulapa-kathreftis.webp",
    alt: "Ντουλάπα",
    category: "Ντουλάπες",
    href: "/projects/ntoulapes",
  },
  {
    src: "/images/eidiki-kataskevi.webp",
    alt: "Κουκέτα",
    category: "Ειδικές κατασκευές",
    href: "/projects/eidikes-kataskeves",
  },
];
