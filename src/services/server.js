const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const fs = require("fs");
const KHALTI_SECRET_KEY = process.env.KHALTI_SECRET_KEY;
const crypto = require("crypto");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
console.log(process.env.JWT_SECRET);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
const admins = [
  {
    email: "shresthasamichhya14@gmail.com",
    first_name: "Samichhya",
    last_name: "Shrestha",
  },
  {
    email: "pratigyabhattarai20@gmail.com",
    first_name: "Pratigya",
    last_name: "Bhattarai",
  },
  {
    email: "sejarhang12@gmail.com",
    first_name: "Sejar",
    last_name: "Hang",
  },
  {
    email: "pragyann.kc@gmail.com",
    first_name: "Pragyan",
    last_name: "Kc",
  },
];
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
  return parseFloat(distance.toFixed(2)); // Round off to 2 decimal places
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

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required." });
  }

  try {
    // Fetch user by email
    const [results] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    // Check if user exists
    if (results.length === 0) {
      return res.status(401).json({ msg: "Unauthorized: User not found." });
    }

    const user = results[0];
    console.log(process.env.JWT_SECRET);

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ msg: "Unauthorized: Incorrect password." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'uiwfoebnfergvjebgvergeijbg', {
      expiresIn: "1h",
    });

    // Return token and user info
    res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Error handling login request:", err);
    res.status(500).json({ msg: "Internal server error." });
  }
});

// Middleware to verify token and set req.user
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized: No token provided." });
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.status(403).json({ msg: "Forbidden: Invalid token." });
    }

    req.user = user; // Contains userId from the token
    next();
  });
}

// Get logged-in user's details
app.get("/api/users/me", authenticateToken, async (req, res) => {
  try {
    // Fetch username based on userId from the token
    const [rows] = await db.execute("SELECT username FROM users WHERE id = ?", [
      req.user.userId,
    ]);

    // Check if user exists
    if (rows.length === 0) {
      return res.status(404).json({ msg: "User not found." });
    }

    // Return username
    res.json({ username: rows[0].username });
  } catch (err) {
    console.error("Error fetching user details:", err);
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

//Setup NodeMailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use the email service you're using
  auth: {
    user: 'pragyan1516@gmail.com', // Your email address
    pass: '', // Your email password or app-specific password
  },
});

app.post('/send-email', uploadSingle.single('attachment'), (req, res) => {
  const { to, subject, body } = req.body;
  const attachment = req.file;

  // Create email options
  const mailOptions = {
    from: 'pragyan1516@gmail.com', // Your email address
    to: to, // Recipient's email
    subject: subject, // Email subject
    text: body, // Email body (can be plain text or HTML)
    attachments: attachment
      ? [
          {
            filename: attachment.originalname,
            path: attachment.path,
          },
        ]
      : [],
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

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
app.get("/api/admincolleges", async (req, res) => {
  try {
    const [colleges] = await db.query(
      "SELECT id,name, address, valley, latitude, longitude, image_url FROM admin_colleges"
    );
    res.json(colleges);
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).send("Error fetching colleges");
  }
});
// Update College API
app.put(
  "/api/admincolleges/:id",
  uploadSingle.single("image"),
  async (req, res) => {
    try {
      const { id } = req.params; // College ID to update
      const { name, address, valley, latitude, longitude } = req.body;
      const image_url = req.file ? `public/${req.file.filename}` : null;

      // Check if the college exists
      const [
        existingCollege,
      ] = await db.query("SELECT * FROM admin_colleges WHERE id = ?", [id]);

      if (!existingCollege || existingCollege.length === 0) {
        return res.status(404).json({ message: "College not found" });
      }

      // Update the college details
      await db.query(
        "UPDATE admin_colleges SET name = ?, address = ?, valley = ?, latitude = ?, longitude = ?, image_url = COALESCE(?, image_url) WHERE id = ?",
        [
          name,
          address,
          valley,
          latitude || null,
          longitude || null,
          image_url,
          id,
        ]
      );

      res.status(200).json({ message: "College updated successfully!" });
    } catch (error) {
      console.error("Error updating college:", error.message);
      res
        .status(500)
        .json({ message: "Error updating college", error: error.message });
    }
  }
);

// Delete College API
app.delete("/api/admincolleges/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query("DELETE FROM admin_colleges WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "College not found" });
    }
    res.status(200).json({ message: "College deleted successfully!" });
  } catch (error) {
    console.error("Error deleting college:", error.message);
    res
      .status(500)
      .json({ message: "Error deleting college", error: error.message });
  }
});
// Add Course API
app.post("/api/courses", async (req, res) => {
  try {
    const { course_name, university, duration_years } = req.body;

    // Validate input
    if (!course_name || !university || !duration_years) {
      return res.status(400).json({
        message: "Course name, university, and duration are required",
      });
    }

    if (course_name.length > 100) {
      return res.status(400).json({
        message: "Course name cannot exceed 100 characters",
      });
    }

    if (university.length > 100) {
      return res.status(400).json({
        message: "University name cannot exceed 100 characters",
      });
    }

    if (duration_years <= 0 || duration_years > 10) {
      return res.status(400).json({
        message: "Duration must be between 1 and 10 years",
      });
    }

    // Execute query
    await db.query(
      "INSERT INTO courses (course_name, university, duration_years) VALUES (?, ?, ?)",
      [course_name, university, duration_years]
    );

    res.status(200).json({ message: "Course added successfully!" });
  } catch (error) {
    console.error("Error adding course:", error.message);
    res
      .status(500)
      .json({ message: "Error adding course", error: error.message });
  }
});

