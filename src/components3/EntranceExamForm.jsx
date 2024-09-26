import React from "react";
import "./EntranceExamForm.css";
import Navbar from "../components1/Navbar";
import Footer from "../components1/Footer";
import college from "../images/college.png";
const EntranceExamForm = () => {
  return (
    <div>
      <Navbar />
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
                  <option value="bbm">Kist College</option>
                  <option value="bba">Prime College</option>
                  <option value="bhm">Orchid College</option>
                  <option value="bsc-csit">
                    Deerwalk Institute Of Technology
                  </option>
                  <option value="bca">Herald College</option>
                  <option value="bsc-it">NCIT College</option>
                  <option value="bcsit">ISMT College</option>
                  <option value="bsc-hons-computing">
                    St. Xavier's College
                  </option>
                  <option value="bit">GoldenGate International College</option>
                  <option value="bim">Quest International College</option>
                  <option value="be-computer">Patan Multiple Campus</option>
                  <option value="be-arch">
                    Nagarjun College Of Information Technology
                  </option>
                  <option value="be-civil">Vedas College</option>
                  <option value="be-civil">Virinchi College</option>
                  <option value="be-civil">
                    National College Of Engineering
                  </option>
                  <option value="be-civil">
                    Academy of Culinary Arts and Hospitality Management
                  </option>
                  <option value="be-civil">Janakpur Engineering College</option>
                  <option value="be-civil">Lalitpur Engineering College</option>
                  <option value="be-civil">Campion College</option>
                  <option value="be-civil">
                    Ritz College Of Engineering And Management
                  </option>
                </select>
              </div>

              <div className="form-floating">
                <label htmlFor="program">Program</label>
                <select id="program" required>
                  <option value="bbs">BBS</option>
                  <option value="bbm">BBM</option>
                  <option value="bba">BBA</option>
                  <option value="bhm">BHM</option>
                  <option value="bsc-csit">B.Sc.CSIT</option>
                  <option value="bca">BCA</option>
                  <option value="bsc-it">BSc.IT</option>
                  <option value="bcsit">BCSIT</option>
                  <option value="bsc-hons-computing">
                    BSc (Hons) Computing
                  </option>
                  <option value="bit">BIT</option>
                  <option value="bim">BIM</option>
                  <option value="be-computer">BE Computer</option>
                  <option value="be-arch">BE Architecture</option>
                  <option value="be-civil">BE Civil</option>
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
