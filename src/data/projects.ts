export type Project = {
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
  span?: "hero" | "side";
};

/** Homepage featured — /public/images (gallery is separate) */
export const projects: Project[] = [
  { src: "/images/saloni.webp", alt: "Σαλόνι", category: "Σαλόνι", featured: true, span: "hero" },
  { src: "/images/kouzina.webp", alt: "Κουζίνα", category: "Κουζίνα", featured: true, span: "side" },
  { src: "/images/krevati.webp", alt: "Κρεβατοκάμαρα", category: "Υπνοδωμάτιο", featured: true, span: "side" },
  { src: "/images/kathistiko.webp", alt: "Καθιστικό", category: "Σαλόνι", featured: true },
  { src: "/images/ntoulapa.webp", alt: "Ντουλάπα", category: "Custom Έπιπλα", featured: true },
  { src: "/images/domatio.webp", alt: "Δωμάτιο", category: "Υπνοδωμάτιο", featured: true },
  { src: "/images/teddy.webp", alt: "Teddy", category: "Custom Έπιπλα" },
];

export const featuredProjects = projects.filter((p) => p.featured);
