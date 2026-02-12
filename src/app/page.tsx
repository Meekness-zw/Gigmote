"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { ROICalculator } from "@/components/tools/ROICalculator";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

export default function Home() {
  return (
    <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
      <Navbar />

      <Hero variant="home" />

      {/* Trust Bar */}
      <section className="py-10 border-b border-hugo-black/5 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-hugo-black/40 mb-6"
          >
            {siteContent.hero.trustBar}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {['FinTech', 'Healthcare', 'SaaS', 'IT & Web3', 'Marketing', 'Sales Enablement'].map((logo) => (
              <motion.span
                key={logo}
                variants={fadeInUp}
                className="text-xl font-bold text-hugo-black/40"
              >
                {logo}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-hugo-gold/20 text-hugo-black text-sm font-bold mb-6 border border-hugo-gold/30"
            >
              Built By Operators — Not Recruiters
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-hugo-black mb-6 leading-tight">
              We focus on performance, compliance, and long-term success.
            </h2>
            <p className="text-xl text-hugo-black/60">
              We’ve built, scaled, and managed real global teams. That means we focus on performance, compliance, and long-term success — not quick placements.
            </p>
          </motion.div>

          {/* Bulleted value list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {siteContent.valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white p-8 rounded-3xl shadow-lg border border-hugo-black/5 hover:shadow-xl transition-shadow duration-300"
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
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* 3 Pillars / What We Do */}
      <section className="py-24 bg-hugo-black text-white relative overflow-hidden">
        {/* Decorative BG */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
        ></motion.div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold max-w-2xl">
              What we do to <span className="text-hugo-gold">scale you smarter.</span>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {siteContent.services.map((service, idx) => (
              <Link key={idx} href={`/services/${service.slug}`} className="group block">
                <motion.div
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 hover:bg-white/15 p-10 rounded-[2.5rem] border border-white/10 transition-all duration-300 h-full flex flex-col"
                >
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    {service.title}
                    <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-hugo-gold" />
                  </h3>
                  <p className="text-white/60 mb-8 flex-1 text-lg">
                    {service.description}
                  </p>
                  <div className="w-full h-48 bg-black/20 rounded-2xl relative overflow-hidden">
                    {/* Visual Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-6xl">
                      0{idx + 1}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Gigmote Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why companies choose Gigmote</h2>
            <p className="text-lg text-hugo-black/60">
              Traditional outsourcing focuses on cost. We focus on performance, reliability, and scalability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-3xl border border-hugo-black/10 shadow-xl"
          >
            <table className="w-full">
              <thead className="bg-hugo-cream">
                <tr>
                  <th className="py-6 px-8 text-left text-lg font-bold text-hugo-black/40 w-1/3">Feature</th>
                  <th className="py-6 px-8 text-left text-lg font-bold text-hugo-black/40 w-1/3">Traditional BPO</th>
                  <th className="py-6 px-8 text-left text-lg font-bold text-hugo-black w-1/3 bg-hugo-gold/10">Gigmote</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: "Model", trad: "Built by recruiters", us: "Built by operators" },
                  { feature: "Delivery", trad: "Human-only, manual workflows", us: "Human + AI delivery model" },
                  { feature: "Oversight", trad: "Minimal oversight and reporting", us: "Managed integration and KPI visibility" },
                  { feature: "Quality", trad: "Cost-first, quality-second", us: "Quality, compliance, and performance first" },
                  { feature: "Talent", trad: "Short-term, transactional", us: "Global talent with long-term retention focus" },
                  { feature: "Pricing", trad: "Opaque and unpredictable", us: "Transparent pricing aligned to outcomes" },
                ].map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="group hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-6 px-8 font-medium text-hugo-black">{row.feature}</td>
                    <td className="py-6 px-8 text-hugo-black/60 flex items-center gap-2">
                      <X size={16} className="text-red-400" />
                      {row.trad}
                    </td>
                    <td className="py-6 px-8 font-bold text-hugo-black bg-hugo-gold/5 group-hover:bg-hugo-gold/10 transition-colors flex items-center gap-2">
                      <Check size={16} className="text-green-600" />
                      {row.us}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Results / Social Proof */}
      <section className="py-16 bg-hugo-black text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Real Business Impact</h2>
            <p className="text-white/70">
              Scale your customer support and operations globally without sacrificing compliance or quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/5 rounded-3xl p-6">
              <p className="text-sm font-medium text-white/60 mb-2">Cost Reduction</p>
              <p className="text-3xl font-bold text-hugo-gold">40–60%</p>
              <p className="text-xs text-white/60 mt-2">Average savings with global talent + AI workflows.</p>
            </div>
            <div className="bg-white/5 rounded-3xl p-6">
              <p className="text-sm font-medium text-white/60 mb-2">Hiring & Onboarding</p>
              <p className="text-3xl font-bold text-hugo-gold">Faster</p>
              <p className="text-xs text-white/60 mt-2">Structured playbooks accelerate time-to-productivity.</p>
            </div>
            <div className="bg-white/5 rounded-3xl p-6">
              <p className="text-sm font-medium text-white/60 mb-2">Delivery Model</p>
              <p className="text-3xl font-bold text-hugo-gold">Performance</p>
              <p className="text-xs text-white/60 mt-2">Operations designed around KPIs and outcomes.</p>
            </div>
            <div className="bg-white/5 rounded-3xl p-6">
              <p className="text-sm font-medium text-white/60 mb-2">Experience</p>
              <p className="text-3xl font-bold text-hugo-gold">Higher CSAT</p>
              <p className="text-xs text-white/60 mt-2">Higher CSAT and retention with long-term teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section className="py-24 bg-hugo-cream relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">See the Impact</h2>
            <p className="text-xl text-hugo-black/60">
              Calculate your potential savings with our interactive tool.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-hugo-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Ready to scale <br /> <span className="text-hugo-gold">smarter?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Book Strategy Call
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-black">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  );
}
