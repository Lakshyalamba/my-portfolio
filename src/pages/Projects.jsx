import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Vite.",
      github: "https://github.com/yourusername/portfolio-website",
      demo: "https://yourportfolio.com",
    },
    {
      id: 2,
      title: "Mini Calender",
      description: "It displays the current month with days arranged in a grid format, highlighting the current date.",
      github: "https://github.com/Lakshyalamba/Mini-Calender",
      demo: "https://mini-calender-mu.vercel.app/",
    },
    {
      id: 3,
      title: "Feedback App",
      description: "The Feedback System is a simple web application built using HTML, CSS, and JavaScript that allows users to submit feedback.",
      github: "https://github.com/Lakshyalamba/Feedback",
      demo: "https://feedback-sable-seven.vercel.app/",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">PROJECTS</h1>
      <p className="projects-subtitle">Some of my recent works</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
