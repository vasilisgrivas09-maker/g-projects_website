import type { MetadataRoute } from "next";
import { galleryCategoryMeta } from "@/data/gallery";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    ...galleryCategoryMeta.map((meta) => `/projects/${meta.slug}`),
    "/services",
    "/contact",
    "/privacy",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
