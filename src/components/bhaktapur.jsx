import React from "react";
import bhaktapur1 from "../images/bhaktapur1.jpg";
const bhaktapur = () => {
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
        <h2>Bhaktapur</h2>
        <div className="container-description">
          <img
            src={bhaktapur1}
            alt="bhaktapur"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p>
            Bhaktapur, a city steeped in history and culture, is one of the most
            well-preserved medieval cities in Nepal. Famous for its stunning
            architecture, vibrant festivals, and rich artistic heritage. With
            its well-preserved medieval architecture, bustling squares, and a
            vibrant way of life, Bhaktapur is a destination that offers visitors
            a chance to step back in time and immerse themselves in a world that
            seems untouched by the modern era.
          </p>
        </div>
      </div>
    </div>
  );
};
export default bhaktapur;
