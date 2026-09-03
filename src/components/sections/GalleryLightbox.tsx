"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  type PanInfo,
} from "framer-motion";
import type { GalleryProject } from "@/data/gallery";
import { useFocusTrap } from "@/hooks/useFocusTrap";

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

type GalleryLightboxProps = {
  project: GalleryProject;
  imageIndex: number;
  direction: number;
  isZoomed: boolean;
  imgLoaded: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onToggleZoom: () => void;
  onImageLoaded: () => void;
};

export default function GalleryLightbox({
  project,
  imageIndex,
  direction,
  isZoomed,
  imgLoaded,
  onClose,
  onPrev,
  onNext,
  onToggleZoom,
  onImageLoaded,
}: GalleryLightboxProps) {
  const trapRef = useFocusTrap(true);
  const currentImage = project.images[imageIndex];
  const titleId = `lightbox-title-${project.id}`;

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) onNext();
    else if (swipe > swipeConfidenceThreshold) onPrev();
  };

  return (
    <motion.div
      ref={trapRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 left-4 right-4 z-50 flex items-start justify-between gap-3 pointer-events-none">
          <div className="pointer-events-auto bg-black/40 backdrop-blur-sm text-white px-3 py-2 rounded-lg max-w-[70%]">
            <p className="text-[#c7a86b] text-[10px] uppercase tracking-widest">
              {project.category}
            </p>
            <p id={titleId} className="font-serif text-sm sm:text-base">
              {project.title}
            </p>
            <p className="text-white/60 text-xs mt-0.5" aria-live="polite">
              {imageIndex + 1} / {project.images.length}
            </p>
          </div>
          <div className="pointer-events-auto flex gap-2">
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleZoom();
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/15 hover:bg-white/30 text-white p-2.5 rounded-full transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b]"
              aria-label={isZoomed ? "Σμίκρυνση" : "Μεγέθυνση"}
            >
              <ZoomIcon zoomed={isZoomed} />
            </motion.button>
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/15 hover:bg-white/30 text-white p-2.5 rounded-full transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b]"
              aria-label="Κλείσιμο"
            >
              <CloseIcon />
            </motion.button>
          </div>
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`${project.id}-${imageIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 40 },
              opacity: { duration: 0.15 },
            }}
            drag={project.images.length > 1 ? "x" : false}
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
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden
                >
                  <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain pointer-events-none select-none"
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={90}
                priority
                draggable={false}
                onLoad={onImageLoaded}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {project.images.length > 1 && (
          <>
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              whileHover={{ scale: 1.08, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-2.5 sm:p-3 rounded-full transition-colors z-50 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b]"
              aria-label="Προηγούμενη φωτογραφία"
            >
              <ChevronLeftIcon />
            </motion.button>
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              whileHover={{ scale: 1.08, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-2.5 sm:p-3 rounded-full transition-colors z-50 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b]"
              aria-label="Επόμενη φωτογραφία"
            >
              <ChevronRightIcon />
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
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
