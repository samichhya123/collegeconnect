import React from "react";
import "./college.css";
import logo from "../lalitpur/logo/vedas.png";
import vedas2 from "../lalitpur/principal images/vedas.png";
import vedas from "../lalitpur/college image/vedass.jpg";
import vedas1 from "../lalitpur/college image/vedas.png";
const Vedas = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={vedas} alt="Background Image" />
          <img src={vedas1} className="img-front" alt="Front Image" />
        </div>
      </header>
      <div className="section">
        <h2 className="college-name">Vedas College</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxHeight: "100px" }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Vedas College is inarguably the best IT and Management College in the
          country today.
          <br />
          <br />
          Centrally located at Jawalakhel, Vedas College with its state-of-art
          infrastructure and expert faculty, stands as the ideal learning
          environment for the students to receive technical education and
          professional grooming and secure a bright future in the competitive
          global market.
          <br />
          <br />
          To be a leading institute for IT and Management education in Nepal by
          nurturing an innovation-embracing learning environment. To be home to
          global leaders in IT and Management. Vedas College is inarguably the
          best IT and Management College in the country today. Centrally located
          at Jawalakhel, Vedas College with its state-of-art infrastructure and
          expert faculty, stands as the ideal learning environment for the
          students to receive technical education and professional grooming and
          secure a bright future in the competitive global market.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. Bachelors in Business Studies (BBS)</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from
              recognized academic institutes with second division (securing 45%
              and above) or 1.8 CGPA are eligible to enroll in this program
            </li>
          </ul>

          <span>2. B.Sc CSIT</span>
          <ul>
            <li>
              Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics or
              Biology)
            </li>
            <li>PASSED in TU IOST Entrance Exam</li>
          </ul>

          <span>3. BCA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in BCA Entrance Test</li>
          </ul>

          <span>4. BBM</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in CMAT Test</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Director</h3>
          <img
            src={vedas2}
            alt="Nagarjuna College of Information Technology"
            className="card-image"
            style={{ maxHeight: "250px" }}
          />
          <div className="card-content">
            <p>
              Vedas believes that students should not be just bookworms;
              therefore, we make our effort to provide them great deals of
              opportunities to broaden not only subject knowledge but also their
              comprehensive knowledge with career developments.
            </p>
          </div>
          <p className="principal-name">- Director, Vedas College</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.76154007229!2d85.3177484!3d27.6727807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19af991bc5d9%3A0xf7fa4ac582280d45!2sVedas%20College!5e0!3m2!1sen!2snp!4v1726567398365!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Vedas;
