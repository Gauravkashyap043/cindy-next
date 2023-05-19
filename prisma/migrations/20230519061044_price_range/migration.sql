-- CreateTable
CREATE TABLE "PirceRange" (
    "id" TEXT NOT NULL,
    "low" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "high" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "shownPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "productId" TEXT NOT NULL,

    CONSTRAINT "PirceRange_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PirceRange" ADD CONSTRAINT "PirceRange_productId_fkey" FOREIGN KEY ("productId") REFERENCES "SerpApiProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
