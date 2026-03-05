"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { eases } from "@/utils/animations";
import { Upload, File, CheckCircle2, ChevronDown, Rocket, Code, Database, BrainCircuit, Terminal } from "lucide-react";

export default function JoinGigmotePage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Accordion state for specialty selection
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
    const [otherSpecialty, setOtherSpecialty] = useState<string>("");
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [cvLink, setCvLink] = useState<string>("");
    const [cvFile, setCvFile] = useState<File | null>(null);

    // Specialty options with icons (broad roles, not just engineering)
    const specialties = [
        { id: "eng-systems", name: "Engineering / Systems", icon: Code },
        { id: "ai-data", name: "AI / Data & Analytics", icon: BrainCircuit },
        { id: "product-strategy", name: "Product / Strategy / Consulting", icon: Database },
        { id: "ops-delivery", name: "Operations / Delivery / Enablement", icon: Terminal },
        { id: "other", name: "Other Expertise", icon: Rocket },
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        if (!selectedSpecialty) {
            setError("Please select a specialty.");
            return;
        }
        if (!cvLink.trim() && !cvFile) {
            setError("Please add a CV / portfolio link or upload your CV.");
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        let specialtyValue = selectedSpecialty;
        if (selectedSpecialty === "Other Expertise") {
            if (!otherSpecialty.trim()) {
                setError("Please specify your expertise.");
                return;
            }
            specialtyValue = `Other: ${otherSpecialty}`;
        }

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_JOIN_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setError("Application form is not configured. Please contact the site owner.");
            return;
        }

        const templateParams = {
            name: formData.get("name") || "",
            email: formData.get("email") || "",
            specialty: specialtyValue,
            cv_link: cvLink || "",
            profile_summary: formData.get("profile_summary") || "",
            cv_file_name: cvFile ? cvFile.name : "",
        };

        setIsSubmitting(true);

        try {
            const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

            if (result.status === 200) {
                setSuccess(true);
            } else {
                setError("Failed to submit. Please try again later.");
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="relative min-h-screen bg-white selection:bg-hugo-gold/30 flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col lg:flex-row pt-24 lg:pt-0">

                {/* Left Side - Visual & Context */}
                <div className="w-full lg:w-5/12 xl:w-1/2 bg-hugo-black relative flex flex-col justify-center min-h-[50vh] lg:min-h-screen p-8 lg:p-16 xl:p-24 text-white overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/Gigmote Asset 4.jpg"
                            alt="Join Gigmote Engineering"
                            fill
                            className="object-cover opacity-40 mix-blend-overlay grayscale"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-hugo-black via-hugo-black/90 to-transparent"></div>

                        {/* Decorative glowing orb */}
                        <div className="absolute top-0 left-0 w-96 h-96 bg-hugo-gold/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    </div>

                    <div className="relative z-10 max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: eases.expo }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hugo-gold/20 border border-hugo-gold/30 text-hugo-gold text-sm font-bold tracking-widest uppercase mb-8"
                        >
                            Careers
                        </motion.div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                            <AnimatedText text="Build the future remotely." variant="words" />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl text-white/60 leading-relaxed font-light mb-12"
                        >
                            We're looking for top 1% engineers, AI specialists, and operators to join our vetted talent network. Work with global clients on complex, scaling infrastructures.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="space-y-4 pt-8 border-t border-white/10"
                        >
                            {[
                                "Global client exposure",
                                "Fully remote flexibility",
                                "Upskilling in AI & Automation tools"
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 size={20} className="text-hugo-gold" />
                                    <span className="text-white/80">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-7/12 xl:w-1/2 bg-hugo-cream flex flex-col justify-center items-center py-20 px-6 lg:px-12 xl:px-24 min-h-screen">
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: eases.expo }}
                        className="w-full max-w-2xl"
                    >
                        {success ? (
                            <div className="bg-white rounded-[2rem] shadow-xl border border-hugo-black/5 p-12 text-center">
                                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h2 className="text-3xl font-bold text-hugo-black mb-4">Application Received!</h2>
                                <p className="text-hugo-black/60 text-lg mb-8">
                                    Thank you for applying to join Gigmote. Our talent team will review your CV and be in touch soon.
                                </p>
                                <Button variant="outline" className="w-full" onClick={() => window.location.reload()}>
                                    Submit another profile
                                </Button>
                            </div>
                        ) : (
                            <div className="bg-white rounded-[2rem] shadow-xl border border-hugo-black/5 p-8 md:p-12">
                                <div className="mb-8 border-b border-gray-100 pb-8">
                                    <h2 className="text-3xl font-bold text-hugo-black tracking-tight mb-2">
                                        Tell us how you like to work.
                                    </h2>
                                    <p className="text-hugo-black/60 font-light">
                                        Share your background, what you do best, and the kinds of problems and teams you’re excited to work with. We’ll only reach out for opportunities that match that profile.
                                    </p>
                                </div>

                                {error && (
                                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-8">

                                    {/* Basic Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">Your name *</label>
                                            <input
                                                name="name"
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Email *
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                placeholder="jane@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Specialty Custom Accordion Selection */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                            Your primary expertise *
                                        </label>
                                        <div className="relative">
                                            {/* Trigger */}
                                            <button
                                                type="button"
                                                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                                                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border bg-gray-50 text-hugo-black transition-colors ${isAccordionOpen ? "border-hugo-black" : "border-gray-200"
                                                    }`}
                                            >
                                                <span className={selectedSpecialty ? "font-medium" : "text-gray-400"}>
                                                    {selectedSpecialty || "What type of work do you do best?"}
                                                </span>
                                                <ChevronDown size={20} className={`transition-transform duration-300 ${isAccordionOpen ? "rotate-180" : ""}`} />
                                            </button>

                                            {/* Dropdown / Accordion Body */}
                                            <AnimatePresence>
                                                {isAccordionOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden z-20"
                                                    >
                                                        <div className="flex flex-col">
                                                            {specialties.map((spec) => {
                                                                const Icon = spec.icon;
                                                                const isSelected = selectedSpecialty === spec.name;
                                                                return (
                                                                    <button
                                                                        key={spec.id}
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setSelectedSpecialty(spec.name);
                                                                            setIsAccordionOpen(false);
                                                                        }}
                                                                        className={`flex items-center gap-4 px-6 py-4 text-left transition-colors ${isSelected ? "bg-hugo-cream font-bold" : "hover:bg-gray-50"
                                                                            }`}
                                                                    >
                                                                        <Icon size={20} className={isSelected ? "text-hugo-gold" : "text-gray-400"} />
                                                                        <span className="text-hugo-black">{spec.name}</span>
                                                                        {isSelected && <CheckCircle2 size={16} className="ml-auto text-hugo-black" />}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Conditional Other Expertise Input */}
                                        <AnimatePresence>
                                            {selectedSpecialty === "Other Expertise" && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="flex flex-col gap-2 pt-4">
                                                        <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                            Briefly describe your expertise *
                                                        </label>
                                                        <input
                                                            value={otherSpecialty}
                                                            onChange={(e) => setOtherSpecialty(e.target.value)}
                                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                            placeholder="e.g. Staff-level platform engineer, AI product strategist, revenue operations lead"
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* CV / Portfolio Link or Upload */}
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Where can we see your work?
                                            </label>
                                            <p className="text-xs text-hugo-black/60">
                                                Share a link to your CV or portfolio, or upload your CV directly. We review every profile by hand.
                                            </p>
                                        </div>
                                        <input
                                            name="cv_link"
                                            type="url"
                                            value={cvLink}
                                            onChange={(e) => setCvLink(e.target.value)}
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                            placeholder="https://drive.google.com/your-cv or portfolio URL"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-semibold text-hugo-black/70">
                                                Or upload your CV
                                            </span>
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0] ?? null;
                                                    setCvFile(file);
                                                }}
                                                className="w-full text-sm text-hugo-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-hugo-black file:text-white hover:file:bg-hugo-black/90"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        variant="primary"
                                        className="w-full mt-4 font-bold relative overflow-hidden"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                                                Submitting...
                                            </span>
                                        ) : (
                                            "Submit Application"
                                        )}
                                    </Button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
