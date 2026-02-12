"use client";

import { motion } from "framer-motion";

interface StatTickerProps {
    items: { label: string; value: string }[];
    direction?: "left" | "right";
    speed?: number;
}

export const StatTicker = ({ items, direction = "left", speed = 20 }: StatTickerProps) => {
    return (
        <div className="w-full overflow-hidden bg-hugo-black/5 py-4 border-y border-hugo-black/10">
            <div className="flex">
                <motion.div
                    className="flex flex-shrink-0 gap-16 px-8"
                    initial={{ x: direction === "left" ? 0 : "-50%" }}
                    animate={{ x: direction === "left" ? "-50%" : 0 }}
                    transition={{
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...items, ...items, ...items, ...items].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-hugo-gold">{item.value}</span>
                            <span className="text-sm font-medium text-hugo-black/80 uppercase tracking-wide">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
