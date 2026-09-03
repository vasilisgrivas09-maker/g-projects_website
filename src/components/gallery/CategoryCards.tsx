import Image from "next/image";
import Link from "next/link";
import { galleryCategoryGroups } from "@/data/gallery";
import { galleryThumbSrc } from "@/lib/gallery-images";

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {galleryCategoryGroups.map((group, index) => (
        <Link
          key={group.slug}
          href={`/projects/${group.slug}`}
          className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-lg hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1ea] active:scale-[0.99]"
        >
          <Image
            src={galleryThumbSrc(group.cover)}
            alt=""
            fill
            className="object-cover will-change-transform transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-active:scale-[1.04]"
            sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 33vw"
            loading={index < 3 ? "eager" : "lazy"}
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
            <span className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-[#b79a69]">
              {group.projects.length} έργα · {group.imageCount} φωτογραφίες
            </span>
            <h2 className="font-serif text-2xl text-white sm:text-3xl">
              {group.label}
            </h2>
            <p className="mt-1.5 max-w-xs text-sm leading-snug text-white/75">
              {group.tagline}
            </p>
            <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Δείτε τα έργα
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              >
                →
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
