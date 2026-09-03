import Link from "next/link";
import { galleryCategoryMeta } from "@/data/gallery";

type CategoryNavProps = {
  /** Slug of the category being viewed */
  activeSlug: string;
};

export default function CategoryNav({ activeSlug }: CategoryNavProps) {
  return (
    <nav
      aria-label="Κατηγορίες έργων"
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
    >
      <Link
        href="/projects"
        className="rounded-full border border-[#d8d3c9] px-3.5 py-2 text-xs tracking-wide text-gray-600 transition-colors hover:border-[#171717] hover:text-[#171717] sm:px-4 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-2"
      >
        Όλες οι κατηγορίες
      </Link>
      {galleryCategoryMeta.map((meta) => {
        const isActive = meta.slug === activeSlug;
        return (
          <Link
            key={meta.slug}
            href={`/projects/${meta.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full border px-3.5 py-2 text-xs tracking-wide transition-colors sm:px-4 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-2 ${
              isActive
                ? "border-[#171717] bg-[#171717] text-white"
                : "border-[#d8d3c9] text-gray-600 hover:border-[#171717] hover:text-[#171717]"
            }`}
          >
            {meta.label}
          </Link>
        );
      })}
    </nav>
  );
}
