"use client";

import { Button } from "../ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { eases } from "@/utils/animations";
import { AnimatedText } from "../ui/AnimatedText";

interface HeroProps {
    variant?: "home" | "service" | "industry" | "pricing" | "company" | "centered";
    title?: string;
    subtitle?: string;
    description?: string;
}

export const Hero = ({
    variant = "home",
    title = "Built to make you better.",
    subtitle = "Outsourcing+",
    description = "Precision, trust, and operational excellence. Domain expertise meets modern delivery for teams that scale.",
}: HeroProps) => {

    const isHome = variant === "home";
    const isCentered = isHome || variant === "industry" || variant === "pricing" || variant === "company";
    const isDark = variant === "industry"; // Only industry uses the dark overlay for now

    return (
        <section className={`relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden items-center flex ${isHome ? 'min-h-[92vh]' : 'min-h-[60vh]'}`}>
            {/* Background for Industry Variant */}
            {isDark && (
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-hugo-black/80 z-10"></div>
                    <div
                        className="w-full h-full bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('/images/global bpo advisory.jpg')" }}
                    ></div>
                </div>
            )}

            {/* Subtle decorative line-art for the home hero (matches the reference mock) */}
            {isHome && (
                <>
                    <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute right-0 bottom-0 w-[420px] md:w-[560px] opacity-40 text-hugo-black/30"
                        viewBox="0 0 600 600"
                        fill="none"
                    >
                        <path d="M600 80 Q 320 180 360 380 T 200 600" stroke="currentColor" strokeWidth="1" />
                        <path d="M600 160 Q 380 240 420 420 T 280 600" stroke="currentColor" strokeWidth="1" />
                        <path d="M600 240 Q 440 320 480 460 T 360 600" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 top-32 w-[300px] md:w-[380px] opacity-30 text-hugo-black/25"
                        viewBox="0 0 400 400"
                        fill="none"
                    >
                        <path d="M0 80 Q 140 60 180 200 T 320 380" stroke="currentColor" strokeWidth="1" />
                        <path d="M0 160 Q 160 140 200 260 T 360 400" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </>
            )}

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 gap-12 lg:gap-24 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: eases.expo }}
                        className={`space-y-8 ${isCentered ? 'mx-auto text-center max-w-4xl' : 'max-w-2xl'}`}
                    >
                        {!isCentered && !isHome && (
                            <div className="inline-block relative">
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute bottom-0 left-0 h-[2px] bg-hugo-black"
                                />
                                <span className="text-xl font-medium text-hugo-black pb-1 block">
                                    {subtitle}
                                </span>
                            </div>
                        )}

                        {isHome ? (
                            <div className="font-serif text-hugo-black tracking-tight leading-[1.05] flex flex-col items-center gap-6 md:gap-8">
                                <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-normal">
                                    <AnimatedText text="Source the Minds Building the Future." variant="words" />
                                </h1>

                                <motion.span
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: 1, opacity: 1 }}
                                    transition={{ delay: 0.35, duration: 0.9, ease: eases.expo }}
                                    className="block h-px w-32 md:w-44 bg-hugo-black/40 origin-center"
                                />

                                <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-normal">
                                    <AnimatedText text="Deploy the Systems That Compound Their Impact." variant="words" delay={0.2} />
                                </h2>
                            </div>
                        ) : (
                            <h1 className={`text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] ${isDark ? 'text-white' : 'text-hugo-black'}`}>
                                <AnimatedText text={title} variant="words" />
                            </h1>
                        )}

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6, ease: eases.smooth }}
                            className={`text-base md:text-lg leading-relaxed ${isCentered ? 'mx-auto max-w-2xl' : 'max-w-xl'} ${isDark ? 'text-white/80' : 'text-hugo-black/70'}`}
                        >
                            {isHome
                                ? "The most consequential constraint facing high-growth organizations isn't capital. It's access to elite AI and technical talent and the operational infrastructure to make them perform. Gigmote solves both."
                                : description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.55, ease: eases.smoothStrong }}
                            className={`flex flex-col sm:flex-row gap-4 pt-2 ${isCentered ? 'justify-center' : ''}`}
                        >
                            {isHome ? (
                                <>
                                    <Link href="/contact">
                                        <Button size="lg" variant="primary">
                                            Book a Strategy Call
                                        </Button>
                                    </Link>
                                    <Link href="/services">
                                        <Button size="lg" variant="outline">
                                            Explore Services
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <Link href="/contact">
                                    <Button size="lg" variant={isDark ? 'secondary' : 'primary'}>
                                        {isDark ? "Consult an Expert" : "Build your Dream Team"}
                                    </Button>
                                </Link>
                            )}
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Background Gradient */}
            <div className={`absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b ${isDark ? 'from-black/50' : 'from-white/50'} to-transparent pointer-events-none`}></div>
        </section>
    );
};
