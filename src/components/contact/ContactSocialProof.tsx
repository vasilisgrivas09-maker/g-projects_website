"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Handshake } from "lucide-react";

const items = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    title: "Απόλυτη Εμπειρία",
    desc: "5+ χρόνια στον κορυφαίο σχεδιασμό και την κατασκευή ποιοτικών χώρων.",
  },
  {
    icon: <BadgeCheck className="w-12 h-12" strokeWidth={1.8} aria-hidden />,
    title: "Απόλυτη Ποιότητα",
    desc: "Δίνουμε έμφαση στην άριστη ποιότητα κατασκευής και στο μοναδικό design που ξεχωρίζει.",
  },
  {
    icon: <Handshake className="w-12 h-12" strokeWidth={1.8} aria-hidden />,
    title: "Εμπιστοσύνη & Διαφάνεια",
    desc: "Αναλαμβάνουμε την πλήρη επίβλεψη με διαφάνεια, τηρώντας τα χρονοδιαγράμματα και παραδίδοντας ένα άψογο αποτέλεσμα.",
  },
];

export default function ContactSocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 px-4"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          whileHover={{
            y: -8,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
            transition: { duration: 0.15, type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.98, y: -4 }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 text-center flex flex-col items-center gap-4 touch-manipulation"
        >
          <span className="w-14 h-14 text-[#c7a86b]">{item.icon}</span>
          <p className="text-xl md:text-2xl font-semibold text-gray-900">
            {item.title}
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
