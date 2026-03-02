"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function SolutionsPage() {
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
            <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex min-h-[55vh] items-center bg-hugo-black text-white">
                <motion.div
                    style={{ y: yTransform }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/From initial setup to scaling operations, we provide end-to-end support to help you build and grow a successful BPO operation serving global clients.create an image  wit digitally empowered people in .jpg"
                        alt="End-to-end BPO solutions"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hugo-black via-hugo-black/80 to-hugo-black/40"></div>
                </motion.div>

                {/* Floating Elements (similar to hire-a-dev) */}
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-1/4 right-[10%] w-24 h-24 bg-hugo-gold/10 rounded-2xl backdrop-blur-md border border-hugo-gold/20 flex items-center justify-center opacity-50 hidden lg:flex"
                >
                    <div className="w-12 h-12 border-2 border-hugo-gold/40 rounded-full animate-pulse"></div>
                </motion.div>
                <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-1/4 left-[10%] w-32 h-32 bg-white/5 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center opacity-50 hidden lg:flex"
                >
                    <div className="grid grid-cols-2 gap-2">
                        <div className="w-3 h-3 bg-white/40 rounded-sm"></div>
                        <div className="w-3 h-3 bg-white/40 rounded-sm"></div>
                        <div className="w-3 h-3 bg-white/40 rounded-sm"></div>
                        <div className="w-3 h-3 bg-white/40 rounded-sm"></div>
                    </div>
                </motion.div>


                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                    <FadeInOnScroll>
                        <SectionLabel variant="dark">Capabilities</SectionLabel>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                            <AnimatedText text="Operational leverage." variant="words" />
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                            From strategic advisory to deploying elite global teams and practical AI automation.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Premium Solution Cards */}
            <MaskSection variant="slideUp" className="py-24 -mt-16 relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                        {siteContent.services.map((service, index) => {
                            const Icon = service.icon;
                            // Make the middle one (Staffing/AI) pop slightly differently
                            const isFeatured = index === 1;

                            return (
                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="h-full"
                                >
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className={`group flex flex-col p-10 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden h-full border ${isFeatured ? 'bg-hugo-black text-white border-hugo-gold/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]' : 'bg-white text-hugo-black border-hugo-black/5 shadow-lg'}`}
                                    >
                                        {/* Background Glow Effect */}
                                        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-500 ${isFeatured ? 'bg-hugo-gold/15 group-hover:bg-hugo-gold/25' : 'bg-gray-100 group-hover:bg-gray-200'}`}></div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 ${isFeatured ? 'bg-white/10 text-hugo-gold border border-white/10 group-hover:bg-hugo-gold group-hover:text-hugo-black' : 'bg-gray-50 text-hugo-black border border-gray-100 group-hover:bg-hugo-black group-hover:text-white'}`}>
                                                <Icon size={32} strokeWidth={1.5} />
                                            </div>

                                            <h3 className="text-3xl font-bold mb-4 tracking-tight">
                                                {service.title}
                                            </h3>

                                            <p className={`text-base leading-relaxed mb-8 flex-grow font-light ${isFeatured ? 'text-white/70' : 'text-hugo-black/60'}`}>
                                                {service.description}
                                            </p>

                                            <div className="pt-6 mt-auto border-t border-opacity-10" style={{ borderColor: isFeatured ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                                                <div className={`flex items-center text-sm font-bold uppercase tracking-widest transition-colors ${isFeatured ? 'text-hugo-gold group-hover:text-white' : 'text-hugo-black/40 group-hover:text-hugo-black'}`}>
                                                    Explore Solution <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </MaskSection>

            {/* Expansive Edge-to-Edge Image */}
            <section className="py-0 relative h-[60vh] w-full overflow-hidden bg-hugo-black mt-12 mb-24">
                <Image
                    src="/images/Gigmote Asset 4.jpg"
                    alt="Solutions in action"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hugo-black/90 via-transparent to-hugo-black/20"></div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center px-6">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                            Real Integration
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                            An extension of your team.
                        </h2>
                    </div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
