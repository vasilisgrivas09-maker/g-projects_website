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
    src: "/images/saloni.webp",
    alt: "Σαλόνι",
    category: "Έπιπλα",
    href: "/projects/epipla",
    span: "hero",
  },
  {
    src: "/images/kouzina.webp",
    alt: "Κουζίνα",
    category: "Κουζίνες",
    href: "/projects/kouzines",
    span: "side",
  },
  {
    src: "/images/krevati.webp",
    alt: "Κρεβατοκάμαρα",
    category: "Ντουλάπες",
    href: "/projects/ntoulapes",
    span: "side",
  },
  {
    src: "/images/kathistiko.webp",
    alt: "Καθιστικό",
    category: "Έπιπλα",
    href: "/projects/epipla",
  },
  {
    src: "/images/ntoulapa.webp",
    alt: "Ντουλάπα",
    category: "Ντουλάπες",
    href: "/projects/ntoulapes",
  },
  {
    src: "/images/domatio.webp",
    alt: "Δωμάτιο",
    category: "Έπιπλα",
    href: "/projects/epipla",
  },
];
