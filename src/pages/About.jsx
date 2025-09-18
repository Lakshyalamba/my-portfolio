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
          I am an aspiring developer from India with a strong passion for building web applications that are both functional and visually engaging. My goal is to create impactful digital experiences through clean code, intuitive design, and attention to detail.
        </p>
        <p>
          With a background in Computer Science and a growing interest in both frontend and backend development, I have built skills in React, JavaScript, HTML, and CSS. I enjoy solving problems, working in collaborative environments, and continuously learning new technologies to expand my capabilities.
        </p>
        <p>
          I am eager to apply my knowledge to real-world projects, whether it’s designing responsive interfaces, exploring full-stack development, or experimenting with new frameworks. Driven by curiosity and a commitment to growth, I aim to contribute meaningfully to teams and projects that value innovation and user experience.
        </p>
      </div>
    </div>
  );
}

export default About;
