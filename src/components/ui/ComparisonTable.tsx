"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { eases } from "@/utils/animations";

export interface ComparisonRow {
  feature: string;
  trad: string;
  pros: string[];
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  className?: string;
}

/**
 * Responsive comparison: table on desktop, swipeable carousel on mobile.
 */
export function ComparisonTable({ rows, className = "" }: ComparisonTableProps) {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const total = rows.length;

  const goTo = (i: number) => {
    const next = Math.max(0, Math.min(i, total - 1));
    setIndex(next);
    const w = typeof window !== "undefined" ? Math.min(window.innerWidth * 0.9, 400) : 360;
    scrollRef.current?.scrollTo({ left: next * (w + 16), behavior: "smooth" });
  };

  return (
    <div className={className}>
      {/* Desktop: table (scrollable if needed on narrow lg viewports) */}
      <div className="hidden lg:block overflow-x-auto overflow-hidden rounded-3xl border-[0.2rem] border-hugo-black/10 shadow-xl">
        <table className="w-full min-w-[600px]">
          <thead className="bg-hugo-cream">
            <tr>
              <th className="py-4 md:py-6 px-4 md:px-8 text-left text-base md:text-lg font-bold text-hugo-black/40 w-1/3">
                Feature
              </th>
              <th className="py-4 md:py-6 px-4 md:px-8 text-left text-base md:text-lg font-bold text-hugo-black/40 w-1/3">
                Traditional BPO
              </th>
              <th className="py-4 md:py-6 px-4 md:px-8 text-left text-base md:text-lg font-bold text-hugo-black w-1/3 bg-hugo-gold/10">
                Gigmote
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08, ease: eases.smoothStrong }}
                className="group hover:bg-gray-50/80 transition-colors"
              >
                <td className="py-4 md:py-6 px-4 md:px-8 font-medium text-hugo-black text-sm md:text-base">
                  {row.feature}
                </td>
                <td className="py-4 md:py-6 px-4 md:px-8 text-hugo-black/60 text-sm md:text-base flex items-center gap-2">
                  <X size={16} className="text-red-400 shrink-0" />
                  <span>{row.trad}</span>
                </td>
                <td className="py-4 md:py-6 px-4 md:px-8 font-bold text-hugo-black bg-hugo-gold/5 group-hover:bg-hugo-gold/10 transition-colors text-sm md:text-base">
                  <div className="flex flex-col gap-2">
                    {row.pros.map((pro, proIdx) => (
                      <div key={proIdx} className="flex items-center gap-2">
                        <Check size={16} className="text-green-600 shrink-0" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile & tablet: carousel of cards */}
      <div className="lg:hidden overflow-hidden -mx-2">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-2 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const cardWidth = el.offsetWidth - 24;
            const newIndex = Math.round(el.scrollLeft / cardWidth);
            if (newIndex >= 0 && newIndex < total) setIndex(newIndex);
          }}
        >
          {rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: eases.smoothStrong }}
              className="shrink-0 w-[90vw] max-w-[400px] snap-center rounded-2xl border-2 border-hugo-black/10 bg-white overflow-hidden shadow-md"
              style={{ scrollSnapAlign: "center" }}
            >
            <div className="bg-hugo-cream px-5 py-4">
              <h3 className="font-bold text-hugo-black text-base">{row.feature}</h3>
            </div>
            <div className="divide-y divide-hugo-black/5">
              <div className="flex items-start gap-3 px-5 py-4 bg-white">
                <X size={18} className="text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-hugo-black/50 uppercase tracking-wider mb-1">
                    Traditional BPO
                  </p>
                  <p className="text-sm text-hugo-black/70">{row.trad}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 px-5 py-4 bg-hugo-gold/5">
                <Check size={18} className="text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-hugo-black uppercase tracking-wider mb-1">
                    Gigmote
                  </p>
                  <div className="space-y-1">
                    {row.pros.map((pro, proIdx) => (
                      <p key={proIdx} className="text-sm font-medium text-hugo-black">
                        {pro}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
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
            {rows.map((_, i) => (
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
    </div>
  );
}
