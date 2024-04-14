const { Pool } = require("pg");

// Create a new pool instance with your PostgreSQL connection options
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "randevu", // Specify the database name
  password: "admin",
  port: 5432,
  // Other options...
});

module.exports = pool;
