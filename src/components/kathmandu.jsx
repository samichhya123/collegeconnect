import React from "react";
import ktm1 from "../images/ktm1.jpg";
import "./kathmandu.css";
const kathmandu = () => {
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

      <div className="container-title">
        <h2>Kathmandu</h2>
        <div className="container-description">
          <img
            src={ktm1}
            alt="kathmandu"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p>
          Kathmandu, the vibrant and culturally rich capital of Nepal, is a city
          that blends ancient traditions with modern life, creating an
          enchanting tapestry of history and contemporary vibrancy. Nestled
          within the Kathmandu Valley and surrounded by picturesque hills, this
          city is a treasure trove of UNESCO-listed heritage sites that bear
          witness to its illustrious past.
          </p>
        </div>
      </div>
    </div>
  );
};
export default kathmandu;
