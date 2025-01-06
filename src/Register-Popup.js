import React, { useState, useEffect } from "react";
import "./Register-Popup.css";
import placeholderImage from "./camera.png"; // Replace with your image path

const RegisterPopup = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  // Handle close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400); // Matches the exit animation duration
  };

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`register-popup-overlay ${isClosing ? "fade-out" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`register-popup-content ${isClosing ? "slide-out" : "slide-in"}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        <div className="register-popup-left">
          {/* Replace with your image */}
          <img
            src={placeholderImage}
            alt="Popup Illustration"
            className="register-popup-image"
          />
        </div>
        <div className="register-popup-right">
          <h2>Register to Story Scape</h2>
          <p>Save your time.</p>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />
            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
