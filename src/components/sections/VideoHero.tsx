"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { AnimatedText } from "../ui/AnimatedText";
import { eases } from "@/utils/animations";

/**
 * Light, blended video hero. The animation sits behind the content and melts
 * into the cream page via gradient masks at the top and bottom — so it reads
 * as part of the site, not a hard video band. Dark text on cream up top keeps
 * the headline crisp; the video richness shows through lower down.
 */
export function VideoHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Slow the loop down a touch for a calmer, more premium feel.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const setRate = () => {
      video.playbackRate = 0.6;
    };
    setRate();
    video.addEventListener("loadedmetadata", setRate);
    return () => video.removeEventListener("loadedmetadata", setRate);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: video eases up as you scroll, headline drifts + fades.
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] w-full overflow-hidden bg-hugo-cream"
    >
      {/* Background video, seated low and blended into the cream */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="pointer-events-none absolute inset-x-0 top-[16vh] z-0 h-[110vh]"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Blend the video edges into the cream base */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #F9F9F5 0%, rgba(249,249,245,0.6) 12%, rgba(249,249,245,0) 30%, rgba(249,249,245,0) 60%, rgba(249,249,245,0.7) 88%, #F9F9F5 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(249,249,245,0.5) 0%, rgba(249,249,245,0) 18%, rgba(249,249,245,0) 82%, rgba(249,249,245,0.5) 100%)",
          }}
        />
      </motion.div>

      {/* Legibility halo behind the content — keeps dark text + buttons crisp
          over the video's clear midsection without hiding the animation. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[95vh]"
        style={{
          background:
            "radial-gradient(85% 60% at 50% 38%, rgba(249,249,245,0.92) 0%, rgba(249,249,245,0.5) 50%, rgba(249,249,245,0) 78%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-40 text-center md:pt-48"
      >
        <h1 className="font-serif text-[2.5rem] font-normal leading-[1.02] tracking-tight text-hugo-black sm:text-5xl md:text-6xl lg:text-7xl">
          <AnimatedText
            text="Source the minds building the future."
            variant="words"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: eases.smooth }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-hugo-black/65 md:text-lg"
        >
          Gigmote places elite AI and technical talent — then deploys the
          automation systems that compound their impact. Precision, trust, and
          operational excellence, on a global scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: eases.smoothStrong }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/services">
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-hugo-black/45">
        <span className="text-[10px] font-semibold uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-hugo-black/25 p-1"
        >
          <div className="mx-auto h-1.5 w-1 rounded-full bg-hugo-black/35" />
        </motion.div>
      </div>
    </section>
  );
}
