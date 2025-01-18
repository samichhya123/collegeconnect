import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // List of allowed admin emails
  const allowedAdmins = [
    "shresthasamichhya14@gmail.com",
    "pratigyabhattarai20@gmail.com",
    "sejarhang12@gmail.com",
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // Check if the email is an allowed admin
      if (allowedAdmins.includes(email)) {
        // Save the admin email in localStorage to use in the dashboard
        localStorage.setItem("adminEmail", email);

        // Success toast notification
        toast.success(`Logged in as: ${email}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => navigate("/dashboard"), // Navigate to the admin dashboard
        });
      } else {
        // Show error if the email is not an allowed admin
        toast.error("Not an authorized admin email", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      const errorMsg = err.response
        ? err.response.data.message || "Login failed. Please try again."
        : "Login failed. Please try again.";

      // Error toast notification
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setError(errorMsg);
      console.error(errorMsg);
    }
  };

  return (
    <div className="wrapper">
      <ToastContainer />
      <div className="form-wrapper-container">
        <h2>ADMIN LOGIN</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn1">
            Login
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
