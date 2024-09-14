import React from "react";
import Navbar from "../components1/Navbar";
import Footer from "../components1/Footer";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutus-container">
        <section className="about-section">
          <h1>About Us</h1>
          <p>
            Welcome to College Connect! We are dedicated to helping students 
            find the best educational institutions to suit their aspirations.
          </p>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            We strive to connect students with top colleges by providing up-to-date 
            information and guidance to make informed decisions about their education.
          </p>
        </section>

        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Member 1</h3>
              <p>Committed to making quality education accessible.</p>
            </div>
            <div className="team-member">
              <h3>Member 2</h3>
              <p>Focused on improving educational outreach.</p>
            </div>
            <div className="team-member">
              <h3>Member 3</h3>
              <p>Passionate about guiding students towards success.</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            Have questions? Reach out to us at{" "}
            <a href="mailto:collegeconnect@edu.np">collegeconnect@edu.np</a>.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
