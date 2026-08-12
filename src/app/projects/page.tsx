// src/app/projects/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Έργα | G Projects",
  description: "Δείτε τα έργα εσωτερικής αρχιτεκτονικής και custom furniture της G Projects.",
};

export default function ProjectsPage() {
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
