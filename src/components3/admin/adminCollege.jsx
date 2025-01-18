import React, { useState } from "react";
import axios from "axios";
import AdminDash from "./AdminDash";
import { ToastContainer, toast } from "react-toastify"; // Import toast functions
import "react-toastify/dist/ReactToastify.css"; // Import styles for the toast
import "./adminCollege.css";

const AdminCollegeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
    image_url: "",
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

    // Validate latitude and longitude
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

    try {
      // Convert latitude and longitude to numbers if they are valid
      const updatedFormData = {
        ...formData,
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
      };

      // Send the request to add college (Corrected URL to 5001)
      const response = await axios.post(
        "http://localhost:5000/api/add-college", // Make sure the port is correct here
        updatedFormData
      );

      toast.success(response.data.message); // Show success toast
      // Clear form data after successful submission
      setFormData({
        name: "",
        address: "",
        latitude: "",
        longitude: "",
        image_url: "",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to add college. Please try again.";
      toast.error(errorMessage); // Show error toast
      console.error(error);
    }
  };

  return (
    <div className="admin-college-container">
      <AdminDash />
      <form onSubmit={handleSubmit} className="admin-college-form">
        <h2>College Form</h2>

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

        <button type="submit">Add College</button>
      </form>

      {/* Toast container to display the messages */}
      <ToastContainer />
    </div>
  );
};

export default AdminCollegeForm;
