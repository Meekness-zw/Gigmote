"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fieldClass =
  "w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-transparent focus:bg-white focus:border-hugo-black focus:outline-none rounded-lg text-hugo-black placeholder:text-hugo-black/40";

const labelClass =
  "block text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50 mb-1.5";

export function ApplyForm({
  jobId,
  jobTitle,
}: {
  jobId: string;
  jobTitle: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    formData.set("jobId", jobId);

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-hugo-cream rounded-2xl border border-hugo-black/5 p-8 text-center">
        <CheckCircle2
          className="mx-auto text-green-600 mb-3"
          size={40}
          strokeWidth={1.5}
        />
        <h3 className="text-lg md:text-xl font-semibold text-hugo-black mb-2">
          Application received
        </h3>
        <p className="text-sm text-hugo-black/60 leading-relaxed max-w-md mx-auto">
          Thanks for applying to <strong>{jobTitle}</strong>. We'll review your
          submission and reach out within 5 business days if there's a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full name *</label>
          <input
            name="name"
            required
            className={fieldClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            required
            className={fieldClass}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Portfolio / LinkedIn / GitHub</label>
        <input
          name="portfolioLink"
          className={fieldClass}
          placeholder="https://"
        />
      </div>

      <div>
        <label className={labelClass}>Resume / CV *</label>
        <input
          type="file"
          name="resume"
          required
          accept=".pdf,.doc,.docx"
          className="block w-full text-sm text-hugo-black file:mr-3 file:py-2 file:px-3.5 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-hugo-black file:text-white file:hover:text-hugo-gold file:cursor-pointer cursor-pointer"
        />
        <p className="text-xs text-hugo-black/50 mt-1.5">
          PDF, DOC, or DOCX — max 5MB.
        </p>
      </div>

      <div>
        <label className={labelClass}>Why this role? *</label>
        <textarea
          name="coverLetter"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="A few sentences on why you're a fit and what you'd bring."
        />
      </div>

      {status === "error" && errorMessage && (
        <div className="rounded-lg bg-red-50 border border-red-100 p-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="h-10 px-5 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors disabled:opacity-50 disabled:pointer-events-none inline-flex items-center gap-1.5 group"
        >
          {status === "submitting" ? "Submitting…" : "Submit application"}
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </form>
  );
}
