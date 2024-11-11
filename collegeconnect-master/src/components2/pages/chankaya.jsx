import React from 'react';
import './college.css';
import chankaya from "../react/college image/chankaya.jpg";
import chankaya1 from "../react/college image/chankayaaa.png";
import logo from "../react/logo/chanakaya.png";
import chankaya2 from "../react/principal image/chanakya.png";
const ChanakyaCollegeOfManagement = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={chankaya} alt="Background Image" />
          <img src={chankaya1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Chanakya College of Management</h2>
        <br />
        <img src={logo} alt="College Logo" />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Chanakya, over the years, has evolved as one of the best education providers in the country. Since our establishment in 2066 BS, we have been a leading institution adopting student centric teaching and learning practices for the pursuit of academic excellence and holistic development of our students.
        </p>
        <p>
          Chanakya stands out with its nurturing space where students can share, grow, create bonds, build networks, nourish their minds and be ready for the world. We have designed an experiential journey for our students where they strengthen their knowledge in the classroom and enhance their learnings beyond the classroom, ensuring an admirable development of skills and proper mindset in the process. The journey certainly encourages our students to broaden their horizon of approaches of understanding and addressing issues of the complex system where the world functions today. An open-door policy is adopted for required personal assistance to the students during the thought provoking learning, unlearning and relearning process.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Business Studies (BBS)</span>
          <ul>
            <li>
              Must have successfully completed the PCL or 10+2 in business/commerce or an equivalent course from a Higher Secondary School Board, or from Tribhuvan University, or from any other University/Board recognized by TU.
            </li>
            <li>Must have studied English as a full paper at the PC level or 10+2 program.</li>
            <li>
              Must have secured the minimum marks at the PC level or 10+2 program as prescribed by the Faculty Board or the campus concerned.
            </li>
            <li>
              Must satisfy any other entry requirements or criteria including the entrance test as prescribed by the Faculty Board or the campus.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chairman</h3>
          <img src={chankaya2} alt="Chanakya College of Management" className="card-image" />
          <div className="card-content">
            <p>
              In Nepal and throughout the world, major revolutions are taking place in the field of higher education. Given this reality, Chanakya was founded with the goal to offer strong curriculum knowledge with a value-added understanding of the same, in order to foster pragmatism among our students. At Chanakya, we have a pool of outstanding educators to launch new avenues in the education system.
            </p>
          </div>
          <p className="principal-name">- Chairman, Chanakya College of Management</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.754399349833!2d85.3827882!3d27.6728359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a6e2f47e02d%3A0xf58a96cadfa01e05!2sChanakya%20College%20of%20Management!5e0!3m2!1sen!2snp!4v1726849546580!5m2!1sen!2snp"
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

export default ChanakyaCollegeOfManagement;
