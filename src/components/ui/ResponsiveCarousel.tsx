"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ResponsiveCarouselProps {
  children: React.ReactNode[];
  /** Desktop grid cols: 2, 3, or 4 */
  desktopCols?: 2 | 3 | 4;
  /** Gap between items (Tailwind class) */
  gap?: string;
  /** Optional className for wrapper */
  className?: string;
}

/**
 * Mobile: swipeable carousel with dots + prev/next.
 * Desktop: grid layout.
 */
export function ResponsiveCarousel({
  children,
  desktopCols = 4,
  gap = "gap-8",
  className = "",
}: ResponsiveCarouselProps) {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const total = children.length;

  const goTo = (i: number) => {
    const next = Math.max(0, Math.min(i, total - 1));
    setIndex(next);
    const cardW = typeof window !== "undefined" ? Math.min(window.innerWidth * 0.85, 360) : 320;
    const gapPx = 16;
    scrollRef.current?.scrollTo({ left: next * (cardW + gapPx), behavior: "smooth" });
  };

  const gridClass = desktopCols === 2 ? "md:grid-cols-2" : desktopCols === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

  return (
    <div className={className}>
      {/* Mobile: carousel */}
      <div className={`md:hidden overflow-hidden`}>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide scroll-smooth"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const cardWidth = el.offsetWidth - 32;
            const newIndex = Math.round(el.scrollLeft / cardWidth);
            if (newIndex >= 0 && newIndex < total) setIndex(newIndex);
          }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="shrink-0 w-[85vw] max-w-[360px] snap-center snap-always"
              style={{ scrollSnapAlign: "center" }}
            >
              {child}
            </div>
          ))}
        </div>
        {/* Dots + prev/next */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className="w-10 h-10 rounded-full bg-hugo-black/10 hover:bg-hugo-black/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-hugo-black transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {children.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === index ? "bg-hugo-gold w-6" : "bg-hugo-black/25 hover:bg-hugo-black/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index >= total - 1}
            className="w-10 h-10 rounded-full bg-hugo-black/10 hover:bg-hugo-black/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-hugo-black transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Desktop: grid */}
      <div className={`hidden md:grid grid-cols-1 ${gridClass} ${gap}`}>
        {children}
      </div>
    </div>
  );
}
