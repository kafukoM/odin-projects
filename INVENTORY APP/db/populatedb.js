require("dotenv").config(); // Load environment variables from .env
const { Client } = require("pg");

async function createTables(client) {
  const createTablesSQL = `
  -- Create the genres table
  CREATE TABLE IF NOT EXISTS genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
  );

  -- Create the developers table
  CREATE TABLE IF NOT EXISTS developers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    country VARCHAR(100)
  );

  -- Create the games table
  CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date DATE,
    genre_id INT REFERENCES genres(id) ON DELETE SET NULL,
    developer_id INT REFERENCES developers(id) ON DELETE SET NULL
  );
  `;

  await client.query(createTablesSQL);
}

async function seedData(client) {
  const seedGenresSQL = `
  INSERT INTO genres (name)
  VALUES
    ('Action'),
    ('Adventure'),
    ('RPG'),
    ('Simulation'),
    ('Sports')
  ON CONFLICT DO NOTHING;
  `;

  const seedDevelopersSQL = `
  INSERT INTO developers (name, country)
  VALUES
    ('Epic Games', 'USA'),
    ('Nintendo', 'Japan'),
    ('Ubisoft', 'France'),
    ('Electronic Arts', 'USA'),
    ('Naughty Dog', 'USA')
  ON CONFLICT DO NOTHING;
  `;

  const seedGamesSQL = `
  INSERT INTO games (title, release_date, genre_id, developer_id)
  VALUES
    ('Fortnite', '2017-07-25', 1, 1),
    ('Zelda: Breath of the Wild', '2017-03-03', 2, 2),
    ('Assassins Creed Odyssey', '2018-10-05', 3, 3),
    ('FC 25', '2024-09-23', 5, 4),
    ('Uncharted 4', '2016-05-10', 2, 5)
  ON CONFLICT DO NOTHING;
  `;

  await client.query(seedGenresSQL);
  await client.query(seedDevelopersSQL);
  await client.query(seedGamesSQL);
}

async function main() {
  console.log("Seeding the database...");

  // Build the connection string dynamically using .env variables
  const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  const client = new Client({ connectionString });

  try {
    await client.connect();

    // Create tables if they don't exist
    await createTables(client);

    // Check if data already exists before seeding
    const { rows } = await client.query("SELECT COUNT(*) FROM genres");
    if (parseInt(rows[0].count, 10) === 0) {
      console.log("No data found. Seeding tables...");
      await seedData(client);
    } else {
      console.log("Data already exists. Skipping seeding.");
    }

    console.log("Database setup completed.");
  } catch (err) {
    console.error("Error seeding the database:", err.message);
  } finally {
    await client.end();
  }
}

main();
