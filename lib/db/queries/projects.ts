import "server-only";

import db from "@/lib/db";
import {
  INNOVATION_SHOWCASE_CATEGORY,
  type ProjectData,
} from "@/data/projects/projects";

export type ProjectRecord = ProjectData & {
  countryId: string | null;
  city: string | null;
  longitude: number | null;
  latitude: number | null;
  globalIndustry: string | null;
  globalStatus: "completed" | "ongoing";
  showOnGlobal: boolean;
};

type ProjectRow = {
  id: string;
  category: string;
  location: string | null;
  plant: string | null;
  capacity: string | null;
  year_of_award: string | null;
  year_of_completion: string | null;
  contract_value: string | null;
  execution_scope: string | null;

  hero_eyebrow: string;
  hero_heading: string;
  hero_description: string;
  hero_image: string;
  hero_image_alt: string;

  overview_heading_before: string;
  overview_heading_highlight: string | null;
  overview_heading_after: string;
  overview_description: string;
  overview_image: string | null;
  overview_image_alt: string | null;

  problem_heading: string | null;
  problem_description: string | null;
  problem_image: string | null;
  problem_image_alt: string | null;

  solution_heading: string;
  solution_description: string;
  solution_image: string | null;
  solution_image_alt: string | null;
  solution_points: string;

  result_heading: string | null;
  result_description: string | null;
  result_points: string | null;

  country_id: string | null;
  city: string | null;
  longitude: number | null;
  latitude: number | null;
  global_industry: string | null;
  global_status: string | null;
  show_on_global: number;
};

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

function rowToProject(row: ProjectRow): ProjectRecord {
  const hasDetails = Boolean(
    row.location ||
      row.plant ||
      row.capacity ||
      row.year_of_award ||
      row.year_of_completion ||
      row.contract_value ||
      row.execution_scope,
  );
  const hasProblem = Boolean(row.problem_heading && row.problem_description);
  const hasResult = Boolean(row.result_heading && row.result_description);

  return {
    id: row.id,
    category: row.category,
    ...(hasDetails
      ? {
          details: {
            ...(row.location ? { location: row.location } : {}),
            ...(row.plant ? { plant: row.plant } : {}),
            ...(row.capacity ? { capacity: row.capacity } : {}),
            ...(row.year_of_award ? { yearOfAward: row.year_of_award } : {}),
            ...(row.year_of_completion
              ? { yearOfCompletion: row.year_of_completion }
              : {}),
            ...(row.contract_value
              ? { contractValue: row.contract_value }
              : {}),
            ...(row.execution_scope
              ? { executionScope: row.execution_scope }
              : {}),
          },
        }
      : {}),

    hero: {
      eyebrow: row.hero_eyebrow,
      heading: row.hero_heading,
      description: row.hero_description,
      image: row.hero_image,
      imageAlt: row.hero_image_alt,
    },

    overview: {
      heading: {
        before: row.overview_heading_before,
        ...(row.overview_heading_highlight
          ? { highlight: row.overview_heading_highlight }
          : {}),
        after: row.overview_heading_after,
      },
      description: row.overview_description,
      ...(row.overview_image ? { image: row.overview_image } : {}),
      ...(row.overview_image_alt ? { imageAlt: row.overview_image_alt } : {}),
    },

    ...(hasProblem
      ? {
          problem: {
            heading: row.problem_heading!,
            description: row.problem_description!,
            ...(row.problem_image ? { image: row.problem_image } : {}),
            ...(row.problem_image_alt
              ? { imageAlt: row.problem_image_alt }
              : {}),
          },
        }
      : {}),

    solution: {
      heading: row.solution_heading,
      description: row.solution_description,
      ...(row.solution_image ? { image: row.solution_image } : {}),
      ...(row.solution_image_alt ? { imageAlt: row.solution_image_alt } : {}),
      points: parseStringArray(row.solution_points),
    },

    ...(hasResult
      ? {
          result: {
            heading: row.result_heading!,
            description: row.result_description!,
            points: parseStringArray(row.result_points),
          },
        }
      : {}),

    countryId: row.country_id ?? null,
    city: row.city ?? null,
    longitude: row.longitude ?? null,
    latitude: row.latitude ?? null,
    globalIndustry: row.global_industry ?? null,
    globalStatus: row.global_status === "ongoing" ? "ongoing" : "completed",
    showOnGlobal: Boolean(row.show_on_global),
  };
}

export function getProjects(): ProjectRecord[] {
  const rows = db
    .prepare(`SELECT * FROM projects ORDER BY rowid ASC`)
    .all() as ProjectRow[];
  return rows.map(rowToProject);
}

export function getProjectsCount(): number {
  const row = db.prepare(`SELECT COUNT(*) as count FROM projects`).get() as {
    count: number;
  };
  return row.count;
}

