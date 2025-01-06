import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    // Navigate to the GetStarted page when the button is clicked
    navigate("/get-started"); // Use navigate() instead of history.push()
  };

  return (
    <section className="hero">
      <div className="cente-text">
        <p className="hero-tagline">
          <span className="highlight">Revolutionizing</span> how our community saves time, every day
        </p>
        <h1 className="hero-heading">
          Summarize and Interpret videos <br />
          in only a <span>few seconds</span>
        </h1>
        <p className="hero-subheading">
          Stop watching videos at 2x speed, Get your time back
        </p>
        <button className="hero-cta" onClick={handleClick}>Start saving time</button>
        <div className="hero-categories">
          <div className="category">
            <span className="dot"></span>
            Sports Videos
          </div>
          <div className="category">
            <span className="dot"></span>
            Podcasts
          </div>
          <div className="category">
            <span className="dot"></span>
            Documentaries
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
