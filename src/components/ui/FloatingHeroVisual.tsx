"use client";

import { motion } from "framer-motion";

export interface FloatingHeroVisualProps {
  /** "default" = hero height 500px, "compact" = smaller for sections */
  size?: "default" | "compact";
  /** Optional custom class for the wrapper */
  className?: string;
}

/**
 * Editorial hero visual — no photos. Keeps the signature Gigmote motion
 * (rotating gold ring, sage ring, gold loop arc, pulsing accent, teal blob)
 * and replaces the two photo bubbles with abstract brand tiles:
 *   1. A black tile with the concentric Gigmote brand mark
 *   2. A cream tile with a kinetic stack of concept labels
 */
export function FloatingHeroVisual({
  size = "default",
  className = "",
}: FloatingHeroVisualProps) {
  const isCompact = size === "compact";
  const heightClass = isCompact ? "h-[380px]" : "h-[500px]";
  const ringSize = isCompact ? "w-[450px] h-[450px] border-[28px]" : "w-[600px] h-[600px] border-[40px]";
  const ringSize2 = isCompact ? "w-[300px] h-[300px] border-[20px]" : "w-[400px] h-[400px] border-[30px]";
  const tile1Size = isCompact ? "w-44 h-44" : "w-56 h-56";
  const tile2Size = isCompact ? "w-48 h-48" : "w-64 h-64";
  const tile1Pos = isCompact ? "top-0 right-4" : "top-0 right-10";
  const tile2Pos = isCompact ? "bottom-6 left-4" : "bottom-10 left-10";
  const accentSize = isCompact ? "w-16 h-16" : "w-24 h-24";
  const tealSize = isCompact ? "w-12 h-12" : "w-16 h-16";

  const concepts = [
    "AI Engineers",
    "AML / KYC Ops",
    "ML Ops",
    "Automation",
    "Data Scientists",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative ${heightClass} w-full hidden md:block ${className}`}
    >
      {/* Decorative rings  the signature animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className={`${ringSize} border-hugo-gold rounded-full absolute -right-20 -top-20`}
        />
        <div
          className={`${ringSize2} border-hugo-sage rounded-full absolute right-40 top-20`}
        />
      </div>

      <div className="relative z-10 h-full w-full">
        {/* Tile 1  Brand mark on black */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${tile1Pos} ${tile1Size} rounded-full bg-hugo-black border-4 border-hugo-cream shadow-xl flex items-center justify-center overflow-hidden`}
        >
          <BrandMark className={isCompact ? "w-20 h-20" : "w-28 h-28"} />
          <span className="absolute bottom-5 inset-x-0 text-center text-[10px] uppercase tracking-[0.25em] font-semibold text-white/50">
            gigmote
          </span>
        </motion.div>

        {/* Decorative loop arc */}
        <svg
          className={`absolute top-20 right-32 text-hugo-gold pointer-events-none z-0 ${isCompact ? "w-48 h-48" : "w-64 h-64"}`}
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>

        {/* Tile 2  Kinetic concept stack on cream */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute ${tile2Pos} ${tile2Size} rounded-full bg-hugo-cream-warm border-4 border-white shadow-2xl z-20 flex flex-col items-center justify-center px-6 overflow-hidden`}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-hugo-black/40 mb-3">
            We deploy
          </span>
          <KineticStack items={concepts} />
        </motion.div>

        {/* Pulsing gold accent */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-32 right-1/4 ${accentSize} rounded-full border-[6px] border-hugo-gold z-10`}
        />

        {/* Teal blob */}
        <div
          className={`absolute top-1/4 left-0 ${tealSize} rounded-full bg-hugo-teal/50 backdrop-blur-sm z-0`}
        />
      </div>
    </motion.div>
  );
}

/**
 * Concentric-circles brand mark — bigger version of the navbar logo.
 * Draws in on mount.
 */
function BrandMark({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 32 32"
      className={`text-hugo-gold ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
      }}
    >
      <motion.circle
        cx="16"
        cy="16"
        r="13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="82"
        variants={{
          hidden: { strokeDashoffset: 82 },
          visible: {
            strokeDashoffset: 0,
            transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
          },
        }}
      />
      <motion.circle
        cx="16"
        cy="16"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="44"
        variants={{
          hidden: { strokeDashoffset: 44 },
          visible: {
            strokeDashoffset: 0,
            transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
          },
        }}
      />
      <motion.circle
        cx="16"
        cy="16"
        r="2.5"
        fill="currentColor"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1, transition: { duration: 0.3 } },
        }}
      />
    </motion.svg>
  );
}

/**
 * Vertical typographic stack that cycles through concept labels.
 */
function KineticStack({ items }: { items: string[] }) {
  return (
    <div className="relative h-7 w-full overflow-hidden text-center">
      <motion.div
        animate={{ y: [0, ...items.map((_, i) => -(i + 1) * 28), 0] }}
        transition={{
          duration: items.length * 2.4,
          times: [0, ...items.map((_, i) => (i + 1) / (items.length + 1)), 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col"
      >
        {[...items, items[0]].map((item, i) => (
          <span
            key={i}
            className="h-7 flex items-center justify-center text-base font-semibold text-hugo-black tracking-tight"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
