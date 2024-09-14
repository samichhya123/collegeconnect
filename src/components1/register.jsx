import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./register.css"; 

const Register = () => {
  return (
    <div className="wrapper-register">
      <div className="form-wrapper-container">
        <form action="" className="register-form">
          <h2>Register</h2>
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
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              name="email"
              required
              placeholder=""
              aria-label="Enter your email"
            />
            <label htmlFor="email">Email</label>
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
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder=""
              aria-label="Confirm your password"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          <button type="submit" className="register-btn1">Register</button>
          <div className="signIn-link">
            <p>
              Already have an account?{" "}
              <a href="/Login" className="signInBtn-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
