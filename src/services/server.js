const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const axios = require("axios");
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
  return distance;
}

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the College Connect API" });
});
app.get("/api/nearby-colleges", async (req, res) => {
  const { latitude, longitude, radius = 5 } = req.query;

  if (!latitude || !longitude || !radius) {
    return res
      .status(400)
      .json({ error: "Latitude, longitude, and radius are required." });
  }

  try {
    // Query to fetch all colleges
    const [colleges] = await db.query(
      "SELECT id, name, latitude, longitude, address FROM colleges"
    );

    // Calculate distances and filter colleges within the radius
    const nearbyColleges = colleges.filter((college) => {
      const distance = haversine(
        parseFloat(latitude),
        parseFloat(longitude),
        parseFloat(college.latitude),
        parseFloat(college.longitude)
      );
      return distance <= parseFloat(radius);
    });

    // Attach distance information and send the result
    const result = nearbyColleges.map((college) => {
      const distance = haversine(
        parseFloat(latitude),
        parseFloat(longitude),
        parseFloat(college.latitude),
        parseFloat(college.longitude)
      );
      return { ...college, distance };
    });

    res.json({ msg: "Success", data: results });
  } catch (err) {
    console.error("Error fetching nearby colleges:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
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
app.post("/create-payment", (req, res) => {
  // Extract data from the request body
  const { fullName, email, contact, paymentMethod } = req.body;

  // Simulate a payment process based on the payment method
  if (!fullName || !email || !contact || !paymentMethod) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // You can later integrate eSewa or Khalti API here
  if (paymentMethod === "esewa" || paymentMethod === "khalti") {
    // Simulate a successful payment response
    return res.status(200).json({
      message: "Payment successful",
      paymentDetails: {
        fullName,
        email,
        contact,
        paymentMethod,
        amount: "Nrs: 100", // Simulating the payment amount
      },
    });
  }

  // If the payment method is not recognized
  return res.status(400).json({ message: "Invalid payment method" });
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
      return_url: "http://localhost:5000/Colleges",
      website_url: "http://localhost:5000",
      amount: amount,
      purchase_order_id: 1,
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
