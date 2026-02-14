"use client";

import { motion } from "framer-motion";

/** Single smiley SVG: circle face with eyes and smile */
function SmileySvg({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" className="fill-hugo-gold" />
      <ellipse cx="16" cy="20" rx="3" ry="4" className="fill-hugo-black" />
      <ellipse cx="32" cy="20" rx="3" ry="4" className="fill-hugo-black" />
      <path
        d="M14 30 Q24 38 34 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-hugo-black"
      />
    </svg>
  );
}

const EMOJIS = ["😊", "🙂", "😃", "✨", "👍"];

interface FloatingSmileysProps {
  /** "svg" = custom SVG faces, "emoji" = unicode emojis */
  variant?: "svg" | "emoji";
  /** Number of faces */
  count?: number;
  /** Max size in rem (tailwind: w-16 = 4rem) */
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Bobbing / floating smiley faces — clone-style footer & CTA decoration.
 */
export function FloatingSmileys({
  variant = "svg",
  count = 8,
  size = "md",
  className = "",
}: FloatingSmileysProps) {
  const sizeClass = size === "sm" ? "w-8 h-8 md:w-10 md:h-10" : size === "lg" ? "w-14 h-14 md:w-20 md:h-20" : "w-10 h-10 md:w-14 md:h-14";

  return (
    <div className={`flex flex-wrap justify-center items-center gap-4 md:gap-8 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2.5 + (i % 3) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
          className={`${sizeClass} flex items-center justify-center shrink-0`}
        >
          {variant === "emoji" ? (
            <span className="text-2xl md:text-4xl select-none" aria-hidden>
              {EMOJIS[i % EMOJIS.length]}
            </span>
          ) : (
            <SmileySvg className={`w-full h-full ${sizeClass}`} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
