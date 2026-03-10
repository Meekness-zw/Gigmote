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
    fullName: "",
    company: "",
    email: "",
    challenge: "",
    teamStructure: "",
    idealPartner: "",
  });
  const [unlock, setUnlock] = useState<string[]>([]);
  const [unlockOther, setUnlockOther] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleUnlock = (value: string) => {
    setUnlock((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const unlockSelections =
      unlock.length || unlockOther.trim()
        ? [...unlock, ...(unlockOther.trim() ? [`Other: ${unlockOther.trim()}`] : [])]
        : [];

    console.log("[contact-page] Submitting contact form", {
      formData,
      unlockSelections,
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          company: formData.company,
          email: formData.email,
          challenge: formData.challenge,
          unlock: unlockSelections,
          teamStructure: formData.teamStructure,
          idealPartner: formData.idealPartner,
        }),
      });

      if (res.ok) {
        console.log("[contact-page] Submission successful");
        setSuccess(true);
        setFormData({
          fullName: "",
          company: "",
          email: "",
          challenge: "",
          teamStructure: "",
          idealPartner: "",
        });
        setUnlock([]);
        setUnlockOther("");
      } else {
        const data = await res.json().catch(() => null);
        console.warn("[contact-page] Submission failed", {
          status: res.status,
          body: data,
        });
        setError(
          data?.error || "Failed to send message. Please try again later."
        );
      }
    } catch (err) {
      console.error("[contact-page] Network or unexpected error", err);
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
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm mb-2">
                    {error}
                  </div>
                )}
                {success && !error && (
                  <div className="p-3 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm mb-2">
                    Thanks — we’ve received your message and will be in touch.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-base font-bold text-hugo-black">* Full Name</label>
                    <input
                      name="fullName"
                      required
                      className="w-full px-5 py-4 rounded-full border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none transition-all bg-hugo-cream-warm text-hugo-black"
                      placeholder="Jane Doe"
                      value={formData.fullName}
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
                      value={formData.company}
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
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-hugo-black">
                    * What challenge is currently slowing your business down the most?
                  </label>
                  <textarea
                    name="challenge"
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none transition-all bg-hugo-cream-warm text-hugo-black resize-none"
                    placeholder="Share what’s blocking revenue, time, quality, or scale right now."
                    value={formData.challenge}
                    onChange={handleChange}
                  />
                </div>

                {/* Unlock in 90 days */}
                <div className="flex flex-col gap-3">
                  <label className="text-base font-bold text-hugo-black">
                    If this problem were solved in the next 90 days, what would that unlock for you?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "More revenue",
                      "More time",
                      "Better systems",
                      "Faster growth",
                      "Improved customer experience",
                    ].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-2 text-sm text-hugo-black/80"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 shrink-0 rounded border-hugo-black/30 text-hugo-gold focus:ring-hugo-gold"
                          checked={unlock.includes(label)}
                          onChange={() => toggleUnlock(label)}
                        />
                        <span className="whitespace-nowrap">{label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 shrink-0 rounded border-hugo-black/30 text-hugo-gold focus:ring-hugo-gold"
                      checked={!!unlockOther.trim()}
                      onChange={(e) => {
                        if (!e.target.checked) {
                          setUnlockOther("");
                        }
                      }}
                    />
                    <span className="text-sm text-hugo-black/80">Other:</span>
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 rounded-full border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none bg-hugo-cream-warm text-hugo-black text-sm"
                      placeholder="Describe what else this would unlock"
                      value={unlockOther}
                      onChange={(e) => setUnlockOther(e.target.value)}
                    />
                  </div>
                </div>

                {/* Team structure */}
                <div className="flex flex-col gap-3">
                  <label className="text-base font-bold text-hugo-black">
                    What does your current team structure look like?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Solo founder",
                      "2–10 team members",
                      "10–50 team members",
                      "50+ team members",
                    ].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-2 text-sm text-hugo-black/80"
                      >
                        <input
                          type="radio"
                          name="teamStructure"
                          value={label}
                          className="h-4 w-4 border-hugo-black/30 text-hugo-gold focus:ring-hugo-gold"
                          checked={formData.teamStructure === label}
                          onChange={handleChange}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Ideal partner */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-hugo-black">
                    What would an ideal support partner look like for you?
                  </label>
                  <textarea
                    name="idealPartner"
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none transition-all bg-hugo-cream-warm text-hugo-black resize-none"
                    placeholder="Share what great would look like — ways of working, outcomes, communication, and where you’d like us to plug in."
                    value={formData.idealPartner}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" size="lg" variant="primary" className="w-full font-bold">
                  {isSubmitting ? "Sending..." : "Get Started"}
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
