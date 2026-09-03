import type { GalleryProject } from "./types";
import { galleryCategoryMeta, type GalleryCategoryMeta } from "./categories";
import { kouzinaProjects } from "./kouzina";
import { ntoulapaProjects } from "./ntoulapa";
import { portaProjects } from "./porta";
import { pergolaProjects } from "./pergola";
import { epiplaProjects } from "./epipla";

export type { GalleryCategory, GalleryImage, GalleryProject } from "./types";
export type { CategorySlug, GalleryCategoryMeta } from "./categories";
export { galleryCategoryMeta } from "./categories";

/** Full portfolio — grouped per category below */
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

export type GalleryCategoryGroup = GalleryCategoryMeta & {
  projects: GalleryProject[];
  /** First project cover — used on the category card */
  cover: string;
  imageCount: number;
};

/** One entry per category, in the order shown on /projects */
export const galleryCategoryGroups: GalleryCategoryGroup[] =
  galleryCategoryMeta.map((meta) => {
    const projects = galleryProjects.filter(
      (project) => project.category === meta.category,
    );

    return {
      ...meta,
      projects,
      cover: projects[0]?.cover ?? "",
      imageCount: projects.reduce(
        (sum, project) => sum + project.images.length,
        0,
      ),
    };
  });

export function getGalleryCategoryGroup(
  slug: string,
): GalleryCategoryGroup | undefined {
  return galleryCategoryGroups.find((group) => group.slug === slug);
}
