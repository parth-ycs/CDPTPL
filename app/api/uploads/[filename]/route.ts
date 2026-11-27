import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const UPLOAD_DIR =
  process.env.UPLOAD_DIR ?? path.join(process.cwd(), "storage", "uploads");

const FILENAME = /^[a-f0-9-]{36}\.(jpg|png|webp|gif)$/;
const TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
};

// Public: uploaded images are served to site visitors.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  if (!FILENAME.test(filename)) return new Response("Not found", { status: 404 });

  try {
    const data = await fs.readFile(path.join(UPLOAD_DIR, filename));
    return new Response(new Uint8Array(data), {
      headers: {
        "Content-Type": TYPES[filename.split(".").pop()!],
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
