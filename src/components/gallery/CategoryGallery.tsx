"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryProject } from "@/data/gallery";
import { galleryThumbSrc } from "@/lib/gallery-images";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

/** Projects rendered before the first "load more" */
const INITIAL_COUNT = 16;
const LOAD_STEP = 16;

type LightboxState = {
  projectId: string;
  imageIndex: number;
};

type CategoryGalleryProps = {
  projects: GalleryProject[];
};

export default function CategoryGallery({ projects }: CategoryGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [direction, setDirection] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const scrollYRef = useRef(0);

  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [projects, visibleCount],
  );

  const remaining = projects.length - visibleProjects.length;

  const activeProject: GalleryProject | null = useMemo(() => {
    if (!lightbox) return null;
    return projects.find((p) => p.id === lightbox.projectId) ?? null;
  }, [lightbox, projects]);

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
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, activeProject]);

  return (
    <>
      <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {visibleProjects.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            initial={index < INITIAL_COUNT ? { opacity: 0, y: 24 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: Math.min((index % LOAD_STEP) * 0.03, 0.3),
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openLightbox(project.id)}
            aria-label={`${project.title}${project.images.length > 1 ? `, ${project.images.length} φωτογραφίες` : ""}`}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 text-left cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-2"
          >
            <Image
              src={galleryThumbSrc(project.cover)}
              alt=""
              fill
              className="object-cover will-change-transform transition-transform duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-active:scale-[1.04]"
              sizes="(max-width: 419px) 92vw, (max-width: 768px) 46vw, (max-width: 1200px) 33vw, 25vw"
              loading={index < 4 ? "eager" : "lazy"}
              quality={70}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
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
      </div>

      {projects.length === 0 && (
        <p className="text-center text-gray-500 py-16" role="status">
          Δεν βρέθηκαν έργα σε αυτή την κατηγορία.
        </p>
      )}

      {projects.length > INITIAL_COUNT && (
        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12">
          <p className="text-sm text-gray-500" role="status" aria-live="polite">
            {visibleProjects.length} από {projects.length} έργα
          </p>
          {remaining > 0 && (
            <motion.button
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + LOAD_STEP, projects.length),
                )
              }
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-11 items-center gap-3 rounded-full border border-[#171717] px-7 py-3 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-2"
            >
              Φόρτωση περισσότερων έργων
              <span aria-hidden="true" className="text-xs opacity-70">
                +{Math.min(remaining, LOAD_STEP)}
              </span>
            </motion.button>
          )}
        </div>
      )}

      <AnimatePresence>
        {lightbox && activeProject && (
          <GalleryLightbox
            project={activeProject}
            imageIndex={lightbox.imageIndex}
            direction={direction}
            isZoomed={isZoomed}
            imgLoaded={imgLoaded}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
            onToggleZoom={() => setIsZoomed((z) => !z)}
            onImageLoaded={() => setImgLoaded(true)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
