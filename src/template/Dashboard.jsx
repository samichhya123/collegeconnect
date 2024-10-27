import React from "react";
import "./Dashboard.css";
import logo from "../images/CC.jpg"
import "@fortawesome/fontawesome-free/css/all.min.css";
const Dashboard = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
       
          <img src={logo} alt="My Logo" className="logo-image" />
        
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item   text">
          <i className="fas fa-chart-bar menu-icon"></i>
          Dashboard
        </li>
        <li className="sidebar-item text ">
          <i className="fas fa-credit-card menu-icon"></i>
          Payment For Entrance
        </li>
        <li className="sidebar-item text">
          <i className="fas fa-clipboard-check menu-icon"></i>
          Registration
        </li>
        <li className="sidebar-item text">
          <i className="fas fa-book-open menu-icon"></i>
          Entrance
        </li>
        <li className="sidebar-item text">
          <i className="fas fa-file-alt menu-icon"></i>
          Entrance Result
        </li>
      </ul>
      <div className="sidebar-logout">
        <i className="fas fa-sign-out-alt"></i>
      <a href="/">Logout</a> 
      </div>
    </div>
  );
};
export default Dashboard;
