import { prisma } from "@/lib/prisma";
import { updateCourse } from "@/lib/courses";
import { CourseForm } from "../../_components/CourseForm";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function EditCoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await prisma.course.findUnique({ where: { id } });
  if (!course) notFound();

  const action = updateCourse.bind(null, course.id);

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
      <Link
        href="/admin/courses"
        className="text-xs font-semibold uppercase tracking-widest text-hugo-black/60 hover:text-hugo-black mb-5 inline-block"
      >
        ← All courses
      </Link>
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <h1 className="text-2xl md:text-3xl font-semibold text-hugo-black tracking-tight">
          Edit course
        </h1>
        <Link
          href={`/training/${course.slug}`}
          target="_blank"
          className="text-sm font-medium text-hugo-black hover:text-hugo-gold underline underline-offset-4"
        >
          View live ↗
        </Link>
      </div>
      <CourseForm action={action} course={course} submitLabel="Save changes" />
    </div>
  );
}
