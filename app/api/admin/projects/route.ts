import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  createProject,
  getProjects,
  projectExists,
} from "@/lib/db/queries/projects";
import {
  createProjectSchema,
  formatZodError,
} from "@/lib/validation/projects";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const projects = getProjects();
  return NextResponse.json({ projects });
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

  const parsed = createProjectSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  if (projectExists(parsed.data.id)) {
    return NextResponse.json(
      { error: `A project with slug "${parsed.data.id}" already exists` },
      { status: 409 },
    );
  }

  const project = createProject(parsed.data);

  revalidatePath("/projects");
  revalidatePath(`/projects/${project.id}`);
  revalidatePath("/research-development");

  return NextResponse.json({ project }, { status: 201 });
}