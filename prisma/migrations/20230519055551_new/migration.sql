/*
  Warnings:

  - The primary key for the `SerpApiProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `badge` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `delivery` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `searchQuery` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `serpApiProductApi` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `SerpApiProduct` table. All the data in the column will be lost.
  - You are about to alter the column `reviews` on the `SerpApiProduct` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- DropIndex
DROP INDEX "SerpApiProduct_productId_key";

-- DropIndex
DROP INDEX "SerpApiProduct_serpApiProductApi_key";

-- DropIndex
DROP INDEX "SerpApiProduct_url_key";

-- AlterTable
ALTER TABLE "SerpApiProduct" DROP CONSTRAINT "SerpApiProduct_pkey",
DROP COLUMN "badge",
DROP COLUMN "createdAt",
DROP COLUMN "delivery",
DROP COLUMN "image",
DROP COLUMN "price",
DROP COLUMN "productId",
DROP COLUMN "searchQuery",
DROP COLUMN "serpApiProductApi",
DROP COLUMN "source",
DROP COLUMN "updatedAt",
DROP COLUMN "url",
ADD COLUMN     "best_price" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "condition" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "price_range" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "prices" TEXT[],
ADD COLUMN     "product_id" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "title" SET DEFAULT '',
ALTER COLUMN "rating" SET DEFAULT 0,
ALTER COLUMN "reviews" SET DEFAULT 0,
ALTER COLUMN "reviews" SET DATA TYPE INTEGER,
ADD CONSTRAINT "SerpApiProduct_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SerpApiProduct_id_seq";

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT '',
    "link" TEXT NOT NULL DEFAULT '',
    "productId" TEXT NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Highlight" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "productId" TEXT NOT NULL,

    CONSTRAINT "Highlight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seller" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "link" TEXT NOT NULL DEFAULT '',
    "productId" TEXT NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specification" (
    "id" TEXT NOT NULL,
    "spec" JSONB NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Specification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_productId_fkey" FOREIGN KEY ("productId") REFERENCES "SerpApiProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Highlight" ADD CONSTRAINT "Highlight_productId_fkey" FOREIGN KEY ("productId") REFERENCES "SerpApiProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_productId_fkey" FOREIGN KEY ("productId") REFERENCES "SerpApiProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Specification" ADD CONSTRAINT "Specification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "SerpApiProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
