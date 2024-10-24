import React from "react";
import "./college.css";
import herald from "../college image/herald1.jpg";
import herald1 from "../college image/herald22.jpg";
import logo from "../logo/herald.png";
import herald2 from "../principal immage/herald.png";
const HeraldCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={herald} alt="Background Image" />
          <img
            src={herald1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>

      <div className="section">
      <img
          src={logo}
          alt="College Logo"
          style={{ maxWidth: "200px" }}
        />  <h2 className="college-name">Herald College</h2>
     
      
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Herald College Kathmandu (HCK) provides the best UK university
          education. It offers undergraduate programmes in IT and Business as
          well as a postgraduate programme in International MBA in direct
          partnership with the University of Wolverhampton, UK. Programmes that
          Herald College Kathmandu offers are flexible and have always aimed to
          foster a broader based knowledge.
          <br />
          Herald College Kathmandu offers the BSc (Hons) International Business
          Management and BSc (Hons) Computer Science, BSc (Hons) Cybersecurity
          and International MBA qualification from the University of
          Wolverhampton (WLV). Considering effort, aptitude and knowledge,
          Herald College Kathmandu organises a competition every year where
          students are awarded with scholarships to participate in the WLV
          Exchange Fellowship Programme organised at the University of
          Wolverhampton, UK.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. BSc (Hons) Computer Science</span>
          <ul>
            <li>
              Completion of NEB +2 Qualification with an aggregate ≥ 55% or 2.2
              CGPA.
            </li>
            <li>
              For A-Levels, a minimum of 3.5 credits and at least a grade of D
              and above.
            </li>
            <li>
              English NEB XII Marks ≥ 60% or 2.4 GPA. Pass in General Paper or
              English Language or IELTS 5.5 or PTE 47.
            </li>
          </ul>

          <span>2. BSc (Hons) International Business Management</span>
          <ul>
            <li>
              Completion of NEB +2 Qualification with an aggregate ≥ 45% or 1.8
              CGPA.
            </li>
            <li>
              For A-Levels, a minimum of 3.5 credits and at least a grade of D
              and above.
            </li>
            <li>
              English NEB XII Marks ≥ 45% or 1.8 GPA. Pass in General Paper or
              English Language or IELTS 5.5 or PTE 47.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chairman</h3>
          <img
            src={herald2}
            alt="Chairman"
            className="card-image"
            style={{ maxHeight: "200px" }}
          />
          <div className="card-content">
            <p>
              Welcome to Herald College Kathmandu, offering globally renowned
              and internationally recognised IT and Business Degree programmes.
              We encourage high-level learning and actively involve students in
              cutting-edge research activities, expose them to new challenges
              and produce individuals capable of facing and resolving complex
              issues in the real world.
            </p>
          </div>
          <p className="principal-name">- Chairman, Herald College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14128.672613653294!2d85.3307661!3d27.712094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196de5da5741%3A0x652792640c70ede9!2sHerald%20College%20Kathmandu!5e0!3m2!1sen!2snp!4v1726676143491!5m2!1sen!2snp"
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

export default HeraldCollege;
