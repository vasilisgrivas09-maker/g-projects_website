import type { Metadata } from "next";
import SiteChrome from "@/components/layout/SiteChrome";
import CategoryCards from "@/components/gallery/CategoryCards";
import { galleryImageCount, galleryProjects } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Έργα",
  description:
    "Δείτε το portfolio της G Projects ανά κατηγορία — πόρτες, πέργκολες, κουζίνες, ντουλάπες και custom έπιπλα. Πανελλαδικά.",
  openGraph: {
    title: "Έργα | G Projects",
    description:
      "Portfolio εσωτερικής αρχιτεκτονικής και custom κατασκευών από την G Projects, οργανωμένο ανά κατηγορία.",
  },
};

export default function ProjectsPage() {
  return (
    <SiteChrome
      solidNav
      mainClassName="min-h-screen bg-[#f4f1ea] pt-28 pb-24 px-4 sm:px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="kicker mb-3">Portfolio</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            Τα Έργα μας
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {galleryProjects.length} έργα · {galleryImageCount} φωτογραφίες —
            διαλέξτε κατηγορία για να δείτε τα σχετικά έργα.
          </p>
        </header>
        <CategoryCards />
      </div>
    </SiteChrome>
  );
}
