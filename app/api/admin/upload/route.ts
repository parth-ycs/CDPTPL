import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth/session";

export const runtime = "nodejs";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB
const MAX_PDF_SIZE = 15 * 1024 * 1024; // 15 MB
const UPLOAD_DIR =
  process.env.UPLOAD_DIR ?? path.join(process.cwd(), "storage", "uploads");

type AllowedExt = "jpg" | "png" | "webp" | "gif" | "pdf";

// Detect the real type from the file's first bytes, not the client-supplied name/MIME.
function detectExtension(b: Buffer): AllowedExt | null {
  if (b.length < 12) return null;
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "jpg";
  if (b[0] === 0x89 && b.toString("ascii", 1, 4) === "PNG") return "png";
  if (
    b.toString("ascii", 0, 4) === "RIFF" &&
    b.toString("ascii", 8, 12) === "WEBP"
  ) {
    return "webp";
  }
  if (b.toString("ascii", 0, 4) === "GIF8") return "gif";
  if (b.toString("ascii", 0, 5) === "%PDF-") return "pdf";
  return null;
}

export async function POST(request: Request) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  if (file.size > MAX_PDF_SIZE) {
    return NextResponse.json(
      { error: "File must be 15 MB or smaller" },
      { status: 413 },
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = detectExtension(buffer);
  if (!ext) {
    return NextResponse.json(
      { error: "Upload a JPG, PNG, WebP, GIF, or PDF file" },
      { status: 415 },
    );
  }

  if (ext !== "pdf" && file.size > MAX_IMAGE_SIZE) {
    return NextResponse.json(
      { error: "Image must be 5 MB or smaller" },
      { status: 413 },
    );
  }

  const filename = `${crypto.randomUUID()}.${ext}`;
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOAD_DIR, filename), buffer);

  return NextResponse.json({ url: `/api/uploads/${filename}` }, { status: 201 });
}