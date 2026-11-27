-- CreateTable
CREATE TABLE "blogs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "published_at" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "image_alt" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "content" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "idx_blogs_published_at" ON "blogs"("published_at");

-- CreateIndex
CREATE INDEX "idx_blogs_category" ON "blogs"("category");
