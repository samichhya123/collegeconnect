import React from 'react'

export const traveltips = () => {
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
              <a className="nav-link" href="Aboutus.js">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link" href="Contact.js">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default traveltips;