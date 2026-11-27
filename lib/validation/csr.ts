import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const baseCsrFields = {
  title: z.string().trim().min(1, "Title is required").max(200),
  category: z.string().trim().min(1, "Category is required").max(100),
  location: z.string().trim().min(1, "Location is required").max(150),
  description: z.string().trim().min(1, "Description is required"),
  image: z.string().trim().min(1, "Image is required"),
  imageAlt: z.string().trim().min(1, "Image alt text is required"),
  displayOrder: z.number().int().default(0),
};

export const createCsrSchema = z
  .object({
    id: z
      .string()
      .trim()
      .min(1, "Slug / ID is required")
      .max(120)
      .regex(slugRegex, "ID must be lowercase letters, numbers, and hyphens"),
    ...baseCsrFields,
  })
  .strict();

export const updateCsrSchema = z
  .object(baseCsrFields)
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