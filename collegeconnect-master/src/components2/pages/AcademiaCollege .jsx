import React from "react";
import "./college.css";
import academiaCollege from "../lalitpur/college image/ACADEMIA.jpg";
import AcademiaCollege1 from "../lalitpur/college image/ACADEMIA2.jpg";
import logo from "../lalitpur/logo/academia_logo (1).png";
import academia from "../lalitpur/principal images/ACA.png";
const AcademiaCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img
          src={academiaCollege}
            
            alt="Background Image"
          />
          <img
            src={AcademiaCollege1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Academia International College</h2>
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
          Academia International College is one of the premier institutions
          dedicated to providing quality education in a fully-integrated,
          multicultural environment. The college occupies spacious area at
          Lalitpur with excellent facilities. In our Graduate School, we are one
          of the pioneer institutes in Nepal to introduce B.Sc.CSIT program
          offered by Tribhuvan University. Academia International College is
          committed to achieving excellence in the academic development of
          students and professionals. We strongly believe that the Academic
          Programs at Academia is going to acquire a distinguished reputation of
          being the most rigorous and fulfilling course in the category.
          <br />
          <br />
          Our education system must evolve to keep pace with mighty changes
          occurring today in business, industry, and society. Students must
          develop attributes and knowledge beyond traditional constraints of the
          classroom. Education System must be designed to accommodate current
          trends and future needs. It must create more connections and stronger
          partnership with the global society in which we are embedded. Our goal
          is to articulate the role of education in the early part of the 21st
          century and to establish design specifications that will enable our
          students to be a leader in shaping the future of the world. As such we
          have an obligation to address the full range of higher education,
          namely: teaching and learning, research, and service to the community.
          Indeed these three elements must be totally integrated if we are able
          to be effective in the pursuit of our mission.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. BBS</span>
          <ul>
            <li>
              Must have successfully completed 10+2 or PCL in business/commerce
              or an equivalent course from a Higher Secondary School Board or
              Tribhuvan University or from other University/Board recognized by
              T.U.
            </li>
            <li>
              Must have studied Mathematics or Economics and English as a full
              paper.
            </li>
            <li>Minimum D+ mark in 10+2 or Pass Mark in PCL.</li>
          </ul>

          <span>2. B.Sc CSIT</span>
          <ul>
            <li>
              Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics or
              Biology)
            </li>
            <li>PASSED in TU IOST Entrance Exam</li>
          </ul>

          <span>3. BCA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in BCA Entrance Test</li>
          </ul>

          <span>4. BBM</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in CMAT Test</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chairman</h3>
          <img
            src={academia}
            alt="Chairman of Academia"
            className="card-image"
          />
          <div className="card-content">
            <p>
              Academia International College is a dynamic and progressive
              educational institute that aims to provide the best possible
              education to the students under its care set within the parameter
              of sound values and a disciplined environment.
            </p>
          </div>
          <p className="principal-name">
            - Chairman, Academia International College
          </p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5802600145776!2d85.32950067525235!3d27.66845527620495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dda8bcff4d%3A0x10d7aa6670ae520d!2sAcademia%20International%20College!5e0!3m2!1sen!2snp!4v1726501625045!5m2!1sen!2snp"
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

export default AcademiaCollege;
