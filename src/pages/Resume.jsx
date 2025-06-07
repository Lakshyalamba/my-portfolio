import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Bachelor of Technology in Computer Science</h3>
          <p>XYZ University, 2021 - Present</p>
          <p>CGPA: 8.5/10</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>Frontend Developer Intern</h3>
          <p>ABC Tech, June 2024 - August 2024</p>
          <ul>
            <li>Developed responsive UI components using React.js.</li>
            <li>Improved website performance and user experience.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">CSS3</span>
          <span className="skill">HTML5</span>
          <span className="skill">Git</span>
          <span className="skill">Node.js</span>
        </div>
      </section>

      <section className="resume-section">
        <h2>Download Resume</h2>
        <a
          href="/assets/resume.pdf"
          download
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      </section>
    </div>
  );
}

export default Resume;
