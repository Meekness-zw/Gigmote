import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { MapPin, Clock, DollarSign, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ApplyForm } from "./ApplyForm";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await prisma.job.findUnique({ where: { slug } });
  if (!job) return { title: "Job not found · Gigmote" };
  return {
    title: `${job.title} · Gigmote`,
    description: job.shortDescription,
  };
}

function lines(input?: string | null) {
  return (input ?? "")
    .split("\n")
    .map((l) => l.replace(/^[-*•]\s*/, "").trim())
    .filter(Boolean);
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await prisma.job.findUnique({ where: { slug } });
  if (!job || job.status !== "published") notFound();

  const responsibilities = lines(job.responsibilities);
  const requirements = lines(job.requirements);
  const niceToHave = lines(job.niceToHave);
  const benefits = lines(job.benefits);

  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      <section className="pt-28 md:pt-36 pb-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-hugo-black/60 hover:text-hugo-black mb-6"
          >
            <ArrowLeft size={14} />
            All open roles
          </Link>

          <div className="bg-white rounded-2xl border border-white shadow-sm p-7 md:p-10">
            {job.department && <SectionLabel>{job.department}</SectionLabel>}
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-hugo-black mb-5 leading-[1.1]">
              {job.title}
            </h1>
            <p className="text-base md:text-lg text-hugo-black/70 leading-relaxed mb-7 max-w-3xl">
              {job.shortDescription}
            </p>
            <div className="flex items-center gap-5 flex-wrap text-sm">
              <Meta icon={<MapPin size={14} />} label={job.location} />
              <Meta icon={<Clock size={14} />} label={job.employmentType} />
              {job.salaryRange && (
                <Meta
                  icon={<DollarSign size={14} />}
                  label={job.salaryRange}
                />
              )}
            </div>
            <a
              href="#apply"
              className="mt-7 inline-flex items-center justify-center h-10 px-5 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors"
            >
              Apply for this role
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <Block title="About the role">
                <p className="text-hugo-black/80 font-light leading-relaxed whitespace-pre-wrap">
                  {job.description}
                </p>
              </Block>

              {responsibilities.length > 0 && (
                <Block title="What you'll do">
                  <BulletList items={responsibilities} />
                </Block>
              )}

              {requirements.length > 0 && (
                <Block title="What you'll bring">
                  <BulletList items={requirements} />
                </Block>
              )}

              {niceToHave.length > 0 && (
                <Block title="Nice to have">
                  <BulletList items={niceToHave} />
                </Block>
              )}

              {benefits.length > 0 && (
                <Block title="Benefits">
                  <BulletList items={benefits} />
                </Block>
              )}
            </div>

            <aside className="lg:sticky lg:top-32 self-start">
              <div className="bg-white rounded-2xl border border-white shadow-sm p-5">
                <h3 className="text-sm font-semibold text-hugo-black mb-3">Quick facts</h3>
                <dl className="space-y-2.5 text-sm">
                  <Fact label="Location" value={job.location} />
                  <Fact label="Type" value={job.employmentType} />
                  {job.department && (
                    <Fact label="Department" value={job.department} />
                  )}
                  {job.salaryRange && (
                    <Fact label="Compensation" value={job.salaryRange} />
                  )}
                  <Fact
                    label="Posted"
                    value={new Date(job.createdAt).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  />
                </dl>
                <a
                  href="#apply"
                  className="mt-5 w-full inline-flex items-center justify-center h-9 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors"
                >
                  Apply now
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="py-24 bg-white relative border-t border-hugo-black/5"
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionLabel>Apply</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-semibold text-hugo-black tracking-tight mb-3">
            Apply for {job.title}
          </h2>
          <p className="text-base text-hugo-black/60 leading-relaxed mb-8">
            Submit your details below — we'll review and get back to you within
            5 business days if there's a fit.
          </p>
          <ApplyForm jobId={job.id} jobTitle={job.title} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Meta({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-hugo-black/70 font-medium">
      <span className="text-hugo-black/50">{icon}</span>
      {label}
    </span>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-semibold text-hugo-black tracking-tight mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex gap-3 text-sm text-hugo-black/80 leading-relaxed"
        >
          <span className="text-hugo-gold mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-hugo-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-hugo-black/5 pb-2 last:border-b-0 last:pb-0">
      <dt className="text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50">
        {label}
      </dt>
      <dd className="text-xs font-medium text-hugo-black text-right">
        {value}
      </dd>
    </div>
  );
}
