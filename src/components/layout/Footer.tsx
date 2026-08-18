import Link from 'next/link';
import Logo from '@/components/layout/Logo';
import { PHONE, PHONE_DISPLAY, SOCIAL_LINKS } from '@/data/site';

const footerLinks = [
  { href: '/projects', label: 'Έργα' },
  { href: '/services', label: 'Υπηρεσίες' },
  { href: '/contact', label: 'Επικοινωνία' },
];

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white/75 border-t border-[#c7a86b]/20">
      <div className="container px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <Logo size="sm" />
              <span className="font-manrope font-semibold text-sm tracking-widest group-hover:text-[#c7a86b] transition-colors">
                <span className="text-[#c7a86b] text-lg">G</span> PROJECTS
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Εσωτερικός σχεδιασμός, custom έπιπλα και ολική ανακαίνιση —
              από την ιδέα στην πραγματικότητα.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-white hover:text-[#c7a86b] transition-colors text-sm font-medium min-h-11"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-white text-xs uppercase tracking-[0.2em] mb-4 font-semibold">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-[#c7a86b] transition-colors min-h-11 flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-white text-xs uppercase tracking-[0.2em] mb-4 font-semibold">
              Social
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#c7a86b] hover:text-[#c7a86b] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#c7a86b] hover:text-[#c7a86b] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>© {new Date().getFullYear()} G Projects. All rights reserved.</span>
          <Link
            href="/privacy"
            className="text-white/40 hover:text-[#c7a86b] transition-colors underline underline-offset-4 min-h-11 flex items-center"
          >
            Πολιτική Απορρήτου
          </Link>
        </div>
      </div>
    </footer>
  );
}
