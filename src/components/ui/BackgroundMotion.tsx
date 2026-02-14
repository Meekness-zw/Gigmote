"use client";

import { motion } from "framer-motion";

type Variant = "light" | "dark" | "minimal";

interface BackgroundMotionProps {
  variant?: Variant;
  className?: string;
}

/**
 * Live background animations — orbs, particles, drifting grid, and light sweeps.
 */
export function BackgroundMotion({ variant = "light", className = "" }: BackgroundMotionProps) {
  const isDark = variant === "dark";
  const isMinimal = variant === "minimal";

  const orbColor = isDark ? "rgba(255, 215, 0, 0.08)" : "rgba(0, 0, 0, 0.04)";
  const orbColorAlt = isDark ? "rgba(255, 215, 0, 0.05)" : "rgba(0, 0, 0, 0.025)";
  const dotColor = isDark ? "rgba(255, 215, 0, 0.2)" : "rgba(0, 0, 0, 0.08)";

  // Floating particles (small circles) for extra life
  const particles = [
    { size: 4, left: "15%", top: "20%", delay: 0, dur: 8 },
    { size: 6, left: "80%", top: "30%", delay: 1, dur: 10 },
    { size: 3, left: "50%", top: "70%", delay: 2, dur: 12 },
    { size: 5, left: "25%", top: "60%", delay: 0.5, dur: 9 },
    { size: 4, left: "70%", top: "80%", delay: 3, dur: 11 },
    { size: 3, left: "90%", top: "15%", delay: 2.5, dur: 7 },
    { size: 5, left: "5%", top: "45%", delay: 1.5, dur: 14 },
    { size: 4, left: "60%", top: "50%", delay: 0.8, dur: 9 },
  ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* ─── Large floating orbs ───────────────────────────────────────────── */}
      {!isMinimal && (
        <>
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "min(85vw, 620px)",
              height: "min(85vw, 620px)",
              background: orbColor,
              top: "5%",
              left: "-25%",
            }}
            animate={{
              x: [0, 50, 20, 0],
              y: [0, -30, 10, 0],
              scale: [1, 1.08, 1.03, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "min(65vw, 450px)",
              height: "min(65vw, 450px)",
              background: orbColorAlt,
              bottom: "5%",
              right: "-15%",
            }}
            animate={{
              x: [0, -40, -10, 0],
              y: [0, 25, -15, 0],
              scale: [1, 1.12, 1.05, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "min(45vw, 320px)",
              height: "min(45vw, 320px)",
              background: orbColor,
              top: "45%",
              left: "48%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: ["-50%", "-45%", "-52%", "-50%"],
              y: ["-50%", "-55%", "-48%", "-50%"],
              scale: [1, 1.15, 1.05, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-2xl"
            style={{
              width: "min(35vw, 220px)",
              height: "min(35vw, 220px)",
              background: orbColorAlt,
              top: "75%",
              left: "20%",
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -25, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-2xl"
            style={{
              width: "min(30vw, 180px)",
              height: "min(30vw, 180px)",
              background: orbColor,
              top: "15%",
              right: "15%",
            }}
            animate={{
              x: [0, -20, 35, 0],
              y: [0, 25, -10, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </>
      )}

      {/* ─── Live dot grid — continuous drift ─────────────────────────────── */}
      <motion.div
        className="absolute"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
          backgroundSize: "20px 20px",
          width: "140%",
          height: "140%",
          top: "-20%",
          left: "-20%",
        }}
        animate={
          isMinimal
            ? { x: [0, 20, 0], y: [0, 20, 0] }
            : {
                x: [0, 20, 0],
                y: [0, 20, 0],
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ─── Floating particles ───────────────────────────────────────────── */}
      {!isMinimal &&
        particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              background: dotColor,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

      {/* ─── Light sweep (dark sections) ───────────────────────────────────── */}
      {isDark && (
        <>
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.06) 50%, transparent 100%)",
              width: "50%",
              left: "25%",
            }}
            animate={{ x: ["-100%", "150%"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.04) 50%, transparent 100%)",
              width: "40%",
              left: "30%",
            }}
            animate={{ x: ["100%", "-120%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />
        </>
      )}
    </div>
  );
}
