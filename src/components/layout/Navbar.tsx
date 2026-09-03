"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/layout/Logo";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { PHONE, PHONE_DISPLAY, SOCIAL_LINKS } from "@/data/site";

const navLinks = [
  { href: "/", label: "Αρχική" },
  { href: "/projects", label: "Έργα" },
  { href: "/services", label: "Υπηρεσίες" },
  { href: "/contact", label: "Επικοινωνία" },
];

/** Desktop nav omits the home link — the logo covers it */
const desktopLinks = navLinks.filter((link) => link.href !== "/");

const panelVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const panelRef = useFocusTrap(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          solid
            ? "bg-black/80"
            : isScrolled
              ? "bg-black/95 backdrop-blur-md"
              : "bg-gradient-to-r from-black/96 to-black/74"
        } border-b border-[#b79a69]/40 shadow-xl`}
      >
        <div className="container px-4 sm:px-6 lg:px-8 py-4 md:py-2">
          <div className="flex items-center justify-between h-16 lg:h-24">
            <Link href="/" className="flex items-center gap-3 lg:gap-4 group">
              <Logo size="md" />
              <span className="text-white font-manrope font-semibold text-sm lg:text-base tracking-widest group-hover:text-[#b79a69] transition-colors">
                <span className="text-[#b79a69] text-lg lg:text-2xl">G</span>{" "}
                PROJECTS
              </span>
            </Link>

            <button
              type="button"
              id="mobile-menu-button"
              className="lg:hidden relative z-50 w-11 h-11 flex flex-col justify-center items-center gap-1.5 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>

            <nav className="hidden lg:flex items-center gap-8">
              {desktopLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative text-sm font-semibold tracking-widest uppercase transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-[#b79a69] after:transition-all hover:text-[#b79a69] hover:after:w-full ${
                      isActive
                        ? "text-[#b79a69] after:w-full"
                        : "text-white after:w-0"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Μενού πλοήγησης"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[60] flex h-full flex-col overflow-y-auto bg-[#171717] px-6 pb-10 pt-5 text-white lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-manrope text-sm font-semibold tracking-widest">
                <span className="text-lg text-[#b79a69]">G</span> PROJECTS
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Κλείσιμο μενού"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xl leading-none text-white transition-colors hover:border-[#b79a69] hover:text-[#b79a69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col"
              aria-label="Κύρια πλοήγηση"
            >
              {navLinks.map((link, index) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className="group flex items-baseline gap-4 border-b border-white/10 py-5 focus-visible:outline-none"
                    >
                      <span
                        aria-hidden="true"
                        className="w-6 shrink-0 text-[11px] tracking-[0.2em] text-[#b79a69]/70"
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`font-serif text-3xl transition-colors group-hover:text-[#b79a69] group-focus-visible:text-[#b79a69] ${
                          isActive ? "text-[#b79a69]" : "text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              className="mt-auto pt-10"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-sm uppercase tracking-[0.16em] focus-visible:ring-white focus-visible:ring-offset-[#171717]"
              >
                Ζητήστε προσφορά
              </Link>

              <a
                href={`tel:${PHONE}`}
                className="mt-4 flex min-h-11 items-center justify-center text-sm text-white/70 transition-colors hover:text-[#b79a69]"
              >
                {PHONE_DISPLAY}
              </a>

              <div className="mt-4 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.18em] text-white/50">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-11 flex items-center transition-colors hover:text-[#b79a69]"
                >
                  Instagram
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-11 flex items-center transition-colors hover:text-[#b79a69]"
                >
                  Facebook
                </a>
              </div>

              <p className="mt-6 text-center text-[11px] uppercase tracking-[0.18em] text-white/35">
                Πανελλαδικά
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
