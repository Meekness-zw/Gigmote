"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, scaleIn, eases } from "@/utils/animations";
import { Target, Users, Zap, Globe, TrendingUp, Clock, DollarSign, Check, X, ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlobalMap } from "@/components/ui/GlobalMap";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityTransform = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const values = [
        {
            icon: Target,
            title: "Built by Operators",
            description: "We've personally scaled CX orgs, FinTech teams, and SaaS operations. We design systems that work in the real world  not just on paper.",
            img: "/images/A product manager and software team planning a tech roadmap on digital whiteboard screens, agile sprint boards and UX wireframes visible, sleek tech office or remote work setup, clean modern business .jpg"
        },
        {
            icon: Zap,
            title: "Metrics-Driven",
            description: "Every engagement runs on clear KPIs, SLAs, and QA frameworks. We measure success by outcomes, not activity.",
            img: "/images/Gigmote Asset 4.jpg"
        },
        {
            icon: Users,
            title: "Human + AI Model",
            description: "We blend high-performing African talent with practical AI tools that augment your team  without replacing human judgment.",
            img: "/images/AI Curiosity lab in the rainforset jungle of africa in a call centre setting- bright setting, icons flying , glass office setting add people (3) (1).jpg"
        },
        {
            icon: Globe,
            title: "Africa → Global",
            description: "We connect UK and North American companies with top-tier African professionals. Long-term, accountable  not freelance.",
            img: "/images/create an image with the Hero title _AfriCode_ Connecting African Developers to Global Businesses --- (3).jpg"
        }
    ];

    const milestones = [
        {
            year: "Why outsourcing fails",
            event: "Cost over quality",
            description: "Most traditional providers compete on price instead of performance  leading to poor quality, high turnover, and little accountability.",
            align: "left"
        },
        {
            year: "Why Gigmote exists",
            event: "Operator-led model",
            description: "We built Gigmote after watching outsourcing fail real businesses. Our model prioritizes outcomes, systems, and people  not seat-filling.",
            align: "right"
        },
        {
            year: "The Gigmote Standard",
            event: "Quality first",
            description: "Above-market local wages, top-talent acceptance, zero body-shopping, and long-term placement focus form the core of how we operate.",
            align: "left"
        },
        {
            year: "The Human + AI Future",
            event: "Run smarter, not harder",
            description: "We combine global talent with practical AI so your business can run with less friction, more visibility, and more resilience.",
            align: "right"
        },
    ];

    return (
        <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
            <Navbar />

            {/* Custom Full-bleed Image Hero */}
            <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{ y: yTransform }}
                >
                    <Image
                        src="/images/create an image with the Hero title _AfriCode_ Connecting African Developers to Global Businesses --- (3).jpg"
                        alt="Global teams collaborating"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                    {/* Premium Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-hugo-black/80 via-hugo-black/60 to-hugo-black pointer-events-none"></div>
                </motion.div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center mt-20">
                    <motion.div style={{ opacity: opacityTransform }} className="space-y-6">
                        <div className="inline-block relative overflow-hidden rounded-full mb-6">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: eases.expo }}
                                className="px-6 py-2 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-white/80 font-medium text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            >
                                Operator-Led Excellence
                            </motion.div>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]">
                            <AnimatedText text="We build teams that actually work." variant="words" />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: eases.smoothStrong }}
                            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            Gigmote isn't a marketplace. We're an operations partner blending top-tier African talent with practical AI to scale your business smarter.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-16 bg-white/20 overflow-hidden relative">
                        <motion.div
                            animate={{ y: [0, 64] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="w-full h-8 bg-hugo-gold absolute top-0"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Stats Bar (Floating Over the transition) */}
            <section className="relative -mt-24 z-20 pb-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {siteContent.company.stats.map((stat, idx) => {
                            const numMatch = stat.value.match(/(\d+)/);
                            const number = numMatch ? parseInt(numMatch[1]) : 0;
                            const suffix = stat.value.includes("+") ? "+" : "";

                            return (
                                <motion.div
                                    key={idx}
                                    variants={scaleIn}
                                    className="bg-hugo-black/95 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-hugo-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
                                    <div className="relative z-10">
                                        <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tighter">
                                            {number > 0 ? (
                                                <AnimatedNumber value={number} suffix={suffix} />
                                            ) : (
                                                stat.value
                                            )}
                                        </div>
                                        <div className="text-hugo-gold uppercase tracking-[0.2em] text-xs font-semibold">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Immersive Mission Section */}
            <MaskSection variant="slideUp" className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 space-y-8">
                            <SectionLabel>Our Origin</SectionLabel>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hugo-black leading-[1.1] tracking-tight">
                                Built from <br /><span className="text-hugo-gold">frustration.</span>
                            </h2>
                            <p className="text-xl text-hugo-black/70 leading-relaxed">
                                We watched outsourcing fail real businesses. Companies lost money, time, and trust through poor BPO strategy, low-quality talent, and hype-driven AI.
                            </p>
                            <p className="text-lg text-hugo-black/60 leading-relaxed">
                                So we built a new model. One that combines high-quality African talent, proven operational consulting, and practical AI automation  giving growing companies in the UK, US, and Canada a smarter way to scale.
                            </p>

                            <div className="pt-4 flex items-center gap-6">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                            <Image
                                                src={`/images/Gigmote Asset ${i + 2}.jpg`}
                                                alt={`Team member ${i}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-medium text-hugo-black/60">
                                    <span className="text-hugo-black font-bold">100+</span> Operators globally
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Image Grid */}
                        <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[600px] relative">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl h-full col-span-1"
                            >
                                <Image src="/images/global bpo advisory.jpg" alt="BPO Advisory" fill className="object-cover" />
                            </motion.div>
                            <div className="col-span-1 grid grid-rows-2 gap-4 h-full hidden md:grid">
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="relative rounded-3xl overflow-hidden shadow-xl"
                                >
                                    <Image src="/images/A connected global map glowing with nodes representing remote team members, digital lines connecting cities around the world, concept of global collaboration and outsourcing, futuristic but minimal de.jpg" alt="Global Nodes" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="relative rounded-3xl overflow-hidden shadow-xl bg-hugo-black flex items-center justify-center p-8 text-center"
                                >
                                    <div className="absolute inset-0 bg-[url('/images/Gigmote%20Asset%201.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                                    <h3 className="text-2xl font-bold text-white relative z-10 leading-snug">"We don't just place talent. We design systems."</h3>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaskSection>

            {/* Premium Values (Image Cards) */}
            <section className="py-32 bg-hugo-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/Gigmote%20Asset%205.jpg')] bg-cover bg-fixed bg-center"></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-[0.02]"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <FadeInOnScroll className="text-center mb-20">
                        <SectionLabel variant="dark">The Gigmote Difference</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Principles that guide us.
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                            These aren't just words on a wall. They are the operational blueprints for every team we build.
                        </p>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                                    className="group relative rounded-[2.5rem] overflow-hidden h-[400px] flex items-end shadow-2xl"
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={value.img}
                                        alt={value.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-hugo-black via-hugo-black/60 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-95"></div>

                                    {/* Content */}
                                    <div className="relative z-10 w-full p-10 md:p-12 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-hugo-gold border border-white/20">
                                            <Icon size={28} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">{value.title}</h3>
                                        <p className="text-white/70 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-hugo-gold/30 rounded-[2.5rem] transition-colors duration-500 mix-blend-overlay pointer-events-none"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Asymmetrical Visual Timeline */}
            <section className="py-32 bg-hugo-cream relative overflow-hidden">
                <BackgroundMotion variant="light" />
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <FadeInOnScroll className="text-center mb-24">
                        <SectionLabel>The Evolution</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our thesis on modern scaling</h2>
                        <p className="text-xl text-hugo-black/60 max-w-2xl mx-auto">From broken traditional models to the Human + AI future.</p>
                    </FadeInOnScroll>

                    <div className="space-y-32">
                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${milestone.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-24 items-center`}
                            >
                                {/* Text Content */}
                                <div className="flex-1 space-y-6">
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-hugo-gold/10 text-hugo-black font-semibold text-xs uppercase tracking-widest border border-hugo-gold/20">
                                        Phase 0{idx + 1}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-hugo-black leading-tight">
                                        {milestone.event}
                                    </h3>
                                    <p className="text-xl text-hugo-black/60 leading-relaxed font-light">
                                        {milestone.description}
                                    </p>

                                    <div className="pt-4">
                                        <div className="h-px w-24 bg-hugo-black/10"></div>
                                        <p className="mt-4 text-sm font-semibold text-hugo-black/40 uppercase tracking-wider">{milestone.year}</p>
                                    </div>
                                </div>

                                {/* Abstract Visual representation */}
                                <div className="flex-1 w-full">
                                    <div className={`aspect-square w-full max-w-md mx-auto rounded-[3rem] relative overflow-hidden shadow-2xl ${idx % 2 === 0 ? 'bg-hugo-black' : 'bg-white'}`}>
                                        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                                            <Image
                                                src={`/images/Gigmote Asset ${idx > 1 ? idx - 1 : idx + 3}.jpg`}
                                                alt={milestone.event}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-3/4 h-3/4 rounded-full blur-3xl ${idx % 2 === 0 ? 'bg-hugo-gold/20' : 'bg-hugo-black/5'}`}></div>
                                        </div>
                                        {/* Stylized graphic element */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-hugo-gold">
                                            {idx === 0 && <X className="w-24 h-24 opacity-80" strokeWidth={1} />}
                                            {idx === 1 && <Target className="w-24 h-24 opacity-80" strokeWidth={1} />}
                                            {idx === 2 && <Check className="w-24 h-24 opacity-80 text-green-500" strokeWidth={1} />}
                                            {idx === 3 && <Zap className="w-24 h-24 opacity-80" strokeWidth={1} />}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Elevated Comparison Table */}
            <MaskSection variant="slideUp" className="py-32 bg-white relative overflow-hidden border-t border-hugo-black/5">
                <div className="container mx-auto px-6 max-w-6xl">
                    <FadeInOnScroll className="text-center mb-20">
                        <SectionLabel>The Shift</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Traditional vs Modern</h2>
                        <p className="text-xl text-hugo-black/60 max-w-2xl mx-auto font-light">
                            Why our operator-led approach consistently out-performs legacy BPO structures.
                        </p>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-hugo-black/5">
                        {/* Traditional Outsourcing */}
                        <div className="bg-gray-50 p-12 lg:p-16 border-r border-hugo-black/5">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                                    <X size={24} className="text-gray-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Legacy Structure</h3>
                                    <p className="text-sm text-gray-500 font-medium">Traditional Providers</p>
                                </div>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "Freelance marketplaces & body-shopping",
                                    "Cost-first, quality-second approach",
                                    "No BPO strategy or design support",
                                    "Hype-driven AI that replaces humans",
                                    "High turnover and zero accountability"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 opacity-70">
                                        <X size={20} className="text-gray-400 mt-1 shrink-0" />
                                        <span className="text-gray-600 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Gigmote */}
                        <div className="bg-hugo-black p-12 lg:p-16 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/images/global%20bpo%20advisory.jpg')] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center mix-blend-overlay"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-hugo-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-hugo-gold/20 backdrop-blur-md flex items-center justify-center border border-hugo-gold/30">
                                        <Check size={24} className="text-hugo-gold" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">The Gigmote Standard</h3>
                                        <p className="text-sm text-hugo-gold font-medium">Modern Operator Model</p>
                                    </div>
                                </div>
                                <ul className="space-y-6">
                                    {[
                                        "Curated, long-term African talent",
                                        "BPO strategy & operating model design",
                                        "Metrics-driven onboarding & oversight",
                                        "AI that augments  not replaces  your team",
                                        "Total operational accountability"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <Check size={20} className="text-hugo-gold mt-1 shrink-0" />
                                            <span className="text-white text-lg font-medium tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <Link href="/services">
                                        <Button
                                            variant="secondary"
                                            className="w-full sm:w-auto flex items-center gap-2 group/btn"
                                        >
                                            See how it works
                                            <ArrowRight
                                                size={18}
                                                className="transform transition-transform group-hover/btn:translate-x-1"
                                            />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaskSection>

            {/* Case Studies  Dynamic Image Layout */}
            <MaskSection variant="slideUp" className="py-32 bg-hugo-cream">
                <div className="container mx-auto px-6 max-w-7xl">
                    <FadeInOnScroll className="text-center mb-24">
                        <SectionLabel>Case Studies</SectionLabel>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Proof of Impact</h2>
                        <p className="text-xl text-hugo-black/60 max-w-2xl mx-auto">
                            Real metrics from companies that switched to our human + automation model.
                        </p>
                    </FadeInOnScroll>

                    <div className="space-y-20">
                        {siteContent.caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-hugo-black/5 flex flex-col lg:flex-row group"
                            >
                                {/* Left: Visual Context */}
                                <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                                    <Image
                                        src={`/images/Powered by People. Enhanced by Technology._Connecting international companies with high-quality African outsourcing partners, while empowering entrepreneurs to build sustainable BPO operations.-create(${10 + index}).jpg`}
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-hugo-black/40 to-transparent"></div>
                                    <div className="absolute top-6 left-6">
                                        <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase border border-white/20">
                                            {study.industry}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Data */}
                                <div className="lg:w-3/5 p-10 lg:p-14 flex flex-col justify-between bg-white relative z-10 transition-transform duration-500 lg:-translate-x-4 lg:group-hover:translate-x-0 rounded-l-[2rem]">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-hugo-black leading-tight mb-8">
                                            {study.title}
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                            <div>
                                                <h4 className="font-bold text-hugo-black/50 uppercase tracking-widest text-xs mb-3">The Challenge</h4>
                                                <p className="text-hugo-black/80 leading-relaxed text-sm font-medium">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-hugo-black/50 uppercase tracking-widest text-xs mb-3">The Solution</h4>
                                                <p className="text-hugo-black/80 leading-relaxed text-sm font-medium">{study.solution}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Metrics Footer */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-hugo-black/5 pt-8 mt-auto">
                                        <div className="bg-hugo-black text-hugo-gold p-4 rounded-2xl">
                                            <TrendingUp size={20} className="mb-2 opacity-80" />
                                            <p className="font-bold text-lg leading-tight">{study.results[0]}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                            <Clock size={20} className="mb-2 text-hugo-teal opacity-80" />
                                            <p className="font-semibold text-hugo-black text-sm">{study.results[1]}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                            <DollarSign size={20} className="mb-2 text-hugo-sage opacity-80" />
                                            <p className="font-semibold text-hugo-black text-sm">{study.results[2]}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </MaskSection>

            {/* Global Presence */}
            <section className="py-32 bg-hugo-black border-t border-white/5 relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('/images/A%20connected%20global%20map%20glowing%20with%20nodes%20representing%20remote%20team%20members,%20digital%20lines%20connecting%20cities%20around%20the%20world,%20concept%20of%20global%20collaboration%20and%20outsourcing,%20futuristic%20but%20minimal%20de.jpg')] opacity-20 bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-hugo-black via-hugo-black/80 to-hugo-black"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <FadeInOnScroll className="text-center mb-16">
                        <SectionLabel variant="dark">Our Reach</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">African Talent. <br /><span className="text-hugo-gold">Globally Deployed.</span></h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                            Our talent hubs span South, East, West, and North Africa  strategically aligned for perfect timezone overlap with the UK, US, and Canada.
                        </p>
                    </FadeInOnScroll>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: eases.expo }}
                        className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-4 border border-white/10 shadow-2xl"
                    >
                        <GlobalMap />
                    </motion.div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
