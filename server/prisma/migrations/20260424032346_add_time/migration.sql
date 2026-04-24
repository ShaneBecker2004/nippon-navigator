/*
  Warnings:

  - You are about to drop the column `scheduledAt` on the `SavedActivity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SavedActivity" DROP COLUMN "scheduledAt",
ADD COLUMN     "time" TEXT;