// Get Courses API
app.get("/api/courses", async (req, res) => {
  try {
    // Fetch courses from the database
    const [courses] = await db.query(
      "SELECT id, course_name, university, duration_years FROM courses"
    );

    if (courses && courses.length > 0) {
      res.json({ message: "Courses fetched successfully", data: courses });
    } else {
      res.status(404).send({ message: "No courses found" });
    }
  } catch (error) {
    console.error("Database error:", error.message);
    res
      .status(500)
      .send({ message: "Error fetching courses", error: error.message });
  }
});

// Update Course API
app.put("/api/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { course_name, university, duration_years } = req.body;

    // Validate required fields
    if (!course_name || !university || typeof duration_years !== "number") {
      return res
        .status(400)
        .json({
          message:
            "All fields (course_name, university, duration_years) are required.",
        });
    }

    // Check if the course exists
    const [
      existingCourses,
    ] = await db.query("SELECT * FROM courses WHERE id = ?", [id]);

    if (!existingCourses || existingCourses.length === 0) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Update the course in the database
    const updateQuery = `
      UPDATE courses 
      SET course_name = ?, university = ?, duration_years = ? 
      WHERE id = ?`;
    await db.query(updateQuery, [course_name, university, duration_years, id]);

    res.status(200).json({ message: "Course updated successfully!" });
  } catch (error) {
    console.error("Error updating course:", error.message);
    res.status(500).json({
      message: "Error updating course.",
      error: error.message,
    });
  }
});

