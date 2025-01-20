import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../images/CC.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SideBar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Menu items for users
  const menuItems = [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: "fa-dashboard",
      path: "/nearby-colleges",
    },
    {
      name: "registration",
      label: "Entrance Registration",
      icon: "fa-clipboard-check",
      path: "/registration",
    },
    {
      name: "payment",
      label: "Entrance Payment",
      icon: "fa-credit-card",
      path: "/payment",
    },
    {
      name: "bookCounseling",
      label: "Book Counseling Session",
      icon: "fa-calendar-check",
      path: "/bookcounseling",
    },
    // Uncomment below to add the "result" section in the future
    // {
    //   name: "result",
    //   label: "Entrance Result",
    //   icon: "fa-file-alt",
    //   path: "/result",
    // },
    {
      name: "quiz",
      label: "Practice Question",
      icon: "fa-question-circle",
      path: "/quiz",
    }
  ];

  // Update active menu based on the current route
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = menuItems.find((item) => currentPath.includes(item.path));

    if (activeItem) {
      setActiveMenu(activeItem.name);
    }
  }, [location]);

  // Handle logout confirmation
  const handleLogout = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to logout?")) {
      window.location.href = "/"; // Redirect to homepage or login
    }
  };

  return (
    <div className="sidebar">
      {/* Sidebar Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="My Logo" className="logo-image" />
      </div>

      {/* Sidebar Menu */}
      <ul className="sidebar-menu">
        {/* User-specific menu items */}
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`sidebar-item text ${
              activeMenu === item.name ? "active" : ""
            }`}
          >
            <Link to={item.path}>
              <i className={`fas ${item.icon} menu-icon`}></i> {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="sidebar-logout">
        <i className="fas fa-sign-out-alt"></i>
        <a href="#" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default SideBar;