import React from 'react';
import './college.css';
import kct from "../react/college image/kct1.jpg";
import kct1 from "../react/college image/kct.jpg";
import logo from "../react/logo/kct.png";
import kct2 from "../react/principal image/kathmandu college technology.png";
const KathmanduCollegeOfTechnology = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={kct} alt="Background Image" />
          <img src={kct1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Kathmandu College Of Technology</h2>
        <br />
        <img src={logo} alt="College Logo" />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Kathmandu College of Technology (KCT) formerly known as Samajik College is located in Lokanthali, Bhaktapur, Nepal.
          Kathmandu College of Technology (KCT) offers B.Sc in Computer Science and Information Technology (B.Sc CSIT) and Bachelor
          in Computer Application (BCA) in affiliation with Tribhuvan University.
          <br /><br />
          KCT is established with an aim to significantly contribute to shaping the career of +2 graduates in the field of IT and
          Computing. The college understands the advancement of computers and Information Technology which continues to have a profound
          impact on lives. It addresses the need for technically competent graduates to provide appropriate computing solutions that
          the industry requires.
          <br /><br />
          KCT provides fully equipped and specialized computer laboratories right from the beginning of your studies. Apart from the
          curricula designed by the University, students are taught soft skills, problem-solving, critical thinking, and additional
          IT courses relevant to the industry. Both theoretical and practical applications are emphasized, and students are encouraged
          to apply classroom instructions in real-world scenarios.
          <br /><br />
          KCT prepares students for a successful career as an IT professional both in Nepal and around the world.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Business studies (BBS)</span>
          <ul>
            <li>Must have completed PCL or 10+2 in business/commerce or an equivalent course.</li>
            <li>Must have studied English as a full paper in the PCL or 10+2 program.</li>
            <li>Must have secured minimum marks as prescribed by the Faculty Board.</li>
            <li>Must pass the entrance test as prescribed by the Faculty Board.</li>
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
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={kct2}
            alt="Kathmandu College Of Technology"
            className="card-image"
          />
          <div className="card-content">
            <p>
              Welcome to Kathmandu College Of Technology. As the principal of the college, I am proud to introduce you to the
              outstanding academic programs and activities that truly make us an IT College. The college is committed to building
              a vital foundation for studying computing and IT.
            </p>
          </div>
          <p className="principal-name">- Principal, Kathmandu College Of Technology</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.558658242448!2d85.361947!3d27.674349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bb1c2cac4e7%3A0xba4452c1da540a20!2sKathmandu%20College%20of%20Technology!5e0!3m2!1sen!2snp!4v1726845122380!5m2!1sen!2snp"
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

export default KathmanduCollegeOfTechnology;
