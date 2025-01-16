const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { processInput, matchRules } = require("./nlp-rules");

const app = express();
const port = process.env.PORT || 5000;

// Import routes
const collegeAdminRoutes = require("./routes/collegeAdminRoutes");
const collegeRoutes = require("./routes/collegeRoutes");
const courseAdminRoutes = require("./routes/courseAdminRoutes");
const courseRoutes = require("./routes/courseRoutes");
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Ensure 'public' directory exists

// Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// MySQL connection setup
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "collegeconnect",
});

// Test the DB connection
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("Connected to the MySQL database.");
    connection.release();
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1); // Exit process if DB connection fails
  }
})();

// Haversine formula to calculate distance between two coordinates
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance * 1000;
}

app.post("/api/collegedistance", (req, res) => {
  const { userLatitude, userLongitude } = req.body;

  if (!userLatitude || !userLongitude) {
    return res.status(400).send({ error: "User location is required" });
  }
  const query = "SELECT id, name, latitude, longitude FROM admin_colleges";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).send({ error: "Database query failed" });
    }
    const collegeResult = [];
    for (let i = 0; i < results.length; i++) {
      const distance = haversine(
        userLatitude,
        userLongitude,
        results[i].college.latitude,
        results[i].college.longitude
      );
      collegeResult.push({ collegeInfo: results[i], distance: distance });
    }

    // const collegesWithDistance = results.map((college) => {
    //   const distance = haversine(
    //     userLatitude,
    //     userLongitude,
    //     college.latitude,
    //     college.longitude
    //   );
    // return {
    //   id: college.id,
    //   name: college.name,
    //   latitude: college.latitude,
    //   longitude: college.longitude,
    //   distance: distance.toFixed(2),
    // };
    // });
    collegeResult.sort((a, b) => a.distance - b.distance);

    res.status(200).send("collegeResult");
  });
});

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the College Connect API" });
});

// User Registration
app.post("/register", async (req, res) => {
  const { username, email, password, role = "user" } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public/images")); // Ensure 'public/images' directory exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Add College API
app.post("/api/add-college", upload.single("image"), async (req, res) => {
  try {
    const { name, address, valley, latitude, longitude } = req.body;
    const image_url = req.file ? `/images/${req.file.filename}` : null;

    if (!name || !address || !valley) {
      return res
        .status(400)
        .json({ message: "Name, address, and valley are required" });
    }

    await db.query(
      "INSERT INTO admin_colleges (name, address, valley, latitude, longitude, image_url) VALUES (?, ?, ?, ?, ?, ?)",
      [name, address, valley, latitude, longitude, image_url]
    );

    res.status(200).json({ message: "College added successfully!" });
  } catch (error) {
    console.error("Error adding college:", error.message);
    res.status(500).json({ message: "Error adding college" });
  }
});

app.get("/api/colleges", async (req, res) => {
  try {
    const [colleges] = await db.query(
      "SELECT id, name, address, image_url FROM admin_colleges"
    );
    res.json(colleges);
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).send("Error fetching colleges");
  }
});

// User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }
});

// Add Course API
app.post("/api/add-course", async (req, res) => {
  try {
    const { course_name, university, duration_years } = req.body;

    if (!course_name || !university || !duration_years) {
      return res.status(400).json({
        message: "Course name, university, and duration are required",
      });
    }

    await db.query(
      "INSERT INTO admin_courses (course_name, university, duration_years) VALUES (?, ?, ?)",
      [course_name, university, duration_years]
    );

    res.status(200).json({ message: "Course added successfully!" });
  } catch (error) {
    console.error("Error adding course:", error.message);
    res.status(500).json({ message: "Error adding course" });
  }
});

// Additional APIs
app.get("/api/users/count", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT COUNT(*) AS count FROM users");
    res.json({ count: rows[0].count });
  } catch (err) {
    console.error("Error fetching user count:", err.message);
    res.status(500).json({ message: "Error fetching user count" });
  }
});

// Additional APIs
app.get("/api/users/count", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT COUNT(*) AS count FROM users");
    res.json({ count: rows[0].count });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error, please try again later." });
  }
});

// Fetch Entrance Results
app.get("/api/entrance-results", async (req, res) => {
  try {
    const [results] = await db.query(
      "SELECT id, name, score, status FROM entrance_results"
    );
    res.json({ msg: "Success", data: results });
  } catch (err) {
    console.error("Error fetching entrance results:", err);
    res
      .status(500)
      .json({ error: "Error fetching results. Please try again later." });
  }
});

// Register a Candidate
app.post("/api/entrance-register", async (req, res) => {
  const { name, score, status } = req.body;

  if (!name || score === undefined || !status) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await db.query(
      "INSERT INTO entrance_results (name, score, status) VALUES (?, ?, ?)",
      [name, score, status]
    );

    res.json({ msg: "Candidate registered successfully!" });
  } catch (err) {
    console.error("Error registering candidate:", err);
    res.status(500).json({ error: "Error registering candidate. Try again." });
  }
});

// Recommendation Route
app.post("/recommend", async (req, res) => {
  const { input: userInput } = req.body;

  if (!userInput) {
    return res.status(400).json({ error: "Input is required." });
  }

  try {
    const entities = await processInput(userInput); // NLP processing
    const rule = matchRules(entities); // Rule matching logic

    if (rule) {
      res.json({
        msg: "Recommendation successful.",
        recommendations: rule.recommendations,
      });
    } else {
      res.json({ msg: "No recommendations found. Please refine your input." });
    }
  } catch (err) {
    console.error("Error in recommendation route:", err);
    res
      .status(500)
      .json({ error: "Error processing recommendation. Try again later." });
  }
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Error handling for address in use
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`Port ${port} is already in use. Trying another port...`);
    app.listen(port + 1, () => {
      console.log(`Server running on http://localhost:${port + 1}`);
    });
  }
});

// Khalti Payment Gateway
app.post("/api/khalti", async (req, res) => {
  try {
    const headers = {
      Authorization: `Key a20555db9286437bbd7cf857ab9489d8`,
      "Content-Type": "application/json",
    };
    const { fullName, amount } = req.body;
    const formData = {
      return_url: "http://localhost:5001",
      website_url: "http://localhost:5001",
      amount: amount,
      purchase_order_id: 11,
      purchase_order_name: fullName,
      customer_info: {
        name: "collegeConnect_Customer",
      },
    };
    const response = await axios.post(
      "https://a.khalti.com/api/v2/epayment/initiate/",
      formData,
      {
        headers,
      }
    );
    console.log(response.data);
    if (response.data) {
      res.json({
        message: "khalti success",
        payment_method: "khalti",
        data: response.data,
      });
    } else {
      res.json({
        message: "khalti unsuccess",
        payment_method: "khalti",
        data: "",
      });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
