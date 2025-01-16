import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components3/SideBar";

const CollegeSearch = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location: ", error);
          alert("Unable to retrieve your location. Please enter it manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const fetchNearbyColleges = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/collegedistance", {
        latitude: location.latitude,
        longitude: location.longitude,
      });
      setColleges(response.data);
    } catch (error) {
      console.error("Error fetching colleges:", error);
      alert("Unable to fetch nearby colleges. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Arial, sans-serif", backgroundColor: "#eee", height: "100vh" }}>
      <SideBar />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", textAlign: "center", backgroundColor: "#eee" }}>
        <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>User Dashboard</div>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "400px", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
          {location.latitude && location.longitude ? (
            <div>
              <p>Your Location: {location.latitude}, {location.longitude}</p>
              <button type="button" onClick={fetchNearbyColleges} style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }} disabled={loading}>
                {loading ? "Searching..." : "Search Nearby Colleges"}
              </button>
            </div>
          ) : (
            <div>
              <p>Loading your location...</p>
            </div>
          )}
        </form>
        <h3>Nearby Colleges:</h3>
        <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
          {colleges.length === 0 ? (
            <p>No nearby colleges found. Try again later.</p>
          ) : (
            colleges.map((college, index) => (
              <li key={index} style={{ padding: "10px", margin: "5px 0", backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "4px" }}>
                {college.name} - {college.distance.toFixed(2)} km away
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CollegeSearch;
