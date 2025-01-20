import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import AdminCollegeForm from "./adminCollege";
import AdminDashboard from "./AdminDash";

const CollegesCRUD = () => {
  const [colleges, setColleges] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editCollege, setEditCollege] = useState(null);

  // Fetch colleges
  const fetchColleges = async () => {
    try {
      const response = await axios.get("/api/admincolleges");
      setColleges(response.data);
    } catch (error) {
      console.error("Error fetching colleges:", error.message);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  // Toggle the form visibility
  const toggleAddForm = () => {
    setEditCollege(null); // Clear the edit state
    setShowAddForm((prev) => !prev);
  };

  const handleEdit = (college) => {
    setEditCollege(college);
    setShowAddForm(true);
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/admincolleges/${id}`);
      if (response.status === 200) {
        setColleges((prev) => prev.filter((college) => college.id !== id));
        alert("College deleted successfully.");
      } else {
        alert("Failed to delete the college.");
      }
    } catch (error) {
      console.error("Error deleting college:", error.message);
      alert("Failed to delete the college. Please try again.");
    }
  };
  return (
    <div className="colleges-crud-container" style={{ width: "100%" }}>
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
          Manage Colleges
        </h1>
        <div
          className="add-college-header"
          style={{
            marginRight: "25px",
          }}
        >
          <button onClick={toggleAddForm} className="add-college-button">
            {!showAddForm && (
              <FontAwesomeIcon icon={faPlus} style={{ color: "#fff" }} />
            )}{" "}
            {showAddForm ? "Close" : "Add College"}
          </button>
        </div>
      </div>

      {showAddForm ? (
        <AdminCollegeForm college={editCollege} fetchColleges={fetchColleges} />
      ) : (
        <div
          className="colleges-list"
          style={{ width: "80%", marginLeft: "18%" }}
        >
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Valley</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college) => (
                <tr key={college.id}>
                  <td>{college.id}</td>
                  <td>{college.name}</td>
                  <td>{college.address}</td>
                  <td>{college.valley}</td>
                  <td>{college.latitude || "N/A"}</td>
                  <td>{college.longitude || "N/A"}</td>
                  <td>
                    {college.image_url ? (
                      <img
                        src={`/${college.image_url}`}
                        alt={college.name}
                        width="50"
                        height="50"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleEdit(college)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(college.id)}>
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

export default CollegesCRUD;
