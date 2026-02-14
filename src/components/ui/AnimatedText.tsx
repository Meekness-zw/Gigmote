"use client";

import { motion } from "framer-motion";
import { textReveal, textRevealWord, splitTextReveal, splitTextLetter, eases } from "@/utils/animations";

interface AnimatedTextProps {
  text: string;
  variant?: "words" | "letters";
  className?: string;
  delay?: number;
}

/**
 * Animated text reveal - words or letters animate in sequentially
 */
export function AnimatedText({ 
  text, 
  variant = "words", 
  className = "",
  delay = 0 
}: AnimatedTextProps) {
  const words = text.split(" ");
  
  if (variant === "letters") {
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={splitTextReveal}
        className={className}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={splitTextLetter}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={textReveal}
      className={className}
      transition={{ delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={textRevealWord}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
