"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { auth, isAdminEmail } from "./auth";

async function requireAdmin() {
  const session = await auth();
  if (!isAdminEmail(session?.user?.email)) {
    throw new Error("Unauthorized");
  }
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

async function uniqueSlug(base: string, ignoreId?: string) {
  let slug = slugify(base) || "course";
  let suffix = 1;
  while (true) {
    const existing = await prisma.course.findUnique({ where: { slug } });
    if (!existing || existing.id === ignoreId) return slug;
    suffix += 1;
    slug = `${slugify(base)}-${suffix}`;
  }
}

function extractCourseInput(formData: FormData) {
  const get = (key: string) => (formData.get(key) ?? "").toString().trim();
  return {
    title: get("title"),
    tagline: get("tagline"),
    description: get("description"),
    price: get("price"),
    outcomes: get("outcomes"),
    curriculum: get("curriculum"),
    instructor: get("instructor"),
    instructorBio: get("instructorBio") || null,
    features: get("features") || null,
    enrollUrl: get("enrollUrl"),
    status: get("status") || "published",
    featured: get("featured") === "true",
  };
}

export async function createCourse(formData: FormData) {
  await requireAdmin();
  const data = extractCourseInput(formData);
  if (!data.title || !data.tagline || !data.enrollUrl) {
    throw new Error("Title, tagline, and enroll URL are required.");
  }
  const slug = await uniqueSlug(data.title);
  await prisma.course.create({ data: { ...data, slug } });
  revalidatePath("/admin/courses");
  revalidatePath("/training");
  redirect("/admin/courses");
}

export async function updateCourse(id: string, formData: FormData) {
  await requireAdmin();
  const data = extractCourseInput(formData);
  if (!data.title || !data.tagline || !data.enrollUrl) {
    throw new Error("Title, tagline, and enroll URL are required.");
  }
  const existing = await prisma.course.findUnique({ where: { id } });
  if (!existing) throw new Error("Course not found");
  const slug =
    existing.title === data.title
      ? existing.slug
      : await uniqueSlug(data.title, id);
  await prisma.course.update({ where: { id }, data: { ...data, slug } });
  revalidatePath("/admin/courses");
  revalidatePath("/training");
  revalidatePath(`/training/${slug}`);
  redirect("/admin/courses");
}

export async function deleteCourse(id: string) {
  await requireAdmin();
  const course = await prisma.course.findUnique({ where: { id } });
  if (!course) return;
  await prisma.course.delete({ where: { id } });
  revalidatePath("/admin/courses");
  revalidatePath("/training");
  revalidatePath(`/training/${course.slug}`);
}
