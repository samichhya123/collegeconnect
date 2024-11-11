import React from 'react';
import './college.css';
import nepal from "../react/college image/nepal enginerring college.jpg";
import nepal1 from "../react/college image/nepal enginerring college1.jpg";
import logo from "../react/logo/national engineering collge.png";
import nepal2 from "../react/principal image/national engineering.png";
const NepalEngineeringCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={nepal} alt="Background Image" />
          <img src={nepal1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Nepal Engineering College (nec)</h2>
        <br />
        <img src={logo} alt="College Logo" />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Nepal Engineering College (nec) is a renowned academic institute, serving as a cornerstone for the country's development
          through its commitment to providing quality engineering education. Established in 1994 by a group of visionary professionals
          and academicians, nec has since been instrumental in shaping the academic landscape of Nepal. As a not-for-profit institution,
          nec prioritizes academic excellence, ensuring that students receive the best possible education while fostering an environment
          conducive to innovation and intellectual exploration. nec not only equips its students with the necessary skills and knowledge
          but also instills in them a sense of responsibility towards their communities and the nation as a whole.
          <br />
          The Center for Postgraduate Studies (nec-CPS) further enhances nec's academic offerings by providing specialized postgraduate
          programs in engineering and related sciences. Located in Prayag Pokhari, Lagankhel, Lalitpur, Kathmandu, nec-CPS offers a
          diverse range of master's programs tailored to meet the evolving demands of various industries and sectors. From M.Sc.
          Construction Management to M.Sc. Transportation Engineering and Management, nec-CPS ensures that students have access to
          cutting-edge education that prepares them for the challenges of the modern world. Additionally, with programs like M.Sc.
          Natural Resources Management and M.Sc. Interdisciplinary Water Resources Management, nec-CPS addresses critical issues such
          as sustainability and resource management, reflecting its commitment to producing socially responsible and environmentally
          conscious professionals.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Computer Engineering (BE Computer)</span>
          <ul>
            <li>The candidates should have completed Class 12 examination of NEB or equivalent level from a recognized academic institution.</li>
            <li>
              The candidates should have scored a minimum of 45% or a CGPA/GPA of 2.0 (in a scale of 4.0) and at least Grade C (in case of A-level, at least
              Grade D) or 45% in each subject (Physics, Chemistry, and Mathematics).
            </li>
            <li>The candidates should have studied at least one course (having at least 100 full marks or 5 credits) each in Physics, Chemistry, and Mathematics.</li>
          </ul>

          <span>2. Bachelor of Electrical and Electronics Engineering</span>
          <ul>
            <li>The candidates should have completed Class 12 examination of NEB or equivalent level from a recognized academic institution.</li>
            <li>The candidates should have studied at least one course (having at least 100 full marks or 5 credits) each in Physics, Chemistry, and Mathematics.</li>
            <li>
              The candidates should have scored a minimum of 45% or a CGPA/GPA of 2.0 (in a scale of 4.0) and at least Grade C (in case of A-level, at least Grade
              D) or 45% in each subject (Physics, Chemistry, and Mathematics).
            </li>
          </ul>

          <span>3. Bachelor of Architecture (B.Arch)</span>
          <ul>
            <li>The candidates should have completed Class 12 examination of NEB or equivalent level from a recognized academic institution.</li>
            <li>The candidates should have studied at least one course (having at least 100 full marks or 5 credits) each in Physics, Chemistry, and Mathematics.</li>
            <li>
              The candidates should have scored a minimum of 45% or a CGPA/GPA of 2.0 (in a scale of 4.0) and at least Grade C (in case of A-level, at least Grade
              D) or 45% in each subject (Physics, Chemistry, and Mathematics).
            </li>
          </ul>

          <span>4. Bachelor of Civil and Rural Engineering (BE Civil and Rural)</span>
          <ul>
            <li>The candidates should have completed Class 12 examination of NEB or equivalent level from a recognized academic institution.</li>
            <li>The candidates should have studied at least one course (having at least 100 full marks or 5 credits) each in Physics, Chemistry, and Mathematics.</li>
            <li>
              The candidates should have scored a minimum of 45% or a CGPA/GPA of 2.0 (in a scale of 4.0) and at least Grade C (in case of A-level, at least Grade
              D) or 45% in each subject (Physics, Chemistry, and Mathematics).
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={nepal2} alt="Nepal Engineering College (nec)" className="card-image" />
          <div className="card-content">
            <p>
              It was a grand vision & mission of our beloved founder member and Principal Late Prof. Dr. Deepak Bhattrai and other six prominent founders, to provide opportunities of technical education in Nepal to the students of our country.
            </p>
          </div>
          <p className="principal-name">- Principal, Nepal Engineering College (nec)</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14128.823008062875!2d85.4156106!3d27.7109329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b1fed5126c5%3A0x66a89bde8e23a65e!2sNepal%20Engineering%20College!5e0!3m2!1sen!2snp!4v1726846668413!5m2!1sen!2snp"
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

export default NepalEngineeringCollege;
