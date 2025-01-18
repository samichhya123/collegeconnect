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
<<<<<<< HEAD
    <>
      <div className="w-full min-h-screen bg-[#E8F8F5] flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-[#a7e8dc] flex flex-col md:flex-row items-center mx-auto rounded-lg overflow-hidden">
          <div className="flex justify-center items-center w-full md:w-1/2 h-full p-4">
            <img
              src="https://i.pinimg.com/564x/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.jpg"
              className="w-auto h-auto max-w-full max-h-full rounded-lg"
              alt="login"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 bg-[#a7e8dc] rounded-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] text-center">
              Admin Login Portal
            </h2>
            <form className="space-y-6 mt-8 flex flex-col">
              <div>
                <label className="block text-[#2C3E50] font-medium mb-2">
                  Username*
                </label>
                <input
                  type="text"
                  className="w-[400px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-[#2C3E50] font-medium mb-2">
                  Password*
                </label>
                <input
                  type="password"
                  className="w-[400px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="w-4 h-4 text-teal-500 focus:ring-teal-400 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-[#2C3E50]">
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-[#E67E22] hover:underline text-sm"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#2C3E50] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"onClick={() => navigate("/admin")}
                >
                  Login to my account
                </button>
              </div>
            </form>
=======
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
>>>>>>> 2618431dd9ec4322b9827b176a4af62159fe0f72
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
