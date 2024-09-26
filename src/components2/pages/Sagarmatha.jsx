import React from 'react';
import './college.css';
import sagar from "../lalitpur/college image/sagarmatha.jpg";
import sagar1 from "../lalitpur/college image/sagarmatha2.jpg";
import logo from "../lalitpur/logo/sagarmatha.png";
import sagar2 from "../lalitpur/principal images/sagarmatha.png";
const Sagarmatha = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={sagar} alt="Background Image" />
          <img src={sagar1} className="img-front" alt="Front Image" />
        </div>
      </header>
      <div className="section">
        <h2 className="college-name">Sagarmatha Engineering College</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxWidth: '200px' }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Sagarmatha Engineering College (SEC), affiliated with the Institute of Engineering, Tribhuvan University, is a distinguished educational institution in Nepal. Established in 2010 AD, SEC aims to become a leading center of excellence in engineering education, innovation, and research. The college offers undergraduate programs in Civil Engineering, Computer Engineering, and Electronics, Information & Communication Engineering.
          <br /><br />
          SEC is committed to creating a vibrant learning environment with state-of-the-art infrastructure, including modern facilities, well-equipped laboratories, and a comprehensive library, all designed to promote experiential learning. The college's dedicated faculty members provide personalized guidance and mentorship, ensuring students receive a well-rounded education that goes beyond theoretical knowledge. Additionally, through partnerships with industries, government agencies, and academic institutions, SEC offers practical exposure, internships, and job placement opportunities, helping students transition smoothly from academia to their professional careers.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Electronics, Communication & Information Engineering</span>
          <ul>
            <li>Minimum ‘C’ in all subjects in PCL/+2 with Physics or Biology with Extra Maths</li>
            <li>Students who pass these tests are then allowed to be admitted into TU-affiliated colleges on a merit basis.</li>
          </ul>

          <span>2. Bachelor of Civil Engineering</span>
          <ul>
            <li>The students who have passed the entrance examination conducted by IOE are eligible for admission in IOE constituent campuses and affiliated colleges on merit basis.</li>
          </ul>

          <span>3. Bachelor of Electrical Engineering</span>
          <ul>
            <li>Furthermore, students holding ISc (Physical Group), ISc (Biological Group) with extra Math, Diploma in Engineering, 10+2 in Science (Physical group) and 10+2 in Science (Biological group) with extra Math and scoring at least 50% in the respective examinations are eligible to apply for the entry tests.</li>
            <li>Should compulsorily fulfill the entire application form requirement for the test.</li>
          </ul>

          <span>4. Bachelor of Computer Engineering</span>
          <ul>
            <li>Should have successfully completed twelve years of schooling in the science stream or equivalent from any university, board, or institution recognized by TU. Should have secured a minimum of second division in their +2 or equivalent.</li>
            <li>Should have successfully passed the entrance examination conducted by TU securing at least 35% marks.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chairman</h3>
          <img src={sagar2} alt="Himalaya" className="card-image" style={{ maxHeight: '250px' }} />
          <div className="card-content">
            <p>SEC is committed to creating a vibrant learning environment with state-of-the-art infrastructure, including modern facilities, well-equipped laboratories, and a comprehensive library, all designed to promote experiential learning.</p>
          </div>
          <p className="principal-name">Chairman, Sagarmatha College of Engineering</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9413341412533!2d85.3000031754667!3d27.68820802619358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e60ae8656b%3A0xd8715f2ae901608!2sSagarmatha%20Engineering%20College!5e0!3m2!1sen!2snp!4v1726562464667!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Sagarmatha;
