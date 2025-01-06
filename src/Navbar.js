import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import SigninPopup from "./Signin-popup"; // Import the Signin popup component
import RegisterPopup from "./Register-Popup"; // Import the Register popup component
import logo from "./pix-removebg-preview.png";

const Navbar = () => {
  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  const openSigninPopup = () => setIsSigninPopupOpen(true);
  const closeSigninPopup = () => setIsSigninPopupOpen(false);

  const openRegisterPopup = () => setIsRegisterPopupOpen(true);
  const closeRegisterPopup = () => setIsRegisterPopupOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"> {/* Link to home page */}
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>
        <div className="navbar-buttons">
          <button className="register-button" onClick={openRegisterPopup}>REGISTER</button>
          <button className="signin-button" onClick={openSigninPopup}>
            SIGN IN
          </button>
        </div>
      </nav>

      {/* Add the popups */}
      <SigninPopup isOpen={isSigninPopupOpen} onClose={closeSigninPopup} />
      <RegisterPopup isOpen={isRegisterPopupOpen} onClose={closeRegisterPopup} />
    </>
  );
};

export default Navbar;
