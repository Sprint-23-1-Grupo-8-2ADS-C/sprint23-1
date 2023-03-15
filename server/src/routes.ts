import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";

export async function routes(app: FastifyInstance) {
  app.get("/", async () => {
    const funcionario = await prisma.funcionario.findMany()
  
    return funcionario
  });
}