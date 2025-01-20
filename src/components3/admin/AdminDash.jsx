import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminDash.css";
import logo from "../../images/CC.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
const AdminDashboard = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const adminMenuItems = [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: "fa-dashboard",
      path: "/dashboard",
    },
    {
      name: "colleges",
      label: "Colleges",
      icon: "fa-university",
      path: "/managecolleges",
    },
    {
      name: "courses",
      label: "Courses",
      icon: "fa-graduation-cap",
      path: "/managecourses",
    },

    {
      name: "entrance",
      label: "Entrance Exam",
      icon: "fa-book-open",
      path: "/adminentrance",
    },
    {
      name:"Counseling session",
      label:"Counseling session",
      icon:"fa-calendar-check",
      path:"/bookcounseling"
    }
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = adminMenuItems.find((item) =>
      currentPath.includes(item.path)
    );

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
        {adminMenuItems.map((item) => (
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
export default AdminDashboard;
