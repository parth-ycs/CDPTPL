import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdminApi } from "@/lib/auth/session";
import { blogExists, createBlog, getBlogs } from "@/lib/db/queries/blogs";
import { createBlogSchema, formatZodError } from "@/lib/validation/blogs";

export const runtime = "nodejs";

export async function GET() {
  const denied = await requireAdminApi();
  if (denied) return denied;

  return NextResponse.json({ blogs: getBlogs() });
}

export async function POST(request: Request) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const parsed = createBlogSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: formatZodError(parsed.error) }, { status: 400 });
  }

  if (blogExists(parsed.data.id)) {
    return NextResponse.json(
      { error: "A blog with this slug already exists" },
      { status: 409 }
    );
  }

  const blog = createBlog(parsed.data);
  revalidatePath("/blogs");
  revalidatePath(`/blogs/${blog.id}`);
  return NextResponse.json({ blog }, { status: 201 });
}
