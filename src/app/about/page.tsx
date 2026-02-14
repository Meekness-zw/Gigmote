"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/utils/animations";
import { Target, Users, Zap, Globe, Award, TrendingUp, Clock, DollarSign, Check, X } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { IllustrationTeam } from "@/components/illustrations";

export default function AboutPage() {
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
        <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
            <BackgroundMotion variant="light" />
            <Navbar />

            <Hero
                variant="company"
                title={siteContent.company.heroTitle}
                description={siteContent.company.heroDescription}
            />

            {/* Stats Bar */}
            <section className="py-16 bg-hugo-black text-white relative overflow-hidden">
                <BackgroundMotion variant="dark" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        {siteContent.company.stats.map((stat, idx) => {
                            // Extract number from stat.value if it's a string like "100+"
                            const numMatch = stat.value.match(/(\d+)/);
                            const number = numMatch ? parseInt(numMatch[1]) : 0;
                            const suffix = stat.value.includes("+") ? "+" : "";
                            
                            return (
                                <motion.div
                                    key={idx}
                                    variants={scaleIn}
                                    className="text-center"
                                >
                                    <div className="text-5xl md:text-6xl font-bold text-hugo-gold mb-2">
                                        {number > 0 ? (
                                            <AnimatedNumber value={number} suffix={suffix} />
                                        ) : (
                                            stat.value
                                        )}
                                    </div>
                                    <div className="text-white/60 uppercase tracking-wider text-sm">
                                        <AnimatedText text={stat.label} variant="words" delay={0.2} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Mission — clone-style section with label */}
            <MaskSection variant="slideUp" className="py-24 md:py-28 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeInOnScroll className="text-center space-y-8">
                        <SectionLabel>Our Story</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold text-hugo-black leading-tight">
                            <AnimatedText text="Gigmote was built by operators who have scaled outsourcing teams, CX orgs, and AI programs." variant="words" />
                        </h2>
                        <p className="text-xl text-hugo-black/70 leading-relaxed max-w-3xl mx-auto">
                            We saw traditional outsourcing fail businesses through poor quality, high turnover, and a lack
                            of accountability. Gigmote exists to fix that — with an operator-led, quality-first model that
                            blends human expertise with AI.
                        </p>
                    </FadeInOnScroll>
                </div>
            </MaskSection>

            {/* Two-col with label — clone-style */}
            <MaskSection variant="slideUp" className="py-24 md:py-28 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <FadeInOnScroll className="space-y-6">
                            <SectionLabel>Our Team</SectionLabel>
                            <h2 className="text-3xl md:text-4xl font-bold text-hugo-black leading-tight">
                                Operators who have built and scaled global teams.
                            </h2>
                            <p className="text-lg text-hugo-black/70 leading-relaxed">
                                We don’t just place talent — we’ve run operations, hit KPIs, and shipped products. That experience shapes how we match you with the right people and processes.
                            </p>
                        </FadeInOnScroll>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[340px] w-full flex items-center justify-center"
                        >
                            <div className="text-hugo-gold/60">
                                <IllustrationTeam size="lg" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </MaskSection>

            {/* Values — clone-style section */}
            <MaskSection variant="clipUp" className="py-24 md:py-28 bg-hugo-cream">
                <div className="container mx-auto px-6 max-w-7xl">
                    <FadeInOnScroll className="text-center mb-16">
                        <SectionLabel>The Gigmote Difference</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <AnimatedText text="Principles that guide every team we build" variant="words" />
                        </h2>
                        <p className="text-xl text-hugo-black/60 max-w-2xl mx-auto">
                            These principles guide every decision we make and every team we build.
                        </p>
                    </FadeInOnScroll>

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
            </MaskSection>

            {/* Timeline */}
            <section className="py-24 bg-hugo-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
                <BackgroundMotion variant="dark" />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why traditional outsourcing fails — and what we do differently</h2>
                        <p className="text-xl text-white/60">A simple look at the beliefs behind Gigmote.</p>
                    </div>

                    <div className="relative">
                        {/* Vertical line connecting all items */}
                        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-hugo-gold/20 hidden md:block"></div>

                        <div className="space-y-20">
                            {milestones.map((milestone, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                                    className="relative pl-20 md:pl-24"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:left-8 top-2 w-4 h-4 rounded-full bg-hugo-gold border-4 border-hugo-black z-10"></div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <div className="inline-block">
                                            <span className="text-sm font-semibold text-hugo-gold uppercase tracking-wider">
                                                {milestone.year}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                            {milestone.event}
                                        </h3>
                                        <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table — clone-style */}
            <MaskSection variant="slideUp" className="py-24 md:py-28 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <FadeInOnScroll className="text-center mb-16">
                        <SectionLabel>Compare</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Traditional Outsourcing vs Gigmote</h2>
                        <p className="text-lg text-hugo-black/60">
                            See the difference between traditional outsourcing and our operator-led approach.
                        </p>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Traditional Outsourcing */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-red-50/50 rounded-2xl border-2 border-red-100 p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                    <X size={20} className="text-red-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-red-900">Traditional</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Cheap labor focus",
                                    "High turnover",
                                    "Minimal oversight",
                                    "No AI strategy",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <X size={18} className="text-red-500 mt-0.5 shrink-0" />
                                        <span className="text-red-800/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Gigmote */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-hugo-gold/10 rounded-2xl border-2 border-hugo-gold/30 p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-hugo-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-hugo-gold/20 flex items-center justify-center">
                                        <Check size={20} className="text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-hugo-black">Gigmote</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Performance focus",
                                        "Long-term placement",
                                        "Managed integration",
                                        "Human + AI model",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check size={18} className="text-green-600 mt-0.5 shrink-0" />
                                            <span className="text-hugo-black font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </MaskSection>

            {/* Case Studies — clone-style */}
            <MaskSection variant="slideUp" className="py-24 md:py-28 bg-hugo-cream">
                <div className="container mx-auto px-6 max-w-7xl">
                    <FadeInOnScroll className="text-center mb-16">
                        <SectionLabel>Case Studies</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Business Impact</h2>
                        <p className="text-xl text-hugo-black/60 max-w-2xl mx-auto">
                            See how we've helped companies across FinTech, SaaS, and Healthcare scale smarter.
                        </p>
                    </FadeInOnScroll>

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
                                    <h3 className="text-3xl md:text-4xl font-bold text-hugo-black leading-tight">
                                        {study.title}
                                    </h3>

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
                                                <h4 className="text-4xl font-bold mb-2 text-hugo-gold">Results</h4>
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
            </MaskSection>

            {/* Visual Grid */}
            <section className="py-24 bg-hugo-cream">
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

            <ContactForm />

            <Footer />
        </main>
    );
}
