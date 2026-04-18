-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_destinationId_fkey";

-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "destinationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;
