import React, { useState } from "react";
import "./entranceExamForm.css";
import Navbar from "../components1/Navbar";
import Footer from "../components1/Footer";
import college from "../images/college.png";

const EntranceExamForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    college: "Kathford College",
    program: "BBS",
    queries: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message); // Show success message to the user
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div>
      <Navbar showSearch={false} showAuthButtons={false} />

      <div className="Admission-section">
        <div className="left-right">
          <div className="left">
            <form className="form-container" onSubmit={handleSubmit}>
              <h2 style={{ textAlign: "center" }}>Entrance Exam Form</h2>

              <div className="form-floating">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>

              <div className="form-floating">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>

              <div className="form-floating">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="tel"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter Your Contact Number"
                  required
                />
              </div>

              <div className="form-floating">
                <label htmlFor="college">College</label>
                <select
                  id="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                >
                  <option value="Kathford College">Kathford College</option>
                  {/* Add other options */}
                </select>
              </div>

              <div className="form-floating">
                <label htmlFor="program">Program</label>
                <select
                  id="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="BBS">BBS</option>
                  {/* Add other options */}
                </select>
              </div>

              <div className="form-floating">
                <label htmlFor="queries">Queries/Notes (optional)</label>
                <textarea
                  id="queries"
                  rows="3"
                  value={formData.queries}
                  onChange={handleChange}
                  placeholder="Any Queries"
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>

          <div className="right">
            <img src={college} alt="College Connect" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EntranceExamForm;
