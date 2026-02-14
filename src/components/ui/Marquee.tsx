"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  /** Direction: "left" (default) or "right" */
  direction?: "left" | "right";
  /** Speed in seconds for one full cycle (lower = faster) */
  duration?: number;
  /** Optional pause on hover */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Infinite horizontal marquee — like the clone's marq__row (scrolling client logos).
 */
export function Marquee({
  children,
  direction = "left",
  duration = 30,
  pauseOnHover = false,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden w-full ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
    >
      <motion.div
        className="flex w-max gap-16 md:gap-24 shrink-0"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </motion.div>
    </div>
  );
}
