import Image from "next/image";
import { heroBlurDataURL } from "@/data/placeholders";

const heroImageClass =
  "object-cover scale-105 animate-[heroZoom_18s_ease-out_forwards]";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#171717] pt-24 pb-14 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mobile.webp"
          alt="Interior architecture by G Projects"
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={heroBlurDataURL}
          className={`md:hidden ${heroImageClass}`}
          sizes="100vw"
          quality={75}
        />
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          className={`hidden md:block ${heroImageClass}`}
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
        <div className="space-y-5 sm:space-y-6">
          <div className="flex items-center gap-3 text-white/90 uppercase tracking-[0.22em] text-[10px] sm:text-xs">
            <span className="w-8 h-px bg-[#b79a69]" />
            <span> Woodworking &amp; Renovation </span>
          </div>

          <h1 className="font-manrope font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl drop-shadow-lg">
            Spaces with <span className="text-[#e0c48a]">character.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-10 mt-2 max-w-3xl">
            <p className="text-white/90 text-base md:text-lg max-w-md leading-relaxed">
              Σχεδιάζουμε και υλοποιούμε εσωτερικούς χώρους με ακρίβεια, υλικά
              υψηλής ποιότητας και διαχρονική αισθητική.
            </p>
          </div>

          <p className="inline-flex items-center gap-2.5 rounded-full border border-[#b79a69]/40 bg-black/25 px-4 py-2 text-xs sm:text-sm text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b79a69]" />
            Αναλαμβάνουμε έργα πανελλαδικά, από τον σχεδιασμό μέχρι την
            τοποθέτηση.
          </p>
        </div>
      </div>
    </section>
  );
}
