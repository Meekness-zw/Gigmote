"use client";

import { ROICalculator } from "@/components/tools/ROICalculator";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function PricingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      {/* Visual Header */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex min-h-[60vh] bg-hugo-black text-white">
        <motion.div
          style={{ y: yTransform }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/Gigmote Asset 1.jpg"
            alt="Pricing and planning visuals"
            fill
            className="object-cover opacity-30 mix-blend-overlay grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hugo-black via-hugo-black/80 to-hugo-black/40"></div>
        </motion.div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center justify-center">
          <FadeInOnScroll>
            <SectionLabel variant="dark">Pricing Tiers</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
              <AnimatedText text="Simple plans. Massive scale." variant="words" />
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Clear pricing designed for ambitious teams. No hidden fees. No basic vibes. Just top-tier global staffing and AI solutions.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Pricing Cards Upgrade */}
      <MaskSection variant="slideUp" className="py-24 bg-hugo-cream relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* Global Staffing (Standard) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-2xl border border-hugo-black/5 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 group-hover:bg-hugo-black transition-colors duration-500"></div>

              <div className="mb-8">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-hugo-black/40 mb-3">
                  Core Capability
                </p>
                <h3 className="text-3xl font-bold text-hugo-black mb-4 tracking-tight">
                  Global Staffing
                </h3>
                <p className="text-sm text-hugo-black/70 leading-relaxed">
                  Reliable global talent directly integrated into your existing workflows. No freelancers.
                </p>
              </div>

              <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 items-center justify-center text-center">
                <span className="text-sm font-semibold text-hugo-black/50 uppercase tracking-widest block mb-2">
                  Starting at
                </span>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-hugo-black">$9</span>
                  <span className="text-lg font-medium text-hugo-black/60 pb-1">/hour</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Full-time vetted talent",
                  "Dedicated success manager",
                  "Performance monitoring",
                  "Hardware and IT compliance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-hugo-black/80 font-medium">
                    <Check size={18} className="mt-0.5 text-hugo-black/40 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AI Business Solutions (Premium/Recommended) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-hugo-black text-white rounded-[2.5rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-hugo-gold/20 flex flex-col relative overflow-hidden transform lg:-translate-y-8 z-10"
            >
              {/* Premium Glow and Texture */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-hugo-gold/15 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[url('/images/Gigmote%20Asset%201.jpg')] opacity-10 bg-cover mix-blend-overlay"></div>

              <div className="absolute top-4 left-0 w-full flex justify-center">
                <div className="px-4 py-1.5 bg-hugo-gold text-hugo-black text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="currentColor" /> Most Popular
                </div>
              </div>

              <div className="mb-8 relative z-10 pt-4">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-hugo-gold/80 mb-3 drop-shadow-sm">
                  Automation Tier
                </p>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                  AI Business Solutions
                </h3>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  Done-for-you AI agents and automations that plug into your existing tools — always with humans in the loop.
                </p>
              </div>

              <div className="mb-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 items-center justify-center text-center relative z-10">
                <span className="text-sm font-semibold text-white/50 uppercase tracking-widest block mb-2">
                  Starting at
                </span>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-hugo-gold">$3,000</span>
                  <span className="text-lg font-medium text-white/60 pb-1">/deploy</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                {[
                  "Strategy workshop to define high-impact use cases",
                  "Custom AI workflow and agent design",
                  "Secure integrations with your support and ops stack",
                  "Ongoing tuning, reporting, and human-in-the-loop QA"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                    <Check size={18} className="mt-0.5 text-hugo-gold shrink-0 drop-shadow-md" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* BPO Advisory (Enterprise) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-2xl border border-hugo-black/5 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 group-hover:bg-hugo-black transition-colors duration-500"></div>

              <div className="mb-8">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-hugo-black/40 mb-3">
                  Enterprise
                </p>
                <h3 className="text-3xl font-bold text-hugo-black mb-4 tracking-tight">
                  BPO Advisory
                </h3>
                <p className="text-sm text-hugo-black/70 leading-relaxed">
                  Design, select, and manage outsourcing partners for massive scale and proven compliance.
                </p>
              </div>

              <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 items-center justify-center text-center">
                <span className="text-sm font-semibold text-hugo-black/50 uppercase tracking-widest block mb-2">
                  Scope-Based
                </span>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-hugo-black">Custom</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Operating model design",
                  "Vendor selection & scoring",
                  "Performance governance",
                  "Risk & compliance audits",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-hugo-black/80 font-medium">
                    <Check size={18} className="mt-0.5 text-hugo-black/40 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </MaskSection>

      {/* Immersive ROI Calculator Section */}
      <section className="py-24 bg-white relative border-y border-hugo-black/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-hugo-cream rounded-[3rem] p-8 md:p-16 border border-hugo-black/5 shadow-xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/Gigmote%20Asset%204.jpg')] opacity-[0.03] bg-cover bg-center pointer-events-none"></div>

            <FadeInOnScroll className="text-center mb-16 relative z-10">
              <div className="inline-block px-4 py-1.5 bg-white rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-gray-200 shadow-sm">
                Direct Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-hugo-black mb-6 tracking-tight">
                Calculate your precise savings
              </h2>
              <p className="text-xl text-hugo-black/60 max-w-2xl mx-auto font-light">
                Model your current U.S. team costs against Gigmote's hybrid Global Staffing + AI model in real time.
              </p>
            </FadeInOnScroll>

            <div className="relative z-10 bg-white rounded-[2.5rem] p-6 md:p-10 shadow-lg border border-gray-100">
              <ROICalculator />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  );
}
