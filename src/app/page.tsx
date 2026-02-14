"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ROICalculator } from "@/components/tools/ROICalculator";
import { fadeInUp, staggerContainer, scaleIn, eases } from "@/utils/animations";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { MaskSection } from "@/components/ui/MaskSection";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollRotate } from "@/components/ui/ScrollRotate";
import { Marquee } from "@/components/ui/Marquee";
import { UnderlineReveal } from "@/components/ui/UnderlineReveal";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { StepsAccordion } from "@/components/ui/StepsAccordion";
import { StrokeReveal } from "@/components/ui/StrokeReveal";
import { FloatingSmileys } from "@/components/ui/FloatingSmileys";
import { CTAPeopleCircles } from "@/components/ui/CTAPeopleCircles";
import { ImageShowcaseSection } from "@/components/sections/ImageShowcaseSection";
import { MiniImageCarousel } from "@/components/ui/MiniImageCarousel";
import { ImageGalleryStrip } from "@/components/ui/ImageGalleryStrip";
import { IllustrationCoding, IllustrationTeam, IllustrationGlobal } from "@/components/illustrations";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      <Hero variant="home" />

      {/* Trust Bar — marquee + underline label */}
      <section className="py-10 border-b border-hugo-black/5 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-hugo-black/40 mb-6">
            <UnderlineReveal underlineClass="bg-hugo-gold">{siteContent.hero.trustBar}</UnderlineReveal>
          </p>
          <Marquee duration={25} className="flex justify-center">
            {['FinTech', 'Healthcare', 'SaaS', 'IT & Web3', 'Marketing', 'Sales Enablement'].map((logo) => (
              <span key={logo} className="text-xl font-bold text-hugo-black/40 shrink-0 px-8 md:px-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {logo}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Featured / Mini carousel — clone-style image + caption */}
      <section className="py-12 md:py-16 bg-hugo-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <MiniImageCarousel
            interval={5000}
            slides={[
              {
                imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
                imageAlt: "Team collaboration and planning",
                title: "Built for performance",
                description: "We focus on outcomes, not just headcount. Real teams, real metrics.",
              },
              {
                imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
                imageAlt: "Global team working together",
                title: "Scale without the guesswork",
                description: "Vetted talent and proven playbooks so you launch faster.",
              },
              {
                imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
                imageAlt: "Strategy and operations",
                title: "From strategy to delivery",
                description: "BPO matchmaking, staffing, and AI solutions under one roof.",
              },
            ]}
          />
        </div>
      </section>

      {/* Value Proposition — mask reveal like clone */}
      <MaskSection variant="clipUp" className="relative py-24">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: eases.expo }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <StrokeReveal trigger="view" className="inline-block mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-hugo-gold/20 text-hugo-black text-sm font-bold border border-hugo-gold/30">
                Built By Operators — Not Recruiters
              </span>
            </StrokeReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-hugo-black mb-6 leading-tight">
              <AnimatedText text="We focus on performance, compliance, and long-term success." variant="words" />
            </h2>
            <p className="text-xl text-hugo-black/60">
              We’ve built, scaled, and managed real global teams. That means we focus on performance, compliance, and long-term success — not quick placements.
            </p>
          </motion.div>

          {/* Bulleted value list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: eases.smooth }}
            className="max-w-3xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
          >
            {[
              "Full-time vetted global talent",
              "AI-powered workflow automation",
              "BPO partner matchmaking",
              "Metrics-driven onboarding and oversight",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="mt-1 text-hugo-teal" size={18} />
                <span className="text-hugo-black/80 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <ResponsiveCarousel desktopCols={4} gap="gap-8">
              {siteContent.valueProps.map((prop, idx) => {
                const Icon = prop.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-white p-8 rounded-3xl shadow-lg border-[0.2rem] border-hugo-black/10 hover:shadow-xl transition-shadow duration-300 h-full"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1, type: "spring", stiffness: 200 }}
                      className="w-14 h-14 bg-hugo-cream rounded-2xl flex items-center justify-center mb-6 text-hugo-black"
                    >
                      <Icon size={28} />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3">{prop.title}</h3>
                    <p className="text-hugo-black/60 text-sm leading-relaxed">{prop.description}</p>
                  </motion.div>
                );
              })}
            </ResponsiveCarousel>
          </motion.div>

          {/* Animated illustrations — carousel on mobile, strip on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 pt-12 border-t border-hugo-black/10 text-hugo-black/50"
          >
            <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-8 pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="shrink-0 w-[75vw] max-w-[280px] snap-center flex justify-center">
                <IllustrationTeam size="md" className="text-hugo-gold/70" />
              </div>
              <div className="shrink-0 w-[75vw] max-w-[280px] snap-center flex justify-center">
                <IllustrationGlobal size="md" className="text-hugo-teal/70" />
              </div>
              <div className="shrink-0 w-[75vw] max-w-[280px] snap-center flex justify-center">
                <IllustrationCoding size="md" className="text-hugo-black/50" />
              </div>
            </div>
            <div className="hidden md:flex flex-wrap justify-center gap-12 lg:gap-20">
              <IllustrationTeam size="md" className="text-hugo-gold/70" />
              <IllustrationGlobal size="md" className="text-hugo-teal/70" />
              <IllustrationCoding size="md" className="text-hugo-black/50" />
            </div>
          </motion.div>
        </div>
      </MaskSection>

      {/* Two-column image showcase — more imagery, clone-style layout */}
      <ImageShowcaseSection
        imageSide="right"
        title="Real teams. Real results."
        subtitle="Why clients choose us"
        body="We’ve built and managed global teams across customer support, operations, and AI. Every engagement is designed around your KPIs—with full visibility, compliance, and long-term retention in mind."
        imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
        imageAlt="Team working together on delivery and operations"
        imageSrc2="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
        imageAlt2="Professional team member"
      />

      {/* 3 Pillars / What We Do */}
      <section className="py-24 bg-hugo-black text-white relative overflow-hidden">
        <BackgroundMotion variant="dark" />
        {/* Decorative BG — scroll-linked rotation like clone */}
        <ScrollRotate maxDegrees={7} className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/2 -translate-y-1/2 origin-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-white/5 rounded-full blur-3xl"
          />
        </ScrollRotate>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold max-w-2xl">
              <AnimatedText text="What we do to" variant="words" />{" "}
              <span className="text-hugo-gold">
                <AnimatedText text="scale you smarter." variant="words" delay={0.15} />
              </span>
            </h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/services">
                <Button variant="secondary" className="shrink-0">
                  View Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <ResponsiveCarousel desktopCols={3} gap="gap-8">
              {siteContent.services.map((service, idx) => (
                <Link key={idx} href={`/services/${service.slug}`} className="group block h-full">
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/10 hover:bg-white/15 p-10 rounded-[2.5rem] border border-white/10 transition-all duration-300 h-full flex flex-col min-h-[320px]"
                  >
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      {service.title}
                      <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-hugo-gold" />
                    </h3>
                    <p className="text-white/60 mb-8 flex-1 text-lg">
                      {service.description}
                    </p>
                    <div className="w-full h-48 bg-black/20 rounded-2xl relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-6xl">
                        0{idx + 1}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </ResponsiveCarousel>
          </motion.div>
        </div>
      </section>

      {/* Image gallery strip — more images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeInOnScroll amount={0.2} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hugo-black mb-4">See how we work</h2>
            <p className="text-lg text-hugo-black/60">Global teams, local quality.</p>
          </FadeInOnScroll>
          <ImageGalleryStrip
            images={[
              { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80", alt: "Business meeting and strategy", caption: "Collaboration" },
              { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80", alt: "Customer support professional", caption: "Support" },
              { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", alt: "Modern workspace and operations", caption: "Delivery" },
            ]}
          />
        </div>
      </section>

      {/* Why Choose Gigmote — responsive table / cards */}
      <MaskSection variant="slideUp" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
              <AnimatedText text="Why companies choose Gigmote" variant="words" />
            </h2>
            <p className="text-base md:text-lg text-hugo-black/60 max-w-2xl mx-auto px-2">
              {siteContent.coreValue}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ComparisonTable
              rows={[
                { feature: "Model", trad: "Built by recruiters", pros: ["Built by operators"] },
                { feature: "Delivery", trad: "Human-only, manual workflows", pros: ["Human + AI delivery model"] },
                { feature: "Oversight", trad: "Minimal oversight and reporting", pros: ["Managed integration and KPI visibility"] },
                { feature: "Quality", trad: "Cost-first, quality-second", pros: ["Quality, compliance, and performance first"] },
                { feature: "Talent", trad: "Short-term, transactional", pros: ["Global talent with long-term retention focus"] },
                { feature: "Pricing", trad: "Opaque and unpredictable", pros: ["Transparent pricing aligned to outcomes"] },
              ]}
            />
          </motion.div>
        </div>
      </MaskSection>

      {/* How it works — StepsAccordion */}
      <section className="py-24 bg-hugo-cream">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeInOnScroll amount={0.2} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-hugo-black mb-4">
              <AnimatedText text="How we work with you" variant="words" />
            </h2>
            <p className="text-lg text-hugo-black/60">
              From discovery to delivery, we keep the process clear and outcome-focused.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll amount={0.2} delay={0.1}>
            <StepsAccordion
              steps={[
                { title: "Discovery & scope", content: "We align on your goals, team structure, and KPIs. You get a clear scope and timeline—no surprises." },
                { title: "Talent or partner match", content: "We source vetted global talent or recommend BPO partners that fit your culture and performance requirements." },
                { title: "Onboarding & integration", content: "Structured playbooks and workflows get your new team or partner up to speed and integrated with your tools." },
                { title: "Ongoing oversight & optimization", content: "We track performance, run reviews, and iterate so you get continuous improvement and long-term value." },
              ]}
            />
          </FadeInOnScroll>
        </div>
      </section>

      {/* Results / Social Proof */}
      <section className="py-16 bg-hugo-black text-white relative overflow-hidden">
        <BackgroundMotion variant="dark" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <AnimatedText text="Real Business Impact" variant="words" />
            </h2>
            <p className="text-white/70">
              Scale your customer support and operations globally without sacrificing compliance or quality.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <motion.div variants={scaleIn} className="bg-white/5 rounded-3xl p-6">
              <p className="text-sm font-medium text-white/60 mb-2">Cost Reduction</p>
              <p className="text-3xl font-bold text-hugo-gold">
                <AnimatedNumber value={50} suffix="%" />
              </p>
              <p className="text-xs text-white/60 mt-2">Average savings with global talent + AI workflows.</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white/5 rounded-3xl p-6">
              <p className="text-sm font-medium text-white/60 mb-2">Hiring & Onboarding</p>
              <p className="text-3xl font-bold text-hugo-gold">Faster</p>
              <p className="text-xs text-white/60 mt-2">Structured playbooks accelerate time-to-productivity.</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white/5 rounded-3xl p-6">
              <p className="text-sm font-medium text-white/60 mb-2">Delivery Model</p>
              <p className="text-3xl font-bold text-hugo-gold">Performance</p>
              <p className="text-xs text-white/60 mt-2">Operations designed around KPIs and outcomes.</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white/5 rounded-3xl p-6">
              <p className="text-sm font-medium text-white/60 mb-2">Experience</p>
              <p className="text-3xl font-bold text-hugo-gold">Higher CSAT</p>
              <p className="text-xs text-white/60 mt-2">Higher CSAT and retention with long-term teams.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Teaser — FadeInOnScroll */}
      <section className="py-24 bg-hugo-cream relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeInOnScroll amount={0.2} y={20} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              <AnimatedText text="See the Impact" variant="words" />
            </h2>
            <p className="text-xl text-hugo-black/60">
              Calculate your potential savings with our interactive tool.
            </p>
          </FadeInOnScroll>
          <ROICalculator />
        </div>
      </section>

      {/* Final CTA — smileys + people circles like clone */}
      <section className="py-32 bg-hugo-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
        <BackgroundMotion variant="dark" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <CTAPeopleCircles showSmileys className="mb-10" />
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <AnimatedText text="Ready to scale" variant="words" /> <br />{" "}
            <span className="text-hugo-gold">
              <AnimatedText text="smarter?" variant="words" delay={0.2} />
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton strength={10}>
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                  Book Strategy Call
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton strength={10}>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-black cursor-pointer">
                  Learn More
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  );
}
