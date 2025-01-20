import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components3/SideBar";
import "./new.css";

const CollegeSearch = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to get user's location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            latitude: latitude.toFixed(5),
            longitude: longitude.toFixed(5),
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve your location. Please enter it manually.");
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  // Fetch nearby colleges based on user's location
  const fetchNearbyColleges = async () => {
    try {
      const response = await axios.post("/api/collegedistance", {
        userLatitude: location.latitude,
        userLongitude: location.longitude,
      });
      console.log(response.data);
      setColleges(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching colleges:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchNearbyColleges();
    }
  }, [location]);

  return (
    <div className={["college-search-page"]}>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <SideBar />
      <div className="college-form">
        <div className="dashboard-title">User Dashboard</div>
        <form className="form">
          {!location.latitude && !location.longitude ? (
            <div>
              <button
                type="button"
                onClick={getUserLocation}
                className="location-button"
              >
                Confirm to Share Location
              </button>
            </div>
          ) : (
            <div>
              <p className="location-info">
                Your Location: {location.latitude}, {location.longitude}
              </p>
            </div>
          )}
        </form>

        <h3>Nearby Colleges:</h3>
        <ul className="college-list">
          {colleges.slice(0, 4).map((college, index) => (
            <li key={index} className="college-list-item">
              {college.collegeInfo.name} - {college.distance} km away
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollegeSearch;
