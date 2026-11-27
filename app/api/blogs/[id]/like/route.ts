import { NextResponse } from "next/server";
import { z } from "zod";
import { adjustLikes } from "@/lib/db/queries/blogs";

export const runtime = "nodejs";

const schema = z.object({ liked: z.boolean() });

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { id } = await params;
  const likes = adjustLikes(id, parsed.data.liked ? 1 : -1);
  if (likes === null) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
  return NextResponse.json({ likes });
}
