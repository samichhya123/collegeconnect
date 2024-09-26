import React from 'react';
import './college.css'; // Make sure this path is correct
import quest from "../lalitpur/college image/quest.jpg";
import quest1 from "../lalitpur/college image/quest2.JPG";
import logo from "../lalitpur/logo/quest.png";
import quest2 from "../lalitpur/principal images/quest.png";
const Quest = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={quest} alt="Background Image" />
          <img src={quest1} className="img-front" alt="Front Image" />
        </div>
      </header>
      <div className="section">
        <h2 className="college-name">Quest International College</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxWidth: '200px' }} />
        <br />
      </div>
      
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          QUEST INTERNATIONAL COLLEGE runs Master of Business Administration (MBA), Bachelor of Business Administration (BBA) and Bachelor in Hotel Management (BHM), affiliated to Pokhara University. These highly valued global degrees prepare students with sound knowledge and skills to be self-reliant, and to embark on a rewarding career ahead. The main objective of QIC is to provide quality education. You will know in course of time that we respect individual differences of our students and value each of them as a unique and potential individual to become thoughtful and responsible leaders in the diverse areas of society and global employment market.
          
          At QUEST you will find the excellent learning environment with adequate facilities, modern infrastructure and academic atmosphere. Hence, I would like to invite you at the college premises and hope for further interaction. Thank you for your interest in QUEST.
        </p>
      </div>
      
      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor in Hotel Management (BHM)</span>
          <ul>
            <li>For Grade 12 Graduates till 2078 BS: Pass Grade 12 examination with a minimum CGPA 1.8 and achieve a minimum of D+ grade in every subject in Grade 11 and 12.</li>
            <li>For Grade 12 Graduates from 2079 BS: Pass Grade 12 examination with a minimum CGPA 1.8 and achieve a minimum of D grade in every subject in Grade 11 and 12.</li>
          </ul>
          
          <span>2. Bachelor of Computer System and Information Technology (BCSIT)</span>
          <ul>
            <li>Applicant should have passed intermediate or equivalent in Science to be eligible to apply for this course. They must have acquired 50% score in their intermediate.</li>
          </ul>
          
          <span>3. BBA</span>
          <ul>
            <li>For the year 2078 and before, applicants must have minimum CGPA of 1.8 (At least D+ in each subject).</li>
            <li>For the year 2079 and after, applicants must have minimum CGPA of 1.8 (At least D in each subject).</li>
          </ul>
        </div>
      </div>
      
      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={quest2} alt="Principal" className="card-image" style={{ maxHeight: '250px' }} />
          <div className="card-content">
            <p>
              QUEST INTERNATIONAL COLLEGE runs Master of Business Administration (MBA), Bachelor of Business Administration (BBA) and Bachelor in Hotel Management (BHM), affiliated to Pokhara University. These highly valued global degrees prepare students with sound knowledge and skills to be self-reliant, and to embark on a rewarding career ahead.
            </p>
          </div>
          <p className="principal-name">- Principal, QUEST INTERNATIONAL COLLEGE</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14134.37089806805!2d85.3328768!3d27.6680698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dd0f2a8459%3A0x8cedc88c46edb8c8!2sQuest%20International%20College!5e0!3m2!1sen!2snp!4v1726504649694!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Quest;
