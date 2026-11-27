-- CreateTable
CREATE TABLE "media_items" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "href" TEXT NOT NULL DEFAULT '#enquiry',
    "display_order" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE INDEX "idx_media_items_display_order" ON "media_items"("display_order");
