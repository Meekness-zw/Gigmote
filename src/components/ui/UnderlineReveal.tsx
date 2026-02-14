"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface UnderlineRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Underline color (Tailwind class) */
  underlineClass?: string;
}

/**
 * Text with an underline that draws in on view — like the clone's has-underline / label.
 */
export function UnderlineReveal({
  children,
  className = "",
  underlineClass = "bg-hugo-gold",
}: UnderlineRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        className={`absolute left-0 -bottom-0.5 h-[2px] ${underlineClass}`}
        initial={{ width: 0 }}
        animate={{ width: isInView ? "100%" : 0 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      />
    </span>
  );
}
