/*
  Warnings:

  - You are about to drop the column `goal` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `goal_date` on the `User` table. All the data in the column will be lost.
  - Added the required column `google_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "goal",
DROP COLUMN "goal_date",
ADD COLUMN     "google_id" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
