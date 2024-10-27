const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000; // or any port you are using

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "collegeconnect", // The name of your MySQL database
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// Registration route
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  const checkUserSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkUserSql, [email], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Insert the new user into the database
    const sql =
      'INSERT INTO users (username, email, password, role, created_at) VALUES (?, ?, ?, "user", NOW())';
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) throw err;

      res.json({ msg: "User registered successfully" });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// Existing code above...
app.get("/", (req, res) => {
  res.send("Welcome to the College Connect API");
});
// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check if the user exists
  const checkUserSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkUserSql, [email], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.status(400).json({ msg: "User not found" });
    }

    // Compare the password with the hashed password in the database
    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // If the login is successful, return user details (excluding the password)
    res.json({
      msg: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`Port ${port} is already in use. Trying another port...`);
    app.listen(5001, () => {
      console.log(`Server running on http://localhost:5001`);
    });
  }
});
