import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components3/SideBar";

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
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve your location. Please enter it manually.");
          setLoading(false); // Stop loading on error
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoading(false); // Stop loading if geolocation is not supported
    }
  };

  // Fetch nearby colleges based on user's location
  const fetchNearbyColleges = async () => {
    try {
      const response = await axios.post("/api/collegedistance", {
        userLatitude: location.latitude,
        userLongitude: location.longitude,
      });
      console.log("Nearby colleges:", response.data);
      setColleges(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching colleges:", error);
      setLoading(false);
    }
  };

  // UseEffect to get user location when the component mounts
  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchNearbyColleges();
    }
  }, [location]);

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#eee",
    height: "100vh",
  };

  const mainContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#eee",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
    marginTop: "20px",
  };

  const listItemStyle = {
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "4px",
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={containerStyle}>
      <SideBar />
      <div style={mainContentStyle}>
        <div
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          User Dashboard
        </div>
        <form style={formStyle}>
          {/* Show user's current location automatically */}
          {location.latitude && location.longitude ? (
            <div>
              <p>
                Your Location: {location.latitude}, {location.longitude}
              </p>
              <button
                type="button"
                onClick={fetchNearbyColleges}
                style={buttonStyle}
              >
                Search Nearby Colleges
              </button>
            </div>
          ) : (
            <div>
              <p>Loading your location...</p>
            </div>
          )}
        </form>

        <h3>Nearby Colleges:</h3>
        <ul style={listStyle}>
          {colleges.map((college, index) => (
            <li key={index} style={listItemStyle}>
              {college.name} - {college.distance.toFixed(2)} km away
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollegeSearch;
