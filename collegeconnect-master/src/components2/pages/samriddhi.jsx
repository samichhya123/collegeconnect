import React from 'react';
import './college.css';
import samridhi from "../react/college image/samriddhiii.jpg";
import samridhi1 from "../react/college image/samriddhi.png";
import logo from "../react/logo/samriddhi.png";
import samridhi2 from "../react/principal image/samriddhi.png";
const SamriddhiCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={samridhi} alt="Background Image" />
          <img src={samridhi1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Samriddhi College</h2>
        <br />
        <img src={logo} alt="College Logo" />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Samriddhi College offers high-quality education equal to the most renowned institutions worldwide. We ready our graduates for the globalized
          marketplace with both theoretical and practical modalities, working in partnership with a number of top colleges in the United States and beyond.
          With an international board of advisors and guest lecturers from around the world, Samriddhi provides its students with an expanded curriculum,
          including enhanced classes in oral and written communication, public speaking, specialized IT and business instruction, personality development,
          global studies, field work, extensive internships, and much more.
        </p>
        <p>
          What makes Samriddhi College different from the rest is its unique blend of teamwork of national and international professionals. Team Samriddhi
          consists of passionate, committed, and experienced professionals from diverse fields, making Samriddhi College a truly outstanding center of
          excellence. This college is a common vision of these professionals working together to achieve the common goal of transforming students into 21st
          century global citizens.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Business Studies (BBS)</span>
          <ul>
            <li>Must have successfully completed the PCL or 10+2 in business/commerce or an equivalent course.</li>
            <li>Must have studied English as a full paper at the PC level or 10+2 program.</li>
            <li>Must have secured the minimum marks at the PC level or 10+2 program as prescribed by the Faculty Board or the campus concerned.</li>
            <li>Must satisfy any other entry requirements or criteria including the entrance test as prescribed by the Faculty Board or the campus.</li>
          </ul>

          <span>2. B.Sc CSIT</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics or Biology).</li>
            <li>PASSED in TU IOST Entrance Exam.</li>
          </ul>

          <span>3. BCA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2.</li>
            <li>PASSED in BCA Entrance Test.</li>
          </ul>

          <span>4. Bachelor of Social Work (BSW)</span>
          <ul>
            <li>A candidate who has completed 12 years of Schooling can apply for admission.</li>
            <li>A student must have a +2 result equivalent to the D+ marks in every subject.</li>
            <li>The college will conduct the interview and select the candidate for admission.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={samridhi2} alt="Samriddhi" className="card-image" />
          <div className="card-content">
            <p>
              Education is not just about getting a degree, it’s about learning and applying that knowledge to improve the community. At Samriddhi, our
              students get empowered with comprehensive teachings, which prepare and excel them for this competitive era. They learn the significance of time,
              the need for practical education, and the virtues of society.
            </p>
          </div>
          <p className="principal-name">- Principal, Samriddhi College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2913410209894!2d85.35823007546628!3d27.67738897619979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a1bed1bdd29%3A0x70040fb78c745729!2sSamriddhi%20College!5e0!3m2!1sen!2snp!4v1726760594664!5m2!1sen!2snp"
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

export default SamriddhiCollege;
