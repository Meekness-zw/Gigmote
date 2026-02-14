"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageReveal, blurReveal, scaleOnScroll } from "@/utils/animations";

interface RevealImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  variant?: "clip" | "blur" | "scale";
  priority?: boolean;
}

/**
 * Image with reveal animation on scroll
 */
export function RevealImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  variant = "clip",
  priority = false,
}: RevealImageProps) {
  const variants = {
    clip: imageReveal,
    blur: blurReveal,
    scale: scaleOnScroll,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[variant]}
      className={className}
    >
      {fill ? (
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
          priority={priority}
        />
      )}
    </motion.div>
  );
}
