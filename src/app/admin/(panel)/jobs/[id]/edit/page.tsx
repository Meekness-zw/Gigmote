import { prisma } from "@/lib/prisma";
import { updateJob } from "@/lib/jobs";
import { JobForm } from "../../_components/JobForm";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await prisma.job.findUnique({ where: { id } });
  if (!job) notFound();

  const action = updateJob.bind(null, job.id);

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
      <Link
        href="/admin"
        className="text-xs font-semibold uppercase tracking-widest text-hugo-black/60 hover:text-hugo-black mb-5 inline-block"
      >
        ← All jobs
      </Link>
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <h1 className="text-2xl md:text-3xl font-semibold text-hugo-black tracking-tight">
          Edit job
        </h1>
        <Link
          href={`/jobs/${job.slug}`}
          target="_blank"
          className="text-sm font-medium text-hugo-black hover:text-hugo-gold underline underline-offset-4"
        >
          View live ↗
        </Link>
      </div>
      <JobForm action={action} job={job} submitLabel="Save changes" />
    </div>
  );
}
