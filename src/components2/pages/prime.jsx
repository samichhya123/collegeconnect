import React from 'react';
import './college.css';
import prime from "../college image/primee.png";
import prime1 from "../college image/prime1.jpg";
import logo from "../logo/prime.png";
import prime2 from "../principal immage/prime.png";
const PrimeCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={prime} alt="Background Image" />
          <img
            src={prime1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>

      <div className="section">
      <img src={logo} alt="College Logo" />  <h2 className="college-name">Prime College</h2>
       
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Prime College is an educational institution striving to deliver practical-based education, empowering young minds and cultivating a culture of excellence among skilled individuals. We offer diverse academic programs at both undergraduate and graduate levels. Our dedicated faculty members bring their extensive expertise to the classroom, fostering a dynamic learning environment. We aspire to continue as one of the leading educational institutions where students not only develop intellectually but also gain knowledge and skills to become impactful global citizens.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Business Management (BBM):</span>
          <ul>
            <li>
              Successfully completed twelve-year schooling or its equivalent from any university, board OR institution recognized by Tribhuvan University.
            </li>
            <li>
              Minimum D grade in each subject with GPA 1.8 or more in grade 11 and 12 OR Minimum D+ grade in each subject of grade 11 and 12 with CGPA 1.80 or more for those who passed in 2078 or before 2078.
            </li>
            <li>
              Secured at least second division in the 10+2, PCL, or equivalent program.
            </li>
          </ul>

          <span>2. BSc Computer Science and Information Technology (BSc CSIT)</span>
          <ul>
            <li>
              Should have successfully completed twelve years of schooling in the science stream or equivalent from any university, board or institution recognized by TU.
            </li>
            <li>
              Should have successfully passed the entrance examination conducted by TU securing at least 35% marks. Complied with all the application procedures.
            </li>
            <li>
              Should have secured a minimum of second division in their +2 or equivalent OR should have secured at least C in all subjects in Grade 11 and Grade 12 by taking Physics and Mathematics of 100 marks.
            </li>
          </ul>

          <span>3. Bachelor of Information Management (BIM)</span>
          <ul>
            <li>60% CMAT Entrance Score, 30% of 10+2 score, and 10% interview.</li>
          </ul>

          <span>4. Bachelor of Computer Application (BCA)</span>
          <ul>
            <li>Minimum D grade in each subject of grade 11 and 12 with a CGPA 1.8 or more.</li>
            <li>
              Minimum score of second division marks in 10+2, PCL, or equivalent in any discipline.
            </li>
            <li>
              Students who have passed grade 11 and are waiting for grade 12 results can also apply. However, they have to submit all the required documents at the time of admission.
            </li>
          </ul>

          <span>5. Bachelor in Business Studies (BBS)</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from the recognized academic institutes with second division (securing 45% and above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chief Academic Advisor</h3>
          <img
            src={prime2}
            alt="Prime College"
            className="card-image"
            style={{ maxHeight: '200px' }}
          />
          <div className="card-content">
            <p>
              Prime College under Prime Educational Inc. sincerely extends its hearty welcome to you. The college runs BSc. CSIT, BCA, BBA, BIM, BBM, MBS, and BBS programs under TU. All of our educational activities are managed successfully so that our cherished goals are realized.
            </p>
          </div>
          <p className="principal-name">- Chief Academic Advisor, Prime College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14128.025155884725!2d85.3027285!3d27.7170921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ef67a22d9f%3A0xedf3e2c86d367586!2sPrime%20College!5e0!3m2!1sen!2snp!4v1726931918165!5m2!1sen!2snp"
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

export default PrimeCollege;
