"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Settings, Search, Users, Rocket } from "lucide-react";

export default function HowItWorksPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, 150]);

    const steps = [
        {
            num: "01",
            title: "Process Audit & Design",
            desc: "Before we place anyone, we audit your existing workflows. We identify bottlenecks and determine exactly what can be automated versus what requires human judgment.",
            icon: Settings,
            image: "/images/A product manager and software team planning a tech roadmap on digital whiteboard screens, agile sprint boards and UX wireframes visible, sleek tech office or remote work setup, clean modern business .jpg"
        },
        {
            num: "02",
            title: "Talent Curation",
            desc: "We source from the top 1% of our vetted global network. You aren't choosing from a massive database of freelancers; you are presented with 2-3 elite candidates perfectly matched to your stack and culture.",
            icon: Search,
            image: "/images/Gigmote Asset 4.jpg"
        },
        {
            num: "03",
            title: "Integration & Training",
            desc: "We don't just hand over a hire. We ensure they are integrated into your communication channels, security protocols, and daily standups. They operate as a direct extension of your core team.",
            icon: Users,
            image: "/images/Gigmote Asset 3.jpg"
        },
        {
            num: "04",
            title: "Scale & Optimize",
            desc: "As the team member ramps up, our operational managers provide ongoing support and surface new AI tools to continuously amplify their output and reduce your cost-per-ticket/cost-per-commit.",
            icon: Rocket,
            image: "/images/AI Curiosity lab in the rainforset jungle of africa in a call centre setting- bright setting, icons flying , glass office setting add people (2).jpg"
        }
    ];

    return (
        <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
            <BackgroundMotion variant="light" />
            <Navbar />

            {/* Immersive Dark Hero */}
            <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex min-h-[55vh] items-center bg-hugo-black text-white">
                <motion.div
                    style={{ y: yTransform }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/global bpo advisory.jpg"
                        alt="Process mapping"
                        fill
                        className="object-cover opacity-20 mix-blend-overlay grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hugo-black via-hugo-black/80 to-hugo-black/40"></div>
                </motion.div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                    <FadeInOnScroll>
                        <SectionLabel variant="dark">The Blueprint</SectionLabel>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                            <AnimatedText text="Systems that scale." variant="words" />
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                            From process audit to talent integration — how we build teams that help your business run without you.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Premium Vertical Timeline */}
            <section className="py-24 relative z-20 -mt-16 lg:-mt-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="space-y-16 lg:space-y-32">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            const Icon = step.icon;
                            return (
                                <MaskSection
                                    key={step.num}
                                    variant="slideUp"
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                                >
                                    {/* Text Content */}
                                    <div className="flex-1 space-y-8 relative">
                                        <div className="flex items-center gap-6 mb-6">
                                            <div className="text-5xl lg:text-7xl font-black text-hugo-black/5 select-none absolute -left-10 lg:-left-20 -top-8 lg:-top-16 z-0">
                                                {step.num}
                                            </div>
                                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 text-hugo-black relative z-10">
                                                <Icon size={28} />
                                            </div>
                                        </div>

                                        <div className="relative z-10">
                                            <h3 className="text-3xl md:text-4xl font-bold text-hugo-black mb-6 tracking-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-xl text-hugo-black/60 font-light leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image Visual */}
                                    <div className="flex-1 w-full relative">
                                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group border border-hugo-black/5">
                                            <div className="absolute inset-0 bg-hugo-gold/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                        </div>
                                        {/* Connecting Line (Desktop only) */}
                                        {index < steps.length - 1 && (
                                            <div className={`hidden lg:block absolute top-[120%] ${isEven ? 'right-1/2' : 'left-1/2'} w-px h-[250px] bg-gradient-to-b from-hugo-black/10 to-transparent -translate-x-1/2`}></div>
                                        )}
                                    </div>
                                </MaskSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Promise Banner */}
            <section className="py-24 bg-hugo-black text-white text-center relative overflow-hidden mt-12 mb-24">
                <BackgroundMotion variant="dark" />
                <div className="absolute inset-0 opacity-5 bg-[url('/images/Gigmote%20Asset%201.jpg')] bg-cover mix-blend-overlay"></div>

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <FadeInOnScroll>
                        <div className="inline-block px-4 py-1.5 rounded-full border border-hugo-gold/30 bg-hugo-gold/10 text-hugo-gold text-xs font-bold tracking-widest uppercase mb-10">
                            Our Guarantee
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                            "We build systems that help your business run <span className="text-hugo-gold italic">without you</span>."
                        </h2>
                        <p className="text-xl text-white/60 font-light mix-blend-screen">
                            Stop managing freelancers. Start scaling infrastructure.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
