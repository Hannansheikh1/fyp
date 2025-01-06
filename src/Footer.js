import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section">
          <h4>StoryScape</h4>
          <p>The easiest way to summarize videos</p>
          <p>© 2024 - StoryScape All rights reserved.</p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>contact@storyscape.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
