import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import './styles.css';  
import lalitpurimage from "./college image/LALITPUR (1080 x 800 px) (2).png";
import bhaktapurimage from "./college image/BHAKTAPUR.png";
import kathmanduimage from "./college image/KATHMANDU.png";

const CollegeContainer = () => {
  return (
    <main>
      <div className="district-cards-container">
        {/* Lalitpur District Card */}
        <div className="district-card">
          <div className="image-container">
            <Link to="/lalitpur">
              <img src={lalitpurimage} alt="LALITPUR" />
            </Link>
          </div>
        </div>

        {/* Bhaktapur District Card */}
        <div className="district-card">
          <div className="image-container">
            <Link to="/bhaktapur">
              <img src={bhaktapurimage} alt="BHAKTAPUR" />
            </Link>
          </div>
        </div>

        {/* Kathmandu District Card */}
        <div className="district-card">
          <div className="image-container">
            <Link to="/kathmandu">
              <img src={kathmanduimage} alt="KATHMANDU" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollegeContainer;
