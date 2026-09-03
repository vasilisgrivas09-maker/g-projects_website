import Link from "next/link";
import ComparisonSlider from "@/components/ui/ComparisonSlider";

export default function BeforeAfterCta() {
  return (
    <section id="contact" className="scroll-mt-24 section-padding bg-[#f4f1ea]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="kicker flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#b79a69]" />
            Before & After
            <span className="w-6 h-px bg-[#b79a69]" />
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-4">
            Από το σχέδιο στην{" "}
            <span className="italic text-[#b79a69]">πραγματικότητα</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Σύρετε τον slider για να δείτε πώς μετατρέπουμε τα 3D σχέδια σε
            ζωντανούς χώρους.
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
            Έχετε μια ιδέα για τον χώρο σας; Είμαστε εδώ για να την κάνουμε
            πραγματικότητα.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-10 text-base md:text-lg"
          >
            Επικοινωνήστε μαζί μας
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
