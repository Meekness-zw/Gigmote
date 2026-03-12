"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { eases } from "@/utils/animations";
import { CheckCircle2 } from "lucide-react";

const CORE_SKILL_OPTIONS = [
    "Data Analysis",
    "UX / Product Design",
    "Software Development",
    "CX / Customer Operations",
    "Revenue / Sales Operations",
    "Project / Program Management",
];

export default function JoinGigmotePage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [coreSkills, setCoreSkills] = useState<string[]>([]);
    const [otherCoreSkill, setOtherCoreSkill] = useState<string>("");
    const [yearsExperience, setYearsExperience] = useState<string>("");
    const [portfolioLink, setPortfolioLink] = useState<string>("");
    const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const toggleCoreSkill = (skill: string) => {
        setCoreSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const trimmedOtherSkill = otherCoreSkill.trim();
        const allCoreSkills =
            coreSkills.length || trimmedOtherSkill
                ? [...coreSkills, ...(trimmedOtherSkill ? [`Other: ${trimmedOtherSkill}`] : [])]
                : [];

        if (allCoreSkills.length === 0) {
            setError("Please select at least one core skill.");
            return;
        }

        if (!yearsExperience.trim()) {
            setError("Please add your years of experience.");
            return;
        }

        if (!portfolioLink.trim() && !portfolioFile && !resumeFile) {
            setError("Please add a portfolio link/file or upload your resume.");
            return;
        }

        console.log("[join-gigmote] Submitting form", {
            coreSkills: allCoreSkills,
            yearsExperience,
            hasPortfolioFile: !!portfolioFile,
            hasResumeFile: !!resumeFile,
            hasPortfolioLink: !!portfolioLink.trim(),
        });

        formData.set("core_skills", allCoreSkills.join(", "));
        formData.set("years_experience", yearsExperience);
        formData.set("portfolio_link", portfolioLink || "");

        if (portfolioFile) {
            formData.set("portfolio_file", portfolioFile);
        } else {
            formData.delete("portfolio_file");
        }

        if (resumeFile) {
            formData.set("resume_file", resumeFile);
        } else {
            formData.delete("resume_file");
        }

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/join-gigmote", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                console.log("[join-gigmote] Submission successful");
                setSuccess(true);
            } else {
                const data = await res.json().catch(() => null);
                console.warn("[join-gigmote] Submission failed", {
                    status: res.status,
                    body: data,
                });
                setError(data?.error || "Failed to submit. Please try again later.");
            }
        } catch (err) {
            console.error("[join-gigmote] Network or unexpected error", err);
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
                <div className="w-full lg:w-5/12 xl:w-1/2 bg-hugo-black relative flex flex-col justify-start min-h-[50vh] lg:min-h-screen p-8 lg:p-16 xl:p-24 text-white overflow-hidden">
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

                    <div className="relative z-10 max-w-2xl space-y-20 pt-12 lg:pt-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: eases.expo }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hugo-gold/20 border border-hugo-gold/30 text-hugo-gold text-sm font-bold tracking-widest uppercase mb-8"
                        >
                            Careers
                        </motion.div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                            <AnimatedText
                                text="Build the Future Remotely or in our delivery centers"
                                variant="words"
                            />
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="space-y-4 text-white/70 text-base leading-relaxed"
                        >
                            <p>
                                We’re building a global network of exceptional professionals across technology,
                                operations, finance, sales, customer experience, design, and data.
                            </p>
                            <p>
                                At GigMote, we connect top-tier talent with companies around the world solving
                                meaningful business challenges. Our vetted talent community works with ambitious
                                organizations that are scaling fast and need capable professionals who can think
                                critically, execute with precision, and deliver results.
                            </p>
                            <p>
                                If you're someone who takes ownership, thrives in a high-performance environment,
                                and wants to contribute to projects that matter, we want to hear from you.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="space-y-4 text-white/75 text-base leading-relaxed pt-6 border-t border-white/10"
                        >
                            <h2 className="text-2xl font-semibold text-white">
                                Join the Future of Work
                            </h2>
                            <p>
                                At GigMote, we’re building a global network of high-performing teams that power
                                businesses across industries.
                            </p>
                            <p>
                                We don’t just offer jobs, we create opportunities for talented professionals to
                                collaborate, grow their expertise, and work on projects that shape the future of
                                modern business operations.
                            </p>
                            <p>
                                Our talent community includes professionals across engineering, data science,
                                finance, accounting, operations, customer success, sales, marketing, and design.
                                Whether you're an experienced specialist or an ambitious professional ready to
                                contribute to global teams, GigMote provides a pathway to work on impactful
                                projects with companies around the world.
                            </p>
                            <p>
                                Even if there isn’t a role open today, we encourage you to apply. We actively
                                review submissions and reach out when opportunities match your skills and
                                experience.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="space-y-4 pt-8 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                        >
                            <h3 className="text-lg font-semibold text-white">
                                Why Work With Us
                            </h3>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li>
                                    <span className="font-semibold">Global Impact:</span>{" "}
                                    Collaborate with U.S. and international clients solving real business
                                    problems and scaling innovative companies.
                                </li>
                                <li>
                                    <span className="font-semibold">Meaningful Work:</span>{" "}
                                    Contribute to projects that drive measurable outcomes, from building
                                    products and analyzing data to supporting operations and helping
                                    companies grow.
                                </li>
                                <li>
                                    <span className="font-semibold">Performance &amp; Growth:</span>{" "}
                                    Work in an environment that rewards initiative, ownership, and results.
                                    High-performing professionals in our network often gain access to
                                    long-term engagements and leadership opportunities.
                                </li>
                                <li>
                                    <span className="font-semibold">Flexible &amp; Remote:</span>{" "}
                                    Join a truly remote-first ecosystem designed to support productivity,
                                    autonomy, and work-life balance while staying connected with global
                                    teams.
                                </li>
                                <li>
                                    <span className="font-semibold">Innovative Culture:</span>{" "}
                                    Be part of a network that embraces modern tools, automation, AI, and
                                    forward-thinking approaches to solving complex business challenges.
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="space-y-4 text-sm text-white/80 bg-white/5 rounded-2xl p-6 backdrop-blur-sm"
                        >
                            <h3 className="text-lg font-semibold text-white">
                                How We Evaluate Talent
                            </h3>
                            <p>
                                At GigMote, we believe talent goes beyond a résumé. We look for professionals
                                who demonstrate curiosity, strong problem-solving ability, and the capacity to
                                create real impact.
                            </p>
                            <p className="font-semibold text-white">
                                When you apply, we evaluate:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-white/80">
                                <li>Your experience and technical or functional expertise</li>
                                <li>Portfolio, projects, or measurable results</li>
                                <li>Communication and collaboration ability</li>
                                <li>Adaptability in remote, global work environments</li>
                                <li>Your potential to contribute to high-performing teams</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="space-y-4 pt-8 border-t border-white/10"
                        >
                            <h3 className="text-lg font-semibold text-white">
                                What You Gain
                            </h3>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li>Exposure to global clients and fast-growing companies</li>
                                <li>Opportunities to work on high-impact projects across industries</li>
                                <li>Fully remote flexibility and distributed team collaboration</li>
                                <li>Access to modern tools, AI platforms, and automation technologies</li>
                                <li>Continuous learning and upskilling opportunities</li>
                                <li>The chance to join a vetted global talent network</li>
                                <li>Potential long-term engagements and career advancement</li>
                                <li>
                                    A professional community focused on performance, innovation, and growth
                                </li>
                            </ul>
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
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">Full Name *</label>
                                            <input
                                                name="name"
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Email Address *
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

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Phone Number
                                            </label>
                                            <input
                                                name="phone"
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                placeholder="+44 7123 456 789"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Job Title / Desired Role *
                                            </label>
                                            <input
                                                name="job_title"
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                placeholder="Senior Data Analyst, Full‑stack Engineer, CX Lead..."
                                            />
                                        </div>
                                    </div>

                                    {/* Core Skills */}
                                    <div className="flex flex-col gap-3">
                                        <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                            Core Skills (select all that apply) *
                                        </label>
                                        <p className="text-xs text-hugo-black/60">
                                            This helps us understand the kinds of roles and projects you’re best suited for.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {CORE_SKILL_OPTIONS.map((skill) => {
                                                const selected = coreSkills.includes(skill);
                                                return (
                                                    <button
                                                        key={skill}
                                                        type="button"
                                                        onClick={() => toggleCoreSkill(skill)}
                                                        className={`px-4 py-2 rounded-full border text-sm transition-colors ${selected
                                                            ? "bg-hugo-black text-white border-hugo-black"
                                                            : "bg-gray-50 text-hugo-black border-gray-200 hover:border-hugo-black/50"
                                                            }`}
                                                    >
                                                        {skill}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-semibold text-hugo-black/70">
                                                Other core skills
                                            </label>
                                            <input
                                                value={otherCoreSkill}
                                                onChange={(e) => setOtherCoreSkill(e.target.value)}
                                                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black text-sm"
                                                placeholder="e.g. DevOps, Growth marketing, Revenue operations..."
                                            />
                                        </div>
                                    </div>

                                    {/* Experience & Expertise */}
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Years of Experience *
                                            </label>
                                            <input
                                                type="number"
                                                min={0}
                                                name="years_experience_input"
                                                value={yearsExperience}
                                                onChange={(e) => setYearsExperience(e.target.value)}
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                placeholder="5"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Link to GitHub, Dribbble, or other portfolio (optional)
                                            </label>
                                            <input
                                                name="github_dribbble_link"
                                                type="url"
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                                placeholder="https://github.com/your-handle or portfolio URL"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                            Areas of Expertise / Specializations *
                                        </label>
                                        <textarea
                                            name="areas_of_expertise"
                                            required
                                            rows={3}
                                            className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black resize-none text-sm"
                                            placeholder="e.g. B2B SaaS analytics, subscription billing systems, CX playbook design, revenue operations, LLM‑powered tooling..."
                                        />
                                    </div>

                                    {/* Portfolio & Resume */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Portfolio / Work Samples
                                            </label>
                                            <p className="text-xs text-hugo-black/60">
                                                Share a link or upload a PDF / image that best represents your work.
                                            </p>
                                        </div>
                                        <input
                                            name="portfolio_link_input"
                                            type="url"
                                            value={portfolioLink}
                                            onChange={(e) => setPortfolioLink(e.target.value)}
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black"
                                            placeholder="URL to case studies, designs, repos, or past work"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-semibold text-hugo-black/70">
                                                Or upload a portfolio file
                                            </span>
                                            <input
                                                type="file"
                                                name="portfolio_file"
                                                accept=".pdf,.png,.jpg,.jpeg"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0] ?? null;
                                                    setPortfolioFile(file);
                                                }}
                                                className="w-full text-sm text-hugo-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-hugo-black file:text-white hover:file:bg-hugo-black/90"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Resume / CV Upload
                                            </label>
                                            <p className="text-xs text-hugo-black/60">
                                                PDF or DOC preferred. You can upload this instead of a portfolio link if you like.
                                            </p>
                                            <input
                                                type="file"
                                                name="resume_file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0] ?? null;
                                                    setResumeFile(file);
                                                }}
                                                className="w-full text-sm text-hugo-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-hugo-black file:text-white hover:file:bg-hugo-black/90"
                                            />
                                        </div>
                                    </div>

                                    {/* Insightful Questions */}
                                    <div className="space-y-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Describe a project where you solved a complex problem. What was your role and impact? *
                                            </label>
                                            <textarea
                                                name="q_complex_project"
                                                required
                                                rows={4}
                                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black resize-none text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                How do you approach learning a new skill or tool quickly? *
                                            </label>
                                            <textarea
                                                name="q_learning_new_skill"
                                                required
                                                rows={3}
                                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black resize-none text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                Tell us about a time you improved a process or system. What was the result? *
                                            </label>
                                            <textarea
                                                name="q_process_improvement"
                                                required
                                                rows={3}
                                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black resize-none text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                What excites you most about working in a global, performance‑driven team? *
                                            </label>
                                            <textarea
                                                name="q_global_team"
                                                required
                                                rows={3}
                                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black resize-none text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-hugo-black tracking-wide uppercase">
                                                If hired, what unique contribution would you bring to Gigmote? *
                                            </label>
                                            <textarea
                                                name="q_unique_contribution"
                                                required
                                                rows={3}
                                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-hugo-black outline-none transition-colors bg-gray-50 text-hugo-black resize-none text-sm"
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
