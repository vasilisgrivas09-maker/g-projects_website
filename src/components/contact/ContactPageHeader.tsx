"use client";

import { motion } from "framer-motion";

export default function ContactPageHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 max-w-2xl mx-auto px-4"
    >
      <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 tracking-tight">
        Ας μιλήσουμε
      </h1>
      <p className="text-gray-500 text-lg leading-relaxed">
        Μη διστάσετε να επικοινωνήσετε. Οποιαδήποτε ιδέα, ερώτηση ή ραντεβού,
        είμαστε εδώ.
      </p>
    </motion.header>
  );
}
