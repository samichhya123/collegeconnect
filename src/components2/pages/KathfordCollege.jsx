import React from "react";
import "./college.css";
// import kathford from "../lalitpur/images/6f6b2eb8ea71eb29f591ce3fd704b326-490.jpg";
import kathford1 from "../lalitpur/college image/kathford.jpg";
import logo from "../lalitpur/images/logo kath.jpg";
import kathford2 from "../lalitpur/principal images/kathford.png";
import SignInLoginPopup from "../../template/signInPopup"; // Make sure the path is correct
import Login from "../../components3/Login"; // Import the Login component
import SignUp from "../../components3/register"; // Import the SignUp component
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const KathfordCollege = () => {
  return (
    <div>
      {/* <div className="navbar-college">
        <a href="/Colleges" className="back-link">
          <MdKeyboardDoubleArrowLeft />
          <span>Back</span>
        </a>
       <p>Sign In to apply for entrance exam | Sign In to perform tests for entrance exam</p>
        <div className="popup-buttons">
          <SignInLoginPopup triggerText="Login">
            <Login />
          </SignInLoginPopup>
          <SignInLoginPopup triggerText="Register">
            <SignUp /> 
          </SignInLoginPopup>
        </div>
      </div> */}

      <div className="section">
        <img src={logo} alt="College Logo" />
        <h2 className="college-name">
          Kathford International College Of Engineering And Management
        </h2>
      </div>

      <header>
        <div className="img-area">
          {/* <img src={kathford} alt="Background Image" /> */}
          <img src={kathford1} className="img-front" alt="Front Image" />
        </div>
      </header>
      <div className="college-container">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p>
            Kathford International College of Engineering and Management is a
            top-ranked institution dedicated to inspiring teaching, providing an
            excellent student experience, and fostering strong employability.
            Founded in 2003 and located in the heart of Kathmandu, Kathford
            offers students access to outstanding faculty and exceptional
            resources. It is one of the few colleges affiliated with Tribhuvan
            University that offers diverse programs in Engineering and
            Management. Kathford provides three Bachelor-level Engineering
            programs: BE Civil, BE Electronics, Communication & Information, and
            BE Computer, along with two IT programs: BSc. CSIT and BCA, and two
            Management programs: BBA and BBM.
            <br />
            <br />
            With a vibrant community of over 1,000 students, Kathford has been
            producing highly competitive graduates and scholars since its
            inception. The college was founded with a vision to become a leading
            educational hub that offers transformative learning experiences,
            stimulates curiosity, and helps students turn their aspirations into
            lasting success, social impact, and continuous learning. It combines
            student-centered pedagogy with hands-on laboratory, field, project,
            and research work.
            <br />
            <br />
            Kathford's strong alumni network, comprising market leaders,
            entrepreneurs, and scholars, is one of the reasons why it is the
            best place to pursue a bachelor’s degree. The college encourages
            students to reach their full potential by providing abundant
            resources and engaging them in various events and activities,
            allowing them to experience genuine personal and professional
            growth. Kathford stands out as a premier college for engineering,
            management, and IT.
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
                Minimum ‘C’ in all subjects in PCL/+2 with Physics or Biology
                with Extra Maths
              </li>
              <li>PASSED in IOE Entrance Exam</li>
            </ul>
            <span>2. B.Sc CSIT</span>
            <ul>
              <li>
                Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics
                or Biology)
              </li>
              <li>PASSED in TU IOST Entrance Exam</li>
            </ul>
            <span>3. BCA</span>
            <ul>
              <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
              <li>PASSED in BCA Entrance Test</li>
            </ul>

            <span>4. BBA and BBM</span>
            <ul>
              <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
              <li>PASSED in CMAT Test</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Principal</h3>
          <img src={kathford2} alt="Kathford" className="card-image" />
          <div className="card-content">
            <p>
              Kathford is not only a place to learn but also to grow and thrive.
              We believe in building strong foundations that empower our
              students to become leaders in their respective fields.
            </p>
          </div>
          <p className="principal-name">
            - Principal, Kathford International College
          </p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.413215637227!2d85.33863189999997!3d27.673620800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e8d9058ce3%3A0x5f9f01647e956594!2sKathford%20International%20College!5e0!3m2!1sen!2snp!4v1724976052678!5m2!1sen!2snp"
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

export default KathfordCollege;
