import React from 'react';
import '../styles/Projects.css';

function Projects() {
  // Example projects data — you can add more or fetch dynamically later
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
      title: "Trivia Quiz App",
      description: "A movie and music trivia quiz made with React and Open Trivia API.",
      github: "https://github.com/yourusername/trivia-quiz",
      demo: "https://triviaquiz.com",
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "A simple blog app with Markdown support and commenting.",
      github: "https://github.com/yourusername/blog-platform",
      demo: "https://blogplatform.com",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
