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
  let slug = slugify(base) || "job";
  let suffix = 1;
  while (true) {
    const existing = await prisma.job.findUnique({ where: { slug } });
    if (!existing || existing.id === ignoreId) return slug;
    suffix += 1;
    slug = `${slugify(base)}-${suffix}`;
  }
}

function extractJobInput(formData: FormData) {
  const get = (key: string) => (formData.get(key) ?? "").toString().trim();
  return {
    title: get("title"),
    department: get("department") || null,
    location: get("location"),
    employmentType: get("employmentType"),
    salaryRange: get("salaryRange") || null,
    shortDescription: get("shortDescription"),
    description: get("description"),
    responsibilities: get("responsibilities"),
    requirements: get("requirements"),
    niceToHave: get("niceToHave") || null,
    benefits: get("benefits") || null,
    applyEmail: get("applyEmail") || null,
    status: get("status") || "published",
  };
}

export async function createJob(formData: FormData) {
  await requireAdmin();
  const data = extractJobInput(formData);
  if (!data.title || !data.location || !data.employmentType) {
    throw new Error("Title, location, and employment type are required.");
  }
  const slug = await uniqueSlug(data.title);
  await prisma.job.create({ data: { ...data, slug } });
  revalidatePath("/admin");
  revalidatePath("/jobs");
  redirect("/admin");
}

export async function updateJob(id: string, formData: FormData) {
  await requireAdmin();
  const data = extractJobInput(formData);
  if (!data.title || !data.location || !data.employmentType) {
    throw new Error("Title, location, and employment type are required.");
  }
  const existing = await prisma.job.findUnique({ where: { id } });
  if (!existing) throw new Error("Job not found");
  const slug =
    existing.title === data.title
      ? existing.slug
      : await uniqueSlug(data.title, id);
  await prisma.job.update({ where: { id }, data: { ...data, slug } });
  revalidatePath("/admin");
  revalidatePath("/jobs");
  revalidatePath(`/jobs/${slug}`);
  redirect("/admin");
}

export async function deleteJob(id: string) {
  await requireAdmin();
  const job = await prisma.job.findUnique({ where: { id } });
  if (!job) return;
  await prisma.job.delete({ where: { id } });
  revalidatePath("/admin");
  revalidatePath("/jobs");
  revalidatePath(`/jobs/${job.slug}`);
}

export async function updateApplicationStatus(
  id: string,
  status: "new" | "reviewing" | "interviewed" | "rejected" | "hired"
) {
  await requireAdmin();
  await prisma.application.update({ where: { id }, data: { status } });
  revalidatePath("/admin/applications");
}

export async function deleteApplication(id: string) {
  await requireAdmin();
  await prisma.application.delete({ where: { id } });
  revalidatePath("/admin/applications");
}
