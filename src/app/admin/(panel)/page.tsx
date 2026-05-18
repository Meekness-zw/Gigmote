import { prisma } from "@/lib/prisma";
import { deleteJob } from "@/lib/jobs";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminJobsPage() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { applications: true } } },
  });

  async function handleDelete(formData: FormData) {
    "use server";
    const id = (formData.get("id") ?? "").toString();
    await deleteJob(id);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
      <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-hugo-gold mb-1.5">
            Jobs
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-hugo-black tracking-tight">
            All job posts
          </h1>
          <p className="text-sm text-hugo-black/60 mt-1.5">
            {jobs.length} {jobs.length === 1 ? "post" : "posts"} total
          </p>
        </div>
        <Link
          href="/admin/jobs/new"
          className="inline-flex items-center justify-center h-9 px-4 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors"
        >
          + New job
        </Link>
      </div>

      {jobs.length === 0 ? (
        <div className="bg-white rounded-2xl border border-hugo-black/5 p-10 text-center">
          <p className="text-sm text-hugo-black/60 mb-5">
            No jobs yet. Create your first post.
          </p>
          <Link
            href="/admin/jobs/new"
            className="inline-flex items-center justify-center h-9 px-4 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors"
          >
            Create job post
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-hugo-black/5 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-hugo-cream-warm border-b border-hugo-black/5">
              <tr className="text-left text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4 hidden md:table-cell">Location</th>
                <th className="px-6 py-4 hidden md:table-cell">Type</th>
                <th className="px-6 py-4">Applications</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-b border-hugo-black/5 last:border-b-0 hover:bg-hugo-cream/40"
                >
                  <td className="px-6 py-3.5">
                    <Link
                      href={`/admin/jobs/${job.id}/edit`}
                      className="font-medium text-hugo-black hover:text-hugo-gold"
                    >
                      {job.title}
                    </Link>
                    {job.department && (
                      <div className="text-xs text-hugo-black/50 mt-0.5">
                        {job.department}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-3.5 text-hugo-black/70 hidden md:table-cell">
                    {job.location}
                  </td>
                  <td className="px-6 py-3.5 text-hugo-black/70 hidden md:table-cell">
                    {job.employmentType}
                  </td>
                  <td className="px-6 py-3.5">
                    <Link
                      href={`/admin/applications?job=${job.id}`}
                      className="inline-flex items-center gap-1.5 font-medium text-hugo-black hover:text-hugo-gold"
                    >
                      <span className="bg-hugo-gold/20 text-hugo-black font-semibold px-1.5 py-0.5 rounded-md text-xs">
                        {job._count.applications}
                      </span>
                      View
                    </Link>
                  </td>
                  <td className="px-6 py-3.5">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        job.status === "published"
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    <div className="inline-flex items-center gap-3 text-xs">
                      <Link
                        href={`/jobs/${job.slug}`}
                        target="_blank"
                        className="font-medium text-hugo-black/60 hover:text-hugo-black"
                      >
                        View
                      </Link>
                      <Link
                        href={`/admin/jobs/${job.id}/edit`}
                        className="font-medium text-hugo-black hover:text-hugo-gold"
                      >
                        Edit
                      </Link>
                      <form action={handleDelete}>
                        <input type="hidden" name="id" value={job.id} />
                        <button
                          type="submit"
                          className="font-medium text-red-600 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
