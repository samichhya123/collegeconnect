import React, { useState } from 'react';


import './admit.css';

const EntranceExamForm = () => {
  const [formData, setFormData] = useState({
    photo: null,
    fullName: '',
    email: '',
    contact: '',
    college: 'kathford',
    program: 'bbs',
    examDate: '',
    timeSlot: 'slot1',
    documents: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === 'photo') {
        setFormData({ ...formData, [name]: files[0] });
        setPhotoPreview(URL.createObjectURL(files[0])); // Preview the selected image
      } else {
        setFormData({ ...formData, [name]: files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 

  const resetForm = () => {
    setFormData({
      photo: null,
      fullName: '',
      email: '',
      contact: '',
      college: 'Kathford',
      program: 'BBS',
      examDate: '',
      timeSlot: '9:00 - 10:00 AM',
      documents: null,
    });
    setPhotoPreview(null);
    setSubmitted(false);
  };
  const sendEmail = (base64Image) => {
    const templateParams = {
      from_name: 'Admin',
      to_name: formData.fullName, // Replace with recipient's name
      message: 'Please find the attached admit card.',
      reply_to: formData.email,
      image: base64Image,
    };

   
  };

  

  return (
    <div className="Admission-section">
      {!submitted ? (
        <div className="left-right">
          <div className="left">
            <form className="form-container" >
              <h2>Entrance Exam Form</h2>

              {/* Upload Your Picture Section */}
              <div className="form-floating">
                <input
                  type="file"
                  id="photoUpload"
                  name="photo"
                  accept="image/*"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="photoUpload" className="custom-file-upload">
                  <span className="upload-icon">⬆</span> Upload Your Picture
                </label>
                {photoPreview && <img src={photoPreview} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
              </div>

              <div className="form-floating">
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

              <div className="form-floating">
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

              <div className="form-floating">
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
                  <option value="Kathford College">Kathford College</option>
                  <option value="Kist College">Kist College</option>
                  <option value="Prime College">Prime College</option>
                  <option value="Orchid College">Orchid College</option>
                  <option value="Deerwalk Institute Of Technology">Deerwalk Institute Of Technology</option>
                  <option value="Herald College">Herald College</option>
                  <option value="bsc-it">NCIT College</option>
                  <option value="bcsit">ISMT College</option>
                  <option value="bsc-hons-computing">St. Xavier's College</option>
                  <option value="bit">GoldenGate International College</option>
                  <option value="bim">Quest International College</option>
                  <option value="be-computer">Patan Multiple Campus</option>
                  <option value="be-arch">Nagarjun College Of Information Technology</option>
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
                  <option value="BBS">BBS</option>
                  <option value="BBM">BBM</option>
                  <option value="BBA">BBA</option>
                  <option value="BHM">BHM</option>
                  <option value="B.Sc.CSIT">B.Sc.CSIT</option>
                  <option value="BCA">BCA</option>
                  <option value="BSc.IT">BSc.IT</option>
                  <option value="BCSIT">BCSIT</option>
                  <option value="BSc (Hons) Computing">BSc (Hons) Computing</option>
                  <option value="BIT">BIT</option>
                  <option value="BIM">BIM</option>
                  <option value="BE Compute">BE Computer</option>
                  <option value="BE Architecture">BE Architecture</option>
                  <option value="BE Civil">BE Civil</option>
                </select>
              </div>

              <div className="form-floating">
                <label htmlFor="examDate">Book Your Date For Entrance</label>
                <input
                  type="date"
                  id="examDate"
                  name="examDate"
                  value={formData.examDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-floating">
                <label htmlFor="timeSlot">Choose a Time Slot</label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  required
                >
                  <option value="9:00 - 10:00 AM">9:00 - 10:00 AM</option>
                  <option value="10:00 - 11:00 AM">10:00 - 11:00 AM</option>
                  <option value="11:00 - 12:00 PM">11:00 - 12:00 PM</option>
    
                </select>
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

              <button type="submit" className="btn">Submit</button>
            </form>
          </div>

          
        </div>
      ) : (
        <div className="admit-card" id='admitCard'>
          <h2>Admit Card</h2>
          <img src={photoPreview} alt="Profile" style={{ width: '100px' }} />
          <p><strong>Name:</strong> {formData.fullName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Contact:</strong> {formData.contact}</p>
          <p><strong>College:</strong> {formData.college}</p>
          <p><strong>Program:</strong> {formData.program}</p>
          <p><strong>Exam Date:</strong> {formData.examDate}</p>
          <p><strong>Time Slot:</strong> {formData.timeSlot}</p>
          <button onClick={resetForm} className="btn">Reset</button>
        </div>
      )}
    </div>
  );
};

export default EntranceExamForm;
