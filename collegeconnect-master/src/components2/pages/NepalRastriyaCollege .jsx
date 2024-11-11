import React from 'react';
import './college.css'; 
import nrc from "../college image/nr2.jpg";
import nrc1 from "../college image/nr.jpg";
import logo from "../logo/nr.png";
import nrc2 from "../principal immage/nrr.png";
const NepalRastriyaCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={nrc} alt="Background Image" />
          <img
            src={nrc1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>
      <section className="section">
        <h2 className="college-name">Nepal Rastriya College</h2>
        <br />
        <img
          src={logo}
          alt="College Logo"
          style={{ maxWidth: '200px' }}
        />
        <br />
      </section>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          N.R. College is an institution of higher education that ensures the
          interactive professional advancement manifested through morality based
          on strength and synthesis for reverent ethical, social unity, integrity
          and holistic development. This college was established in 2063 B.S. It
          is located at the north of Kathmandu Valley at Tarakeshwor – 11,
          Nepaltar, Kathmandu. It is run by a team of highly qualified, trained,
          enthusiastic and dedicated teachers. Its motto is to achieve academic
          excellence for the advancement of knowledge to face challenges in the
          practical life. Presently, N.R. College runs Bachelor of Business
          Studies (BBS), Bachelor of Education (B.Ed.), Bachelor in Art’s
          (BA), Masters in Business Studies (MBS) program, and Masters in Arts
          (MA_Sociology) programs in affiliation with Tribhuvan University.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor in Business Studies (BBS)</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from the
              recognized academic institutes with second division (securing 45%
              and above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>

          <span>2. Bachelor of Arts (BA)</span>
          <ul>
            <li>
              Must have completed the intermediate, Proficiency Certificate or
              10+2 level, in Humanities or Science or Management Stream from
              Tribhuvan University or from any other University or Board
              recognized by Tribhuvan University
            </li>
            <li>
              Students desirous of studying Major English/Economics in the BA
              Program may do so, but are required to pass the Major English
              Subject within three years at +2 or PCL recognized by TU if they
              have not already studied this course at +2 or PCL Level
            </li>
            <li>
              Students who have studied any other subject at +2 or PCL level can
              apply for admission to Major subjects like Rural Development, Social
              Work and Sociology in the BA Program.
            </li>
            <li>
              Students desirous of studying Journalism and Mass Communication as a
              Major subject in BA program must have studied Journalism/Mass
              Communication at +2 or PCL can apply for Journalism subject.
            </li>
          </ul>

          <span>3. Bachelor of Education (BEd)</span>
          <ul>
            <li>
              Students who have completed 10+2 or equivalent examinations securing
              minimum 'D+' grade in all subjects of Grade 11 and 12 are eligible
              to enroll in B.Ed program of Tribhuvan University.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Campus Chief</h3>
          <img
            src={nrc2}
            alt="Nepal Rastriya College"
            className="card-image"
            style={{ maxHeight: '250px' }}
          />
          <div className="card-content">
            <p>
              N.R. college is an institution of higher education that ensures the intellectual professional advancement manifested through morality based on strength and synthesis for reverent ethical, social unity, integrity and holistic development.
            </p>
          </div>
          <p className="principal-name">- Campus Chief, Nepal Rastriya College</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14124.878285426388!2d85.3018123!3d27.7413728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18d02714ee79%3A0x7e573c5124725e8a!2sN.R.%20College!5e0!3m2!1sen!2snp!4v1726665882005!5m2!1sen!2snp"
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

export default NepalRastriyaCollege;
