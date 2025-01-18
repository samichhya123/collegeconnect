import React from 'react';
import './college.css';
import ncit from "../lalitpur/college image/ncit.jpg";
// import ncit1 from "../lalitpur/images/ncit.jpg";
import logo from "../lalitpur/logo/NCIT_logo-thumbnail-200x200-70.jpg";
import ncit2 from "../lalitpur/principal images/ncit.png";
const NCIT = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={ncit} alt="Background" />
          {/* <img src={ncit1} className="img-front" alt="Front" /> */}
        </div>
      </header>

      <div className="section">
      <img src={logo} alt="College Logo" /> <h2 className="college-name">Nepal College of Information Technology</h2>
        
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Nepal College of Information Technology – NCIT, established in 2001, runs Pokhara University-affiliated Bachelor’s and Master’s programs – BE, BBA, BCA, ME, MSc & MCIS. Our Engineering Degrees are approved by the Nepal Engineering Council. It has produced over a thousand engineers since its establishment.
          <br /><br />
          NCIT, a pioneer private institution providing engineering education in Nepal, is renowned for excellence in teaching & research, while maintaining close and mutually beneficial links with various sectors. The College provides excellent higher education opportunities and nurtures individual talent using an applicable knowledge base that fully supports ongoing social changes and economic advances.
          <br /><br />
          The institution is committed to providing quality education in various engineering disciplines keeping in mind emerging professional needs. Our highly qualified and experienced faculty is fully dedicated to their teaching. We have a state-of-the-art infrastructure to foster academic excellence. Moreover, we provide vital non-credit inputs including research & project work, supplementing the regular courses to meet the diverse learning needs of its students and improve their employability.
          <br /><br />
          The College is also an authorized training partner of CISCO, Red Hat, and Microsoft. It provides related training and conducts preparatory examinations leading to internationally recognized certifications from these renowned institutions. NCIT has MOUs with the Microsoft Innovation Center and many reputed multinational and local companies for internships and training programs.
          <br /><br />
          NCIT envisions an institutional role for itself beyond academic boundaries. It takes the aspirations and future success of its students as a pathway to nation building.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Engineering:</span>
          <ul>
            <li>Applicants need at least Second Division (45%) in +2/equivalent exams or minimum C grade in each subject in XI and XII separately.</li>
            <li>BIOLOGY GROUP STUDENTS ARE ALSO ELIGIBLE TO APPLY.</li>
          </ul>

          <span>2. BCA</span>
          <ul>
            <li>Applicants need at least Second Division (45%) in +2/ equivalent exam or minimum C grade in each subject in XI and XII separately.</li>
            <li>The candidate must have studied Computer Science or Mathematics (100 Marks) in +2/equivalent levels.</li>
          </ul>

          <span>3. BBA</span>
          <ul>
            <li>Applicants need minimum CGPA 1.80 and minimum Grade D in each subject or second division (45%) in +2 exam.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={ncit2} alt="Principal" className="card-image" />
          <div className="card-content">
            <p>
              It gives me immense pleasure to welcome you to the creative and friendly world of NCIT that has a state-of-the-art infrastructure and plenty of resources. We have well-equipped labs, workshops, and libraries to help our students attain the highest standards in academics, research & development, and professional skills.
            </p>
          </div>
          <p className="principal-name">- Principal, Nepal College of Information Technology</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56535.77003715834!2d85.33873831979128!3d27.671381717950407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e8af4a5fe3%3A0x963d00cdf478c6b6!2sNepal%20College%20of%20Information%20Technology!5e0!3m2!1sen!2sus!4v1726500759778!5m2!1sen!2sus"
            width="400"
            height="300"
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

export default NCIT;
