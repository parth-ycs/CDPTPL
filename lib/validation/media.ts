import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const hrefSchema = z
  .string()
  .trim()
  .optional()
  .refine(
    (v) => {
      if (!v || v.length === 0) return true;
      if (v.startsWith("/") || v.startsWith("#")) return true;
      try {
        const parsed = new URL(v);
        return parsed.protocol === "http:" || parsed.protocol === "https:";
      } catch {
        return false;
      }
    },
    { message: "Must be a valid http(s) URL, relative path, or #anchor" },
  )
  .transform((v) => (v && v.length > 0 ? v : "#enquiry"));

const baseMediaFields = {
  category: z.string().trim().min(1, "Category is required").max(100),
  date: z.string().trim().min(1, "Date is required").max(100),
  title: z.string().trim().min(1, "Title is required").max(220),
  location: z.string().trim().min(1, "Location is required").max(150),
  description: z.string().trim().min(1, "Description is required"),
  image: z.string().trim().min(1, "Image is required"),
  href: hrefSchema,
  displayOrder: z.number().int().default(0),
};

export const createMediaSchema = z
  .object({
    id: z
      .string()
      .trim()
      .min(1, "Slug / ID is required")
      .max(120)
      .regex(slugRegex, "ID must be lowercase letters, numbers, and hyphens"),
    ...baseMediaFields,
  })
  .strict();

export const updateMediaSchema = z
  .object(baseMediaFields)
  .partial()
  .strict();

export function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((issue) => {
      const path = issue.path.join(".");
      return path ? `${path}: ${issue.message}` : issue.message;
    })
    .join("; ");
}