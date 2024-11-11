import React from 'react';
import './college.css';
import culinary from "../lalitpur/college image/aca.jpg";
import culinary1 from "../lalitpur/college image/accaa.png";
import logo from "../lalitpur/logo/acca.png";
import culinary2 from "../lalitpur/principal images/acca.png";
const CulinaryAcademy = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={culinary} alt="Background" />
          <img src={culinary1} className="img-front" alt="Front" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Academy of Culinary Arts and Hospitality Management</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxHeight: '150px' }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          With a proven track record of more than a decade, Academy of Culinary Arts and Hospitality Management takes pride in being one of the leading providers of hospitality and culinary education in Nepal.
          <br />
          <br />
          The institution set forth on its journey in 2010 with a Diploma course in Culinary Arts, and took the initiative to another level in 2014 by offering a Bachelor of Science (Hons) in Hospitality Management program in affiliation with Lincoln University College, Malaysia. Along with these flagship programs, the institution over the years has also been catering to the specific needs of professionals and hobbyists alike through modular courses in the sphere of culinary skills and hotel management.
          <br />
          <br />
          With the introduction of Center for Leadership and Entrepreneurship (CLE College) in 2021, Academy of Culinary Arts and Hospitality Management now functions as a subsidiary body under the larger umbrella of this parent entity.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelors of Science (Hons.) in Hospitality Management (BHM)</span>
          <ul>
            <li>Students who have successfully completed or expect to successfully complete a Plus Two degree or equivalent in any discipline (with English as a compulsory course)</li>
            <li>Securing at least 2 CGPA or 45% aggregate score from a school/college/university recognized by Nepal government</li>
          </ul>

          <span>2. Bachelor Of Business Administration (BBA)</span>
          <ul>
            <li>As per the criteria set by the University, students who have successfully completed or expect to successfully complete a Plus Two degree or equivalent securing at least 2 CGPA or 45% aggregate score in any discipline from a School/College/University recognized by Nepal government are eligible to apply for enrollment into the program.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={culinary2} alt="Academy of Culinary Arts and Hospitality Management" className="card-image" style={{ maxHeight: '250px' }} />
          <div className="card-content">
            <p>
              We believe in academic excellence and social commitment to creating aspiring hoteliers with proper principles, ethics & values. Our students have been placed in reputed hotels, restaurants and cruise lines in various parts of the world. Their success stories of progress in careers keep flowing in with thank you notes for the CLE College management.
            </p>
          </div>
          <p className="principal-name">- Principal, Academy of Culinary Arts and Hospitality Management</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14134.533863696073!2d85.3208347!3d27.6668098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d11a88832b%3A0x6fc38aa10ab5d21a!2sAcademy%20of%20Culinary%20Arts%20and%20Hospitality%20Management!5e0!3m2!1sen!2snp!4v1726568537172!5m2!1sen!2snp"
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

export default CulinaryAcademy;
