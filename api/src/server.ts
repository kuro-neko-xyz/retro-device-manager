import Fastify from "fastify";
import dotenv from "dotenv";
import postgres from "@fastify/postgres";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

fastify.register(postgres, {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
});

fastify.post("/api/v1/events", async (request, response) => {
  const { body } = request;

  return response.status(200).send("Success");
});

const start = async () => {
  try {
    await fastify.listen({
      host: "0.0.0.0",
      port: 3000,
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
