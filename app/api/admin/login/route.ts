import { NextResponse } from "next/server";
import { z } from "zod";
import { createSession, verifyCredentials } from "@/lib/auth/session";

export const runtime = "nodejs";

const schema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(200),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Enter your username and password" }, { status: 400 });
  }

  if (!verifyCredentials(parsed.data.username, parsed.data.password)) {
    await new Promise((r) => setTimeout(r, 800)); // slow down guessing
    return NextResponse.json({ error: "Incorrect username or password" }, { status: 401 });
  }

  await createSession();
  return NextResponse.json({ ok: true });
}
