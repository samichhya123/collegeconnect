import React from "react";
import "./college.css";
import campion from "../lalitpur/college image/campion2.jpg";
import campion1 from "../lalitpur/college image/campion.jpg";
import logo from "../lalitpur/logo/campion.jpg";
import campion2 from "../lalitpur/principal images/campion.png";
const CampionCollege = () => {
  return (
    <>
      <header>
        <div className="img-area">
          <img src={campion} alt="Background" />
          <img src={campion1} className="img-front" alt="Front" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Campion College</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxHeight: "150px" }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Campion College, popularly known as CC, was established in 1997 and is affiliated to Tribhuvan University. The College is managed by CG Education. Campion College is one of the pioneer institutions aiming to prepare individuals for professional careers in business management and liberal sciences. Under the management of CG|Education, the college blends the best from both the industry and academics. CG|Education, an enterprise of Chaudhary Group, Nepal’s first multinational company envisions to be the best in educational sector in Nepal. Since its establishment, it has twelve institutions under its umbrella and they are Campion School, Campion Academy, Campion Kathmandu Secondary School, The Chandbagh Secondary School, The Chandbagh S. Secondary School, Delhi Public School, Birgunj (SEE/SBSE Board),Campion Pre-School, Campion Kathmandu Pre-School, The Chandbagh Pre-School, DPS Pre-School,CG Polytechnic and Campion College.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor in Arts (BA)</span>
          <ul>
            <li>
              Students who have completed 10+2 or equivalent examinations securing a minimum D Grade in all subjects and CGPA 1.6 overall in Grade 11 and 12 are eligible to enroll in the BA program of Tribhuvan University.
            </li>
          </ul>

          <span>2. BBS</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from the recognized academic institutes with second division (securing 45% and above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>

          <span>3. BBA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in CMAT Test</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={campion2}
            alt="campion"
            className="card-image"
            style={{ maxHeight: "250px" }}
          />
          <div className="card-content">
            <p>
              The mainspring of Campion college is the students whose holistic development and character building is the primary objective of the institution. This is achieved by focusing on the needs of the individual student and providing the best socio-ecological environment according to his/her specific need.
            </p>
          </div>
          <p className="principal-name">- Principal, Campion College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.381300007895!2d85.3053422!3d27.6834485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb184b68332cd1%3A0xffbe51301bf32047!2sCampion%20College!5e0!3m2!1sen!2snp!4v1726563131986!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Campion College Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default CampionCollege;
