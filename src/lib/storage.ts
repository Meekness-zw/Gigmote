import { put } from "@vercel/blob";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export type UploadedFile = {
  url: string;
  name: string;
  size: number;
};

/**
 * Upload a file to durable storage and return a public URL.
 *
 * - If BLOB_READ_WRITE_TOKEN is set, uploads to Vercel Blob.
 * - Otherwise writes to /public/uploads (local dev fallback).
 */
export async function uploadResume(
  file: File,
  applicationId: string
): Promise<UploadedFile> {
  const safeName = sanitizeFilename(file.name || "resume.pdf");
  const key = `resumes/${applicationId}-${Date.now()}-${safeName}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(key, file, {
      access: "public",
      addRandomSuffix: false,
      contentType: file.type || "application/octet-stream",
    });
    return { url: blob.url, name: safeName, size: file.size };
  }

  // Local fallback — writes under public/uploads/
  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadDir = path.join(process.cwd(), "public", "uploads", "resumes");
  await mkdir(uploadDir, { recursive: true });
  const filename = `${applicationId}-${Date.now()}-${safeName}`;
  await writeFile(path.join(uploadDir, filename), buffer);
  return {
    url: `/uploads/resumes/${filename}`,
    name: safeName,
    size: file.size,
  };
}

function sanitizeFilename(name: string) {
  return name
    .replace(/[^\w.\-]/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 120);
}
