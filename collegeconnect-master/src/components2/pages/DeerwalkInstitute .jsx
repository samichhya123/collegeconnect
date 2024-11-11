import React from "react";
import "./college.css";
import deerwalk from "../college image/deer2.jpg";
import deerwalk1 from "../college image/deer.jpg";
import logo from "../logo/deerw.png";
import deerwalk2 from "../principal immage/deer.png";
const DeerwalkInstitute = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img
            src={deerwalk}
            alt="Background Image"
            style={{ width: "100%", height: "auto" }}
          />
          <img
            src={deerwalk1}
            className="img-front"
            alt="Front Image"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Deerwalk Institute of Technology</h2>
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
          Deerwalk Institute of Technology (DWIT) is a collaboration between
          Nepalese entrepreneurs and the USA-based software company, Deerwalk
          Inc. The College is supported by both Nepalese and American
          professionals who seek to improve the quality of Nepal’s education,
          and by doing so, contribute to the nation’s economic development. With
          the help of its industrial partner, Deerwalk Inc., the College aims to
          train technical professionals who have the capability to bring Nepal
          into the global marketplace.
          <br />
          <br />
          Deerwalk Institute of Technology (DWIT) was established with the goal
          to graduate engineers and other technical professionals competent
          enough to face the challenges of an increasingly globally integrated
          industrial work environment. It offers Bachelor of Computer Science
          and Information Technology (B.Sc. CSIT) and Bachelor of Computer
          Application (BCA) under the affiliation of Tribhuvan University.
          <br />
          <br />
          The ultimate vision of Deerwalk Institute of Technology (DWIT) is to
          be the premier institute of technology in Nepal and the South Asia
          region by taking a unique practical approach to modern technical
          education.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. BSc Computer Science and Information Technology (BSc CSIT)</span>
          <ul>
            <li>
              Should have successfully completed twelve years of schooling in
              the science stream or equivalent from any recognized university,
              board, or institution.
            </li>
            <li>
              Should have successfully passed the entrance examination conducted
              by TU securing at least 35% marks.
            </li>
            <li>
              Should have secured a minimum of second division in their +2 or
              equivalent or secured at least C in all subjects in Grades 11 and
              12.
            </li>
          </ul>

          <span>2. Bachelor of Computer Application (BCA)</span>
          <ul>
            <li>
              Minimum D grade in each subject of grade 11 and 12 with a CGPA of
              1.8 or more.
            </li>
            <li>
              Minimum score of second division marks in 10+2, PCL, or equivalent
              in any discipline.
            </li>
            <li>
              Students who have passed grade 11 and are waiting for grade 12
              results can also apply.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chairman</h3>
          <img
            src={deerwalk2}
            alt="Deerwalk"
            className="card-image"
            style={{ maxHeight: "200px" }}
          />
          <div className="card-content">
            <p>
              Deerwalk Institute of Technology (DWIT) was established with the
              goal to graduate engineers and other technical professionals
              competent enough to face the challenges of an increasingly
              globally integrated industrial work environment.
            </p>
          </div>
          <p className="principal-name">
            -Chairman, Deerwalk Institute of Technology
          </p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14128.604894768658!2d85.342503!3d27.7126168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970d2e43e4b%3A0x946fac63019d2903!2sDeerwalk%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1726673478562!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Deerwalk Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DeerwalkInstitute;
