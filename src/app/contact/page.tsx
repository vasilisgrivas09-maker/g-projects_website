// src/app/contact/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Επικοινωνία | G Projects",
  description: "Επικοινωνήστε με την G Projects για την επόμενη αρχιτεκτονική σας δημιουργία.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar solid={true} />
      <main className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-8">
        {/* Το περιεχόμενο θα μπει εδώ αργότερα */}
      </main>
      <Footer />
    </>
  );
}
