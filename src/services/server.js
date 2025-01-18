const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();
const KHALTI_SECRET_KEY = process.env.KHALTI_SECRET_KEY;

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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

(async () => {
  try {
    const connection = await db.getConnection();
    console.log("Connected to the MySQL database.");
    connection.release();
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1);
  }
})();
const uploadsPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath);
}
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

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  try {
    const [
      existingUser,
    ] = await db.execute(`SELECT * FROM users WHERE email = ?`, [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ msg: "Email already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
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

  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required." });
  }

  try {
    const [results] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (results.length === 0) {
      return res.status(401).json({ msg: "Unauthorized: User not found." });
    }
    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ msg: "Unauthorized: Incorrect password." });
    }

    const token = jwt.sign({ userId: user.id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Error handling request:", err);
    res.status(500).json({ msg: "Internal server error." });
  }
});
// Storage for multiple files
const storageMultiple = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const uploadMultiple = multer({ storage: storageMultiple });

// Static file serving for uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storageSingle = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadSingle = multer({ storage: storageSingle });
// Add College API
app.post("/api/add-college", uploadSingle.single("image"), async (req, res) => {
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
      [name, address, valley, latitude || null, longitude || null, image_url]
    );

    res.status(200).json({ message: "College added successfully!" });
  } catch (error) {
    console.error("Error adding college:", error.message);
    res
      .status(500)
      .json({ message: "Error adding college", error: error.message });
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

// Get Statistics APIs
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
      "SELECT COUNT(*) AS count FROM admin_courses"
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
      "SELECT valley, COUNT(*) AS frequency FROM admin_colleges GROUP BY valley"
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching valley frequency:", err.message);
    res.status(500).json({ message: "Error fetching valley frequency" });
  }
});

// Entrance Exam API
app.post(
  "/api/add-entrance-exam",
  uploadMultiple.fields([
    { name: "photo", maxCount: 1 },
    { name: "documents_SLC", maxCount: 1 },
    { name: "documents_Character", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        fullName,
        email,
        contact,
        college,
        program,
        documentsUploaded,
        paymentStatus,
        admitCardStatus,
        paymentDate,
        applicationDate,
      } = req.body;

      const photo = req.files["photo"]
        ? `uploads/${req.files["photo"][0].filename}`
        : null;
      const documents_SLC = req.files["documents_SLC"]
        ? `uploads/${req.files["documents_SLC"][0].filename}`
        : null;
      const documents_Character = req.files["documents_Character"]
        ? `uploads/${req.files["documents_Character"][0].filename}`
        : null;

      if (!fullName || !email || !contact || !college || !program) {
        return res.status(400).json({
          message:
            "Full name, email, contact, college, and program are required",
        });
      }

      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      if (!/^\d{10}$/.test(contact)) {
        return res.status(400).json({ message: "Invalid contact number" });
      }

      // Insert form data into the database
      await db.query(
        "INSERT INTO entrance_exam_form (profile_image_path, full_name, email, contact_number, college_name, program_name, documents_uploaded, payment_status, admit_card_status, payment_date, application_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          photo,
          fullName,
          email,
          contact,
          college,
          program,
          documents_SLC ? `${documents_SLC}, ${documents_Character}` : null,
          documentsUploaded || null,
          paymentStatus || "Pending",
          admitCardStatus || "Not Issued",
          paymentDate || null,
          applicationDate || new Date().toISOString(),
        ]
      );

      res
        .status(200)
        .json({ message: "Entrance exam form submitted successfully" });
    } catch (err) {
      console.error("Error adding entrance exam form:", err);
      res
        .status(500)
        .json({ message: "Error submitting form", error: err.message });
    }
  }
);

// Update Payment Status
app.post("/api/update-payment-status", (req, res) => {
  const { id, status } = req.body;

  if (!id || !status) {
    return res.status(400).json({ error: "ID and status are required" });
  }

  db.query(
    "UPDATE entrance_exam_form SET payment_status = ?, payment_date = NOW() WHERE id = ?",
    [status, id],
    (err) => {
      if (err) {
        console.error("Error updating payment status:", err);
        res.status(500).json({ error: "Failed to update payment status." });
      } else {
        res
          .status(200)
          .json({ message: "Payment status updated successfully." });
      }
    }
  );
});

// Generate Admit Card
app.post("/api/generate-admit-card", (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  db.query(
    "UPDATE entrance_exam_form SET admit_card_status = 'Generated' WHERE id = ?",
    [id],
    (err) => {
      if (err) {
        console.error("Error generating admit card:", err);
        res.status(500).json({ error: "Failed to generate admit card." });
      } else {
        res.status(200).json({ message: "Admit card generated successfully." });
      }
    }
  );
});

// Khalti Payment API
app.post("/api/khalti", async (req, res) => {
  try {
    const headers = {
      Authorization: `Key ${KHALTI_SECRET_KEY}`,
      "Content-Type": "application/json",
    };
    const { fullName, amount } = req.body;

    if (!fullName || !amount) {
      return res
        .status(400)
        .json({ message: "Full name and amount are required" });
    }

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
      { headers }
    );

    if (response.data) {
      res.json({
        message: "Khalti initiation successful",
        payment_method: "khalti",
        data: response.data,
      });
    } else {
      res.status(400).json({
        message: "Khalti initiation failed",
        payment_method: "khalti",
      });
    }
  } catch (err) {
    console.error("Khalti API error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// Start the Server
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`Port ${port} is already in use. Trying another port...`);
    app.listen(port + 1, () => {
      console.log(`Server running on http://localhost:${port + 1}`);
    });
  }
});
