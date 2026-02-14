"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Navbar logo with clone-style spiral draw animation on mount.
 */
export function AnimatedNavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-hugo-black group">
      {/* Spiral icon — draws in on mount */}
      <motion.svg
        viewBox="0 0 32 32"
        className="w-8 h-8 text-hugo-gold"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        <motion.circle
          cx="16"
          cy="16"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="75"
          strokeDashoffset="75"
          variants={{
            hidden: { strokeDashoffset: 75 },
            visible: {
              strokeDashoffset: 0,
              transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
            },
          }}
        />
        <motion.circle
          cx="16"
          cy="16"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="38"
          strokeDashoffset="38"
          variants={{
            hidden: { strokeDashoffset: 38 },
            visible: {
              strokeDashoffset: 0,
              transition: { duration: 0.35, delay: 0.15, ease: [0.19, 1, 0.22, 1] },
            },
          }}
        />
        <motion.circle
          cx="16"
          cy="16"
          r="2"
          fill="currentColor"
          variants={{
            hidden: { scale: 0 },
            visible: {
              scale: 1,
              transition: { duration: 0.2, delay: 0.35 },
            },
          }}
        />
      </motion.svg>
      {/* Text */}
      <motion.span
        className="text-xl font-bold tracking-tight group-hover:text-hugo-gold transition-colors duration-300"
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      >
        gigmote<span className="text-hugo-gold">.</span>
      </motion.span>
    </Link>
  );
}
