import type { GalleryCategory, GalleryProject } from "./types";
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
