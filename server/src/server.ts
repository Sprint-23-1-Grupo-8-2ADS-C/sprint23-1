import Fastify from "fastify";
import cors from '@fastify/cors';
import { routes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(routes);

app.listen({
  port: 3333,
}).then(() => {
  console.log("Server running in: http://localhost:3333/");
});
