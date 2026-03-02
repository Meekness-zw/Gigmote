"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Target, Users, Zap, Globe, Award, TrendingUp, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function CompanyPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, 150]);

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

    const timeline = [
        {
            phase: "The Problem",
            title: "Why outsourcing fails",
            description: "Most traditional providers compete on price instead of performance. This leads to a race to the bottom: poor quality, high turnover, and zero accountability to your bottom line. It's body-shopping, not business building.",
            image: "/images/Gigmote Asset 4.jpg"
        },
        {
            phase: "The Solution",
            title: "An Operator-Led Model",
            description: "We built Gigmote after experiencing the pain of scaling remote teams firsthand. Our model prioritizes outcomes, robust operational systems, and elite people. We care about unit economics, not just hourly rates.",
            image: "/images/AI Curiosity lab in the rainforset jungle of africa in a call centre setting- bright setting, icons flying , glass office setting add people (3) (1).jpg"
        },
        {
            phase: "The Future",
            title: "Human Talent + Applied AI",
            description: "We don't just place people; we equip them with the AI tools needed to multiply their output. By combining the top 1% of global talent with practical automation, we help you run a fundamentally smarter operation.",
            image: "/images/create an image  wit digitally empowered people in .jpg"
        }
    ];

    return (
        <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
            <BackgroundMotion variant="light" />
            <Navbar />

            {/* Immersive Dark Hero */}
            <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex min-h-[60vh] bg-hugo-black text-white">
                <motion.div
                    style={{ y: yTransform }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/create an image with the Hero title _AfriCode_ Connecting African Developers to Global Businesses ---.jpg"
                        alt="Gigmote company vision"
                        fill
                        className="object-cover opacity-40 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hugo-black via-hugo-black/80 to-hugo-black/40"></div>
                </motion.div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center justify-center">
                    <FadeInOnScroll>
                        <SectionLabel variant="dark">Our Company</SectionLabel>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                            <AnimatedText text="Built by operators for operators." variant="words" />
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                            We saw traditional outsourcing fail businesses through poor quality and high turnover. Gigmote exists to fix that.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Impact Metrics Bar */}
            <MaskSection variant="slideUp" className="py-16 bg-hugo-gold relative z-20 border-y border-hugo-black/10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-hugo-black/10">
                        {siteContent.company.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center pt-8 md:pt-0"
                            >
                                <div className="text-5xl md:text-6xl font-black text-hugo-black mb-2 tracking-tighter">
                                    {stat.value}
                                </div>
                                <div className="text-hugo-black/70 font-bold uppercase tracking-widest text-xs">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </MaskSection>

            {/* Expansive Mission Block */}
            <MaskSection variant="clipUp" className="py-32 bg-white relative overflow-hidden">
                <BackgroundMotion variant="light" />
                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                    <FadeInOnScroll>
                        <div className="inline-block p-1 bg-gray-50 rounded-full shadow-sm border border-gray-100 mb-8">
                            <div className="px-6 py-2 bg-white text-hugo-black text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                                The Mission
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-hugo-black leading-[1.1] tracking-tight mb-10">
                            To redefine global work by pairing <span className="text-hugo-gold italic">elite human talent</span> with practical automation.
                        </h2>
                        <div className="h-px w-24 bg-hugo-black/20 mx-auto"></div>
                    </FadeInOnScroll>
                </div>
            </MaskSection>

            {/* High-Contrast Timeline Sequence */}
            <section className="bg-hugo-black text-white py-32 relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/Gigmote%20Asset%201.jpg')] bg-cover mix-blend-overlay"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">

                    <FadeInOnScroll className="mb-24 md:text-center max-w-3xl mx-auto">
                        <SectionLabel variant="dark">Evolution</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">How we got here.</h2>
                        <p className="text-xl text-white/60 font-light">From identifying the core flaws in legacy outsourcing to building a new standard.</p>
                    </FadeInOnScroll>

                    <div className="space-y-32">
                        {timeline.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <MaskSection
                                    key={index}
                                    variant="slideUp"
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                                >
                                    {/* Text Content */}
                                    <div className="lg:w-1/2 space-y-6">
                                        <div className="inline-block px-4 py-1.5 rounded-full border border-hugo-gold/30 bg-hugo-gold/10 text-hugo-gold text-xs font-bold tracking-widest uppercase">
                                            {item.phase}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className="lg:w-1/2 w-full">
                                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl border border-white/5">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-hugo-black/40 group-hover:bg-hugo-black/20 transition-colors duration-500"></div>
                                        </div>
                                    </div>
                                </MaskSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Core Values Grid */}
            <MaskSection variant="slideUp" className="py-32 bg-hugo-cream">
                <div className="container mx-auto px-6 max-w-7xl">
                    <FadeInOnScroll className="text-center mb-20">
                        <SectionLabel>Our DNA</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-hugo-black tracking-tight">Operating Principles</h2>
                        <p className="text-xl text-hugo-black/60 max-w-2xl mx-auto font-light">
                            The non-negotiables that dictate who we hire, how we build, and how we deliver for our clients.
                        </p>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-hugo-black border border-gray-200 group-hover:bg-hugo-black group-hover:text-white transition-colors duration-300">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-hugo-black">{value.title}</h3>
                                    <p className="text-hugo-black/60 leading-relaxed font-light">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </MaskSection>

            <ContactForm />

            <Footer />
        </main>
    );
}
