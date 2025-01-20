import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminCourseForm from "./adminCourses";
import AdminDashboard from "./AdminDash";

const CoursesCRUD = () => {
  const [courses, setCourses] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/api/courses");
      console.log("API Response:", response.data);
      setCourses(response.data.data || []);
    } catch (error) {
      console.error("Error fetching courses:", error.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const toggleAddForm = () => {
    setEditCourse(null);
    setShowAddForm((prev) => !prev);
  };

  const handleEdit = (course) => {
    setEditCourse(course);
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/courses/${id}`);
      if (response.status === 200) {
        setCourses((prev) => prev.filter((course) => course.id !== id));
        alert("Course deleted successfully.");
      } else {
        alert("Failed to delete the course.");
      }
    } catch (error) {
      console.error("Error deleting course:", error.message);
      alert("Failed to delete the course. Please try again.");
    }
  };

  return (
    <div
      className="colleges-crud-container"
      style={{ width: "100%", height: "100vh" }}
    >
      <AdminDashboard />
      <div
        style={{
          paddingTop: "10px",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            marginLeft: "18%",
            fontFamily: "Quicksand",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Manage Courses
        </h1>
        <div className="add-college-header" style={{ marginRight: "25px" }}>
          <button onClick={toggleAddForm} className="add-college-button">
            {!showAddForm && (
              <FontAwesomeIcon icon={faPlus} style={{ color: "#fff" }} />
            )}{" "}
            {showAddForm ? "Close" : "Add Course"}
          </button>
        </div>
      </div>
      {showAddForm ? (
        <AdminCourseForm course={editCourse} fetchCourses={fetchCourses} />
      ) : (
        <div
          className="colleges-list"
          style={{ width: "80%", marginLeft: "18%" }}
        >
          <table border="1" >
            <thead>
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>University</th>
                <th>Duration</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.course_name || "No Course Name"}</td>
                  <td>{course.university || "No University"}</td>
                  <td>{course.duration_years > 0 ? course.duration_years : "N/A"}</td>
                  <td>
                    <button onClick={() => handleEdit(course)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(course.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CoursesCRUD;
