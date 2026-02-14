"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Zap, Globe, Users, Rocket, Shield, TrendingUp, CheckCircle2, ArrowRight, Terminal, Cpu, Database, Sparkles } from "lucide-react";

export default function HireADevPage() {
    const roles = [
        {
            icon: Code,
            title: "Full Stack",
            tech: "React • Next.js • Node.js"
        },
        {
            icon: Cpu,
            title: "AI/ML",
            tech: "OpenAI • Anthropic • LangChain"
        },
        {
            icon: Database,
            title: "Backend",
            tech: "Python • Go • Microservices"
        },
        {
            icon: Terminal,
            title: "DevOps",
            tech: "AWS • Kubernetes • Terraform"
        }
    ];

    const process = [
        {
            step: "01",
            title: "Tell Us What You Need",
            icon: Code,
            description: "Share your requirements, tech stack, and timeline"
        },
        {
            step: "02",
            title: "We Match You",
            icon: Zap,
            description: "Get 2-3 pre-vetted developers within 48 hours"
        },
        {
            step: "03",
            title: "Interview & Hire",
            icon: Users,
            description: "Meet candidates, pick your fit, onboard seamlessly"
        },
        {
            step: "04",
            title: "Ship Faster",
            icon: Rocket,
            description: "Your new developer integrates and starts shipping"
        }
    ];

    return (
        <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
            <Navbar />

            {/* Futuristic Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-hugo-black">
                    <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
                    {/* Animated Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                    <BackgroundMotion variant="dark" className="z-0" />
                </div>

                {/* Floating Code Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-20 right-10 w-32 h-32 bg-hugo-gold/10 rounded-2xl backdrop-blur-sm border border-hugo-gold/20 flex items-center justify-center text-4xl text-hugo-gold"
                >
                    {'</>'}
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-20 left-10 w-40 h-40 bg-hugo-gold/10 rounded-full backdrop-blur-sm border border-hugo-gold/20 flex items-center justify-center text-5xl text-hugo-gold"
                >
                    {'{}'}
                </motion.div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hugo-gold/20 border border-hugo-gold/30 text-hugo-gold text-sm font-semibold">
                                <Sparkles size={16} />
                                <span>Hire Elite Developers</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                Build with the <span className="text-hugo-gold">best developers</span> in the world
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed">
                                Full-time, vetted developers who integrate directly into your team. 
                                Ship faster with talent that writes clean code and ships on time.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                        Hire a Developer
                                        <ArrowRight size={18} className="ml-2" />
                                    </Button>
                                </Link>
                                <Link href="/careers">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-black">
                                        Apply as Developer
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Visual Hero Element */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-hugo-gold/10 rounded-3xl backdrop-blur-xl border border-hugo-gold/20 p-8">
                                {/* Code Terminal Mockup */}
                                <div className="bg-hugo-black/90 rounded-xl p-6 h-full flex flex-col">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex-1 font-mono text-hugo-gold text-sm space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-hugo-gold">$</span>
                                            <span className="animate-pulse">npm run dev</span>
                                        </div>
                                        <div className="text-white/60">✓ Server running on port 3000</div>
                                        <div className="text-white/60">✓ Ready in 2.3s</div>
                                        <div className="mt-4">
                                            <div className="text-hugo-gold">const</div>
                                            <div className="text-hugo-gold ml-4">developer</div>
                                            <div className="text-white ml-4">=</div>
                                            <div className="text-hugo-gold ml-4">'elite'</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats - Visual */}
            <MaskSection variant="slideUp" className="py-20 md:py-24 bg-white relative overflow-hidden">
                <BackgroundMotion variant="minimal" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { number: "100+", label: "Developers Placed", icon: Users },
                            { number: "2-4 weeks", label: "Time to Start", icon: Zap },
                            { number: "90%+", label: "Retention Rate", icon: TrendingUp }
                        ].map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="bg-gradient-to-br from-hugo-cream to-white rounded-3xl p-8 border border-hugo-black/5 hover:shadow-2xl transition-all">
                                        <div className="w-16 h-16 rounded-2xl bg-hugo-gold/20 flex items-center justify-center mb-4">
                                            <Icon size={32} className="text-hugo-black" />
                                        </div>
                                        <div className="text-5xl font-bold text-hugo-black mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-hugo-black/60 font-medium">{stat.label}</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </MaskSection>

            {/* Roles - Visual Cards — clone-style */}
            <MaskSection variant="clipUp" className="py-24 md:py-28 bg-hugo-cream relative overflow-hidden">
                <BackgroundMotion variant="light" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <FadeInOnScroll className="text-center mb-16">
                        <SectionLabel>What We Build</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Full-stack talent across modern tech stacks</h2>
                        <p className="text-xl text-hugo-black/60">React, Node, AI/ML, DevOps, and more.</p>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {roles.map((role, idx) => {
                            const Icon = role.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative"
                                >
                                    <div className="bg-white rounded-3xl p-8 h-full border border-hugo-black/5 hover:shadow-xl transition-all">
                                        <div className="w-16 h-16 bg-hugo-gold/20 rounded-2xl flex items-center justify-center mb-6">
                                            <Icon size={32} className="text-hugo-black" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-hugo-black mb-2">{role.title}</h3>
                                        <p className="text-hugo-black/70 text-sm">{role.tech}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </MaskSection>

            {/* Process - Visual Timeline */}
            <section className="py-24 bg-hugo-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
                <BackgroundMotion variant="dark" />
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">How It Works</h2>
                        <p className="text-xl text-white/60">Simple. Fast. Effective.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative"
                            >
                                {/* Connector Line */}
                                {idx < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-hugo-gold/30 z-0">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-hugo-gold rounded-full"></div>
                                    </div>
                                )}
                                
                                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all h-full">
                                    {(() => {
                                        const Icon = item.icon;
                                        return (
                                            <div className="w-16 h-16 rounded-2xl bg-hugo-gold/20 flex items-center justify-center mb-4">
                                                <Icon size={32} className="text-hugo-gold" />
                                            </div>
                                        );
                                    })()}
                                    <div className="text-sm font-semibold text-hugo-gold mb-2">{item.step}</div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Showcase - Tech Stack */}
            <section className="py-24 bg-white relative overflow-hidden">
                <BackgroundMotion variant="minimal" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Work With</h2>
                        <p className="text-lg text-hugo-black/60">Modern stacks. Proven results.</p>
                    </div>

                    {/* Visual Tech Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "React", "Next.js", "Node.js", "Python",
                            "AI/ML", "AWS", "Docker", "Kubernetes"
                        ].map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-hugo-cream rounded-2xl p-6 aspect-square flex items-center justify-center border border-hugo-black/10 text-hugo-black font-bold text-lg shadow-lg hover:shadow-2xl hover:bg-hugo-gold/10 transition-all cursor-pointer"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual CTA */}
            <section className="py-32 bg-hugo-black text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
                <BackgroundMotion variant="dark" />
                {/* Animated Background Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-hugo-gold/20 rounded-full"
                ></motion.div>
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-hugo-gold/10 rounded-full"
                ></motion.div>

                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-hugo-gold/20 flex items-center justify-center mx-auto mb-4">
                            <Rocket size={48} className="text-hugo-gold" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6">
                            Ready to <span className="text-hugo-gold">ship faster</span>?
                        </h2>
                        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                            Get matched with elite developers in days, not months. 
                            Full-time talent that integrates seamlessly into your team.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                    Hire a Developer Now
                                    <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </Link>
                            <Link href="/careers">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-black">
                                    Apply as Developer
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
