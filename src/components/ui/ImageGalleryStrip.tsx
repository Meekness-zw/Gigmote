"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryStripProps {
  images: GalleryImage[];
  className?: string;
}

/**
 * Mobile: swipeable carousel. Desktop: grid.
 */
export function ImageGalleryStrip({ images, className = "" }: ImageGalleryStripProps) {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const total = images.length;

  const goTo = (i: number) => {
    const next = Math.max(0, Math.min(i, total - 1));
    setIndex(next);
    const cardWidth = typeof window !== "undefined" ? Math.min(window.innerWidth * 0.85, 360) : 320;
    scrollRef.current?.scrollTo({ left: next * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <div className={className}>
      {/* Mobile: carousel */}
      <div className="lg:hidden overflow-hidden -mx-4">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const cardWidth = el.offsetWidth - 32;
            const newIndex = Math.round(el.scrollLeft / cardWidth);
            if (newIndex >= 0 && newIndex < total) setIndex(newIndex);
          }}
        >
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="shrink-0 w-[85vw] max-w-[360px] snap-center group"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-hugo-black/5 bg-hugo-black/5">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 85vw, 360px"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-3 text-sm font-medium text-hugo-black/70">{img.caption}</figcaption>
              )}
            </motion.figure>
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
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "bg-hugo-gold w-6" : "bg-hugo-black/25 w-2.5 hover:bg-hugo-black/40"
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
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-hugo-black/5 bg-hugo-black/5">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {img.caption && (
              <figcaption className="mt-3 text-sm font-medium text-hugo-black/70">{img.caption}</figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
