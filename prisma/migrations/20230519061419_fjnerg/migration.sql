/*
  Warnings:

  - You are about to drop the column `shownPrice` on the `PirceRange` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PirceRange" DROP COLUMN "shownPrice",
ADD COLUMN     "shown_price" DOUBLE PRECISION NOT NULL DEFAULT 0;
