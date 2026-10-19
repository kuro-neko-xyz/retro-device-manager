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

fastify.get("/api/v1/devices", async (request, response) => {
  const client = await fastify.pg.connect();

  const { rows } = await client.query(
    `
      SELECT
        devices.id AS id,
        devices.alias AS alias,
        devices.image_url AS image_url,
        devices.default_color AS default_color,
        models.name AS model,
        brands.name AS brand
      FROM
        devices
      JOIN
        models
      ON
        devices.model = models.id
      JOIN
        brands
      ON
        models.brand = brands.id;`,
  );

  client.release();

  return rows;
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
