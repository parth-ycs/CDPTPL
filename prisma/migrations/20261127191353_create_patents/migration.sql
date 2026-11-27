-- CreateTable
CREATE TABLE "patents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "reference_label" TEXT NOT NULL,
    "application_number" TEXT NOT NULL,
    "date" TEXT,
    "image" TEXT NOT NULL,
    "image_alt" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE INDEX "idx_patents_display_order" ON "patents"("display_order");
