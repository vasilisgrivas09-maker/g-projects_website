import { PHONE, PHONE_DISPLAY, SOCIAL_LINKS } from "@/data/site";

export default function ContactSidebar() {
  return (
    <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between gap-8 bg-[#faf8f6] text-left">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 text-[#c7a86b] shrink-0" aria-hidden>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
            Επικοινωνία
          </h2>
        </div>
        <div className="w-12 h-[3px] bg-black" aria-hidden />
        <p className="text-[15px] text-gray-600 leading-relaxed">
          Στείλτε μας μήνυμα και θα σας απαντήσουμε το συντομότερο δυνατό.
        </p>
      </div>

      <div className="flex flex-col gap-4 border-t border-gray-300 pt-6">
        <span className="font-semibold text-gray-900 text-base md:text-lg">
          Ή επικοινωνήστε απευθείας:
        </span>

        <div className="flex flex-col gap-3">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-3 hover:text-[#c7a86b] transition-colors py-1 group min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-2 rounded-md"
          >
            <span
              className="text-xl md:text-2xl group-hover:scale-110 transition-transform"
              aria-hidden
            >
              📞
            </span>
            <span className="text-base md:text-lg">{PHONE_DISPLAY}</span>
          </a>

          <a
            href="viber://chat?number=%2B306944085473&draft=Γεια%20σας%2C%20θα%20ήθελα%20να%20κλείσουμε%20ένα%20ραντεβού%20για%20τον%20χώρο%20μου."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#c7a86b] transition-colors py-1 group min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-2 rounded-md"
          >
            <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="#3b82f6" className="w-full h-full" aria-hidden>
                <path d="M17.472,14.37c-0.26-0.13-1.54-0.75-1.78-0.84c-0.24-0.09-0.42-0.13-0.6,0.26c-0.18,0.39-0.69,0.84-0.85,1.02 c-0.16,0.18-0.31,0.2-0.57,0.07c-0.26-0.13-1.1-0.4-2.09-1.29c-0.77-0.69-1.29-1.55-1.44-1.81c-0.15-0.26-0.02-0.4,0.11-0.53 c0.12-0.12,0.26-0.32,0.39-0.48c0.13-0.16,0.17-0.27,0.26-0.45c0.09-0.18,0.05-0.34-0.02-0.47c-0.08-0.13-0.6-1.45-0.82-1.98 c-0.22-0.53-0.44-0.44-0.6-0.45c-0.16-0.01-0.33-0.01-0.51-0.01c-0.18,0-0.47,0.07-0.71,0.32c-0.24,0.25-0.92,0.9-0.92,2.2 c0,1.3,0.95,2.56,1.08,2.74c0.13,0.18,1.86,2.84,4.51,3.98c0.63,0.27,1.12,0.43,1.5,0.55c0.63,0.2,1.2,0.17,1.65,0.1 c0.5-0.08,1.55-0.63,1.77-1.24c0.22-0.61,0.22-1.13,0.15-1.24C17.91,14.57,17.73,14.5,17.472,14.37z M12,2.02c-5.52,0-10,4.48-10,10 c0,1.78,0.47,3.45,1.29,4.9L2.06,21.93l5.08-1.33c1.42,0.77,3.04,1.2,4.75,1.2c5.53,0,10-4.48,10-10S17.53,2.02,12,2.02z M12,19.71 c-1.49,0-2.87-0.4-4.07-1.1l-0.29-0.17l-3.01,0.79l0.8-2.93l-0.19-0.3c-0.75-1.26-1.18-2.74-1.18-4.34c0-4.38,3.56-7.94,7.94-7.94 c4.38,0,7.94,3.56,7.94,7.94C19.94,16.15,16.38,19.71,12,19.71z" />
              </svg>
            </span>
            <span className="text-base md:text-lg">Viber</span>
          </a>

          <a
            href="https://wa.me/306944085473?text=Γεια%20σας%2C%20θα%20ήθελα%20να%20κλείσουμε%20ένα%20ραντεβού%20για%20τον%20χώρο%20μου."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#c7a86b] transition-colors py-1 group min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-2 rounded-md"
          >
            <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-full h-full" aria-hidden>
                <path d="M17.472,14.37c-0.26-0.13-1.54-0.75-1.78-0.84c-0.24-0.09-0.42-0.13-0.6,0.26c-0.18,0.39-0.69,0.84-0.85,1.02 c-0.16,0.18-0.31,0.2-0.57,0.07c-0.26-0.13-1.1-0.4-2.09-1.29c-0.77-0.69-1.29-1.55-1.44-1.81c-0.15-0.26-0.02-0.4,0.11-0.53 c0.12-0.12,0.26-0.32,0.39-0.48c0.13-0.16,0.17-0.27,0.26-0.45c0.09-0.18,0.05-0.34-0.02-0.47c-0.08-0.13-0.6-1.45-0.82-1.98 c-0.22-0.53-0.44-0.44-0.6-0.45c-0.16-0.01-0.33-0.01-0.51-0.01c-0.18,0-0.47,0.07-0.71,0.32c-0.24,0.25-0.92,0.9-0.92,2.2 c0,1.3,0.95,2.56,1.08,2.74c0.13,0.18,1.86,2.84,4.51,3.98c0.63,0.27,1.12,0.43,1.5,0.55c0.63,0.2,1.2,0.17,1.65,0.1 c0.5-0.08,1.55-0.63,1.77-1.24c0.22-0.61,0.22-1.13,0.15-1.24C17.91,14.57,17.73,14.5,17.472,14.37z M12,2.02c-5.52,0-10,4.48-10,10 c0,1.78,0.47,3.45,1.29,4.9L2.06,21.93l5.08-1.33c1.42,0.77,3.04,1.2,4.75,1.2c5.53,0,10-4.48,10-10S17.53,2.02,12,2.02z M12,19.71 c-1.49,0-2.87-0.4-4.07-1.1l-0.29-0.17l-3.01,0.79l0.8-2.93l-0.19-0.3c-0.75-1.26-1.18-2.74-1.18-4.34c0-4.38,3.56-7.94,7.94-7.94 c4.38,0,7.94,3.56,7.94,7.94C19.94,16.15,16.38,19.71,12,19.71z" />
              </svg>
            </span>
            <span className="text-base md:text-lg">WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="flex gap-3 mt-auto">
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-11 h-11 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-2"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-2"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
