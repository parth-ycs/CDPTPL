import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  deleteCsrInitiative,
  getCsrInitiativeById,
  updateCsrInitiative,
} from "@/lib/db/queries/csr";
import { formatZodError, updateCsrSchema } from "@/lib/validation/csr";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const initiative = getCsrInitiativeById(id);
  if (!initiative) {
    return NextResponse.json(
      { error: "CSR initiative not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ initiative });
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

  const parsed = updateCsrSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  const updated = updateCsrInitiative(id, parsed.data);
  if (!updated) {
    return NextResponse.json(
      { error: "CSR initiative not found" },
      { status: 404 },
    );
  }

  revalidatePath("/csr");

  return NextResponse.json({ initiative: updated });
}

export async function DELETE(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const deleted = deleteCsrInitiative(id);
  if (!deleted) {
    return NextResponse.json(
      { error: "CSR initiative not found" },
      { status: 404 },
    );
  }

  revalidatePath("/csr");

  return NextResponse.json({ ok: true });
}