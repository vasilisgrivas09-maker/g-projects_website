export type FeaturedProject = {
  src: string;
  alt: string;
  category: string;
  span?: "hero" | "side";
};

/** Homepage featured tiles — /public/images (portfolio lives in gallery/) */
export const featuredProjects: FeaturedProject[] = [
  {
    src: "/images/saloni.webp",
    alt: "Σαλόνι",
    category: "Σαλόνι",
    span: "hero",
  },
  {
    src: "/images/kouzina.webp",
    alt: "Κουζίνα",
    category: "Κουζίνα",
    span: "side",
  },
  {
    src: "/images/krevati.webp",
    alt: "Κρεβατοκάμαρα",
    category: "Υπνοδωμάτιο",
    span: "side",
  },
  {
    src: "/images/kathistiko.webp",
    alt: "Καθιστικό",
    category: "Σαλόνι",
  },
  {
    src: "/images/ntoulapa.webp",
    alt: "Ντουλάπα",
    category: "Custom Έπιπλα",
  },
  {
    src: "/images/domatio.webp",
    alt: "Δωμάτιο",
    category: "Υπνοδωμάτιο",
  },
];
