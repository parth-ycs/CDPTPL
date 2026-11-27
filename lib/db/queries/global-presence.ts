import "server-only";

import db from "@/lib/db";
import type {
  GlobalFacility,
  GlobalLocation,
  GlobalOffice,
  GlobalProject,
} from "@/data/global-presence";

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

/* -------------------------------------------------------------------------- */
/* Countries                                                                  */
/* -------------------------------------------------------------------------- */

export type GlobalCountryRecord = {
  id: string;
  country: string;
  countryCode: string;
  isoNumeric: string;
  region: string;
  city: string;
  summary: string;
  capabilities: string[];
  longitude: number;
  latitude: number;
  displayOrder: number;
};

type CountryRow = {
  id: string;
  country: string;
  country_code: string;
  iso_numeric: string;
  region: string;
  city: string;
  summary: string;
  capabilities: string;
  longitude: number;
  latitude: number;
  display_order: number;
};

function toCountryRecord(row: CountryRow): GlobalCountryRecord {
  return {
    id: row.id,
    country: row.country,
    countryCode: row.country_code,
    isoNumeric: row.iso_numeric,
    region: row.region,
    city: row.city,
    summary: row.summary,
    capabilities: parseStringArray(row.capabilities),
    longitude: row.longitude,
    latitude: row.latitude,
    displayOrder: row.display_order,
  };
}

export function getCountries(): GlobalCountryRecord[] {
  const rows = db
    .prepare(
      `SELECT * FROM global_countries ORDER BY display_order ASC, rowid ASC`,
    )
    .all() as CountryRow[];
  return rows.map(toCountryRecord);
}

export function getCountryById(id: string): GlobalCountryRecord | null {
  const row = db
    .prepare(`SELECT * FROM global_countries WHERE id = ?`)
    .get(id) as CountryRow | undefined;
  return row ? toCountryRecord(row) : null;
}

export function countryExists(id: string): boolean {
  return Boolean(
    db.prepare(`SELECT 1 FROM global_countries WHERE id = ?`).get(id),
  );
}

export function createCountry(
  data: GlobalCountryRecord,
): GlobalCountryRecord {
  db.prepare(`
    INSERT INTO global_countries (
      id, country, country_code, iso_numeric, region, city, summary, capabilities, longitude, latitude, display_order
    ) VALUES (
      @id, @country, @country_code, @iso_numeric, @region, @city, @summary, @capabilities, @longitude, @latitude, @display_order
    )
  `).run({
    id: data.id,
    country: data.country,
    country_code: data.countryCode.toUpperCase(),
    iso_numeric: data.isoNumeric,
    region: data.region,
    city: data.city,
    summary: data.summary,
    capabilities: JSON.stringify(data.capabilities),
    longitude: data.longitude,
    latitude: data.latitude,
    display_order: data.displayOrder,
  });
  return getCountryById(data.id)!;
}

export function updateCountry(
  id: string,
  patch: Partial<Omit<GlobalCountryRecord, "id">>,
): GlobalCountryRecord | null {
  const sets: string[] = [];
  const params: Record<string, string | number> = { id };

  if (patch.country !== undefined) {
    sets.push("country = @country");
    params.country = patch.country;
  }
  if (patch.countryCode !== undefined) {
    sets.push("country_code = @country_code");
    params.country_code = patch.countryCode.toUpperCase();
  }
  if (patch.isoNumeric !== undefined) {
    sets.push("iso_numeric = @iso_numeric");
    params.iso_numeric = patch.isoNumeric;
  }
  if (patch.region !== undefined) {
    sets.push("region = @region");
    params.region = patch.region;
  }
  if (patch.city !== undefined) {
    sets.push("city = @city");
    params.city = patch.city;
  }
  if (patch.summary !== undefined) {
    sets.push("summary = @summary");
    params.summary = patch.summary;
  }
  if (patch.capabilities !== undefined) {
    sets.push("capabilities = @capabilities");
    params.capabilities = JSON.stringify(patch.capabilities);
  }
  if (patch.longitude !== undefined) {
    sets.push("longitude = @longitude");
    params.longitude = patch.longitude;
  }
  if (patch.latitude !== undefined) {
    sets.push("latitude = @latitude");
    params.latitude = patch.latitude;
  }
  if (patch.displayOrder !== undefined) {
    sets.push("display_order = @display_order");
    params.display_order = patch.displayOrder;
  }

  if (sets.length === 0) return getCountryById(id);

  const info = db
    .prepare(`UPDATE global_countries SET ${sets.join(", ")} WHERE id = @id`)
    .run(params);
  if (info.changes === 0) return null;
  return getCountryById(id);
}

