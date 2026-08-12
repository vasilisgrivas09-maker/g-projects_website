// src/app/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Statement from "@/components/sections/Statement";
import Contact from "@/components/sections/Contact"; // ΕΔΩ ΕΙΝΑΙ Η ΓΡΑΜΜΗ ΠΟΥ ΘΕΛΕΙΣ
import ComparisonSlider from "@/components/ui/ComparisonSlider";

export const metadata: Metadata = {
  title: "Home | G Projects",
  description: "Ανακαλύψτε τα έργα εσωτερικής αρχιτεκτονικής και custom furniture.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Statement />
      
      <section id="contact" className="scroll-mt-20 section-padding">
        <div className="container">
          
          <ComparisonSlider 
            beforeImage="/images/cad-plan.webp"
            afterImage="/images/kitchen-cad-before.webp" 
          />

          {/* Το βελτιωμένο κουτί με responsive σχεδιασμό για PC και Κινητό */}
          <div className="mt-16 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-12 text-center">
            
            <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mb-4 break-words">
              Επικοινωνήστε μαζί μας
            </h2>
            
            <p className="text-gray-500 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              Έχετε μια ιδέα για τον χώρο σας; Είμαστε εδώ για να την κάνουμε πραγματικότητα.
            </p>
            
            <a 
              href="/contact" 
              className="inline-block bg-[#c7a86b] hover:bg-[#b89655] text-gray-900 font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-base md:text-lg shadow-lg shadow-[#c7a86b]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Επικοινωνήστε μαζί μας <span className="ml-2">↗</span>
            </a>

          </div>

        </div>
      </section>
      
      <Footer />
    </>
  );
}
