"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";
import { motion } from "framer-motion";
import { eases } from "@/utils/animations";

export default function ContactPage() {
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
    <main className="relative min-h-screen bg-white selection:bg-hugo-gold/30 flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col lg:flex-row pt-24 lg:pt-0">

        {/* Left Side - Visual & Context */}
        <div className="w-full lg:w-5/12 xl:w-1/2 bg-hugo-black relative flex flex-col justify-center min-h-[50vh] lg:min-h-screen p-8 lg:p-16 xl:p-24 text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/A connected global map glowing with nodes representing remote team members, digital lines connecting cities around the world, concept of global collaboration and outsourcing, futuristic but minimal de.jpg"
              alt="Global collaboration map"
              fill
              className="object-cover opacity-30 mix-blend-luminosity"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-hugo-black via-hugo-black/90 to-transparent"></div>

            {/* Decorative glowing orb */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-hugo-gold/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          </div>

          <div className="relative z-10 max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: eases.expo }}
              className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 border border-white/10"
            >
              <div className="w-6 h-6 rounded-full bg-hugo-gold animate-pulse shadow-[0_0_15px_rgba(255,184,0,0.5)]"></div>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
              <AnimatedText text="Let's build your next team." variant="words" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/60 leading-relaxed font-light mb-12"
            >
              Book a strategy call. We'll identify exactly where high-performing global talent or practical AI can scale your operations faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-hugo-gold mb-2 font-bold">General Inquiries</p>
                <a href="mailto:hello@gigmote.com" className="text-lg hover:text-white transition-colors">hello@gigmote.com</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-hugo-gold mb-2 font-bold">Office Hours</p>
                <p className="text-lg text-white/80">Mon-Fri, 9am - 6pm (EST)</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-7/12 xl:w-1/2 bg-white flex flex-col justify-center items-center py-20 px-6 lg:px-12 xl:px-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: eases.expo }}
            className="w-full max-w-2xl"
          >
            <div className="mb-10 lg:hidden">
              <h2 className="text-3xl font-bold text-hugo-black">Book a Call</h2>
              <p className="text-hugo-black/60 mt-2">Fill out the form below to get started.</p>
            </div>

            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-base font-bold text-hugo-black">* Full Name</label>
                    <input
                      name="name"
                      required
                      className="w-full px-5 py-4 rounded-full border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none transition-all bg-hugo-cream-warm text-hugo-black"
                      placeholder="Jane Doe"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-base font-bold text-hugo-black">* Company</label>
                    <input
                      name="company"
                      required
                      className="w-full px-5 py-4 rounded-full border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none transition-all bg-hugo-cream-warm text-hugo-black"
                      placeholder="Acme Inc."
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-hugo-black">* Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-full border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none transition-all bg-hugo-cream-warm text-hugo-black"
                    placeholder="jane@company.com"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-hugo-black">* How can we help?</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none transition-all bg-hugo-cream-warm text-hugo-black resize-none"
                    placeholder="Tell us about your needs..."
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" size="lg" variant="primary" className="w-full font-bold">
                  Get Started
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
