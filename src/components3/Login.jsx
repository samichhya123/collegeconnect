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

  // Handle login response structure
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // Check if response structure matches
      const { token, user } = response.data;
      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => navigate("/nearby-colleges"),
        });
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (err) {
      const errorMsg = err.response
        ? err.response.data.msg || "Login failed. Please try again."
        : "Login failed. Please try again.";

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
        <h2>LOGIN</h2>
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

        <div className="signUp-link">
          <p>
            Don't have an account? <a href="/register">Sign up here</a>
          </p>
          <button
            className="admin-login-btn"
            onClick={() => navigate("/AdminSignIn")}
          >
            Sign in as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
