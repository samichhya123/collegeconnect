import React, { useState } from "react";
import axios from "axios";
import CollegeMap from "./collegeMap";
import './style.css'; 

const NearbyCollegesForm = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [radius, setRadius] = useState(5); // Default radius to 5 km
  const [colleges, setColleges] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!latitude || !longitude) {
      setError("Please enter valid latitude and longitude.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:50001/api/nearby-colleges?latitude=${latitude}&longitude=${longitude}&radius=${radius}`
      );
      setColleges(response.data.data);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("Failed to fetch colleges. Please try again.");
    }
  };

  return (
    <div className="college-form-container">
      <h1>Find Nearby Colleges</h1>
      <form onSubmit={handleSearch} className="college-form">
        <div className="college-input-group">
          <label>Latitude:</label>
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="colleg-input-group">
          <label>Longitude:</label>
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="college-input-group">
          <label>Radius (km):</label>
          <input
            type="number"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="college-submit" className="submit-btn">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="college-list">
        {colleges.length > 0 ? (
          <div>
            <ul>
              {colleges.map((college) => (
                <li key={college.id} className="college-card-map">
                  <strong>{college.name}</strong> ({college.distance.toFixed(2)} km away)
                  <br />
                  Address: {college.address}
                </li>
              ))}
            </ul>
            {/* Render the map */}
            <div className="college-map-container">
              <CollegeMap colleges={colleges} />
            </div>
          </div>
        ) : (
          <p>No colleges found.</p>
        )}
      </div>
    </div>
  );
};

export default NearbyCollegesForm;
