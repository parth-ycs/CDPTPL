import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  createSolution,
  getAllSolutions,
  getSBU,
  solutionExists,
} from "@/lib/db/queries/solutions";
import {
  createSolutionSchema,
  formatZodError,
} from "@/lib/validation/solutions";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  return NextResponse.json({ solutions: getAllSolutions() });
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

  const parsed = createSolutionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (!getSBU(parsed.data.sbuSlug)) {
    return NextResponse.json({ error: "Selected SBU does not exist" }, { status: 400 });
  }

  if (solutionExists(parsed.data.sbuSlug, parsed.data.slug)) {
    return NextResponse.json(
      {
        error: `Solution "${parsed.data.slug}" already exists under ${parsed.data.sbuSlug}`,
      },
      { status: 409 },
    );
  }

  const solution = createSolution(parsed.data);

  revalidatePath("/solutions");
  revalidatePath(`/solutions/${solution.sbuSlug}`);
  if (solution.groupSlug) {
    revalidatePath(`/solutions/${solution.groupSlug}`);
  }
  revalidatePath(`/solutions/${solution.sbuSlug}/${solution.slug}`);

  return NextResponse.json({ solution }, { status: 201 });
}