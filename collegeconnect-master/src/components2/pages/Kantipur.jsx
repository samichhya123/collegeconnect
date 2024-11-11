import React from "react";
import "./college.css"; 
import kantipur from "../college image/kantipur.jpg";
import kantipur1 from "../college image/kantipur2.png";
import logo from "../logo/kantipur.png";
import kantipur2 from "../principal immage/ksntipur.png";
const Kantipur = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={kantipur} alt="Background Image" />
          <img
            src={kantipur1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Kantipur International College</h2>
        <br />
        <img
          src={logo}
          alt="College Logo"
          style={{ maxWidth: "200px" }}
        />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          KIC, College of Engineering is a unique learning experience that makes
          us one of the top engineering colleges of not only Kathmandu but also
          all over Nepal and outside the country. The world-class faculty
          inculcates in the student a love for learning. The world-class
          infrastructure ranges from vast lecture rooms to state of the art
          library and laboratory facilities. KIC stands apart from the rest of
          the Engineering Colleges of Kathmandu in terms of education, labs,
          placements, etc. Our vision is to infuse young intelligent minds with
          cutting-edge technical education and help them to become matured
          professionals poised and ready to accept technical and managerial
          challenges in the global scenario.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. Bachelor in Architecture (B Arch)</span>
          <ul>
            <li>
              +2 in Science/ Intermediate in Science/ Intermediate in
              Engineering from recognised board or university with minimum 45%.
            </li>
          </ul>

          <span>2. Bachelor of Civil Engineering</span>
          <ul>
            <li>
              +2 in Science/ Intermediate in Science/ Intermediate in
              Engineering from recognised board or university with minimum 45%.
            </li>
          </ul>

          <span>3. BBA – Bachelor of Business Administration</span>
          <ul>
            <li>
              Minimum D Grade in each subject of Grade 11 and 12 with CGPA of
              2.00 or more for BBA.
            </li>
          </ul>

          <span>4. BID – Bachelor of Interior Design</span>
          <ul>
            <li>
              Candidates seeking admission in the college must pass entrance
              tests of Purbanchal University as well as college’s group
              discussion and interview.
            </li>
          </ul>

          <span>5. BHM – Bachelor of Hotel Management</span>
          <ul>
            <li>
              Candidates seeking admission in the college must pass entrance
              tests of Purbanchal University as well as college’s group
              discussion and interview. The final and ultimate decision
              regarding the admission is taken by the admission committee.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={kantipur2}
            alt="Kantipur International College"
            className="card-image"
            style={{ maxHeight: "250px" }}
          />
          <div className="card-content">
            <p>
              We are marching ahead with the aspiration of achieving a
              prosperous and happy Nepal. It has to launch development
              activities in a fast pace to accomplish this noble objective. In
              this campaign, Engineering and Architecture have an enormous
              responsibility. Nepal is well known for its unique art and
              architecture. If architecture contributes to the beauty of a
              country, engineering helps it to make this dream come true.
            </p>
          </div>
          <p className="principal-name">
            - Principal, Kantipur International College
          </p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.752746667158!2d85.3313349!3d27.6883053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bc299e5e59%3A0x5029e2e421b59671!2sKantipur%20International%20College!5e0!3m2!1sen!2snp!4v1726660349648!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kantipur International College Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Kantipur;
