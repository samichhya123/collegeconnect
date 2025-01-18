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

// Haversine formula function
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const toRad = (x) => (x * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

// API endpoint to calculate distances for colleges
router.post("/collegedistance", (req, res) => {
  const { userLocation } = req.body;

  if (
    !userLocation ||
    userLocation.latitude == null ||
    userLocation.longitude == null
  ) {
    return res.status(400).json({ error: "User location is required." });
  }

  const userLat = parseFloat(userLocation.latitude);
  const userLon = parseFloat(userLocation.longitude);
  const RADIUS = 5; // 5 km radius

  // Query to fetch all colleges
  const query = `SELECT name, address, latitude, longitude FROM admin_colleges`;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch colleges." });
    }

    // Calculate distance for each college and filter by radius
    const collegesWithinRadius = results
      .map((college) => {
        const { latitude, longitude, ...rest } = college;
        const distance = haversine(
          userLat,
          userLon,
          parseFloat(latitude),
          parseFloat(longitude)
        );
        return {
          ...rest,
          latitude,
          longitude,
          distance,
        };
      })
      .filter((college) => college.distance <= RADIUS);

    // Sort colleges by distance
    collegesWithinRadius.sort((a, b) => a.distance - b.distance);

    res.json(collegesWithinRadius);
  });
});

// Endpoint to get college count
router.get("/count", (req, res) => {
  const query = "SELECT COUNT(*) AS count FROM admin_colleges"; // SQL query to count colleges
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching college count:", err);
      return res.status(500).json({ message: "Error fetching college count" });
    }
    // Send the count as a response
    res.json({ count: results[0].count });
  });
});

// Endpoint to add a new college
router.post("/add-college", (req, res) => {
  const { name, address, latitude, longitude, image_url } = req.body;

  if (!name || !address || !latitude || !longitude || !image_url) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `
    INSERT INTO admin_colleges (name, address, valley,latitude, longitude, image_url)
    VALUES (?, ?, ?, ?, ?)
  `;
  const values = [name, address, latitude, longitude, image_url];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to add college" });
    }
    res.json({ message: "College added successfully" });
  });
});

module.exports = router;
