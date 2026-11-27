import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  countryExists,
  createOffice,
  getOffices,
  officeExists,
} from "@/lib/db/queries/global-presence";
import {
  createOfficeSchema,
  formatZodError,
} from "@/lib/validation/global-contact";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ offices: getOffices() });
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

  const parsed = createOfficeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (officeExists(parsed.data.id)) {
    return NextResponse.json(
      { error: `An office with ID "${parsed.data.id}" already exists` },
      { status: 409 },
    );
  }

  if (!countryExists(parsed.data.countryId)) {
    return NextResponse.json(
      { error: "Selected country does not exist" },
      { status: 400 },
    );
  }

  const office = createOffice(parsed.data);

  revalidatePath("/contact");
  revalidatePath("/global-presence");

  return NextResponse.json({ office }, { status: 201 });
}