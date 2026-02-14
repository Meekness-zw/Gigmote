"use client";

import { motion } from "framer-motion";

const ease = [0.19, 1, 0.22, 1];

interface IllustrationTeamProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function IllustrationTeam({ className = "", size = "md" }: IllustrationTeamProps) {
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
          transition: { staggerChildren: 0.04, delayChildren: 0.05 },
        },
      }}
    >
      <motion.path
        d="M200 150 L200 120"
        variants={{
          hidden: { strokeDashoffset: 30 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.3, ease } },
        }}
        strokeDasharray={30}
      />
      <motion.path
        d="M200 120 L120 80"
        variants={{
          hidden: { strokeDashoffset: 95 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={95}
      />
      <motion.path
        d="M200 120 L280 80"
        variants={{
          hidden: { strokeDashoffset: 95 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={95}
      />
      <motion.path
        d="M200 150 L100 200"
        variants={{
          hidden: { strokeDashoffset: 110 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={110}
      />
      <motion.path
        d="M200 150 L300 200"
        variants={{
          hidden: { strokeDashoffset: 110 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={110}
      />
      <motion.circle
        cx="200"
        cy="150"
        r="25"
        variants={{
          hidden: { strokeDashoffset: 157 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.6, ease } },
        }}
        strokeDasharray={157}
      />
      <motion.path
        d="M185 175 L215 175"
        variants={{
          hidden: { strokeDashoffset: 30 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.3, ease } },
        }}
        strokeDasharray={30}
      />
      <motion.circle
        cx="120"
        cy="80"
        r="20"
        variants={{
          hidden: { strokeDashoffset: 126 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={126}
      />
      <motion.path
        d="M108 100 L132 100"
        variants={{
          hidden: { strokeDashoffset: 24 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.3, ease } },
        }}
        strokeDasharray={24}
      />
      <motion.circle
        cx="280"
        cy="80"
        r="20"
        variants={{
          hidden: { strokeDashoffset: 126 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={126}
      />
      <motion.path
        d="M268 100 L292 100"
        variants={{
          hidden: { strokeDashoffset: 24 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.3, ease } },
        }}
        strokeDasharray={24}
      />
      <motion.circle
        cx="100"
        cy="200"
        r="22"
        variants={{
          hidden: { strokeDashoffset: 138 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={138}
      />
      <motion.path
        d="M86 222 L114 222"
        variants={{
          hidden: { strokeDashoffset: 28 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.3, ease } },
        }}
        strokeDasharray={28}
      />
      <motion.circle
        cx="300"
        cy="200"
        r="22"
        variants={{
          hidden: { strokeDashoffset: 138 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease } },
        }}
        strokeDasharray={138}
      />
      <motion.path
        d="M286 222 L314 222"
        variants={{
          hidden: { strokeDashoffset: 28 },
          visible: { strokeDashoffset: 0, transition: { duration: 0.3, ease } },
        }}
        strokeDasharray={28}
      />
    </motion.svg>
  );
}
