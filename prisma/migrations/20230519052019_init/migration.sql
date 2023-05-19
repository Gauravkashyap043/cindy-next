-- CreateTable
CREATE TABLE "SerpApiProduct" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "searchQuery" TEXT NOT NULL DEFAULT '',
    "source" TEXT NOT NULL DEFAULT '',
    "delivery" TEXT NOT NULL DEFAULT '',
    "serpApiProductApi" TEXT NOT NULL,
    "productId" TEXT NOT NULL DEFAULT '',
    "rating" DOUBLE PRECISION NOT NULL DEFAULT -1,
    "reviews" DOUBLE PRECISION NOT NULL DEFAULT -1,
    "badge" TEXT NOT NULL DEFAULT '',
    "extensions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SerpApiProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SerpApiProduct_url_key" ON "SerpApiProduct"("url");

-- CreateIndex
CREATE UNIQUE INDEX "SerpApiProduct_serpApiProductApi_key" ON "SerpApiProduct"("serpApiProductApi");

-- CreateIndex
CREATE UNIQUE INDEX "SerpApiProduct_productId_key" ON "SerpApiProduct"("productId");
