/*
  Warnings:

  - You are about to drop the column `subcityId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the `Subcity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_subcityId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "subcityId",
ADD COLUMN     "subcity" TEXT;

-- DropTable
DROP TABLE "Subcity";
