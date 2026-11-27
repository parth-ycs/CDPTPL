-- CreateTable
CREATE TABLE "sbus" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "eyebrow" TEXT NOT NULL,
    "offerings" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "image_alt" TEXT NOT NULL,
    "capabilities" TEXT NOT NULL DEFAULT '[]',
    "display_order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "sbu_navigation_groups" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "sbu_slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "eyebrow" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "sbu_navigation_groups_sbu_slug_fkey" FOREIGN KEY ("sbu_slug") REFERENCES "sbus" ("slug") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "solutions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sbu_slug" TEXT NOT NULL,
    "group_slug" TEXT,
    "slug" TEXT NOT NULL,
    "hero_name" TEXT NOT NULL,
    "hero_tagline" TEXT NOT NULL,
    "hero_description" TEXT NOT NULL,
    "hero_image" TEXT,
    "hero_image_alt" TEXT,
    "sections" TEXT NOT NULL DEFAULT '[]',
    "display_order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "solutions_sbu_slug_fkey" FOREIGN KEY ("sbu_slug") REFERENCES "sbus" ("slug") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "solutions_group_slug_fkey" FOREIGN KEY ("group_slug") REFERENCES "sbu_navigation_groups" ("slug") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "idx_sbus_display_order" ON "sbus"("display_order");

-- CreateIndex
CREATE INDEX "idx_sbu_groups_sbu_order" ON "sbu_navigation_groups"("sbu_slug", "display_order");

-- CreateIndex
CREATE INDEX "idx_solutions_sbu_order" ON "solutions"("sbu_slug", "display_order");

-- CreateIndex
CREATE INDEX "idx_solutions_group_order" ON "solutions"("group_slug", "display_order");

-- CreateIndex
CREATE UNIQUE INDEX "uq_solutions_sbu_slug" ON "solutions"("sbu_slug", "slug");
