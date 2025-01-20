import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import ValleyFrequencyChart from "./valleyCount";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = ({ adminEmail }) => {
  const [userCount, setUserCount] = useState(0);
  const [collegeCount, setCollegeCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [adminFetched, setAdminFetched] = useState(false);
  const email = adminEmail || localStorage.getItem("adminEmail");

  useEffect(() => {
    if (!email) {
      toast.error("Admin email not found. Please log in again.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Fetch data dynamically with reusable fetch function
    const fetchData = async (url, setState, errorMessage) => {
      try {
        const response = await axios.get(url);
        setState(response.data.count || 0);
      } catch (err) {
        console.error(errorMessage, err);
        toast.error(errorMessage, { position: "top-right", autoClose: 3000 });
      }
    };

    // Fetch admin details for greeting
    const fetchAdminName = async () => {
      if (adminFetched) return;

      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/get-admin",
          {
            params: { email },
          }
        );
        const firstName = response.data.first_name;
        toast.success(`Logged in as: ${firstName}`, { position: "top-right" });
        setAdminFetched(true);
      } catch (err) {
        console.error("Error fetching admin name", err);
        toast.error("Error retrieving admin details.", {
          position: "top-right",
        });
      }
    };

    fetchAdminName();
    fetchData(
      "http://localhost:5000/api/colleges/count",
      setCollegeCount,
      "Error fetching college count"
    );
    fetchData(
      "http://localhost:5000/api/users/count",
      setUserCount,
      "Error fetching user count"
    );
    fetchData(
      "http://localhost:5000/api/courses/count",
      setCourseCount,
      "Error fetching course count"
    );
  }, [email, adminFetched]);

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

        {/* Frequency Chart Section */}
        <ValleyFrequencyChart />
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
