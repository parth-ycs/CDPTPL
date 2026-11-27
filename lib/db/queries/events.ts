import "server-only";

import db from "@/lib/db";
import type { EventItem, EventRecord } from "@/data/events";

export type { EventItem, EventRecord };

type EventRow = {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  venue: string;
  stand: string | null;
  description: string;
  image: string;
  image_alt: string;
  url: string | null;
  display_order: number;
};

function toEventRecord(row: EventRow): EventRecord {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    date: row.date,
    location: row.location,
    venue: row.venue,
    ...(row.stand ? { stand: row.stand } : {}),
    description: row.description,
    image: row.image,
    imageAlt: row.image_alt,
    ...(row.url ? { url: row.url } : {}),
    displayOrder: row.display_order,
  };
}

export function getEvents(): EventRecord[] {
  const rows = db
    .prepare(`SELECT * FROM events ORDER BY display_order ASC, rowid ASC`)
    .all() as EventRow[];
  return rows.map(toEventRecord);
}

export function getEventsCount(): number {
  const row = db.prepare(`SELECT COUNT(*) as count FROM events`).get() as {
    count: number;
  };
  return row.count;
}

export function getEventById(id: string): EventRecord | null {
  const row = db
    .prepare(`SELECT * FROM events WHERE id = ?`)
    .get(id) as EventRow | undefined;
  return row ? toEventRecord(row) : null;
}

export function eventExists(id: string): boolean {
  return Boolean(db.prepare(`SELECT 1 FROM events WHERE id = ?`).get(id));
}

export function createEvent(data: {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  venue: string;
  stand?: string | null;
  description: string;
  image: string;
  imageAlt: string;
  url?: string | null;
  displayOrder?: number;
}): EventRecord {
  db.prepare(`
    INSERT INTO events (
      id, title, category, date, location, venue, stand, description, image, image_alt, url, display_order
    ) VALUES (
      @id, @title, @category, @date, @location, @venue, @stand, @description, @image, @image_alt, @url, @display_order
    )
  `).run({
    id: data.id,
    title: data.title,
    category: data.category,
    date: data.date,
    location: data.location,
    venue: data.venue,
    stand: data.stand || null,
    description: data.description,
    image: data.image,
    image_alt: data.imageAlt,
    url: data.url || null,
    display_order: data.displayOrder ?? 0,
  });

  return getEventById(data.id)!;
}

export function updateEvent(
  id: string,
  patch: Partial<{
    title: string;
    category: string;
    date: string;
    location: string;
    venue: string;
    stand: string | null;
    description: string;
    image: string;
    imageAlt: string;
    url: string | null;
    displayOrder: number;
  }>,
): EventRecord | null {
  const sets: string[] = [];
  const params: Record<string, string | number | null> = { id };

  if (patch.title !== undefined) {
    sets.push("title = @title");
    params.title = patch.title;
  }
  if (patch.category !== undefined) {
    sets.push("category = @category");
    params.category = patch.category;
  }
  if (patch.date !== undefined) {
    sets.push("date = @date");
    params.date = patch.date;
  }
  if (patch.location !== undefined) {
    sets.push("location = @location");
    params.location = patch.location;
  }
  if (patch.venue !== undefined) {
    sets.push("venue = @venue");
    params.venue = patch.venue;
  }
  if ("stand" in patch) {
    sets.push("stand = @stand");
    params.stand = patch.stand || null;
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
  if ("url" in patch) {
    sets.push("url = @url");
    params.url = patch.url || null;
  }
  if (patch.displayOrder !== undefined) {
    sets.push("display_order = @display_order");
    params.display_order = patch.displayOrder;
  }

  if (sets.length === 0) return getEventById(id);

  const info = db
    .prepare(`UPDATE events SET ${sets.join(", ")} WHERE id = @id`)
    .run(params);

  if (info.changes === 0) return null;
  return getEventById(id);
}

export function deleteEvent(id: string): boolean {
  const info = db.prepare(`DELETE FROM events WHERE id = ?`).run(id);
  return info.changes > 0;
}