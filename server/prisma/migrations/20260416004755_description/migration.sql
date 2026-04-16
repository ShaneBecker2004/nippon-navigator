/*
  Warnings:

  - You are about to drop the column `activityInfo` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `facilities` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `galleryImages` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `hotels` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Activity` table. All the data in the column will be lost.
  - The `price` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Trip` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[slug]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SavedActivity" DROP CONSTRAINT "SavedActivity_tripId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "activityInfo",
DROP COLUMN "facilities",
DROP COLUMN "galleryImages",
DROP COLUMN "hotels",
DROP COLUMN "image",
ADD COLUMN     "currency" TEXT,
ADD COLUMN     "details" JSONB,
ADD COLUMN     "images" JSONB,
ADD COLUMN     "map_embed_url" TEXT,
ADD COLUMN     "open_hours" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "thumbnail" TEXT,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "website" TEXT,
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "category" SET DATA TYPE TEXT,
DROP COLUMN "price",
ADD COLUMN     "price" JSONB;

-- AlterTable
ALTER TABLE "SavedActivity" ALTER COLUMN "tripId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_pkey",
ADD COLUMN     "description" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Trip_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Trip_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Activity_slug_key" ON "Activity"("slug");

-- AddForeignKey
ALTER TABLE "SavedActivity" ADD CONSTRAINT "SavedActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedActivity" ADD CONSTRAINT "SavedActivity_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
