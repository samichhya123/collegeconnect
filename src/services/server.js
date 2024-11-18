const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const { processInput, matchRules } = require("./nlp-rules");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

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

  try {
    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ error: "Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (username, email, password, role, created_at) VALUES (?, ?, ?, ?, NOW())",
      [username, email, hashedPassword, role]
    );

    res.json({ msg: "User registered successfully!" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error, please try again later." });
  }
});

// User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const [results] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (results.length === 0) {
      return res.status(400).json({ error: "User not found." });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    res.json({
      msg: "Login successful!",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
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
