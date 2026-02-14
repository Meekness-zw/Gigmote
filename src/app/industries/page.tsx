"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
};

export default function IndustriesPage() {
    return (
        <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
            <BackgroundMotion variant="light" />
            <Navbar />

            <Hero
                variant="industry"
                title="Focus Industries"
                subtitle="Expertise"
                description="Traditional outsourcing focuses on cost. We focus on performance, reliability, and scalability — with deep domain knowledge in the world's most dynamic sectors."
            />

            <section className="py-24 -mt-20 relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {siteContent.industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <motion.div key={industry.slug} variants={item}>
                                    <Link
                                        href={`/industries/${industry.slug}`}
                                        className="group block bg-white rounded-3xl p-8 shadow-lg border border-hugo-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
                                    >
                                        <div className="w-14 h-14 bg-hugo-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-hugo-black group-hover:text-white transition-colors duration-300">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-xl font-bold text-hugo-black mb-3">
                                            {industry.title}
                                        </h3>

                                        <p className="text-hugo-black/60 text-sm leading-relaxed mb-8 flex-grow">
                                            {industry.description}
                                        </p>

                                        <div className="flex items-center text-sm font-medium text-hugo-black/40 group-hover:text-hugo-black transition-colors mt-auto">
                                            View Sector <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
