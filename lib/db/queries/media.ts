import "server-only";

import db from "@/lib/db";
import type { NewsItem, NewsItemRecord } from "@/data/media";

export type { NewsItem, NewsItemRecord };

type MediaRow = {
  id: string;
  category: string;
  date: string;
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
  display_order: number;
};

function toNewsRecord(row: MediaRow): NewsItemRecord {
  return {
    id: row.id,
    category: row.category,
    date: row.date,
    title: row.title,
    location: row.location,
    description: row.description,
    image: row.image,
    href: row.href || "#enquiry",
    displayOrder: row.display_order,
  };
}

export function getMediaItems(): NewsItemRecord[] {
  const rows = db
    .prepare(`SELECT * FROM media_items ORDER BY display_order ASC, rowid ASC`)
    .all() as MediaRow[];
  return rows.map(toNewsRecord);
}

export function getMediaItemsCount(): number {
  const row = db
    .prepare(`SELECT COUNT(*) as count FROM media_items`)
    .get() as { count: number };
  return row.count;
}

export function getMediaItemById(id: string): NewsItemRecord | null {
  const row = db
    .prepare(`SELECT * FROM media_items WHERE id = ?`)
    .get(id) as MediaRow | undefined;
  return row ? toNewsRecord(row) : null;
}

export function mediaItemExists(id: string): boolean {
  return Boolean(db.prepare(`SELECT 1 FROM media_items WHERE id = ?`).get(id));
}

export function createMediaItem(data: {
  id: string;
  category: string;
  date: string;
  title: string;
  location: string;
  description: string;
  image: string;
  href?: string;
  displayOrder?: number;
}): NewsItemRecord {
  db.prepare(`
    INSERT INTO media_items (
      id, category, date, title, location, description, image, href, display_order
    ) VALUES (
      @id, @category, @date, @title, @location, @description, @image, @href, @display_order
    )
  `).run({
    id: data.id,
    category: data.category,
    date: data.date,
    title: data.title,
    location: data.location,
    description: data.description,
    image: data.image,
    href: data.href && data.href.trim().length > 0 ? data.href.trim() : "#enquiry",
    display_order: data.displayOrder ?? 0,
  });

  return getMediaItemById(data.id)!;
}

export function updateMediaItem(
  id: string,
  patch: Partial<{
    category: string;
    date: string;
    title: string;
    location: string;
    description: string;
    image: string;
    href: string;
    displayOrder: number;
  }>,
): NewsItemRecord | null {
  const sets: string[] = [];
  const params: Record<string, string | number> = { id };

  if (patch.category !== undefined) {
    sets.push("category = @category");
    params.category = patch.category;
  }
  if (patch.date !== undefined) {
    sets.push("date = @date");
    params.date = patch.date;
  }
  if (patch.title !== undefined) {
    sets.push("title = @title");
    params.title = patch.title;
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
  if (patch.href !== undefined) {
    sets.push("href = @href");
    params.href =
      patch.href.trim().length > 0 ? patch.href.trim() : "#enquiry";
  }
  if (patch.displayOrder !== undefined) {
    sets.push("display_order = @display_order");
    params.display_order = patch.displayOrder;
  }

  if (sets.length === 0) return getMediaItemById(id);

  const info = db
    .prepare(`UPDATE media_items SET ${sets.join(", ")} WHERE id = @id`)
    .run(params);

  if (info.changes === 0) return null;
  return getMediaItemById(id);
}

export function deleteMediaItem(id: string): boolean {
  const info = db.prepare(`DELETE FROM media_items WHERE id = ?`).run(id);
  return info.changes > 0;
}