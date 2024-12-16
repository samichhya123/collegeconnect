import React, { useState } from "react";
import "./admit.css";
import SideBar from "../SideBar";

const EntranceRegister = () => {
  const [formData, setFormData] = useState({
    photo: null,
    fullName: "",
    email: "",
    contact: "",
    college: "",
    program: "",
    registerDate: "",
    documents: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === "photo") {
        setFormData({ ...formData, [name]: files[0] });
        setPhotoPreview(URL.createObjectURL(files[0])); // Preview the selected image
      } else {
        setFormData({ ...formData, [name]: files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate form fields
    const isValid =
      formData.photo &&
      formData.fullName &&
      formData.email &&
      formData.contact &&
      formData.college &&
      formData.program &&
      formData.registerDate &&
      formData.documents;

    if (isValid) {
      // Check if the user has already applied more than three times using the same email, name, and contact number
      const storedApplications =
        JSON.parse(localStorage.getItem("applications")) || [];

      const userApplicationCount = storedApplications.filter(
        (application) =>
          application.email === formData.email &&
          application.fullName === formData.fullName &&
          application.contact === formData.contact
      ).length;

      if (userApplicationCount >= 3) {
        // If user has applied more than three times
        alert("You cannot apply more than three times.");
      } else {
        // Proceed with form submission
        setSubmitted(true); // Set submitted state to true if all fields are filled

        // Store the new application data
        storedApplications.push(formData);
        localStorage.setItem(
          "applications",
          JSON.stringify(storedApplications)
        );

        // Show the popup message and redirect to the payment page
        window.alert("Please pay for the exam registration.");
        window.location.href = "/payment";
      }
    } else {
      alert("Please fill in all required fields."); // Show an alert if validation fails
    }
  };

  const resetForm = () => {
    setFormData({
      photo: null,
      fullName: "",
      email: "",
      contact: "",
      college: "",
      program: "",
      registerDate: "",
      documents: null,
    });
    setPhotoPreview(null);
    setSubmitted(false); // Reset to show the form again
  };

  return (
    <div>
      <SideBar />
      <div className="Admission-section">
        <div className="left-right">
          <div className="left">
            <form className="form-container" onSubmit={handleSubmit}>
              <h2>Entrance Registration Form</h2>

              {/* Upload Your Picture Section */}
              <div className="form-floating user-image-profile">
                <input
                  type="file"
                  id="photoUpload"
                  name="photo"
                  accept="image/*"
                  required
                  onChange={handleChange}
                  style={{ display: "none" }} // Hide the input field
                />
                <label htmlFor="photoUpload" className="custom-file-upload">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Uploaded Preview"
                      className="preview-image"
                    />
                  ) : (
                    <span className="upload-icon">⬆ Upload Your Picture</span>
                  )}
                </label>
                <div className="tooltip">Use only passport size photo</div>
              </div>

              <div className="form-floating important-label">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-floating important-label">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-floating important-label">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  placeholder="Enter Your Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-floating">
                <label htmlFor="college">College</label>
                <select
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select College
                  </option>
                  <option value="Kathford College">Kathford College</option>
                  <option value="Kist College">Kist College</option>
                  <option value="Prime College">Prime College</option>
                  <option value="Orchid College">Orchid College</option>
                  <option value="Deerwalk Institute Of Technology">
                    Deerwalk Institute Of Technology
                  </option>
                  <option value="Herald College">Herald College</option>
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
                </select>
              </div>

              <div className="form-floating">
                <label htmlFor="program">Program</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Course
                  </option>
                  <option value="BBS">BBS</option>
                  <option value="BBM">BBM</option>
                  <option value="BBA">BBA</option>
                  <option value="BHM">BHM</option>
                  <option value="B.Sc.CSIT">B.Sc.CSIT</option>
                  <option value="BCA">BCA</option>
                  <option value="BSc.IT">BSc.IT</option>
                  <option value="BCSIT">BCSIT</option>
                  <option value="BSc (Hons) Computing">
                    BSc (Hons) Computing
                  </option>
                  <option value="BIT">BIT</option>
                  <option value="BIM">BIM</option>
                  <option value="BE Compute">BE Computer</option>
                  <option value="BE Architecture">BE Architecture</option>
                  <option value="BE Civil">BE Civil</option>
                </select>
              </div>

              <div className="form-floating">
                <label htmlFor="registerDate">Register Date</label>
                <input
                  type="date"
                  id="registerDate"
                  name="registerDate"
                  value={formData.registerDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-floating">
                <label htmlFor="documents">Upload Documents</label>
                <input
                  type="file"
                  id="documents"
                  name="documents"
                  accept=".pdf, .doc, .docx, .jpg, .png"
                  required
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
          <div className="right">
            <h2>Documents Required</h2>
            <ul>
              <li>SLC Mark-Sheet</li>
              <li>SLC- Character Certificate</li>
              <li>10+2 Transcript</li>
              <li>10+2 Character Certificate</li>
              <li>
                <i>Optional: 10+2 Provisional Certificate</i>
              </li>
              <li>
                <i>Optional: 10+2 Migration Certificate</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntranceRegister;
