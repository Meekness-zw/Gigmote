"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

export default function CaseStudiesPage() {
    return (
        <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
            <Navbar />

            {/* Simple Hero */}
            <section className="pt-28 pb-12 md:pt-32 md:pb-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <FadeInOnScroll className="space-y-4 text-center md:text-left">
                        <SectionLabel>Case Studies</SectionLabel>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-hugo-black">
                            Proof of impact from real companies.
                        </h1>
                        <p className="text-lg md:text-xl text-hugo-black/70 max-w-3xl mx-auto md:mx-0">
                            How we’ve helped teams reduce costs, improve performance, and scale operations with
                            global talent and practical automation.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Case Studies List */}
            <section className="pb-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-12">
                        {siteContent.caseStudies.map((study, index) => (
                            <MaskSection
                                key={study.id}
                                variant="slideUp"
                                className="bg-white rounded-3xl shadow-xl border border-hugo-black/5 overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)]">
                                    {/* Image side */}
                                    <div className="relative h-56 md:h-full">
                                        <Image
                                            src={`/images/Powered by People. Enhanced by Technology._Connecting international companies with high-quality African outsourcing partners, while empowering entrepreneurs to build sustainable BPO operations.-create(${10 + index}).jpg`}
                                            alt={study.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                        <div className="absolute bottom-5 left-5 right-5 text-white">
                                            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 mb-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-hugo-gold" />
                                                {study.industry}
                                            </p>
                                            <h2 className="text-xl md:text-2xl font-bold leading-snug drop-shadow">
                                                {study.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Text side */}
                                    <div className="p-8 md:p-10 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-1">
                                            <div className="space-y-2">
                                                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-hugo-black/50">
                                                    The Challenge
                                                </h3>
                                                <p className="text-sm md:text-base text-hugo-black/80 leading-relaxed">
                                                    {study.challenge}
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-hugo-black/50">
                                                    The Solution
                                                </h3>
                                                <p className="text-sm md:text-base text-hugo-black/80 leading-relaxed">
                                                    {study.solution}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-hugo-black/5">
                                            <div className="bg-hugo-black text-hugo-gold rounded-2xl p-4 md:p-5 flex flex-col justify-center">
                                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-hugo-gold/70 mb-2">
                                                    Headline Result
                                                </span>
                                                <p className="text-sm md:text-base font-semibold text-hugo-gold leading-snug">
                                                    {study.results[0]}
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 rounded-2xl p-4 md:p-5 border border-gray-100">
                                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-hugo-black/40 mb-2 block">
                                                    Operational Impact
                                                </span>
                                                <p className="text-sm md:text-base text-hugo-black/80 leading-snug">
                                                    {study.results[1]}
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 rounded-2xl p-4 md:p-5 border border-gray-100">
                                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-hugo-black/40 mb-2 block">
                                                    Financial Outcome
                                                </span>
                                                <p className="text-sm md:text-base text-hugo-black/80 leading-snug">
                                                    {study.results[2]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MaskSection>
                        ))}
                    </div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