export function deleteCountry(id: string): { ok: boolean; error?: string } {
  const refs = db
    .prepare(
      `SELECT
        (SELECT COUNT(*) FROM offices WHERE country_id = @id) +
        (SELECT COUNT(*) FROM facilities WHERE country_id = @id) as total`,
    )
    .get({ id }) as { total: number };

  if (refs.total > 0) {
    return {
      ok: false,
      error:
        "Cannot delete country while offices or facilities are assigned to it.",
    };
  }

  const info = db
    .prepare(`DELETE FROM global_countries WHERE id = ?`)
    .run(id);
  return { ok: info.changes > 0 };
}

/* -------------------------------------------------------------------------- */
/* Offices                                                                    */
/* -------------------------------------------------------------------------- */

export type OfficeRecord = {
  id: string;
  countryId: string;
  countryName?: string;
  name: string;
  title: string;
  company: string;
  city: string;
  summary: string;
  capabilities: string[];
  longitude: number | null;
  latitude: number | null;
  addressLines: string[];
  phones: string[];
  email: string | null;
  note: string | null;
  mapUrl: string | null;
  showOnContact: boolean;
  showOnGlobal: boolean;
  displayOrder: number;
};

type OfficeRow = {
  id: string;
  country_id: string;
  country_name?: string;
  name: string;
  title: string;
  company: string;
  city: string;
  summary: string;
  capabilities: string;
  longitude: number | null;
  latitude: number | null;
  address_lines: string;
  phones: string;
  email: string | null;
  note: string | null;
  map_url: string | null;
  show_on_contact: number;
  show_on_global: number;
  display_order: number;
};

function toOfficeRecord(row: OfficeRow): OfficeRecord {
  return {
    id: row.id,
    countryId: row.country_id,
    ...(row.country_name ? { countryName: row.country_name } : {}),
    name: row.name,
    title: row.title,
    company: row.company,
    city: row.city,
    summary: row.summary,
    capabilities: parseStringArray(row.capabilities),
    longitude: row.longitude,
    latitude: row.latitude,
    addressLines: parseStringArray(row.address_lines),
    phones: parseStringArray(row.phones),
    email: row.email,
    note: row.note,
    mapUrl: row.map_url,
    showOnContact: Boolean(row.show_on_contact),
    showOnGlobal: Boolean(row.show_on_global),
    displayOrder: row.display_order,
  };
}

export function getOffices(): OfficeRecord[] {
  const rows = db
    .prepare(
      `SELECT o.*, c.country as country_name
       FROM offices o
       LEFT JOIN global_countries c ON c.id = o.country_id
       ORDER BY o.display_order ASC, o.rowid ASC`,
    )
    .all() as OfficeRow[];
  return rows.map(toOfficeRecord);
}

export function getOfficesCount(): number {
  const row = db.prepare(`SELECT COUNT(*) as count FROM offices`).get() as {
    count: number;
  };
  return row.count;
}

export function getOfficeById(id: string): OfficeRecord | null {
  const row = db
    .prepare(
      `SELECT o.*, c.country as country_name
       FROM offices o
       LEFT JOIN global_countries c ON c.id = o.country_id
       WHERE o.id = ?`,
    )
    .get(id) as OfficeRow | undefined;
  return row ? toOfficeRecord(row) : null;
}

