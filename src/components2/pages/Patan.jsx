import React from "react";
import "./college.css";
import patan from "../lalitpur/college image/patan.jpg";
import patan1 from "../lalitpur/college image/patan2.png";
import logo from "../lalitpur/logo/patan.png";
import patan2 from "../lalitpur/principal images/patan.png";
const Patan = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={patan} alt="Background Image" />
          <img
            src={patan1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>

      <section className="section">
        <h2 className="college-name">Patan Multiple Campus</h2>
        <img
          src={logo}
          alt="College Logo"
          style={{ maxHeight: "150px" }}
        />
      </section>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Patan Multiple Campus was established on 2011 B.S.(1954) before birth
          of Tribhuvan University. 'Patan Multiple College' in 1973 it is
          entered as constituent campus of Tribhuvan University in named Patan
          Multiple Campus.
          <br />
          <br />
          Patan Multiple Campus is one of the most popular constituent campus of
          Tribhuvan University. It occupied about 27,296 sq m area. The campus
          is situated at Patan Dhoka, Lalitpur of Nepal which is also known as
          city of Newar community.
          <br />
          <br />
          Patan Multiple campus is a constituent campus of Tribhuvan University,
          it offers both Bachelors and Masters program in the faculties of
          Humanities and social sciences, Faculty of Management and Faculty of
          Science.
          <br />
          <br />
          This campus conducts several programs such as general science,
          environment science, masters, different ARTS faculty and Bs.CSIT.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. Bachelor of Science</span>
          <ul>
            <li>
              The candidate must have completed 10+2 or equivalent examinations
              (with Biological Stream) with Minimum 'C' grade in all subjects to
              be eligible for admission in Bachelor of Science (B.Sc) General
              program of Tribhuvan University.
            </li>
          </ul>

          <span>2. BBS</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from the
              recognized academic institutes with second division (securing 45%
              and above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>

          <span>3. BCA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in BCA Entrance Test</li>
          </ul>

          <span>4. Bachelor of Arts</span>
          <ul>
            <li>
              Students should have secured at least D+ in all subjects in Grade
              11 and Grade 12.
            </li>
            <li>
              Must have completed the intermediate, Proficiency Certificate or
              10+2 level, in Humanities or Science or Management Stream from
              Tribhuvan University or from any other University or Board
              recognized by Tribhuvan University.
            </li>
            <li>
              Students who have studied any other subject at +2 or PCL level can
              apply for admission to Major subjects like Rural Development,
              Social Work and Sociology in the BA Program.
            </li>
            <li>
              Students desirous of studying Journalism and Mass Communication as
              a Major subject in BA program must have studied Journalism/Mass
              Communication at +2 or PCL can apply for Journalism subject.
            </li>
          </ul>

          <span>5. B.Sc CSIT</span>
          <ul>
            <li>
              Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics or
              Biology)
            </li>
            <li>PASSED in TU IOST Entrance Exam</li>
          </ul>

          <span>6. BBA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in CMAT Test</li>
          </ul>

          <span>7. Bachelor of Arts in Social Work</span>
          <ul>
            <li>
              Students seeking admission in Social Work must have secured at
              least D+ in all subjects in Grade 11 and Grade 12.
            </li>
            <li>
              Passed + 2 or Intermediate or PCL from TU or from any other
              institution recognized by TU with a minimum of 45% marks.
            </li>
          </ul>

          <span>8. Bachelors in Information Technology (BIT)</span>
          <ul>
            <li>
              Passed Proficiency Certificate Level or Equivalent Examination
              from any faculties taking subjects like English and Mathematics or
              Computer (Students should have studied at least a Mathematics or
              English) subject of 100 pass marks and secured at least second
              division.
            </li>
            <li>
              Passed grade 12 from Higher Secondary or Secondary School in any
              stream but must have studied English and Mathematics or Computer
              Subject of 100/100 marks; students must have taken English,
              Mathematics or Computer (Must have studied at least Mathematics or
              Computer subject) and secured at least C grade. For other
              subjects, he/she should have passed, securing at least Grade Point
              (GPA 1.6) and final CGPA of at least 1.8.
            </li>
            <li>
              Passed A level examination (studying English and Mathematics or
              Computer subject of 100/100 marks) securing D Grade with or
              without small letter.
            </li>
            <li>
              Passed Three Years Diploma in second division from CTEVT by
              studying English and Mathematics or Computer with 100/100 marks
              each.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={patan2}
            alt="Patan"
            className="card-image"
            style={{ maxHeight: "250px" }}
          />
          <div className="card-content">
            <p>
              Patan Multiple Campus, established in 2011 B.S. (1954) before
              Tribhuvan University, is a constituent campus of the university
              since 1973. Located in Patan Dhoka, Lalitpur, it offers Bachelor's
              and Master's programs in Humanities, Management, and Science,
              including BS.CSIT, Environmental Science, and various Arts
              disciplines.
            </p>
          </div>
          <p className="principal-name">- Principal, Patan Multiple Campus</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.6348101171754!2d85.31996573879444!3d27.678060499999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c8e95465bd%3A0x12fd1ad44e20ba1a!2sPatan%20Multiple%20Campus%20(Science%20%26%20IT)!5e0!3m2!1sen!2snp!4v1726565090717!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Patan;
