import React from "react";
import "./About.css";
import profile from "./2x2.jpg"; // correct path since the image is in the same folder

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">

        {/* Hexagon Image */}
        <div className="image-box">
          <img src={profile} alt="Raj Jeremiah Ocampo" />
        </div>

        {/* Text */}
        <div className="about-text">
          <h2>
            About <span className="highlight">Me</span>
          </h2>

          <p>
            I'm Raj Jeremiah Ocampo, a passionate developer focused on building
            clean, responsive, and visually appealing web applications. I enjoy
            creating modern interfaces and continuously improving my skills.
          </p>

          <button>Read More</button>
        </div>

      </div>
    </div>
  );
}
