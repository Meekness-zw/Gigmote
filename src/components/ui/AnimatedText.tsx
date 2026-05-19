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
            {char === " " ? " " : char}
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
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            variants={textRevealWord}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {isLast ? word : `${word} `}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
