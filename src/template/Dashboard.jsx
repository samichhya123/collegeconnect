import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SideBar from "./SideBar";
import sammy from "../images/sammy.jpg";

const Dashboard = () => {
  const userName = "Samichhya Shrestha";
  const [showPopup, setShowPopup] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  // Hide the popup automatically after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 3000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Toggle edit profile form
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  // Cancel the edit and return to the profile overview
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="dashboard-container">
      {showPopup && (
        <div className="login-popup">
          <div className="popup-content">
            <p>
              Login as: <strong>{userName}</strong>
            </p>
          </div>
        </div>
      )}
      <SideBar />
      <div className="dashboard-content">
        {!isEditing ? (
          <div className="profile-overview">
            <img src={sammy} alt="Profile Picture" className="profile-avatar" />
            <div className="profile-details">
              <h2>Welcome Samichhya!</h2>
              {/* <p>Bio: Aspiring engineer looking for the right college.</p> */}
              <button className="edit-profile-btn" onClick={handleEditProfile}>
                Edit Profile
              </button>
            </div>
          </div>
        ) : null} {/* Don't render profile overview when editing */}
      </div>

      
      {isEditing && (
        <div className="edit-profile-form">
          <h2>Edit Profile</h2>
          <form>
            <label htmlFor="profile-pic">Profile Picture</label>
            <input type="file" id="profile-pic" name="profile-pic" />

            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value="Samichhya Shrestha" />

            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio">
              Aspiring engineer looking for the right college.
            </textarea>

            <button type="submit" className="save-changes-btn">
              Save Changes
            </button>
            <button
              type="button"
              className="cancel-changes-btn"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
