import React, { useState, useEffect } from "react";
import "./signInPopup.css";

const SignInLoginPopup = ({ children, triggerText }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control the modal visibility

  // Function to toggle modal open/close state
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Close the popup when clicking outside of the popup content
  const handleClickOutside = (e) => {
    if (e.target.className === "popup-overlay") {
      setIsOpen(false);
    }
  };

  // Close the popup when pressing the Escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Button to open the popup */}
      <button className="open-popup-btn" onClick={togglePopup}>
        {triggerText}
      </button>

      {/* Modal Popup */}
      {isOpen && (
        <div className="popup-overlay" onClick={handleClickOutside}>
          <div className="popup-content">
            {/* Close button inside the popup */}
            <span className="close-popup" onClick={togglePopup}>
              &times;
            </span>

            {/* Render the sign-in or login form as children */}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInLoginPopup;
