"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  galleryCategories,
  galleryProjects,
  type GalleryCategory,
  type GalleryProject,
} from "@/data/gallery";
import { galleryThumbSrc } from "@/lib/gallery-images";
import GalleryLightbox from "@/components/sections/GalleryLightbox";

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
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, activeProject]);

  return (
    <>
      <div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12"
        role="group"
        aria-label="Φίλτρο κατηγορίας έργων"
      >
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
        className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
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
              aria-label={`${project.title}, ${project.category}${project.images.length > 1 ? `, ${project.images.length} φωτογραφίες` : ""}`}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 text-left cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-2"
            >
              <Image
                src={galleryThumbSrc(project.cover)}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 419px) 92vw, (max-width: 768px) 46vw, (max-width: 1200px) 33vw, 25vw"
                loading={index < 4 ? "eager" : "lazy"}
                quality={70}
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
        <p className="text-center text-gray-500 py-16" role="status">
          Δεν βρέθηκαν έργα σε αυτή την κατηγορία.
        </p>
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
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      whileHover={{ y: active ? 0 : -2 }}
      whileTap={{ scale: 0.97 }}
      className={`relative px-3.5 sm:px-4 py-2 text-xs sm:text-sm tracking-wide transition-colors touch-manipulation rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-2 ${
        active
          ? "bg-[#101010] text-white border-[#101010]"
          : "bg-transparent text-gray-600 border-[#d9d9d4] hover:border-[#101010] hover:text-[#101010]"
      }`}
    >
      {active && (
        <motion.span
          layoutId="gallery-filter-active"
          className="absolute inset-0 rounded-full bg-[#101010]"
          style={{ zIndex: -1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative">{label}</span>
    </motion.button>
  );
}
