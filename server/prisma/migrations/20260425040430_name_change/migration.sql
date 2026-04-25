/*
  Warnings:

  - You are about to drop the column `enviroment` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "enviroment",
ADD COLUMN     "environment" TEXT;
