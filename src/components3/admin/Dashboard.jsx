import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import ValleyFrequencyChart from "./valleyCount";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the default styles
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Dashboard from "./AdminDash";

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = ({ adminEmail }) => {
  // assuming adminEmail is passed as prop
  const [userCount, setUserCount] = useState(0);
  const [collegeCount, setCollegeCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  const loginData = {
    labels: ["Kathmandu", "Lalitpur", "Bhaktapur"],
    datasets: [
      {
        label: "Preferred College",
        data: [80, 40, 40], // Replace with actual data from backend
        backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"],
        borderColor: ["#2980b9", "#27ae60", "#c0392b"],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    // Fetch the college count when the component is mounted
    const fetchCollegeCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/colleges/count"
        );
        setCollegeCount(response.data.count);
      } catch (err) {
        console.error("Error fetching college count", err);
      }
    };

    // Fetch the user count when the component is mounted
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/count"
        );
        setUserCount(response.data.count);
      } catch (err) {
        console.error("Error fetching user count", err);
      }
    };

    const fetchAdminName = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/get-admin",
          {
            params: { email: adminEmail },
          }
        );
        const firstName = response.data.first_name;
        toast.success(`Logged in as: ${firstName}`);
      } catch (err) {
        console.error("Error fetching admin name", err);
      }
    };

    fetchCollegeCount();
    fetchUserCount();
    fetchAdminName();
  }, [adminEmail]);

  return (
    <div className="dashboard-container">
      <Dashboard isAdmin={true} />
      <div className="dashboard-main-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </div>

        <div className="stats-section">
          <h2>Dashboard Stats</h2>
          <div className="stats-counters">
            <div className="stat-item">
              <p>
                <strong>Users:</strong> {userCount}
              </p>
            </div>
            <div className="stat-item">
              <p>
                <strong>Colleges:</strong> {collegeCount}
              </p>
            </div>
            <div className="stat-item">
              <p>
                <strong>Courses:</strong> {courseCount}
              </p>
            </div>
          </div>
        </div>
        <ValleyFrequencyChart />
      
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
