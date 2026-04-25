-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "accessibility" TEXT,
ADD COLUMN     "enviroment" TEXT,
ADD COLUMN     "seasonal" TEXT,
ADD COLUMN     "subcityId" INTEGER,
ADD COLUMN     "traveler" TEXT;

-- CreateTable
CREATE TABLE "Subcity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Subcity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subcity_name_key" ON "Subcity"("name");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_subcityId_fkey" FOREIGN KEY ("subcityId") REFERENCES "Subcity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
