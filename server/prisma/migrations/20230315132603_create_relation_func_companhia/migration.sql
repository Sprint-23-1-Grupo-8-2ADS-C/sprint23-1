/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `funcionario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companhia_id` to the `funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funcionario` ADD COLUMN `companhia_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `funcionario_email_key` ON `funcionario`(`email`);

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `funcionario_companhia_id_fkey` FOREIGN KEY (`companhia_id`) REFERENCES `companhiaAerea`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
