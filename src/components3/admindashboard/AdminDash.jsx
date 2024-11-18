import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDash.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const menuItems = [
  {
    path: '/manage-users',
    icon: 'fas fa-users',
    label: 'User Management',
  },
  {
    path: '/exam-management',
    icon: 'fas fa-book-open',
    label: 'Exam Management',
  },
  {
    path: '/course-management',
    icon: 'fas fa-chalkboard-teacher',
    label: 'Course Management',
  },
  {
    path: '/college-management',
    icon: 'fas fa-university',
    label: 'College Management',
  },
];

const AdminDashboard = () => {
  return (
    <div className="sidebar-admin">
   
      <div className="sidebar-logo-admin">
        <img src="/images/logo.jpg" alt="My Logo" className="logo-image" />
        <div>Admin Dashboard</div>
      </div>

   
      <ul className="sidebar-menu-admin">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item-admin">
            <Link to={item.path}>
              <i className={`${item.icon} menu-icon`}></i>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

   
      <div className="sidebar-logout-admin">
        <i className="fas fa-sign-out-alt"></i>
        Logout
      </div>
    </div>
  );
};

export default AdminDashboard;
