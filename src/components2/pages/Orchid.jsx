import React from "react";
import "./college.css";
import orchid from "../college image/ORCHID1.jpg";
import orchid1 from "../college image/ORCHID.jpg";
import logo from "../logo/ORCHID.png";
import orchid2 from "../principal immage/orchid.png";
const Orchid = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={orchid} alt="Background Image" />
          <img
            src={orchid1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>
      <section className="section">
        <h2 className="college-name">Orchid International College</h2>
        <br />
        <img
          src={logo}
          alt="College Logo"
          style={{ maxWidth: "200px" }}
        />
        <br />
      </section>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Orchid International College affiliated to Tribhuvan University, was
          established in 2010 AD which is promoted by a group of experienced and
          dedicated academicians, computer engineers, management professionals
          and social activists of Nepal. It’s a leading institution committed to
          providing exceptional education and nurturing versatile individuals in
          the field of information technology, management and social science.
          With integrated courses and well-rounded methodologies, OIC strives to
          develop students who are equipped to make a meaningful impact in the
          real world. Orchid International College understands the importance of
          practical application alongside theoretical knowledge. That’s why the
          dedicated team of educators at this college ensures a meticulous blend
          of both approaches, enabling students to gain hands-on experience and
          a deep understanding of the subject matter. OIC emphasis on
          practicality equips students with the skills necessary to thrive in
          real-time scenarios and contribute effectively to information
          technology, management and social sciences. OIC takes pride in its
          esteemed faculty, composed of the best teachers in various industries.
          Their expertise and guidance ensure that our students receive a
          high-quality education, tailored to meet the demands of the
          ever-evolving professional landscape. Furthermore, OIC is committed to
          providing affordable education to our students. We believe that access
          to quality education should not be a privilege but a right for all.
          Our aim is to reform and empower each student, nurturing them into
          competent graduates with the ability to analyze course-based practice,
          conduct research, and contribute to theory development. In addition to
          the academic programs, OIC also provides its students with a wide
          range of extra-curricular activities and facilities to enhance their
          overall development. These include clubs, societies, sports and
          opportunities to participate in community service and volunteer work.
          Join Orchid International College and embark on a transformative
          educational journey that will shape you into a versatile and skilled
          professional in the respective field you choose.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">
          Offered Programs and Admission Criteria
        </h2>
        <div className="offered">
          <span>1. Bachelor of Business Management (BBM):</span>
          <ul>
            <li>
              Successfully completed twelve-year schooling or its equivalent
              from any university, board OR institution recognized by Tribhuvan
              University.
            </li>
            <li>
              Minimum D grade in each subject with GPA 1.8 or more in grade 11
              and 12 OR Minimum D+ grade in each subject of grade 11 and 12 with
              CGPA 1.80 or more who passed in 2078 or before 2078
            </li>
            <li>
              Secured at least second division in the 10+2, PCL, or equivalent
              program
            </li>
          </ul>

          <span>
            2. BSc Computer Science and Information Technology (BSc CSIT):
          </span>
          <ul>
            <li>
              Should have successfully completed a twelve year of schooling in
              the science stream or equivalent from any university, board or
              institution recognized by TU
            </li>
            <li>
              Should have successfully passed the entrance examination conducted
              by TU securing at least 35% marks. Compiled with all the
              application procedures.
            </li>
            <li>
              Should have secured a minimum of second division in their +2 or
              equivalent OR should have secured at least C in all subjects in
              Grade 11 and Grade 12 by taking Physics and Mathematics of 100
              marks.
            </li>
          </ul>

          <span>3. Bachelor of Information Management (BIM):</span>
          <ul>
            <li>
              60% CMAT Entrance Score, 30% of 10+2 score and 10% interview
            </li>
          </ul>

          <span>4. Bachelor of Computer Application (BCA):</span>
          <ul>
            <li>
              Minimum D grade in each subject of grade 11 and 12 with a CGPA 1.8
              or more.
            </li>
            <li>
              Minimum score of second division marks in 10+2, PCL, or equivalent
              in any discipline.
            </li>
            <li>
              Students who have passed grade 11 and are waiting for grade 12
              results can also apply. However, they have to submit all the
              required documents at the time of admission.
            </li>
          </ul>

          <span>5. Bachelor in Business Studies (BBS):</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from the
              recognized academic institutes with second division (securing 45%
              and above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img
            src={orchid2}
            alt="Orchid International College"
            className="card-image"
            style={{ maxHeight: "200px" }}
          />
          <div className="card-content">
            <p>
              Orchid International College (OIC), affiliated with Tribhuvan
              University (TU), was established in 2010 AD and promoted by a
              group of experienced and dedicated academicians, computer
              engineers, management professionals, and a reputed software
              company in Nepal. Recognized as the Best IT College in Kathmandu,
              the goal of the college is to provide a high-quality education
              that will enable students to embrace the challenges of the modern
              world and establish the foundation for a successful future.
            </p>
          </div>
          <p className="principal-name">
            - Principal, Orchid International College
          </p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.943510449752!2d85.3465647!3d27.7022808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198310f52e7d%3A0x502c68cfd4f402ab!2sOrchid%20International%20College!5e0!3m2!1sen!2snp!4v1726674586148!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Orchid International College Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Orchid;
