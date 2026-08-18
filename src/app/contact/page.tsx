import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
    <>
      <Navbar solid={true} />
      <main className="min-h-screen bg-[#f8f9fa] pt-32 pb-24 flex flex-col items-center px-4 sm:px-8">
        <div className="max-w-5xl w-full">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
