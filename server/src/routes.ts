import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "./lib/prisma";

export async function routes(app: FastifyInstance) {
  app.post("/login", async (request, response) => {
    const login = z.object({
      emailLogin: z.string(),
      senhaLogin: z.string(),
    });

    const { emailLogin, senhaLogin } = login.parse(request.body);

    const selectUsuario = await prisma.funcionario.findMany({
      where: {
        email: emailLogin,
        senha: senhaLogin,
      }
    });

    console.log(selectUsuario);
    return selectUsuario;
  });
}