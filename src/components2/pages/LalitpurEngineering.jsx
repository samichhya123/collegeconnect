import React from 'react';
import './college.css';
import lalitpur from "../lalitpur/college image/lalit[ur2.jpg";
import lalitpur1 from "../lalitpur/college image/lalitpur.jpg";
import logo from "../lalitpur/logo/lalitpurc.png";
import lalitpur2 from "../lalitpur/principal images/lalit[ur.png";
const LalitpurEngineering = () => {
  return (
    <>
      <header>
        <div className="img-area">
          <img src={lalitpur} alt="Background" />
          <img src={lalitpur1} className="img-front" alt="Front" />
        </div>
      </header>
      
      <div className="section">
        <h2 className="college-name">Lalitpur Engineering College</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxHeight: '150px' }} /><br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          To accomplish the aim of LEC and keeping for future growth, the college is fully equipped with all dimensions which should be in a Quality Learning Center. For instance: the central location of the college near Patandhoka – Chakupat, established by a group of visionary Nepalese eminent professionals, furnished with adequate labs (Prescribed by Nepal Engineering Council and Institute of Engineering, Tribhuvan University), peaceful academic environment, well-established and renowned professional teachers, sufficient playgrounds (Basketball, Table Tennis, Badminton), adequate parking facilities, and other necessary facilities are the key strengths of the college, attracting parents and students to choose LEC to shape their engineering dreams. LEC has a focused vision towards quality teaching and learning. We aim to deliver the best to shape students well prepared for the industry.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Civil Engineering</span>
          <ul>
            <li>The students who have passed the entrance examination conducted by IOE are eligible for admission in IOE constituent campuses and affiliated colleges on merit basis.</li>
          </ul>

          <span>2. Bachelor of Computer Engineering</span>
          <ul>
            <li>Should have successfully completed twelve years of schooling in the science stream or equivalent from any university, board, or institution recognized by TU. Should have secured a minimum of second division in their +2 or equivalent.</li>
            <li>Should have successfully passed the entrance examination conducted by TU securing at least 35% marks.</li>
          </ul>

          <span>3. BCA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>Passed in BCA Entrance Test</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={lalitpur2} alt="Principal" className="card-image" style={{ maxHeight: '250px' }} />
          <div className="card-content">
            <p>
              LEC has defined its model, size, and organization to manage its quality more efficiently in the new competitive context. The organization is aimed at growing and boosting quality education by using a more functional structure through greater integration of enthusiastic students, guardians, and scholars. LEC, with modern infrastructure, well-equipped library, laboratory, and other educational facilities.
            </p>
          </div>
          <p className="principal-name">- Principal, Lalitpur Engineering College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.727589921571!2d85.3256648!3d27.6807724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c795792897%3A0xd2064f344bb0abd!2sLalitpur%20Engineering%20College!5e0!3m2!1sen!2snp!4v1726564161663!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default LalitpurEngineering;
