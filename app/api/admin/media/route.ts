import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  createMediaItem,
  getMediaItems,
  mediaItemExists,
} from "@/lib/db/queries/media";
import { createMediaSchema, formatZodError } from "@/lib/validation/media";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ items: getMediaItems() });
}

export async function POST(request: Request) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = createMediaSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (mediaItemExists(parsed.data.id)) {
    return NextResponse.json(
      { error: `A media article with ID "${parsed.data.id}" already exists` },
      { status: 409 },
    );
  }

  const item = createMediaItem(parsed.data);

  revalidatePath("/media");
  revalidatePath("/");

  return NextResponse.json({ item }, { status: 201 });
}