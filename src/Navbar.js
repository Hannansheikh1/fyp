import React from "react";
import "./Navbar.css";
import logo from "./pix-removebg-preview.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-buttons">
        <button className="register-button">REGISTER</button>
        <button className="signin-button">SIGN IN</button>
      </div>
    </nav>
  );
};

export default Navbar;
