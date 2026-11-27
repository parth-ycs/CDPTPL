-- CreateTable
CREATE TABLE "csr_initiatives" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "image_alt" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE INDEX "idx_csr_initiatives_display_order" ON "csr_initiatives"("display_order");
