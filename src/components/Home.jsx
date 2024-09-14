import React from "react";
import "./Home.css";
import nepal from "../images/nepal.jpg";
const Home = () => {
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
      <div className="container-title">
        <div className="title">
          <h1>Travel & Adventure</h1>
          <p>Your Gateway to Exciting Journeys in Nepal</p>
        </div>
        <div className="content">
          <img
            src={nepal}
            alt="Nepal Scene"
            className="animated-image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className="detail">
            <p>
              Nestled within the embrace of the mighty Himalayas, <u>Nepal</u> exudes a captivating beauty that enchants the soul of every
              traveler. From the serene rice terraces of its valleys to the
              awe-inspiring heights of Mount Everest, the world's tallest peak,
              Nepal's diverse landscapes leave an indelible mark on the heart.
              The rich tapestry of its cultures, adorned with ancient temples,
              vibrant festivals, and warm hospitality, invites one to explore
              its depths and revel in the harmony of tradition and modernity.
              Whether it's the bustling streets of Kathmandu, the tranquil lakes
              of Pokhara, or the untouched wilderness of its national parks,
              Nepal's beauty resonates not only in its breathtaking vistas but
              in the genuine smiles of its people, forging a connection that
              lingers long after one's journey through this enchanting land.
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

export default Home;
