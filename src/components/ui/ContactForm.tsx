"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Rocket, Globe } from "lucide-react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("New Gigmote Talent / Strategy Request");
        const bodyLines = [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Company: ${formData.company}`,
            "",
            "Message:",
            formData.message
        ].join("\n");

        const mailto = `mailto:info@gigmote.com?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;
        window.location.href = mailto;
    };

    return (
        <section id="contact" className="py-24 bg-hugo-cream relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-hugo-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-hugo-teal/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Text & Context */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-hugo-black tracking-tight">
                            Ready to build <br /> your dream team?
                        </h2>
                        <p className="text-lg text-hugo-black/70 max-w-lg">
                            Whether you need 5 agents or 500, we design custom outsourcing solutions that fit your culture and KPIs.
                        </p>

                        <div className="pt-8 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white border border-hugo-black/10 flex items-center justify-center text-xl shadow-sm text-hugo-black">
                                    <Rocket size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-hugo-black">Fast Launch</h4>
                                    <p className="text-sm text-hugo-black/60">Teams ready in as little as 2 weeks.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white border border-hugo-black/10 flex items-center justify-center text-xl shadow-sm text-hugo-black">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-hugo-black">Global Talent</h4>
                                    <p className="text-sm text-hugo-black/60">Access top 1% talent worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-hugo-black/5">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-hugo-black">Full Name</label>
                                    <input
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none transition-all bg-hugo-cream/20"
                                        placeholder="Jane Doe"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-hugo-black">Company</label>
                                    <input
                                        name="company"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none transition-all bg-hugo-cream/20"
                                        placeholder="Acme Inc."
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-hugo-black">Work Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none transition-all bg-hugo-cream/20"
                                    placeholder="jane@company.com"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-hugo-black">How can we help?</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none transition-all bg-hugo-cream/20 resize-none"
                                    placeholder="Tell us about your needs..."
                                    onChange={handleChange}
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Get Your Proposal
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
