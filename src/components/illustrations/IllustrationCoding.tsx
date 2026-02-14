"use client";

import { motion } from "framer-motion";

const ease = [0.19, 1, 0.22, 1];

interface IllustrationCodingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function IllustrationCoding({ className = "", size = "md" }: IllustrationCodingProps) {
  const s = size === "sm" ? "w-48 h-36" : size === "lg" ? "w-80 h-60" : "w-64 h-48";
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${s} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.06, delayChildren: 0.1 },
        },
      }}
    >
      <motion.path
        d="M50 200 L350 200 L340 250 L60 250 Z"
        variants={{
          hidden: { strokeDashoffset: 600 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.7, ease } },
        }}
        strokeDasharray={600}
      />
      <motion.path
        d="M70 80 L330 80 L340 195 L60 195 Z"
        variants={{
          hidden: { strokeDashoffset: 700 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.8, ease } },
        }}
        strokeDasharray={700}
      />
      <motion.path
        d="M85 95 L315 95 L315 180 L85 180 Z"
        strokeWidth={1.5}
        opacity={0.8}
        variants={{
          hidden: { strokeDashoffset: 500 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.6, ease } },
        }}
        strokeDasharray={500}
      />
      <motion.path
        d="M120 120 L100 140 L120 160"
        variants={{
          hidden: { strokeDashoffset: 80 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.4, ease } },
        }}
        strokeDasharray={80}
      />
      <motion.path
        d="M280 120 L300 140 L280 160"
        variants={{
          hidden: { strokeDashoffset: 80 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.4, ease } },
        }}
        strokeDasharray={80}
      />
      <motion.path
        d="M140 130 L260 130"
        variants={{
          hidden: { strokeDashoffset: 120 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.4, ease } },
        }}
        strokeDasharray={120}
      />
      <motion.path
        d="M140 145 L220 145"
        variants={{
          hidden: { strokeDashoffset: 80 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.4, ease } },
        }}
        strokeDasharray={80}
      />
      <motion.path
        d="M140 160 L240 160"
        variants={{
          hidden: { strokeDashoffset: 100 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.4, ease } },
        }}
        strokeDasharray={100}
      />
      <motion.circle
        cx="200"
        cy="245"
        r="12"
        variants={{
          hidden: { strokeDashoffset: 76 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={76}
      />
      <motion.path
        d="M200 258 L200 280 L185 295 L215 295 L200 280"
        variants={{
          hidden: { strokeDashoffset: 120 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={120}
      />
    </motion.svg>
  );
}
