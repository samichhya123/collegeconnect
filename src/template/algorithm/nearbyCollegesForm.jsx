import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components3/SideBar";
import "./new.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const CollegeSearch = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  // Function to fetch logged-in user's details
  const fetchUsername = async () => {
    try {
      const response = await axios.get("/api/users/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsername(response.data.username);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };
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
    fetchUsername();
    getUserLocation();
  }, []);

  // Fetch nearby colleges based on user's location
  const fetchNearbyColleges = async () => {
    try {
      const response = await axios.post("/api/collegedistance", {
        userLatitude: location.latitude,
        userLongitude: location.longitude,
      });
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
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div
          className="dashboard-title"
          style={{ fontFamily: "quicksand-bold", fontSize: "30px" }}
        >
          User Dashboard
        </div>
        <div
          style={{
            margin: "10px 0",
            fontSize: "18px",
            padding:"10px",
            borderRadius:"5px",
            fontFamily: "quicksand-regular",
          backgroundColor:"#72abba"
          }}
        >
          <FontAwesomeIcon icon={faUser} /> :{" "}
          <span style={{ color: "#eee" }}>{username}</span>
        </div></div>
        <form
          className="form-colleges"
          style={{ borderBottom: "0px", marginBotton: "20px !important" }}
        >
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
        <div
          style={{
            background: "#26425ee6",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ color: "#fff", fontFamily: "quicksand-bold" }}>
            Nearby Colleges:
          </h3>
          <ul className="college-list">
            {colleges.slice(0, 4).map((college, index) => (
              <li key={index} className="college-list-item">
                {college.collegeInfo.name} - {college.distance} km away
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeSearch;
