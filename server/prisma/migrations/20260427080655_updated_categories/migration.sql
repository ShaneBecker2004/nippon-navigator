/*
  Warnings:

  - The `accessibility` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `seasonal` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `traveler` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "accessibility",
ADD COLUMN     "accessibility" TEXT[],
DROP COLUMN "seasonal",
ADD COLUMN     "seasonal" TEXT[],
DROP COLUMN "traveler",
ADD COLUMN     "traveler" TEXT[];
