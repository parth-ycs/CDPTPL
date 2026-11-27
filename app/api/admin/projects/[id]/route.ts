import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { requireAdminApi } from "@/lib/auth/session";
import {
  deleteProject,
  getProjectById,
  updateProject,
} from "@/lib/db/queries/projects";
import {
  formatZodError,
  updateProjectSchema,
} from "@/lib/validation/projects";

export const runtime = "nodejs";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json({ project });
}

export async function PATCH(request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = updateProjectSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: formatZodError(parsed.error) },
      { status: 400 },
    );
  }

  const { globalPresence, ...projectData } = parsed.data;

  const updated = updateProject(id, {
    ...projectData,
    ...(globalPresence
      ? {
          countryId: globalPresence.countryId ?? null,
          city: globalPresence.city ?? null,
          longitude: globalPresence.longitude ?? null,
          latitude: globalPresence.latitude ?? null,
          globalIndustry: globalPresence.globalIndustry ?? null,
          globalStatus: globalPresence.globalStatus,
          showOnGlobal: globalPresence.showOnGlobal,
        }
      : {}),
  });

  if (!updated) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  revalidatePath("/projects");
  revalidatePath(`/projects/${id}`);
  revalidatePath("/research-development");
  revalidatePath("/global-presence");

  return NextResponse.json({ project: updated });
}

export async function DELETE(_request: Request, { params }: Context) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await params;
  const deleted = deleteProject(id);

  if (!deleted) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  revalidatePath("/projects");
  revalidatePath(`/projects/${id}`);
  revalidatePath("/research-development");
  revalidatePath("/global-presence");

  return NextResponse.json({ ok: true });
}