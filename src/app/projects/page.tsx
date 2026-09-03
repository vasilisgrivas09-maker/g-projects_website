import type { Metadata } from "next";
import SiteChrome from "@/components/layout/SiteChrome";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import { galleryImageCount, galleryProjects } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Έργα",
  description:
    "Δείτε το portfolio της G Projects — εσωτερικός σχεδιασμός, custom έπιπλα και ανακαινίσεις.",
  openGraph: {
    title: "Έργα | G Projects",
    description:
      "Portfolio εσωτερικής αρχιτεκτονικής και custom κατασκευών από την G Projects.",
  },
};

export default function ProjectsPage() {
  return (
    <SiteChrome
      solidNav
      mainClassName="min-h-screen bg-[#f5f5f2] pt-28 pb-24 px-4 sm:px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="kicker mb-3">Portfolio</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            Όλα τα Έργα
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {galleryProjects.length} έργα · {galleryImageCount} φωτογραφίες —
            κλικ για μεγέθυνση.
          </p>
        </header>
        <ProjectsGallery />
      </div>
    </SiteChrome>
  );
}
