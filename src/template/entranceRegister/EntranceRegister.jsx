import React, { useState } from "react";
import "./admit.css";
import SideBar from "../../components3/SideBar";

const collegePrograms = {
  "Kathford College": [
    "B.Sc.CSIT",
    "BCA",
    "BBA",
    "BBM",
    "BE Computer/Civil/Electronics, Communication & Information",
  ],
  "Kist College": ["BIM", "BBA", "BBM"],
  "Prime College": ["BCA", "BIT", "B.Sc.CSIT"],
  "Orchid College": ["B.Sc.CSIT", "BE Computer"],
  "Deerwalk Institute Of Technology": ["BSc.IT", "BIT"],
  "Herald College": ["BSc (Hons) Computing", "BIT"],
  "NCIT College": ["BE Computer", "BE Civil", "BCA", "BBM"],
  "ISMT College": ["BIM", "BSc.IT"],
  "St. Xavier's College": ["B.Sc.CSIT", "BBA"],
  "GoldenGate International College": ["B.Sc.CSIT", "BBM"],
  "Quest International College": ["BHM", "BIM"],
  "Patan Multiple Campus": ["BIM", "BE Architecture"],
  "Nagarjun College Of Information Technology": ["BIT", "BSc.IT"],
  "The British College": [
    "BSc (Hons) Cyber Security and Digital Forensics",
    "BHM",
    "BBA",
    "BSc (Hons) Computer Systems Engineering",
    "BSc (Hons) Computer System",
  ],
  "Herald College": [
    "BSc (Hons) International Business Management",
    "BSc (Hons) Computer System",
  ],
  "Khwopa Engineering College": [
    "Bachelor of Architecture (B.Arch)",
    "Bachelor of Civil Engineering (BE Civil)",
    "Bachelor of Computer Engineering (BE Computer)",
    "Bachelor in Electronics, Communication and Automation Engineering",
  ],
  "RItz College": ["BHM", "BCA", "Bachelor of Civil Engineering", "BBA"],
  "Sambridhi College": [
    "Bachelor of Business Studies (BBS)",
    "B.Sc CSIT",
    "BCA",
    "Bachelor of Social Work (BSW)",
  ],
};

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

  const handleCollegeChange = (e) => {
    const selectedCollege = e.target.value;
    setFormData({
      ...formData,
      college: selectedCollege,
      program: "", // Reset program when college changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
      alert("Form submitted successfully!");
      // Add your form submission logic here
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                  style={{ display: "none" }}
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

              {/* Full Name */}
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

              {/* Email */}
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

              {/* Contact */}
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

              {/* College */}
              <div className="form-floating">
                <label htmlFor="college">College</label>
                <select
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleCollegeChange}
                  required
                >
                  <option value="" disabled selected>
                    Select College
                  </option>
                  {Object.keys(collegePrograms).map((college) => (
                    <option key={college} value={college}>
                      {college}
                    </option>
                  ))}
                </select>
              </div>

              {/* Program */}
              <div className="form-floating">
                <label htmlFor="program">Program</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  disabled={!formData.college} // Disable until a college is selected
                >
                  <option value="" disabled selected>
                    Select Course
                  </option>
                  {formData.college &&
                    collegePrograms[formData.college].map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                </select>
              </div>

              {/* Register Date */}
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

              {/* Documents */}
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
