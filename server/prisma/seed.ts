import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const idFuncionario = "86fc16b7-a4d4-45ef-ac9a-ee5d664de6bf";

async function seeding() {
  await prisma.funcionario.deleteMany();
  await prisma.companhiaAerea.deleteMany();

  /*
   * Criar companhiaAerea
   */
  await Promise.all([
    prisma.companhiaAerea.create({
      data: {
        nome: "Gol",
        cnpj: "07575651/0001-59",
        email: "negocios.gol@gol.com.br"
      }
    }),
  ]);

  await Promise.all([
    prisma.funcionario.create({
      data: {
        id: idFuncionario,
        nome: "Renan Fernandez",
        email: "fernandez.renan@gol.com.br",
        senha: "54321",
        tel: "11956130537",
        cargo: "Suporte Técnico",
        companhia_id: 1
      }
    })
  ]);
};

seeding()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });