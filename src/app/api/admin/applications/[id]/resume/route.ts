import { get } from "@vercel/blob";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { auth, isAdminEmail } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function contentDisposition(filename: string) {
  const safe = filename.replace(/[^\w.\- ]/g, "_").slice(0, 120);
  return `attachment; filename="${safe}"`;
}

function blobAccessForUrl(url: string): "private" | "public" {
  return url.includes(".private.blob.vercel-storage.com")
    ? "private"
    : "public";
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!isAdminEmail(session?.user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const application = await prisma.application.findUnique({
    where: { id },
    select: { resumeUrl: true, resumeName: true },
  });

  if (!application?.resumeUrl) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filename = application.resumeName || "resume.pdf";
  const disposition = contentDisposition(filename);

  if (application.resumeUrl.startsWith("/uploads/")) {
    const filePath = path.join(
      process.cwd(),
      "public",
      application.resumeUrl
    );
    try {
      const buffer = await readFile(filePath);
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": disposition,
          "Cache-Control": "private, no-store",
        },
      });
    } catch {
      return new NextResponse("Not found", { status: 404 });
    }
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return new NextResponse("Storage not configured", { status: 503 });
  }

  const result = await get(application.resumeUrl, {
    access: blobAccessForUrl(application.resumeUrl),
  });

  if (!result || result.statusCode !== 200) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType,
      "Content-Disposition": disposition,
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "private, no-store",
    },
  });
}
