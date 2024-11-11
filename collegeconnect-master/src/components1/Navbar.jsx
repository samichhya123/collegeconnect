import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/CC.jpg";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const Login = () => {
    navigate("/Login");
  };

  const Register = () => {
    navigate("/Register");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-container">
            <a href="/">
              <img src={logo} alt="logo" className="main-logo" />
            </a>
          </div>
          <div className="search-responsive">
            <Search />
          </div>
          <div className={`nav-links-container ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a className="nav-link-active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="/Colleges">
                  Colleges
                </a>
              </li>
              <li>
                <a className="nav-link" href="/Courses">
                  Courses
                </a>
              </li>
              <li>
                <a className="nav-link" href="/Blogs">
                  Blogs
                </a>
              </li>
              <li>
                <a className="nav-link" href="/About Us">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="search-desktop">
            <Search />
          </div>
        </div>
        <div className="user-menu">
          <div className="user-button">
            <button onClick={Register} className="register-btn">
              Register
            </button>
            <button onClick={Login} className="login-btn">
              Login
            </button>
          </div>
          <div className="menu-bar" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
