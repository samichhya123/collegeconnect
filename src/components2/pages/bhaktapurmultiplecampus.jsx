import React from 'react';
import './college.css';
import bmc from "../react/college image/bmc1.jpeg";
import bmc1 from "../react/college image/bmc.jpg";
import logo from "../react/logo/bmc.png";
import bmc2 from "../react/principal image/bmc.png";
const BhaktapurMultipleCampus = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={bmc} alt="Background Image" />
          <img src={bmc1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Bhaktapur Multiple Campus</h2>
        <br />
        <img src={logo} alt="College Logo" />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          In the Historical city Bhaktapur, 2016 Kartik 19 B.S. has been marked as one of the most
          important dates in terms of education. The sole reason behind it was the establishment of
          Bhaktapur Multiple Campus which sparkled as the stepping stone of education for the youngest
          city in Kathmandu Valley.
        </p>
       
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Information Management (BIM)</span>
          <ul>
            <li>
              Successfully completed twelve-year schooling or its equivalent from any university, board,
              or institution recognized by Tribhuvan University.
            </li>
            <li>
              Minimum D+ grade in each subject of grade 11 and 12 with CGPA 1.80 or more / Secured at
              least second division in the 10+2, PCL, or equivalent program.
            </li>
          </ul>

          <span>2. Bachelor of Business Management (BBM)</span>
          <ul>
            <li>
              Successfully completed twelve-year schooling or its equivalent from any university, board
              or institution recognized by Tribhuvan University.
            </li>
            <li>Minimum D grade in each subject with GPA 1.8 or more in grade 11 and 12.</li>
          </ul>

          <span>3. Bachelor of Business Administration (BBA)</span>
          <ul>
            <li>
              Minimum D+ grade in each subject of grade 11 and 12 with CGPA 1.80 or more / Secured at
              least second division in the 10+2, PCL, or equivalent program.
            </li>
            <li>
              Successfully completed twelve-year schooling or its equivalent from any university, board,
              or institution recognized by Tribhuvan University.
            </li>
          </ul>
          <span>4. Bachelor of Arts (BA)</span>
        <ul>
            <li>Students should have secured at least D+ in all subjects in Grade 11 and Grade 12.</li>
        </ul>

        <span>5. Bachelor in Business Studies (BBS)</span>
        <ul>
            <li>Students who have passed 10+2 or equivalent examinations from recognized academic institutes with second division (securing 45% and above) or 1.8 CGPA are eligible to enroll in this program.</li>
        </ul>

        <span>6. BSc Computer Science and Information Technology (BSc CSIT)</span>
        <ul>
            <li>Should have successfully completed twelve years of schooling in the science stream or equivalent from any university, board, or institution recognized by TU.</li>
            <li>Should have successfully passed the entrance examination conducted by TU securing at least 35% marks. Compiled with all the application procedures.</li>
            <li>Should have secured a minimum of second division in their +2 or equivalent OR should have secured at least C in all subjects in Grade 11 and Grade 12 by taking Physics and Mathematics of 100 marks.</li>
        </ul>

        <span>7. Bachelor of Computer Application (BCA)</span>
        <ul>
            <li>Minimum D grade in each subject of grade 11 and 12 with a CGPA 1.8.</li>
            <li>Minimum score of second division marks in 10+2, PCL, or equivalent in any discipline.</li>
            <li>Students who have passed grade 11 and are waiting for grade 12 results can also apply. However, they have to submit all the required documents at the time of admission.</li>
        </ul>

       
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Campus Chief</h3>
          <img src={bmc2} alt="Campus Chief" className="card-image" />
          <div className="card-content">
            <p>
              As we all know, the establishment of an educational institution in the Rana Regime was mostly
              just on paper, and it’s a bitter truth. In that era, in Bhaktapur, there was just one school named
              Bhaktapur English School and one Sanskrit Pathshala and Kanya Pathshala as the learning centers
              for education.
            </p>
          </div>
          <p className="principal-name">- Campus Chief, Bhaktapur Multiple Campus</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14134.237338759369!2d85.4208909!3d27.6691024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aa39515e461%3A0x8a1b8a0147782c1d!2sBhaktapur%20Multiple%20Campus!5e0!3m2!1sen!2snp!4v1726844575258!5m2!1sen!2snp"
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

export default BhaktapurMultipleCampus;