export function getProjectCategories(): string[] {
  const rows = db
    .prepare(
      `SELECT DISTINCT category FROM projects WHERE category IS NOT NULL AND category != '' ORDER BY rowid ASC`,
    )
    .all() as { category: string }[];
  return rows.map((r) => r.category);
}

export function getInnovationShowcaseProjects(): ProjectRecord[] {
  const rows = db
    .prepare(`SELECT * FROM projects WHERE category = ? ORDER BY rowid ASC`)
    .all(INNOVATION_SHOWCASE_CATEGORY) as ProjectRow[];
  return rows.map(rowToProject);
}

export function getProjectById(id: string): ProjectRecord | null {
  const row = db
    .prepare(`SELECT * FROM projects WHERE id = ?`)
    .get(id) as ProjectRow | undefined;
  return row ? rowToProject(row) : null;
}
export function getRelatedProjects(
  currentId: string,
  limit = 3,
): ProjectRecord[] {
  const current = getProjectById(currentId);

  if (current) {
    const sameCategory = db
      .prepare(
        `SELECT * FROM projects WHERE id != ? AND category = ? ORDER BY rowid ASC LIMIT ?`,
      )
      .all(currentId, current.category, limit) as ProjectRow[];

    if (sameCategory.length >= limit) {
      return sameCategory.map(rowToProject);
    }

    const remaining = limit - sameCategory.length;
    const otherProjects = db
      .prepare(
        `SELECT * FROM projects WHERE id != ? AND category != ? ORDER BY rowid ASC LIMIT ?`,
      )
      .all(currentId, current.category, remaining) as ProjectRow[];

    return [...sameCategory, ...otherProjects].map(rowToProject);
  }

  const rows = db
    .prepare(`SELECT * FROM projects WHERE id != ? ORDER BY rowid ASC LIMIT ?`)
    .all(currentId, limit) as ProjectRow[];

  return rows.map(rowToProject);
}

export function projectExists(id: string): boolean {
  return Boolean(db.prepare(`SELECT 1 FROM projects WHERE id = ?`).get(id));
}

export function createProject(data: ProjectRecord): ProjectRecord {
  db.prepare(`
    INSERT INTO projects (
      id, category, location, plant, capacity,
      year_of_award, year_of_completion, contract_value, execution_scope,
      hero_eyebrow, hero_heading, hero_description, hero_image, hero_image_alt,
      overview_heading_before, overview_heading_highlight, overview_heading_after,
      overview_description, overview_image, overview_image_alt,
      problem_heading, problem_description, problem_image, problem_image_alt,
      solution_heading, solution_description, solution_image, solution_image_alt, solution_points,
      result_heading, result_description, result_points,
      country_id, city, longitude, latitude, global_industry, global_status, show_on_global
    ) VALUES (
      @id, @category, @location, @plant, @capacity,
      @year_of_award, @year_of_completion, @contract_value, @execution_scope,
      @hero_eyebrow, @hero_heading, @hero_description, @hero_image, @hero_image_alt,
      @overview_heading_before, @overview_heading_highlight, @overview_heading_after,
      @overview_description, @overview_image, @overview_image_alt,
      @problem_heading, @problem_description, @problem_image, @problem_image_alt,
      @solution_heading, @solution_description, @solution_image, @solution_image_alt, @solution_points,
      @result_heading, @result_description, @result_points,
      @country_id, @city, @longitude, @latitude, @global_industry, @global_status, @show_on_global
    )
  `).run({
    id: data.id,
    category: data.category,
    location: data.details?.location ?? null,
    plant: data.details?.plant ?? null,
    capacity: data.details?.capacity ?? null,
    year_of_award: data.details?.yearOfAward ?? null,
    year_of_completion: data.details?.yearOfCompletion ?? null,
    contract_value: data.details?.contractValue ?? null,
    execution_scope: data.details?.executionScope ?? null,

    hero_eyebrow: data.hero.eyebrow,
    hero_heading: data.hero.heading,
    hero_description: data.hero.description,
    hero_image: data.hero.image,
    hero_image_alt: data.hero.imageAlt,

    overview_heading_before: data.overview.heading.before,
    overview_heading_highlight: data.overview.heading.highlight ?? null,
    overview_heading_after: data.overview.heading.after,
    overview_description: data.overview.description,
    overview_image: data.overview.image ?? null,
    overview_image_alt: data.overview.imageAlt ?? null,

    problem_heading: data.problem?.heading ?? null,
    problem_description: data.problem?.description ?? null,
    problem_image: data.problem?.image ?? null,
    problem_image_alt: data.problem?.imageAlt ?? null,

    solution_heading: data.solution.heading,
    solution_description: data.solution.description,
    solution_image: data.solution.image ?? null,
    solution_image_alt: data.solution.imageAlt ?? null,
    solution_points: JSON.stringify(data.solution.points),

    result_heading: data.result?.heading ?? null,
    result_description: data.result?.description ?? null,
    result_points: data.result ? JSON.stringify(data.result.points) : null,

    country_id: data.countryId || null,
    city: data.city || null,
    longitude: data.longitude ?? null,
    latitude: data.latitude ?? null,
    global_industry: data.globalIndustry || null,
    global_status: data.globalStatus || "completed",
    show_on_global: data.showOnGlobal ? 1 : 0,
  });

  return getProjectById(data.id)!;
}

