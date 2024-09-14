import React from "react";
import "./Destination.css";
import ktm from "../images/ktm.jpg";
import bhaktapur from "../images/bhaktapur.jpg";
import pkr from "../images/pkr.jpg";
import chitwan from "../images/chitwan.jpg";
const Destination = () => {
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
      <div className="header">
        <header>
          <h1>Most Visited Destination Places</h1>
          <p>Explore the cultural and natural wonders of Nepal</p>
        </header>
      </div>
      <div className="container destination-row">
        <div className="content">
          <h2>Kathmandu</h2>
          <img
            src={ktm}
            alt="kathmandu"
            style={{ maxWidth: "100%", height: "auto" }}
            useMap="#kathmandu"
          />
          <map name="kathmandu">
            <area
              shape="rect"
              coords="0,0,799,599"
              alt="view"
              href="/kathmandu"
            />
          </map>
        </div>
        <div className="content">
          <h2>Pokhara</h2>
          <img
            src={pkr}
            alt="pokhara"
            useMap="#pokhara"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <map name="pokhara">
            <area
              shape="rect"
              coords="0,0,799,599"
              alt="view"
              href="/pokhara"
            />
          </map>
        </div>
        <div className="content">
          <h2>Bhaktapur</h2>
          <img
            src={bhaktapur}
            alt="bhaktapur"
            style={{ maxWidth: "100%", height: "auto" }}
            useMap="#bhaktapur"
          />
          <map name="bhaktapur">
            <area
              shape="rect"
              coords="0,0,799,599"
              alt="view"
              href="/bhaktapur"
            />
          </map>
        </div>
        <div className="content">
          <h2>Chitwan</h2>
          <img
            src={chitwan}
            alt="chitwan"
            useMap="#chitwan"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <map name="chitwan">
            <area
              shape="rect"
              coords="0,0,799,599"
              alt="view"
              href="/chitwan"
            />
          </map>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Travel & Adventure. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Destination;
