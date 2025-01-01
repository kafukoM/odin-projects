require("dotenv").config(); // Load .env variables

const { Pool } = require("pg");

// Use environment variables for configuration
module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});
