import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AI Training · Gigmote",
  description:
    "Hands-on AI training courses built for the modern workforce. Learn to automate workflows, analyse data, and leverage AI tools with confidence.",
};

export default async function TrainingPage() {
  const courses = await prisma.course.findMany({
    where: { status: "published" },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });

  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <SectionLabel>AI Training</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hugo-black mb-5 leading-[1.05]">
            Skills that put AI to work.
          </h1>
          <p className="text-lg md:text-xl text-hugo-black/60 font-light max-w-3xl leading-relaxed">
            Practical, jargon-light courses designed to help teams automate
            workflows, analyse data, and create polished content — responsibly
            and confidently.
          </p>
        </div>
      </section>

      {/* Courses grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          {courses.length === 0 ? (
            <div className="bg-white rounded-2xl border border-white p-14 text-center shadow-sm">
              <BookOpen
                className="mx-auto mb-4 text-hugo-black/30"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-hugo-black mb-1.5">
                Courses coming soon
              </h3>
              <p className="text-sm text-hugo-black/60">
                We&apos;re putting the finishing touches on our training
                catalogue. Check back shortly.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/training/${course.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-white hover:border-hugo-black/20 hover:shadow-lg transition-all overflow-hidden"
                >
                  {/* Card header band */}
                  <div className="h-2 bg-hugo-gold w-full" />

                  <div className="flex flex-col flex-1 p-6">
                    {course.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-hugo-gold mb-3">
                        <Star size={10} fill="currentColor" />
                        Featured
                      </span>
                    )}
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-hugo-black/40 mb-2">
                      Course · {course.instructor}
                    </p>
                    <h2 className="text-xl font-semibold text-hugo-black tracking-tight mb-2 group-hover:text-hugo-gold transition-colors leading-snug">
                      {course.title}
                    </h2>
                    <p className="text-sm text-hugo-black/60 leading-relaxed mb-5 flex-1">
                      {course.tagline}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-hugo-black/5">
                      <span className="text-sm font-semibold text-hugo-black">
                        {course.price}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-hugo-black group-hover:text-hugo-gold transition-colors">
                        View course
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-hugo-black relative">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-hugo-gold mb-4">
            Corporate training
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-5">
            Need tailored AI training for your team?
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-8 max-w-xl mx-auto">
            We deliver customised workshops and programmes for organisations
            looking to build AI capability at scale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-11 px-7 text-sm bg-hugo-gold text-hugo-black font-semibold rounded-lg hover:bg-hugo-gold/90 transition-colors"
          >
            Talk to us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
