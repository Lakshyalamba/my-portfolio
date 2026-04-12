import React, { useEffect, useState } from 'react';
import '../styles/Resume.css';
import resumePdf from '../assets/resume.pdf';

function Resume() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const skills = [
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'LangChain' },
    { name: 'LangGraph' },
    { name: 'Node.js' },
    { name: 'PostgreSQL' },
    { name: 'Machine Learning' },
  ];

  const links = [
    { name: 'GitHub', url: 'https://github.com/Lakshyalamba' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lakshyachoudhary26/' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/lakshya_choudhary/' },
  ];

  return (
    <div className="resume-container">
      <div className="bg-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className={`resume-content ${visible ? 'visible' : ''}`}>
        <header className="resume-header">
          <div className="header-badge">Resume</div>
          <h1 className="resume-title">
            <span className="title-gradient">Lakshya</span>
          </h1>
          <p className="resume-subtitle">Software Engineering Intern | Agentic AI Developer</p>
        </header>

        <section className="resume-section">
          <h2 className="section-title">
            <span className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </span>
            About
          </h2>
          <p className="about-text">
            Building systems in fast-paced environments with proficiency in Python and JavaScript. 
            Specializing in Agentic AI development using LangChain and LangGraph with 425+ LeetCode problems solved. 
            Focused on writing debuggable, scalable code.
          </p>
        </section>

        <section className="resume-section">
          <h2 className="section-title">
            <span className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </span>
            Education
          </h2>
          <div className="education-card">
            <div className="edu-header">
            <h3>B.Tech in Computer Science (2024-2028)</h3>
            </div>
            <p className="edu-institution">Newton School of Technology, Rishihood University</p>
            <div className="edu-grades">
              <span>CGPA: 7.935/10</span>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">
            <span className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </span>
            Skills
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">
            <span className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </span>
            Connect
          </h2>
          <div className="links-row">
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>

        <section className="resume-section download-section">
          <a href={resumePdf} download className="download-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Download Resume</span>
          </a>
        </section>
      </div>
    </div>
  );
}

export default Resume;
