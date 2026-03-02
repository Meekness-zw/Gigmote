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

export default function IndustriesPage() {
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
            <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex min-h-[55vh] bg-hugo-black text-white">
                <motion.div
                    style={{ y: yTransform }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/A product manager and software team planning a tech roadmap on digital whiteboard screens, agile sprint boards and UX wireframes visible, sleek tech office or remote work setup, clean modern business .jpg"
                        alt="Industry teams collaborating"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hugo-black via-hugo-black/80 to-hugo-black/40"></div>
                </motion.div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center justify-center">
                    <FadeInOnScroll>
                        <SectionLabel variant="dark">Focus Areas</SectionLabel>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                            <AnimatedText text="Deep domain expertise." variant="words" />
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                            We don't place generalists. We build specialized teams that understand the language, compliance, and velocity of your specific industry.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Premium Sector Cards Grid */}
            <MaskSection variant="slideUp" className="py-24 -mt-16 lg:-mt-24 relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {siteContent.industries.map((industry, index) => {
                            const Icon = industry.icon;
                            // Assign a background image based on index for variety
                            const bgImages = [
                                "/images/Gigmote Asset 3.jpg",
                                "/images/Gigmote Asset 4.jpg",
                                "/images/AI Curiosity lab in the rainforset jungle of africa in a call centre setting- bright setting, icons flying , glass office setting add people (2).jpg",
                                "/images/create an image  wit digitally empowered people in .jpg"
                            ];
                            const bgImage = bgImages[index % bgImages.length];

                            return (
                                <motion.div
                                    key={industry.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="h-full"
                                >
                                    <Link
                                        href={`/industries/${industry.slug}`}
                                        className="group relative block rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] h-full min-h-[420px]"
                                    >
                                        {/* Card Background Image (Hidden until hover) */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                                            <Image
                                                src={bgImage}
                                                alt={industry.title}
                                                fill
                                                className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-hugo-black/90 mix-blend-multiply"></div>
                                        </div>

                                        {/* Default Card Background */}
                                        <div className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-500 z-0"></div>

                                        {/* Content container */}
                                        <div className="relative z-10 p-10 h-full flex flex-col justify-between border border-transparent group-hover:border-white/10 rounded-[2.5rem] transition-colors duration-500">

                                            <div>
                                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-hugo-black border border-gray-100 group-hover:bg-white/10 group-hover:text-hugo-gold group-hover:border-white/20 transition-all duration-300 shadow-sm backdrop-blur-md">
                                                    <Icon size={32} strokeWidth={1.5} />
                                                </div>

                                                <h3 className="text-2xl font-bold text-hugo-black group-hover:text-white mb-4 transition-colors duration-500">
                                                    {industry.title}
                                                </h3>

                                                <p className="text-hugo-black/60 group-hover:text-white/70 leading-relaxed font-light transition-colors duration-500 line-clamp-4">
                                                    {industry.description}
                                                </p>
                                            </div>

                                            <div className="flex items-center mt-8 text-sm font-bold uppercase tracking-widest text-hugo-black/40 group-hover:text-hugo-gold transition-colors duration-500 pt-6 border-t border-gray-100 group-hover:border-white/20">
                                                Explore Sector <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </div>

                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </MaskSection>

            {/* Edge-to-edge Visual Capability */}
            <section className="py-0 relative h-[50vh] w-full overflow-hidden bg-hugo-black mt-12 mb-24">
                <Image
                    src="/images/A connected global map glowing with nodes representing remote team members, digital lines connecting cities around the world, concept of global collaboration and outsourcing, futuristic but minimal de.jpg"
                    alt="Global Industry Presence"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-hugo-black/90 via-hugo-black/50 to-transparent"></div>

                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Built for complex workflows.
                            </h2>
                            <p className="text-xl text-white/70 font-light mix-blend-screen">
                                From HIPAA-compliant healthcare support to highly secure FinTech DevOps, we map the exact tools and talent required for rigorous environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
