"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const projectImages = [
  { src: "/images/kathistiko.webp", alt: "Καθιστικό", width: 600, height: 400 },
  { src: "/images/kitchen-cad-before.webp", alt: "Κουζίνα CAD", width: 600, height: 400 },
  { src: "/images/kouzina.webp", alt: "Κουζίνα", width: 600, height: 400 },
  { src: "/images/krevati.webp", alt: "Κρεβάτι", width: 600, height: 400 },
  { src: "/images/ntoulapa.webp", alt: "Ντουλάπα", width: 600, height: 400 },
  { src: "/images/saloni.webp", alt: "Σαλόνι", width: 600, height: 400 },
  { src: "/images/teddy.webp", alt: "Teddy", width: 600, height: 400 },
];

// Πόσο "δυνατό" πρέπει να είναι το swipe για να αλλάξει εικόνα
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = containerRef.current.querySelectorAll(".project-item");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const lockScroll = () => {
    scrollYRef.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";
    window.scrollTo(0, scrollYRef.current);
  };

  useEffect(() => {
    return () => unlockScroll();
  }, []);

  const openLightbox = (index: number) => {
    lockScroll();
    setSelectedIndex(index);
    setIsZoomed(false);
    setImgLoaded(false);
    setDirection(0);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    unlockScroll();
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setImgLoaded(false);
    setDirection(1);
    setSelectedIndex((prev) => (prev! + 1) % projectImages.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setImgLoaded(false);
    setDirection(-1);
    setSelectedIndex((prev) => (prev! - 1 + projectImages.length) % projectImages.length);
    setIsZoomed(false);
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      nextImage();
    } else if (swipe > swipeConfidenceThreshold) {
      prevImage();
    }
  };

  return (
    <>
      <Navbar solid={true} />

      <main className="min-h-screen bg-[#f8f9fa] pt-32 pb-24 flex flex-col items-center px-4 sm:px-8 relative">
        <div className="max-w-[1400px] w-full">
          <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectImages.map((img, index) => (
              <motion.div
                key={index}
                onClick={() => openLightbox(index)}
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
                className="project-item relative rounded-lg overflow-hidden bg-gray-200 shadow-sm transition-all duration-700 ease-out opacity-0 translate-y-8 cursor-pointer touch-manipulation outline-none focus:outline-none"
              >
                <div className="w-full h-auto aspect-[4/3] relative block">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-full object-cover object-center transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute top-4 right-4 flex gap-3 z-50">
                <button
                  onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
                  className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors touch-manipulation"
                >
                  {isZoomed ? "🔍-" : "🔍+"}
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                  className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors touch-manipulation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={selectedIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 400, damping: 40 },
                    opacity: { duration: 0.15 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={handleDragEnd}
                  className={`relative transition-[width,height] duration-300 ease-in-out ${isZoomed ? "w-[95vw] h-[95vh]" : "max-w-[95vw] max-h-[85vh] sm:max-w-[75vw] sm:max-h-[80vh] w-[95vw] h-[85vh] sm:w-[75vw] sm:h-[80vh]"}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl bg-black">
                    {!imgLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    )}
                    <Image
                      src={projectImages[selectedIndex].src}
                      alt={projectImages[selectedIndex].alt}
                      fill
                      className="object-contain pointer-events-none select-none"
                      sizes="100vw"
                      priority
                      draggable={false}
                      onLoad={() => setImgLoaded(true)}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-colors z-50 touch-manipulation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-colors z-50 touch-manipulation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>

              <div className="absolute top-4 left-4 text-white/80 text-sm sm:text-base font-medium bg-black/30 px-3 py-1 rounded-full">
                {selectedIndex + 1} / {projectImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}