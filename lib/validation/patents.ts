import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const nullableTrimmed = z
  .string()
  .trim()
  .nullable()
  .optional()
  .transform((v) => (v && v.length > 0 ? v : null));

const basePatentFields = {
  title: z.string().trim().min(1, "Title is required").max(300),
  referenceLabel: z
    .string()
    .trim()
    .min(1, "Reference label is required")
    .max(120),
  applicationNumber: z
    .string()
    .trim()
    .min(1, "Patent / application number is required")
    .max(120),
  date: nullableTrimmed,
  image: z.string().trim().min(1, "Document image is required"),
  imageAlt: z.string().trim().min(1, "Image alt text is required"),
  displayOrder: z.number().int().default(0),
};

export const createPatentSchema = z
  .object({
    id: z
      .string()
      .trim()
      .min(1, "Slug / ID is required")
      .max(120)
      .regex(slugRegex, "ID must be lowercase letters, numbers, and hyphens"),
    ...basePatentFields,
  })
  .strict();

export const updatePatentSchema = z
  .object(basePatentFields)
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