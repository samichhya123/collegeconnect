import React from "react";
import "./college.css";
import janakpur from "../lalitpur/college image/jk.png";
import janakpur1 from "../lalitpur/college image/jk.JPG";
import logo from "../lalitpur/logo/janakpur.png";
import janakpur2 from "../lalitpur/principal images/janakpur.png";
const Janakpur = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={janakpur} alt="Background Image" />
          <img
            src={janakpur1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Janakpur Engineering College</h2>
        <br />
        <img
          src={logo}
          alt="College Logo"
          style={{ maxHeight: "150px" }}
        />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Janakpur Engineering College (JEC), established in 2058 BS is
          affiliated to Tribhuvan University (TU), Nepal. It has produced a
          number of engineers since its establishment. It offers Bachelor’s
          program in Civil Engineering, Computer Engineering, and Electronics
          Communication Engineering. The courses of Janakpur Engineering College
          are approved by Nepal Engineering Council.
          <br />
          <br />
          The college has been managed by a strong team of professionals and
          academicians who possess enough experience in educational sectors for
          a long time. JEC is a pioneer private institution providing
          engineering education in Nepal. All the academic and administrative
          facilities and infrastructure have been maintained as per IOE
          standard.
          <br />
          <br />
          Besides teaching-learning processes, seminars, workshops, and training
          are frequently conducted through the semester with field visits,
          project works, and fieldwork. JEC assures quality education required
          for the students in the present context and assists them in pursuing
          their professional and educational goals.
          <br />
          <br />
          The institution is committed to providing quality education in various
          engineering disciplines keeping in mind emerging professional needs.
          Janakpur Engineering College has state-of-the-art infrastructure to
          foster academic excellence along with a well-equipped lab to boost
          practical knowledge.
          <br />
          <br />
          Moreover, Janakpur Engineering College provides vital non-credit
          inputs including research and project work, supplementing the regular
          courses to meet the diverse learning needs of students and improves
          their employability.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. Bachelor of Civil Engineering</span>
          <ul>
            <li>
              The students who have passed the entrance examination conducted by
              IOE are eligible for admission in IOE constituent campuses and
              affiliated colleges on a merit basis.
            </li>
          </ul>

          <span>2. Bachelor of Computer Engineering</span>
          <ul>
            <li>
              Should have successfully completed twelve years of schooling in
              the science stream or equivalent from any university, board, or
              institution recognized by TU. Should have secured a minimum of
              second division in their +2 or equivalent.
            </li>
            <li>
              Should have successfully passed the entrance examination conducted
              by TU securing at least 35% marks.
            </li>
          </ul>

          <span>3. BE Electronics & Information:</span>
          <ul>
            <li>
              Minimum ‘C’ in all subjects in PCL/+2 with Physics or Biology with
              Extra Maths
            </li>
            <li>PASSED in IOE Entrance Exam</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={janakpur2}
            alt="Janakpur Engineering College"
            className="card-image"
            style={{ maxHeight: "250px" }}
          />
          <div className="card-content">
            <p>
              The institution is committed to providing quality education in
              various engineering disciplines, keeping in mind emerging
              professional needs. Janakpur Engineering College has
              state-of-the-art infrastructure to foster academic excellence
              along with a well-equipped lab to boost practical knowledge.
            </p>
          </div>
          <p className="principal-name">
            - Principal, Janakpur Engineering College
          </p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.962452605112!2d85.3124365!3d27.686685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194be4c7eb7f%3A0xc69a5e26c21fb3ef!2sJanakpur%20Engineering%20College!5e0!3m2!1sen!2snp!4v1726565781970!5m2!1sen!2snp"
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

export default Janakpur;
