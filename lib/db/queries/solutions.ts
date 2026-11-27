import "server-only";

import db from "@/lib/db";
import {
  sbuHref,
  type NavigationGroup,
  type SBU,
  type SBUGroupRecord,
  type SBUListItem,
  type SolutionChild,
  type SolutionConfig,
  type SolutionRecord,
} from "@/data/sbus";
import type { ServiceSection } from "@/components/solutions/types";

export type {
  SBU,
  NavigationGroup,
  SolutionChild,
  SolutionConfig,
  SBUListItem,
  SolutionRecord,
  SBUGroupRecord,
};

type SbuRow = {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  offerings: string;
  image: string;
  image_alt: string;
  capabilities: string;
  display_order: number;
};

type GroupRow = {
  slug: string;
  sbu_slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  overview: string;
  image: string;
  display_order: number;
};

type SolutionRow = {
  id: string;
  sbu_slug: string;
  group_slug: string | null;
  slug: string;
  hero_name: string;
  hero_tagline: string;
  hero_description: string;
  hero_image: string | null;
  hero_image_alt: string | null;
  sections: string;
  display_order: number;
};

function parseJsonArray<T>(raw: string | null): T[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function toGroup(row: GroupRow): SBUGroupRecord {
  return {
    slug: row.slug,
    sbuSlug: row.sbu_slug,
    title: row.title,
    eyebrow: row.eyebrow,
    tagline: row.tagline,
    description: row.description,
    overview: row.overview,
    image: row.image,
    displayOrder: row.display_order,
  };
}

function toSolutionRecord(row: SolutionRow): SolutionRecord {
  return {
    id: row.id,
    sbuSlug: row.sbu_slug,
    slug: row.slug,
    ...(row.group_slug ? { groupSlug: row.group_slug } : {}),
    displayOrder: row.display_order,
    hero: {
      name: row.hero_name,
      tagline: row.hero_tagline,
      description: row.hero_description,
      ...(row.hero_image ? { image: row.hero_image } : {}),
      ...(row.hero_image_alt ? { imageAlt: row.hero_image_alt } : {}),
    },
    sections: parseJsonArray<ServiceSection>(row.sections),
  };
}

function hydrateSbu(
  row: SbuRow,
  groups: GroupRow[],
  solutions: SolutionRow[],
): SBU {
  const sbuGroups: NavigationGroup[] = groups.map((g) => ({
    slug: g.slug,
    title: g.title,
    eyebrow: g.eyebrow,
    tagline: g.tagline,
    description: g.description,
    overview: g.overview,
    image: g.image,
  }));

  const children: SolutionChild[] = solutions.map((s) => ({
    slug: s.slug,
    ...(s.group_slug ? { groupSlug: s.group_slug } : {}),
    hero: {
      name: s.hero_name,
      tagline: s.hero_tagline,
      description: s.hero_description,
      ...(s.hero_image ? { image: s.hero_image } : {}),
      ...(s.hero_image_alt ? { imageAlt: s.hero_image_alt } : {}),
    },
    sections: parseJsonArray<ServiceSection>(s.sections),
  }));

  return {
    name: row.name,
    slug: row.slug,
    offerings: row.offerings,
    number: row.number,
    eyebrow: row.eyebrow,
    image: row.image,
    imageAlt: row.image_alt,
    capabilities: parseJsonArray<string>(row.capabilities),
    href: sbuHref({ slug: row.slug }),
    ...(sbuGroups.length > 0 ? { navigationGroups: sbuGroups } : {}),
    children,
  };
}

// =============================================
// SBUs
// =============================================

export function getSBUs(): SBU[] {
  const sbuRows = db
    .prepare(`SELECT * FROM sbus ORDER BY display_order ASC, rowid ASC`)
    .all() as SbuRow[];
  const groupRows = db
    .prepare(
      `SELECT * FROM sbu_navigation_groups ORDER BY display_order ASC, rowid ASC`,
    )
    .all() as GroupRow[];
  const solutionRows = db
    .prepare(`SELECT * FROM solutions ORDER BY display_order ASC, rowid ASC`)
    .all() as SolutionRow[];

  return sbuRows.map((sbu) =>
    hydrateSbu(
      sbu,
      groupRows.filter((g) => g.sbu_slug === sbu.slug),
      solutionRows.filter((s) => s.sbu_slug === sbu.slug),
    ),
  );
}

export function getSBUListItems(): SBUListItem[] {
  return getSBUs().map((sbu) => ({
    number: sbu.number,
    title: sbu.name,
    slug: sbu.slug,
    href: sbu.href,
    eyebrow: sbu.eyebrow,
    description: sbu.offerings,
    image: sbu.image,
    imageAlt: sbu.imageAlt,
    capabilities: sbu.capabilities,
  }));
}

export function getSBU(slug: string): SBU | null {
  const sbuRow = db
    .prepare(`SELECT * FROM sbus WHERE slug = ?`)
    .get(slug) as SbuRow | undefined;
  if (!sbuRow) return null;

  const groupRows = db
    .prepare(
      `SELECT * FROM sbu_navigation_groups WHERE sbu_slug = ? ORDER BY display_order ASC, rowid ASC`,
    )
    .all(slug) as GroupRow[];
  const solutionRows = db
    .prepare(
      `SELECT * FROM solutions WHERE sbu_slug = ? ORDER BY display_order ASC, rowid ASC`,
    )
    .all(slug) as SolutionRow[];

  return hydrateSbu(sbuRow, groupRows, solutionRows);
}

export function updateSBU(
  slug: string,
  patch: Partial<{
    number: string;
    name: string;
    eyebrow: string;
    offerings: string;
    image: string;
    imageAlt: string;
    capabilities: string[];
    displayOrder: number;
  }>,
): SBU | null {
  const sets: string[] = [];
  const params: Record<string, string | number> = { slug };

  if (patch.number !== undefined) {
    sets.push("number = @number");
    params.number = patch.number;
  }
  if (patch.name !== undefined) {
    sets.push("name = @name");
    params.name = patch.name;
  }
  if (patch.eyebrow !== undefined) {
    sets.push("eyebrow = @eyebrow");
    params.eyebrow = patch.eyebrow;
  }
  if (patch.offerings !== undefined) {
    sets.push("offerings = @offerings");
    params.offerings = patch.offerings;
  }
  if (patch.image !== undefined) {
    sets.push("image = @image");
    params.image = patch.image;
  }
  if (patch.imageAlt !== undefined) {
    sets.push("image_alt = @image_alt");
    params.image_alt = patch.imageAlt;
  }
  if (patch.capabilities !== undefined) {
    sets.push("capabilities = @capabilities");
    params.capabilities = JSON.stringify(patch.capabilities);
  }
  if (patch.displayOrder !== undefined) {
    sets.push("display_order = @display_order");
    params.display_order = patch.displayOrder;
  }

  if (sets.length === 0) return getSBU(slug);

  const info = db
    .prepare(`UPDATE sbus SET ${sets.join(", ")} WHERE slug = @slug`)
    .run(params);

  if (info.changes === 0) return null;
  return getSBU(slug);
}

// =============================================
// NAVIGATION GROUPS
// =============================================

export function getAllSBUGroups(): SBUGroupRecord[] {
  const rows = db
    .prepare(
      `SELECT * FROM sbu_navigation_groups ORDER BY display_order ASC, rowid ASC`,
    )
    .all() as GroupRow[];
  return rows.map(toGroup);
}

export function getSBUGroupBySlug(slug: string): SBUGroupRecord | null {
  const row = db
    .prepare(`SELECT * FROM sbu_navigation_groups WHERE slug = ?`)
    .get(slug) as GroupRow | undefined;
  return row ? toGroup(row) : null;
}

export function getSBUGroup(groupSlug: string): {
  sbu: SBU;
  group: NavigationGroup;
  children: SolutionChild[];
} | null {
  const groupRow = db
    .prepare(`SELECT * FROM sbu_navigation_groups WHERE slug = ?`)
    .get(groupSlug) as GroupRow | undefined;

  if (!groupRow) return null;

  const sbu = getSBU(groupRow.sbu_slug);
  if (!sbu) return null;

  const group: NavigationGroup = {
    slug: groupRow.slug,
    title: groupRow.title,
    eyebrow: groupRow.eyebrow,
    tagline: groupRow.tagline,
    description: groupRow.description,
    overview: groupRow.overview,
    image: groupRow.image,
  };

  return {
    sbu,
    group,
    children: sbu.children.filter((c) => c.groupSlug === groupSlug),
  };
}

export function sbuGroupExists(slug: string): boolean {
  return Boolean(
    db.prepare(`SELECT 1 FROM sbu_navigation_groups WHERE slug = ?`).get(slug),
  );
}

export function createSBUGroup(data: SBUGroupRecord): SBUGroupRecord {
  db.prepare(`
    INSERT INTO sbu_navigation_groups (
      slug, sbu_slug, title, eyebrow, tagline, description, overview, image, display_order
    ) VALUES (
      @slug, @sbu_slug, @title, @eyebrow, @tagline, @description, @overview, @image, @display_order
    )
  `).run({
    slug: data.slug,
    sbu_slug: data.sbuSlug,
    title: data.title,
    eyebrow: data.eyebrow,
    tagline: data.tagline,
    description: data.description,
    overview: data.overview,
    image: data.image,
    display_order: data.displayOrder ?? 0,
  });

  return getSBUGroupBySlug(data.slug)!;
}

export function updateSBUGroup(
  slug: string,
  patch: Partial<Omit<SBUGroupRecord, "slug">>,
): SBUGroupRecord | null {
  const sets: string[] = [];
  const params: Record<string, string | number> = { slug };

  if (patch.sbuSlug !== undefined) {
    sets.push("sbu_slug = @sbu_slug");
    params.sbu_slug = patch.sbuSlug;
  }
  if (patch.title !== undefined) {
    sets.push("title = @title");
    params.title = patch.title;
  }
  if (patch.eyebrow !== undefined) {
    sets.push("eyebrow = @eyebrow");
    params.eyebrow = patch.eyebrow;
  }
  if (patch.tagline !== undefined) {
    sets.push("tagline = @tagline");
    params.tagline = patch.tagline;
  }
  if (patch.description !== undefined) {
    sets.push("description = @description");
    params.description = patch.description;
  }
  if (patch.overview !== undefined) {
    sets.push("overview = @overview");
    params.overview = patch.overview;
  }
  if (patch.image !== undefined) {
    sets.push("image = @image");
    params.image = patch.image;
  }
  if (patch.displayOrder !== undefined) {
    sets.push("display_order = @display_order");
    params.display_order = patch.displayOrder;
  }

  if (sets.length === 0) return getSBUGroupBySlug(slug);

  const info = db
    .prepare(
      `UPDATE sbu_navigation_groups SET ${sets.join(", ")} WHERE slug = @slug`,
    )
    .run(params);

  if (info.changes === 0) return null;
  return getSBUGroupBySlug(slug);
}

export function deleteSBUGroup(slug: string): boolean {
  const info = db
    .prepare(`DELETE FROM sbu_navigation_groups WHERE slug = ?`)
    .run(slug);
  return info.changes > 0;
}

// =============================================
// SOLUTIONS
// =============================================

export function getAllSolutions(): SolutionRecord[] {
  const rows = db
    .prepare(
      `SELECT * FROM solutions ORDER BY sbu_slug ASC, display_order ASC, rowid ASC`,
    )
    .all() as SolutionRow[];
  return rows.map(toSolutionRecord);
}

export function getSolutionsCount(): number {
  const row = db
    .prepare(`SELECT COUNT(*) as count FROM solutions`)
    .get() as { count: number };
  return row.count;
}

export function getSolutionById(id: string): SolutionRecord | null {
  const row = db
    .prepare(`SELECT * FROM solutions WHERE id = ?`)
    .get(id) as SolutionRow | undefined;
  return row ? toSolutionRecord(row) : null;
}

export function getSolution(
  sbuSlug: string,
  solutionSlug: string,
): SolutionConfig | null {
  const row = db
    .prepare(`SELECT * FROM solutions WHERE sbu_slug = ? AND slug = ?`)
    .get(sbuSlug, solutionSlug) as SolutionRow | undefined;

  if (!row) return null;
  const parsed = toSolutionRecord(row);

  return {
    slug: parsed.slug,
    hero: parsed.hero,
    sections: parsed.sections,
  };
}

export function solutionExists(sbuSlug: string, slug: string): boolean {
  return Boolean(
    db
      .prepare(`SELECT 1 FROM solutions WHERE sbu_slug = ? AND slug = ?`)
      .get(sbuSlug, slug),
  );
}

export function createSolution(data: {
  sbuSlug: string;
  groupSlug?: string;
  slug: string;
  hero: SolutionChild["hero"];
  sections: ServiceSection[];
  displayOrder?: number;
}): SolutionRecord {
  const id = `${data.sbuSlug}--${data.slug}`;

  db.prepare(`
    INSERT INTO solutions (
      id, sbu_slug, group_slug, slug,
      hero_name, hero_tagline, hero_description, hero_image, hero_image_alt,
      sections, display_order
    ) VALUES (
      @id, @sbu_slug, @group_slug, @slug,
      @hero_name, @hero_tagline, @hero_description, @hero_image, @hero_image_alt,
      @sections, @display_order
    )
  `).run({
    id,
    sbu_slug: data.sbuSlug,
    group_slug: data.groupSlug || null,
    slug: data.slug,
    hero_name: data.hero.name,
    hero_tagline: data.hero.tagline,
    hero_description: data.hero.description,
    hero_image: data.hero.image || null,
    hero_image_alt: data.hero.imageAlt || null,
    sections: JSON.stringify(data.sections ?? []),
    display_order: data.displayOrder ?? 0,
  });

  return getSolutionById(id)!;
}

export function updateSolution(
  id: string,
  patch: Partial<{
    sbuSlug: string;
    groupSlug: string | null;
    slug: string;
    hero: SolutionChild["hero"];
    sections: ServiceSection[];
    displayOrder: number;
  }>,
): SolutionRecord | null {
  const current = getSolutionById(id);
  if (!current) return null;

  const nextSbu = patch.sbuSlug ?? current.sbuSlug;
  const nextSlug = patch.slug ?? current.slug;
  const nextId = `${nextSbu}--${nextSlug}`;

  const sets: string[] = ["id = @next_id"];
  const params: Record<string, string | number | null> = {
    old_id: id,
    next_id: nextId,
  };

  if (patch.sbuSlug !== undefined) {
    sets.push("sbu_slug = @sbu_slug");
    params.sbu_slug = patch.sbuSlug;
  }
  if ("groupSlug" in patch) {
    sets.push("group_slug = @group_slug");
    params.group_slug = patch.groupSlug || null;
  }
  if (patch.slug !== undefined) {
    sets.push("slug = @slug");
    params.slug = patch.slug;
  }
  if (patch.hero !== undefined) {
    sets.push("hero_name = @hero_name");
    params.hero_name = patch.hero.name;
    sets.push("hero_tagline = @hero_tagline");
    params.hero_tagline = patch.hero.tagline;
    sets.push("hero_description = @hero_description");
    params.hero_description = patch.hero.description;
    sets.push("hero_image = @hero_image");
    params.hero_image = patch.hero.image || null;
    sets.push("hero_image_alt = @hero_image_alt");
    params.hero_image_alt = patch.hero.imageAlt || null;
  }
  if (patch.sections !== undefined) {
    sets.push("sections = @sections");
    params.sections = JSON.stringify(patch.sections);
  }
  if (patch.displayOrder !== undefined) {
    sets.push("display_order = @display_order");
    params.display_order = patch.displayOrder;
  }

  const info = db
    .prepare(`UPDATE solutions SET ${sets.join(", ")} WHERE id = @old_id`)
    .run(params);

  if (info.changes === 0) return null;
  return getSolutionById(nextId);
}

export function deleteSolution(id: string): boolean {
  const info = db.prepare(`DELETE FROM solutions WHERE id = ?`).run(id);
  return info.changes > 0;
}