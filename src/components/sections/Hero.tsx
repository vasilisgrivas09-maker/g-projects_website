// src/components/sections/Hero.tsx
'use client';
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-gradient-to-r from-black/75 to-black/35 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Image
        src="/images/hero.webp"
        alt="Interior architecture by G Projects"
        fill
        priority
        className="object-cover -z-10"
        sizes="100vw"
      />

      <div
        className="absolute -right-2 md:-right-10 sm:-right-20 lg:-right-10 bottom-2 md:bottom-0 text-white/10 font-manrope font-extrabold text-[40vw] sm:text-[50vw] lg:text-[65vw] leading-[0.7] pointer-events-none select-none"
        aria-hidden="true"
      >
        G
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full pl-6 md:pl-0 -mt-6 md:mt-0">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3 sm:gap-4 text-white/90 uppercase tracking-widest text-xs md:text-sm sm:text-xs">
         <span>· Woodworking & Renovation Services ·</span>
          </div>

          <h1 className="heading-lg heading-xl text-white max-w-4xl text-6xl lg:text-7xl drop-shadow-lg">
            Spaces <br />
            with <em className="accent-text not-italic">character.</em>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-8 mt-4 sm:mt-8 max-w-3xl">
            <p className="text-white/90 text-base md:text-lg sm:text-sm max-w-md leading-relaxed">
              Σχεδιάζουμε και υλοποιούμε εσωτερικούς χώρους με ακρίβεια, υλικά
              υψηλής ποιότητας και διαχρονική αισθητική.
            </p>
            <Link
              href="#work"
              className="inline-flex items-center gap-3 text-white font-bold uppercase text-xs sm:text-sm tracking-wider hover:text-accent transition-colors group"
            >
              Δείτε τα έργα
              <span className="text-xl group-hover:translate-x-1 transition-transform">
                ↘
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
