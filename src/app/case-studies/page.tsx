"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
            <Navbar />

            <Hero
                variant="centered"
                title="Real Business Impact"
                subtitle="Case Studies"
                description="See how we've helped companies across FinTech, SaaS, and Healthcare scale smarter."
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-32">
                        {siteContent.caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                            >
                                {/* Left: Context */}
                                <div className="lg:col-span-5 space-y-6">
                                    <div className="inline-block px-4 py-2 rounded-full bg-hugo-cream text-hugo-black text-sm font-medium border border-hugo-black/5">
                                        {study.industry}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-hugo-black leading-tight">
                                        {study.title}
                                    </h2>

                                    <div className="space-y-4 pt-4">
                                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                            <h4 className="font-bold text-red-900 mb-2">The Challenge</h4>
                                            <p className="text-red-800/80 text-sm leading-relaxed">{study.challenge}</p>
                                        </div>
                                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                            <h4 className="font-bold text-green-900 mb-2">The Solution</h4>
                                            <p className="text-green-800/80 text-sm leading-relaxed">{study.solution}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Results Cards */}
                                <div className="lg:col-span-7">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Featured Big Result */}
                                        <div className="md:col-span-2 bg-hugo-black text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                                            <div className="relative z-10">
                                                <TrendingUp className="text-hugo-gold mb-4" size={32} />
                                                <h3 className="text-4xl font-bold mb-2 text-hugo-gold">Results</h3>
                                                <p className="text-white/80 text-lg">{study.results[0]}</p>
                                            </div>
                                        </div>

                                        {/* Secondary Results */}
                                        <div className="bg-hugo-cream p-8 rounded-3xl border border-hugo-black/5">
                                            <Clock className="text-hugo-teal mb-4" size={32} />
                                            <p className="font-medium text-hugo-black">{study.results[1]}</p>
                                        </div>
                                        <div className="bg-hugo-cream p-8 rounded-3xl border border-hugo-black/5">
                                            <DollarSign className="text-hugo-sage mb-4" size={32} />
                                            <p className="font-medium text-hugo-black">{study.results[2]}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
