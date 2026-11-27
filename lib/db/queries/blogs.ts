import db from "@/lib/db";
import type { BlogPost } from "@/data/blogs";
import type { CreateBlogInput, UpdateBlogInput } from "@/lib/validation/blogs";

type BlogRow = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author_name: string;
  published_at: string;
  image: string;
  image_alt: string;
  likes: number;
  content: string;
};

// The shape is defined once, in data/blogs.ts
export type Blog = BlogPost;

const SELECT_COLUMNS = `
  id, title, excerpt, category, author_name, published_at,
  image, image_alt, likes, content
`;

function toBlog(row: BlogRow): Blog {
  return {
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    author: { name: row.author_name },
    publishedAt: row.published_at,
    image: row.image,
    imageAlt: row.image_alt,
    likes: row.likes,
    content: row.content,
  };
}

export function getBlogs(): Blog[] {
  const rows = db
    .prepare(
      `SELECT ${SELECT_COLUMNS} FROM blogs ORDER BY published_at DESC, rowid DESC`
    )
    .all() as BlogRow[];
  return rows.map(toBlog);
}

export function getBlogById(id: string): Blog | null {
  const row = db
    .prepare(`SELECT ${SELECT_COLUMNS} FROM blogs WHERE id = ?`)
    .get(id) as BlogRow | undefined;
  return row ? toBlog(row) : null;
}

export function getBlogCategories(): string[] {
  const rows = db
    .prepare("SELECT DISTINCT category FROM blogs ORDER BY category")
    .all() as { category: string }[];
  return rows.map((r) => r.category);
}

export function blogExists(id: string): boolean {
  return !!db.prepare("SELECT 1 FROM blogs WHERE id = ?").get(id);
}

export function createBlog(input: CreateBlogInput): Blog {
  db.prepare(
    `INSERT INTO blogs (
       id, title, excerpt, category, author_name,
       published_at, image, image_alt, likes, content
     ) VALUES (
       @id, @title, @excerpt, @category, @author_name,
       @published_at, @image, @image_alt, 0, @content
     )`
  ).run({
    id: input.id,
    title: input.title,
    excerpt: input.excerpt,
    category: input.category,
    author_name: input.authorName,
    published_at: input.publishedAt,
    image: input.image,
    image_alt: input.imageAlt,
    content: input.content,
  });
  return getBlogById(input.id)!;
}

// Whitelist of updatable columns (API field -> SQL column).
const UPDATABLE: Record<keyof UpdateBlogInput, string> = {
  title: "title",
  excerpt: "excerpt",
  category: "category",
  authorName: "author_name",
  publishedAt: "published_at",
  image: "image",
  imageAlt: "image_alt",
  content: "content",
};

export function updateBlog(id: string, patch: UpdateBlogInput): Blog | null {
  const sets: string[] = [];
  const params: Record<string, unknown> = { id };

  for (const key of Object.keys(UPDATABLE) as (keyof UpdateBlogInput)[]) {
    if (patch[key] !== undefined) {
      sets.push(`${UPDATABLE[key]} = @${key}`);
      params[key] = patch[key];
    }
  }

  if (sets.length > 0) {
    const result = db
      .prepare(`UPDATE blogs SET ${sets.join(", ")} WHERE id = @id`)
      .run(params);
    if (result.changes === 0) return null;
  }
  return getBlogById(id);
}

export function deleteBlog(id: string): boolean {
  return db.prepare("DELETE FROM blogs WHERE id = ?").run(id).changes > 0;
}

/* ----------------------------- public site ------------------------------ */

/** Most-liked posts (sidebar on /blogs). */
export function getTrendingBlogs(limit = 3): Blog[] {
  const rows = db
    .prepare(
      `SELECT ${SELECT_COLUMNS} FROM blogs
       ORDER BY likes DESC, published_at DESC
       LIMIT ?`
    )
    .all(limit) as BlogRow[];
  return rows.map(toBlog);
}

/** Same-category posts first, then the latest others to fill the list. */
export function getRelatedBlogs(id: string, category: string, limit = 3): Blog[] {
  const rows = db
    .prepare(
      `SELECT ${SELECT_COLUMNS} FROM blogs
       WHERE id != ?
       ORDER BY (category = ?) DESC, published_at DESC
       LIMIT ?`
    )
    .all(id, category, limit) as BlogRow[];
  return rows.map(toBlog);
}

/** delta is +1 (like) or -1 (unlike). Returns the new count, or null if the blog doesn't exist. */
export function adjustLikes(id: string, delta: 1 | -1): number | null {
  const result = db
    .prepare("UPDATE blogs SET likes = MAX(likes + ?, 0) WHERE id = ?")
    .run(delta, id);
  if (result.changes === 0) return null;
  const row = db.prepare("SELECT likes FROM blogs WHERE id = ?").get(id) as { likes: number };
  return row.likes;
}
