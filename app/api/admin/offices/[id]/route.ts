import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  countryExists,
  deleteOffice,
  getOfficeById,
  updateOffice,
} from "@/lib/db/queries/global-presence";
import {
  formatZodError,
  updateOfficeSchema,
} from "@/lib/validation/global-contact";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const office = getOfficeById(id);
  if (!office) {
    return NextResponse.json({ error: "Office not found" }, { status: 404 });
  }

  return NextResponse.json({ office });
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

  const parsed = updateOfficeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (parsed.data.countryId && !countryExists(parsed.data.countryId)) {
    return NextResponse.json(
      { error: "Selected country does not exist" },
      { status: 400 },
    );
  }

  const updated = updateOffice(id, parsed.data);
  if (!updated) {
    return NextResponse.json({ error: "Office not found" }, { status: 404 });
  }

  revalidatePath("/contact");
  revalidatePath("/global-presence");

  return NextResponse.json({ office: updated });
}

export async function DELETE(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const deleted = deleteOffice(id);
  if (!deleted) {
    return NextResponse.json({ error: "Office not found" }, { status: 404 });
  }

  revalidatePath("/contact");
  revalidatePath("/global-presence");

  return NextResponse.json({ ok: true });
}