/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `details` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `tripId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `location` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tripName` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_tripId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "createdAt",
DROP COLUMN "details",
DROP COLUMN "name",
DROP COLUMN "tripId",
ADD COLUMN     "activityInfo" TEXT[],
ADD COLUMN     "category" TEXT[],
ADD COLUMN     "description" TEXT,
ADD COLUMN     "destinationId" INTEGER,
ADD COLUMN     "duration" TEXT,
ADD COLUMN     "facilities" TEXT[],
ADD COLUMN     "galleryImages" JSONB,
ADD COLUMN     "highlights" TEXT[],
ADD COLUMN     "hotels" TEXT[],
ADD COLUMN     "image" TEXT,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "title",
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "tripName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Destination" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tours" TEXT NOT NULL,
    "image" TEXT,
    "location" TEXT NOT NULL,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedActivity" (
    "id" SERIAL NOT NULL,
    "tripId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "SavedActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Destination_name_key" ON "Destination"("name");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedActivity" ADD CONSTRAINT "SavedActivity_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
