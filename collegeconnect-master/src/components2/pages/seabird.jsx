import React from 'react';
import './college.css';
import seabird from "../react/college image/seabird1.jpg";
import seabird1 from "../react/college image/seabird.jpg";
import logo from "../react/logo/seabird.jpg";
import seabird2 from "../react/principal image/seabird.png";
const SeabirdInternationalCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={seabird} alt="Background Image" />
          <img src={seabird1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Seabird International College</h2>
        <br />
        <img src={logo} alt="College Logo" />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Seabird International College is an academic shrine for the meritorious and promising students who wish to dedicate their lives towards enhancing
          the quality of managerial, scientific and pedagogical skills through hard work and perseverance. The College promises to impart quality education to
          the young minds who can visualize this world from the broader perspective. Run by a team of dedicated, highly experienced and professional
          academicians, it offers courses of +2 program on management, science & education streams based on curriculum designed and approved by NEB and the
          Bachelor of Business Studies (BBS) affiliated to TU. Seabird has also been running its basic level education along with Montessori. The prime aim of
          the College is to deliver the creative and innovative education with proper practical knowledge of Management, Education and Science and Technology.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Business studies (BBS)</span>
          <ul>
            <li>Must have successfully completed the PCL or 10+2 in business/commerce or an equivalent course from a Higher Secondary School Board, or from Tribhuvan University, or from any other University/Board recognized by TU.</li>
            <li>Must have studied English as a full paper at the PC level or 10+2 program.</li>
            <li>Must have secured the minimum marks at the PC level or 10+2 program as prescribed by the Faculty Board or the campus concerned.</li>
            <li>Must satisfy any other entry requirements or criteria including the entrance test as prescribed by the Faculty Board or the campus.</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Academic Director</h3>
          <img src={seabird2} alt="Seabird International College" className="card-image" />
          <div className="card-content">
            <p>
              Seabird International College is one of the reputed, well-organized and fully dedicated academic organizations to provide quality education. The students of this college can lead in any sector because we are providing the conducive academic environment to fulfill our slogan that is “Education for Leadership & Development”.
            </p>
          </div>
          <p className="principal-name">- Academic Director, Seabird International College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.970646172622!2d85.3876739!3d27.6711642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a7ac2621c07%3A0x5d4cbc08cbb603d5!2sSeabird%20International%20College!5e0!3m2!1sen!2snp!4v1726849310240!5m2!1sen!2snp"
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

export default SeabirdInternationalCollege;
