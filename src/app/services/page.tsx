import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesPageContent from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
  title: "Υπηρεσίες",
  description:
    "Εσωτερικός σχεδιασμός, custom έπιπλα και ολική ανακαίνιση — ολοκληρωμένες λύσεις από την G Projects.",
  openGraph: {
    title: "Υπηρεσίες | G Projects",
    description:
      "Ανακαλύψτε τις υπηρεσίες εσωτερικής αρχιτεκτονικής και κατασκευής της G Projects.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar solid={true} />
      <section className="pt-24 md:pt-32 pb-20 md:pb-28 bg-[#faf8f6]">
        <div className="container px-4 md:px-8 mx-auto max-w-6xl">
          <header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Οι Υπηρεσίες μας
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Προσφέρουμε ολοκληρωμένες λύσεις εσωτερικής σχεδίασης και ανακαίνισης,
              προσαρμοσμένες στις ανάγκες κάθε πελάτη.
            </p>
          </header>
          <ServicesPageContent />
        </div>
      </section>
      <Footer />
    </>
  );
}
