import React from 'react';
import './college.css'; 
import ncc from "../college image/ncc1.jpg";
import ncc1 from "../college image/ncc2.jpg";
import logo from "../logo/ncc.png";
import ncc2 from "../principal immage/ncc.png";
const NepalCommerce = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={ncc} alt="Background Image" />
          <img src={ncc1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Nepal Commerce Campus</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxWidth: '200px' }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Nepal Commerce Campus (popularly known as NCC), one of the oldest
          management colleges of Tribhuvan University, was established in 2021 BS
          with zeal of imparting quality education in the country. Nepal Commerce
          Campus-NCC (also known as Minbhawan Campus) is currently offering Six
          different management programs. In Bachelors level it is offering BBA,
          BIM, BBM and BBS. In Masters level it is offering MBS and MBM program.
          Nepal Commerce Campus has been playing an instrumental role in
          industrial and commercial development of the country by producing
          skillful and professional managers since its establishment. It is
          ideally located in the heart of Kathmandu Metropolitan at New Baneshwor
          in a spacious premise. With its experienced, dedicated, enthusiastic
          team of professors, scholars and intellectuals, the college has already
          produced thousands of graduates and post graduates who are consistently
          working as distinguished dignitaries in various posts of civil services,
          private sector as well as outstanding national and international
          institutions. Nepal Commerce Campus, as a leading educational
          institution, has its vision of providing management education compatible
          to changing global environment with the aids of techno-information
          system and committed to team of experienced professionals along with
          imparting practicality of textual and conceptual materials.The vision is
          reflective of the campus motto “CENTER FOR EXCELLENCE”. As a semi
          autonomous, non-for-profit educational institution, the mission of the
          campus is to empower the new generation through practical and research
          based teaching learning processes that will enable them, after the
          completion of course, to achieve stability in the management and
          professional fields to meet requirements of different sections. Nepal
          Commerce campus regulated under the Faculty of Management (FOM) is known
          to be the nation 's biggest and the quality imparting college and it has
          been able to create its own historic moments. In spite of the late
          evolution (17.05.2011) of commerce stream in comparison of other streams
          in different faculties its usefulness and importance have been grown a
          lot and hence it began to flourish academically within the entire
          nation.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Business Administration</span>
          <ul>
            <li>
              Minimum D+ grade in each subject of grade 11 and 12 with CGPA 1.80
              or more / Secured at least second division in the 10+2, PCL or
              equivalent program.
            </li>
            <li>
              Successfully completed twelve-year schooling or its equivalent from
              any university, board, or institution recognized by Tribhuvan
              University.
            </li>
          </ul>

          <span>2. Bachelor in Business Studies</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from the
              recognized academic institutes with second division (securing 45%
              and above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>

          <span>3. Bachelor of Business Management</span>
          <ul>
            <li>
              Successfully completed twelve-year schooling or its equivalent from
              any university, board OR institution recognized by Tribhuvan
              University.
            </li>
            <li>
              Minimum D grade in each subject with GPA 1.8 or more in grade 11 and
              12.
            </li>
            <li>
              Minimum D+ grade in each subject of grade 11 and 12 with CGPA 1.80
              or more who passed in 2078 or before 2078.
            </li>
            <li>
              Secured at least second division in the 10+2, PCL, or equivalent
              program.
            </li>
          </ul>

          <span>4. Bachelor of Information Management</span>
          <ul>
            <li>
              Successfully completed twelve-year schooling or its equivalent from
              any university, board or institution recognized by Tribhuvan
              University.
            </li>
            <li>
              Minimum D+ grade in each subject of grade 11 and 12 with CGPA 1.80
              or more / Secured at least second division in the 10+2, PCL, or
              equivalent program
            </li>
          </ul>

          <span>5. BBA Finance </span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from
              recognized academic institute with second division (securing 45% and
              above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Nepal Commerce</h3>
          <img src={ncc2} alt="Nepal Commerce Campus" className="card-image" style={{ maxHeight: '250px' }} />
          <div className="card-content">
            <p>
              Nepal Commerce Campus has been playing an instrumental role in
              industrial and commercial development of the country by producing
              skillful and professional managers since its establishment. It is
              ideally located in the heart of Kathmandu Metropolitan at
              New-Baneshwor in a spacious premise.
            </p>
          </div>
          <p className="principal-name">- Campus Chief, Nepal Commerce Campus</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.132869991208!2d85.3373568!3d27.6853682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196a81d856df%3A0x3d6ea0a2f299ec8a!2sYouth%20Red%20Cross%20Circle%2C%20Nepal%20Commerce%20Campus!5e0!3m2!1sen!2snp!4v1726664300621!5m2!1sen!2snp"
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

export default NepalCommerce;
