-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "stand" TEXT,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "image_alt" TEXT NOT NULL,
    "url" TEXT,
    "display_order" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE INDEX "idx_events_display_order" ON "events"("display_order");
