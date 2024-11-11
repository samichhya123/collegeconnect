import React from 'react';
import './college.css';
import ismt from "../college image/ismt.jpg";
import ismt1 from "../college image/ismtt.jpg";
import logo from "../college image/ismt.png";
import ismt2 from "../principal immage/ismt.png";
const ISMTCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={ismt} alt="Background Image" />
          <img src={ismt1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">ISMT College</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxWidth: '200px' }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          ISMT was established in 2011 with a mission to deliver internationally recognized
          qualifications. ISMT offers a range of qualifications in collaboration with the
          University of Sunderland and Pearson BTEC. ISMT exists to make an impact in the
          education system in Nepal, with an ambition to deliver industry-relevant education and
          make higher education accessible and beneficial to all those with the passion and
          ability to succeed. ISMT is committed to the delivery of inclusive, cost-effective, and
          internationally recognized academic programmes in the context of core local
          requirements and values.
        </p>
        <p>
          At ISMT, students will gain an internationally recognized UK degree that will open doors
          to an outstanding future. Our aim is not just to impart learning but to ensure that
          students can apply their knowledge and understanding, and problem-solving abilities in
          actual work environments within broader contexts related to their field of study. ISMT
          engages students, individually and collectively, in the quality of their educational
          experiences through a range of project works, classroom discussions, presentations, and
          different modes of assessments.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. BSc (Hons) Cyber Security and Digital Forensics</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent.</li>
            <li>A good command in English Language.</li>
          </ul>
          <span>2. BHM - BSc. (Hons) International Tourism and Hospitality Management</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent.</li>
            <li>A good command in English Language.</li>
          </ul>
          <span>3. BA (Hons) Business and Management (BBA)</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent.</li>
            <li>A good command in English Language.</li>
          </ul>
          <span>4. BSc (Hons) Computer Systems Engineering</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent.</li>
            <li>A good command in English Language.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Vice Chancellor</h3>
          <img src={ismt2} alt="Vice Chancellor" className="card-image" style={{ maxHeight: '200px' }} />
          <div className="card-content">
            <p>
              The University of Sunderland is a British university with a global footprint. We have campuses in Sunderland
              in the north-east of England, London and Hong Kong. In addition, we have excellent transnational partnerships
              with institutions in over a dozen countries across the world.
            </p>
          </div>
          <p className="principal-name">- Vice Chancellor, ISMT College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.697221817783!2d85.3491138!3d27.6887343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198bf9bd6c7d%3A0xb9e9193ddf9eda4f!2sISMT%20College!5e0!3m2!1sen!2snp!4v1726655929316!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ISMT College Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ISMTCollege;
