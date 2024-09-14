import React from "react";
import "./aboutus.css";
const Aboutus = () => {
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
              <a className="nav-link" href="/Traveltips">
                Travel Tips
              </a>
            </li>
            <li>
              <a className="nav-link" href="/Aboutus">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="about-us">
          <h1>About Us</h1>
          <div className="paragraph">
          <p>Welcome to Travel & Adventure, where your journey begins.</p>
          <p>
            At Travel & Adventures, we're passionate about exploring Nepal and
            discovering new adventures. Our mission is to provide unforgettable
            travel experiences to Nepal that ignite your sense of adventure. The
            question 'Why you should travel to Nepal?'is answered while also
            promoting their culture, people and tradition to enhance awareness
            about Nepal as a destination and to increase Nepal's tourist
            arrivals.{" "}
          </p>
          <p>
            Join us as we explore breathtaking landscapes, embrace diverse
            cultures, and create memories that last a lifetime.
          </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Travel & Adventure. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Aboutus;
