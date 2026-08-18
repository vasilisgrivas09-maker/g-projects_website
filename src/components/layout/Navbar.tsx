// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";

const navLinks = [
  { href: "/projects", label: "Έργα" },
  { href: "/services", label: "Υπηρεσίες" },
  { href: "/contact", label: "Επικοινωνία" },
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 👉 BACKDROP: Καλύπτει την οθόνη πίσω από το μενού. Πατώντας εδώ κλείνει! */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          solid ? "bg-black/80" : (isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-gradient-to-r from-black/96 to-black/74")
        } border-b border-[#c7a86b]/40 shadow-xl`}
      >
        <div className="container px-4 sm:px-6 lg:px-8 py-4 md:py-2">
          <div className="flex items-center justify-between h-16 lg:h-24">
            <Link href="/" className="flex items-center gap-3 lg:gap-4 group">
              <Logo size="md" />
              <span className="text-white font-manrope font-semibold text-sm lg:text-base tracking-widest group-hover:text-[#c7a86b] transition-colors">
                <span className="text-[#c7a86b] text-lg lg:text-2xl">G</span> PROJECTS
              </span>
            </Link>

            <button
              type="button"
              id="mobile-menu-button"
              className="lg:hidden relative z-50 w-11 h-11 flex flex-col justify-center items-center gap-1.5 touch-manipulation"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Άνοιγμα μενού"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-semibold tracking-widest uppercase hover:text-[#c7a86b] transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-[#c7a86b] after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 🟢 Το μενού κινητού */}
          <div
            id="mobile-nav"
            className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="py-4 border-t border-[#c7a86b]/25 flex flex-col">
              
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="sm:hidden block text-white text-sm font-semibold tracking-widest uppercase py-3 border-b border-white/10 hover:text-[#c7a86b] transition-colors"
              >
                ΑΡΧΙΚΗ
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-sm font-semibold tracking-widest uppercase py-3 border-b border-white/10 hover:text-[#c7a86b] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
