import { prisma } from "@/lib/prisma";
import { deleteApplication, updateApplicationStatus } from "@/lib/jobs";
import Link from "next/link";

export const dynamic = "force-dynamic";

const statusOptions = [
  "new",
  "reviewing",
  "interviewed",
  "rejected",
  "hired",
] as const;

const statusStyles: Record<string, string> = {
  new: "bg-blue-50 text-blue-700",
  reviewing: "bg-yellow-50 text-yellow-700",
  interviewed: "bg-purple-50 text-purple-700",
  rejected: "bg-red-50 text-red-700",
  hired: "bg-green-50 text-green-700",
};

type SearchParams = Promise<{ job?: string }>;

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { job: jobFilter } = await searchParams;

  const [applications, jobs] = await Promise.all([
    prisma.application.findMany({
      where: jobFilter ? { jobId: jobFilter } : undefined,
      orderBy: { createdAt: "desc" },
      include: { job: { select: { title: true, slug: true } } },
    }),
    prisma.job.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, title: true },
    }),
  ]);

  async function statusAction(formData: FormData) {
    "use server";
    const id = (formData.get("id") ?? "").toString();
    const status = (formData.get("status") ?? "new").toString() as
      (typeof statusOptions)[number];
    await updateApplicationStatus(id, status);
  }

  async function deleteAction(formData: FormData) {
    "use server";
    const id = (formData.get("id") ?? "").toString();
    await deleteApplication(id);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
      <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-hugo-gold mb-1.5">
            Applications
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-hugo-black tracking-tight">
            {jobFilter ? "Filtered applications" : "All applications"}
          </h1>
          <p className="text-sm text-hugo-black/60 mt-1.5">
            {applications.length}{" "}
            {applications.length === 1 ? "application" : "applications"}
          </p>
        </div>

        <form className="flex items-center gap-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50">
            Filter by job
          </label>
          <select
            name="job"
            defaultValue={jobFilter ?? ""}
            className="px-3 py-1.5 bg-white border border-hugo-black/10 rounded-lg text-sm"
          >
            <option value="">All jobs</option>
            {jobs.map((j) => (
              <option key={j.id} value={j.id}>
                {j.title}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="h-8 px-3 bg-hugo-black text-white font-semibold rounded-lg text-sm hover:text-hugo-gold transition-colors"
          >
            Apply
          </button>
          {jobFilter && (
            <Link
              href="/admin/applications"
              className="text-sm font-medium text-hugo-black/60 hover:text-hugo-black"
            >
              Clear
            </Link>
          )}
        </form>
      </div>

      {applications.length === 0 ? (
        <div className="bg-white rounded-2xl border border-hugo-black/5 p-10 text-center">
          <p className="text-sm text-hugo-black/60">No applications yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl border border-hugo-black/5 p-5"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap mb-0.5">
                    <h3 className="text-base font-semibold text-hugo-black">
                      {app.name}
                    </h3>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        statusStyles[app.status] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                  <p className="text-sm text-hugo-black/60">
                    Applied for{" "}
                    <Link
                      href={`/jobs/${app.job.slug}`}
                      target="_blank"
                      className="font-medium text-hugo-black hover:text-hugo-gold"
                    >
                      {app.job.title}
                    </Link>
                    {" · "}
                    {new Date(app.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <form action={statusAction} className="flex items-center gap-2">
                  <input type="hidden" name="id" value={app.id} />
                  <select
                    name="status"
                    defaultValue={app.status}
                    className="px-2.5 py-1 bg-gray-50 border border-hugo-black/10 rounded-md text-xs"
                  >
                    {statusOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="text-xs font-medium text-hugo-black hover:text-hugo-gold"
                  >
                    Update
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 text-sm">
                <Info label="Email">
                  <a
                    href={`mailto:${app.email}`}
                    className="text-hugo-black hover:text-hugo-gold underline underline-offset-2"
                  >
                    {app.email}
                  </a>
                </Info>
                {app.phone && <Info label="Phone">{app.phone}</Info>}
                {app.portfolioLink && (
                  <Info label="Portfolio / Links">
                    <a
                      href={app.portfolioLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-hugo-black hover:text-hugo-gold underline underline-offset-2 break-all"
                    >
                      {app.portfolioLink}
                    </a>
                  </Info>
                )}
                {app.resumeName && (
                  <Info label="Resume">
                    {app.resumeUrl ? (
                      <a
                        href={app.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        download={app.resumeName}
                        className="inline-flex items-center gap-1.5 text-hugo-black hover:text-hugo-gold font-medium underline underline-offset-2"
                      >
                        {app.resumeName}
                        {app.resumeSize ? (
                          <span className="text-xs text-hugo-black/50">
                            ({formatBytes(app.resumeSize)})
                          </span>
                        ) : null}
                      </a>
                    ) : (
                      <span className="text-hugo-black/70">
                        {app.resumeName} (sent to admin email)
                      </span>
                    )}
                  </Info>
                )}
              </div>

              {app.coverLetter && (
                <div className="mt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50 mb-1.5">
                    Cover Letter
                  </p>
                  <p className="text-sm text-hugo-black/80 whitespace-pre-wrap leading-relaxed">
                    {app.coverLetter}
                  </p>
                </div>
              )}

              <div className="mt-4 flex justify-end">
                <form action={deleteAction}>
                  <input type="hidden" name="id" value={app.id} />
                  <button
                    type="submit"
                    className="text-xs font-medium text-red-600 hover:text-red-700"
                  >
                    Delete application
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function Info({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50 mb-1">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}
