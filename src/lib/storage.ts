import { put } from "@vercel/blob";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export type UploadedFile = {
  url: string;
  name: string;
  size: number;
};

/**
 * Upload a resume to durable storage.
 *
 * - If BLOB_READ_WRITE_TOKEN is set, uploads to Vercel Blob (private store).
 * - In local dev (no token, not on Vercel), writes to /public/uploads.
 * - In production without a token, throws — the local filesystem is read-only
 *   on serverless runtimes and the silent fallback would mask the misconfig.
 *
 * Blob URLs are not directly downloadable; serve via the admin resume API route.
 */
export async function uploadResume(
  file: File,
  applicationId: string
): Promise<UploadedFile> {
  const safeName = sanitizeFilename(file.name || "resume.pdf");
  const key = `resumes/${applicationId}-${Date.now()}-${safeName}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const blob = await put(key, file, {
        access: "private",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: file.type || "application/octet-stream",
      });
      return { url: blob.url, name: safeName, size: file.size };
    } catch (err) {
      console.error("[storage] Vercel Blob upload failed", {
        key,
        size: file.size,
        type: file.type,
        message: err instanceof Error ? err.message : String(err),
      });
      throw err;
    }
  }

  // No Blob token — only allow local filesystem fallback outside production.
  if (process.env.VERCEL || process.env.NODE_ENV === "production") {
    throw new Error(
      "BLOB_READ_WRITE_TOKEN is not set. Configure Vercel Blob in your project's environment variables."
    );
  }

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
