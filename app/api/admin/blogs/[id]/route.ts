import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdminApi } from "@/lib/auth/session";
import { deleteBlog, getBlogById, updateBlog } from "@/lib/db/queries/blogs";
import { formatZodError, updateBlogSchema } from "@/lib/validation/blogs";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  return NextResponse.json({ blog });
}

export async function PATCH(request: Request, { params }: Ctx) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const { id } = await params;
  const parsed = updateBlogSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: formatZodError(parsed.error) }, { status: 400 });
  }

  const blog = updateBlog(id, parsed.data);
  if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  revalidatePath("/blogs");
  revalidatePath(`/blogs/${id}`);
  return NextResponse.json({ blog });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const { id } = await params;
  if (!deleteBlog(id)) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  revalidatePath("/blogs");
  revalidatePath(`/blogs/${id}`);
  return NextResponse.json({ ok: true });
}
