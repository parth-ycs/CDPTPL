import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  deleteSolution,
  getSolutionById,
  solutionExists,
  updateSolution,
} from "@/lib/db/queries/solutions";
import {
  formatZodError,
  updateSolutionSchema,
} from "@/lib/validation/solutions";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const solution = getSolutionById(id);
  if (!solution) {
    return NextResponse.json({ error: "Solution not found" }, { status: 404 });
  }

  return NextResponse.json({ solution });
}

export async function PATCH(request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const existing = getSolutionById(id);
  if (!existing) {
    return NextResponse.json({ error: "Solution not found" }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = updateSolutionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  const nextSbu = parsed.data.sbuSlug ?? existing.sbuSlug;
  const nextSlug = parsed.data.slug ?? existing.slug;
  if (
    (nextSbu !== existing.sbuSlug || nextSlug !== existing.slug) &&
    solutionExists(nextSbu, nextSlug)
  ) {
    return NextResponse.json(
      { error: `Solution "${nextSlug}" already exists under ${nextSbu}` },
      { status: 409 },
    );
  }

  const updated = updateSolution(id, parsed.data);
  if (!updated) {
    return NextResponse.json({ error: "Solution not found" }, { status: 404 });
  }

  revalidatePath("/solutions");
  revalidatePath(`/solutions/${existing.sbuSlug}`);
  revalidatePath(`/solutions/${updated.sbuSlug}`);
  if (existing.groupSlug) revalidatePath(`/solutions/${existing.groupSlug}`);
  if (updated.groupSlug) revalidatePath(`/solutions/${updated.groupSlug}`);
  revalidatePath(`/solutions/${existing.sbuSlug}/${existing.slug}`);
  revalidatePath(`/solutions/${updated.sbuSlug}/${updated.slug}`);

  return NextResponse.json({ solution: updated });
}

export async function DELETE(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const existing = getSolutionById(id);
  if (!existing) {
    return NextResponse.json({ error: "Solution not found" }, { status: 404 });
  }

  deleteSolution(id);

  revalidatePath("/solutions");
  revalidatePath(`/solutions/${existing.sbuSlug}`);
  if (existing.groupSlug) revalidatePath(`/solutions/${existing.groupSlug}`);
  revalidatePath(`/solutions/${existing.sbuSlug}/${existing.slug}`);

  return NextResponse.json({ ok: true });
}