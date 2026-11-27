import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  createSBUGroup,
  getAllSBUGroups,
  sbuGroupExists,
} from "@/lib/db/queries/solutions";
import {
  createSbuGroupSchema,
  formatZodError,
} from "@/lib/validation/solutions";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ groups: getAllSBUGroups() });
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

  const parsed = createSbuGroupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (sbuGroupExists(parsed.data.slug)) {
    return NextResponse.json(
      { error: `Group "${parsed.data.slug}" already exists` },
      { status: 409 },
    );
  }

  const group = createSBUGroup(parsed.data);

  revalidatePath("/solutions");
  revalidatePath(`/solutions/${group.sbuSlug}`);
  revalidatePath(`/solutions/${group.slug}`);

  return NextResponse.json({ group }, { status: 201 });
}