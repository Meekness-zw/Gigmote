"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogo } from "./AnimatedLogo";

const PAUSE_MS = 1500;
const REVEAL_DURATION_MS = 2200;
const BUFFER_MS = 300;
const TOTAL_MS = PAUSE_MS + REVEAL_DURATION_MS + BUFFER_MS;

/**
 * Page load reveal — full-screen overlay.
 * Initial load: logo + spiral. Page transitions: spiral only.
 * Total duration: 4 seconds.
 */
export function PageLoadReveal() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [startReveal, setStartReveal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset and show loader on every route change
  useEffect(() => {
    if (!mounted || !pathname) return;
    setIsVisible(true);
    setStartReveal(false);
  }, [pathname, mounted]);

  useEffect(() => {
    if (!mounted) return;

    // Lock body scroll during loader
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const startTimer = setTimeout(() => setStartReveal(true), PAUSE_MS);
    const endTimer = setTimeout(() => {
      setIsVisible(false);
      isInitialLoad.current = false;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }, TOTAL_MS);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mounted, pathname]);

  // Prevent flash: render nothing until mounted, but that would cause flash. Instead,
  // render immediately so SSR sends the overlay (avoids FOUC)
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div
          className="fixed inset-0 z-[99999] min-h-screen min-w-full overflow-hidden"
          style={{ pointerEvents: isVisible ? "auto" : "none" }}
          aria-hidden
          aria-busy={isVisible}
        >
          {/* Bottom: white/cream — reveals page when it clips up */}
          <motion.div
            className="absolute inset-0 bg-hugo-cream"
            initial={{ clipPath: "inset(0 0 0 0)" }}
            animate={
              startReveal ? { clipPath: "inset(0 0 100% 0)" } : { clipPath: "inset(0 0 0 0)" }
            }
            transition={{
              duration: REVEAL_DURATION_MS / 1000,
              ease: [0.19, 1, 0.22, 1],
              delay: 0.1,
            }}
          />
          {/* Top: gold — what user sees, clips up first */}
          <motion.div
            className="absolute inset-0 bg-hugo-gold flex items-center justify-center"
            initial={{ clipPath: "inset(0 0 0 0)" }}
            animate={
              startReveal ? { clipPath: "inset(0 0 100% 0)" } : { clipPath: "inset(0 0 0 0)" }
            }
            transition={{
              duration: REVEAL_DURATION_MS / 1000,
              ease: [0.19, 1, 0.22, 1],
              delay: 0,
            }}
          >
            <AnimatedLogo
              key={pathname || "initial"}
              variant={isInitialLoad.current ? "both" : "spiral"}
              size="lg"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
