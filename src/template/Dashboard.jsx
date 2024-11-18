import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SideBar from "./SideBar";
import profilePic from "../images/user.jpg"; // Replace with your profile image path
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const userName = "Samichhya Shrestha";
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();
  const handleNavigateToSearch = () => {
    navigate("/college-search");
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 3000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  const [courses, setCourses] = useState([
    { id: 1, name: "CSIT" },
    { id: 2, name: "BCA" },
  ]);
  const [newCourse, setNewCourse] = useState("");
  const [editCourseId, setEditCourseId] = useState(null);
  const [editCourseName, setEditCourseName] = useState("");

  // Add a new course
  const addCourse = () => {
    if (newCourse.trim()) {
      setCourses([...courses, { id: Date.now(), name: newCourse }]);
      setNewCourse("");
    }
  };

  // Update a course
  const updateCourse = () => {
    setCourses(
      courses.map((course) =>
        course.id === editCourseId
          ? { ...course, name: editCourseName }
          : course
      )
    );
    setEditCourseId(null);
    setEditCourseName("");
  };

  // Delete a course
  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };
  const [colleges, setColleges] = useState([
    { id: 1, name: "Kathford International College", eligibility: "Eligible" },
    { id: 2, name: "PadmaKanya Campus", eligibility: "Half Eligible" },
    { id: 3, name: "Kathmandu University", eligibility: "Not Eligible" },
  ]);
  const [newCollege, setNewCollege] = useState("");
  const [newEligibility, setNewEligibility] = useState("");
  const [editCollegeId, setEditCollegeId] = useState(null);
  const [editCollegeName, setEditCollegeName] = useState("");
  const [editEligibility, setEditEligibility] = useState("");

  // Add a new college
  const addCollege = () => {
    if (newCollege.trim() && newEligibility.trim()) {
      setColleges([
        ...colleges,
        { id: Date.now(), name: newCollege, eligibility: newEligibility },
      ]);
      setNewCollege("");
      setNewEligibility("");
    }
  };

  // Update a college
  const updateCollege = () => {
    setColleges(
      colleges.map((college) =>
        college.id === editCollegeId
          ? { ...college, name: editCollegeName, eligibility: editEligibility }
          : college
      )
    );
    setEditCollegeId(null);
    setEditCollegeName("");
    setEditEligibility("");
  };

  // Delete a college
  const deleteCollege = (id) => {
    setColleges(colleges.filter((college) => college.id !== id));
  };
  return (
    <div>
      {" "}
      <SideBar />
      <div className="dashboard-wrapper">
        {showPopup && (
          <div className="login-popup">
            <div className="popup-content">
              <p>
                Login as: <strong>{userName}</strong>
              </p>
            </div>
          </div>
        )}

        <div className="dashboard-main">
          <div className="header">
            <button onClick={handleNavigateToSearch} className="search-bar">
              Search
            </button>
            <div className="profile-info">
              <img src={profilePic} alt="Profile" className="profile-image" />
              <span className="profile-name">Samichhya Shrestha</span>
            </div>
          </div>
          <div className="welcome-banner">
            <h2>Welcome back, Samichhya!</h2>
            <p>Always stay updated in your student portal</p>
          </div>
          <div className="content">
            <section className="finance-section">
              <h3>Interested Colleges</h3>{" "}
              <div className="add-college">
                <input
                  type="text"
                  placeholder="Enter College Name"
                  value={newCollege}
                  onChange={(e) => setNewCollege(e.target.value)}
                />
                <select
                  value={newEligibility}
                  onChange={(e) => setNewEligibility(e.target.value)}
                >
                  <option value="">Select Eligibility</option>
                  <option value="Eligible">Eligible</option>
                  <option value="Half Eligible">Half Eligible</option>
                  <option value="Not Eligible">Not Eligible</option>
                </select>
                <button onClick={addCollege}>Add College</button>
              </div>
              <div className="finance-cards">
                {colleges.map((college) =>
                  editCollegeId === college.id ? (
                    <div className="finance-card" key={college.id}>
                      <input
                        type="text"
                        value={editCollegeName}
                        placeholder="College Name"
                        onChange={(e) => setEditCollegeName(e.target.value)}
                      />
                      <select
                        value={editEligibility}
                        onChange={(e) => setEditEligibility(e.target.value)}
                      >
                        <option value="Eligible">Eligible</option>
                        <option value="Half Eligible">Half Eligible</option>
                        <option value="Not Eligible">Not Eligible</option>
                      </select>
                      <button onClick={updateCollege}>Save</button>
                      <button onClick={() => setEditCollegeId(null)}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`finance-card ${
                        college.eligibility === "Eligible"
                          ? "highlighted"
                          : college.eligibility === "Half Eligible"
                          ? "half-highlighted"
                          : "not-highlighted"
                      }`}
                      key={college.id}
                    >
                      <p>{college.name}</p>
                      <span>{college.eligibility}</span>
                      <button
                        onClick={() =>
                          setEditCollegeId(college.id) &
                          setEditCollegeName(college.name) &
                          setEditEligibility(college.eligibility)
                        }
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteCollege(college.id)}>
                        Delete
                      </button>
                    </div>
                  )
                )}
              </div>
            </section>
            <section className="enrolled-courses">
              <h3>Interested Courses</h3>{" "}
              <div className="add-course">
                <input
                  type="text"
                  placeholder="Enter course name"
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                />
                <button onClick={addCourse}>Add Course</button>
              </div>
              <div className="courses-grid-dashboard">
                {courses.map((course) =>
                  editCourseId === course.id ? (
                    <div className="course-card-dashboard" key={course.id}>
                      <input
                        type="text"
                        value={editCourseName}
                        onChange={(e) => setEditCourseName(e.target.value)}
                      />
                      <button onClick={updateCourse}>Save</button>
                      <button onClick={() => setEditCourseId(null)}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="course-card-dashboard" key={course.id}>
                      <h4>{course.name}</h4>
                      <button
                        onClick={() =>
                          setEditCourseId(course.id) &
                          setEditCourseName(course.name)
                        }
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteCourse(course.id)}>
                        Delete
                      </button>
                    </div>
                  )
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
