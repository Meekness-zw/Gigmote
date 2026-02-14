"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";

interface ImageShowcaseSectionProps {
  title: string;
  subtitle?: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  /** "left" | "right" — which side the image is on */
  imageSide?: "left" | "right";
  /** Optional second image for a small stacked/card look */
  imageSrc2?: string;
  imageAlt2?: string;
  className?: string;
}

/**
 * Two-column section with large image + text — clone-style layout for more imagery.
 */
export function ImageShowcaseSection({
  title,
  subtitle,
  body,
  imageSrc,
  imageAlt,
  imageSide = "right",
  imageSrc2,
  imageAlt2,
  className = "",
}: ImageShowcaseSectionProps) {
  const isImageRight = imageSide === "right";

  return (
    <section className={`py-20 md:py-28 overflow-hidden ${className}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={isImageRight ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
            <FadeInOnScroll amount={0.2} y={24}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-hugo-black/5">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {imageSrc2 && imageAlt2 && (
                  <div className="absolute bottom-6 right-6 w-1/3 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <Image src={imageSrc2} alt={imageAlt2} fill className="object-cover" sizes="200px" />
                  </div>
                )}
              </div>
            </FadeInOnScroll>
          </div>
          <div className={isImageRight ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
            <FadeInOnScroll amount={0.2} y={24} delay={0.1}>
              {subtitle && (
                <p className="text-sm font-semibold uppercase tracking-widest text-hugo-gold mb-4">{subtitle}</p>
              )}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hugo-black mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-lg text-hugo-black/70 leading-relaxed">{body}</p>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
