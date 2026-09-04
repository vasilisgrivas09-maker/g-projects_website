export type GalleryCategory =
  | "Κουζίνα"
  | "Ντουλάπα"
  | "Πόρτα"
  | "Πέργκολα"
  | "Έπιπλα"
  | "Ειδικές κατασκευές";

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
