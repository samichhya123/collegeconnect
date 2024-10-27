import React from 'react';
import './Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Dashboard = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
      <a href="/">
      <img src="/images/logo.jpg" alt="My Logo" className="logo-image" />
    </a>
<div>My DashBoard</div>
   

      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item ">
          <i className="fas fa-chart-bar menu-icon"></i>
          Dashboard
        </li>
        <li className="sidebar-item">
          <i className="fas fa-credit-card menu-icon"></i>
       Payment For Entrance
        </li>
        <li className="sidebar-item">
          <i className="fas fa-clipboard-check menu-icon"></i>
          Registration
        </li>
        <li className="sidebar-item">
          <i className="fas fa-book-open menu-icon"></i>
          Entrance
        </li>
    
        <li className="sidebar-item">
          <i className="fas fa-file-alt menu-icon"></i>
          Entrance Result
        </li>
      </ul>
      <div className="sidebar-logout">
        <i className="fas fa-sign-out-alt"></i>
        Logout
      </div>
    </div>
  );
}

export default Dashboard;
