import React, { useState } from "react";
import "./admit.css";
import axios from 'axios';
import SideBar from "../../components3/SideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    documents: {},
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    // Validate Photo
    if (!formData.photo) {
      newErrors.photo = "Please upload a valid photo.";
    }

    // Validate Full Name
    if (!formData.fullName || !/^[a-zA-Z ]+$/.test(formData.fullName)) {
      newErrors.fullName =
        "Please enter a valid full name (letters and spaces only).";
    }

    // Validate Email
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate Contact Number (10-digit mobile number)
    if (!formData.contact || !/^(98|97|96)\d{8}$/.test(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit mobile number.";
    }

    // Validate Documents
    const requiredDocuments = ["SLC", "Character"];
    const uploadedDocuments = requiredDocuments.filter(
      (doc) => formData.documents[doc]
    );

    if (uploadedDocuments.length < 2) {
      newErrors.documents =
        "Please upload both required documents (SEE Mark-Sheet and SLC Transcript).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      toast.info("Pay for the form first. Redirecting to the payment page...", {
        autoClose: 3000,
      });
  
      // Prepare the form data to send (including files)
      const formDataToSend = new FormData();
      formDataToSend.append('photo', formData.photo);
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('contact', formData.contact);
      formDataToSend.append('college', formData.college);
      formDataToSend.append('program', formData.program);
      for (const [key, file] of Object.entries(formData.documents)) {
        formDataToSend.append(key, file);
      }
  
      try {
        
        const response = await axios.post('http://localhost:5000/api/entrance-exam', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        if (response.status === 200) {
          setTimeout(() => {
            window.location.href = "/payment";
          }, 3000);
        }
      } catch (error) {
        toast.error("Error submitting the form, please try again.");
      }
    } else {
      toast.error("Please fill in all required fields and upload the necessary documents.");
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === "photo") {
        const file = files[0];
        if (file && file.type.startsWith("image/")) {
          setFormData({ ...formData, [name]: file });
          setPhotoPreview(URL.createObjectURL(file));
        } else {
          setErrors({
            ...errors,
            photo: "Invalid file type. Please upload an image.",
          });
        }
      } else {
        const category = name.split("_")[1];
        setFormData({
          ...formData,
          documents: { ...formData.documents, [category]: files[0] },
        });
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
                {errors.photo && (
                  <div className="error-message">{errors.photo}</div>
                )}
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
                />
                {errors.fullName && (
                  <div className="error-message">{errors.fullName}</div>
                )}
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
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
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
                />
                {errors.contact && (
                  <div className="error-message">{errors.contact}</div>
                )}
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
                  <option value="" disabled>
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
                  <option value="" disabled>
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

              {/* Documents */}
              <div className="form-floating">
                <label htmlFor="documents_SLC">Upload SEE Mark-Sheet </label>
                <input
                  type="file"
                  id="documents_SLC"
                  name="documents_SLC"
                  accept=".pdf, .doc, .docx, .jpg, .png"
                  onChange={handleChange}
                />
              </div>

              <div className="form-floating">
                <label htmlFor="documents_Character">
                  Upload SLC Transcipt
                </label>
                <input
                  type="file"
                  id="documents_Character"
                  name="documents_Character"
                  accept=".pdf, .doc, .docx, .jpg, .png"
                  onChange={handleChange}
                />
              </div>

              {errors.documents && (
                <div className="error-message">{errors.documents}</div>
              )}

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <ToastContainer />
            </form>
          </div>

          <div className="right">
            <h2>Documents Required</h2>
            <ul>
              <li>SEE Mark-Sheet</li>
              <li>SEE Character Certificate</li>
              <li>SLC Transcript</li>
              <li>SLC Character Certificate</li>
              <li>
                <i>Optional: SLC Provisional Certificate</i>
              </li>
              <li>
                <i>Optional: SLC Migration Certificate</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntranceRegister;
