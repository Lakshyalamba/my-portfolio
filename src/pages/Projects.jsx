import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "MoneyMind",
      description:
        "Built a full-stack personal finance management platform using React.js, Node.js/Express.js, Prisma, and PostgreSQL with secure JWT authentication. Enabled users to track income, expenses, budgets, and financial goals through an interactive, data-driven dashboard with category-wise analytics.",
      techStack: "React.js + Node.js/Express.js + Prisma + PostgreSQL + JWT Authentication",
      features:
        "Integrated advanced features such as search, filtering, sorting, pagination, editable transactions, and financial tools (SIP calculator, currency converter, basic calculator) within a fully responsive, scalable, and intuitive UI.",
      github: "https://github.com/Lakshyalamba/moneymind",
      demo: "https://moneymind-personalfinance.netlify.app/",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      title: "Mini Calendar",
      description:
        "A simple mini calendar app that displays the current month with days arranged in a grid format, highlighting today’s date.",
      techStack: "HTML, CSS, JavaScript",
      features:
        "Lightweight UI, highlights the current date, and responsive layout for different screen sizes.",
      github: "https://github.com/Lakshyalamba/Mini-Calender",
      demo: "https://mini-calender-mu.vercel.app/",
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
