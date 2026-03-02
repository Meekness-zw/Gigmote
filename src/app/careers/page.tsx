"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Globe, TrendingUp, Zap, Home, ArrowRight } from "lucide-react";

export default function CareersPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    desiredRole: "",
    coreSkills: "",
    yearsExperience: "",
    specializations: "",
    resume: "",
    portfolio: "",
    qProject: "",
    qLearning: "",
    qProcess: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Gigmote Talent Application");
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Desired Role: ${formData.desiredRole}`,
      `Core Skills: ${formData.coreSkills}`,
      `Years Experience: ${formData.yearsExperience}`,
      `Specializations: ${formData.specializations}`,
      `Resume Link: ${formData.resume}`,
      `Portfolio / Work Samples: ${formData.portfolio}`,
      "",
      "Insight Questions:",
      `1. Describe a complex project you solved:\n${formData.qProject}`,
      "",
      `2. How do you learn new tools quickly?\n${formData.qLearning}`,
      "",
      `3. What process have you improved before?\n${formData.qProcess}`,
    ].join("\n");

    const mailto = `mailto:info@gigmote.com?subject=${subject}&body=${encodeURIComponent(
      bodyLines
    )}`;
    window.location.href = mailto;
  };

  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      {/* Visual Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex min-h-[60vh] bg-hugo-black text-white">
        <motion.div
          style={{ y: yTransform }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/create an image with the Hero title _AfriCode_ Connecting African Developers to Global Businesses --- (3).jpg"
            alt="Global teams collaborating"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hugo-black via-hugo-black/80 to-hugo-black/40"></div>
        </motion.div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center justify-center">
          <FadeInOnScroll>
            <SectionLabel variant="dark">Careers</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
              <AnimatedText text="Build the future of work." variant="words" />
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              We're building elite global teams to power companies worldwide. Join a performance-driven culture with real growth zero body-shopping.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Culture Image Mosaic */}
      <section className="relative z-20 -mt-16 lg:-mt-24 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
            >
              <Image src="/images/A product manager and software team planning a tech roadmap on digital whiteboard screens, agile sprint boards and UX wireframes visible, sleek tech office or remote work setup, clean modern business .jpg" alt="Culture 1" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-hugo-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden shadow-xl group border border-white/10"
            >
              <Image src="/images/Gigmote Asset 4.jpg" alt="Culture 2" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-hugo-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden shadow-xl bg-hugo-gold/20 flex items-center justify-center border border-hugo-gold/30"
            >
              <div className="text-center p-6">
                <h3 className="text-hugo-black font-bold text-2xl mb-1">Top 1%</h3>
                <p className="text-hugo-black/60 text-xs uppercase tracking-widest font-semibold">African Talent</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-2 row-span-1 relative rounded-3xl overflow-hidden shadow-xl group border border-white/10"
            >
              <Image src="/images/AI Curiosity lab in the rainforset jungle of africa in a call centre setting- bright setting, icons flying , glass office setting add people (2).jpg" alt="Culture 3" fill className="object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-hugo-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Gigmote */}
      <MaskSection variant="slideUp" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeInOnScroll className="text-center mb-16">
            <SectionLabel>The Gigmote Advantage</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-hugo-black mb-6 tracking-tight">
              More than a paycheck. A career trajectory.
            </h2>
            <p className="text-xl text-hugo-black/60 max-w-2xl mx-auto font-light">
              We partner with rapid-growth companies that demand excellence. In return, we provide an environment designed for you to thrive, learn, and lead.
            </p>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Global Impact", desc: "Work directly with top-tier companies in the US, UK, and Canada." },
              { icon: TrendingUp, title: "Performance Growth", desc: "Clear paths to promotion based entirely on outcomes, not tenure." },
              { icon: Home, title: "Remote-First", desc: "Work from anywhere, or utilize our premium hub locations if preferred." },
              { icon: Zap, title: "AI-Augmented", desc: "Learn to work alongside cutting-edge AI tools to amplify your output." }
            ].map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-hugo-black mb-6 shadow-sm border border-gray-200">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-hugo-black mb-3">{perk.title}</h3>
                  <p className="text-hugo-black/70 leading-relaxed font-light">{perk.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </MaskSection>

      {/* Application Form — Glassmorphic Premium Layout */}
      <section className="py-32 bg-hugo-cream relative border-t border-hugo-black/5">
        <BackgroundMotion variant="light" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            {/* Text Left */}
            <div className="col-span-1 lg:col-span-5 sticky top-32">
              <FadeInOnScroll>
                <SectionLabel>Apply Now</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-bold text-hugo-black mb-6 tracking-tight">
                  Join the talent network.
                </h2>
                <p className="text-lg text-hugo-black/70 mb-8 font-light leading-relaxed">
                  We are constantly seeking top-tier operators, developers, and support specialists. Submit your details below, and if there's a match with our current fast-growing clients, our talent team will reach out.
                </p>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-hugo-black mb-2">The Process</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-hugo-black/70">
                      <div className="w-6 h-6 rounded-full bg-hugo-gold/20 flex items-center justify-center text-hugo-gold font-bold text-xs border border-hugo-gold/30">1</div>
                      Application Review
                    </li>
                    <li className="flex items-center gap-3 text-sm text-hugo-black/70">
                      <div className="w-6 h-6 rounded-full bg-hugo-gold/20 flex items-center justify-center text-hugo-gold font-bold text-xs border border-hugo-gold/30">2</div>
                      Skills & Aptitude Assessment
                    </li>
                    <li className="flex items-center gap-3 text-sm text-hugo-black/70">
                      <div className="w-6 h-6 rounded-full bg-hugo-gold/20 flex items-center justify-center text-hugo-gold font-bold text-xs border border-hugo-gold/30">3</div>
                      Operator Interview
                    </li>
                    <li className="flex items-center gap-3 text-sm text-hugo-black/70">
                      <div className="w-6 h-6 rounded-full bg-hugo-black text-white flex items-center justify-center font-bold text-xs">4</div>
                      Client Matching
                    </li>
                  </ul>
                </div>
              </FadeInOnScroll>
            </div>

            {/* Form Right */}
            <div className="col-span-1 lg:col-span-7">
              <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white">
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Basic Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-hugo-black border-b border-gray-100 pb-4">Basic Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Name</label>
                        <input
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black"
                          onChange={handleChange}
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black"
                          onChange={handleChange}
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Phone</label>
                        <input
                          name="phone"
                          className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black"
                          onChange={handleChange}
                          placeholder="+1 234 567 890"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Desired Role</label>
                        <input
                          name="desiredRole"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black"
                          onChange={handleChange}
                          placeholder="e.g. Senior Frontend Engineer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-hugo-black border-b border-gray-100 pb-4">Professional Overview</h3>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Core Skills</label>
                      <input
                        name="coreSkills"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black"
                        onChange={handleChange}
                        placeholder="React, Node.js, Project Management (comma separated)"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Years Experience</label>
                        <input
                          name="yearsExperience"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black"
                          onChange={handleChange}
                          placeholder="e.g. 5"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Specializations</label>
                        <input
                          name="specializations"
                          className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black"
                          onChange={handleChange}
                          placeholder="FinTech, SaaS, Healthcare"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-hugo-black border-b border-gray-100 pb-4">Portfolio & Links</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Resume / CV Link</label>
                        <input
                          name="resume"
                          className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black placeholder:font-normal"
                          placeholder="Google Drive, Dropbox, etc."
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Portfolio / Git / LinkedIn</label>
                        <input
                          name="portfolio"
                          className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black placeholder:font-normal"
                          placeholder="https://"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Insights */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-hugo-black border-b border-gray-100 pb-4">Insights (Why You?)</h3>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">Describe a complex project you solved</label>
                      <textarea
                        name="qProject"
                        required
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black resize-none"
                        onChange={handleChange}
                        placeholder="Briefly describe the challenge and your specific contribution..."
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">How do you learn new tools quickly?</label>
                      <textarea
                        name="qLearning"
                        required
                        rows={2}
                        className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black resize-none"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-hugo-black/50 mb-2">What process have you improved before?</label>
                      <textarea
                        name="qProcess"
                        required
                        rows={2}
                        className="w-full px-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-hugo-black focus:ring-0 rounded-xl transition-all font-medium text-hugo-black resize-none"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2 group">
                      Submit Application
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
