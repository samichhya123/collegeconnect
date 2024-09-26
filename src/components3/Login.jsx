import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const db = getFirestore();

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    let email = emailOrUsername;

    try {
      if (!isEmail(emailOrUsername)) {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", emailOrUsername));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          throw new Error("No user found with this username.");
        }
        email = querySnapshot.docs[0].data().email;
      }
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);

      navigate("/EntranceExamForm");
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              name="username"
              required
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              placeholder=""
              aria-label="Enter your username or email"
            />
            <label htmlFor="username">Username/Email</label>
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button type="submit" className="login-btn1" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
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
