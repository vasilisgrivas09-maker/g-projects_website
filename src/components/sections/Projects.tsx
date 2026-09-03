import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

const spanClasses: Record<string, string> = {
  hero: "lg:col-span-8 lg:row-span-2",
  side: "lg:col-span-4",
};

export default function Projects() {
  return (
    <section id="work" className="py-16 sm:py-20 lg:py-28 bg-[#f5f5f2] scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 sm:mb-12 lg:mb-16 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
          <div>
            <p className="kicker flex items-center gap-3">
              <span className="w-6 h-px bg-[#c7a86b]" />
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1]">
              Τα <span className="italic text-[#c7a86b]">Έργα</span> μας
            </h2>
          </div>
          <p className="intro-text lg:max-w-sm lg:pt-4">
            Κάθε χώρος είναι μια μοναδική ιστορία — από το αρχικό σχέδιο μέχρι
            την τελική παράδοση.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12 lg:grid-rows-[260px_260px_260px] lg:gap-4">
          {featuredProjects.map((project, index) => {
            const span = project.span
              ? spanClasses[project.span]
              : "lg:col-span-4";
            return (
              <div
                key={project.src}
                className={`group relative w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm ring-1 ring-black/5 aspect-[4/3] lg:aspect-auto lg:h-full ${span}`}
              >
                <Link
                  href="/projects"
                  className="absolute inset-0 z-10 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f5f5f2]"
                  aria-label={`Δείτε όλα τα έργα — ${project.alt}`}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 40vw"
                    loading={index < 2 ? "eager" : "lazy"}
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-55 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                    <span className="text-[#c7a86b] text-[10px] uppercase tracking-[0.2em] mb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {project.category}
                    </span>
                    <h3 className="text-white font-serif text-xl md:text-2xl translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
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
            className="group inline-flex items-center gap-3 bg-[#101010] hover:bg-[#c7a86b] text-white hover:text-[#101010] font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#c7a86b]/20 hover:-translate-y-0.5"
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
