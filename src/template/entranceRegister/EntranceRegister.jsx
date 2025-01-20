import React, { useState } from "react";
import "./admit.css";
import axios from "axios";
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
    address: "",
    contact: "",
    college: "",
    program: "",
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName || !/^[a-zA-Z ]+$/.test(formData.fullName)) {
      newErrors.fullName = "Please enter a valid full name (letters only).";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Please enter your address.";
    }
    if (!formData.contact || !/^(98|97|96)\d{8}$/.test(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.college) {
      newErrors.college = "Please select a college.";
    }
    if (!formData.program) {
      newErrors.program = "Please select a program.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.info("Redirecting to payment page...", { autoClose: 3000 });

      // Prepare FormData to handle text and file data
      const formDataToSubmit = new FormData();

      // Add text fields
      Object.keys(formData).forEach((key) => {
        if (key !== "documents" && key !== "photo") {
          formDataToSubmit.append(key, formData[key]);
        }
      });

      // Add photo file
      if (formData.photo) {
        formDataToSubmit.append("photo", formData.photo);
      }

      // Add document files
      if (formData.documents) {
        Object.entries(formData.documents).forEach(([category, file]) => {
          formDataToSubmit.append(`document_${category}`, file);
        });
      }

      try {
        const response = await axios.post(
          "http://localhost:5000/api/add-entrance-exam",
          formDataToSubmit,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (response.status === 200) {
          setTimeout(() => {
            window.location.href = "/payment";
          }, 3000);
        }
      } catch (error) {
        console.error("Form submission error:", error.response || error);
        toast.error("Error submitting form. Please try again.");
      }
    } else {
      toast.error("Please fill all fields correctly.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];

      if (name === "photo") {
        // Validate and handle photo upload
        if (file && file.type.startsWith("image/")) {
          if (file.size > 5000000) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              photo: "File size exceeds the 5MB limit.",
            }));
          } else {
            setFormData((prevData) => ({
              ...prevData,
              photo: file,
            }));
            setPhotoPreview(URL.createObjectURL(file));
            setErrors((prevErrors) => ({ ...prevErrors, photo: "" })); // Clear error
          }
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            photo: "Invalid file type. Please upload an image.",
          }));
        }
      } else if (name.startsWith("document_")) {
        // Validate and handle document uploads
        const category = name.split("_")[1]; // Extract document type (e.g., SLC)
        if (file.size > 5000000) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            documents: `File size for ${category} exceeds the 5MB limit.`,
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            documents: {
              ...prevData.documents,
              [category]: file,
            },
          }));
          setErrors((prevErrors) => ({
            ...prevErrors,
            documents: "",
          })); // Clear error
        }
      }
    } else {
      // Handle text input
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle college selection
  const handleCollegeChange = (e) => {
    const selectedCollege = e.target.value;
    setFormData({ ...formData, college: selectedCollege, program: "" });
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <SideBar />
      <div className="Admission-section">
        <div className="left-right">
          <div className="left">
            <form className="form-container" onSubmit={handleSubmit}>
              <h2>Entrance Registration Form</h2>

              {/* Photo Upload Section */}
              <div className="form-floating user-image-profile">
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

                <input
                  type="file"
                  id="photoUpload"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                {errors.photo && (
                  <div className="error-message">{errors.photo}</div>
                )}
                <div className="tooltip">Use only passport size photo</div>
              </div>

              {/* Full Name */}
              <div className="form-floating important-label">
                <label htmlFor="fullName">
                  Full Name <span className="required">*</span>
                </label>
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

              {/* Email Address */}
              <div className="form-floating important-label">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
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
              <div className="form-floating important-label">
                <label htmlFor="address">
                  Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter Your Address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <div className="error-message">{errors.address}</div>
                )}
              </div>

              {/* Contact Number */}
              <div className="form-floating important-label">
                <label htmlFor="contact">
                  Contact Number <span className="required">*</span>
                </label>
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
                <label htmlFor="college">
                  College <span className="required">*</span>
                </label>
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
                <label htmlFor="program">
                  Program <span className="required">*</span>
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  disabled={!formData.college}
                >
                  <option value="" disabled>
                    Select Program
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
                <label htmlFor="documents_SLC">Upload SEE Mark-Sheet</label>
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
                  Upload SLC Transcript
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
