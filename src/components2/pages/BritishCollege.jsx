import React from "react";
import "./college.css";
import british from "../college image/british1.jpg";
import british1 from "../college image/british2.jpg";
import logo from "../logo/british.png";
import british2 from "../principal immage/british.png";
const BritishCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={british} alt="Background Image" />
          <img
            src={british1}
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
        />  <h2 className="college-name">The British College</h2>
        
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Founded in 2011, The British College offers world-class education for
          aspiring students in Nepal to gain internationally-recognised
          qualifications from their two partner British Universities: the
          University of the West of England (UWE) and Leeds Beckett University
          (LBU). We have successfully established a distinctive identity as the
          pioneering global college in Nepal and offer reputed UK degrees and
          courses that are relevant to the current job market, and enhance the
          employability of each and every student. Our aim is to provide
          students with a global learning experience and worldwide
          opportunities. We are further defined by our local-to-global approach
          in the provision of our degrees and courses which are staffed by
          tutors and administrative personnel from the UK and Nepal. In this
          way, the College provides premium education that compels students and
          staff to be globally-minded - a notion which is further encouraged by
          the multinational companies involved in our student exchange
          programmes and internships. We also believe that supporting and
          interacting with the local community is an integral part of student
          life, and we are committed to achieving excellence in our research and
          upholding the highest standards of integrity.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. BSc (Hons) Cyber Security and Digital Forensics</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>
            2. BHM - BSc. (Hons) International Tourism and Hospitality
            Management
          </span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>3. BA (Hons) Business and Management (BBA)</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>4. BSc (Hons) Computer Systems Engineering</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>5. BSc (Hons) Computer Science - Artificial Intelligence</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Executive Principal</h3>
          <img
            src={british2}
            alt="The British College"
            className="card-image"
            style={{ maxHeight: "200px" }}
          />
          <div className="card-content">
            <p>
              At TBC we strive to offer something different - not just an
              education but a unique global experience. By partnering with two
              highly ranked UK universities, the University of the West of
              England (UWE) and Leeds Beckett University (LBU) for almost ten
              years now, we are able to offer a wide range of British courses
              and degrees which are relevant to the current job market.
            </p>
          </div>
          <p className="principal-name">
            - Executive Principal, The British College
          </p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.257162604583!2d85.3195183!3d27.6921341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b19295555f%3A0xabfe5f4b310f97de!2sThe%20British%20College%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1726657952795!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BritishCollege;
