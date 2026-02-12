"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Users, Zap, Globe, Award, TrendingUp } from "lucide-react";

export default function CompanyPage() {
    const values = [
        {
            icon: Target,
            title: "Performance First",
            description: "We measure success by outcomes, not hours. Every team member is accountable to clear KPIs."
        },
        {
            icon: Users,
            title: "Human-Centric",
            description: "Technology enables us, but people drive results. We invest in training, culture, and retention."
        },
        {
            icon: Zap,
            title: "Move Fast",
            description: "Speed is a competitive advantage. We launch teams in weeks, not months."
        },
        {
            icon: Globe,
            title: "Globally Minded",
            description: "Talent has no borders. We build diverse teams that bring unique perspectives."
        }
    ];

    const milestones = [
        {
            year: "Why outsourcing fails",
            event: "Cost over quality",
            description:
                "Most traditional providers compete on price instead of performance — leading to poor quality, high turnover, and little accountability.",
        },
        {
            year: "Why Gigmote exists",
            event: "Operator-led model",
            description:
                "We built Gigmote after watching outsourcing fail real businesses. Our model prioritizes outcomes, systems, and people — not seat-filling.",
        },
        {
            year: "The Gigmote Standard",
            event: "Quality first",
            description:
                "Above-market local wages, top-talent acceptance, zero body-shopping, and long-term placement focus form the core of how we operate.",
        },
        {
            year: "The Human + AI Future",
            event: "Run smarter, not harder",
            description:
                "We combine global talent with practical AI so your business can run with less friction, more visibility, and more resilience.",
        },
    ];

    return (
        <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
            <Navbar />

            <Hero
                variant="company"
                title={siteContent.company.heroTitle}
                description={siteContent.company.heroDescription}
            />

            {/* Stats Bar */}
            <section className="py-16 bg-hugo-black text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {siteContent.company.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl md:text-6xl font-bold text-hugo-gold mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/60 uppercase tracking-wider text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-8"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-hugo-gold/20 text-hugo-black text-sm font-bold mb-4 border border-hugo-gold/30">
                            Our Story
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-hugo-black leading-tight">
                            Gigmote was built by operators who have scaled outsourcing teams, CX orgs, and AI programs.
                        </h2>
                        <p className="text-xl text-hugo-black/70 leading-relaxed max-w-3xl mx-auto">
                            We saw traditional outsourcing fail businesses through poor quality, high turnover, and a lack
                            of accountability. Gigmote exists to fix that — with an operator-led, quality-first model that
                            blends human expertise with AI.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-hugo-cream">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">The Gigmote Difference</h2>
                        <p className="text-xl text-hugo-black/60 max-w-2xl mx-auto">
                            These principles guide every decision we make and every team we build.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-3xl shadow-lg border border-hugo-black/5"
                                >
                                    <div className="w-14 h-14 bg-hugo-gold/20 rounded-2xl flex items-center justify-center mb-6 text-hugo-black">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-hugo-black/60 leading-relaxed">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Visual Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="col-span-2 md:col-span-2 row-span-2 relative rounded-3xl overflow-hidden group"
                        >
                            <Image src="/images/hero-1.png" alt="Office Culture" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-hugo-black/60 to-transparent flex items-end p-8">
                                <span className="text-white font-bold text-xl">Global Team</span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden bg-hugo-teal flex items-center justify-center"
                        >
                            <div className="text-center p-4">
                                <Award size={48} className="text-white mx-auto mb-2" />
                                <span className="text-sm font-medium text-white/80">Top Rated</span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group"
                        >
                            <Image src="/images/hero-2.png" alt="Team Meeting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden bg-hugo-gold flex items-center justify-center"
                        >
                            <div className="text-center p-4">
                                <TrendingUp size={48} className="text-hugo-black mx-auto mb-2" />
                                <span className="text-sm font-medium text-hugo-black/60">Fast Growth</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-hugo-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why traditional outsourcing fails — and what we do differently</h2>
                        <p className="text-xl text-white/60">A simple look at the beliefs behind Gigmote.</p>
                    </div>

                    <div className="space-y-12">
                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-8 items-start"
                            >
                                <div className="flex-shrink-0 w-24 text-right">
                                    <span className="text-3xl font-bold text-hugo-gold">{milestone.year}</span>
                                </div>
                                <div className="flex-shrink-0 w-px h-full bg-hugo-gold/30 relative">
                                    <div className="w-4 h-4 rounded-full bg-hugo-gold absolute -left-[7px] top-2"></div>
                                </div>
                                <div className="flex-1 pb-8">
                                    <h3 className="text-2xl font-bold mb-2">{milestone.event}</h3>
                                    <p className="text-white/60">{milestone.description}</p>
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
