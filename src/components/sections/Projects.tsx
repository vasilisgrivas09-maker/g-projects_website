'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { featuredProjects } from '@/data/projects';

const spanClasses: Record<string, string> = {
  hero: 'md:col-span-8 md:row-span-2 min-h-[300px] md:min-h-0',
  side: 'md:col-span-4',
};

export default function Projects() {
  return (
    <section id="work" className="section-padding bg-[#f5f5f2] scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-head"
        >
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
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[260px] gap-3 md:gap-4">
          {featuredProjects.map((project, index) => {
            const span = project.span
              ? spanClasses[project.span]
              : 'md:col-span-4';
            return (
              <motion.div
                key={project.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden bg-gray-200 aspect-[4/3] sm:aspect-auto sm:min-h-[220px] md:min-h-0 md:aspect-auto ${span}`}
              >
                <Link
                  href="/projects"
                  className="absolute inset-0 z-10"
                  aria-label={`Δείτε όλα τα έργα — ${project.alt}`}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    loading={index < 2 ? 'eager' : 'lazy'}
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
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 bg-[#101010] hover:bg-[#c7a86b] text-white hover:text-[#101010] font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#c7a86b]/20 hover:-translate-y-0.5"
          >
            Δείτε όλα τα έργα
            <span className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
