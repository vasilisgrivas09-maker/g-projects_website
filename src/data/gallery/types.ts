export type GalleryCategory =
  | "Κουζίνα"
  | "Ντουλάπα"
  | "Πόρτα"
  | "Πέργκολα"
  | "Έπιπλα"
  | "Ειδική κατασκευή";

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
