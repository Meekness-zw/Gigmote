"use client";

import { motion } from "framer-motion";

interface AnimatedLogoProps {
  /** "spiral" | "text" | "both" — spiral draw, text reveal, or both */
  variant?: "spiral" | "text" | "both";
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Animated logo — spiral draw + text reveal (clone-style logo animation).
 */
export function AnimatedLogo({
  variant = "both",
  className = "",
  size = "md",
}: AnimatedLogoProps) {
  const sizeClass = size === "sm" ? "w-16 h-16" : size === "lg" ? "w-24 h-24" : "w-20 h-20";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl";

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      {(variant === "spiral" || variant === "both") && (
        <motion.svg
          viewBox="0 0 80 80"
          className={`${sizeClass} text-hugo-black`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
        >
          {/* Spiral / circular draw */}
          <motion.circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="220"
            strokeDashoffset="220"
            variants={{
              hidden: { strokeDashoffset: 220 },
              visible: {
                strokeDashoffset: 0,
                transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
              },
            }}
          />
          <motion.circle
            cx="40"
            cy="40"
            r="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="176"
            strokeDashoffset="176"
            variants={{
              hidden: { strokeDashoffset: 176 },
              visible: {
                strokeDashoffset: 0,
                transition: { duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] },
              },
            }}
          />
          <motion.circle
            cx="40"
            cy="40"
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="113"
            strokeDashoffset="113"
            variants={{
              hidden: { strokeDashoffset: 113 },
              visible: {
                strokeDashoffset: 0,
                transition: { duration: 0.5, delay: 0.35, ease: [0.19, 1, 0.22, 1] },
              },
            }}
          />
          {/* Center dot */}
          <motion.circle
            cx="40"
            cy="40"
            r="4"
            fill="currentColor"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.6 },
              },
            }}
          />
        </motion.svg>
      )}
      {(variant === "text" || variant === "both") && (
        <motion.span
          className={`font-bold tracking-tight select-none ${textSize} text-hugo-black/90`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.04,
                delayChildren: variant === "both" ? 0.3 : 0,
              },
            },
          }}
        >
          {"gigmote".split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.25, delay: 0.5, ease: [0.19, 1, 0.22, 1] },
              },
            }}
          >
            .
          </motion.span>
        </motion.span>
      )}
    </div>
  );
}
