import React, { useState } from "react";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./register.css";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle regular registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
      });
      setSuccess(response.data.msg); // Show success message
    } catch (err) {
      const errorMsg = err.response
        ? err.response.data.msg
        : "Registration failed. Please try again.";
      setError(errorMsg);
      console.error(errorMsg);
    }
  };

  // Handle Google login
  const handleGoogleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    console.log("Google User Info:", decoded);
    axios
      .post("http://localhost:5000/google-login", {
        token: response.credential,
        username: decoded.name,
        email: decoded.email,
      })
      .then((res) => setSuccess("Google login successful"))
      .catch((err) => setError("Google login failed"));
  };

  const handleGoogleFailure = () => {
    setError("Google login failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId="896677057897-qkdr7sf04eeni5k4atutjebvsomf4kv5.apps.googleusercontent.com">
      <div className="wrapper-register">
        <div className="form-wrapper-container">
          <form className="register-form" onSubmit={handleRegister}>
            <h2>Register</h2>
            <div className="input-group">
  <input
    type="email"
    id="email"
    placeholder=" "
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    autoComplete="email" // Add this
    required
  />
  <label htmlFor="email">Email</label>
</div>

<div className="input-group">
  <input
    type="text"
    id="username"
    placeholder=" "
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    autoComplete="username" // Add this
    required
  />
  <label htmlFor="username">Username</label>
</div>

<div className="input-group">
  <input
    type="password"
    id="password"
    placeholder=" "
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    autoComplete="new-password" // Add this
    required
  />
  <label htmlFor="password">Password</label>
</div>

            <button type="submit" className="register-btn1">
              Register
            </button>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <div className="signInBtn-link">
            <p>
              Already have an account? <a href="/login" className="register-here">Sign in here</a>
            </p>
          </div>

          <div className="alternative-login">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              theme="outline"
              size="large"
              text="signin_with"
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Register;
