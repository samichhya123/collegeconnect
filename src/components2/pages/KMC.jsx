import React from "react";
import "./college.css";
import kmc from "../college image/kmc.jpg";
import kmc1 from "../college image/kmc2.jpeg";
import logo from "../logo/kmc-college.png";
import kmc2 from "../principal immage/kmc.png";
const KMC = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={kmc} alt="Background Image" />
          <img
            src={kmc1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>
      <div className="section">
        <h2 className="college-name">Kathmandu Model College</h2>
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
          Kathmandu Model College (KMC) in affiliation with Tribhuvan University
          is steadfastly dedicated to nurturing the next generation of leaders
          in the fields of management and social sciences, a commitment that has
          been at its core since its establishment in 2003 AD. KMC was founded
          by a distinguished group of professionals and academics with extensive
          expertise in higher education, business, entrepreneurship, management,
          and research. Operating as an integral part of the KMC Educational
          Network, KMC offers academic programs spanning from preschool to
          Master’s degree levels, and the institution is resolutely committed to
          delivering high-quality education. Since its inception, KMC has
          successfully carved out a distinguished reputation as one of the best
          +2 schools in the country. KMC has achieved the prestigious Quality
          Assurance and Accreditation (QAA) certificate from the University
          Grants Commission (UGC) in the year 2023, underscoring its unwavering
          commitment to educational excellence. The college provides a diverse
          range of undergraduate and graduate courses, including Bachelor’s
          programs such as BBA, BBM, BBS, BCA, and Bachelors of Arts in
          Psychology, Social Work, and English. Additionally, it offers Master’s
          programs especially in Master’s of Business Studies (MBS) and Master’s
          of Arts in English, all of which are affiliated with Tribhuvan
          University.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. BBA and BBM</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in CMAT Test</li>
          </ul>
          <span>2. BCA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in BCA Entrance Test</li>
          </ul>
          <span>3. BBS/BA/BSW</span>
          <ul>
            <li>
              Must have scored at least 'D+' Grade in the intermediate, PCL, or
              10+2 level.
            </li>
            <li>
              Must have completed the intermediate, Proficiency certificate or
              10+2 level in Humanities, Management, or Science stream from Nepal
              Education (NEB) Board or from any other Board recognized by
              NEB/TU.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={kmc2}
            alt="Principal"
            className="card-image"
            style={{ maxHeight: "200px" }}
          />
          <div className="card-content">
            <p>
              We seek to instill a passion for learning in our students by
              infusing ethics and values, combined with knowledge and
              understanding, for the positive contribution to society. Equally,
              we believe in constructive and constant participation from our
              guardians too.
            </p>
          </div>
          <p className="principal-name">- Principal, KMC College</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.38983312367!2d85.3189352!3d27.7065564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e5d9fbe3a3%3A0xf18e75698a83bd4a!2sKathmandu%20Model%20College%20(KMC)!5e0!3m2!1sen!2snp!4v1726657119344!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kathmandu Model College Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default KMC;
