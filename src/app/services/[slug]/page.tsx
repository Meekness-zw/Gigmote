import { notFound } from "next/navigation";
import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { StatTicker } from "@/components/ui/StatTicker";
import { Accordion } from "@/components/ui/Accordion";
import { CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
    return siteContent.services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = siteContent.services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
            <Navbar />

            <Hero
                variant="service"
                title={service.title}
                subtitle={service.slogan || "Our Services"}
                description={service.description}
            />

            {/* Features & "Best For" Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hugo-black">
                                {service.slogan || "Built for scale."}
                            </h2>
                            <p className="text-lg text-hugo-black/70 mb-8 leading-relaxed">
                                We don&apos;t just provide specialized talent; we provide a fully managed operating model.
                                From training to QA, we handle the heavy lifting so you can focus on growth.
                            </p>

                            <div className="space-y-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-hugo-black/5 hover:shadow-md transition-all">
                                        <CheckCircle2 className="text-hugo-teal shrink-0" size={24} />
                                        <span className="font-medium text-hugo-black/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Icon visual */}
                            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-hugo-black/5 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-hugo-cream to-white opacity-50"></div>
                                <service.icon size={120} className="text-hugo-gold relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />

                                {/* Decorative circles */}
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-hugo-teal/10 rounded-full blur-2xl"></div>
                                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-hugo-orange/10 rounded-full blur-2xl"></div>
                            </div>

                            {/* Best For Section (if available) */}
                            {service.bestFor && (
                                <div className="bg-hugo-black text-white p-8 rounded-3xl">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-hugo-gold inline-block"></span>
                                        Best For
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {service.bestFor.map((item, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Pricing (if available) */}
                            {service.pricing && (
                                <div className="bg-hugo-gold/20 p-8 rounded-3xl border border-hugo-gold/30">
                                    <h3 className="text-lg font-bold text-hugo-black mb-1">Starting At</h3>
                                    <p className="text-3xl font-bold text-hugo-black">{service.pricing}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <Accordion items={siteContent.faqs} />
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
