import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const optionalTrimmed = z
  .string()
  .trim()
  .optional()
  .transform((v) => (v && v.length > 0 ? v : undefined));

const sectionImageSchema = z
  .object({
    src: z.string().trim().min(1),
    alt: z.string().trim().min(1),
    caption: optionalTrimmed,
  })
  .strict();

const sectionBase = {
  id: z.string().trim().min(1, "Section ID is required"),
  label: z.string().trim().min(1, "Section label is required"),
};

const overviewSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("overview"),
    heading: z.string().trim().min(1),
    description: z.string().trim().min(1),
    kpis: z
      .array(
        z
          .object({
            value: z.string().trim().min(1),
            label: z.string().trim().min(1),
          })
          .strict(),
      )
      .optional(),
  })
  .strict();

const productsSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("products"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    items: z.array(
      z
        .object({
          id: z.string().trim().min(1),
          name: z.string().trim().min(1),
          category: optionalTrimmed,
          description: z.string().trim().min(1),
          image: z
            .object({
              src: z.string().trim().min(1),
              alt: z.string().trim().min(1),
            })
            .strict(),
          specs: z.array(z.string().trim().min(1)).optional(),
        })
        .strict(),
    ),
  })
  .strict();

const servicesSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("services"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    items: z.array(
      z
        .object({
          title: z.string().trim().min(1),
          description: z.string().trim().min(1),
        })
        .strict(),
    ),
  })
  .strict();

const capabilitiesSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("capabilities"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    items: z.array(
      z
        .object({
          title: z.string().trim().min(1),
          description: z.string().trim().min(1),
          image: optionalTrimmed,
        })
        .strict(),
    ),
  })
  .strict();

const technicalSpecsSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("technical-specifications"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    items: z.array(
      z
        .object({
          name: z.string().trim().min(1),
          value: z.string().trim().min(1),
        })
        .strict(),
    ),
    image: sectionImageSchema.optional(),
    note: optionalTrimmed,
  })
  .strict();

const processFlowSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("process-flow"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    steps: z.array(
      z
        .object({
          title: z.string().trim().min(1),
          description: z.string().trim().min(1),
          output: optionalTrimmed,
          image: sectionImageSchema.optional(),
        })
        .strict(),
    ),
    note: optionalTrimmed,
  })
  .strict();

const lifecycleSupportSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("lifecycle-support"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    items: z.array(
      z
        .object({
          title: z.string().trim().min(1),
          description: z.string().trim().min(1),
          image: sectionImageSchema.optional(),
        })
        .strict(),
    ),
    note: optionalTrimmed,
  })
  .strict();

const standardsCertificationsSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("standards-certifications"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    items: z.array(
      z
        .object({
          title: z.string().trim().min(1),
          description: z.string().trim().min(1),
          reference: optionalTrimmed,
          image: sectionImageSchema.optional(),
        })
        .strict(),
    ),
    note: optionalTrimmed,
  })
  .strict();

const performanceSustainabilitySectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("performance-sustainability"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    metrics: z.array(
      z
        .object({
          title: z.string().trim().min(1),
          description: z.string().trim().min(1),
          value: optionalTrimmed,
          category: optionalTrimmed,
        })
        .strict(),
    ),
    note: optionalTrimmed,
  })
  .strict();

const downloadsResourcesSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("downloads-resources"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    items: z.array(
      z
        .object({
          title: z.string().trim().min(1),
          href: z.string().trim().min(1),
          description: optionalTrimmed,
          fileType: optionalTrimmed,
          external: z.boolean().optional(),
        })
        .strict(),
    ),
    note: optionalTrimmed,
  })
  .strict();

const faqsSectionSchema = z
  .object({
    ...sectionBase,
    type: z.literal("faqs"),
    heading: z.string().trim().min(1),
    intro: optionalTrimmed,
    items: z.array(
      z
        .object({
          question: z.string().trim().min(1),
          answer: z.string().trim().min(1),
        })
        .strict(),
    ),
  })
  .strict();

export const serviceSectionSchema = z.discriminatedUnion("type", [
  overviewSectionSchema,
  productsSectionSchema,
  servicesSectionSchema,
  capabilitiesSectionSchema,
  technicalSpecsSectionSchema,
  processFlowSectionSchema,
  lifecycleSupportSectionSchema,
  standardsCertificationsSectionSchema,
  performanceSustainabilitySectionSchema,
  downloadsResourcesSectionSchema,
  faqsSectionSchema,
]);

// =============================================
// SOLUTION SCHEMAS
// =============================================

const solutionHeroSchema = z
  .object({
    name: z.string().trim().min(1, "Solution name is required"),
    tagline: z.string().trim().min(1, "Tagline is required"),
    description: z.string().trim().min(1, "Description is required"),
    image: optionalTrimmed,
    imageAlt: optionalTrimmed,
  })
  .strict();

export const createSolutionSchema = z
  .object({
    sbuSlug: z.string().trim().min(1, "SBU is required"),
    groupSlug: z
      .string()
      .trim()
      .nullable()
      .optional()
      .transform((v) => (v && v.length > 0 ? v : undefined)),
    slug: z
      .string()
      .trim()
      .min(1, "Slug is required")
      .max(120)
      .regex(slugRegex, "Slug must be lowercase letters, numbers, and hyphens"),
    hero: solutionHeroSchema,
    sections: z.array(serviceSectionSchema).default([]),
    displayOrder: z.number().int().min(0).default(0),
  })
  .strict();

export const updateSolutionSchema = z
  .object({
    sbuSlug: z.string().trim().min(1).optional(),
    groupSlug: z
      .string()
      .trim()
      .nullable()
      .optional()
      .transform((v) => (v && v.length > 0 ? v : null)),
    slug: z.string().trim().min(1).max(120).regex(slugRegex).optional(),
    hero: solutionHeroSchema.optional(),
    sections: z.array(serviceSectionSchema).optional(),
    displayOrder: z.number().int().min(0).optional(),
  })
  .strict();

// =============================================
// SBU & NAVIGATION GROUP SCHEMAS
// =============================================

export const updateSbuSchema = z
  .object({
    number: z.string().trim().min(1).optional(),
    name: z.string().trim().min(1).optional(),
    eyebrow: z.string().trim().min(1).optional(),
    offerings: z.string().trim().min(1).optional(),
    image: z.string().trim().min(1).optional(),
    imageAlt: z.string().trim().min(1).optional(),
    capabilities: z.array(z.string().trim().min(1)).optional(),
    displayOrder: z.number().int().min(0).optional(),
  })
  .strict();

const baseGroupSchema = z.object({
  sbuSlug: z.string().trim().min(1, "Parent SBU is required"),
  title: z.string().trim().min(1, "Title is required"),
  eyebrow: z.string().trim().min(1, "Eyebrow is required"),
  tagline: z.string().trim().min(1, "Tagline is required"),
  description: z.string().trim().min(1, "Description is required"),
  overview: z.string().trim().min(1, "Overview is required"),
  image: z.string().trim().min(1, "Image is required"),
  displayOrder: z.number().int().min(0).default(0),
});

export const createSbuGroupSchema = baseGroupSchema
  .extend({
    slug: z
      .string()
      .trim()
      .min(1, "Slug is required")
      .max(120)
      .regex(slugRegex, "Slug must be lowercase letters, numbers, and hyphens"),
  })
  .strict();

export const updateSbuGroupSchema = baseGroupSchema.partial().strict();

export function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((issue) => {
      const path = issue.path.join(".");
      return path ? `${path}: ${issue.message}` : issue.message;
    })
    .join("; ");
}