"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import type { ReactNode } from "react";

const serviceIcons: Record<string, ReactNode> = {
  "Εσωτερικός Σχεδιασμός": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  "Custom Έπιπλα": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 9l-1.5 1.5V15H6.5v-4.5L5 9" />
      <path d="M8 15V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9" />
      <path d="M15 19a2 2 0 0 1-2-2v-3H11v3a2 2 0 0 1-2 2H5" />
      <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </svg>
  ),
  "Ολική Ανακαίνιση": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
      <line x1="12" y1="9" x2="12" y2="9.01" />
    </svg>
  ),
};

export default function ServicesPageContent() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{
              y: -8,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
              transition: { duration: 0.15, type: "spring", stiffness: 300 },
            }}
            whileTap={{
              scale: 0.92,
              y: -4,
              transition: { duration: 0.08 },
            }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center cursor-pointer touch-manipulation outline-none focus:outline-none focus:ring-0 ring-0"
          >
            <div className="w-14 h-14 text-[#c7a86b] mb-5">
              {serviceIcons[service.title]}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#c7a86b] hover:bg-[#b89655] text-gray-900 font-bold py-3.5 px-8 rounded-full shadow-lg shadow-[#c7a86b]/25 transition-all duration-300 hover:scale-105"
        >
          Ζητήστε προσφορά
          <span>↗</span>
        </Link>
      </motion.div>
    </>
  );
}
