import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Open Roles · Gigmote",
  description:
    "Explore open roles at Gigmote and our partner companies. Apply directly and join a global, high-performance team.",
};

type SearchParams = Promise<{ q?: string; type?: string }>;

export default async function JobsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { q, type } = await searchParams;
  const search = (q ?? "").trim();
  const typeFilter = (type ?? "").trim();

  const jobs = await prisma.job.findMany({
    where: {
      status: "published",
      AND: [
        typeFilter ? { employmentType: typeFilter } : {},
        search
          ? {
              OR: [
                { title: { contains: search } },
                { location: { contains: search } },
                { department: { contains: search } },
                { shortDescription: { contains: search } },
              ],
            }
          : {},
      ],
    },
    orderBy: { createdAt: "desc" },
  });

  const employmentTypes = Array.from(
    new Set(jobs.map((j) => j.employmentType).filter(Boolean))
  );

  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      <section className="relative pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <SectionLabel>Open Roles</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hugo-black mb-5 leading-[1.05]">
            Work that moves the world.
          </h1>
          <p className="text-lg md:text-xl text-hugo-black/60 font-light max-w-3xl leading-relaxed">
            Browse open positions at Gigmote and the global companies we
            partner with. Apply once — we'll match you to the right team.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <form className="bg-white rounded-xl p-2 mb-8 flex items-center gap-2 flex-wrap shadow-sm border border-white">
            <input
              name="q"
              defaultValue={search}
              placeholder="Search title, location, or department"
              className="flex-1 min-w-[200px] px-3.5 py-2.5 text-sm bg-transparent focus:outline-none text-hugo-black placeholder:text-hugo-black/40"
            />
            <select
              name="type"
              defaultValue={typeFilter}
              className="px-3 py-2 text-sm bg-gray-50 rounded-lg text-hugo-black focus:outline-none"
            >
              <option value="">All types</option>
              {["Full-time", "Part-time", "Contract", "Internship", "Freelance"].map(
                (t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                )
              )}
            </select>
            <button
              type="submit"
              className="h-9 px-4 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors"
            >
              Search
            </button>
            {(search || typeFilter) && (
              <Link
                href="/jobs"
                className="px-3 text-sm font-medium text-hugo-black/60 hover:text-hugo-black"
              >
                Clear
              </Link>
            )}
          </form>

          {jobs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-white p-14 text-center shadow-sm">
              <Briefcase
                className="mx-auto mb-4 text-hugo-black/30"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-hugo-black mb-1.5">
                No openings match your search
              </h3>
              <p className="text-sm text-hugo-black/60 mb-5">
                Try a different query, or check back soon — we add new roles
                regularly.
              </p>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center h-9 px-4 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors"
              >
                View all jobs
              </Link>
            </div>
          ) : (
            <div className="grid gap-3">
              {jobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/jobs/${job.slug}`}
                  className="group block bg-white rounded-2xl border border-white hover:border-hugo-black/20 hover:shadow-lg transition-all p-5 md:p-6"
                >
                  <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {job.department && (
                          <span className="text-[11px] font-semibold uppercase tracking-widest text-hugo-gold">
                            {job.department}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-hugo-black tracking-tight mb-2 group-hover:text-hugo-gold transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-hugo-black/70 leading-relaxed mb-4 max-w-3xl">
                        {job.shortDescription}
                      </p>
                      <div className="flex items-center gap-5 flex-wrap text-xs text-hugo-black/60">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} strokeWidth={1.75} />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} strokeWidth={1.75} />
                          {job.employmentType}
                        </span>
                        {job.salaryRange && (
                          <span className="font-medium text-hugo-black/80">
                            {job.salaryRange}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 self-center text-sm text-hugo-black font-semibold">
                      View role
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
