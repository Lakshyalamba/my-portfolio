import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">MY RESUME</h1>

      {/* Professional Summary */}
      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          Collaborative software engineering intern with a strong learning mindset, building systems in fast-paced team environments. Proficient in Python and JavaScript, delivering features through deployment. Experienced in Agentic AI development using LangChain and LangGraph, including tool-calling and orchestration. Solid foundations in machine learning and data structures & algorithms, demonstrated through 425+ LeetCode problems. Engineer focused on debugging and scalable code.
        </p>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Bachelor of Technology in Computer Science</h3>
          <p>Newton School of Technology, Rishihood University, 2024 - 2028</p>
          <p>CGPA: 7.935/10</p>
        </div>
        <div className="resume-item">
          <h3>Intermediate (Class XII)</h3>
          <p>NRJ Sr Sec School, 2022 - 2023</p>
          <p>Grade: 80%</p>
        </div>
        <div className="resume-item">
          <h3>Matriculation (Class X)</h3>
          <p>NRJ Sr Sec School, 2020 - 2021</p>
          <p>Grade: 100%</p>
        </div>
      </section>

      {/* Projects */}
      <section className="resume-section">
        <h2>Projects</h2>
        <div className="resume-item">
          <h3>BingeQuiz</h3>
          <p><strong>Tech Stack:</strong> React.js, JavaScript, CSS</p>
          <ul>
            <li>
              Built using React.js, JavaScript, and CSS to create a modern and efficient web application.
            </li>
            <li>
              Developed a dynamic movie quiz app where users can test their knowledge with interactive questions.
            </li>
            <li>
              Integrated difficulty levels, responsive design, and GitHub version control to ensure scalability, maintainability, and seamless navigation.
            </li>
          </ul>
          <p>
            <a href="https://github.com/Lakshyalamba/bingequiznextjs" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
            <a href="https://bingequiz.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <span className="skill">Python</span>
          <span className="skill">JavaScript</span>
          <span className="skill">LangChain</span>
          <span className="skill">LangGraph</span>
          <span className="skill">React</span>
          <span className="skill">Node.js</span>
          <span className="skill">Express.js</span>
          <span className="skill">MongoDB</span>
          <span className="skill">MySQL</span>
          <span className="skill">PostgreSQL</span>
          <span className="skill">NumPy</span>
          <span className="skill">Pandas</span>
          <span className="skill">Machine Learning</span>
          <span className="skill">Data Structures & Algorithms</span>
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
        </div>
      </section>

      {/* Links */}
      <section className="resume-section">
        <h2>Links</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/lakshya-choudhary-881a4b31a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/Lakshyalamba" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.codechef.com/users/lakshya_lamba9" target="_blank" rel="noopener noreferrer">CodeChef</a></li>
          <li><a href="https://codeforces.com/profile/lakshyalamba" target="_blank" rel="noopener noreferrer">Codeforces</a></li>
          <li><a href="https://leetcode.com/u/lakshya_choudhary/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
          <li><a href="https://my-personal-portfol.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
        </ul>
      </section>

      {/* Download Resume */}
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
          Download PDF
        </a>
      </section>
    </div>
  );
}

export default Resume;
