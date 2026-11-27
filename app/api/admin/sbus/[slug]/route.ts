import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import { getSBU, updateSBU } from "@/lib/db/queries/solutions";
import { formatZodError, updateSbuSchema } from "@/lib/validation/solutions";

export const runtime = "nodejs";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { slug } = await params;
  const sbu = getSBU(slug);
  if (!sbu) {
    return NextResponse.json({ error: "SBU not found" }, { status: 404 });
  }

  return NextResponse.json({ sbu });
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

  const parsed = updateSbuSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  const updated = updateSBU(slug, parsed.data);
  if (!updated) {
    return NextResponse.json({ error: "SBU not found" }, { status: 404 });
  }

  revalidatePath("/solutions");
  revalidatePath(`/solutions/${slug}`);

  return NextResponse.json({ sbu: updated });
}