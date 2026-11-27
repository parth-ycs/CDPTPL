import { z } from "zod";

export const slugSchema = z
  .string()
  .trim()
  .min(1, "Slug is required")
  .max(120)
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Use lowercase letters, numbers and hyphens only"
  );

const blogFields = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
  excerpt: z.string().trim().min(1, "Excerpt is required").max(500),
  category: z.string().trim().min(1, "Category is required").max(60),
  authorName: z.string().trim().min(1, "Author name is required").max(100),
  publishedAt: z
    .string()
    .trim()
    .refine((v) => !Number.isNaN(Date.parse(v)), "Enter a valid date"),
  image: z
    .string()
    .trim()
    .min(1, "Image is required")
    .max(500)
    .refine(
      (v) => v.startsWith("/") || /^https?:\/\//.test(v),
      "Image must be an uploaded file or a valid URL"
    ),
  imageAlt: z.string().trim().min(1, "Image description is required").max(200),
  content: z.string().min(1, "Content is required").max(200_000),
});

export const createBlogSchema = blogFields.extend({ id: slugSchema });

// The slug is the primary key and the public URL, so it can't be changed on update.
export const updateBlogSchema = blogFields.partial().strict();

export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;

export function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((i) => (i.path.length ? `${i.path.join(".")}: ${i.message}` : i.message))
    .join("; ");
}
