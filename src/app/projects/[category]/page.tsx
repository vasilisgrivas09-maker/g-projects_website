import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteChrome from "@/components/layout/SiteChrome";
import CategoryGallery from "@/components/gallery/CategoryGallery";
import CategoryNav from "@/components/gallery/CategoryNav";
import { galleryCategoryMeta, getGalleryCategoryGroup } from "@/data/gallery";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return galleryCategoryMeta.map((meta) => ({ category: meta.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const group = getGalleryCategoryGroup(category);

  if (!group) return {};

  return {
    title: group.metaTitle,
    description: group.metaDescription,
    alternates: {
      canonical: `/projects/${group.slug}`,
    },
    openGraph: {
      title: `${group.metaTitle} | G Projects`,
      description: group.metaDescription,
      url: `/projects/${group.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const group = getGalleryCategoryGroup(category);

  if (!group) notFound();

  return (
    <SiteChrome
      solidNav
      mainClassName="min-h-screen bg-[#f4f1ea] pt-28 pb-24 px-4 sm:px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <header className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="kicker mb-3">
            <Link
              href="/projects"
              className="transition-colors hover:text-[#171717]"
            >
              Portfolio
            </Link>
          </p>
          <h1 className="mb-4 font-serif text-4xl text-gray-900 md:text-5xl">
            {group.label}
          </h1>
          <p className="text-base leading-relaxed text-gray-500 md:text-lg">
            {group.intro}
          </p>
          <p className="mt-3 text-sm text-gray-400">
            {group.projects.length} έργα · {group.imageCount} φωτογραφίες —
            κλικ για μεγέθυνση.
          </p>
        </header>

        <div className="mb-10 md:mb-12">
          <CategoryNav activeSlug={group.slug} />
        </div>

        <CategoryGallery projects={group.projects} />
      </div>
    </SiteChrome>
  );
}
