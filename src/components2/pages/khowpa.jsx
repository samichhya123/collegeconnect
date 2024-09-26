import React from 'react';
import './college.css';
import khwopa from "../react/college image/khowpa1.jpg";
import khwopa1 from "../react/college image/khowpa.jpg";
import logo from "../react/logo/khowpa.png";
import khwopa2 from "../react/principal image/khowpa.png";
const KhwopaEngineeringCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={khwopa} alt="Background Image" />
          <img src={khwopa1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Khwopa Engineering College</h2>
        <br />
        <img src={logo} alt="College Logo" />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Khwopa Engineering College (KhEC), an undertaking of Bhaktapur Municipality, is Nepal's first community-based engineering
          college. KhEC was established in 2001 A.D. (2058 B.S.) in affiliation with the highly esteemed Purbanchal University, Nepal.
          <br />
          KhEC was initiated with the vision of establishing Bhaktapur as the center of excellence, thereby intellectualizing the
          entire society through engineering knowledge.
          <br />
          KhEC aims to provide the nation engineers and architects, dedicated to the country and people, with sound theoretical and
          practical knowledge, competence, and skill. KhEC is dedicated to providing quality education with an affordable fee
          accessible to people from economically common strata of society.
          <br />
          KhEC conducted Bachelor in Civil Engineering (4 Years) and Architecture (5 Years) from 2001, BE in Computer Engineering
          from 2002, and BE in Electronics and Communication Engineering from 2003. Accordingly, KhEC conducted ME in Earthquake
          Engineering from 2005 and MSc in Urban Design and Conservation from 2006.
          <br />
          KhEC is well driven ahead by wise management, competent and enthusiastic academic faculty, and sound physical and academic
          infrastructure, being strongly backed by the people of Bhaktapur. The goals are being well materialized through regular
          classes, in-depth practical assignments, field studies, excursions, and report writing and internal examinations which are
          recipes for the success of every student, are carefully managed.
          <br />
          Within a short span of establishment, KhEC has been an attractive destination for students from all over the Nation who
          aspire to become competent engineers and architects.
          <br />
          KhEC has been felicitated as the best college among affiliated colleges by Purbanchal University in 2076 on the occasion of
          the 26th annual function and closing ceremony of the silver jubilee.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Architecture (B.Arch)</span>
          <ul>
            <li>
              Prospective students with 10+2 or PCL (physical or biological group with at least 100 marks Math) who have secured
              45% in aggregate or Diploma in Engineering or Architecture or an equivalent course from a recognized Board or
              University are eligible to apply. All prospective students must pass the entrance examination and aptitude test
              conducted by the university.
            </li>
          </ul>

          <span>2. Bachelor of Civil Engineering (BE Civil)</span>
          <ul>
            <li>Must have secured a C+ Grade in all subjects in +2 or equivalent.</li>
          </ul>

          <span>3. Bachelor of Computer Engineering (BE Computer)</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations with a minimum of 50% marks in aggregate and 50% marks in
              Physics, Chemistry, and Mathematics (PCM) are eligible to apply for admission.
            </li>
          </ul>

          <span>4. Bachelor in Electronics, Communication and Automation Engineering</span>
          <ul>
            <li>Must have secured a C+ Grade in all subjects in +2 or equivalent.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chairman</h3>
          <img
            src={khwopa2}
            alt="Khwopa Engineering College"
            className="card-image"
          />
          <div className="card-content">
            <p>
              People of Bhaktapur had a dream of at least one graduate per family and ultimately intellectualizing the whole society.
              To realize this dream, Khwopa Engineering College, Khwopa College of Engineering, Khwopa Secondary School, Khwopa
              College, and Khwopa Polytechnic Institute were established.
            </p>
          </div>
          <p className="principal-name">- Chairman, Khwopa College of Engineering</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21458.27407686919!2d85.40108284636469!3d27.681199435073157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb05531bf45063%3A0xeec9e70e9a3ea1cc!2sKhwopa%20College%20of%20Engineering!5e0!3m2!1sen!2snp!4v1726847432057!5m2!1sen!2snp"
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

export default KhwopaEngineeringCollege;
