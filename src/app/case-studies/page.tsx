"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Clock, DollarSign, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function CaseStudiesPage() {
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

            {/* Immersive Dark Hero */}
            <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex min-h-[50vh] bg-hugo-black text-white">
                <motion.div
                    style={{ y: yTransform }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/Gigmote Asset 8.jpg"
                        alt="Success stories background"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hugo-black via-hugo-black/80 to-hugo-black/40"></div>
                </motion.div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center justify-center">
                    <FadeInOnScroll>
                        <SectionLabel variant="dark">Impact</SectionLabel>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                            <AnimatedText text="Proven outcomes." variant="words" />
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                            How we've scaled operations and driven efficiency for hyper-growth companies in FinTech, SaaS, and Healthcare.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* High-End Visual Case Studies Grid */}
            <section className="py-24 bg-hugo-cream relative z-20 -mt-10 lg:-mt-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-24">
                        {siteContent.caseStudies.map((study, index) => (
                            <MaskSection
                                key={study.id}
                                variant="slideUp"
                                className="bg-white rounded-[2.5rem] shadow-2xl border border-hugo-black/5 overflow-hidden flex flex-col lg:flex-row group"
                            >
                                {/* Left: Visual Banner */}
                                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full overflow-hidden">
                                    <Image
                                        src={
                                            index % 2 === 0
                                                ? "/images/Gigmote Asset 3.jpg"
                                                : "/images/Gigmote Asset 4.jpg"
                                        }
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-4 border border-white/30 shadow-sm">
                                            {study.industry}
                                        </div>
                                        <h3 className="text-3xl font-bold leading-tight drop-shadow-md">
                                            {study.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Right: Study Details */}
                                <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> Challenge
                                            </p>
                                            <p className="text-hugo-black/70 font-light leading-relaxed">
                                                {study.challenge}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Solution
                                            </p>
                                            <p className="text-hugo-black/70 font-light leading-relaxed">
                                                {study.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10"></div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-hugo-black/40 mb-6">Key Results</p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                            {/* Primary Metric */}
                                            <div className="md:col-span-1 bg-hugo-black text-white p-6 rounded-2xl relative overflow-hidden flex flex-col justify-center shadow-lg transform -translate-y-2">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                                                <TrendingUp className="text-hugo-gold mb-3" size={24} />
                                                <h4 className="text-3xl font-black text-hugo-gold mb-1">Impact</h4>
                                                <p className="text-white/80 text-sm font-medium">{study.results[0]}</p>
                                            </div>

                                            <div className="md:col-span-2 grid grid-cols-2 gap-4">
                                                {study.results[1] && (
                                                    <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl flex flex-col justify-center">
                                                        <Clock className="text-hugo-black/40 mb-2" size={20} />
                                                        <p className="font-semibold text-hugo-black text-sm">{study.results[1]}</p>
                                                    </div>
                                                )}
                                                {study.results[2] && (
                                                    <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl flex flex-col justify-center">
                                                        <DollarSign className="text-hugo-black/40 mb-2" size={20} />
                                                        <p className="font-semibold text-hugo-black text-sm">{study.results[2]}</p>
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </MaskSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Messaging Section */}
            <section className="py-32 bg-hugo-black text-white relative overflow-hidden">
                <BackgroundMotion variant="dark" />

                {/* Visual Elements */}
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/Gigmote%20Asset%201.jpg')] opacity-5 bg-cover mix-blend-overlay pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <FadeInOnScroll className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Gigmote Standard</h2>
                        <p className="text-white/60 text-lg">Consistent outcomes across every engagement.</p>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Scale support globally", desc: "without sacrificing compliance." },
                            { title: "Reduce costs up to 60%", desc: "using human + AI workflows." },
                            { title: "Get vetted, full-time talent", desc: "integrated directly into your team." },
                            { title: "Run smarter, not harder", desc: "with proven operational systems." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <ArrowUpRight className="text-hugo-gold mb-6 opacity-50" size={24} />
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-white/60">{item.desc}</p>
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