export function officeExists(id: string): boolean {
  return Boolean(db.prepare(`SELECT 1 FROM offices WHERE id = ?`).get(id));
}

export function createOffice(
  data: Omit<OfficeRecord, "countryName">,
): OfficeRecord {
  db.prepare(`
    INSERT INTO offices (
      id, country_id, name, title, company, city, summary, capabilities,
      longitude, latitude, address_lines, phones, email, note, map_url,
      show_on_contact, show_on_global, display_order
    ) VALUES (
      @id, @country_id, @name, @title, @company, @city, @summary, @capabilities,
      @longitude, @latitude, @address_lines, @phones, @email, @note, @map_url,
      @show_on_contact, @show_on_global, @display_order
    )
  `).run({
    id: data.id,
    country_id: data.countryId,
    name: data.name,
    title: data.title,
    company: data.company,
    city: data.city,
    summary: data.summary,
    capabilities: JSON.stringify(data.capabilities),
    longitude: data.longitude,
    latitude: data.latitude,
    address_lines: JSON.stringify(data.addressLines),
    phones: JSON.stringify(data.phones),
    email: data.email || null,
    note: data.note || null,
    map_url: data.mapUrl || null,
    show_on_contact: data.showOnContact ? 1 : 0,
    show_on_global: data.showOnGlobal ? 1 : 0,
    display_order: data.displayOrder,
  });

  return getOfficeById(data.id)!;
}

export function updateOffice(
  id: string,
  patch: Partial<Omit<OfficeRecord, "id" | "countryName">>,
): OfficeRecord | null {
  const sets: string[] = [];
  const params: Record<string, string | number | null> = { id };

  if (patch.countryId !== undefined) {
    sets.push("country_id = @country_id");
    params.country_id = patch.countryId;
  }
  if (patch.name !== undefined) {
    sets.push("name = @name");
    params.name = patch.name;
  }
  if (patch.title !== undefined) {
    sets.push("title = @title");
    params.title = patch.title;
  }
  if (patch.company !== undefined) {
    sets.push("company = @company");
    params.company = patch.company;
  }
  if (patch.city !== undefined) {
    sets.push("city = @city");
    params.city = patch.city;
  }
  if (patch.summary !== undefined) {
    sets.push("summary = @summary");
    params.summary = patch.summary;
  }
  if (patch.capabilities !== undefined) {
    sets.push("capabilities = @capabilities");
    params.capabilities = JSON.stringify(patch.capabilities);
  }
  if ("longitude" in patch) {
    sets.push("longitude = @longitude");
    params.longitude = patch.longitude ?? null;
  }
  if ("latitude" in patch) {
    sets.push("latitude = @latitude");
    params.latitude = patch.latitude ?? null;
  }
  if (patch.addressLines !== undefined) {
    sets.push("address_lines = @address_lines");
    params.address_lines = JSON.stringify(patch.addressLines);
  }
  if (patch.phones !== undefined) {
    sets.push("phones = @phones");
    params.phones = JSON.stringify(patch.phones);
  }
  if ("email" in patch) {
    sets.push("email = @email");
    params.email = patch.email || null;
  }
  if ("note" in patch) {
    sets.push("note = @note");
    params.note = patch.note || null;
  }
  if ("mapUrl" in patch) {
    sets.push("map_url = @map_url");
    params.map_url = patch.mapUrl || null;
  }
  if (patch.showOnContact !== undefined) {
    sets.push("show_on_contact = @show_on_contact");
    params.show_on_contact = patch.showOnContact ? 1 : 0;
  }
  if (patch.showOnGlobal !== undefined) {
    sets.push("show_on_global = @show_on_global");
    params.show_on_global = patch.showOnGlobal ? 1 : 0;
  }
  if (patch.displayOrder !== undefined) {
    sets.push("display_order = @display_order");
    params.display_order = patch.displayOrder;
  }

  if (sets.length === 0) return getOfficeById(id);

  const info = db
    .prepare(`UPDATE offices SET ${sets.join(", ")} WHERE id = @id`)
    .run(params);
  if (info.changes === 0) return null;
  return getOfficeById(id);
}

