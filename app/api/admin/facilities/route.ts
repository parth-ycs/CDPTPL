import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  countryExists,
  createFacility,
  facilityExists,
  getFacilities,
} from "@/lib/db/queries/global-presence";
import {
  createFacilitySchema,
  formatZodError,
} from "@/lib/validation/global-contact";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ facilities: getFacilities() });
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

  const parsed = createFacilitySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (facilityExists(parsed.data.id)) {
    return NextResponse.json(
      { error: `A facility with ID "${parsed.data.id}" already exists` },
      { status: 409 },
    );
  }

  if (!countryExists(parsed.data.countryId)) {
    return NextResponse.json(
      { error: "Selected country does not exist" },
      { status: 400 },
    );
  }

  const facility = createFacility(parsed.data);
  revalidatePath("/global-presence");

  return NextResponse.json({ facility }, { status: 201 });
}