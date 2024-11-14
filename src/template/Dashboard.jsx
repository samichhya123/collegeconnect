import React from "react";

import "./Dashboard.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import DashboardPage from "../services/menuInfo"; // Import the page for the dashboard
import SideBar from "./SideBar";
// import EntranceExamForm from "../components3/AdmitCard";

const Dashboard = () => {
  const userName = "Samichhya Shrestha";
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-content">
        <DashboardPage
          title="Welcome to the College Connect Dashboard"
          message="This is the dashboard page where you can manage everything."
          userName={userName}
        />
      </div>
    </div>
  );
};

export default Dashboard;
