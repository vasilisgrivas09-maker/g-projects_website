"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactFaq } from "@/data/faq";

export default function ContactFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="max-w-5xl mx-auto mt-12 px-4"
      aria-labelledby="contact-faq-heading"
    >
      <h2
        id="contact-faq-heading"
        className="text-2xl font-serif text-gray-900 mb-6"
      >
        Συχνές Ερωτήσεις
      </h2>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden divide-y divide-gray-100">
        {contactFaq.map((item, index) => {
          const isOpen = openFaq === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div key={item.q} className="p-5 md:p-6">
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex justify-between items-center text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-2 rounded-md py-1"
              >
                <span className="text-lg font-medium text-gray-800">
                  {item.q}
                </span>
                <span
                  className={`text-[#b79a69] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
