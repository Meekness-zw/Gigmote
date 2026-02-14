"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface StrokeRevealProps {
  children: React.ReactNode;
  className?: string;
  /** "scroll" = reveal as user scrolls, "view" = reveal when in view once */
  trigger?: "scroll" | "view";
}

/**
 * Wraps content (e.g. SVG) and reveals it via stroke / clip — like the clone's js-s-stroke.
 * Use with overflow-hidden parent and an SVG that has stroke (path).
 */
export function StrokeReveal({
  children,
  className = "",
  trigger = "view",
}: StrokeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(
    scrollYProgress,
    trigger === "scroll" ? [0.2, 0.5, 0.8] : [0, 0],
    trigger === "scroll" ? [0, 1, 1] : [0, 1]
  );

  const pathLengthView = isInView ? 1 : 0;

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={trigger === "view" ? { clipPath: "inset(0 100% 0 0)" } : undefined}
        animate={trigger === "view" ? { clipPath: isInView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" } : undefined}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        style={trigger === "scroll" ? undefined : {}}
      >
        {children}
      </motion.div>
    </div>
  );
}
