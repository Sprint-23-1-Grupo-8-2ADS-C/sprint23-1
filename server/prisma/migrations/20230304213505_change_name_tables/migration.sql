/*
  Warnings:

  - You are about to drop the `companhiasAereas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "companhiasAereas";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "companhiaAerea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
