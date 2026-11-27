import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  createCsrInitiative,
  csrInitiativeExists,
  getCsrInitiatives,
} from "@/lib/db/queries/csr";
import { createCsrSchema, formatZodError } from "@/lib/validation/csr";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ initiatives: getCsrInitiatives() });
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

  const parsed = createCsrSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (csrInitiativeExists(parsed.data.id)) {
    return NextResponse.json(
      { error: `A CSR initiative with ID "${parsed.data.id}" already exists` },
      { status: 409 },
    );
  }

  const initiative = createCsrInitiative(parsed.data);

  revalidatePath("/csr");

  return NextResponse.json({ initiative }, { status: 201 });
}