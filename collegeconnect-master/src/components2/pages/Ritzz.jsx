import React from 'react';
import './college.css'; 
import ritz from "../lalitpur/college image/ritz.jpg";
import ritz1 from "../lalitpur/college image/ritz1.jpg";
import logo from "../lalitpur/logo/riitz.png";
import ritz2 from "../lalitpur/principal images/ritz.png";
const Ritzz = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={ritz} alt="Background Image" />
          <img src={ritz1} className="img-front" alt="Front Image" />
        </div>
      </header>
      <div className="section">
        <h2 className="college-name">Ritz College Of Engineering And Management</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxWidth: '200px' }} />
        <br />
      </div>
      
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Ritz College of Engineering and Management, under the aegis of The Himal Educational Foundation and Research Centre Pvt. Ltd., was established by a team of visionary educators, esteemed technocrats, and dedicated social workers from Nepal. Recognized as one of Nepal’s premier educational institutions, Ritz sets new standards in Business Administration, Hospitality, Computing and Engineering education. It nurtures top-tier hospitality leaders, business professionals, entrepreneurs, and engineers with the mentoring by highly qualified faculty in state-of-the-art facilities. Our rigorous, student-centered instructional methods leverage the latest smart board and multimedia tools. We are committed to inspiring, encouraging, and guiding students to achieve their dreams of a fulfilling and rewarding career, equipping them to lead successful and happy lives. Ritz graduates emerge with the skills necessary to excel in a competitive world, confidently meeting the challenges of the 21st century and providing leadership in the global market.
        </p>
      </div>
      
      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor in Hotel Management (BHM)</span>
          <ul>
            <li>For Grade 12 Graduates till 2078 BS: Pass Grade 12 examination with a minimum CGPA 1.8 and achieve a minimum of D+ grade in every subject in Grade 11 and 12.</li>
            <li>For Grade 12 Graduates from 2079 BS: Pass Grade 12 examination with a minimum CGPA 1.8 and achieve a minimum of D grade in every subject in Grade 11 and 12.</li>
          </ul>
          
          <span>2. BCA</span>
          <ul>
            <li>The candidates should have completed Class 12 examination of NEB or equivalent level from a recognized academic institution.</li>
            <li>The candidates should have studied a course (having at least 100 full marks or 5 credits) of Mathematics (Mathematics/ Business Mathematics/ Applied Mathematics) or Computer Science/Computer Application in SLCE (class 11 or class 12) examination of NEB or equivalent level.</li>
            <li>The candidates should have scored a minimum of 45% or a CGPA/GPA of 2.0 (in a scale of 4.0) and at least Grade C (in case of A-level, at least Grade D) or 45% in Mathematics/Computer Science.</li>
          </ul>
          
          <span>3. Bachelor of Civil Engineering</span>
          <ul>
            <li>The candidates should have completed Class 12 examination of NEB or equivalent level from a recognized academic institution.</li>
            <li>The candidates should have studied at least one course (having at least 100 full marks or 5 credits) each in Physics, Chemistry, and Mathematics.</li>
            <li>The candidates should have scored a minimum of 45% or a CGPA/GPA of 2.0 (in a scale of 4.0) and at least Grade C (in case of A-level, at least Grade D) or 45% in each subject (Physics, Chemistry, and Mathematics).</li>
          </ul>
          
          <span>4. BBA</span>
          <ul>
            <li>For the year 2078 and before, applicants must have a minimum CGPA of 1.8 (At least D+ in each subject).</li>
            <li>For the year 2079 and after, applicants must have a minimum CGPA of 1.8 (At least D in each subject).</li>
          </ul>
        </div>
      </div>
      
      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={ritz2} alt="Principal Image" className="card-image" style={{ height: '250px' }} />
          <div className="card-content">
            <p>
              Ritz stands as a pinnacle of dedicated academia, committed to shaping highly skilled professionals ready to meet the challenges of the 21st century. Our institution provides a holistic learning environment with an interdisciplinary approach, ensuring every student receives a well-rounded education. In a remarkably short time, Ritz has earned recognition as a leading academic institution in Nepal.
            </p>
          </div>
          <p className="principal-name">- Principal, Ritz College Of Engineering And Management</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5802600145776!2d85.32950067525235!3d27.66845527620495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dda8bcff4d%3A0x10d7aa6670ae520d!2sAcademia%20International%20College!5e0!3m2!1sen!2snp!4v1726501625045!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ritzz;
