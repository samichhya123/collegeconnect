const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// Database connection pool for better performance
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "samichhya", // Ensure this is correct
  database: "collegeconnect",
  connectionLimit: 10, // Limit the number of concurrent connections
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Database connected successfully.");
  connection.release();
});

// Admin endpoint to add a course
router.post("/add-course", (req, res) => {
  const { course_name, university, duration_years } = req.body;

  if (!course_name || !university || !duration_years) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const query = `
    INSERT INTO admin_courses (course_name, university, duration_years)
    VALUES (?, ?, ?)
  `;

  db.query(query, [course_name, university, duration_years], (err) => {
    if (err) {
      console.error("Database insertion error:", err);
      return res.status(500).json({ error: "Database insertion failed." });
    }
    res.status(201).json({ message: "Course added successfully!" });
  });
});

// Endpoint to get all courses
router.get("/courses", (req, res) => {
  const query = `SELECT * FROM admin_courses`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Database fetch error:", err);
      return res.status(500).json({ error: "Failed to fetch courses." });
    }
    res.json(results);
  });
});

// Add the route to fetch course details by course name
router.get("/get-course", (req, res) => {
  const { course_name } = req.query;

  if (!course_name) {
    return res.status(400).json({ error: "Course name is required." });
  }

  const query = "SELECT * FROM admin_courses WHERE course_name = ?";
  db.query(query, [course_name], (err, results) => {
    if (err) {
      console.error("Error fetching course:", err);
      return res.status(500).json({ error: "Error fetching course data" });
    }
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ error: "Course not found." });
    }
  });
});

module.exports = router;
