import React, { useState } from "react";
import "./courses.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Slider from "./slider";
import coursedata from "./coursedata";

const Courses = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    IT: false,
    Humanities: false,
    Management: false,
    Engineering: false,
    "Foreign Affiliated": false,
    "Non-Foreign Affiliated": false,
  });

  const handleFilterChange = (event) => {
    const { id, checked } = event.target;

    if (id === "Foreign Affiliated" && checked) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [id]: true,
        "Non-Foreign Affiliated": false,
      }));
    } else if (id === "Non-Foreign Affiliated" && checked) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [id]: true,
        "Foreign Affiliated": false,
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [id]: checked,
      }));
    }
  };

  const filteredCourses = coursedata.filter((course) => {
    if (filters.IT && course.title.includes("IT")) return true;
    if (filters.Humanities && course.title.includes("Computer Application"))
      return true;
    if (filters.Management && course.title.includes("Management")) return true;
    if (filters.Management && course.title.includes("Business Studies"))
      return true;
    if (filters.Engineering && course.title.includes("Engineering"))
      return true;

    if (
      filters["Foreign Affiliated"] &&
      course.university !== "Tribhuvan University" &&
      course.university !== "Kathmandu University" &&
      course.university !== "Pokhara University"
    )
      return true;

    if (
      filters["Non-Foreign Affiliated"] &&
      [
        "Tribhuvan University",
        "Kathmandu University",
        "Pokhara University",
      ].includes(course.university)
    )
      return true;

    return (
      !filters["IT"] &&
      !filters["Humanities"] &&
      !filters["Management"] &&
      !filters["Engineering"] &&
      !filters["Foreign Affiliated"] &&
      !filters["Non-Foreign Affiliated"]
    );
  });

  return (
    <div>
      <Navbar />
      <div className="courses-container">
        <div className="courses-slider">
          <div className="slider">
            <h3>Courses Available</h3>
            <div className="filter-option">
              <input
                type="checkbox"
                id="IT"
                onChange={handleFilterChange}
                checked={filters.IT}
              />
              <label htmlFor="IT">IT</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="Humanities"
                onChange={handleFilterChange}
                checked={filters.Humanities}
              />
              <label htmlFor="Humanities">Humanities and Social Sciences</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="Management"
                onChange={handleFilterChange}
                checked={filters.Management}
              />
              <label htmlFor="Management">Management</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="Engineering"
                onChange={handleFilterChange}
                checked={filters.Engineering}
              />
              <label htmlFor="Engineering">Engineering</label>
            </div>
          </div>
          <div className="courses-description">
            <hr className="divider" />
          </div>
          <div className="slider">
            <h3>Foreign Affiliated</h3>
            <div className="filter-option">
              <input
                type="checkbox"
                id="Foreign Affiliated"
                onChange={handleFilterChange}
                checked={filters["Foreign Affiliated"]}
              />
              <label htmlFor="Foreign Affiliated">Yes</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="Non-Foreign Affiliated"
                onChange={handleFilterChange}
                checked={filters["Non-Foreign Affiliated"]}
              />
              <label htmlFor="Non-Foreign Affiliated">No</label>
            </div>
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="courses-card"
              onClick={() => navigate(course.path)}
            >
              <h4>{course.title}</h4>
              <p>{course.university}</p>
              <p>{course.years}</p>
            </div>
          ))}
        </div>
        <Slider />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
