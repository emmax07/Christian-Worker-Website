const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise"); // Import promise-based API

// Load environment variables from .env file
dotenv.config();

// Enable CORS for all routes
const app = express();
app.use(cors());

// Create a connection pool to the MySQL database (recommended for async handling)
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Sample route
app.get("/", async (req, res) => {
  try {
    // Create a connection to the database using async/await
    const connection = await mysql.createConnection(dbConfig);

    // Check the connection and respond
    await connection.ping(); // Test the connection
    res.send("Hello, World! - Your connection to mysql database is successful");

    // Close the connection after the request
    await connection.end();
  } catch (err) {
    console.error("Error connecting to the database:", err.stack);
    res.status(500).send("Error connecting to the database");
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
