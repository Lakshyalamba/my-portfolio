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
        <h1>Hi, I'm Lakshya. Nice to meet you!</h1>
        <p>
          Collaborative software engineering intern with a strong learning mindset, building systems in fast-paced team environments. Proficient in Python and JavaScript, I focus on delivering features end-to-end — from development through deployment.
        </p>
        <p>
          Experienced in Agentic AI development using LangChain and LangGraph, including tool-calling and orchestration. I bring solid foundations in machine learning and data structures & algorithms, demonstrated through 425+ LeetCode problems solved.
        </p>
        <p>
          I'm an engineer focused on writing debuggable, scalable code — driven by curiosity, continuous improvement, and a commitment to building software that works reliably at scale.
        </p>
      </div>
    </div>
  );
}

export default About;
