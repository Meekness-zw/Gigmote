"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingSmileys } from "./FloatingSmileys";

interface CTAPeopleCirclesProps {
  /** Left circle image (e.g. team member or decorative) */
  imageLeft?: string;
  /** Right circle image */
  imageRight?: string;
  altLeft?: string;
  altRight?: string;
  /** Show floating smileys above the circles */
  showSmileys?: boolean;
  className?: string;
}

/**
 * Two large circular visuals for CTA — clone-style modal-left / modal-right.
 * If no images provided, shows gradient circles with smileys.
 */
export function CTAPeopleCircles({
  imageLeft,
  imageRight,
  altLeft = "Team",
  altRight = "Team",
  showSmileys = true,
  className = "",
}: CTAPeopleCirclesProps) {
  return (
    <div className={`flex flex-col items-center gap-8 ${className}`}>
      {showSmileys && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FloatingSmileys variant="emoji" count={6} size="sm" />
        </motion.div>
      )}
      <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-hugo-gold/50 shadow-xl shrink-0"
        >
          {imageLeft ? (
            <Image src={imageLeft} alt={altLeft} fill className="object-cover" sizes="128px" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-hugo-gold/30 to-hugo-teal/30 flex items-center justify-center">
              <span className="text-4xl md:text-5xl" aria-hidden>😊</span>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-hugo-gold/50 shadow-xl shrink-0"
        >
          {imageRight ? (
            <Image src={imageRight} alt={altRight} fill className="object-cover" sizes="128px" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-hugo-teal/30 to-hugo-gold/30 flex items-center justify-center">
              <span className="text-4xl md:text-5xl" aria-hidden>🙂</span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
