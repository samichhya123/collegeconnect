import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import logo from "../images/CC.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="My Logo" className="logo-image" />
      </div>
      <ul className="sidebar-menu">
        <li
          className={`sidebar-item text ${
            activeMenu === "dashboard" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("dashboard")}
        >
          <Link to="/dashboard">
            <i className="fas fa-chart-bar menu-icon"></i> Dashboard
          </Link>
        </li>
        <li
          className={`sidebar-item text ${
            activeMenu === "payment" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("payment")}
        >
          <Link to="/payment">
            <i className="fas fa-credit-card menu-icon"></i> Payment For
            Entrance
          </Link>
        </li>
        <li
          className={`sidebar-item text ${
            activeMenu === "registration" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("registration")}
        >
          <Link to="/registration">
            <i className="fas fa-clipboard-check menu-icon"></i> Registration
          </Link>
        </li>
        <li
          className={`sidebar-item text ${
            activeMenu === "entrance" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("entrance")}
        >
          <Link to="/entrance">
            <i className="fas fa-book-open menu-icon"></i> Entrance Exam
          </Link>
        </li>
        <li
          className={`sidebar-item text ${
            activeMenu === "result" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("result")}
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
