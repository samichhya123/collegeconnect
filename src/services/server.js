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

// Database Connection
let db;
const connectToDatabase = async () => {
  try {
    db = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    console.log("Successfully connected to the MySQL database.");
  } catch (err) {
    console.error("Error connecting to the MySQL database:", err.message);
    process.exit(1);
  }
};
connectToDatabase();

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the API server!");
});

// Multer setup for file uploads
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

// Login API
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const user = users[0];

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error("Error in /login:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get Colleges API
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
// Get Courses API
app.get("/api/courses", async (req, res) => {
  try {
    const [courses] = await db.query(
      "SELECT id, course_name, university, duration_years FROM admin_courses"
    );
    res.json(courses);
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).send("Error fetching courses");
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

app.get("/api/colleges/count", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT COUNT(*) AS count FROM admin_colleges"
    );
    res.json({ count: rows[0].count });
  } catch (err) {
    console.error("Error fetching college count:", err.message);
    res.status(500).json({ message: "Error fetching college count" });
  }
});
app.get("/api/courses/count", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT COUNT(*) AS count FROM admin_coursess"
    );
    res.json({ count: rows[0].count });
  } catch (err) {
    console.error("Error fetching course count:", err.message);
    res.status(500).json({ message: "Error fetching course count" });
  }
});

app.get("/api/valley-frequency", async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT valley, COUNT(*) AS frequency FROM admin_colleges GROUP BY valley`
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching valley frequency:", err.message);
    res.status(500).json({ message: "Error fetching valley frequency" });
  }
});

// Import and use additional routes
app.use("/api/admin", collegeAdminRoutes);
app.use("/api/colleges", collegeRoutes);
app.use("/api/admin", courseAdminRoutes);
app.use("/api/course", courseRoutes);
// API Route to Fetch Distances
app.post("/api/collegedistance", (req, res) => {
  const { userLatitude, userLongitude } = req.body;

  if (!userLatitude || !userLongitude) {
    return res.status(400).send({ error: "User location is required" });
  }

  // Query to Fetch Colleges
  const query = "SELECT id, name, latitude, longitude FROM admin_colleges";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).send({ error: "Database query failed" });
    }

    // Calculate Distance for Each College
    const collegesWithDistance = results.map((college) => {
      const distance = calculateDistance(
        userLatitude,
        userLongitude,
        college.latitude,
        college.longitude
      );
      return {
        id: college.id,
        name: college.name,
        latitude: college.latitude,
        longitude: college.longitude,
        distance: distance.toFixed(2), // Round to 2 decimal places
      };
    });

    // Sort Colleges by Distance
    collegesWithDistance.sort((a, b) => a.distance - b.distance);

    res.status(200).send(collegesWithDistance);
  });
});
// Default 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the Server
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Handle "Port in Use" Error
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
