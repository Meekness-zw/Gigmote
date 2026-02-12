"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
      <Navbar />

      <Hero
        variant="service"
        title="Services that blend global talent and AI."
        subtitle="What We Do"
        description="Three pillars — BPO advisory, global staffing, and AI business solutions — designed to help you scale smarter, not just cheaper."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {siteContent.services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-hugo-cream/60 rounded-3xl p-8 border border-hugo-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="text-hugo-black" size={26} />
                  </div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-hugo-black/50 mb-2">
                    {service.slogan}
                  </p>
                  <h2 className="text-2xl font-bold text-hugo-black mb-3">
                    {service.title}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick talent request form callout */}
      <section className="py-20 bg-hugo-black text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need talent or AI support fast?
          </h2>
          <p className="text-white/70 mb-10">
            Submit a quick request and we&apos;ll map the right mix of global
            talent and automation for your team.
          </p>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  );
}

