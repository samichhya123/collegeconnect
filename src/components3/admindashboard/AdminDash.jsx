import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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

const DashboardContent = ({ title, description }) => (
  <div className="dashboard-content">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar-admin">
        <div className="sidebar-logo-admin">
          <img src="/images/logo.jpg" alt="My Logo" className="logo-image" />
          {/* <div>Admin Dashboard</div> */}
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
          <Link to="/">Logout</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          {/* Existing Routes */}
          <Route
            path="/manage-users"
            element={
              <DashboardContent
                title="User Management"
                description="Manage user profiles, roles, and permissions efficiently. View detailed user information and perform administrative actions."
              />
            }
          />
          <Route
            path="/exam-management"
            element={
              <DashboardContent
                title="Exam Management"
                description="Organize exams, schedule sessions, and monitor results with ease. Ensure smooth examination processes for all participants."
              />
            }
          />
          <Route
            path="/course-management"
            element={
              <DashboardContent
                title="Course Management"
                description="Create and manage courses, assign instructors, and monitor course progress. Streamline your educational offerings effortlessly."
              />
            }
          />
          <Route
            path="/college-management"
            element={
              <DashboardContent
                title="College Management"
                description="Oversee college infrastructure, manage departments, and track institutional performance for improved operations."
              />
            }
          />

          {/* New Routes */}
          <Route
            path="/dashboard-reports"
            element={
              <DashboardContent
                title="Reports & Analytics"
                description="Access comprehensive reports and analytics to gain insights into your system's performance. Generate charts, summaries, and detailed reports."
              />
            }
          />
          <Route
            path="/settings"
            element={
              <DashboardContent
                title="System Settings"
                description="Configure system settings, customize preferences, and manage administrative options to keep your platform running smoothly."
              />
            }
          />

          {/* Default Route */}
          <Route
            path="/"
            element={
              <div>
                <DashboardContent
                  title="Welcome to the Admin Dashboard"
                  description="Select an option from the sidebar to get started. Manage your system effectively with the tools available on this platform."
                />
               
                <div className="dashboard-extra-content">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link to="/dashboard-reports">Reports & Analytics</Link></li>
                    <li><Link to="/settings">System Settings</Link></li>
                  </ul>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
