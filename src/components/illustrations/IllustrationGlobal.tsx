"use client";

import { motion } from "framer-motion";

const ease = [0.19, 1, 0.22, 1] as const;

interface IllustrationGlobalProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function IllustrationGlobal({ className = "", size = "md" }: IllustrationGlobalProps) {
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
          transition: { staggerChildren: 0.05, delayChildren: 0.05 },
        },
      }}
    >
      <motion.ellipse
        cx="200"
        cy="150"
        rx="90"
        ry="70"
        variants={{
          hidden: { strokeDashoffset: 505 },
          visible: { strokeDashoffset: 0, transition: { duration: 1, ease } },
        }}
        strokeDasharray={505}
      />
      <motion.path
        d="M200 80 L200 220"
        variants={{
          hidden: { strokeDashoffset: 140 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={140}
      />
      <motion.ellipse
        cx="200"
        cy="150"
        rx="90"
        ry="25"
        opacity={0.9}
        variants={{
          hidden: { strokeDashoffset: 365 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.8, ease } },
        }}
        strokeDasharray={365}
      />
      <motion.path
        d="M110 115 Q200 95 290 115"
        strokeWidth={1.5}
        variants={{
          hidden: { strokeDashoffset: 195 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.6, ease } },
        }}
        strokeDasharray={195}
      />
      <motion.path
        d="M110 185 Q200 205 290 185"
        strokeWidth={1.5}
        variants={{
          hidden: { strokeDashoffset: 195 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.6, ease } },
        }}
        strokeDasharray={195}
      />
      <motion.path
        d="M120 100 L120 75"
        variants={{
          hidden: { strokeDashoffset: 50 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.35, ease } },
        }}
        strokeDasharray={50}
      />
      <motion.path
        d="M120 65 L120 55"
        variants={{
          hidden: { strokeDashoffset: 10 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.2, ease } },
        }}
        strokeDasharray={10}
      />
      <motion.path
        d="M280 100 L280 75"
        variants={{
          hidden: { strokeDashoffset: 50 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.35, ease } },
        }}
        strokeDasharray={50}
      />
      <motion.path
        d="M280 65 L280 55"
        variants={{
          hidden: { strokeDashoffset: 10 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.2, ease } },
        }}
        strokeDasharray={10}
      />
      <motion.path
        d="M200 200 L200 175"
        variants={{
          hidden: { strokeDashoffset: 50 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.35, ease } },
        }}
        strokeDasharray={50}
      />
      <motion.path
        d="M200 165 L200 155"
        variants={{
          hidden: { strokeDashoffset: 10 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.2, ease } },
        }}
        strokeDasharray={10}
      />
      <motion.circle
        cx="200"
        cy="150"
        r="5"
        fill="currentColor"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease } },
        }}
      />
    </motion.svg>
  );
}
