"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export interface CarouselSlide {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  href?: string;
}

interface MiniImageCarouselProps {
  slides: CarouselSlide[];
  /** Auto-advance interval in ms */
  interval?: number;
  className?: string;
}

/**
 * Mini carousel — clone-style: one image + caption + progress bar / dots.
 * Renders static first frame for SSR so server and client match (avoids hydration error).
 */
export function MiniImageCarousel({
  slides,
  interval = 5000,
  className = "",
}: MiniImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const total = slides.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || total <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % total), interval);
    return () => clearInterval(t);
  }, [mounted, total, interval]);

  if (!total) return null;

  const slide = slides[index];

  // Static first paint (server + initial client) — no AnimatePresence/motion to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className={`rounded-3xl overflow-hidden bg-hugo-cream border border-hugo-black/10 p-6 md:p-10 ${className}`}>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="relative w-full md:w-2/5 aspect-square max-w-[12rem] md:max-w-none rounded-2xl overflow-hidden shrink-0 bg-hugo-black/5">
            <div className="absolute inset-0">
              <Image src={slide.imageSrc} alt={slide.imageAlt} fill className="object-cover" sizes="300px" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            {slide.href ? (
              <Link href={slide.href} className="group block">
                <h4 className="text-xl md:text-2xl font-bold text-hugo-black group-hover:text-hugo-gold transition-colors">
                  {slide.title}
                </h4>
                {slide.description && (
                  <p className="mt-2 text-hugo-black/60 line-clamp-2">{slide.description}</p>
                )}
              </Link>
            ) : (
              <>
                <h4 className="text-xl md:text-2xl font-bold text-hugo-black">{slide.title}</h4>
                {slide.description && <p className="mt-2 text-hugo-black/60 line-clamp-2">{slide.description}</p>}
              </>
            )}
            <div className="mt-8">
              <div className="h-3 bg-hugo-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-hugo-gold rounded-full"
                  style={{ width: `${((index + 1) / total) * 100}%` }}
                />
              </div>
              <div className="flex gap-2 mt-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === index ? "bg-hugo-gold" : "bg-hugo-black/20 hover:bg-hugo-black/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // After mount: animated carousel
  return (
    <div className={`rounded-3xl overflow-hidden bg-hugo-cream border border-hugo-black/10 p-6 md:p-10 ${className}`}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="relative w-full md:w-2/5 aspect-square max-w-[12rem] md:max-w-none rounded-2xl overflow-hidden shrink-0 bg-hugo-black/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image src={slide.imageSrc} alt={slide.imageAlt} fill className="object-cover" sizes="300px" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {slide.href ? (
                <Link href={slide.href} className="group block">
                  <h4 className="text-xl md:text-2xl font-bold text-hugo-black group-hover:text-hugo-gold transition-colors">
                    {slide.title}
                  </h4>
                  {slide.description && (
                    <p className="mt-2 text-hugo-black/60 line-clamp-2">{slide.description}</p>
                  )}
                </Link>
              ) : (
                <>
                  <h4 className="text-xl md:text-2xl font-bold text-hugo-black">{slide.title}</h4>
                  {slide.description && <p className="mt-2 text-hugo-black/60 line-clamp-2">{slide.description}</p>}
                </>
              )}
            </motion.div>
          </AnimatePresence>
          <div className="mt-8">
            <div className="h-3 bg-hugo-black/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-hugo-gold rounded-full"
                initial={false}
                animate={{ width: `${((index + 1) / total) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="flex gap-2 mt-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === index ? "bg-hugo-gold" : "bg-hugo-black/20 hover:bg-hugo-black/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
