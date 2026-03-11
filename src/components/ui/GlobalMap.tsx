"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const hubs = [
  { name: "South Africa", x: "55%", y: "78%", label: "Primary Talent Hub" },
  { name: "East Africa", x: "62%", y: "64%", label: "Tech & Ops Hub" },
  { name: "West Africa", x: "45%", y: "60%", label: "CX & Finance Hub" },
  { name: "North Africa", x: "52%", y: "42%", label: "MENA Operations" },
];

export function GlobalMap() {
  return (
    <div className="relative w-full h-[500px] bg-hugo-black/5 rounded-[3rem] overflow-hidden border border-hugo-black/10 flex items-center justify-center p-12">
      {/* Abstract Map Lines Background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1000 500" className="w-full h-full text-hugo-black">
          <path
            d="M100,250 Q250,150 400,250 T700,250 T900,150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-20"
          />
          <path
            d="M50,150 Q200,350 400,250 T700,350 T950,250"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-20"
          />
        </svg>
      </div>

      <div className="relative w-full max-w-4xl h-full">
        {hubs.map((hub, idx) => (
          <motion.div
            key={idx}
            className="absolute flex flex-col items-center group cursor-pointer"
            style={{ left: hub.x, top: hub.y }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
          >
            {/* Pulse Ring */}
            <motion.div
              className="absolute w-12 h-12 bg-hugo-gold/30 rounded-full"
              animate={{
                scale: [1, 2],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            {/* Main Pin */}
            <div className="relative z-10 w-4 h-4 bg-hugo-gold rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-300" />

            {/* Tooltip */}
            <motion.div
              className="absolute top-8 bg-white px-4 py-2 rounded-xl shadow-xl border border-hugo-black/5 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20 min-w-[140px] text-center"
            >
              <p className="text-xs font-bold text-hugo-gold uppercase tracking-widest mb-1">{hub.name}</p>
              <p className="text-sm font-semibold text-hugo-black">{hub.label}</p>
            </motion.div>
          </motion.div>
        ))}

        {/* Floating Labels / Narrative Elements */}
        <div className="absolute bottom-12 left-12 max-w-xs">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-hugo-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-hugo-black/40">African Talent Hubs</span>
            </div>
            <h3 className="text-2xl font-bold text-hugo-black leading-tight">
              Africa's best talent  serving UK & North American companies.
            </h3>
            <p className="text-sm text-hugo-black/60">
              High-performing professionals with strong English communication, western business alignment, and timezone coverage for the UK, US & Canada.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
