"use client";

import { ROICalculator } from "@/components/tools/ROICalculator";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      <Hero
        variant="pricing"
        title="Transparent & Simple Pricing"
        description="Traditional outsourcing focuses on cost. We focus on performance, reliability, and scalability."
      />

      <MaskSection variant="clipUp" className="py-24 md:py-28 -mt-20 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeInOnScroll className="mb-12">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-hugo-black mb-2">Plans that scale with you</h2>
            <p className="text-hugo-black/60 max-w-2xl">Clear pricing for global staffing, AI solutions, and BPO advisory.</p>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Global Staffing */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-hugo-black/5 flex flex-col">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-hugo-black/50 mb-2">
                Global Staffing
              </p>
              <h3 className="text-2xl font-bold text-hugo-black mb-3">
                Reliable Global Talent. Fully Integrated.
              </h3>
              <p className="text-sm text-hugo-black/70 leading-relaxed mb-6">
                We connect you with vetted, full-time professionals who plug directly into your team — no freelancers, no
                temp placements.
              </p>
              <div className="mb-4">
                <span className="text-sm font-medium text-hugo-black/60">
                  Starting at
                </span>
                <div className="text-3xl font-bold text-hugo-black">
                  $9<span className="text-base font-semibold text-hugo-black/70">/hour</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "Full-time vetted talent",
                  "Optional oversight & management",
                  "Performance monitoring and reporting",
                  "Seamless onboarding support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-hugo-black/75">
                    <Check size={16} className="mt-0.5 text-hugo-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-hugo-black/60">
                Best for CX, operations, finance & back office, tech teams, and more.
              </p>
            </div>

            {/* AI Business Solutions */}
            <div className="bg-hugo-black text-white rounded-3xl p-8 shadow-2xl border border-hugo-black flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-hugo-gold/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-2 relative z-10">
                AI Business Solutions
              </p>
              <h3 className="text-2xl font-bold mb-3 relative z-10">
                Automate Busywork. Keep Humans in Control.
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6 relative z-10">
                Practical AI deployments across support, sales, and operations — with humans in the loop for quality and
                compliance.
              </p>
              <div className="mb-4 relative z-10">
                <span className="text-sm font-medium text-white/70">
                  Starting at
                </span>
                <div className="text-3xl font-bold text-hugo-gold">
                  $3,000<span className="text-base font-semibold text-white/70"> per deployment</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 flex-1 relative z-10">
                {[
                  "AI workflow design",
                  "Integration into your existing tools",
                  "Ongoing optimization and monitoring",
                  "Support for chatbots, assistants, automation, and more",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <Check size={16} className="mt-0.5 text-hugo-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/60 relative z=10">
                Ideal for teams looking to reduce manual work and unlock higher productivity.
              </p>
            </div>

            {/* BPO Advisory */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-hugo-black/5 flex flex-col">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-hugo-black/50 mb-2">
                BPO Matchmaking & Advisory
              </p>
              <h3 className="text-2xl font-bold text-hugo-black mb-3">
                Outsource Without Guesswork.
              </h3>
              <p className="text-sm text-hugo-black/70 leading-relaxed mb-6">
                We help you design, select, and manage outsourcing partners that deliver consistent, measurable performance.
              </p>
              <div className="mb-4">
                <span className="text-sm font-medium text-hugo-black/60">
                  Pricing
                </span>
                <div className="text-3xl font-bold text-hugo-black">
                  Custom
                </div>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "Outsourcing strategy and operating model",
                  "Vendor selection and scoring",
                  "Performance design and governance",
                  "Risk and compliance planning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-hugo-black/75">
                    <Check size={16} className="mt-0.5 text-hugo-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-hugo-black/60">
                Best suited for organizations building or overhauling their outsourcing strategy.
              </p>
            </div>
          </div>

          {/* ROI Calculator — clone-style */}
          <div className="mt-24 max-w-4xl mx-auto">
            <FadeInOnScroll className="text-center mb-12">
              <SectionLabel>ROI</SectionLabel>
              <h2 className="text-3xl font-bold text-hugo-black mb-4">
                Interactive ROI Calculator
              </h2>
              <p className="text-lg text-hugo-black/60">
                Model your current U.S. team costs against Gigmote&apos;s global staffing + AI model — and see savings in real time.
              </p>
            </FadeInOnScroll>
            <ROICalculator />
          </div>
        </div>
      </MaskSection>

      <ContactForm />

      <Footer />
    </main>
  );
}

