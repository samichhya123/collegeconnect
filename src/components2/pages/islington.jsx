import React from 'react';
import './college.css';
import islington from "../college image/islingtion.jpg";
import islington1 from "../college image/islingtion1.png";
import logo from "../logo/islington.jpg";
import islington2 from "../principal immage/islingtion.png";
const College = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={islington} alt="Background Image" />
          <img
            src={islington1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>
      
      <div className="section">
        <h2 className="college-name">Islington College</h2>
        <br />
        <img
          src={logo}
          alt="College Logo"
          style={{ maxWidth: '300px' }}
        />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Established in 1996, Islington College has evolved as a leading brand in the field of IT and Business Education. The exceptional degree programs are offered in direct partnership with London Metropolitan University, UK. This academy offers Bachelors's and Masters's programs in Information Technology and Business Administration. They have been providing all the necessary skills that an individual requires to achieve success through an updated course that will benefit in developing those ideas and implementing them in real life. They endeavor their journey focusing on maximizing their potential and meeting their ambition with an assurance to enhance technical competencies. Islington College provides both bachelor's and master's program which includes BBA, Bachelor's Degree in Computing, Bachelor's Degree in Computer Networking and IT Security, Bachelor's Degree in Multimedia Technologies, and a Master's Degree in Information Technology (Msc. IT).
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. BSc (Hons) Computing</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>2. BSc (Hons) Multimedia Technologies</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>3. Bachelor (Hons) in Accounting and Finance</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>4. Bachelors in Business Administration (International Business)</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>5. Bachelor in Business Administration (Events & Tourism Management)</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>6. Bachelor in Business Administration (Advertising and Marketing)</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>7. BSc (Hons) Mobile Application Development</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>

          <span>8. Bachelors in Accounting and Finance</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chairman</h3>
          <img
            src={islington2}
            alt="Islington"
            className="card-image"
            style={{ maxHeight: '200px' }}
          />
          <div className="card-content">
            <p>
              Welcome to Islington College, the premier college in Nepal, offering world-class IT and Business academic qualifications. Islington College has a long and proud track record in providing high-caliber human capital to the IT and Business industry since 1996.
            </p>
          </div>
          <p className="principal-name">- Chairman, Islington College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.247360759286!2d85.3252364!3d27.7076565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908434cb3c5%3A0x1fdf1a6d41d2512d!2sIslington%20College!5e0!3m2!1sen!2snp!4v1726930193041!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default College;
