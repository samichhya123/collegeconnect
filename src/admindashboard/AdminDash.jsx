import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDash.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AdminDashboard = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to="/">
          <img src="/images/logo.jpg" alt="My Logo" className="logo-image" />
        </Link>
        <div>Admin Dashboard</div>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/manage-users">
            <i className="fas fa-users menu-icon"></i>
            User Management
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/exam-management">
            <i className="fas fa-book-open menu-icon"></i>
            Exam Management
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/course-management">
            <i className="fas fa-chalkboard-teacher menu-icon"></i>
            Course Management
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/payment">
          <i className="fas fa-university menu-icon"></i>

           College Management
          </Link>
        </li>
       
       
      </ul>
      <div className="sidebar-logout">
        <i className="fas fa-sign-out-alt"></i>
        Logout
      </div>
    </div>
  );
};

export default AdminDashboard;
