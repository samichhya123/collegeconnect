import React, { useState, useEffect } from "react";
import "./contact.css";
const Contact = () => {
  const [formSubmitted, SetFromSubmitted] = useState(false);
  useEffect(() => {
    const submit = document.getElementById("btn-submit");
    submit.addEventListener("click", function (event) {
      event.preventDefault();
      const form = document.getElementById("my-form");
      form.submit();
      form.reset();
      SetFromSubmitted(true);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <nav className="nav">
          <ul>
            <li>
              <a className="nav-link-active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="/destination">
                Destination
              </a>
            </li>
            <li>
              <a className="nav-link" href="/traveltips">
                Travel Tips
              </a>
            </li>
            <li>
              <a className="nav-link" href="/aboutus">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h1>For More Information</h1>
      {!formSubmitted ? (
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form id="my-form" method="POST">
            <label htmlfor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlfor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlfor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button id="btn-submit" type="button">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="new-form-container">
          <h1>Thank you for contacting us!</h1>
          <p>
            We have recieved your message. Would you like to submit another
            form?
          </p>
          <button onClick={() => SetFromSubmitted(false)}>
            Submit Another Form
          </button>
        </div>
      )}
      <footer className="footer">
        <p>&copy; 2023 Travel & Adventure. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Contact;
