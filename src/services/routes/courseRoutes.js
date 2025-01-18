const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// Database connection pool for better performance
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "samichhya", // Replace with your password
  database: "collegeconnect",
});

// Endpoint to get course count
router.get("/count", (req, res) => {
  const query = "SELECT COUNT(*) AS count FROM admin_courses"; // SQL query to count courses
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching course count:", err);
      return res.status(500).json({ message: "Error fetching course count" });
    }
    // Send the count as a response
    res.json({ count: results[0].count });
  });
});

// Endpoint to add a new course
router.post("/add-course", (req, res) => {
  const {
    course_name,
    university,
    duration_years,
    latitude,
    longitude,
  } = req.body;

  if (
    !course_name ||
    !university ||
    !duration_years ||
    !latitude ||
    !longitude
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `
    INSERT INTO admin_courses (course_name, university, duration_years, latitude, longitude)
    VALUES (?, ?, ?, ?, ?)
  `;
  const values = [course_name, university, duration_years, latitude, longitude];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to add course" });
    }
    res.json({ message: "Course added successfully" });
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
