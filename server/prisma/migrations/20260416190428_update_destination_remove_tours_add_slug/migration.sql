/*
  Warnings:

  - The `category` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `type` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `tours` on the `Destination` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Destination` will be added. If there are existing duplicate values, this will fail.
  - Made the column `destinationId` on table `Activity` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `slug` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_destinationId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "category",
ADD COLUMN     "category" TEXT[],
ALTER COLUMN "destinationId" SET NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT[];

-- AlterTable
ALTER TABLE "Destination" DROP COLUMN "tours",
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SavedActivity" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "scheduledAt" TIMESTAMP(3),
ADD COLUMN     "status" TEXT;

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "notes" TEXT;

-- CreateIndex
CREATE INDEX "Activity_destinationId_idx" ON "Activity"("destinationId");

-- CreateIndex
CREATE UNIQUE INDEX "Destination_slug_key" ON "Destination"("slug");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
