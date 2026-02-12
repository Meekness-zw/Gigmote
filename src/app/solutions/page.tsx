"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
            <Navbar />

            <Hero
                variant="service"
                title="Our Solutions"
                subtitle="Services"
                description="Comprehensive outsourcing solutions tailored to your unique business needs."
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {siteContent.services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <motion.div key={service.slug} variants={item}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="group flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-hugo-black/5 bg-hugo-cream/30 hover:bg-hugo-cream transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden h-full"
                                    >
                                        <div className="shrink-0">
                                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="text-hugo-black" size={32} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <h3 className="text-2xl font-bold text-hugo-black mb-3">
                                                {service.title}
                                            </h3>

                                            <p className="text-hugo-black/60 text-base leading-relaxed mb-6 flex-grow">
                                                {service.description}
                                            </p>

                                            <div className="flex items-center text-sm font-medium text-hugo-black group-hover:text-hugo-gold transition-colors mt-auto">
                                                Explore Solution <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>

                                        {/* Decorative Hover Blob */}
                                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-hugo-gold/10 rounded-full blur-2xl group-hover:bg-hugo-gold/20 transition-colors duration-500"></div>
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
