import React from "react";
import "./entranceExamForm.css";
import Navbar from "../components1/Navbar";
import Footer from "../components1/Footer";
import college from "../images/college.png";

const EntranceExamForm = () => {
  return (
    <div>
      <Navbar showSearch={false} showAuthButtons={false} />

      <div className="Admission-section">
        <div className="left-right">
          <div className="left">
            <form className="form-container">
              <h2 style={{ textAlign: "center" }}>Entrance Exam Form</h2>

              <div className="form-floating">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>

              <div className="form-floating">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>

              <div className="form-floating">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="tel"
                  id="contact"
                  placeholder="Enter Your Contact Number"
                  required
                />
              </div>

              <div className="form-floating">
                <label htmlFor="college">College</label>
                <select id="college" required>
                  <option value="bbs">Kathford College</option>
                  {/* Add the rest of the options here */}
                </select>
              </div>

              <div className="form-floating">
                <label htmlFor="program">Program</label>
                <select id="program" required>
                  <option value="bbs">BBS</option>
                  {/* Add the rest of the options here */}
                </select>
              </div>

              <div className="form-floating">
                <label htmlFor="queries">Queries/Notes (optional)</label>
                <textarea
                  id="queries"
                  rows="3"
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
