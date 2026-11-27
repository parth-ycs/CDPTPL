import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  createEvent,
  eventExists,
  getEvents,
} from "@/lib/db/queries/events";
import { createEventSchema, formatZodError } from "@/lib/validation/events";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ events: getEvents() });
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

  const parsed = createEventSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (eventExists(parsed.data.id)) {
    return NextResponse.json(
      { error: `An event with ID "${parsed.data.id}" already exists` },
      { status: 409 },
    );
  }

  const event = createEvent(parsed.data);

  revalidatePath("/events");

  return NextResponse.json({ event }, { status: 201 });
}