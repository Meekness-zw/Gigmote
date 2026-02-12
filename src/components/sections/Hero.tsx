"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";

// ... (in the component)

import { motion } from "framer-motion";

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
    description = "We're not traditional outsourcers. We build world-class teams—from customer support to AI data solutions—helping you scale faster and smarter.",
    imageSrc = "/images/hero-1.png"
}: HeroProps) => {

    const isHome = variant === "home";
    const isCentered = variant === "industry" || variant === "pricing" || variant === "company";
    const isDark = variant === "industry"; // Only industry uses the dark overlay for now

    return (
        <section className={`relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden items-center flex min-h-[${isHome ? '90vh' : '60vh'}]`}>
            {/* Background for Industry Variant */}
            {isDark && (
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-hugo-black/80 z-10"></div>
                    {/* Fallback pattern if no specific industry image */}
                    <div className="w-full h-full bg-[url('/images/pattern-bg.png')] bg-cover bg-center opacity-30"></div>
                </div>
            )}

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className={`grid grid-cols-1 ${!isCentered ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-24 items-center`}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
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
                                    Build Global Teams. <br />
                                    <span className="relative inline-block">
                                        Automate Smarter. Scale Faster.
                                        <motion.svg
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                                            className="absolute w-full h-3 -bottom-1 left-0 text-hugo-gold/80"
                                            viewBox="0 0 100 10"
                                            preserveAspectRatio="none"
                                        >
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                        </motion.svg>
                                    </span>
                                </>
                            ) : (
                                title
                            )}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className={`text-lg md:text-xl leading-relaxed max-w-lg ${isCentered ? 'mx-auto' : ''} ${isDark ? 'text-white/80' : 'text-hugo-black/70'}`}
                        >
                            {isHome
                                ? "Gigmote helps businesses hire global talent, implement AI automation, and build outsourcing strategies that actually work."
                                : description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className={`flex flex-col sm:flex-row gap-4 pt-4 ${isCentered ? 'justify-center' : ''}`}
                        >
                            {isHome ? (
                                <>
                                    <Link href="/#contact">
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
                                <Link href="/#contact">
                                    <Button size="lg" variant={isDark ? 'secondary' : 'primary'}>
                                        {isDark ? "Consult an Expert" : "Build your Dream Team"}
                                    </Button>
                                </Link>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Abstract Graphic / Visuals (Only for Home/Service variants) */}
                    {(isHome || variant === "service") && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative h-[500px] w-full hidden md:block"
                        >
                            {/* Decorative Circles Background Layer */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                                    className="w-[600px] h-[600px] border-[40px] border-hugo-gold rounded-full absolute -right-20 -top-20"
                                ></motion.div>
                                <div className="w-[400px] h-[400px] border-[30px] border-hugo-sage rounded-full absolute right-40 top-20"></div>
                            </div>

                            {/* Floating Elements Grid */}
                            <div className="relative z-10 h-full w-full">
                                {/* Image 1 - Top Right */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-0 right-10 w-48 h-48 rounded-full border-4 border-hugo-cream overflow-hidden shadow-xl"
                                >
                                    <Image
                                        src={isHome ? "/images/hero-1.png" : imageSrc}
                                        alt="Professional Team Member"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* Decorative Loop Connector */}
                                <svg className="absolute top-20 right-32 w-64 h-64 text-hugo-gold pointer-events-none z-0" viewBox="0 0 100 100" fill="none">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                        d="M100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                    />
                                </svg>

                                {/* Image 2 - Bottom Left */}
                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-10 left-10 w-56 h-56 rounded-full border-4 border-hugo-cream overflow-hidden shadow-2xl z-20"
                                >
                                    <Image
                                        src="/images/hero-2.png"
                                        alt="Professional Team Member"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* Yellow Circle Accent */}
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-32 right-1/4 w-24 h-24 rounded-full border-[6px] border-hugo-gold z-10"
                                ></motion.div>
                                <div className="absolute top-1/4 left-0 w-16 h-16 rounded-full bg-hugo-teal/50 backdrop-blur-sm z-0"></div>

                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Background Gradient */}
            <div className={`absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b ${isDark ? 'from-black/50' : 'from-white/50'} to-transparent pointer-events-none`}></div>
        </section>
    );
};
