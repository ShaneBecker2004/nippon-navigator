/*
  Warnings:

  - You are about to alter the column `reviews` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "reviews" SET DATA TYPE INTEGER;
