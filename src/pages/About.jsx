import React from "react";
import "../styles/About.css";
import profilePic from "../assets/images/profile.jpg"; // Make sure this image exists

function About() {
  return (
    <div className="about-container">
      <div className="about-photo">
        <img src={profilePic} alt="Lakshya" />
      </div>
      <div className="about-content">
        <h1>Hi, I’m Lakshya. Nice to meet you!</h1>
        <p>
          I am a passionate developer from India who loves building web apps that are
          both beautiful and functional. My goal is to deliver impactful user experiences through
          clean code and intuitive design.
        </p>
        <p>
          With a background in Computer Science and deep interest in frontend and backend development,
          I specialize in React, JavaScript, HTML, and CSS. I enjoy solving problems, collaborating with
          teams, and constantly learning new technologies to improve my skills.
        </p>
        <p>
          Whether it’s creating a responsive portfolio, a full-stack project, or exploring new libraries,
          I always aim to craft something meaningful. Let’s build something great together!
        </p>
      </div>
    </div>
  );
}

export default About;
