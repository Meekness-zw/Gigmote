"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Offset for "amount" in view (0-1) */
  amount?: number;
  /** Delay in seconds */
  delay?: number;
  /** Y offset in px (positive = from below) */
  y?: number;
}

/**
 * Fade + slide up when in view — like the clone's js-fade.
 */
export function FadeInOnScroll({
  children,
  className = "",
  amount = 0.2,
  delay = 0,
  y = 24,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
