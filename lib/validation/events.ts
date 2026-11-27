import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const nullableTrimmed = z
  .string()
  .trim()
  .nullable()
  .optional()
  .transform((v) => (v && v.length > 0 ? v : null));

const optionalUrlSchema = z
  .string()
  .trim()
  .nullable()
  .optional()
  .refine(
    (v) => {
      if (!v || v.length === 0) return true;
      if (v.startsWith("/")) return true;
      try {
        const parsed = new URL(v);
        return parsed.protocol === "http:" || parsed.protocol === "https:";
      } catch {
        return false;
      }
    },
    { message: "Must be a valid http(s) URL or relative path" },
  )
  .transform((v) => (v && v.length > 0 ? v : null));

const baseEventFields = {
  title: z.string().trim().min(1, "Title is required").max(200),
  category: z.string().trim().min(1, "Category is required").max(100),
  date: z.string().trim().min(1, "Date is required").max(100),
  location: z.string().trim().min(1, "Location is required").max(150),
  venue: z.string().trim().min(1, "Venue is required").max(200),
  stand: nullableTrimmed,
  description: z.string().trim().min(1, "Description is required"),
  image: z.string().trim().min(1, "Banner image is required"),
  imageAlt: z.string().trim().min(1, "Image alt text is required"),
  url: optionalUrlSchema,
  displayOrder: z.number().int().default(0),
};

export const createEventSchema = z
  .object({
    id: z
      .string()
      .trim()
      .min(1, "Slug / ID is required")
      .max(120)
      .regex(slugRegex, "ID must be lowercase letters, numbers, and hyphens"),
    ...baseEventFields,
  })
  .strict();

export const updateEventSchema = z
  .object(baseEventFields)
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