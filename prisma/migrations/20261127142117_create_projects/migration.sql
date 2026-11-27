-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "location" TEXT,
    "plant" TEXT,
    "capacity" TEXT,
    "year_of_award" TEXT,
    "year_of_completion" TEXT,
    "contract_value" TEXT,
    "execution_scope" TEXT,
    "hero_eyebrow" TEXT NOT NULL,
    "hero_heading" TEXT NOT NULL,
    "hero_description" TEXT NOT NULL,
    "hero_image" TEXT NOT NULL,
    "hero_image_alt" TEXT NOT NULL,
    "overview_heading_before" TEXT NOT NULL,
    "overview_heading_highlight" TEXT,
    "overview_heading_after" TEXT NOT NULL DEFAULT '',
    "overview_description" TEXT NOT NULL,
    "overview_image" TEXT,
    "overview_image_alt" TEXT,
    "problem_heading" TEXT,
    "problem_description" TEXT,
    "problem_image" TEXT,
    "problem_image_alt" TEXT,
    "solution_heading" TEXT NOT NULL,
    "solution_description" TEXT NOT NULL,
    "solution_image" TEXT,
    "solution_image_alt" TEXT,
    "solution_points" TEXT NOT NULL DEFAULT '[]',
    "result_heading" TEXT,
    "result_description" TEXT,
    "result_points" TEXT
);

-- CreateIndex
CREATE INDEX "idx_projects_category" ON "projects"("category");
