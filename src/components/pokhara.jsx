import React from 'react'
import pokhara1 from '../images/pokhara1.jpg';
const pokhara = () => {
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
        <h2>Pokhara</h2>
        <div className="container-description">
          <img
            src={pokhara1}
            alt="pokhara"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p>
          Pokhara, a picturesque jewel nestled in the embrace of Nepal's
          majestic Annapurna mountain range, is a destination that enchants the
          soul with its breathtaking beauty and tranquil allure. Situated in the
          heart of the country, Pokhara boasts a mesmerizing blend of nature's
          finest elements - serene lakes, lush forests, cascading waterfalls,
          and snow-capped peaks that pierce the sky. The city's idyllic setting
          is further enhanced by the glistening Phewa Lake, where the reflection
          of the Annapurna and Machapuchare mountains creates a surreal mirror
          image that seems to bridge the earthly and celestial realms.
          </p>
        </div>
      </div>
    </div>
  )
}
export default pokhara;