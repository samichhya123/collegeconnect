import React from "react";
import "./aboutus.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pratigya from "../images/pratigya.jpg";
import sejar from "../images/sejar.jpg";
import sammy from "../images/sammy.jpg";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutus-container">
        <section className="about-section">
          <h1>About Us</h1>
          <p>
            Welcome to College Connect, an engaging and user-friendly platform
            designed to simplify the process of discovering and applying to
            colleges and courses across Nepal. Our mission is to empower
            students by providing them with essential information about
            colleges, programs, admission processes, and more, so they can make
            informed decisions about their education and future. With an
            intuitive layout, College Connect makes it easy for users to
            navigate through detailed profiles of colleges, including insights
            into campus facilities, course offerings, admission criteria, and
            faculty. Whether you are exploring engineering, management, or
            humanities programs, our platform helps you find the right fit based
            on your academic goals and preferences. Our platform goes beyond
            just providing information. Through personalized recommendations and
            interactive features, we aim to guide students through the often
            overwhelming process of selecting a college and applying to courses.
            We ensure that our data is regularly updated, making sure students
            have access to accurate, up-to-date information. College Connect is
            more than just a website—it’s your companion on your educational
            journey, helping you explore, compare, and apply to colleges with
            ease and confidence. This version highlights key aspects of your
            platform while maintaining clarity and conciseness.
          </p>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At College Connect, our mission is to empower students by
            simplifying their journey toward higher education in Nepal. We aim
            to provide a comprehensive, easy-to-use platform that offers
            detailed, up-to-date information on colleges, courses, fees,
            admission requirements, and campus facilities. Our goal is to help
            students make informed decisions about their academic future by
            offering personalized recommendations that align with their goals
            and preferences. We believe that finding the right college should be
            a seamless experience, and we are committed to making higher
            education more accessible and transparent for all students. By
            continuously updating our platform with the latest information and
            providing interactive features, we ensure that students have the
            tools they need to navigate the complex world of college selection
            and applications. College Connect is dedicated to guiding students
            every step of the way, helping them confidently choose the best
            educational path for their future success.
          </p>
        </section>

        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img
                src={pratigya}
                alt="Pratigya Bhattarai"
                className="team-member-image"
              />
              <h3>Pratigya Bhattarai</h3>
              <p>
                I am a versatile QA and full-stack developer with a passion for
                delivering high-quality, reliable software. My expertise spans
                both front-end and back-end development, along with a strong
                focus on testing and ensuring seamless functionality. I combine
                creativity with precision to build and maintain scalable,
                bug-free applications that meet user needs.
              </p>
            </div>
            <div className="team-member">
              <img
                src={sammy}
                alt="Samichhya Shrestha"
                className="team-member-image"
              />
              <h3>Samichhya Shrestha</h3>
              <p>
                I am a skilled full-stack developer with expertise in both
                front-end and back-end technologies. I specialize in creating
                dynamic, responsive web applications using HTML, CSS,
                JavaScript, React, Node.js, and databases. My focus is on
                delivering seamless user experiences and efficient, scalable
                solutions, balancing creativity with technical precision.
              </p>
            </div>
            <div className="team-member">
              <img
                src={sejar}
                alt="Shejar Kandangwa"
                className="team-member-image"
              />
              <h3>Shejar Kandangwa</h3>
              <p>
                I am a passionate front-end developer with a keen eye for design
                and user experience. I excel in crafting responsive, modern web
                interfaces using technologies like HTML, CSS, JavaScript, and
                frameworks such as React and Bootstrap. I also work with Figma
                to design intuitive and user-friendly interfaces, focusing on
                innovation and creativity.
              </p>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            Have questions? Reach out to us at
            <a href="mailto:collegeconnect@edu.np"> collegeconnect@edu.np</a>.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