// Delete Course API
app.delete("/api/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query("DELETE FROM courses WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully!" });
  } catch (error) {
    console.error("Error deleting course:", error.message);
    res
      .status(500)
      .json({ message: "Error deleting course", error: error.message });
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
    const [rows] = await db.query("SELECT COUNT(*) AS count FROM courses");
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

app.get("/api/admin/get-admin", (req, res) => {
  const { email } = req.query;

  const admin = admins.find((admin) => admin.email === email);

  if (admin) {
    res.status(200).json({
      first_name: admin.first_name,
      last_name: admin.last_name,
    });
  } else {
    res.status(404).json({ message: "Admin not found" });
  }
});

// Generate Admit Card
app.get("/api/admit-card", (req, res) => {
  const admitCardData = {
      "full_name": "John Doe",
      "email": "john.doe@example.com",
      "contact_number": "123-456-7890",
      "college_name": "Kathford College",
      "program_name": "BBS",
      "profile_image_path": "data:image/jpeg;base64,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"
  };
  res.json(admitCardData);
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
      console.log(req.files);
      const { fullName, email, contact, address, college, program ,exam_date,time_slot} = req.body;

      // File handling
      const photo = req.files["photo"]
        ? `uploads/${req.files["photo"][0].filename}`
        : null;

      // Count the number of uploaded documents
      const documentsUploaded = [];
      let documentsUploadedln = 0;
      if (req.files["documents_SLC"]) {
        console.log("SLC", req.files["documents_SLC"]);
        documentsUploadedln++;
        documentsUploaded.push(
          `uploads/${req.files["documents_SLC"][0].filename}`
        );
      }
      if (req.files["documents_Character"]) {
        console.log("Character", req.files["documents_Character"]);
        documentsUploadedln++;
        documentsUploaded.push(
          `uploads/${req.files["documents_Character"][0].filename}`
        );
      }

      // Input validation
      if (!fullName || !email || !contact || !address || !college || !program) {
        return res.status(400).json({
          message:
            "Full name, email, contact, address, college, and program are required",
        });
      }

      // Email validation (simple regex)
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      // Contact number validation (10-digit number)
      if (!/^(98|97|96)\d{8}$/.test(contact)) {
        return res.status(400).json({
          message: "Invalid contact number. It should be a valid 10-digit number.",
        });
      }

      // Insert form data into the database
      const query = `
        INSERT INTO entrance_exam_form (
          profile_image_path, full_name, email, address, contact_number, 
          college_name, program_name,exam_date,time_slot, documents_uploaded, payment_status, 
          admit_card_status, payment_date, application_date
        ) VALUES (?, ?, ?, ?, ?, ?,?,?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        photo,
        fullName,
        email,
        address,
        contact,
        college,
        program,
        exam_date,
        time_slot,
        JSON.stringify(documentsUploadedln), // Uploaded documents array
        "Pending", // Default: Pending payment status
        "Not Issued", // Default: Admit card status
        null, // Default: No payment date
        new Date().toISOString(), // Current date as application_date
      ];

      console.log("Documents Length:",documentsUploadedln);

      await db.query(query, values);

      // Success response
      res.status(200).json({ message: "Entrance exam form submitted successfully" });
    } catch (err) {
      console.error("Error adding entrance exam form:", err);
      res.status(500).json({
        message: "Error submitting form",
        error: err.message,
      });
    }
  }
);


// Entrance Exam API - Get
app.get("/api/get-entrance-exam", async (req, res) => {
  try {
    // by ID, e.g., /api/get-entrance-exam?id=1
    const formId = req.query.id; 
    if (formId && isNaN(formId)) {
      return res.status(400).json({ message: "Invalid form ID" });
    }

    let query = "SELECT id, full_name, email,address, contact_number, college_name, program_name, payment_status, admit_card_status FROM entrance_exam_form";
    let values = [];

    if (formId) {
      query += " WHERE id = ?";
      values.push(formId);
    }

    const [rows] = await db.query(query, values);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No form data found" });
    }

    res.status(200).json({ data: rows });
  } catch (err) {
    console.error("Error fetching entrance exam form:", err);
    res.status(500).json({
      message: "Error fetching form data",
      error: err.message,
    });
  }
});

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

    // Basic validation
    if (!fullName || !amount) {
      return res
        .status(400)
        .json({ message: "Full name and amount are required" });
    }

    // Prepare data for Khalti API request
    const formData = {
      return_url: "https://test-pay.khalti.com/wallet", // Update return URL
      website_url: "http://localhost:5000", // Website URL
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
      // Send payment initiation data back to the frontend
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

const questions = [
  { id: 1, question: "What is the full form of CPU?", options: ["Central Process Unit", "Central Processing Unit", "Control Processing Unit"], correct: 2 },
  { id: 2, question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array"], correct: 2 },
  { id: 3, question: "What does RAM stand for?", options: ["Random Access Memory", "Read-Only Memory", "Run Access Memory"], correct: 1 },
  { id: 4, question: "Which of the following is a NoSQL database?", options: ["MySQL", "MongoDB", "PostgreSQL"], correct: 2 },
  { id: 5, question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "Hyperlink Transfer Protocol"], correct: 1 },
  { id: 6, question: "Which of these is a frontend framework?", options: ["Node.js", "React.js", "Django"], correct: 2 },
  { id: 7, question: "Which protocol is used for secure data transfer?", options: ["HTTP", "FTP", "HTTPS"], correct: 3 },
  { id: 8, question: "What does AI stand for?", options: ["Artificial Intelligence", "Automatic Interface", "Automated Interaction"], correct: 1 },
  { id: 9, question: "What is the full form of URL?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link"], correct: 1 },
  { id: 10, question: "What does 'npm' stand for?", options: ["Node Package Manager", "Network Package Manager", "Node Programming Manager"], correct: 1 },
];

app.get("/questions", (req, res) => {
  res.json(questions);
});

app.post("/evaluate", (req, res) => {
  const { answers } = req.body;
  console.log (answers);
  let score = 0;

  questions.forEach((q) => {
    if (parseInt(answers[q.id], 10) === q.correct) {
      score++;
    }
  })

  res.json({ score, total: questions.length });
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
