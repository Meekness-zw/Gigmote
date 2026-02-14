"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface FloatingHeroVisualProps {
  /** First image (top-right on default layout) */
  image1?: string;
  /** Second image (bottom-left on default layout) */
  image2?: string;
  alt1?: string;
  alt2?: string;
  /** "default" = hero height 500px, "compact" = smaller for sections */
  size?: "default" | "compact";
  /** Optional custom class for the wrapper */
  className?: string;
}

const defaultImage1 = "/images/hero-1.png";
const defaultImage2 = "/images/hero-2.png";

export function FloatingHeroVisual({
  image1 = defaultImage1,
  image2 = defaultImage2,
  alt1 = "Professional team",
  alt2 = "Professional team",
  size = "default",
  className = "",
}: FloatingHeroVisualProps) {
  const isCompact = size === "compact";
  const heightClass = isCompact ? "h-[380px]" : "h-[500px]";
  const ringSize = isCompact ? "w-[450px] h-[450px] border-[28px]" : "w-[600px] h-[600px] border-[40px]";
  const ringSize2 = isCompact ? "w-[300px] h-[300px] border-[20px]" : "w-[400px] h-[400px] border-[30px]";
  const img1Size = isCompact ? "w-36 h-36" : "w-48 h-48";
  const img2Size = isCompact ? "w-40 h-40" : "w-56 h-56";
  const img1Pos = isCompact ? "top-0 right-4" : "top-0 right-10";
  const img2Pos = isCompact ? "bottom-6 left-4" : "bottom-10 left-10";
  const accentSize = isCompact ? "w-16 h-16" : "w-24 h-24";
  const tealSize = isCompact ? "w-12 h-12" : "w-16 h-16";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative ${heightClass} w-full hidden md:block ${className}`}
    >
      {/* Decorative circles background */}
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
        {/* Image 1 - top right, gentle float */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${img1Pos} ${img1Size} rounded-full border-4 border-hugo-cream overflow-hidden shadow-xl`}
        >
          <Image
            src={image1}
            alt={alt1}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Decorative loop connector */}
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

        {/* Image 2 - bottom left, offset float */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute ${img2Pos} ${img2Size} rounded-full border-4 border-hugo-cream overflow-hidden shadow-2xl z-20`}
        >
          <Image
            src={image2}
            alt={alt2}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Accent circles */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-32 right-1/4 ${accentSize} rounded-full border-[6px] border-hugo-gold z-10`}
        />
        <div
          className={`absolute top-1/4 left-0 ${tealSize} rounded-full bg-hugo-teal/50 backdrop-blur-sm z-0`}
        />
      </div>
    </motion.div>
  );
}
