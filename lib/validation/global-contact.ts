import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const stringArray = z.array(z.string().trim().min(1)).default([]);

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

/* Contact Settings */
export const contactSettingsSchema = z
  .object({
    hqHeading: z.string().trim().min(1, "HQ heading is required"),
    hqCompany: z.string().trim().min(1, "HQ company is required"),
    hqAddressLines: z
      .array(z.string().trim().min(1))
      .min(1, "At least one HQ address line is required"),
    hqImage: z.string().trim().min(1, "HQ image is required"),
    hqImageAlt: z.string().trim().min(1, "HQ image alt is required"),
    supportHeading: z.string().trim().min(1, "Support heading is required"),
    supportTollFree: z.string().trim().min(1, "Toll-free phone is required"),
    supportTollFreeHref: z.string().trim().min(1, "Toll-free href is required"),
    supportEmail: z.string().trim().email("Valid support email is required"),
  })
  .strict();

/* Countries */
const baseCountryFields = {
  country: z.string().trim().min(1, "Country name is required"),
  countryCode: z
    .string()
    .trim()
    .length(2, "ISO alpha-2 code must be 2 letters (e.g. IN, US)")
    .transform((v) => v.toUpperCase()),
  isoNumeric: z
    .string()
    .trim()
    .min(1, "ISO numeric code is required (e.g. 356)"),
  region: z.string().trim().min(1, "Region is required"),
  city: z.string().trim().min(1, "Representative city/cities required"),
  summary: z.string().trim().min(1, "Summary is required"),
  capabilities: stringArray,
  longitude: z.number().min(-180).max(180),
  latitude: z.number().min(-90).max(90),
  displayOrder: z.number().int().default(0),
};

export const createCountrySchema = z
  .object({
    id: z.string().trim().min(1).max(100).regex(slugRegex),
    ...baseCountryFields,
  })
  .strict();

export const updateCountrySchema = z
  .object(baseCountryFields)
  .partial()
  .strict();

/* Offices */
const baseOfficeFields = {
  countryId: z.string().trim().min(1, "Country is required"),
  name: z.string().trim().min(1, "Map name is required"),
  title: z.string().trim().min(1, "Contact card title is required"),
  company: z.string().trim().min(1).default("Chemdist Group"),
  city: z.string().trim().min(1, "City is required"),
  summary: z.string().trim().default(""),
  capabilities: stringArray,
  longitude: nullableNumber,
  latitude: nullableNumber,
  addressLines: stringArray,
  phones: stringArray,
  email: nullableTrimmed,
  note: nullableTrimmed,
  mapUrl: nullableTrimmed,
  showOnContact: z.boolean().default(true),
  showOnGlobal: z.boolean().default(true),
  displayOrder: z.number().int().default(0),
};

export const createOfficeSchema = z
  .object({
    id: z.string().trim().min(1).max(120).regex(slugRegex),
    ...baseOfficeFields,
  })
  .strict();

export const updateOfficeSchema = z
  .object(baseOfficeFields)
  .partial()
  .strict();

/* Facilities */
const baseFacilityFields = {
  countryId: z.string().trim().min(1, "Country is required"),
  name: z.string().trim().min(1, "Facility name is required"),
  city: z.string().trim().min(1, "City is required"),
  summary: z.string().trim().min(1, "Summary is required"),
  capabilities: stringArray,
  longitude: z.number().min(-180).max(180),
  latitude: z.number().min(-90).max(90),
  displayOrder: z.number().int().default(0),
};

export const createFacilitySchema = z
  .object({
    id: z.string().trim().min(1).max(120).regex(slugRegex),
    ...baseFacilityFields,
  })
  .strict();

export const updateFacilitySchema = z
  .object(baseFacilityFields)
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