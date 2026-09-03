import type { Metadata } from "next";
import SiteChrome from "@/components/layout/SiteChrome";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με την G Projects για εσωτερικό σχεδιασμό, custom έπιπλα ή ανακαίνιση.",
  openGraph: {
    title: "Επικοινωνία | G Projects",
    description:
      "Στείλτε μήνυμα ή καλέστε την G Projects — απαντάμε εντός 24 ωρών.",
  },
};

export default function ContactPage() {
  return (
    <SiteChrome
      solidNav
      mainClassName="min-h-screen bg-[#f4f1ea] pt-32 pb-24 flex flex-col items-center px-4 sm:px-8"
    >
      <div className="max-w-5xl w-full">
        <ContactForm />
      </div>
    </SiteChrome>
  );
}
