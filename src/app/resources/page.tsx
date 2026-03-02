"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Accordion } from "@/components/ui/Accordion";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { siteContent } from "@/data/content";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight, BookOpen, FileText, Zap } from "lucide-react";

export default function ResourcesPage() {
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

            {/* Premium Immersive Hero */}
            <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex min-h-[50vh] bg-hugo-black text-white">
                <motion.div
                    style={{ y: yTransform }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/Powered by People. Enhanced by Technology._Connecting international companies with high-quality African outsourcing partners, while empowering entrepreneurs to build sustainable BPO operations.-create(13).jpg"
                        alt="Knowledge hub background"
                        fill
                        className="object-cover opacity-20 mix-blend-overlay grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hugo-black via-hugo-black/80 to-hugo-black/40"></div>
                </motion.div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center justify-center">
                    <FadeInOnScroll>
                        <SectionLabel variant="dark">Intelligence Hub</SectionLabel>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                            <AnimatedText text="Insights & Playbooks." variant="words" />
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                            Strategies on scaling global support, integrating AI workflows, and running high-performance offshore teams.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Premium Content Hub */}
            <section className="py-24 relative z-20 -mt-16 lg:-mt-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <MaskSection variant="slideUp" className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16 border border-hugo-black/5">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                            {/* Featured Content / Overview */}
                            <div className="lg:col-span-5 space-y-8 flex flex-col">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-hugo-black mb-4">
                                        Actionable frameworks.
                                    </h2>
                                    <p className="text-hugo-black/60 text-lg font-light leading-relaxed">
                                        We don't just place talent. We build operational blueprints. Learn how we structure hybrid Human + AI teams for rapidly scaling tech companies.
                                    </p>
                                </div>

                                <div className="mt-auto pt-8 border-t border-gray-100 hidden lg:block">
                                    <p className="text-sm font-bold uppercase tracking-widest text-hugo-black/30 mb-6">Popular Topics</p>
                                    <div className="flex flex-wrap gap-3">
                                        {['AI Automation', 'Global Staffing', 'Cost Optimization', 'BPO Strategy', 'Quality Assurance'].map(tag => (
                                            <span key={tag} className="px-4 py-2 bg-gray-50 text-hugo-black/70 rounded-full text-xs font-semibold uppercase tracking-wider border border-gray-200 hover:bg-hugo-black hover:text-white transition-colors cursor-pointer">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Resources Grid */}
                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                                    {[
                                        {
                                            title: "How to combine global teams with AI without breaking quality",
                                            tag: "Strategy",
                                            icon: Zap,
                                            color: "bg-blue-50 text-blue-700 border-blue-100"
                                        },
                                        {
                                            title: "A practical blueprint for your first 10 global hires",
                                            tag: "Playbook",
                                            icon: BookOpen,
                                            color: "bg-emerald-50 text-emerald-700 border-emerald-100"
                                        },
                                        {
                                            title: "When BPO makes sense (and when it doesn't)",
                                            tag: "Advisory",
                                            icon: FileText,
                                            color: "bg-purple-50 text-purple-700 border-purple-100"
                                        },
                                        {
                                            title: "Designing KPIs for human + AI delivery models",
                                            tag: "Operations",
                                            icon: Target,
                                            color: "bg-amber-50 text-amber-700 border-amber-100"
                                        },
                                    ].map((post, idx) => {
                                        const Icon = post.icon || Zap;
                                        return (
                                            <motion.div
                                                key={post.title}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="group p-6 md:p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden h-full"
                                            >
                                                <div className="flex items-center justify-between mb-8">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${post.color}`}>
                                                        {post.tag}
                                                    </span>
                                                    <Icon size={18} className="text-hugo-black/20 group-hover:text-hugo-black transition-colors" />
                                                </div>
                                                <h3 className="text-lg font-bold text-hugo-black leading-snug group-hover:text-hugo-gold transition-colors pt-2 border-t border-gray-100 mt-auto">
                                                    {post.title}
                                                </h3>
                                                <ArrowUpRight size={16} className="absolute bottom-6 right-6 text-hugo-black/10 group-hover:text-hugo-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </MaskSection>
                </div>
            </section>

            {/* Elevated FAQ Section */}
            <section className="py-24 bg-hugo-cream relative">
                <BackgroundMotion variant="minimal" />
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <FadeInOnScroll className="text-center mb-16">
                        <SectionLabel>FAQ</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold text-hugo-black tracking-tight mb-4">
                            Answers to common operational questions.
                        </h2>
                        <p className="text-xl text-hugo-black/60 font-light">
                            If you still have questions, don't hesitate to book a call.
                        </p>
                    </FadeInOnScroll>

                    <div className="bg-white rounded-[2rem] shadow-lg border border-gray-100 p-8 md:p-12">
                        <Accordion items={siteContent.faqs} />
                    </div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}

// Ensure Target icon is defined since we used it above
import { Target } from "lucide-react";
