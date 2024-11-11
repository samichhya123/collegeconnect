import React from 'react';
import './college.css';
import national from "../lalitpur/college image/national.jpg";
import national1 from "../lalitpur/college image/national2.jpg";
import logo from "../lalitpur/logo/nce.png";
import national2 from "../lalitpur/principal images/national1.png";
const National= () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={national} alt="Background" />
          <img src={national1} className="img-front" alt="Front" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">National College of Engineering</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxHeight: '150px' }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          National College of Engineering (NCE), affiliated to Tribhuvan University, stands out as one of Nepal’s premier
          institutions for engineering education. Its establishment in 2001 was led by a committed group of experienced university
          educators and professionals. In a fiercely competitive world, our motivation is rooted in serving the educational sector
          rather than solely prioritizing commercial interests. All our endeavors thus far have been dedicated to cultivating skilled
          graduates equipped with essential knowledge and abilities. We trust that you will discover an environment at the college
          that fosters your growth. We extend an invitation to join us in our mission to create an institution of eminence, forming a
          dependable alliance in the journey toward realizing this honorable aspiration.
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

          <span>3. Bachelor of Electrical Engineering</span>
          <ul>
            <li>Students holding ISc (Physical Group), ISc (Biological Group) with extra Math, Diploma in Engineering, 10+2 in Science (Physical group) and 10+2 in Science (Biological group) with extra Math and scoring at least 50% in the respective examinations are eligible to apply for the entry tests.</li>
            <li>Should compulsorily fulfill the entire application form requirement for the test.</li>
          </ul>

          <span>4. BE Electronics, Communication & Information</span>
          <ul>
            <li>Minimum ‘C’ in all subjects in PCL/+2 with Physics or Biology with Extra Maths.</li>
            <li>PASSED in IOE Entrance Exam.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={national2} alt="Principal" className="card-image" style={{ maxHeight: '250px' }} />
          <div className="card-content">
            <p>I would like to thank you for your interest in our National College of Engineering. If you have been exploring for an appropriate academic institution for the career development of your kids or yourself, be assured that you have come to the right destination.</p>
          </div>
          <p className="principal-name">- Principal, National College of Engineering (NCE)</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14135.959417920985!2d85.3202575!3d27.6557856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177db2f5b88d%3A0xa7de95ca9dd9ad6c!2sNational%20College%20Of%20Engineering!5e0!3m2!1sen!2snp!4v1726567934711!5m2!1sen!2snp"
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

export default National;
