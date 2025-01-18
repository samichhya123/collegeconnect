const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection configuration
const db = mysql.createConnection({
  host: "localhost", // MySQL server host
  user: "root", // MySQL username
  password: "samichhya", // MySQL password (empty if not set)
  database: "collegeconnect", // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Create a table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS entrance_exam_forms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact VARCHAR(20) NOT NULL,
    college VARCHAR(255) NOT NULL,
    program VARCHAR(255) NOT NULL,
    queries TEXT
  );
`;

db.query(createTableQuery, (err, result) => {
  if (err) {
    console.error("Error creating table:", err);
    return;
  }
  console.log("Table created or already exists");
});

// API to handle form submission
app.post("/submit-form", (req, res) => {
  const { fullName, email, contact, college, program, queries } = req.body;

  // Insert the form data into MySQL
  const insertQuery = `
    INSERT INTO entrance_exam_forms (fullName, email, contact, college, program, queries)
    VALUES (?, ?, ?, ?, ?, ?);
  `;

  db.query(
    insertQuery,
    [fullName, email, contact, college, program, queries],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ message: "Error submitting form data." });
        return;
      }
      res.status(200).json({ message: "Form submitted successfully!" });
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
