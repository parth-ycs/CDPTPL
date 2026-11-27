import "server-only";

import db from "@/lib/db";
import type { ContactOffice, ContactSettingsData } from "@/data/contact";

export type { ContactOffice, ContactSettingsData };

function parseStringArray(raw: string | null | undefined): string[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((v): v is string => typeof v === "string")
      : [];
  } catch {
    return [];
  }
}

type ContactSettingRow = {
  id: string;
  hq_heading: string;
  hq_company: string;
  hq_address_lines: string;
  hq_image: string;
  hq_image_alt: string;
  support_heading: string;
  support_toll_free: string;
  support_toll_free_href: string;
  support_email: string;
};

const DEFAULT_CONTACT_SETTINGS: ContactSettingsData = {
  hqHeading: "Headquarters",
  hqCompany: "Chemdist Group",
  hqAddressLines: [
    "Chemdist House,",
    "00 Sample Road, Wakdewadi,",
    "Pune 411003, Maharashtra, India",
  ],
  hqImage: "/images/contact/headquarters.png",
  hqImageAlt: "Chemdist Group headquarters building in Pune",
  supportHeading: "For customer support & general enquiries",
  supportTollFree: "1800-000-0000",
  supportTollFreeHref: "tel:18000000000",
  supportEmail: "customer.support@chemdist.com",
};

export function getContactSettings(): ContactSettingsData {
  const row = db
    .prepare(`SELECT * FROM contact_settings WHERE id = 'default'`)
    .get() as ContactSettingRow | undefined;

  if (!row) return DEFAULT_CONTACT_SETTINGS;

  return {
    hqHeading: row.hq_heading,
    hqCompany: row.hq_company,
    hqAddressLines: parseStringArray(row.hq_address_lines),
    hqImage: row.hq_image,
    hqImageAlt: row.hq_image_alt,
    supportHeading: row.support_heading,
    supportTollFree: row.support_toll_free,
    supportTollFreeHref: row.support_toll_free_href,
    supportEmail: row.support_email,
  };
}

export function updateContactSettings(
  data: ContactSettingsData,
): ContactSettingsData {
  db.prepare(`
    INSERT INTO contact_settings (
      id, hq_heading, hq_company, hq_address_lines, hq_image, hq_image_alt,
      support_heading, support_toll_free, support_toll_free_href, support_email
    ) VALUES (
      'default', @hq_heading, @hq_company, @hq_address_lines, @hq_image, @hq_image_alt,
      @support_heading, @support_toll_free, @support_toll_free_href, @support_email
    )
    ON CONFLICT(id) DO UPDATE SET
      hq_heading = excluded.hq_heading,
      hq_company = excluded.hq_company,
      hq_address_lines = excluded.hq_address_lines,
      hq_image = excluded.hq_image,
      hq_image_alt = excluded.hq_image_alt,
      support_heading = excluded.support_heading,
      support_toll_free = excluded.support_toll_free,
      support_toll_free_href = excluded.support_toll_free_href,
      support_email = excluded.support_email
  `).run({
    hq_heading: data.hqHeading,
    hq_company: data.hqCompany,
    hq_address_lines: JSON.stringify(data.hqAddressLines),
    hq_image: data.hqImage,
    hq_image_alt: data.hqImageAlt,
    support_heading: data.supportHeading,
    support_toll_free: data.supportTollFree,
    support_toll_free_href: data.supportTollFreeHref,
    support_email: data.supportEmail,
  });

  return getContactSettings();
}

type ContactOfficeRow = {
  id: string;
  title: string;
  company: string;
  address_lines: string;
  phones: string;
  email: string | null;
  note: string | null;
  map_url: string | null;
};

export function getContactOffices(): ContactOffice[] {
  const rows = db
    .prepare(
      `SELECT id, title, company, address_lines, phones, email, note, map_url
       FROM offices
       WHERE show_on_contact = 1
       ORDER BY display_order ASC, rowid ASC`,
    )
    .all() as ContactOfficeRow[];

  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    company: r.company,
    addressLines: parseStringArray(r.address_lines),
    phones: parseStringArray(r.phones),
    email: r.email ?? "",
    ...(r.note ? { note: r.note } : {}),
    ...(r.map_url ? { mapUrl: r.map_url } : {}),
  }));
}