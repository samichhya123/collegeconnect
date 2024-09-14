import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="form-wrapper-container">
        <form action="" className="login-form">
          <h2>Login</h2>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              name="username"
              required
              placeholder=""
              aria-label="Enter your username"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              name="password"
              required
              placeholder=""
              aria-label="Enter your password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="remember">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              Remember Me!
            </label>
          </div>
          <button type="submit" className="login-btn1">
            Login
          </button>
          <div className="signUp-link">
            <p>
              Don't have an account?{" "}
              <a href="/register" className="signUpBtn-link">
                Create one
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
