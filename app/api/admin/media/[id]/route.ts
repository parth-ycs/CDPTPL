import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  deleteMediaItem,
  getMediaItemById,
  updateMediaItem,
} from "@/lib/db/queries/media";
import { formatZodError, updateMediaSchema } from "@/lib/validation/media";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const item = getMediaItemById(id);
  if (!item) {
    return NextResponse.json(
      { error: "Media article not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ item });
}

export async function PATCH(request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = updateMediaSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  const updated = updateMediaItem(id, parsed.data);
  if (!updated) {
    return NextResponse.json(
      { error: "Media article not found" },
      { status: 404 },
    );
  }

  revalidatePath("/media");
  revalidatePath("/");

  return NextResponse.json({ item: updated });
}

export async function DELETE(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const deleted = deleteMediaItem(id);
  if (!deleted) {
    return NextResponse.json(
      { error: "Media article not found" },
      { status: 404 },
    );
  }

  revalidatePath("/media");
  revalidatePath("/");

  return NextResponse.json({ ok: true });
}