export function updateProject(
  id: string,
  patch: Partial<Omit<ProjectRecord, "id">>,
): ProjectRecord | null {
  const existing = getProjectById(id);
  if (!existing) return null;

  const merged: ProjectRecord = {
    ...existing,
    ...patch,
    id: existing.id,
    details: patch.details
      ? { ...(existing.details ?? {}), ...patch.details }
      : existing.details,
    hero: patch.hero ? { ...existing.hero, ...patch.hero } : existing.hero,
    overview: patch.overview
      ? {
          ...existing.overview,
          ...patch.overview,
          heading: patch.overview.heading
            ? { ...existing.overview.heading, ...patch.overview.heading }
            : existing.overview.heading,
        }
      : existing.overview,
    problem:
      "problem" in patch
        ? patch.problem === undefined
          ? undefined
          : patch.problem
        : existing.problem,
    solution: patch.solution
      ? { ...existing.solution, ...patch.solution }
      : existing.solution,
    result:
      "result" in patch
        ? patch.result === undefined
          ? undefined
          : patch.result
        : existing.result,
  };

  db.prepare(`
    UPDATE projects SET
      category = @category,
      location = @location,
      plant = @plant,
      capacity = @capacity,
      year_of_award = @year_of_award,
      year_of_completion = @year_of_completion,
      contract_value = @contract_value,
      execution_scope = @execution_scope,
      hero_eyebrow = @hero_eyebrow,
      hero_heading = @hero_heading,
      hero_description = @hero_description,
      hero_image = @hero_image,
      hero_image_alt = @hero_image_alt,
      overview_heading_before = @overview_heading_before,
      overview_heading_highlight = @overview_heading_highlight,
      overview_heading_after = @overview_heading_after,
      overview_description = @overview_description,
      overview_image = @overview_image,
      overview_image_alt = @overview_image_alt,
      problem_heading = @problem_heading,
      problem_description = @problem_description,
      problem_image = @problem_image,
      problem_image_alt = @problem_image_alt,
      solution_heading = @solution_heading,
      solution_description = @solution_description,
      solution_image = @solution_image,
      solution_image_alt = @solution_image_alt,
      solution_points = @solution_points,
      result_heading = @result_heading,
      result_description = @result_description,
      result_points = @result_points,
      country_id = @country_id,
      city = @city,
      longitude = @longitude,
      latitude = @latitude,
      global_industry = @global_industry,
      global_status = @global_status,
      show_on_global = @show_on_global
    WHERE id = @id
  `).run({
    id,
    category: merged.category,
    location: merged.details?.location ?? null,
    plant: merged.details?.plant ?? null,
    capacity: merged.details?.capacity ?? null,
    year_of_award: merged.details?.yearOfAward ?? null,
    year_of_completion: merged.details?.yearOfCompletion ?? null,
    contract_value: merged.details?.contractValue ?? null,
    execution_scope: merged.details?.executionScope ?? null,

    hero_eyebrow: merged.hero.eyebrow,
    hero_heading: merged.hero.heading,
    hero_description: merged.hero.description,
    hero_image: merged.hero.image,
    hero_image_alt: merged.hero.imageAlt,

    overview_heading_before: merged.overview.heading.before,
    overview_heading_highlight: merged.overview.heading.highlight ?? null,
    overview_heading_after: merged.overview.heading.after,
    overview_description: merged.overview.description,
    overview_image: merged.overview.image ?? null,
    overview_image_alt: merged.overview.imageAlt ?? null,

    problem_heading: merged.problem?.heading ?? null,
    problem_description: merged.problem?.description ?? null,
    problem_image: merged.problem?.image ?? null,
    problem_image_alt: merged.problem?.imageAlt ?? null,

    solution_heading: merged.solution.heading,
    solution_description: merged.solution.description,
    solution_image: merged.solution.image ?? null,
    solution_image_alt: merged.solution.imageAlt ?? null,
    solution_points: JSON.stringify(merged.solution.points),

    result_heading: merged.result?.heading ?? null,
    result_description: merged.result?.description ?? null,
    result_points: merged.result ? JSON.stringify(merged.result.points) : null,

    country_id: merged.countryId || null,
    city: merged.city || null,
    longitude: merged.longitude ?? null,
    latitude: merged.latitude ?? null,
    global_industry: merged.globalIndustry || null,
    global_status: merged.globalStatus || "completed",
    show_on_global: merged.showOnGlobal ? 1 : 0,
  });

  return getProjectById(id);
}

export function deleteProject(id: string): boolean {
  const info = db.prepare(`DELETE FROM projects WHERE id = ?`).run(id);
  return info.changes > 0;
}