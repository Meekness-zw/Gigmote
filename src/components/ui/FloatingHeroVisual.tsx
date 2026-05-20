"use client";

import { motion } from "framer-motion";

export interface FloatingHeroVisualProps {
  size?: "default" | "compact";
  className?: string;
}

/**
 * Hero right-side composition — editorial collage.
 *
 * Mixes a few tilted "tiles" (stat, operator card, quote) with hand-drawn
 * arrows, scattered stickers, and decorative marks. Reads like a magazine
 * mood board — premium but human, business-relevant but creative. Speaks to
 * AI × Technology × Human Capital through *content*, not literal imagery.
 */
export function FloatingHeroVisual({
  size = "default",
  className = "",
}: FloatingHeroVisualProps) {
  const isCompact = size === "compact";
  const heightClass = isCompact ? "h-[460px]" : "h-[560px]";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative ${heightClass} w-full hidden md:block ${className}`}
    >
      {/* Soft background ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 -top-32 w-[560px] h-[560px] border-[36px] border-hugo-gold/10 rounded-full"
        />
        <div className="absolute right-44 top-24 w-[320px] h-[320px] border-[22px] border-hugo-sage/25 rounded-full" />
        <div className="absolute top-1/3 -left-4 w-24 h-24 rounded-full bg-hugo-teal/30 blur-2xl" />
        <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-hugo-gold/20 blur-3xl" />
      </div>

      {/* Decorative scattered marks */}
      <Asterisk className="top-[6%] left-[28%] text-hugo-gold/60" delay={0.7} />
      <Asterisk className="top-[40%] right-[6%] text-hugo-black/30" delay={1.1} size={12} />
      <Asterisk className="bottom-[12%] left-[20%] text-hugo-gold" delay={1.4} size={18} />
      <Dash className="top-[34%] left-[6%]" delay={0.9} />
      <Dash className="bottom-[28%] right-[40%]" delay={1.3} />

      {/* Hand-drawn arrow from stat to operator */}
      <SquigglyArrow />

      {/* === The tiles === */}

      {/* 1. Big stat tile — top-left, dark, the anchor */}
      <Tile
        className="top-[6%] left-[6%] w-[208px] bg-hugo-black"
        rotate={-2.5}
        delay={0.15}
        floatY={[0, -6, 0]}
        floatDuration={7}
      >
        <div className="px-5 py-4">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1 h-1 rounded-full bg-hugo-gold" />
            <span className="text-[9px] uppercase tracking-[0.24em] font-semibold text-hugo-gold/80">
              Q1 outcome
            </span>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-hugo-gold tracking-tight leading-none tabular-nums">
            +247%
          </div>
          <div className="mt-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-white/70">
            Throughput gain
          </div>
        </div>
      </Tile>

      {/* 2. Operator card — middle */}
      <Tile
        className="top-[42%] right-[16%] w-[200px] bg-white"
        rotate={3.2}
        delay={0.45}
        floatY={[0, 6, 0]}
        floatDuration={8}
      >
        <div className="px-4 py-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hugo-gold to-hugo-orange flex items-center justify-center text-xs font-bold text-hugo-black shadow-inner shrink-0">
            ME
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-hugo-black tracking-tight leading-tight">
              Maya E.
            </div>
            <div className="text-[10px] text-hugo-black/55 leading-tight mt-0.5">
              Senior ML Engineer
            </div>
            <div className="flex items-center gap-1 mt-1.5">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 rounded-full bg-green-500"
              />
              <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-hugo-black/60">
                Deployed · day 14
              </span>
            </div>
          </div>
        </div>
      </Tile>

      {/* 3. Quote tile — bottom right */}
      <Tile
        className="bottom-[6%] right-[8%] w-[220px] bg-hugo-cream-warm border-hugo-black/8"
        rotate={2.4}
        delay={0.75}
        floatY={[0, -5, 0]}
        floatDuration={9}
      >
        <div className="px-4 py-4">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-hugo-black/35 mb-1.5">
            Client note
          </div>
          <div className="text-[13px] font-semibold text-hugo-black leading-snug tracking-tight">
            "Live in 9 days. Picked up our domain quirks by week 2."
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-hugo-black flex items-center justify-center text-[7px] font-bold text-hugo-gold">
              VP
            </div>
            <span className="text-[10px] text-hugo-black/55 font-medium">
              VP Eng · Series-B FinTech
            </span>
          </div>
        </div>
      </Tile>

      {/* === Stickers === */}
      <Sticker
        className="top-[12%] right-[8%]"
        rotate={-8}
        delay={0.95}
        variant="gold"
      >
        ★ Pilot live
      </Sticker>
      <Sticker
        className="top-[68%] left-[14%]"
        rotate={-6}
        delay={1.15}
        variant="black"
      >
        ↗ AI ready
      </Sticker>
      <Sticker
        className="top-[32%] left-[38%]"
        rotate={4}
        delay={1.35}
        variant="cream"
      >
        ML Ops
      </Sticker>
      <Sticker
        className="bottom-[22%] left-[6%]"
        rotate={-4}
        delay={1.55}
        variant="cream"
      >
        AML / KYC
      </Sticker>
    </motion.div>
  );
}

// -------------------------------------------------------------------- //

interface TileProps {
  children: React.ReactNode;
  className?: string;
  rotate: number;
  delay: number;
  floatY: number[];
  floatDuration: number;
}

function Tile({
  children,
  className = "",
  rotate,
  delay,
  floatY,
  floatDuration,
}: TileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotate - 4 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-20 rounded-2xl shadow-[0_18px_40px_-20px_rgba(26,26,26,0.35)] border border-black/5 overflow-hidden ${className}`}
    >
      <motion.div
        animate={{ y: floatY }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

interface StickerProps {
  children: React.ReactNode;
  className?: string;
  rotate: number;
  delay: number;
  variant: "gold" | "black" | "cream";
}

function Sticker({
  children,
  className = "",
  rotate,
  delay,
  variant,
}: StickerProps) {
  const styles = {
    gold: "bg-hugo-gold text-hugo-black border-hugo-black/10",
    black: "bg-hugo-black text-hugo-gold border-hugo-black",
    cream: "bg-hugo-cream-warm text-hugo-black border-hugo-black/10",
  }[variant];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: rotate - 8 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 0.45, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className={`absolute z-30 inline-flex items-center px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-[0.12em] shadow-[0_8px_20px_-10px_rgba(26,26,26,0.3)] ${styles} ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Asterisk({
  className = "",
  delay = 0,
  size = 14,
}: {
  className?: string;
  delay?: number;
  size?: number;
}) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      className={`absolute z-10 ${className}`}
    >
      <motion.path
        d="M7 1V13 M1.5 3.5L12.5 10.5 M12.5 3.5L1.5 10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "7px 7px" }}
      />
    </motion.svg>
  );
}

function Dash({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`absolute z-10 h-0.5 w-10 bg-hugo-black/25 origin-left ${className}`}
    />
  );
}

/**
 * Hand-drawn sketchy arrow connecting the stat tile to the operator card —
 * suggests "the people behind the metric". Draws itself in on mount.
 */
function SquigglyArrow() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.7, duration: 0.3 }}
      className="absolute top-[24%] left-[40%] w-32 h-24 z-10 text-hugo-black/40 pointer-events-none"
      viewBox="0 0 100 80"
      fill="none"
    >
      <motion.path
        d="M5 10 Q 20 30 35 35 Q 55 42 80 60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
      />
      {/* Arrow head */}
      <motion.path
        d="M73 56 L80 60 L77 67"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.5 }}
      />
    </motion.svg>
  );
}
