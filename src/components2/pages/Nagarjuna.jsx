import React from 'react';
import './college.css';
import naga from "../lalitpur/college image/NAGA.jpg";
import naga1 from "../lalitpur/college image/NAGA.png";
import logo from "../lalitpur/logo/NAGA.jpg";
import naga2 from "../lalitpur/principal images/NAGA.png";
const Nagarjuna= () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={naga} alt="Background" />
          <img src={naga1} className="img-front" alt="Front" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Nagarjuna College of Information Technology</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxHeight: '100px' }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Nagarjuna College of Information Technology (NCIT) excellently managed by Nagarjuna group of Institutions,
          is a dynamic educational institution. It has been successfully running B.Sc.CSIT, BCA, BIM, BBM, and BBS programmes
          in affiliation with Tribhuvan University. NCIT has been founded with a set of academicians and entrepreneurs to meet
          the global demand for qualified and skilled manpower in the field of science and technology with a special focus on IT and Management.
        </p>
        <p>
          NCIT believes that students should not be just bookworms therefore we make our effort to provide them great deals of
          opportunities to broaden not only subject knowledge but also their comprehensive knowledge with career developments.
          It is equipped with the latest technology resources, making it an ideal center for education characterized by its stimulating
          and supportive environment.
        </p>
        <p>
          It has a very convenient location, just the other side of the Sankhmul Bridge from Baneshower on the way to Bagalamukhi temple, Lalitpur, Nepal.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Information Management (BIM)</span>
          <ul>
            <li>Applicants should have a minimum grade 'C' (1.8 CGPA) in all subjects of grade 11 and 12 or minimum score of second division marks in 10+2, PCL or equivalent in any discipline.</li>
            <li>Applicants should score a minimum of 40 marks in CMAT.</li>
          </ul>

          <span>2. B.Sc CSIT</span>
          <ul>
            <li>Minimum 'C' grade in all subjects in PCL/+2 in Science (Physics or Biology)</li>
            <li>PASSED in TU IOST Entrance Exam</li>
          </ul>

          <span>3. BCA</span>
          <ul>
            <li>Minimum 'C' grade in all subjects in PCL/+2</li>
            <li>PASSED in BCA Entrance Test</li>
          </ul>

          <span>4. BBM</span>
          <ul>
            <li>Minimum 'C' grade in all subjects in PCL/+2</li>
            <li>PASSED in CMAT Test</li>
          </ul>

          <span>5. Bachelors in Business Studies (BBS)</span>
          <ul>
            <li>Students who have passed 10+2 or equivalent examinations from the recognized academic institutes with second division (securing 45% and above) or 1.8 CGPA are eligible to enroll in this program</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={naga2} alt="Nagarjuna College Principal" className="card-image" style={{ maxHeight: '250px' }} />
          <div className="card-content">
            <p>NCIT believes that students should not be just bookworms therefore we make our effort to provide them great deals of opportunities to broaden not only subject knowledge but also their comprehensive knowledge with career developments.</p>
          </div>
          <p className="principal-name">- Principal, Nagarjuna College of Information Technology (NCIT)</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.853049485157!2d85.3298751!3d27.6798028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ca771e9e55%3A0xc94f84d1f057520f!2sNagarjuna%20College%20of%20IT!5e0!3m2!1sen!2snp!4v1726566630914!5m2!1sen!2snp"
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

export default Nagarjuna;
