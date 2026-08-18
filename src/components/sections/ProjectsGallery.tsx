"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import {
  galleryCategories,
  galleryProjects,
  type GalleryCategory,
  type GalleryProject,
} from "@/data/gallery";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 280 : -280,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 280 : -280,
    opacity: 0,
  }),
};

type LightboxState = {
  projectId: string;
  imageIndex: number;
};

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "Όλα">(
    "Όλα"
  );
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [direction, setDirection] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const scrollYRef = useRef(0);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Όλα") return galleryProjects;
    return galleryProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeProject: GalleryProject | null = useMemo(() => {
    if (!lightbox) return null;
    return galleryProjects.find((p) => p.id === lightbox.projectId) ?? null;
  }, [lightbox]);

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

  const openLightbox = (projectId: string, imageIndex = 0) => {
    lockScroll();
    setLightbox({ projectId, imageIndex });
    setIsZoomed(false);
    setImgLoaded(false);
    setDirection(0);
  };

  const closeLightbox = () => {
    setLightbox(null);
    setIsZoomed(false);
    unlockScroll();
  };

  const nextImage = () => {
    if (!activeProject || !lightbox) return;
    setImgLoaded(false);
    setDirection(1);
    setIsZoomed(false);
    setLightbox({
      projectId: lightbox.projectId,
      imageIndex: (lightbox.imageIndex + 1) % activeProject.images.length,
    });
  };

  const prevImage = () => {
    if (!activeProject || !lightbox) return;
    setImgLoaded(false);
    setDirection(-1);
    setIsZoomed(false);
    setLightbox({
      projectId: lightbox.projectId,
      imageIndex:
        (lightbox.imageIndex - 1 + activeProject.images.length) %
        activeProject.images.length,
    });
  };

  useEffect(() => {
    if (!lightbox || !activeProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (activeProject.images.length <= 1) return;
      if (e.key === "ArrowRight") {
        setImgLoaded(false);
        setDirection(1);
        setIsZoomed(false);
        setLightbox((prev) =>
          prev
            ? {
                projectId: prev.projectId,
                imageIndex:
                  (prev.imageIndex + 1) % activeProject.images.length,
              }
            : prev
        );
      }
      if (e.key === "ArrowLeft") {
        setImgLoaded(false);
        setDirection(-1);
        setIsZoomed(false);
        setLightbox((prev) =>
          prev
            ? {
                projectId: prev.projectId,
                imageIndex:
                  (prev.imageIndex - 1 + activeProject.images.length) %
                  activeProject.images.length,
              }
            : prev
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, activeProject]);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) nextImage();
    else if (swipe > swipeConfidenceThreshold) prevImage();
  };

  const currentImage =
    activeProject && lightbox
      ? activeProject.images[lightbox.imageIndex]
      : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
            <FilterChip
              label="Όλα"
              active={activeCategory === "Όλα"}
              onClick={() => setActiveCategory("Όλα")}
            />
            {galleryCategories.map((category) => (
              <FilterChip
                key={category}
                label={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.button
                  key={project.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.03, 0.3),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openLightbox(project.id)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 text-left cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-2"
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    loading={index < 4 ? "eager" : "lazy"}
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="block text-[#c7a86b] text-[10px] uppercase tracking-[0.18em] mb-1">
                      {project.category}
                    </span>
                    <span className="block text-white font-serif text-sm sm:text-base leading-snug">
                      {project.title}
                    </span>
                    {project.images.length > 1 && (
                      <span className="mt-1 inline-block text-white/70 text-[11px]">
                        {project.images.length} φωτογραφίες
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 py-16">
          Δεν βρέθηκαν έργα σε αυτή την κατηγορία.
        </p>
      )}

      <AnimatePresence>
        {lightbox && activeProject && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute top-4 left-4 right-4 z-50 flex items-start justify-between gap-3 pointer-events-none">
                <div className="pointer-events-auto bg-black/40 backdrop-blur-sm text-white px-3 py-2 rounded-lg max-w-[70%]">
                  <p className="text-[#c7a86b] text-[10px] uppercase tracking-widest">
                    {activeProject.category}
                  </p>
                  <p className="font-serif text-sm sm:text-base">
                    {activeProject.title}
                  </p>
                  <p className="text-white/60 text-xs mt-0.5">
                    {lightbox.imageIndex + 1} / {activeProject.images.length}
                  </p>
                </div>
                <div className="pointer-events-auto flex gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomed((z) => !z);
                    }}
                    className="bg-white/15 hover:bg-white/30 text-white p-2.5 rounded-full transition-colors touch-manipulation"
                    aria-label={isZoomed ? "Σμίκρυνση" : "Μεγέθυνση"}
                  >
                    <ZoomIcon zoomed={isZoomed} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeLightbox();
                    }}
                    className="bg-white/15 hover:bg-white/30 text-white p-2.5 rounded-full transition-colors touch-manipulation"
                    aria-label="Κλείσιμο"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`${lightbox.projectId}-${lightbox.imageIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 400, damping: 40 },
                    opacity: { duration: 0.15 },
                  }}
                  drag={activeProject.images.length > 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={handleDragEnd}
                  className={`relative transition-[width,height] duration-300 ease-in-out ${
                    isZoomed
                      ? "w-[95vw] h-[95vh]"
                      : "w-[95vw] h-[80vh] sm:w-[80vw] sm:h-[82vh] max-w-6xl"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-black/40">
                    {!imgLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    )}
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
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

              {activeProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-2.5 sm:p-3 rounded-full transition-colors z-50 touch-manipulation"
                    aria-label="Προηγούμενη"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-2.5 sm:p-3 rounded-full transition-colors z-50 touch-manipulation"
                    aria-label="Επόμενη"
                  >
                    <ChevronRightIcon />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm tracking-wide transition-colors touch-manipulation rounded-full border ${
        active
          ? "bg-[#101010] text-white border-[#101010]"
          : "bg-transparent text-gray-600 border-[#d9d9d4] hover:border-[#101010] hover:text-[#101010]"
      }`}
    >
      {label}
    </button>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ZoomIcon({ zoomed }: { zoomed: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      {zoomed ? (
        <line x1="8" y1="11" x2="14" y2="11" />
      ) : (
        <>
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </>
      )}
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
