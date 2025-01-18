import React, { useState } from "react";
import axios from "axios";
import AdminDash from "./AdminDash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./adminCollege.css";

const AdminCourseForm = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    university: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    const isValidDuration =
      !isNaN(formData.duration) &&
      formData.duration > 0 &&
      formData.duration <= 10;

    if (!isValidDuration) {
      toast.error("Please enter a valid course duration (1-10 years).");
      return;
    }

    if (!formData.courseName || !formData.university) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const updatedFormData = {
        ...formData,
        duration: parseInt(formData.duration, 10),
      };

      const apiUrl =
        process.env.REACT_APP_API_URL || "http://localhost:5000/api/add-course"; // dynamic URL

      const response = await axios.post(apiUrl, updatedFormData);

      toast.success(response.data.message);
      setTimeout(() => {
        setFormData({
          courseName: "",
          university: "",
          duration: "",
        });
      }, 2000); // Delay before clearing form
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to add course. Please try again.";
      toast.error(errorMessage);
      console.error(error);
    }
  };

  return (
    <div className="admin-course-container">
      <AdminDash />
      <form onSubmit={handleSubmit} className="admin-course-form">
        <h2>Course Form</h2>

        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>University</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Duration (Years)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            min="1"
            max="10"
            step="1"
          />
        </div>

        <button type="submit">Add Course</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AdminCourseForm;
