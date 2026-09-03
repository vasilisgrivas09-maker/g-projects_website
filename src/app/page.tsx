import type { Metadata } from "next";
import SiteChrome from "@/components/layout/SiteChrome";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Statement from "@/components/sections/Statement";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import BeforeAfterCta from "@/components/sections/BeforeAfterCta";

export const metadata: Metadata = {
  title: {
    absolute: "G Projects | Spaces with Character",
  },
  description:
    "Ανακαλύψτε τα έργα εσωτερικής αρχιτεκτονικής και custom furniture.",
};

export default function HomePage() {
  return (
    <SiteChrome>
      <Hero />
      <Stats />
      <Projects />
      <Statement />
      <Services />
      <BeforeAfterCta />
    </SiteChrome>
  );
}
