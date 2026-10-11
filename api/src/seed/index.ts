import "dotenv/config";
import { Client } from "pg";

const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
});

async function seedDatabase() {
  await client.connect();

  await client.query("BEGIN");

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS brands (
        id SMALLSERIAL PRIMARY KEY,
        name VARCHAR(255)
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS models (
        id SMALLSERIAL PRIMARY KEY,
        name VARCHAR(255),
        brand INTEGER,
        FOREIGN KEY (brand) REFERENCES brands(id)
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS devices (
        id SMALLSERIAL PRIMARY KEY,
        alias VARCHAR(255),
        model INTEGER,
        FOREIGN KEY (model) REFERENCES models(id)
      );
    `);

    await client.query("COMMIT");
    await client.end();
  } catch (error: any) {
    await client.query("ROLLBACK");

    console.error("------- Error creating database -------");
    console.error("Timestamp:", new Date().toISOString());
    console.error("Error Message:", error.message);

    if (error.stderr) console.error("Shell STDERR:", error.stderr);
    if (error.stdout) console.error("Shell STDOUT:", error.stdout);

    process.exit(1);
  }
}

seedDatabase();
