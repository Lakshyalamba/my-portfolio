import React from 'react';
import '../styles/Home.css';  // Use Home.css for background and footer styles

function About() {
  return (
    <div className="home-container about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <p>
          Hello! I'm Lakshya, a passionate web developer who loves creating beautiful and functional websites. With a keen eye for design and a dedication to clean code, I strive to build seamless user experiences.
        </p>
        <p>
          I specialize in React, JavaScript, and CSS, and I'm always eager to learn new technologies and improve my skills.
        </p>
        <p>
          When I'm not coding, I enjoy playing volleyball, going to the gym, and exploring creative video editing.
        </p>
      </div>
    </div>
  );
}

export default About;
