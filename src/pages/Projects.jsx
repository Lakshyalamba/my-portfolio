import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "DailyDrive",
      description:
        "DailyDrive is a unified self-improvement platform that helps users build consistent habits across fitness, study, and wellness through integrated course enrollment, streak-based tracking, and community engagement. The platform combines personalized dashboards, goal management, and advanced analytics to transform daily activities into lasting positive habits.",
      techStack: "React.js + Node.js/Express.js + MySQL + JWT Authentication",
      features:
        "JWT authentication, personalized dashboard with streak tracking, free course enrollment (fitness/study/wellness), daily activity logging, goal management, community posts, and analytics with PDF/CSV export.",
      github: "https://github.com/Lakshyalamba/dailydrive",
      demo: "https://dailydrive-anfy.vercel.app/",
    },
    {
      id: 2,
      title: "Bingequiz",
      description:
        "A dynamic movie quiz app where users can test their knowledge with interactive questions based on popular films.",
      techStack: "HTML, CSS, JavaScript, React",
      features:
        "Integrated difficulty levels, responsive design, and GitHub version control to ensure scalability, maintainability, and seamless navigation.",
      github: "https://github.com/Lakshyalamba/bingequiznextjs",
      demo: "https://bingequiz.netlify.app/",
    },
    {
      id: 3,
      title: "Mini Calendar",
      description:
        "A simple mini calendar app that displays the current month with days arranged in a grid format, highlighting today’s date.",
      techStack: "HTML, CSS, JavaScript",
      features:
        "Lightweight UI, highlights the current date, and responsive layout for different screen sizes.",
      github: "https://github.com/Lakshyalamba/Mini-Calender",
      demo: "https://mini-calender-mu.vercel.app/",
    },
    {
      id: 4,
      title: "Feedback App",
      description:
        "A feedback system that allows users to submit their thoughts and suggestions through an easy-to-use interface.",
      techStack: "HTML, CSS, JavaScript",
      features:
        "Real-time feedback collection, simple and clean interface, and fully responsive design for mobile and desktop.",
      github: "https://github.com/Lakshyalamba/Feedback",
      demo: "https://feedback-sable-seven.vercel.app/",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">PROJECTS</h1>
      <p className="projects-subtitle">Some of my recent works</p>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-row">
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-tech">
              <strong>Tech Stack:</strong> {project.techStack}
            </div>
            <div className="project-features">
              <strong>Features:</strong> {project.features}
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
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
