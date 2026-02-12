import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Accordion } from "@/components/ui/Accordion";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteContent } from "@/data/content";

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
            <Navbar />

            <Hero
                variant="company"
                title="Insights, Playbooks & FAQ"
                description="Content to help you think more strategically about global staffing, outsourcing, and AI automation."
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-3xl font-bold">Content Hub</h2>
                            <p className="text-hugo-black/70 max-w-2xl">
                                Use these ideas as a starting point for your content engine. In a production build,
                                these would be real articles and resources.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "How to combine global teams with AI without breaking quality",
                                        tag: "Strategy",
                                    },
                                    {
                                        title: "A practical blueprint for your first 10 global hires",
                                        tag: "Playbook",
                                    },
                                    {
                                        title: "When BPO makes sense (and when it doesn’t)",
                                        tag: "Advisory",
                                    },
                                    {
                                        title: "Designing KPIs for human + AI delivery models",
                                        tag: "Operations",
                                    },
                                ].map((post) => (
                                    <div key={post.title} className="p-5 rounded-2xl border border-hugo-black/5 bg-hugo-cream/60">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hugo-black/50 mb-2">
                                            {post.tag}
                                        </p>
                                        <h3 className="text-sm font-semibold text-hugo-black leading-snug">
                                            {post.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
                            <Accordion items={siteContent.faqs} />
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    );
}
