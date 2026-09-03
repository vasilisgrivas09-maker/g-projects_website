"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Πριν (Σχέδιο)",
  afterLabel = "Μετά (Κατασκευή)",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let percentage = (x / width) * 100;
    percentage = Math.min(100, Math.max(0, percentage));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none touch-pan-y group"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 1. Η εικόνα του σχεδίου (Πίσω) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* 2. Η εικόνα της κατασκευής (Μπροστά) */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
            draggable={false}
          />
        </div>

        {/* 3. Η διαχωριστική γραμμή */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none transition-transform duration-75 ease-out"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <button
            type="button"
            role="slider"
            aria-label="Σύγκριση σχεδίου και κατασκευής"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuetext={`${Math.round(sliderPosition)}% κατασκευή`}
            onKeyDown={handleKeyDown}
            className="pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-white/30 transition-transform group-hover:scale-110 focus-visible:outline-none focus-visible:ring-[#b79a69]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-800" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </button>
        </div>

        {/* 4. Ετικέτες */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium tracking-wide z-10 pointer-events-none shadow-lg">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium tracking-wide z-10 pointer-events-none shadow-lg">
          {afterLabel}
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;