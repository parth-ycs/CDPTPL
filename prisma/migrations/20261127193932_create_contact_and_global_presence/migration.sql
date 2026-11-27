-- CreateTable
CREATE TABLE "global_countries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "country" TEXT NOT NULL,
    "country_code" TEXT NOT NULL,
    "iso_numeric" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "capabilities" TEXT NOT NULL DEFAULT '[]',
    "longitude" REAL NOT NULL,
    "latitude" REAL NOT NULL,
    "display_order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "offices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "country_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL DEFAULT 'Chemdist Group',
    "city" TEXT NOT NULL,
    "summary" TEXT NOT NULL DEFAULT '',
    "capabilities" TEXT NOT NULL DEFAULT '[]',
    "longitude" REAL,
    "latitude" REAL,
    "address_lines" TEXT NOT NULL DEFAULT '[]',
    "phones" TEXT NOT NULL DEFAULT '[]',
    "email" TEXT,
    "note" TEXT,
    "map_url" TEXT,
    "show_on_contact" BOOLEAN NOT NULL DEFAULT true,
    "show_on_global" BOOLEAN NOT NULL DEFAULT true,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "offices_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "global_countries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "facilities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "country_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "capabilities" TEXT NOT NULL DEFAULT '[]',
    "longitude" REAL NOT NULL,
    "latitude" REAL NOT NULL,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "facilities_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "global_countries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "contact_settings" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'default',
    "hq_heading" TEXT NOT NULL,
    "hq_company" TEXT NOT NULL,
    "hq_address_lines" TEXT NOT NULL DEFAULT '[]',
    "hq_image" TEXT NOT NULL,
    "hq_image_alt" TEXT NOT NULL,
    "support_heading" TEXT NOT NULL,
    "support_toll_free" TEXT NOT NULL,
    "support_toll_free_href" TEXT NOT NULL,
    "support_email" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
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
    "result_points" TEXT,
    "country_id" TEXT,
    "city" TEXT,
    "longitude" REAL,
    "latitude" REAL,
    "global_industry" TEXT,
    "global_status" TEXT DEFAULT 'completed',
    "show_on_global" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "projects_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "global_countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_projects" ("capacity", "category", "contract_value", "execution_scope", "hero_description", "hero_eyebrow", "hero_heading", "hero_image", "hero_image_alt", "id", "location", "overview_description", "overview_heading_after", "overview_heading_before", "overview_heading_highlight", "overview_image", "overview_image_alt", "plant", "problem_description", "problem_heading", "problem_image", "problem_image_alt", "result_description", "result_heading", "result_points", "solution_description", "solution_heading", "solution_image", "solution_image_alt", "solution_points", "year_of_award", "year_of_completion") SELECT "capacity", "category", "contract_value", "execution_scope", "hero_description", "hero_eyebrow", "hero_heading", "hero_image", "hero_image_alt", "id", "location", "overview_description", "overview_heading_after", "overview_heading_before", "overview_heading_highlight", "overview_image", "overview_image_alt", "plant", "problem_description", "problem_heading", "problem_image", "problem_image_alt", "result_description", "result_heading", "result_points", "solution_description", "solution_heading", "solution_image", "solution_image_alt", "solution_points", "year_of_award", "year_of_completion" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
CREATE INDEX "idx_projects_category" ON "projects"("category");
CREATE INDEX "idx_projects_country_id" ON "projects"("country_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "idx_global_countries_display_order" ON "global_countries"("display_order");

-- CreateIndex
CREATE INDEX "idx_offices_country_id" ON "offices"("country_id");

-- CreateIndex
CREATE INDEX "idx_offices_display_order" ON "offices"("display_order");

-- CreateIndex
CREATE INDEX "idx_facilities_country_id" ON "facilities"("country_id");

-- CreateIndex
CREATE INDEX "idx_facilities_display_order" ON "facilities"("display_order");
