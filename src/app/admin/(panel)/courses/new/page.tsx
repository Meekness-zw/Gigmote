import { createCourse } from "@/lib/courses";
import { CourseForm } from "../_components/CourseForm";
import Link from "next/link";

export default function NewCoursePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
      <Link
        href="/admin/courses"
        className="text-xs font-semibold uppercase tracking-widest text-hugo-black/60 hover:text-hugo-black mb-5 inline-block"
      >
        ← All courses
      </Link>
      <h1 className="text-2xl md:text-3xl font-semibold text-hugo-black tracking-tight mb-6">
        New course
      </h1>
      <CourseForm action={createCourse} submitLabel="Create course" />
    </div>
  );
}
