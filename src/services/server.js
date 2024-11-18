const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // For environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "collegeconnect",
});

// Test the DB connection
db.getConnection()
  .then((connection) => {
    console.log("Connected to the MySQL database.");
    connection.release();
  })
  .catch((err) => {
    console.error("Error connecting to MySQL:", err);
  });

// Registration route
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    // Check if user exists
    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Insert the new user into the database
    await db.query(
      "INSERT INTO users (username, email, password, role, created_at) VALUES (?, ?, ?, 'user', NOW())",
      [username, email, hashedPassword]
    );

    res.json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ msg: "Server error, please try again later" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    // Check if user exists
    const [results] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (results.length === 0) {
      return res.status(400).json({ msg: "User not found" });
    }

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // If login is successful, return user details (excluding password)
    res.json({
      msg: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Server error, please try again later" });
  }
});

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the College Connect API");
});

// Start the server
const server = app.listen(port, () => {
  console.log("Server running on http://localhost:${port}");
});

// Error handling for address in use
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log("Port ${port} is already in use. Trying another port...");
    app.listen(5001, () => {
      console.log("Server running on http://localhost:5001");
    });
  }
});
// Fetch all entrance results
app.get("/api/entrance-results", async (req, res) => {
  try {
    const [results] = await db.query("SELECT id, name, score, status FROM entrance_results");
    res.json(results);
  } catch (err) {
    console.error("Error fetching entrance results:", err);
    res.status(500).json({ msg: "Error fetching results. Please try again later." });
  }
});
// Register a candidate for entrance exam
app.post("/api/entrance-register", async (req, res) => {
  const { name, score, status } = req.body;

  // Validate input
  if (!name || score === undefined || !status) {
    return res.status(400).json({ msg: "Please provide all required fields." });
  }

  try {
    await db.query("INSERT INTO entrance_results (name, score, status) VALUES (?, ?, ?)", [
      name,
      score,
      status,
    ]);

    res.json({ msg: "Candidate registered successfully!" });
  } catch (err) {
    console.error("Error registering candidate:", err);
    res.status(500).json({ msg: "Error registering candidate. Please try again later." });
  }
});
