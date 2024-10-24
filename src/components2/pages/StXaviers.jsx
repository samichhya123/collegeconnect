import React from "react";
import "./college.css"; 
import stxaviers from "../college image/st xavier.jpg";
import stxaviers1 from "../college image/stxavier2.png";
import logo from "../logo/st xavier.png";
import stxaviers2 from "../principal immage/st.png";
const StXaviers = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={stxaviers} alt="Background Image" />
          <img
            src={stxaviers1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>
      <div className="section">
      <img
          src={logo}
          alt="College Logo"
          style={{ maxHeight: "150px" }}
        />  <h2 className="college-name">St. Xavier's College</h2>
        
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          ST. XAVIER’S COLLEGE, Kathmandu, is an educational institution of
          higher learning established and managed by the Nepal Jesuit Society.
          The Jesuits began their educational work in Nepal in 1951 with the
          opening of St. Xavier’s School, Godavari, followed by St. Xavier’s
          School, Jawalakhel, St. Xavier’s School, Deonia, Moran Memorial
          School, Maheshpur, and St. Xavier’s School, Sadakbari. The Jesuits
          have served people of all faiths, all over the world, as educators,
          scientists, explorers, and social reformers since 1540. The
          centuries-old tradition of service to others is the cornerstone of
          Jesuit education. Every institute and organization established by the
          Jesuits in Nepal prepares each student to Live for God and Lead for
          Nepal. The education programme is designed to foster critical
          thinking, positive action, and service to others. It challenges
          students to look beyond career and have a wider vision of being
          channels of betterment. It encourages every student to be a job
          creator rather than a job seeker and to play the role of being a
          creative designer of the future.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>
            1. BE Computer/Civil/Electronics, Communication & Information:
          </span>
          <ul>
            <li>
              Minimum ‘C’ in all subjects in PCL/+2 with Physics or Biology with
              Extra Maths
            </li>
            <li>PASSED in IOE Entrance Exam</li>
          </ul>

          <span>2. B.Sc CSIT</span>
          <ul>
            <li>
              Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics or
              Biology)
            </li>
            <li>PASSED in TU IOST Entrance Exam</li>
          </ul>

          <span>3. Bachelor of Information Management (BIM)</span>
          <ul>
            <li>
              60% CMAT Entrance Score, 30% of 10+2 score, and 10% interview
            </li>
          </ul>

          <span>4. Bachelor of Arts (BA)</span>
          <ul>
            <li>
              Must have completed Intermediate level in Humanities or Management
              or Science or any other related academic course recognized by
              Tribhuvan University.
            </li>
            <li>Must have scored at least D+ in each subject.</li>
            <li>
              Must satisfy the criteria as prescribed by St. Xavier's College.
            </li>
          </ul>

          <span>5. Bachelor of Arts in Social Work (BASW)</span>
          <ul>
            <li>
              Students seeking admission in Social Work must have secured at
              least D+ in all subjects in Grade 11 and Grade 12.
            </li>
            <li>
              Passed +2 or Intermediate or PCL from TU or from any other
              institution recognized by TU with a minimum of 45% marks.
            </li>
          </ul>

          <span>6. Bachelor of Arts in Psychology (BPSy)</span>
          <ul>
            <li>
              Students are required to have completed their Intermediate or
              equivalent qualifications in any discipline with good marks.
            </li>
          </ul>

          <span>
            7. Bachelor of Arts in Journalism and Mass Communication (BAJM)
          </span>
          <ul>
            <li>
              Students are required to have completed their Intermediate or
              equivalent qualifications in any discipline with Journalism (100
              marks). Students who opt for major English and Journalism should
              have studied these subjects at their intermediate level.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={stxaviers2}
            alt="St. Xaviers College"
            className="card-image"
          />
          <div className="card-content">
            <p>
              St. Xaviers College is a community of educators comprising its
              past and present students, parents, staff, management, and
              collaborators dedicated to providing higher education in Nepal in
              the Jesuit tradition of integrating intellectual growth with
              physical, spiritual, emotional, and social development through
              various studies and activities.
            </p>
          </div>
          <p className="principal-name">- Principal, St. Xaviers College</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.104778013514!2d85.3211291!3d27.6933113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b032e93fc1%3A0x4a61dc499d928027!2sSt.%20Xavier&#39;s%20College!5e0!3m2!1sen!2snp!4v1726666745023!5m2!1sen!2snp"
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

export default StXaviers;