export function deleteOffice(id: string): boolean {
  const info = db.prepare(`DELETE FROM offices WHERE id = ?`).run(id);
  return info.changes > 0;
}

/* -------------------------------------------------------------------------- */
/* Facilities                                                                 */
/* -------------------------------------------------------------------------- */

export type FacilityRecord = {
  id: string;
  countryId: string;
  countryName?: string;
  name: string;
  city: string;
  summary: string;
  capabilities: string[];
  longitude: number;
  latitude: number;
  displayOrder: number;
};

type FacilityRow = {
  id: string;
  country_id: string;
  country_name?: string;
  name: string;
  city: string;
  summary: string;
  capabilities: string;
  longitude: number;
  latitude: number;
  display_order: number;
};

function toFacilityRecord(row: FacilityRow): FacilityRecord {
  return {
    id: row.id,
    countryId: row.country_id,
    ...(row.country_name ? { countryName: row.country_name } : {}),
    name: row.name,
    city: row.city,
    summary: row.summary,
    capabilities: parseStringArray(row.capabilities),
    longitude: row.longitude,
    latitude: row.latitude,
    displayOrder: row.display_order,
  };
}

export function getFacilities(): FacilityRecord[] {
  const rows = db
    .prepare(
      `SELECT f.*, c.country as country_name
       FROM facilities f
       LEFT JOIN global_countries c ON c.id = f.country_id
       ORDER BY f.display_order ASC, f.rowid ASC`,
    )
    .all() as FacilityRow[];
  return rows.map(toFacilityRecord);
}

export function getFacilitiesCount(): number {
  const row = db
    .prepare(`SELECT COUNT(*) as count FROM facilities`)
    .get() as { count: number };
  return row.count;
}

export function getFacilityById(id: string): FacilityRecord | null {
  const row = db
    .prepare(
      `SELECT f.*, c.country as country_name
       FROM facilities f
       LEFT JOIN global_countries c ON c.id = f.country_id
       WHERE f.id = ?`,
    )
    .get(id) as FacilityRow | undefined;
  return row ? toFacilityRecord(row) : null;
}

export function facilityExists(id: string): boolean {
  return Boolean(db.prepare(`SELECT 1 FROM facilities WHERE id = ?`).get(id));
}

export function createFacility(
  data: Omit<FacilityRecord, "countryName">,
): FacilityRecord {
  db.prepare(`
    INSERT INTO facilities (
      id, country_id, name, city, summary, capabilities, longitude, latitude, display_order
    ) VALUES (
      @id, @country_id, @name, @city, @summary, @capabilities, @longitude, @latitude, @display_order
    )
  `).run({
    id: data.id,
    country_id: data.countryId,
    name: data.name,
    city: data.city,
    summary: data.summary,
    capabilities: JSON.stringify(data.capabilities),
    longitude: data.longitude,
    latitude: data.latitude,
    display_order: data.displayOrder,
  });

  return getFacilityById(data.id)!;
}

