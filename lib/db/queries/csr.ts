import "server-only";

import db from "@/lib/db";
import type { CSRInitiative, CSRInitiativeRecord } from "@/data/csr";

export type { CSRInitiative, CSRInitiativeRecord };

type CsrRow = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  image_alt: string;
  display_order: number;
};

function toCsrRecord(row: CsrRow): CSRInitiativeRecord {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    location: row.location,
    description: row.description,
    image: row.image,
    imageAlt: row.image_alt,
    displayOrder: row.display_order,
  };
}

export function getCsrInitiatives(): CSRInitiativeRecord[] {
  const rows = db
    .prepare(
      `SELECT * FROM csr_initiatives ORDER BY display_order ASC, rowid ASC`,
    )
    .all() as CsrRow[];
  return rows.map(toCsrRecord);
}

export function getCsrInitiativesCount(): number {
  const row = db
    .prepare(`SELECT COUNT(*) as count FROM csr_initiatives`)
    .get() as { count: number };
  return row.count;
}

export function getCsrInitiativeById(id: string): CSRInitiativeRecord | null {
  const row = db
    .prepare(`SELECT * FROM csr_initiatives WHERE id = ?`)
    .get(id) as CsrRow | undefined;
  return row ? toCsrRecord(row) : null;
}

export function csrInitiativeExists(id: string): boolean {
  return Boolean(
    db.prepare(`SELECT 1 FROM csr_initiatives WHERE id = ?`).get(id),
  );
}

export function createCsrInitiative(data: {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  displayOrder?: number;
}): CSRInitiativeRecord {
  db.prepare(`
    INSERT INTO csr_initiatives (
      id, title, category, location, description, image, image_alt, display_order
    ) VALUES (
      @id, @title, @category, @location, @description, @image, @image_alt, @display_order
    )
  `).run({
    id: data.id,
    title: data.title,
    category: data.category,
    location: data.location,
    description: data.description,
    image: data.image,
    image_alt: data.imageAlt,
    display_order: data.displayOrder ?? 0,
  });

  return getCsrInitiativeById(data.id)!;
}

export function updateCsrInitiative(
  id: string,
  patch: Partial<{
    title: string;
    category: string;
    location: string;
    description: string;
    image: string;
    imageAlt: string;
    displayOrder: number;
  }>,
): CSRInitiativeRecord | null {
  const sets: string[] = [];
  const params: Record<string, string | number> = { id };

  if (patch.title !== undefined) {
    sets.push("title = @title");
    params.title = patch.title;
  }
  if (patch.category !== undefined) {
    sets.push("category = @category");
    params.category = patch.category;
  }
  if (patch.location !== undefined) {
    sets.push("location = @location");
    params.location = patch.location;
  }
  if (patch.description !== undefined) {
    sets.push("description = @description");
    params.description = patch.description;
  }
  if (patch.image !== undefined) {
    sets.push("image = @image");
    params.image = patch.image;
  }
  if (patch.imageAlt !== undefined) {
    sets.push("image_alt = @image_alt");
    params.image_alt = patch.imageAlt;
  }
  if (patch.displayOrder !== undefined) {
    sets.push("display_order = @display_order");
    params.display_order = patch.displayOrder;
  }

  if (sets.length === 0) return getCsrInitiativeById(id);

  const info = db
    .prepare(`UPDATE csr_initiatives SET ${sets.join(", ")} WHERE id = @id`)
    .run(params);

  if (info.changes === 0) return null;
  return getCsrInitiativeById(id);
}

export function deleteCsrInitiative(id: string): boolean {
  const info = db
    .prepare(`DELETE FROM csr_initiatives WHERE id = ?`)
    .run(id);
  return info.changes > 0;
}