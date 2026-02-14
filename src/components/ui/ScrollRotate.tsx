"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRotateProps {
  children: React.ReactNode;
  className?: string;
  /** Max rotation in degrees (e.g. 7 like the clone's data-rotate="7") */
  maxDegrees?: number;
}

/**
 * Element that rotates slightly based on scroll position — like the clone's js-s-rotate.
 */
export function ScrollRotate({
  children,
  className = "",
  maxDegrees = 7,
}: ScrollRotateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, maxDegrees * 0.5, maxDegrees, maxDegrees * 0.5, 0]
  );

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  );
}
