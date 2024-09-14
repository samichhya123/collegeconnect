import React from "react";
import chitwan1 from "../images/chitwan1.jpg";
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
        <h2>Chitwan</h2>
        <div className="container-description">
          <img
            src={chitwan1}
            alt="chitwan"
            style={{ maxWidth: "100%", height: "auto" }}
          />
         <p>
          Nestled within the lush embrace of Nepal's Terai lowlands, Chitwan is
          a haven of biodiversity and natural splendor. This enchanting region
          beckons travelers with its vibrant mosaic of ecosystems, where dense
          jungles, winding rivers, and open grasslands create a haven for an
          array of wildlife. Chitwan National Park, a UNESCO World Heritage
          Site, stands as a testament to the preservation of this delicate
          balance, home to elusive Bengal tigers, one-horned rhinoceroses,
          playful elephants, and a myriad of avian species. 
          
        </p>
        </div>
      </div>
    </div>
  );
};
export default kathmandu;
