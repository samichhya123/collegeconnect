import React from 'react';
import "./traveltips.css";
import traveltips from "../images/traveltips.jpg";

const Travel = () => {
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

      <div className="content-container">
        <img 
          src={traveltips} 
          alt="Travel Tips" 
          className="travel-tips-image" 
        />
        <div className="travel-tips-container">
          <h2 className="travel-tips-heading">Some Essential Travel Tips to Nepal</h2>
          <p className="travel-tips-paragraph">
            Traveling to Nepal can be an incredible and rewarding experience. It's a country known for its stunning landscapes, rich culture, and warm hospitality. Here are some essential travel tips to help you make the most of your trip to Nepal:
          </p>
          <ul className="travel-tips-list">
            <li><u>Visa and Entry Requirements:</u><br/> Check the visa requirements for your nationality before you travel. Most visitors can obtain a visa on arrival at the Tribhuvan International Airport in Kathmandu or at land border crossings. </li>
            <li><u>Travel Insurance:</u><br/> It's highly recommended to have comprehensive travel insurance that covers medical expenses, emergency evacuation, and other potential mishaps. Nepal's terrain can be challenging, so insurance is crucial.</li>
            <li><u>Currency and Money:</u><br/> The official currency of Nepal is the Nepalese Rupee (NPR). While major cities have ATMs, it's a good idea to carry some cash.</li>
            <li><u>Transportation:</u><br/> Nepal's road infrastructure can be challenging, so be prepared for bumpy rides if you're traveling by road. Domestic flights are also common, especially for reaching remote areas quickly.</li>
            <li><u>Communication:</u><br/> While Wi-Fi is available in many hotels and restaurants, connectivity might be limited in remote areas. Consider getting a local SIM card for your phone for better communication.</li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Travel & Adventure. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Travel;
