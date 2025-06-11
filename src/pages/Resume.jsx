import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">MY RESUME</h1>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Bachelor of Technology in Computer Science</h3>
          <p>Newton School of Technology, Rishihood University, 2025 - Present</p>
          <p>CGPA: 7.87/10</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>Frontend Developer Intern</h3>
          <p>Infosys Tech, June 2025 - August 2025</p>
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

      <section className="resume-section download-section">
        <h2>Want a copy of my Resume?</h2>
        <p>Click below to download a professionally formatted PDF version.</p>
        <a
          href="/assets/resume.pdf"
          download
          className="btn btn-glow"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Download PDF
        </a>
      </section>
    </div>
  );
}

export default Resume;
