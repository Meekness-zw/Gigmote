import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await prisma.course.findUnique({ where: { slug } });
  if (!course) return { title: "Course not found · Gigmote" };
  return {
    title: `${course.title} · Gigmote Training`,
    description: course.tagline,
  };
}

function parseOutcomes(raw: string): string[] {
  return raw
    .split("\n")
    .map((l) => l.replace(/^[-*•]\s*/, "").trim())
    .filter(Boolean);
}

function parseFeatures(raw: string): { label: string; desc: string }[] {
  return raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const colonIdx = l.indexOf(":");
      if (colonIdx === -1) return { label: "", desc: l };
      return { label: l.slice(0, colonIdx).trim(), desc: l.slice(colonIdx + 1).trim() };
    });
}

type Module = { title: string; lessons: string[] };

function parseCurriculum(raw: string): Module[] {
  const modules: Module[] = [];
  let current: Module | null = null;
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("##")) {
      if (current) modules.push(current);
      current = { title: trimmed.replace(/^#+\s*/, ""), lessons: [] };
    } else if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
      if (current) current.lessons.push(trimmed.replace(/^[-*]\s*/, ""));
    }
  }
  if (current) modules.push(current);
  return modules;
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await prisma.course.findUnique({ where: { slug } });
  if (!course || course.status !== "published") notFound();

  const outcomes = parseOutcomes(course.outcomes);
  const modules = parseCurriculum(course.curriculum);
  const features = course.features ? parseFeatures(course.features) : [];

  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            href="/training"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-hugo-black/60 hover:text-hugo-black mb-6"
          >
            <ArrowLeft size={14} />
            All courses
          </Link>

          <div className="bg-white rounded-2xl border border-white shadow-sm p-7 md:p-10">
            <SectionLabel>AI Training</SectionLabel>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-hugo-black mb-4 leading-[1.1]">
              {course.title}
            </h1>
            <p className="text-base md:text-lg text-hugo-black/70 leading-relaxed mb-7 max-w-3xl">
              {course.tagline}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={course.enrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors"
              >
                Enroll now — {course.price}
              </a>
              <span className="text-sm text-hugo-black/50 font-medium">
                Instructor: {course.instructor}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Description */}
              <Block title="About this course">
                <p className="text-hugo-black/80 font-light leading-relaxed whitespace-pre-wrap">
                  {course.description}
                </p>
              </Block>

              {/* Outcomes */}
              {outcomes.length > 0 && (
                <Block title="What you'll learn">
                  <ul className="space-y-3">
                    {outcomes.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-hugo-black/80 leading-relaxed">
                        <CheckCircle2
                          size={17}
                          className="text-hugo-gold shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Block>
              )}

              {/* Curriculum */}
              {modules.length > 0 && (
                <Block title="Curriculum">
                  <div className="space-y-3">
                    {modules.map((mod, idx) => (
                      <div
                        key={idx}
                        className="border border-hugo-black/8 rounded-xl overflow-hidden"
                      >
                        <div className="flex items-center gap-3 px-5 py-3.5 bg-hugo-cream-warm">
                          <span className="text-xs font-semibold text-hugo-gold">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-sm font-semibold text-hugo-black">
                            {mod.title}
                          </h3>
                        </div>
                        {mod.lessons.length > 0 && (
                          <ul className="divide-y divide-hugo-black/5">
                            {mod.lessons.map((lesson, li) => (
                              <li
                                key={li}
                                className="flex items-center gap-2.5 px-5 py-2.5 text-sm text-hugo-black/70"
                              >
                                <ChevronRight size={13} className="text-hugo-black/30 shrink-0" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </Block>
              )}

              {/* Value propositions */}
              {features.length > 0 && (
                <Block title="Why this course">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {features.map((f, idx) => (
                      <div key={idx} className="bg-hugo-cream-warm rounded-xl p-4">
                        {f.label && (
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-hugo-gold mb-1.5">
                            {f.label}
                          </p>
                        )}
                        <p className="text-sm text-hugo-black/80 leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </Block>
              )}

              {/* Instructor */}
              <Block title="Your instructor">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-hugo-gold/20 flex items-center justify-center shrink-0 text-hugo-black font-bold text-lg">
                    {course.instructor.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-hugo-black mb-1">{course.instructor}</p>
                    {course.instructorBio && (
                      <p className="text-sm text-hugo-black/70 leading-relaxed whitespace-pre-wrap">
                        {course.instructorBio}
                      </p>
                    )}
                  </div>
                </div>
              </Block>
            </div>

            {/* Sticky sidebar */}
            <aside className="lg:sticky lg:top-32 self-start">
              <div className="bg-white rounded-2xl border border-white shadow-sm p-5">
                <div className="text-3xl font-semibold text-hugo-black mb-1">
                  {course.price}
                </div>
                <p className="text-xs text-hugo-black/50 mb-5">
                  One-time payment · Lifetime access
                </p>
                <a
                  href={course.enrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center h-10 px-5 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors mb-3"
                >
                  Enroll now
                </a>
                <p className="text-[11px] text-center text-hugo-black/40">
                  Hosted on Teachable · Secure checkout
                </p>

                <div className="mt-6 pt-5 border-t border-hugo-black/5 space-y-2.5 text-sm">
                  <Fact label="Instructor" value={course.instructor} />
                  <Fact label="Level" value="All levels" />
                  <Fact label="Modules" value={`${modules.length} modules`} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-semibold text-hugo-black tracking-tight mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-hugo-black/5 pb-2 last:border-b-0 last:pb-0">
      <dt className="text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50">
        {label}
      </dt>
      <dd className="text-xs font-medium text-hugo-black text-right">{value}</dd>
    </div>
  );
}
