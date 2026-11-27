import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const optionalTrimmed = z
  .string()
  .trim()
  .optional()
  .transform((v) => (v && v.length > 0 ? v : undefined));

const nullableTrimmed = z
  .string()
  .trim()
  .nullable()
  .optional()
  .transform((v) => (v && v.length > 0 ? v : null));

const nullableNumber = z
  .number()
  .finite()
  .nullable()
  .optional()
  .transform((v) => (typeof v === "number" && Number.isFinite(v) ? v : null));

const detailsSchema = z
  .object({
    location: optionalTrimmed,
    plant: optionalTrimmed,
    capacity: optionalTrimmed,
    yearOfAward: optionalTrimmed,
    yearOfCompletion: optionalTrimmed,
    contractValue: optionalTrimmed,
    executionScope: optionalTrimmed,
  })
  .strict()
  .optional();

const heroSchema = z
  .object({
    eyebrow: z.string().trim().min(1, "Hero eyebrow is required"),
    heading: z.string().trim().min(1, "Hero heading is required"),
    description: z.string().trim().min(1, "Hero description is required"),
    image: z.string().trim().min(1, "Hero image is required"),
    imageAlt: z.string().trim().min(1, "Hero image alt text is required"),
  })
  .strict();

const overviewSchema = z
  .object({
    heading: z
      .object({
        before: z
          .string()
          .trim()
          .min(1, "Overview heading (before) is required"),
        highlight: optionalTrimmed,
        after: z
          .string()
          .trim()
          .optional()
          .transform((v) => v ?? ""),
      })
      .strict(),
    description: z.string().trim().min(1, "Overview description is required"),
    image: optionalTrimmed,
    imageAlt: optionalTrimmed,
  })
  .strict();

const problemSchema = z
  .object({
    heading: z.string().trim().min(1, "Challenge heading is required"),
    description: z.string().trim().min(1, "Challenge description is required"),
    image: optionalTrimmed,
    imageAlt: optionalTrimmed,
  })
  .strict()
  .nullable()
  .optional()
  .transform((v) => v ?? undefined);

const solutionSchema = z
  .object({
    heading: z.string().trim().min(1, "Solution heading is required"),
    description: z.string().trim().min(1, "Solution description is required"),
    image: optionalTrimmed,
    imageAlt: optionalTrimmed,
    points: z.array(z.string().trim().min(1)).default([]),
  })
  .strict();

const resultSchema = z
  .object({
    heading: z.string().trim().min(1, "Results heading is required"),
    description: z.string().trim().min(1, "Results description is required"),
    points: z.array(z.string().trim().min(1)).default([]),
  })
  .strict()
  .nullable()
  .optional()
  .transform((v) => v ?? undefined);

const globalPresenceSchema = z
  .object({
    countryId: nullableTrimmed,
    city: nullableTrimmed,
    longitude: nullableNumber,
    latitude: nullableNumber,
    globalIndustry: nullableTrimmed,
    globalStatus: z.enum(["completed", "ongoing"]).default("completed"),
    showOnGlobal: z.boolean().default(false),
  })
  .strict()
  .optional();

const baseProjectSchema = z.object({
  category: z.string().trim().min(1, "Category is required"),
  details: detailsSchema,
  hero: heroSchema,
  overview: overviewSchema,
  problem: problemSchema,
  solution: solutionSchema,
  result: resultSchema,
  globalPresence: globalPresenceSchema,
});

export const createProjectSchema = baseProjectSchema
  .extend({
    id: z
      .string()
      .trim()
      .min(1, "Slug is required")
      .max(120, "Slug must be 120 characters or fewer")
      .regex(
        slugRegex,
        "Slug must contain only lowercase letters, numbers, and hyphens",
      ),
  })
  .strict();

export const updateProjectSchema = baseProjectSchema.partial().strict();

export function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((issue) => {
      const path = issue.path.join(".");
      return path ? `${path}: ${issue.message}` : issue.message;
    })
    .join("; ");
}