export function updateFacility(
  id: string,
  patch: Partial<Omit<FacilityRecord, "id" | "countryName">>,
): FacilityRecord | null {
  const sets: string[] = [];
  const params: Record<string, string | number> = { id };

  if (patch.countryId !== undefined) {
    sets.push("country_id = @country_id");
    params.country_id = patch.countryId;
  }
  if (patch.name !== undefined) {
    sets.push("name = @name");
    params.name = patch.name;
  }
  if (patch.city !== undefined) {
    sets.push("city = @city");
    params.city = patch.city;
  }
  if (patch.summary !== undefined) {
    sets.push("summary = @summary");
    params.summary = patch.summary;
  }
  if (patch.capabilities !== undefined) {
    sets.push("capabilities = @capabilities");
    params.capabilities = JSON.stringify(patch.capabilities);
  }
  if (patch.longitude !== undefined) {
    sets.push("longitude = @longitude");
    params.longitude = patch.longitude;
  }
  if (patch.latitude !== undefined) {
    sets.push("latitude = @latitude");
    params.latitude = patch.latitude;
  }
  if (patch.displayOrder !== undefined) {
    sets.push("display_order = @display_order");
    params.display_order = patch.displayOrder;
  }

  if (sets.length === 0) return getFacilityById(id);

  const info = db
    .prepare(`UPDATE facilities SET ${sets.join(", ")} WHERE id = @id`)
    .run(params);
  if (info.changes === 0) return null;
  return getFacilityById(id);
}

export function deleteFacility(id: string): boolean {
  const info = db.prepare(`DELETE FROM facilities WHERE id = ?`).run(id);
  return info.changes > 0;
}

/* -------------------------------------------------------------------------- */
/* Combined Global Presence Explorer Tree                                     */
/* -------------------------------------------------------------------------- */

type GlobalProjectRow = {
  id: string;
  country_id: string;
  hero_heading: string;
  hero_description: string;
  overview_description: string;
  category: string;
  city: string | null;
  location: string | null;
  longitude: number;
  latitude: number;
  global_industry: string | null;
  global_status: string | null;
};

export function getGlobalLocations(): GlobalLocation[] {
  const countries = getCountries();
  const offices = getOffices().filter(
    (o) =>
      o.showOnGlobal &&
      typeof o.longitude === "number" &&
      typeof o.latitude === "number",
  );
  const facilities = getFacilities();
  const projects = db
    .prepare(
      `SELECT id, country_id, hero_heading, hero_description, overview_description,
              category, city, location, longitude, latitude, global_industry, global_status
       FROM projects
       WHERE show_on_global = 1
         AND country_id IS NOT NULL
         AND longitude IS NOT NULL
         AND latitude IS NOT NULL
       ORDER BY rowid ASC`,
    )
    .all() as GlobalProjectRow[];

  return countries.map((c) => {
    const countryOffices: GlobalOffice[] = offices
      .filter((o) => o.countryId === c.id)
      .map((o) => ({
        id: o.id,
        type: "office",
        name: o.name,
        city: o.city,
        summary: o.summary,
        capabilities: o.capabilities,
        coordinates: [o.longitude!, o.latitude!],
      }));

    const countryFacilities: GlobalFacility[] = facilities
      .filter((f) => f.countryId === c.id)
      .map((f) => ({
        id: f.id,
        type: "facility",
        name: f.name,
        city: f.city,
        summary: f.summary,
        capabilities: f.capabilities,
        coordinates: [f.longitude, f.latitude],
      }));

    const countryProjects: GlobalProject[] = projects
      .filter((p) => p.country_id === c.id)
      .map((p) => ({
        id: p.id,
        type: "project",
        name: p.hero_heading,
        city: p.city || p.location || c.country,
        summary: p.hero_description || p.overview_description,
        industry: p.global_industry || p.category,
        status: p.global_status === "ongoing" ? "ongoing" : "completed",
        coordinates: [p.longitude, p.latitude],
        href: `/projects/${encodeURIComponent(p.id)}`,
      }));

    return {
      id: c.id,
      country: c.country,
      countryCode: c.countryCode,
      isoNumeric: c.isoNumeric,
      region: c.region,
      city: c.city,
      summary: c.summary,
      capabilities: c.capabilities,
      coordinates: [c.longitude, c.latitude],
      offices: countryOffices,
      facilities: countryFacilities,
      projects: countryProjects,
    };
  });
}