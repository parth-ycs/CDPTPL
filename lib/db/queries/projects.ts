import "server-only";

import db  from "@/lib/db";
import {
  INNOVATION_SHOWCASE_CATEGORY,
  type ProjectData,
} from "@/data/projects/projects";

export type Project = ProjectData;

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
};

const SELECT_COLUMNS = `
  id, category,
  location, plant, capacity, year_of_award, year_of_completion, contract_value, execution_scope,
  hero_eyebrow, hero_heading, hero_description, hero_image, hero_image_alt,
  overview_heading_before, overview_heading_highlight, overview_heading_after,
  overview_description, overview_image, overview_image_alt,
  problem_heading, problem_description, problem_image, problem_image_alt,
  solution_heading, solution_description, solution_image, solution_image_alt, solution_points,
  result_heading, result_description, result_points
`;

function parsePoints(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function toProject(row: ProjectRow): Project {
  const details = {
    ...(row.location ? { location: row.location } : {}),
    ...(row.plant ? { plant: row.plant } : {}),
    ...(row.capacity ? { capacity: row.capacity } : {}),
    ...(row.year_of_award ? { yearOfAward: row.year_of_award } : {}),
    ...(row.year_of_completion ? { yearOfCompletion: row.year_of_completion } : {}),
    ...(row.contract_value ? { contractValue: row.contract_value } : {}),
    ...(row.execution_scope ? { executionScope: row.execution_scope } : {}),
  };

  return {
    id: row.id,
    category: row.category,
    ...(Object.keys(details).length > 0 ? { details } : {}),
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
    ...(row.problem_heading && row.problem_description
      ? {
          problem: {
            heading: row.problem_heading,
            description: row.problem_description,
            ...(row.problem_image ? { image: row.problem_image } : {}),
            ...(row.problem_image_alt ? { imageAlt: row.problem_image_alt } : {}),
          },
        }
      : {}),
    solution: {
      heading: row.solution_heading,
      description: row.solution_description,
      ...(row.solution_image ? { image: row.solution_image } : {}),
      ...(row.solution_image_alt ? { imageAlt: row.solution_image_alt } : {}),
      points: parsePoints(row.solution_points),
    },
    ...(row.result_heading && row.result_description
      ? {
          result: {
            heading: row.result_heading,
            description: row.result_description,
            points: parsePoints(row.result_points),
          },
        }
      : {}),
  };
}

export function getProjects(): Project[] {
  const rows = db
    .prepare(`SELECT ${SELECT_COLUMNS} FROM projects ORDER BY rowid ASC`)
    .all() as ProjectRow[];
  return rows.map(toProject);
}

export function getProjectsByCategory(category: string): Project[] {
  const rows = db
    .prepare(
      `SELECT ${SELECT_COLUMNS} FROM projects WHERE category = ? ORDER BY rowid ASC`,
    )
    .all(category) as ProjectRow[];
  return rows.map(toProject);
}

export function getInnovationShowcaseProjects(): Project[] {
  return getProjectsByCategory(INNOVATION_SHOWCASE_CATEGORY);
}

export function getProjectById(id: string): Project | null {
  const row = db
    .prepare(`SELECT ${SELECT_COLUMNS} FROM projects WHERE id = ?`)
    .get(id) as ProjectRow | undefined;
  return row ? toProject(row) : null;
}

export function getRelatedProjects(excludeId: string, limit = 3): Project[] {
  const rows = db
    .prepare(
      `SELECT ${SELECT_COLUMNS} FROM projects WHERE id != ? ORDER BY rowid ASC LIMIT ?`,
    )
    .all(excludeId, limit) as ProjectRow[];
  return rows.map(toProject);
}

export function getProjectCategories(): string[] {
  const rows = db
    .prepare(`SELECT DISTINCT category FROM projects ORDER BY rowid ASC`)
    .all() as { category: string }[];
  return rows.map((r) => r.category);
}

export function getProjectsCount(): number {
  const row = db
    .prepare(`SELECT COUNT(*) as count FROM projects`)
    .get() as { count: number };
  return row.count;
}

export function projectExists(id: string): boolean {
  const row = db
    .prepare(`SELECT 1 FROM projects WHERE id = ?`)
    .get(id);
  return Boolean(row);
}

export function createProject(data: Project): Project {
  db.prepare(`
    INSERT INTO projects (
      id, category,
      location, plant, capacity, year_of_award, year_of_completion, contract_value, execution_scope,
      hero_eyebrow, hero_heading, hero_description, hero_image, hero_image_alt,
      overview_heading_before, overview_heading_highlight, overview_heading_after,
      overview_description, overview_image, overview_image_alt,
      problem_heading, problem_description, problem_image, problem_image_alt,
      solution_heading, solution_description, solution_image, solution_image_alt, solution_points,
      result_heading, result_description, result_points
    ) VALUES (
      @id, @category,
      @location, @plant, @capacity, @year_of_award, @year_of_completion, @contract_value, @execution_scope,
      @hero_eyebrow, @hero_heading, @hero_description, @hero_image, @hero_image_alt,
      @overview_heading_before, @overview_heading_highlight, @overview_heading_after,
      @overview_description, @overview_image, @overview_image_alt,
      @problem_heading, @problem_description, @problem_image, @problem_image_alt,
      @solution_heading, @solution_description, @solution_image, @solution_image_alt, @solution_points,
      @result_heading, @result_description, @result_points
    )
  `).run({
    id: data.id,
    category: data.category,
    location: data.details?.location || null,
    plant: data.details?.plant || null,
    capacity: data.details?.capacity || null,
    year_of_award: data.details?.yearOfAward || null,
    year_of_completion: data.details?.yearOfCompletion || null,
    contract_value: data.details?.contractValue || null,
    execution_scope: data.details?.executionScope || null,
    hero_eyebrow: data.hero.eyebrow,
    hero_heading: data.hero.heading,
    hero_description: data.hero.description,
    hero_image: data.hero.image,
    hero_image_alt: data.hero.imageAlt,
    overview_heading_before: data.overview.heading.before,
    overview_heading_highlight: data.overview.heading.highlight || null,
    overview_heading_after: data.overview.heading.after ?? "",
    overview_description: data.overview.description,
    overview_image: data.overview.image || null,
    overview_image_alt: data.overview.imageAlt || null,
    problem_heading: data.problem?.heading || null,
    problem_description: data.problem?.description || null,
    problem_image: data.problem?.image || null,
    problem_image_alt: data.problem?.imageAlt || null,
    solution_heading: data.solution.heading,
    solution_description: data.solution.description,
    solution_image: data.solution.image || null,
    solution_image_alt: data.solution.imageAlt || null,
    solution_points: JSON.stringify(data.solution.points ?? []),
    result_heading: data.result?.heading || null,
    result_description: data.result?.description || null,
    result_points: data.result ? JSON.stringify(data.result.points ?? []) : null,
  });

  return getProjectById(data.id)!;
}

export function updateProject(
  id: string,
  patch: Partial<Omit<Project, "id">>,
): Project | null {
  const params: Record<string, string | null> = { id };
  const sets: string[] = [];

  const add = (col: string, param: string, val: string | null) => {
    sets.push(`${col} = @${param}`);
    params[param] = val;
  };

  if (patch.category !== undefined) add("category", "category", patch.category);

  if (patch.details !== undefined) {
    add("location", "location", patch.details?.location || null);
    add("plant", "plant", patch.details?.plant || null);
    add("capacity", "capacity", patch.details?.capacity || null);
    add("year_of_award", "year_of_award", patch.details?.yearOfAward || null);
    add(
      "year_of_completion",
      "year_of_completion",
      patch.details?.yearOfCompletion || null,
    );
    add("contract_value", "contract_value", patch.details?.contractValue || null);
    add("execution_scope", "execution_scope", patch.details?.executionScope || null);
  }

  if (patch.hero !== undefined) {
    add("hero_eyebrow", "hero_eyebrow", patch.hero.eyebrow);
    add("hero_heading", "hero_heading", patch.hero.heading);
    add("hero_description", "hero_description", patch.hero.description);
    add("hero_image", "hero_image", patch.hero.image);
    add("hero_image_alt", "hero_image_alt", patch.hero.imageAlt);
  }

  if (patch.overview !== undefined) {
    add(
      "overview_heading_before",
      "overview_heading_before",
      patch.overview.heading.before,
    );
    add(
      "overview_heading_highlight",
      "overview_heading_highlight",
      patch.overview.heading.highlight || null,
    );
    add(
      "overview_heading_after",
      "overview_heading_after",
      patch.overview.heading.after ?? "",
    );
    add(
      "overview_description",
      "overview_description",
      patch.overview.description,
    );
    add("overview_image", "overview_image", patch.overview.image || null);
    add(
      "overview_image_alt",
      "overview_image_alt",
      patch.overview.imageAlt || null,
    );
  }

  if ("problem" in patch) {
    add("problem_heading", "problem_heading", patch.problem?.heading || null);
    add(
      "problem_description",
      "problem_description",
      patch.problem?.description || null,
    );
    add("problem_image", "problem_image", patch.problem?.image || null);
    add("problem_image_alt", "problem_image_alt", patch.problem?.imageAlt || null);
  }

  if (patch.solution !== undefined) {
    add("solution_heading", "solution_heading", patch.solution.heading);
    add(
      "solution_description",
      "solution_description",
      patch.solution.description,
    );
    add("solution_image", "solution_image", patch.solution.image || null);
    add(
      "solution_image_alt",
      "solution_image_alt",
      patch.solution.imageAlt || null,
    );
    add(
      "solution_points",
      "solution_points",
      JSON.stringify(patch.solution.points ?? []),
    );
  }

  if ("result" in patch) {
    add("result_heading", "result_heading", patch.result?.heading || null);
    add(
      "result_description",
      "result_description",
      patch.result?.description || null,
    );
    add(
      "result_points",
      "result_points",
      patch.result ? JSON.stringify(patch.result.points ?? []) : null,
    );
  }

  if (sets.length === 0) return getProjectById(id);

  const info = db
    .prepare(`UPDATE projects SET ${sets.join(", ")} WHERE id = @id`)
    .run(params);

  if (info.changes === 0) return null;
  return getProjectById(id);
}

export function deleteProject(id: string): boolean {
  const info = db.prepare(`DELETE FROM projects WHERE id = ?`).run(id);
  return info.changes > 0;
}