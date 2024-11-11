import React from 'react';
import './college.css';
import swastik from "../react/college image/swastik1.jpg";
import swastik1 from "../react/college image/swastik.jpg";
import logo from "../react/logo/swastik.png";
import swastik2 from "../react/principal image/swastik.png";
const SwastikCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={swastik} alt="Background Image" />
          <img src={swastik1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Swastik College</h2>
        <br />
        <img src={logo} alt="College Logo" />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Swastik College, the School of Computer Science and Application, was founded in 2013 by the team of academicians and young entrepreneurs. It is
          located at Chardobato, Gattaghar, Bhaktapur. Currently, Swastik College is running a Bachelor of Science in Computer Science and Information
          Technology (B.Sc CSIT) and Bachelor of Arts in Computer Application (BCA). Since 2019, F1Soft has invested in Swastik College to produce highly
          competent IT professionals and bridge the gap between IT education and IT industries.
        </p>
        <p>
          It was established to facilitate students' progression, both academic and practical, by developing knowledge, key skill sets, and the capacity for
          independent and lifelong learning. We believe in building students' intelligence, ingenuity, inventiveness, and communication skills. Swastik
          College makes a conscious effort to foster students' endeavors in developing problem-solving skills and expertise. We have the right human resources
          and tools to develop multifaceted expertise in our students, preparing them for real-world challenges.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. BSc Computer Science and Information Technology (BSc CSIT)</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics or Biology)</li>
            <li>PASSED in TU IOST Entrance Exam</li>
          </ul>
          <span>2. Bachelor of Computer Application (BCA)</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in BCA Entrance Test</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={swastik2} alt="Swastik College" className="card-image" />
          <div className="card-content">
            <p>
              Our goal is to provide students with a technical education of the highest caliber, one that enhances their skills and ensures them a competitive
              edge in the market of the twenty-first century. This is done by using the most up-to-date instructional resources and technology, qualified
              teachers, and partnerships with different business houses.
            </p>
          </div>
          <p className="principal-name">- Principal, Swastik College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.620715359548!2d85.3806993!3d27.6738693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a6de0722809%3A0x146c6508a0a4376!2sSwastik%20College!5e0!3m2!1sen!2snp!4v1726845751076!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SwastikCollege;
