"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface MaskSectionProps {
  children: React.ReactNode;
  className?: string;
  /** "slideUp" | "clipUp" | "slideFromLeft" */
  variant?: "slideUp" | "clipUp" | "slideFromLeft";
}

/**
 * Section that reveals on scroll — like the clone's MaskSections.
 * Uses clip-path or translate so content "reveals" as it enters view.
 */
export function MaskSection({
  children,
  className = "",
  variant = "slideUp",
}: MaskSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  if (variant === "clipUp") {
    return (
      <motion.section
        ref={ref}
        className={`overflow-hidden ${className}`}
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={
          isInView
            ? { clipPath: "inset(0 0 0% 0)" }
            : { clipPath: "inset(0 0 100% 0)" }
        }
        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      >
        {children}
      </motion.section>
    );
  }

  if (variant === "slideFromLeft") {
    return (
      <motion.section
        ref={ref}
        className={`overflow-hidden ${className}`}
        initial={{ opacity: 0, x: -80 }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
        }
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      >
        {children}
      </motion.section>
    );
  }

  // slideUp (default)
  return (
    <motion.section
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.section>
  );
}
