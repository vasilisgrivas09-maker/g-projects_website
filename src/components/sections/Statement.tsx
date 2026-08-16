'use client';

import { motion } from 'framer-motion';

export default function Statement() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="kicker mb-6">Η φιλοσοφία μας</p>
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.15] tracking-tight">
            &ldquo;Κάθε χώρος αφηγείται μια ιστορία.{' '}
            <span className="italic text-[#c7a86b]">
              Εμείς τη γράφουμε
            </span>{' '}
            με ξύλο, φως και λεπτομέρεια.&rdquo;
          </blockquote>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-px bg-[#c7a86b] mx-auto mt-10 origin-center"
          />
          <p className="mt-8 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Από το πρώτο σκίτσο μέχρι την τελευταία βίδα — σχεδιάζουμε, κατασκευάζουμε
            και παραδίδουμε χώρους που αντέχουν στον χρόνο.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
