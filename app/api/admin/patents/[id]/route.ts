import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  deletePatent,
  getPatentById,
  updatePatent,
} from "@/lib/db/queries/patents";
import { formatZodError, updatePatentSchema } from "@/lib/validation/patents";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const patent = getPatentById(id);
  if (!patent) {
    return NextResponse.json({ error: "Patent not found" }, { status: 404 });
  }

  return NextResponse.json({ patent });
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

  const parsed = updatePatentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  const updated = updatePatent(id, parsed.data);
  if (!updated) {
    return NextResponse.json({ error: "Patent not found" }, { status: 404 });
  }

  revalidatePath("/patents");

  return NextResponse.json({ patent: updated });
}

export async function DELETE(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const deleted = deletePatent(id);
  if (!deleted) {
    return NextResponse.json({ error: "Patent not found" }, { status: 404 });
  }

  revalidatePath("/patents");

  return NextResponse.json({ ok: true });
}