import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./slider.css";

function Slider() {
 
  const [dropdowns, setDropdowns] = useState({
    counselling: false,
    fairEvent: false,
    training: false,
  });


  const toggleDropdown = (event) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [event]: !prevState[event], 
    }));
  };

  return (
    <div>
      <div className="courses-slider">
        <div className="slider">
          <h3>Events</h3>

          <div className="events-option">
            <p className="counselling" onClick={() => toggleDropdown("counselling")}>
              Counselling Session
              <div className="arrow-down">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </p>
            {dropdowns.counselling && (
              <div className="dropdown-content">
                <p>Session 1: Introduction</p>
                <p>Session 2: Q&A</p>
              </div>
            )}
          </div>

          <div className="events-option">
            <p className="Fair Event" onClick={() => toggleDropdown("fairEvent")}>
              Fair Event{" "}
              <div className="arrow-down">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </p>
            {dropdowns.fairEvent && (
              <div className="dropdown-content">
                <p>Exhibition 1: College Fair</p>
                <p>Exhibition 2: Career Opportunities</p>
              </div>
            )}
          </div>
          <div className="events-option">
            <p className="Training" onClick={() => toggleDropdown("training")}>
              Training Session{" "}
              <div className="arrow-down">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </p>
            {dropdowns.training && (
              <div className="dropdown-content">
                <p>Training 1: Resume Building</p>
                <p>Training 2: Interview Skills</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
