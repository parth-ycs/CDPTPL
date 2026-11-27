import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth/session";
import { getSBUs } from "@/lib/db/queries/solutions";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ sbus: getSBUs() });
}