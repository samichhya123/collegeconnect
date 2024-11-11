import React from "react";

import "./LinkSection.css";
function LinkSection() {
  return (
    <div className="link-section">
      <ul>
        <li>
          <a className="nav-link-active" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link-active" href="/Colleges">
            Colleges
          </a>
        </li>
        <li>
          <a className="nav-link-active" href="/Courses">
            Courses
          </a>
        </li>
        <li>
          <a className="nav-link-active" href="/Blogs">
          Blogs
          </a>
        </li>
        <li>
          <a className="nav-link-active" href="/About Us">
          About Us
          </a>
        </li>
      </ul>
    
    </div>
  );
}

export default LinkSection;
