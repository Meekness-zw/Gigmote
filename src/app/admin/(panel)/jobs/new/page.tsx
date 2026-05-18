import { createJob } from "@/lib/jobs";
import { JobForm } from "../_components/JobForm";
import Link from "next/link";

export default function NewJobPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
      <Link
        href="/admin"
        className="text-xs font-semibold uppercase tracking-widest text-hugo-black/60 hover:text-hugo-black mb-5 inline-block"
      >
        ← All jobs
      </Link>
      <h1 className="text-2xl md:text-3xl font-semibold text-hugo-black tracking-tight mb-6">
        New job post
      </h1>
      <JobForm action={createJob} submitLabel="Create job" />
    </div>
  );
}
