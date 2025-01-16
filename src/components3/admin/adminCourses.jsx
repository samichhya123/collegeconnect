import React, { useState } from "react";
import axios from "axios";
import AdminDash from "./AdminDash";
import { ToastContainer, toast } from "react-toastify"; // Import toast functions
import "react-toastify/dist/ReactToastify.css"; // Import styles for the toast
import "./adminCollege.css";

const AdminCourseForm = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    university: "",
    duration: "", // Changed field name to "duration" for clarity
  });

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages on every new submission
    toast.dismiss();

    // Validate duration
    const isValidDuration =
      !isNaN(formData.duration) &&
      formData.duration > 0 &&
      formData.duration <= 10;

    if (!isValidDuration) {
      toast.error("Please enter a valid course duration (1-10 years).");
      return;
    }

    // Validate course name and university fields
    if (!formData.courseName || !formData.university) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      // Convert duration to a number if valid
      const updatedFormData = {
        ...formData,
        duration: parseInt(formData.duration, 10),
      };

      // Send the request to add course
      const response = await axios.post(
        "http://localhost:5000/api/add-course", // Update URL if necessary
        updatedFormData
      );

      toast.success(response.data.message); // Show success toast
      // Clear form data after successful submission
      setFormData({
        courseName: "",
        university: "",
        duration: "",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to add course. Please try again.";
      toast.error(errorMessage); // Show error toast
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
          />
        </div>

        <button type="submit">Add Course</button>
      </form>

      {/* Toast container to display the messages */}
      <ToastContainer />
    </div>
  );
};

export default AdminCourseForm;
