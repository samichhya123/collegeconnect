import React from "react";
import "./college.css";
import acme from "../college image/acme.jpg";
import acme1 from "../college image/acme2.jpg";
import logo from "../logo/acme.png";
import acme2 from "../principal immage/acme.png";
const AcmeEngineeringCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={acme} alt="Background Image" />
          <img
            src={acme1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Acme Engineering College</h2>
        <br />
        <img
          src={logo}
          alt="College Logo"
          style={{ maxWidth: "200px" }}
        />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Acme Engineering College, established in 2000 A.D., aims to provide
          quality education and has grown to become a leading center for
          engineering education in Nepal within a short span of its history.{" "}
          <br />
          Since its establishment, the Acme Engineering College has gained
          national and international reputation for academic excellence in
          teaching and research. Its programs - B.E./B. Arch and M.Sc. - are
          recognized across the nation and the world, and aim to foster
          intellectual independence, critical thinking, and professional
          excellence in every field they work. <br />
          The College has produced many distinguished scholars on its various
          faculties contributing excellent performance to the different fields
          of engineering community locally and abroad. It has signed MOU with
          various universities and institutes worldwide providing better
          opportunities for academic and cultural exchange between these
          countries allowing students to enhance their academic excellence.{" "}
          <br />
          The college offers Master’s Degree courses in Engineering Management
          and Information System Engineering, Bachelor’s Degree courses in
          Architecture, Civil Engineering, and Computer Engineering. <br />
          The College has many distinguished scholars on its faculty honored by
          their peers for important contributions and excellent performance in
          the field they study. Contact with these hard-working educators offers
          students the best possible entry point to the world of today where
          ideas and technology mesh. <br />
          The College is situated in a very easy location and is very much a
          part of the locality Sitapaila, Kathmandu.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. Bachelor of Architecture (B Arch)</span>
          <ul>
            <li>
              Secured at least C Grade in Physics, Chemistry, Maths and English
              or 45% marks in 10+2 (Science), Diploma in Engineering /
              Architecture /GCE A Level from any Board or University recognized
              by Purbanchal University.
            </li>
            <li>Biological group (without extra math) can also apply.</li>
            <li>
              Pass the entrance exam conducted by the Purbanchal University.
            </li>
          </ul>

          <span>2. Bachelor of Civil Engineering</span>
          <ul>
            <li>
              Must have secured C+ Grade in all subjects in +2 or equivalent.
            </li>
            <li>
              Pass the entrance exam conducted by the Purbanchal University.
            </li>
          </ul>

          <span>3. Bachelor of Computer Engineering</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations with a
              minimum of 50% marks in aggregate and 50% marks in Physics,
              Chemistry, Mathematics (PCM) are eligible to apply for the
              admission in Bachelor of Computer Engineering program under
              Purbanchal University.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={acme2}
            alt="Acme Engineering College"
            className="card-image"
            style={{ maxHeight: "250px" }}
          />
          <div className="card-content">
            <p>
              Being the first engineering college affiliated to Purbanchal
              University, Acme Engineering College has been recognized as one of
              the best 10 engineering colleges within Nepal. 
            </p>
          </div>
          <p className="principal-name">
            - Principal, Acme Engineering College
          </p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.20014078989!2d85.2844258!3d27.7080211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1888ee9916f7%3A0x6188d2022654674!2sACME%20Engineering%20College!5e0!3m2!1sen!2snp!4v1726658294345!5m2!1sen!2snp"
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

export default AcmeEngineeringCollege;
