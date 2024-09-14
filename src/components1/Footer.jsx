import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/CC.jpg";
import "./Footer.css";
import LinkSection from "./LinkSection";

function Footer() {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col logo-col">
            <img src={logo} alt="logo" className="footer-logo" />
            <p>
              College Connect provides top IT and Management related colleges
              along with their courses to students who are eager to start their
              next journey in life and explore different courses for their
              future!
            </p>
          </div>
          <div className="col contact-col">
            <h3>Contact Us</h3>
            <p className="email-id">www.collegeconnect.edu.np</p>
            <p className="phone">9841304576</p>
          </div>
          <div className="col links-col">
            <h3>Links</h3>
            <LinkSection />
          </div>
          <div className="col enquiry-col">
            <h3>Enquiry</h3>
            <form>
              <FontAwesomeIcon icon={faComment} />
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
        <hr />
        <p className="copyright">
          &copy; 2024 College Connect. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
