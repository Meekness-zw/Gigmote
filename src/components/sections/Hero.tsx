"use client";

import { Button } from "../ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { eases } from "@/utils/animations";
import { FloatingHeroVisual } from "../ui/FloatingHeroVisual";
import { AnimatedText } from "../ui/AnimatedText";

interface HeroProps {
    variant?: "home" | "service" | "industry" | "pricing" | "company" | "centered";
    title?: string;
    subtitle?: string;
    description?: string;
    imageSrc?: string;
}

export const Hero = ({
    variant = "home",
    title = "Built to make you better.",
    subtitle = "Outsourcing+",
    description = "Precision, trust, and operational excellence. Domain expertise meets modern delivery for teams that scale.",
    imageSrc = "/images/Gigmote Asset 3.jpg",
}: HeroProps) => {

    const isHome = variant === "home";
    const hasRightVisual = isHome; // Floating pics + circles only on home page
    const isCentered = !hasRightVisual && (variant === "industry" || variant === "pricing" || variant === "company");
    const isDark = variant === "industry"; // Only industry uses the dark overlay for now

    return (
        <section className={`relative pt-36 pb-20 md:pt-52 md:pb-32 overflow-hidden items-center flex min-h-[${isHome ? '90vh' : '60vh'}]`}>
            {/* Background for Industry Variant */}
            {isDark && (
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-hugo-black/80 z-10"></div>
                    {/* Fallback pattern if no specific industry image */}
                    <div
                        className="w-full h-full bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('/images/global bpo advisory.jpg')" }}
                    ></div>
                </div>
            )}

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className={`grid grid-cols-1 ${hasRightVisual ? "lg:grid-cols-2" : ""} gap-12 lg:gap-24 items-center`}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: eases.expo }}
                        className={`space-y-8 max-w-2xl ${isCentered ? 'mx-auto text-center' : ''}`}
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

                        <h1 className={`text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] ${isDark ? 'text-white' : 'text-hugo-black'}`}>
                            {isHome ? (
                                <>
                                    <div className="flex flex-col gap-2">
                                        <div className="block">
                                            <AnimatedText text="Build Global Teams." variant="words" />
                                        </div>
                                        <div className="block">
                                            <AnimatedText text="Automate Smarter." variant="words" delay={0.15} />
                                        </div>
                                        <div className="block">
                                            <span className="relative inline-block">
                                                <AnimatedText text="Scale Faster." variant="words" delay={0.3} />
                                                <motion.svg
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ delay: 1.0, duration: 1.2, ease: eases.expo }}
                                                    className="absolute w-full h-3 -bottom-1 left-0 text-hugo-gold/80"
                                                    viewBox="0 0 100 10"
                                                    preserveAspectRatio="none"
                                                >
                                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                                </motion.svg>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <AnimatedText text={title} variant="words" />
                            )}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: eases.smooth }}
                            className={`text-lg md:text-xl leading-relaxed max-w-lg ${isCentered ? 'mx-auto' : ''} ${isDark ? 'text-white/80' : 'text-hugo-black/70'}`}
                        >
                            {isHome
                                ? "We connect UK and North American companies with high-performing African professionals, design outsourcing models that actually work, and deploy AI agents that reduce operational load  without sacrificing quality or trust."
                                : description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.55, ease: eases.smoothStrong }}
                            className={`flex flex-col sm:flex-row gap-4 pt-4 ${isCentered ? 'justify-center' : ''}`}
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

                    {/* Animated floating pics + circles (Home, Service, or when showRightVisual) */}
                    {hasRightVisual && (
                        <FloatingHeroVisual
                            image1={isHome ? "/images/Gigmote Asset 3.jpg" : imageSrc}
                            image2="/images/Gigmote Asset 4.jpg"
                            alt1="Global team collaboration"
                            alt2="Operational excellence in action"
                        />
                    )}
                </div>
            </div>

            {/* Background Gradient */}
            <div className={`absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b ${isDark ? 'from-black/50' : 'from-white/50'} to-transparent pointer-events-none`}></div>
        </section>
    );
};
