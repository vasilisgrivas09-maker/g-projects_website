import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

const spanClasses: Record<string, string> = {
  hero: "col-span-2 aspect-[4/3] lg:col-span-8 lg:row-span-2",
  side: "aspect-[4/5] sm:aspect-[4/3] lg:col-span-4",
};

const defaultSpan = "aspect-[4/5] sm:aspect-[4/3] lg:col-span-4";

export default function Projects() {
  return (
    <section id="work" className="py-16 sm:py-20 lg:py-28 bg-[#f4f1ea] scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 sm:mb-12 lg:mb-16 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
          <div>
            <p className="kicker flex items-center gap-3">
              <span className="w-6 h-px bg-[#b79a69]" />
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1]">
              Τα <span className="italic text-[#b79a69]">Έργα</span> μας
            </h2>
          </div>
          <p className="intro-text lg:max-w-sm lg:pt-4">
            Κάθε χώρος είναι μια μοναδική ιστορία — από το αρχικό σχέδιο μέχρι
            την τελική παράδοση.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-12 lg:grid-rows-[260px_260px_260px] lg:gap-4">
          {featuredProjects.map((project, index) => {
            const span = project.span
              ? spanClasses[project.span]
              : defaultSpan;
            return (
              <div
                key={project.src}
                className={`group relative w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm ring-1 ring-black/5 lg:aspect-auto lg:h-full ${span}`}
              >
                <Link
                  href={project.href}
                  className="absolute inset-0 z-10 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1ea]"
                  aria-label={`Δείτε έργα — ${project.category}`}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 639px) 48vw, (max-width: 1023px) 46vw, 40vw"
                    loading={index < 2 ? "eager" : "lazy"}
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 lg:opacity-55 lg:group-hover:opacity-90" />
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5 md:p-6">
                    <span className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#b79a69] transition-all duration-300 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                      {project.category}
                    </span>
                    <h3 className="text-white font-serif text-base sm:text-xl md:text-2xl transition-transform duration-300 lg:translate-y-1 lg:group-hover:translate-y-0">
                      {project.alt}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            href="/projects"
            className="btn-primary group focus-visible:ring-offset-[#f4f1ea]"
          >
            Δείτε όλα τα έργα
            <span className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
