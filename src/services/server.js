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

// const { processInput, matchRules } = require("./nlp-rules");

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
app.post("/api/collegedistance", async (req, res) => {
  const { userLatitude, userLongitude } = req.body;
  console.log(req.body);
  if (!userLatitude || !userLongitude) {
    return res.status(400).send({ error: "User location is required" });
  }
  const query = "SELECT id, name, latitude, longitude FROM admin_colleges";
  try {
    const results = await db.query(query);

    const collegeResult = [];
    let resultss = results[0];
    for (let i = 0; i < resultss.length; i++) {
      const distance = haversine(
        userLatitude,
        userLongitude,
        resultss[i].latitude,
        resultss[i].longitude
      );
      collegeResult.push({ collegeInfo: resultss[i], distance: distance });
    }
    collegeResult.sort((a, b) => a.distance - b.distance);
    console.log(collegeResult);
    res.status(200).send(collegeResult);
  } catch (err) {
    console.error("Database query error:", err);
    return res.status(500).send({ error: "Database query failed" });
  }
});
// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the College Connect API" });
});
app.post("/register", async (req, res) => {
  const { username, email, password, role = "user" } = req.body;

  // Check if all required fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  try {
    // Check if email already exists in the database
    const [
      existingUser,
    ] = await db.execute(`SELECT * FROM users WHERE email = ?`, [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ msg: "Email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database using prepared statement
    const [
      result,
    ] = await db.execute(
      `INSERT INTO users (email, username, password, role) VALUES (?, ?, ?, ?)`,
      [email, username, hashedPassword, role]
    );

    res.status(201).json({ msg: "User registered successfully!" });
  } catch (err) {
    console.error("Error handling request:", err);
    res.status(500).json({ msg: "Internal server error." });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check if both email and password are provided
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required." });
  }

  try {
    // Use db.execute to query the database
    const [results] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    // Check if user exists
    if (results.length === 0) {
      return res.status(401).json({ msg: "Unauthorized: User not found." });
    }

    const user = results[0];

    // Compare the hashed password with the provided password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ msg: "Unauthorized: Incorrect password." });
    }

    // Generate a token
    const token = jwt.sign({ userId: user.id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    // Successfully authenticated, send token and user info
    res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        // other user details
      },
    });
  } catch (err) {
    console.error("Error handling request:", err);
    res.status(500).json({ msg: "Internal server error." });
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
    const image_url = req.file ? `public/${req.file.filename}` : null;

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

// API endpoint to handle form submission
app.post(
  "/api/entrance-exam",
  upload.fields([
    { name: "photo" },
    { name: "documents_SLC" },
    { name: "documents_Character" },
  ]),
  (req, res) => {
    const { fullName, email, contact, college, program } = req.body;
    const photo = req.files["photo"] ? req.files["photo"][0].path : null;
    const documents = {
      SLC: req.files["documents_SLC"]
        ? req.files["documents_SLC"][0].path
        : null,
      Character: req.files["documents_Character"]
        ? req.files["documents_Character"][0].path
        : null,
    };

    // Insert form data into the entrance_exam_form table
    const query = `
    INSERT INTO entrance_exam_form (full_name, email, contact_number, college_name, program_name, documents_uploaded)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

    db.query(
      query,
      [
        fullName,
        email,
        contact,
        college,
        program,
        Object.keys(documents).length,
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting form data:", err);
          return res.status(500).json({ message: "Error inserting form data" });
        }

        // Update the entrance_exam_form record with file paths for documents
        const formId = result.insertId;
        const updateQuery = `
        UPDATE entrance_exam_form
        SET photo = ?, documents_SLC = ?, documents_Character = ?
        WHERE id = ?
      `;

        db.query(
          updateQuery,
          [photo, documents.SLC, documents.Character, formId],
          (err) => {
            if (err) {
              console.error("Error updating form data with files:", err);
              return res
                .status(500)
                .json({ message: "Error updating form data with files" });
            }
            res.status(200).json({ message: "Form submitted successfully" });
          }
        );
      }
    );
  }
);

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
      return_url: "http://localhost:5001/payment-status",
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
app.get("/payment-status", async (req, res) => {
  const { payment_status, purchase_order_id } = req.query;

  // Validate the payment status from Khalti
  if (payment_status === "Successful") {
    res.send("<h1>Payment Successful!</h1>");
  } else {
    res.send("<h1>Payment Failed!</h1>");
  }
});
