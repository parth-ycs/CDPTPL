import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  deleteSBUGroup,
  getSBUGroupBySlug,
  updateSBUGroup,
} from "@/lib/db/queries/solutions";
import {
  formatZodError,
  updateSbuGroupSchema,
} from "@/lib/validation/solutions";

export const runtime = "nodejs";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { slug } = await params;
  const group = getSBUGroupBySlug(slug);
  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  return NextResponse.json({ group });
}

export async function PATCH(request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { slug } = await params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = updateSbuGroupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  const updated = updateSBUGroup(slug, parsed.data);
  if (!updated) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  revalidatePath("/solutions");
  revalidatePath(`/solutions/${updated.sbuSlug}`);
  revalidatePath(`/solutions/${slug}`);

  return NextResponse.json({ group: updated });
}

export async function DELETE(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { slug } = await params;
  const existing = getSBUGroupBySlug(slug);
  if (!existing) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  deleteSBUGroup(slug);

  revalidatePath("/solutions");
  revalidatePath(`/solutions/${existing.sbuSlug}`);
  revalidatePath(`/solutions/${slug}`);

  return NextResponse.json({ ok: true });
}