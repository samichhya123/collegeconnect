import React from "react";
import "./college.css";
import virinchi from "../lalitpur/college image/VIRINCHI.png";
import virinchi1 from "../lalitpur/college image/VIRINCHI.jpg";
import logo from "../lalitpur/logo/virinchi.png";
import virinchi2 from "../lalitpur/principal images/VIRINCHI.png";
const Virinchi = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img
            src={virinchi}
            alt="Background Image"
          />
          <img
            src={virinchi1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>
      <div className="section">
        <h2 className="college-name">Virinchi College</h2>
        <br />
        <img
          src={logo}
          alt="College Logo"
          style={{ maxHeight: "150px" }}
        />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Virinchi College is established with the objective to bridge academia
          with industry. It has been consistently offering global standard
          education for Nepalese students to become job ready.
          <br />
          <br />
          Besides internationally recognized degrees, we offer various valued
          skilled courses that have significantly high demand among the
          industries. Our consistent effort is towards designing and upgrading
          the curriculum, which inculcates a lifelong learning attitude among
          our students. Our effort is to attract probing learners and offer them
          unparalleled learning exposure and experiences.
          <br />
          <br />
          Virinchi is in partnership with Asia e University (AeU), a
          collaborative multinational University established as the outcome of
          the initiative of Asia Cooperation Dialogue (ACD). We run Bachelor of
          Information and Communication Technology (BICT) in Software
          Engineering and Master of Business Administration (MBA) in
          Entrepreneurship of AeU. We focus on making students ready for change,
          inculcate the art of thinking innovatively to solve problems, and
          imbibe behavioral and domain skills with a focus on values to join the
          workforce of a company. Moreover, we are committed to producing
          globally competent graduates who can fit themselves in the
          multi-cultural environment.
          <br />
          <br />
          We believe that we should be timely prepared for the competitive and
          demanding world with ICT expertise, managerial abilities, people
          skills, attitude and abilities to lead, prompt decision-making
          abilities, and a sense of honoring multi-cultural values and norms. We
          are committed to fully grooming every enrolled student.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>
            1. Bachelor of Information and Communication Technology (BICT)
          </span>
          <ul>
            <li>
              Grade 12 from NEB or Equivalent in any stream with an overall
              score of D+ and minimum score of C+ in Mathematics either in Grade
              12 or 10.
            </li>
            <li>
              Cambridge A Level with Grade C in at least 2 subjects in Advanced
              Level and minimum score of C+ in Mathematics either in A Level or
              Grade 10.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={virinchi2}
            alt="Virinchi College"
            className="card-image"
            style={{ maxHeight: "250px" }}
          />
          <div className="card-content">
            <p>
              Virinchi College is established with the objective to bridge
              academia with industry. It has been consistently offering global
              standard education for Nepalese students to become job ready.
            </p>
          </div>
          <p className="principal-name">- Principal, Virinchi College</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4428889158485!2d85.31597057546615!3d27.67270327620255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cb05097d61%3A0x66d083a187176a11!2sVIRINCHI%20COLLEGE!5e0!3m2!1sen!2snp!4v1726569197651!5m2!1sen!2snp"
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

export default Virinchi;
