"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function CareersPage() {
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
    <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
      <Navbar />

      <Hero
        variant="company"
        title="Join the future of work."
        description="Gigmote connects global talent with leading companies across FinTech, Healthcare, SaaS, and emerging technology."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-hugo-black">
              Why work with Gigmote
            </h2>
            <p className="text-hugo-black/70 text-lg">
              We&apos;re building global teams powering companies worldwide. Join a
              performance-driven, modern work environment with real growth
              opportunities.
            </p>
            <ul className="space-y-4 text-sm text-hugo-black/80">
              <li>🌍 Work with global clients</li>
              <li>📈 Performance-driven growth environment</li>
              <li>🏡 Remote-first culture with brick &amp; mortar options based on client needs</li>
              <li>🤖 Exposure to AI and modern tools</li>
            </ul>
          </div>

          <div className="bg-hugo-cream/60 rounded-3xl p-8 shadow-xl border border-hugo-black/5">
            <h3 className="text-xl font-bold mb-4 text-hugo-black">
              Join Gigmote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-hugo-black mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-hugo-black mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-hugo-black mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-hugo-black mb-1">
                    Desired Role
                  </label>
                  <input
                    name="desiredRole"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Skills & Experience */}
              <div>
                <label className="block text-sm font-medium text-hugo-black mb-1">
                  Core Skills (comma separated)
                </label>
                <input
                  name="coreSkills"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-hugo-black mb-1">
                    Years Experience
                  </label>
                  <input
                    name="yearsExperience"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-hugo-black mb-1">
                    Specializations
                  </label>
                  <input
                    name="specializations"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Upload-like fields */}
              <div>
                <label className="block text-sm font-medium text-hugo-black mb-1">
                  Resume (link)
                </label>
                <input
                  name="resume"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm"
                  placeholder="Link to your resume or CV"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-hugo-black mb-1">
                  Portfolio / Work Samples (optional)
                </label>
                <input
                  name="portfolio"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm"
                  placeholder="Links to portfolio, GitHub, case studies, etc."
                  onChange={handleChange}
                />
              </div>

              {/* Insight questions */}
              <div>
                <label className="block text-sm font-medium text-hugo-black mb-1">
                  Describe a complex project you solved
                </label>
                <textarea
                  name="qProject"
                  required
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm resize-none"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-hugo-black mb-1">
                  How do you learn new tools quickly?
                </label>
                <textarea
                  name="qLearning"
                  required
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm resize-none"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-hugo-black mb-1">
                  What process have you improved before?
                </label>
                <textarea
                  name="qProcess"
                  required
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:border-hugo-black focus:ring-1 focus:ring-hugo-black outline-none text-sm resize-none"
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Join Gigmote
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

