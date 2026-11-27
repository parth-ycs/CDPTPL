import Database from "better-sqlite3";
import path from "node:path";
import { projectList } from "../data/projects/project";

const dbPath = path.join(process.cwd(), "data", "cdptpl.db");
const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

const insert = db.prepare(`
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
  ON CONFLICT(id) DO NOTHING
`);

const seedMany = db.transaction(() => {
  for (const p of projectList) {
    insert.run({
      id: p.id,
      category: p.category ?? p.hero.eyebrow,
      location: p.details?.location ?? null,
      plant: p.details?.plant ?? null,
      capacity: p.details?.capacity ?? null,
      year_of_award: p.details?.yearOfAward ?? null,
      year_of_completion: p.details?.yearOfCompletion ?? null,
      contract_value: p.details?.contractValue ?? null,
      execution_scope: p.details?.executionScope ?? null,
      hero_eyebrow: p.hero.eyebrow,
      hero_heading: p.hero.heading,
      hero_description: p.hero.description,
      hero_image: p.hero.image,
      hero_image_alt: p.hero.imageAlt,
      overview_heading_before: p.overview.heading.before,
      overview_heading_highlight: p.overview.heading.highlight ?? null,
      overview_heading_after: p.overview.heading.after ?? "",
      overview_description: p.overview.description,
      overview_image: p.overview.image ?? null,
      overview_image_alt: p.overview.imageAlt ?? null,
      problem_heading: p.problem?.heading ?? null,
      problem_description: p.problem?.description ?? null,
      problem_image: p.problem?.image ?? null,
      problem_image_alt: p.problem?.imageAlt ?? null,
      solution_heading: p.solution.heading,
      solution_description: p.solution.description,
      solution_image: p.solution.image ?? null,
      solution_image_alt: p.solution.imageAlt ?? null,
      solution_points: JSON.stringify(p.solution.points ?? []),
      result_heading: p.result?.heading ?? null,
      result_description: p.result?.description ?? null,
      result_points: p.result ? JSON.stringify(p.result.points ?? []) : null,
    });
  }
});

seedMany();
console.log(`Seeded ${projectList.length} project(s).`);
db.close();