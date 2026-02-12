import { notFound } from "next/navigation";
import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { StatTicker } from "@/components/ui/StatTicker";
import { Shield, Globe, Award } from "lucide-react";

export async function generateStaticParams() {
    return siteContent.industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
    const industry = siteContent.industries.find((s) => s.slug === params.slug);

    if (!industry) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
            <Navbar />

            <Hero
                variant="industry"
                title={industry.title}
                subtitle="Industries"
                description={industry.description}
            />

            {/* Industry Specific Value Prop */}
            <section className="py-24 -mt-20 relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-hugo-black/5">
                            <Shield className="text-hugo-gold mb-4" size={40} />
                            <h3 className="text-xl font-bold mb-2">Compliance First</h3>
                            <p className="text-hugo-black/60">Rigorous adherence to industry standards and data protection regulations.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-hugo-black/5">
                            <Globe className="text-hugo-teal mb-4" size={40} />
                            <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
                            <p className="text-hugo-black/60">Support your users around the clock in over 50 languages.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-hugo-black/5">
                            <Award className="text-hugo-sage mb-4" size={40} />
                            <h3 className="text-xl font-bold mb-2">Expert Teams</h3>
                            <p className="text-hugo-black/60">Agents recruited specifically for {industry.title} domain expertise.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Body */}
            <section className="py-12 md:py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-hugo-black text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                Why top {industry.title} companies choose Gigmote.
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed mb-8">
                                The {industry.title} landscape is moving faster than ever. You need a partner who understands the nuances of your market, from regulatory shifts to user expectations.
                            </p>
                            <div className="h-1 w-24 bg-hugo-gold mb-8"></div>
                            <p className="text-white/60">
                                We build dedicated teams that function as a seamless extension of your HQ, preserving your culture while accelerating your operations.
                            </p>
                        </div>

                        {/* Decorative background blur */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
