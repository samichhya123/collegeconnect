import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./adminCollege.css";

const AdminCollegeForm = ({ college, fetchColleges, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    valley: "",
    latitude: "",
    longitude: "",
    image_url: "",
  });

  // Pre-filling the form for editing if college data is provided
  useEffect(() => {
    if (college) {
      setFormData({
        name: college.name || "",
        address: college.address || "",
        valley: college.valley || "",
        latitude: college.latitude || "",
        longitude: college.longitude || "",
        image_url: college.image_url || "",
      });
    } else {
      setFormData({
        name: "",
        address: "",
        valley: "",
        latitude: "",
        longitude: "",
        image_url: "",
      });
    }
  }, [college]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    // Validate required fields
    if (!formData.name || !formData.address || !formData.valley) {
      toast.error("Please fill out all required fields.");
      return;
    }

    // Validate latitude and longitude ranges
    const isValidLatitude =
      !isNaN(formData.latitude) &&
      formData.latitude >= -90 &&
      formData.latitude <= 90;
    const isValidLongitude =
      !isNaN(formData.longitude) &&
      formData.longitude >= -180 &&
      formData.longitude <= 180;

    if (!isValidLatitude || !isValidLongitude) {
      toast.error("Please enter valid latitude and longitude.");
      return;
    }

    // Prepare data for submission
    const updatedFormData = {
      ...formData,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
    };

    try {
      if (college) {
        await axios.put(`/api/admincolleges/${college.id}`, updatedFormData);
        toast.success("College updated successfully.");
      } else {
        await axios.post("/api/colleges", updatedFormData);
        toast.success("College added successfully.");
      }

      // Refresh the college list and close the form
      fetchColleges();
      if (onClose && typeof onClose === "function") {
        onClose(); // Ensure that onClose is passed and is a function
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to save the college. Please try again.";
      toast.error(errorMessage);
      console.error("Error saving college:", error);
    }
  };

  return (
    <div className="admin-college-container">
      <h2>{college ? "Edit College" : "Add College"}</h2>
      <form onSubmit={handleSubmit} className="admin-college-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Valley</label>
          <select
            name="valley"
            value={formData.valley}
            onChange={handleChange}
            required
          >
            <option value="">Select Valley</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Lalitpur">Lalitpur</option>
            <option value="Bhaktapur">Bhaktapur</option>
          </select>
        </div>

        <div className="form-group">
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          {college ? "Update College" : "Add College"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminCollegeForm;
 