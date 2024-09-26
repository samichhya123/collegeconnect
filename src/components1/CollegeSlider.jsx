import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CollegeSlider.css";
import kathford from "../images/kathford.jpg";
import prime from "../images/prime.jpg";
import padmakanya from "../images/padmakanya.jpg";
import islington from "../images/islington.jpg";
import british from "../images/bristish.jpg";
import ncit from "../images/ncit.jpg";
import kmc from "../images/kmc.jpg";
import xaviers from "../images/xaviers.jpg";
import hcm from "../images/hcm.jpg";
import academia from "../images/academia.png";
import herald from "../images/herald.jpg";
import united from "../images/united.jpg";
import ambition from "../images/ambition.jpg";
import kist from "../images/kist.jpg";
import orchid from "../components2/logo/ORCHID.png";
const colleges = [
  {
    id: 1,
    name: "Kathford International College",
    logo: kathford,
    path: "/-/kathford",
  },
  { id: 2, name: "Prime College", logo: prime, path: "/-/prime" },
  {
    id: 3,
    name: "PadmaKanya Multiple Campus",
    logo: padmakanya,
    path: "/-/padmakanya",
  },
  { id: 4, name: "Islington College", logo: islington, path: "/-/islington" },
  { id: 5, name: "The British College", logo: british, path: "/-/british" },
  {
    id: 6,
    name: "Academia College",
    logo: academia,
    path: "/-/academia",
  },
  { id: 7, name: "Kathmandu Model College", logo: kmc, path: "/-/kmc" },
  { id: 8, name: "St. Xavier's College", logo: xaviers, path: "/-/xaviers" },
  { id: 9, name: "Himalaya College of Management", logo: hcm, path: "/-/himalaya" },
  {
    id: 10,
    name: "National College of Information Technology",
    logo: ncit,
    path: "/-/ncit",
  },
  {
    id: 11,
    name: "Herald College",
    logo: herald,
    path: "/-/herald",
  },
  {
    id: 12,
    name: "Ambition College",
    logo: ambition,
    path: "/-/ambition",
  },
  {
    id: 13,
    name: "United College",
    logo: united,
    path: "/-/united",
  },
  {
    id: 14,
    name: "KIST College",
    logo: kist,
    path: "/-/kist",
  },
  {
    id: 15,
    name: "Orchid International College",
    logo: orchid,
    path: "/-/orchid",
  },
];

const CollegeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const nextCollege = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colleges.length);
  };
  useEffect(() => {
    const interval = setInterval(nextCollege, 3000);
    return () => clearInterval(interval);
  }, []);

  const displayedColleges = [
    ...colleges.slice(currentIndex, currentIndex + 4),
    ...colleges.slice(0, Math.max(0, currentIndex + 4 - colleges.length)),
  ];
  const handleCardClick = (path) => {
    navigate(path);
  };
  const handleViewMoreClick = () => {
    navigate("/Colleges");
  };

  return (
    <div className="slider-container">
      <div className="college-slider">
        {displayedColleges.map((college, index) => (
          <div
            className="college-card"
            key={index}
            onClick={() => handleCardClick(college.path)}
          >
            <img src={college.logo} alt={college.name} />
            <p>{college.name}</p>
          </div>
        ))}
      </div>
      <div className="view-more">
        <button onClick={handleViewMoreClick}>View More</button>
      </div>
    </div>
  );
};

export default CollegeSlider;
