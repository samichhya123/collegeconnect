import React from "react";
import "./college.css";
import golden from "../college image/ggic.webp";
import golden1 from "../college image/goldengate2.jpg";
import logo from "../logo/ggic.png";
import golden2 from "../principal immage/goldengate.png";
const GoldenGateCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={golden} alt="Background Image" />
          <img
            src={golden1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">GoldenGate International College</h2>
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
          GoldenGate Int’l College was initiated by a group of reputed
          academicians to establish a world-class University within a decade. In
          our pursuit, we have completed six academic sessions since inception.
          I would like to express my sincere gratitude to all parents,
          guardians, students, faculty members, staff, journalists, members of
          civil society, well-wishers and others who are directly or indirectly
          involved in enhancing the prestige of this college.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. BA BSW</span>
          <ul>
            <li>
              Application is open to students who have cleared HSEB or
              equivalent with a minimum of 50%.
            </li>
          </ul>
          <span>2. BBS</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from
              recognized academic institutes with second division (securing 45%
              and above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>
          <span>3. BCA</span>
          <ul>
            <li>Minimum 'C' grade in all subjects in PCL/+2</li>
            <li>Passed in BCA Entrance Test</li>
          </ul>
          <span>4. B. Tech Food</span>
          <ul>
            <li>
              Application is accepted from students who have successfully passed
              HSEB/ISc or equivalent with a minimum of 50% and entrance test
              conducted by Institute of Science And Technology, Tribhuvan
              University.
            </li>
          </ul>
          <span>5. BSC PCM</span>
          <ul>
            <li>
              Application is open to students of Science background who have
              cleared HSEB/I.Sc or equivalent with a minimum of 50%.
            </li>
          </ul>
          <span>6. BBA</span>
          <ul>
            <li>Minimum 'C' grade in all subjects in PCL/+2</li>
            <li>Passed in CMAT Test</li>
          </ul>
          <span>7. BSC GSM</span>
          <ul>
            <li>
              Application is accepted from students who have successfully passed
              HSEB/ISc or equivalent with a minimum of 50% and entrance test
              conducted by Institute of Science And Technology, Tribhuvan
              University.
            </li>
          </ul>
          <span>8. BSC Environmental Science</span>
          <ul>
            <li>
              Application is open to students of Science background who have
              cleared HSEB/I.Sc or equivalent with a minimum of 50%.
            </li>
          </ul>
          <span>9. BSC Microbiology</span>
          <ul>
            <li>
              Application is open to students of Science background who have
              cleared HSEB/I.Sc or equivalent with a minimum of 50%.
            </li>
          </ul>
          <span>10. Bachelor of Hotel Management (BHM)</span>
          <ul>
            <li>
              Successful Completion of 10+2 with minimum D+ grade in each
              subject and must pass CMAT exams conducted by TU
            </li>
          </ul>
          <span>11. BBM</span>
          <ul>
            <li>
              Successful Completion of 10+2 with minimum D+ grade in each
              subject Must have Passed CMAT exams
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chairperson</h3>
          <img
            src={golden2}
            alt="GoldenGate"
            className="card-image"
            style={{ maxHeight: "250px" }}
          />
          <div className="card-content">
            <p>
              GoldenGate Int’l College was initiated by a group of reputed
              academicians to establish a world-class University within a
              decade. In our pursuit, we have completed six academic sessions
              since inception. I would like to express my sincere gratitude to
              all parents, guardians, students, faculty members, staff,
              journalists, members of civil society, well-wishers and others who
              are directly or indirectly involved in enhancing the prestige of
              this college.
            </p>
          </div>
          <p className="principal-name">
            - Chairperson, GoldenGate Int’l College
          </p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4431554171083!2d85.3400862!3d27.7036005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1987c933bad9%3A0x3f17928e7bf5c55a!2sGoldenGate%20International%20College!5e0!3m2!1sen!2snp!4v1726661752156!5m2!1sen!2snp"
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

export default GoldenGateCollege;
