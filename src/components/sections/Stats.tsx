'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Ολοκληρωμένα έργα' },
  { value: '5+', label: 'Χρόνια εμπειρίας' },
  { value: '100%', label: 'Custom κατασκευές' },
  { value: '24h', label: 'Χρόνος απόκρισης' },
];

export default function Stats() {
  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-[#101010] border-y border-[#c7a86b]/20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#c7a86b] mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs md:text-sm uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
