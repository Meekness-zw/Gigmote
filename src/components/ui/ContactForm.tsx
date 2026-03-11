"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { Rocket, Globe } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    teamStructure: "",
    idealPartner: "",
  });
  const [unlock, setUnlock] = useState<string[]>([]);
  const [unlockOther, setUnlockOther] = useState("");
  const [talentAreas, setTalentAreas] = useState<string[]>([]);
  const [talentOther, setTalentOther] = useState("");
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

  const toggleTalentArea = (value: string) => {
    setTalentAreas((prev) =>
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

    const talentSelections = [
      ...talentAreas,
      ...(talentOther.trim() ? [`Other: ${talentOther.trim()}`] : []),
    ];

    if (!talentSelections.length) {
      setIsSubmitting(false);
      setError(
        "Please select at least one area where you need immediate talent support."
      );
      return;
    }

    console.log("[contact-form] Submitting contact form", {
      formData,
      unlockSelections,
      talentSelections,
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
          challenge: talentSelections.join(", "),
          unlock: unlockSelections,
          teamStructure: formData.teamStructure,
          idealPartner: formData.idealPartner,
        }),
      });

      if (res.ok) {
        console.log("[contact-form] Submission successful");
        setSuccess(true);
        setFormData({
          fullName: "",
          company: "",
          email: "",
          teamStructure: "",
          idealPartner: "",
        });
        setUnlock([]);
        setUnlockOther("");
        setTalentAreas([]);
        setTalentOther("");
      } else {
        const data = await res.json().catch(() => null);
        console.warn("[contact-form] Submission failed", {
          status: res.status,
          body: data,
        });
        setError(
          data?.error || "Failed to send message. Please try again later."
        );
      }
    } catch (err) {
      console.error("[contact-form] Network or unexpected error", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-hugo-cream relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-hugo-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-hugo-teal/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text & Context */}
          <div className="space-y-6">
            <SectionLabel>Get started with Gigmote</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-hugo-black tracking-tight">
              Tell us what you need to ship.
            </h2>
            <p className="text-lg text-hugo-black/70 max-w-lg">
              Share a bit about your product or operation, where you’re blocked,
              and the kind of team you’d like to build. We’ll respond with a
              clear plan and next steps.
            </p>

            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-hugo-black/10 flex items-center justify-center text-xl shadow-sm text-hugo-black">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-hugo-black">Fast Launch</h4>
                  <p className="text-sm text-hugo-black/60">
                    Pods and teams live in as little as 2 weeks.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-hugo-black/10 flex items-center justify-center text-xl shadow-sm text-hugo-black">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-hugo-black">
                    Cross‑functional talent
                  </h4>
                  <p className="text-sm text-hugo-black/60">
                    Engineering, AI, product, operations, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-[0.2rem] border-hugo-black/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
                  {error}
                </div>
              )}
              {success && !error && (
                <div className="p-3 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm">
                  Thanks  we’ve received your message and will be in touch.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-hugo-black">
                  * Full Name
                  </label>
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
                  <label className="text-base font-bold text-hugo-black">
                    * Company / organization
                  </label>
                  <input
                    name="company"
                    required
                    className="w-full px-5 py-4 rounded-full border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none transition-all bg-hugo-cream-warm text-hugo-black"
                    placeholder="e.g. SaaS startup, fintech scaleup, global ops team"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base font-bold text-hugo-black">
                  * Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-full border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none transition-all bg-hugo-cream-warm text-hugo-black"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base font-bold text-hugo-black">
                  * Which areas of your business need immediate talent support?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Accounting / Finance",
                    "Software Development",
                    "Data & Analytics",
                    "Operations / Back Office",
                    "Customer Support",
                    "Research & Strategy",
                  ].map((label) => (
                    <label
                      key={label}
                      className="flex items-center gap-2 text-sm text-hugo-black/80"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 shrink-0 rounded border-hugo-black/30 text-hugo-gold focus:ring-hugo-gold"
                        checked={talentAreas.includes(label)}
                        onChange={() => toggleTalentArea(label)}
                      />
                      <span className="whitespace-nowrap">{label}</span>
                    </label>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="checkbox"
                    className="h-4 w-4 shrink-0 rounded border-hugo-black/30 text-hugo-gold focus:ring-hugo-gold"
                    checked={!!talentOther.trim()}
                    onChange={(e) => {
                      if (!e.target.checked) {
                        setTalentOther("");
                      }
                    }}
                  />
                  <span className="text-sm text-hugo-black/80">Other:</span>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 rounded-full border-2 border-hugo-black/10 focus:border-hugo-gold focus:ring-2 focus:ring-hugo-gold/20 outline-none bg-hugo-cream-warm text-hugo-black text-sm"
                    placeholder="Describe other areas you need support"
                    value={talentOther}
                    onChange={(e) => setTalentOther(e.target.value)}
                  />
                </div>
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
                  placeholder="Share what great would look like  ways of working, outcomes, communication, and where you’d like us to plug in."
                  value={formData.idealPartner}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="primary"
                className="w-full font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get started"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

