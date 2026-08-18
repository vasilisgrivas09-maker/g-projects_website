'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroBlurDataURL } from '@/data/placeholders';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#0a0a0a] pt-24 pb-14 px-4 sm:px-6 lg:px-8">
      {/* LCP image: always visible — no opacity animation (kills LCP) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Interior architecture by G Projects"
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={heroBlurDataURL}
          className="object-cover scale-105 animate-[heroZoom_18s_ease-out_forwards]"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-0 grain-overlay opacity-25" />
      </div>

      <div
        className="absolute -right-4 md:-right-10 bottom-0 z-[1] text-white/[0.06] font-manrope font-extrabold text-[42vw] sm:text-[48vw] lg:text-[56vw] leading-[0.7] pointer-events-none select-none"
        aria-hidden="true"
      >
        G
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 sm:space-y-6"
        >

          <div className="flex items-center gap-3 text-white/90 uppercase tracking-[0.22em] text-[10px] sm:text-xs">
            <span className="w-8 h-px bg-[#c7a86b]" />
            <span> Woodworking &amp; Renovation </span>
          </div>

          <h1 className="font-manrope font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl drop-shadow-lg">
            Spaces with{' '}
            <span className="text-[#e0c48a]">character.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-10 mt-2 max-w-3xl">
            <p className="text-white/90 text-base md:text-lg max-w-md leading-relaxed">
              Σχεδιάζουμε και υλοποιούμε εσωτερικούς χώρους με ακρίβεια, υλικά
              υψηλής ποιότητας και διαχρονική αισθητική.
            </p>
            
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </div>
    </section>
  );
}
