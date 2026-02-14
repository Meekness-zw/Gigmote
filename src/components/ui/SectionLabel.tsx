"use client";

import { UnderlineReveal } from "./UnderlineReveal";

interface SectionLabelProps {
  children: React.ReactNode;
  /** Clone-style: small caps, optional gold underline */
  className?: string;
  underlineClass?: string;
  /** "dark" for use on dark backgrounds (white/gold text) */
  variant?: "light" | "dark";
}

/**
 * Clone-style section label (e.g. "Outsourcing+", "What We Do") — small caps + animated underline.
 */
export function SectionLabel({
  children,
  className = "",
  underlineClass = "bg-hugo-gold",
  variant = "light",
}: SectionLabelProps) {
  const textClass = variant === "dark" ? "text-white/60" : "text-hugo-black/60";
  const defaultUnderline = variant === "dark" ? "bg-hugo-gold" : "bg-hugo-gold";
  return (
    <p
      className={`text-sm font-bold uppercase tracking-[0.2em] ${textClass} mb-4 ${className}`}
    >
      <UnderlineReveal underlineClass={underlineClass || defaultUnderline}>{children}</UnderlineReveal>
    </p>
  );
}
