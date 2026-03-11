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
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { StepsAccordion } from "@/components/ui/StepsAccordion";
import { StrokeReveal } from "@/components/ui/StrokeReveal";
import { FloatingSmileys } from "@/components/ui/FloatingSmileys";
import { CTAPeopleCircles } from "@/components/ui/CTAPeopleCircles";
import { ImageShowcaseSection } from "@/components/sections/ImageShowcaseSection";
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

      {/* Featured cards  three key stories instead of carousel */}
      <section className="py-12 md:py-16 bg-hugo-cream">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="rounded-3xl overflow-hidden bg-hugo-cream border border-hugo-black/10 p-6 md:p-8 flex flex-col h-full">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-hugo-black/5">
                <img
                  src="/images/Powered by People. Enhanced by Technology._Connecting international companies with high-quality African outsourcing partners, while empowering entrepreneurs to build sustainable BPO operations.-create.jpg"
                  alt="Team collaboration and planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-hugo-black mb-2">
                Built for performance
              </h4>
              <p className="text-hugo-black/60 text-sm md:text-base">
                We focus on outcomes, not just headcount. Real teams, real metrics.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden bg-hugo-cream border border-hugo-black/10 p-6 md:p-8 flex flex-col h-full">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-hugo-black/5">
                <img
                  src="/images/Gigmote Asset 1.jpg"
                  alt="Global team working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-hugo-black mb-2">
                Scale without the guesswork
              </h4>
              <p className="text-hugo-black/60 text-sm md:text-base">
                Vetted talent and proven playbooks so you launch faster.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden bg-hugo-cream border border-hugo-black/10 p-6 md:p-8 flex flex-col h-full">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-hugo-black/5">
                <img
                  src="/images/global bpo advisory.jpg"
                  alt="Strategy and operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-hugo-black mb-2">
                From strategy to delivery
              </h4>
              <p className="text-hugo-black/60 text-sm md:text-base">
                BPO matchmaking, staffing, and AI solutions under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition  mask reveal like clone */}
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
                Built By Operators  Not Recruiters
              </span>
            </StrokeReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-hugo-black mb-6 leading-tight">
              <AnimatedText text="We focus on performance, compliance, and long-term success." variant="words" />
            </h2>
            <p className="text-xl text-hugo-black/60">
              We’ve built, scaled, and managed real global teams. That means we focus on performance, compliance, and long-term success  not quick placements.
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

          {/* Animated illustrations  carousel on mobile, strip on desktop */}
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

      {/* Two-column image showcase  more imagery, clone-style layout */}
      <ImageShowcaseSection
        imageSide="right"
        title="African talent. Global-ready."
        subtitle="Why clients choose us"
        body="We connect UK and North American companies with high-performing African professionals  vetted, full-time, and built for long-term accountability. Not a marketplace. Not body-shopping. Real teams, real metrics, real results."
        imageSrc="/images/AI Curiosity lab in the rainforset jungle of africa in a call centre setting- bright setting, icons flying , glass office setting add people (1) (1).jpg"
        imageAlt="Team working together on delivery and operations"
        imageSrc2="/images/AI Curiosity lab in the rainforset jungle of africa in a call centre setting- bright setting, icons flying , glass office setting add people (2).jpg"
        imageAlt2="Professional team member"
      />

      {/* 3 Pillars / What We Do */}
      <section className="py-24 bg-hugo-black text-white relative overflow-hidden">
        <BackgroundMotion variant="dark" />
        {/* Decorative BG  scroll-linked rotation like clone */}
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

      {/* Image gallery strip  more images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeInOnScroll amount={0.2} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hugo-black mb-4">See how we work</h2>
            <p className="text-lg text-hugo-black/60">Global teams, local quality.</p>
          </FadeInOnScroll>
          <ImageGalleryStrip
            images={[
              { src: "/images/create a marketing asset called _Africode_ make it furutistic---and the concept of the business is connecting developers to global businesses- use a white background and navy blue and black for text a.jpg", alt: "African developers connected to global businesses", caption: "Collaboration" },
              { src: "/images/create an image with the Hero title _AfriCode_ Connecting African Developers to Global Businesses --- (3).jpg", alt: "AfriCode hero concept", caption: "Support" },
              { src: "/images/Gigmote Asset 5.jpg", alt: "Modern workspace and operations", caption: "Delivery" },
            ]}
          />
        </div>
      </section>

      {/* Why Choose Gigmote  responsive table / cards */}
      <MaskSection variant="slideUp" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
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
                { feature: "Model", trad: "Built by recruiters", pros: ["Built by operators with real CX, FinTech & SaaS experience"] },
                { feature: "Talent", trad: "Freelance marketplaces & body-shopping", pros: ["Curated, long-term African talent with full accountability"] },
                { feature: "BPO Strategy", trad: "No design  just vendor selection", pros: ["Full BPO consulting: model design, SLAs, QA & playbooks"] },
                { feature: "AI", trad: "Hype-driven automation", pros: ["AI that augments teams  chatbots, agents & workflow automation"] },
                { feature: "Oversight", trad: "Minimal reporting & visibility", pros: ["Metrics-driven onboarding, KPI dashboards & ongoing optimization"] },
                { feature: "Pricing", trad: "Opaque and unpredictable", pros: ["Transparent pricing: pilot → staffing → consulting → AI"] },
              ]}
            />
          </motion.div>
        </div>
      </MaskSection>

      {/* How it works  StepsAccordion */}
      <section className="py-16 bg-hugo-cream">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll amount={0.2} className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-hugo-black mb-3">
              <AnimatedText text="How we work with you" variant="words" />
            </h2>
            <p className="text-base md:text-lg text-hugo-black/60 max-w-2xl mx-auto">
              From discovery to delivery, we keep the process clear and outcome-focused.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll amount={0.2} delay={0.1} className="mt-6">
            <StepsAccordion
              steps={[
                { title: "Choose your wedge", content: "We start focused  CX staffing, Ops hiring, or BPO consulting  so you see results fast without overcommitting." },
                { title: "30–60 day pilot", content: "We match you with vetted African talent or the right BPO partner and run a structured pilot with clear KPIs and full transparency." },
                { title: "Layer in AI", content: "Once trust is built, we introduce AI agents and automation to reduce repetitive load and boost your team's productivity." },
                { title: "Expand & optimize", content: "We grow the engagement from staffing → consulting → AI  scaling with you as your needs evolve." },
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

      {/* ROI Calculator Teaser  FadeInOnScroll */}
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

      {/* Final CTA  smileys + people circles like clone */}
      <section className="py-32 bg-hugo-black text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/images/global bpo advisory.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        ></div>
        <BackgroundMotion variant="dark" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
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
