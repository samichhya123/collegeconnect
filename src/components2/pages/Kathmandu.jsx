import React, { useEffect, useState } from "react";
import "./kathmandu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CollegesPage = () => {
  const [colleges, setColleges] = useState([]);
  const collegesLink = [
    { id: 3, link: "/-/british" },
    { id: 4, link: "/-/herald" },
    { id: 5, link: "/-/kathford" },
    { id: 6, link: "/-/ncit" },
    { id: 7, link: "/-/khwopa" },
    { id: 8, link: "/-/Ritz" },
    { id: 9, link: "/-/Padmakanya" },
    { id: 10, link: "/-/Acme" },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/colleges")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setColleges(data);
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
      });
  }, []);

  return (
    <div className="kathmandu-container">
      {colleges.length === 0 ? (
        <p>Loading colleges...</p>
      ) : (
        colleges.map((college) => {
          // Find the matching link for the college by ID
          const collegeLink = collegesLink.find(
            (link) => link.id === college.id
          );
          return (
            <div key={college.id} className="ktm-card">
              <div className="ktm-card-content">
                <img
                  src={college.image_url}
                  alt={college.name}
                  className="ktm-card-image"
                />
                <h3>{college.name}</h3>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} /> {college.address}
                </p>
                {collegeLink ? (
                  <Link to={collegeLink.link} className="ktm-button">
                    Explore
                  </Link>
                ) : (
                  <p>Link not available</p>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CollegesPage;
