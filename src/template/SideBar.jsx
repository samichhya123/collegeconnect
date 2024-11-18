import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Dashboard.css";
import logo from "../images/CC.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SideBar = () => {
  const location = useLocation(); // To get the current route
  const [activeMenu, setActiveMenu] = useState("dashboard");

  useEffect(() => {
    // Set the active menu based on the current route
    if (location.pathname.includes("payment")) {
      setActiveMenu("payment");
    } else if (location.pathname.includes("dashboard")) {
      setActiveMenu("dashboard");
    } else if (location.pathname.includes("registration")) {
      setActiveMenu("registration");
    } else if (location.pathname.includes("entrance")) {
      setActiveMenu("entrance");
    } else if (location.pathname.includes("result")) {
      setActiveMenu("result");
    }
  }, [location]); 

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="My Logo" className="logo-image" />
      </div>
      <ul className="sidebar-menu">
        <li
          className={`sidebar-item text ${activeMenu === "dashboard" ? "active" : ""}`}
        >
          <Link to="/dashboard">
            <i className="fas fa-chart-bar menu-icon"></i> Dashboard
          </Link>
        </li>
        <li
          className={`sidebar-item text ${activeMenu === "registration" ? "active" : ""}`}
        >
          <Link to="/registration">
            <i className="fas fa-clipboard-check menu-icon"></i> Entrance Registration
          </Link>
        </li>
        <li
          className={`sidebar-item text ${activeMenu === "payment" ? "active" : ""}`}
        >
          <Link to="/payment">
            <i className="fas fa-credit-card menu-icon"></i>Entrance Payment
          </Link>
        </li>    <li
          className={`sidebar-item text ${activeMenu === "entrance" ? "active" : ""}`}
        >
          <Link to="/entrance">
            <i className="fas fa-book-open menu-icon"></i> Practice Test
          </Link>
        </li>
        <li
          className={`sidebar-item text ${activeMenu === "result" ? "active" : ""}`}
        >
          <Link to="/result">
            <i className="fas fa-file-alt menu-icon"></i> Entrance Result
          </Link>
        </li>
        
       
      </ul>
      <div className="sidebar-logout">
        <i className="fas fa-sign-out-alt"></i>
        <a href="/">Logout</a>
      </div>
    </div>
  );
};

export default SideBar;
