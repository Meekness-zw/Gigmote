"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
            <Navbar />

            <Hero
                variant="centered"
                title="The Gigmote Blueprint"
                subtitle="How It Works"
                description="We don’t just find help. We build systems that help your business run without you."
            />

            <section className="py-24 relative overflow-hidden">
                {/* Decorative connecting line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hugo-black/10 hidden lg:block -translate-x-1/2"></div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="space-y-24">
                        {siteContent.howItWorks.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                                >
                                    {/* Step Number Badge */}
                                    <div className="lg:absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-hugo-black text-white flex items-center justify-center font-bold text-2xl border-4 border-hugo-cream z-20 shadow-lg">
                                        {step.step}
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className={`bg-white p-10 rounded-3xl shadow-xl border border-hugo-black/5 hover:-translate-y-2 transition-transform duration-300 relative ${!isEven ? 'lg:text-right' : ''}`}>
                                            <h3 className="text-2xl font-bold text-hugo-black mb-4">
                                                {step.title}
                                            </h3>
                                            <p className="text-lg text-hugo-black/70 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Empty Spacer for the other side */}
                                    <div className="flex-1 hidden lg:block"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-hugo-black text-white text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to automate?</h2>
                    <p className="text-xl text-white/70 mb-12">
                        From operational audits to precision matching, we handle the complexity so you can enjoy the scalability.
                    </p>
                    <div className="p-8 border border-white/20 rounded-3xl inline-block bg-white/5 backdrop-blur-sm">
                        <p className="font-mono text-hugo-gold mb-2">KEY PROMISE</p>
                        <p className="text-2xl font-medium">
                            &quot;We build systems that help your business run without you.&quot;
                        </p>
                    </div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
