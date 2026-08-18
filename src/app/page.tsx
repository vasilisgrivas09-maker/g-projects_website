import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Statement from "@/components/sections/Statement";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";

const ComparisonSlider = dynamic(
  () => import("@/components/ui/ComparisonSlider"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: {
    absolute: "G Projects | Spaces with Character",
  },
  description: "Ανακαλύψτε τα έργα εσωτερικής αρχιτεκτονικής και custom furniture.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Statement />
      <Services />

      <section id="contact" className="scroll-mt-24 section-padding bg-[#faf8f6]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="kicker flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#c7a86b]" />
              Before & After
              <span className="w-6 h-px bg-[#c7a86b]" />
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-4">
              Από το σχέδιο στην <span className="italic text-[#c7a86b]">πραγματικότητα</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Σύρετε τον slider για να δείτε πώς μετατρέπουμε τα 3D σχέδια σε ζωντανούς χώρους.
            </p>
          </div>

          <ComparisonSlider
            beforeImage="/images/comparison/cad-plan.webp"
            afterImage="/images/comparison/kitchen-cad-before.webp"
          />

          <div className="mt-16 md:mt-20 max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-14 text-center">
            <h2 className="font-serif text-2xl md:text-4xl text-gray-900 mb-4">
              Έτοιμοι να ξεκινήσουμε;
            </h2>
            <p className="text-gray-500 text-sm md:text-lg mb-8 leading-relaxed max-w-lg mx-auto">
              Έχετε μια ιδέα για τον χώρο σας; Είμαστε εδώ για να την κάνουμε πραγματικότητα.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#c7a86b] hover:bg-[#b89655] text-gray-900 font-bold py-4 px-10 rounded-full text-base md:text-lg shadow-lg shadow-[#c7a86b]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Επικοινωνήστε μαζί μας
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
