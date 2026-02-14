"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/utils/animations";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { IllustrationTeam, IllustrationGlobal, IllustrationCoding } from "@/components/illustrations";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

const serviceIllustrations = {
  "bpo-matchmaking-advisory": IllustrationTeam,
  "global-staffing": IllustrationGlobal,
  "ai-business-solutions": IllustrationCoding,
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      <Hero
        variant="service"
        title="Services that blend global talent and AI."
        subtitle="What We Do"
        description="Traditional outsourcing focuses on cost. We focus on performance, reliability, and scalability — BPO advisory, global staffing, and AI solutions designed to scale you smarter."
      />

      <MaskSection variant="clipUp" className="py-24 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeInOnScroll className="mb-12">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-hugo-black mb-2">Three pillars for scale</h2>
            <p className="text-hugo-black/60 max-w-2xl">BPO advisory, global staffing, and AI solutions — all under one roof.</p>
          </FadeInOnScroll>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ResponsiveCarousel desktopCols={3} gap="gap-10">
            {siteContent.services.map((service) => (
                <motion.div
                  key={service.slug}
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-hugo-cream/60 rounded-3xl p-8 border-[0.2rem] border-hugo-black/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="flex justify-center mb-6 text-hugo-black/60">
                    {(() => {
                      const Illo = serviceIllustrations[service.slug as keyof typeof serviceIllustrations];
                      return Illo ? <Illo size="md" className="max-w-full" /> : null;
                    })()}
                  </div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-hugo-black/50 mb-2">
                    {service.slogan}
                  </p>
                  <h2 className="text-2xl font-bold text-hugo-black mb-3">
                    <AnimatedText text={service.title} variant="words" />
                  </h2>
                  <p className="text-sm text-hugo-black/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-hugo-black/75 flex items-start gap-2"
                      >
                        <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-hugo-gold" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.bestFor && (
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-hugo-black/60 mb-1 uppercase tracking-[0.18em]">
                        Best for
                      </p>
                      <p className="text-xs text-hugo-black/70">
                        {service.bestFor.join(" • ")}
                      </p>
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-hugo-black/10">
                    <div>
                      <p className="text-xs font-medium text-hugo-black/60">
                        Starting from
                      </p>
                      <p className="text-base font-semibold text-hugo-black">
                        {service.pricing}
                      </p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-sm font-medium text-hugo-black hover:text-hugo-gold transition-colors"
                    >
                      View details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </motion.div>
            ))}
            </ResponsiveCarousel>
          </motion.div>
        </div>
      </MaskSection>

      {/* Quick talent request — clone-style dark section */}
      <MaskSection variant="slideUp" className="py-20 md:py-24 bg-hugo-black text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeInOnScroll>
            <SectionLabel variant="dark">Get Started</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <AnimatedText text="Need talent or AI support fast?" variant="words" />
            </h2>
            <p className="text-white/70 mb-10">
              Submit a quick request and we&apos;ll map the right mix of global
              talent and automation for your team.
            </p>
          </FadeInOnScroll>
        </div>
      </MaskSection>

      <ContactForm />

      <Footer />
    </main>
  );
}

