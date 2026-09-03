'use client';

import { motion, Variants } from 'framer-motion';
import { useState, useRef } from 'react';
import { miniServices, processSteps } from '@/data/services';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 24,
    },
  },
};

const viewportConfig = { once: true, amount: 0.2 };

const sectionTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

function ServiceCard({ service }: { service: { title: string; desc: string } }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const updatePointer = (clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePointer(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      updatePointer(touch.clientX, touch.clientY);
      if (!isHovered) setIsHovered(true);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      updatePointer(touch.clientX, touch.clientY);
      setIsHovered(true);
    }
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`group relative bg-white/[0.03] rounded-2xl p-8 border border-white/10 hover:border-[#d4a373]/40 hover:bg-white/[0.05] transition-colors duration-500 overflow-hidden cursor-pointer will-change-transform ${isHovered ? 'is-active' : ''}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(212, 163, 115, 0.2), transparent 40%)',
        }}
      />

      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#d4a373] relative">
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-gray-400 leading-relaxed relative z-10">
        {service.desc}
      </p>
    </motion.div>
  );
}

export default function ServicesAnimated() {
  return (
    <>
      {/* Section Head */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={sectionTransition}
        className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20"
      >
        <div>
          <div className="flex items-center gap-3 text-sm font-medium text-[#d4a373] uppercase tracking-wider mb-3">
            <span className="w-6 h-px bg-[#d4a373]" />
            What we do
          </div>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1]">
            Από την ιδέα<br />
            <span className="font-semibold">στην πραγματικότητα.</span>
          </h2>
        </div>
        <div className="flex items-start md:items-center">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
            Μια ολοκληρωμένη εμπειρία design και κατασκευής,
            προσαρμοσμένη στον τρόπο που ζεις.
          </p>
        </div>
      </motion.div>

      {/* Mini Services */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28"
      >
        {miniServices.map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </motion.div>

      {/* Process Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={sectionTransition}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 text-xs md:text-sm font-medium text-[#d4a373] uppercase tracking-wider mb-2">
            <span className="w-6 h-px bg-[#d4a373]" />
            How we work
          </div>
          <h3 className="text-xl md:text-4xl font-light leading-[1.2]">
            Από την ιδέα<br />
            <span className="font-semibold">στην παράδοση, βήμα-βήμα.</span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="group bg-white/[0.03] rounded-xl p-5 md:p-6 border border-white/10 
                         hover:border-[#d4a373]/40 hover:bg-white/[0.05] transition-colors duration-300 cursor-pointer will-change-transform"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <div className="text-lg md:text-xl font-bold text-[#d4a373] w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#d4a373]/10 flex items-center justify-center flex-shrink-0 border border-[#d4a373]/20 group-hover:bg-[#d4a373] group-hover:text-[#0a0a0a] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
                <h4 className="font-semibold text-sm md:text-base">{step.title}</h4>
              </div>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed pl-12 md:pl-14">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
