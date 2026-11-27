
import Database from "better-sqlite3";
import path from "node:path";
import { blogPosts } from "../data/blogs";

const dbPath = path.join(process.cwd(), "data", "cdptpl.db");

const db = new Database(dbPath);

db.pragma("foreign_keys = ON");

const insertBlog = db.prepare(`
  INSERT INTO blogs (
    id,
    title,
    excerpt,
    category,
    author_name,
    published_at,
    image,
    image_alt,
    likes,
    content
  )
  VALUES (
    @id,
    @title,
    @excerpt,
    @category,
    @author_name,
    @published_at,
    @image,
    @image_alt,
    @likes,
    @content
  )
  ON CONFLICT(id) DO NOTHING
`);

const seed = db.transaction(() => {
  for (const blog of blogPosts) {
    insertBlog.run({
      id: blog.id,
      title: blog.title,
      excerpt: blog.excerpt,
      category: blog.category,
      author_name: blog.author.name,
      published_at: blog.publishedAt,
      image: blog.image,
      image_alt: blog.imageAlt,
      likes: blog.likes,
      content: blog.content,
    });
  }
});

try {
  seed();

  const result = db
    .prepare("SELECT COUNT(*) AS total FROM blogs")
    .get() as { total: number };

  console.log("Blog import completed.");
  console.log(`Total blogs in database: ${result.total}`);
} finally {
  db.close();
}
