import React from "react";
import "./college.css";
import ascol from "../college image/ascol2.jpg";
import ascol1 from "../college image/ascol1.jpg";
import ascol2 from "../principal immage/amrit.png";
import logo from "../logo/ascol.png";
const AmritCampus = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={ascol} alt="Background Image" />
          <img src={ascol1} className="img-front" alt="Front Image" />
        </div>
      </header>
      <div className="section">
        <h2 className="college-name">Amrit Science Campus (ASCOL)</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxHeight: "150px" }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Amrit Science Campus (ASCOL), situated in the heart of Kathmandu
          Valley, is the unique science campus of the country. Some of the
          finest technical manpower, who are now involved in different
          development activities both at home and abroad, were students of Amrit
          Campus.The Campus is a semi-autonomous institution under Institute of
          Science and Technology with partial decentralization, affiliated to
          Tribhuvan University.
          <br />
          <br />
          Amrit Science Campus offers courses in Physics, Chemistry,
          Mathematics, Botany, Zoology, Statistics, Computer Science,
          Environment Science and Microbiology at Bachelor's level. At present,
          altogether nearly 1900 students are studying at different levels.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. B.Sc. Environmental Science </span>
          <ul>
            <li>
              The candidate must have completed 10+2 or equivalent examinations
              (with Biological Stream) with Minimum 'C' grade in all subjects to
              be eligible for admission in Bachelor of Science (B.Sc) in
              Environmental Science program of Tribhuvan University.
            </li>
          </ul>
          <span>2. BSc Zoology</span>
          <ul>
            <li>
              Any candidates who have completed 10+ 2 or equivalent (Biological
              Stream) securing minimum 'C' grade in all subjects of Grade 11 and
              12 are eligible for admission in Bachelor of Science (B.Sc) in
              Zoology program of Tribhuvan University.
            </li>
          </ul>
          <span>3. BSc Statistics</span>
          <ul>
            <li>
              Any candidates who have completed 10+ 2 or equivalent securing
              minimum 'C' grade in all subjects of Grade 11 and 12 with 200 Full
              Marks of Mathematics are eligible for admission in Bachelor of
              Science (B.Sc) in Statistics program of Tribhuvan University.
            </li>
          </ul>
          <span>4. B.Sc Microbiology</span>
          <ul>
            <li>
              The candidate must have completed 10+2 or equivalent examinations
              (with Biological Stream) with Minimum 'C' grade in all subjects to
              be eligible for admission in Bachelor of Science (B.Sc) in
              Microbiology program of Tribhuvan University.
            </li>
          </ul>
          <span>5. B.Sc CSIT</span>
          <ul>
            <li>
              Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics or
              Biology)
            </li>
            <li>PASSED in TU IOST Entrance Exam</li>
          </ul>
          <span>6. Bachelors in Information Technology (BIT)</span>
          <ul>
            <li>
              Passed Proficiency Certificate Level or Equivalent Examination
              from any faculties taking subjects like English and Mathematics or
              Computer (Students should have studied at least a Mathematics or
              English) subject of 100 pass marks and secured at least second
              division.
            </li>
          </ul>
          <span>7. BSc Chemistry</span>
          <ul>
            <li>
              Any candidates who have completed 10+ 2 or equivalent securing
              minimum 'C' grade in all subjects of Grade 11 and 12 are eligible
              for admission in Bachelor of Science (B.Sc) in Chemistry program
              of Tribhuvan University.
            </li>
          </ul>
          <span>8. BSc Mathematics</span>
          <ul>
            <li>
              Any candidates who have completed 10+ 2 or equivalent securing
              minimum 'C' grade in all subjects of Grade 11 and 12 with 200 Full
              Marks of Mathematics are eligible for admission in Bachelor of
              Science (B.Sc) in Mathematics program of Tribhuvan University.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message from Campus Chief</h3>
          <img
            src={ascol2}
            alt=" Amrit Science Campus (ASCOL)"
            className="card-image"
            style={{ maxHeight: "250px" }}
          />
          <div className="card-content">
            <p>
              Dear All, I feel pleased to take this opportunity to welcome you
              to Amrit Science Campus. Amrit Campus, also known as Amrit Science
              Campus (ASCOL) and previously familiar as public science campus
              (PUSCOL) is a government science campus, under Institute of
              Science and Technology, Tribhuvan University.
            </p>
          </div>
          <p className="principal-name">
            Campus Chief, Amrit Science Campus (ASCOL)
          </p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9846900239536!2d85.31022657546772!3d27.717758976176743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e2bcf06be5%3A0xb3febee08a175fb7!2sAmrit%20Campus!5e0!3m2!1sen!2snp!4v1726659549777!5m2!1sen!2snp"
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

export default AmritCampus;
