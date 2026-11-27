import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  createPatent,
  getPatents,
  patentExists,
} from "@/lib/db/queries/patents";
import { createPatentSchema, formatZodError } from "@/lib/validation/patents";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ patents: getPatents() });
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

  const parsed = createPatentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (patentExists(parsed.data.id)) {
    return NextResponse.json(
      { error: `A patent with ID "${parsed.data.id}" already exists` },
      { status: 409 },
    );
  }

  const patent = createPatent(parsed.data);

  revalidatePath("/patents");

  return NextResponse.json({ patent }, { status: 201 });
}