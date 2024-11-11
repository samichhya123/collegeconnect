import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import the initialized auth from your config file
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCredential,
  FacebookAuthProvider,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadFacebookSDK();
  }, []);

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.username.trim())
      tempErrors.username = "Username is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long.";
    }
    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = "Confirm password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      tempErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (validate()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log("User created successfully:", userCredential.user);
        await sendEmailVerification(userCredential.user);
        console.log("Verification email sent.");

        navigate("/login");
      } catch (error) {
        setServerError(error.message);
        console.error("Error creating user:", error);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In Successful", result.user);
      navigate("/EntranceExamForm");
    } catch (error) {
      console.error("Google Sign-In Error", error);
    }
  };

  const handleFacebookSignIn = () => {
    window.FB.login((response) => {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;
        const credential = FacebookAuthProvider.credential(accessToken);

        signInWithCredential(auth, credential)
          .then((result) => {
            console.log("Facebook Sign-In Successful", result.user);
            navigate("/EntranceExamForm");
          })
          .catch((error) => {
            console.error("Facebook Sign-In Error", error);
          });
      } else {
        console.error("User cancelled login or did not fully authorize.");
      }
    }, { scope: 'email' });
  };

  const loadFacebookSDK = () => {
    if (window.FB) return;
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '843057597605768',
        xfbml: true,
        version: 'v20.0',
      });
      window.FB.AppEvents.logPageView();
    };

    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    document.body.appendChild(script);
  };

  return (
    <div className="wrapper-register">
      <div className="form-wrapper-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder=""
              aria-label="Enter your username"
            />
            <label htmlFor="username">Username</label>
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=""
              aria-label="Enter your email"
            />
            <label htmlFor="email">Email</label>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=""
              aria-label="Enter your password"
            />
            <label htmlFor="password">Password</label>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder=""
              aria-label="Confirm your password"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="register-btn1">
            Register
          </button>
          {serverError && <p className="server-error">{serverError}</p>}

          <div className="signIn-link">
            <p>
              Already have an account?{" "}
              <Link to="/Login" className="signInBtn-link">Login</Link>
            </p>
          </div>
          <p>Or</p>
          <div className="alternative-login">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="google-signin-btn"
            >
              <img src="https://img.icons8.com/color/google-logo" alt="Google" />{" "}
              Sign in with Google
            </button>
            <button
              type="button"
              onClick={handleFacebookSignIn}
              className="google-signin-btn"
            >
              <img src="https://img.icons8.com/color/facebook" alt="Facebook" />{" "}
              Sign in with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
