import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  deleteCountry,
  getCountryById,
  updateCountry,
} from "@/lib/db/queries/global-presence";
import {
  formatZodError,
  updateCountrySchema,
} from "@/lib/validation/global-contact";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const country = getCountryById(id);
  if (!country) {
    return NextResponse.json({ error: "Country not found" }, { status: 404 });
  }

  return NextResponse.json({ country });
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

  const parsed = updateCountrySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  const updated = updateCountry(id, parsed.data);
  if (!updated) {
    return NextResponse.json({ error: "Country not found" }, { status: 404 });
  }

  revalidatePath("/global-presence");

  return NextResponse.json({ country: updated });
}

export async function DELETE(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const result = deleteCountry(id);
  if (!result.ok) {
    return NextResponse.json(
      { error: result.error || "Country not found" },
      { status: result.error ? 409 : 404 },
    );
  }

  revalidatePath("/global-presence");

  return NextResponse.json({ ok: true });
}