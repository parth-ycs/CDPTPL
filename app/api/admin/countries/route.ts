import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  countryExists,
  createCountry,
  getCountries,
} from "@/lib/db/queries/global-presence";
import {
  createCountrySchema,
  formatZodError,
} from "@/lib/validation/global-contact";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ countries: getCountries() });
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

  const parsed = createCountrySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (countryExists(parsed.data.id)) {
    return NextResponse.json(
      { error: `Country ID "${parsed.data.id}" already exists` },
      { status: 409 },
    );
  }

  const country = createCountry(parsed.data);
  revalidatePath("/global-presence");

  return NextResponse.json({ country }, { status: 201 });
}