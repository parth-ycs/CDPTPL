import "server-only";

import db from "@/lib/db";
import type { PatentItem, PatentRecord } from "@/data/patents";

export type { PatentItem, PatentRecord };

type PatentRow = {
  id: string;
  title: string;
  reference_label: string;
  application_number: string;
  date: string | null;
  image: string;
  image_alt: string;
  display_order: number;
};

function toPatentRecord(row: PatentRow): PatentRecord {
  return {
    id: row.id,
    title: row.title,
    referenceLabel: row.reference_label,
    applicationNumber: row.application_number,
    date: row.date,
    image: row.image,
    imageAlt: row.image_alt,
    displayOrder: row.display_order,
  };
}

export function getPatents(): PatentRecord[] {
  const rows = db
    .prepare(`SELECT * FROM patents ORDER BY display_order ASC, rowid ASC`)
    .all() as PatentRow[];
  return rows.map(toPatentRecord);
}

export function getPatentsCount(): number {
  const row = db.prepare(`SELECT COUNT(*) as count FROM patents`).get() as {
    count: number;
  };
  return row.count;
}

export function getPatentById(id: string): PatentRecord | null {
  const row = db
    .prepare(`SELECT * FROM patents WHERE id = ?`)
    .get(id) as PatentRow | undefined;
  return row ? toPatentRecord(row) : null;
}

export function patentExists(id: string): boolean {
  return Boolean(db.prepare(`SELECT 1 FROM patents WHERE id = ?`).get(id));
}

export function createPatent(data: {
  id: string;
  title: string;
  referenceLabel: string;
  applicationNumber: string;
  date?: string | null;
  image: string;
  imageAlt: string;
  displayOrder?: number;
}): PatentRecord {
  db.prepare(`
    INSERT INTO patents (
      id, title, reference_label, application_number, date, image, image_alt, display_order
    ) VALUES (
      @id, @title, @reference_label, @application_number, @date, @image, @image_alt, @display_order
    )
  `).run({
    id: data.id,
    title: data.title,
    reference_label: data.referenceLabel,
    application_number: data.applicationNumber,
    date: data.date && data.date.trim().length > 0 ? data.date.trim() : null,
    image: data.image,
    image_alt: data.imageAlt,
    display_order: data.displayOrder ?? 0,
  });

  return getPatentById(data.id)!;
}

export function updatePatent(
  id: string,
  patch: Partial<{
    title: string;
    referenceLabel: string;
    applicationNumber: string;
    date: string | null;
    image: string;
    imageAlt: string;
    displayOrder: number;
  }>,
): PatentRecord | null {
  const sets: string[] = [];
  const params: Record<string, string | number | null> = { id };

  if (patch.title !== undefined) {
    sets.push("title = @title");
    params.title = patch.title;
  }
  if (patch.referenceLabel !== undefined) {
    sets.push("reference_label = @reference_label");
    params.reference_label = patch.referenceLabel;
  }
  if (patch.applicationNumber !== undefined) {
    sets.push("application_number = @application_number");
    params.application_number = patch.applicationNumber;
  }
  if ("date" in patch) {
    sets.push("date = @date");
    params.date =
      patch.date && patch.date.trim().length > 0 ? patch.date.trim() : null;
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

  if (sets.length === 0) return getPatentById(id);

  const info = db
    .prepare(`UPDATE patents SET ${sets.join(", ")} WHERE id = @id`)
    .run(params);

  if (info.changes === 0) return null;
  return getPatentById(id);
}

export function deletePatent(id: string): boolean {
  const info = db.prepare(`DELETE FROM patents WHERE id = ?`).run(id);
  return info.changes > 0;
}