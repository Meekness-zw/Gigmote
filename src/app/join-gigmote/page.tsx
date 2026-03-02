"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { eases } from "@/utils/animations";
import { Upload, File, CheckCircle2, ChevronDown, Rocket, Code, Database, BrainCircuit, Terminal } from "lucide-react";
import { submitRegistration } from "@/app/actions/register"; // Server Action

export default function JoinGigmotePage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    // Accordion state for specialty selection
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
    const [otherSpecialty, setOtherSpecialty] = useState<string>("");
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    // Specialty options with icons
    const specialties = [
        { id: "full-stack", name: "Full Stack Development", icon: Code },
        { id: "backend", name: "Backend / Systems", icon: Database },
        { id: "ai-ml", name: "AI / Machine Learning", icon: BrainCircuit },
        { id: "devops", name: "DevOps / Cloud Ops", icon: Terminal },
        { id: "other", name: "Other Expertise", icon: Rocket },
    ];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        if (!selectedSpecialty) {
            setError("Please select a specialty.");
            return;
        }
        if (!file) {
            setError("Please attach your CV.");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        if (selectedSpecialty === "Other Expertise") {
            if (!otherSpecialty.trim()) {
                setError("Please specify your expertise.");
                setIsSubmitting(false);
                return;
            }
            formData.append("specialty", `Other: ${otherSpecialty}`);
        } else {
            formData.append("specialty", selectedSpecialty);
        }

        // We don't need to manually append the file if the input has `name="cv"`, 
        // but just to be sure we can append the state if needed. It will already be in formData.

        try {
            const response = await submitRegistration(formData);
            if (response.success) {
                setSuccess(true);
                // Reset form or redirect
            } else {
                setError(response.error || "Failed to submit. Please try again.");
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
                                    <h2 className="text-3xl font-bold text-hugo-black tracking-tight mb-2">Apply to the Network</h2>
                                    <p className="text-hugo-black/60 font-light">Tell us about yourself and drop your CV below.</p>
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
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">Full Name *</label>
                                            <input
                                                name="name"
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">Email *</label>
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
                                        <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">Your Specialty *</label>
                                        <div className="relative">
                                            {/* Trigger */}
                                            <button
                                                type="button"
                                                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                                                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border bg-gray-50 text-hugo-black transition-colors ${isAccordionOpen ? "border-hugo-black" : "border-gray-200"
                                                    }`}
                                            >
                                                <span className={selectedSpecialty ? "font-medium" : "text-gray-400"}>
                                                    {selectedSpecialty || "Select your primary discipline"}
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
                                                        <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">Please Specify *</label>
                                                        <input
                                                            value={otherSpecialty}
                                                            onChange={(e) => setOtherSpecialty(e.target.value)}
                                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                            placeholder="E.g. Technical Product Manager"
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* File Upload Area */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">Attach CV *</label>
                                        <div className="relative group">
                                            <input
                                                type="file"
                                                name="cv"
                                                required
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            />
                                            <div className={`w-full flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-10 transition-colors ${file ? "border-hugo-gold bg-hugo-gold/5" : "border-gray-200 bg-gray-50 group-hover:border-hugo-black/30 group-hover:bg-gray-100"
                                                }`}>
                                                {file ? (
                                                    <>
                                                        <File size={32} className="text-hugo-gold mb-4" />
                                                        <p className="font-medium text-hugo-black text-center">{file.name}</p>
                                                        <p className="text-xs text-hugo-black/40 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Upload size={32} className="text-gray-400 mb-4 group-hover:text-hugo-black transition-colors" />
                                                        <p className="font-medium text-hugo-black mb-1">Click to upload or drag & drop</p>
                                                        <p className="text-sm text-gray-500">PDF or Word (max. 10MB)</p>
                                                    </>
                                                )}
                                            </div>
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
