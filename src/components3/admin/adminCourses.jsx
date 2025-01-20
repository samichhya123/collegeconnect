import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./adminCollege.css";

const AdminCourseForm = ({ course, fetchCourses, onClose }) => {
  const [formData, setFormData] = useState({
    course_name: "",
    university: "",
    duration_years: "",
  });

  // Pre-filling the form for editing if course data is provided
  useEffect(() => {
    if (course) {
      setFormData({
        course_name: course.course_name || "",
        university: course.university || "",
        duration_years: course.duration_years || "",
      });
    } else {
      setFormData({
        course_name: "",
        university: "",
        duration_years: "",
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    // Validate duration
    const isValidDuration =
      !isNaN(formData.duration_years) &&
      formData.duration_years > 0 &&
      formData.duration_years <= 10;

    if (!isValidDuration) {
      toast.error("Please enter a valid course duration (1-10 years).");
      return;
    }

    // Trim whitespace from input values
    const trimmedCourseName = formData.course_name.trim();
    const trimmedUniversity = formData.university.trim();

    if (!trimmedCourseName || !trimmedUniversity) {
      toast.error("All fields are required.");
      return;
    }

    const updatedFormData = {
      ...formData,
      course_name: trimmedCourseName,
      university: trimmedUniversity,
      duration_years: parseInt(formData.duration_years, 10),
    };

    try {
      if (course) {
        // Update existing course
        await axios.put(`/api/courses/${course.id}`, updatedFormData);
        toast.success("Course updated successfully.");
      } else {
        // Add new course
        await axios.post("/api/courses", updatedFormData);
        toast.success("Course added successfully.");
        
        setFormData({ course_name: "", university: "", duration_years: "" }); // Reset form
      }

      fetchCourses(); // Refresh course list
      if (onClose) onClose(); // Close form modal
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to save the course.";
      toast.error(errorMessage);

    }
  };

  return (
    <div className="admin-course-container">
      <h2>{course ? "Edit Course" : "Add Course"}</h2>
      <form onSubmit={handleSubmit} className="admin-course-form">
        {/* Course Name Field */}
        <div className="form-group">
          <label htmlFor="course_name">Course Name</label>
          <input
            type="text"
            id="course_name"
            name="course_name"
            value={formData.course_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* University Field */}
        <div className="form-group">
          <label htmlFor="university">University</label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </div>

        {/* Duration Field */}
        <div className="form-group">
          <label htmlFor="duration_years">Duration (Years)</label>
          <input
            type="number"
            id="duration_years"
            name="duration_years"
            value={formData.duration_years}
            onChange={handleChange}
            required
            min="1"
            max="10"
            step="1"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          {course ? "Update Course" : "Add Course"}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AdminCourseForm;
