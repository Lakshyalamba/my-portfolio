import React, { useEffect, useState, useRef } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "MoneyMind",
    category: "Full Stack",
    description:
      "A comprehensive personal finance management platform with income/expense tracking, budget management, and financial goal setting. Features interactive dashboards with category-wise analytics and secure authentication.",
    techStack: ["React.js", "Node.js", "Express.js", "Prisma", "PostgreSQL", "JWT"],
    features: ["Dashboard Analytics", "Budget Tracking", "SIP Calculator", "Currency Converter", "Export Reports"],
    github: "https://github.com/Lakshyalamba/moneymind",
    demo: "https://moneymind-personalfinance.netlify.app/",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
    title: "DailyDrive",
    category: "Full Stack",
    description:
      "A unified self-improvement platform combining habit tracking, course enrollment, and community engagement. Helps users build consistent habits across fitness, study, and wellness through streak-based tracking.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    features: ["Streak Tracking", "Course Enrollment", "Goal Management", "Community Posts", "Analytics Export"],
    github: "https://github.com/Lakshyalamba/dailydrive",
    demo: "https://dailydrive-anfy.vercel.app/",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    id: 3,
    title: "Bingequiz",
    category: "Web App",
    description:
      "An engaging movie quiz application featuring interactive questions, multiple difficulty levels, and a responsive design. Test your film knowledge with dynamic question sets.",
    techStack: ["React", "HTML", "CSS", "JavaScript"],
    features: ["Multiple Difficulty Levels", "Responsive Design", "Score Tracking", "Question Bank"],
    github: "https://github.com/Lakshyalamba/bingequiznextjs",
    demo: "https://bingequiz.netlify.app/",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    id: 4,
    title: "Mini Calendar",
    category: "Utility",
    description:
      "A lightweight calendar application displaying the current month in an elegant grid format. Highlights today and adapts seamlessly to different screen sizes.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: ["Current Day Highlight", "Grid Layout", "Lightweight", "Responsive"],
    github: "https://github.com/Lakshyalamba/Mini-Calender",
    demo: "https://mini-calender-mu.vercel.app/",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    id: 5,
    title: "AI Agent System",
    category: "AI/ML",
    description:
      "Autonomous AI agent system built with LangChain and LangGraph, capable of multi-step reasoning, tool calling, and complex task automation with memory and context awareness.",
    techStack: ["Python", "LangChain", "LangGraph", "OpenAI API", "Vector DB"],
    features: ["Multi-Agent Orchestration", "Tool Calling", "RAG Systems", "Memory Management"],
    github: "https://github.com/Lakshyalamba",
    demo: "#",
    gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)"
  }
];

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const projectRefs = useRef({});

  const categories = ['All', 'Full Stack', 'Web App', 'AI/ML', 'Utility'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleProjects(prev => new Set([...prev, entry.target.dataset.id]));
        }
      });
    }, observerOptions);

    Object.values(projectRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-container">
      <div className="bg-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-bg"></div>
      </div>

      <header className="projects-header">
        <div className="section-label">
          <span className="label-line"></span>
          <span className="label-text">My work</span>
        </div>
        <h1 className="section-title">
          <span className="title-line">Featured</span>
          <span className="title-gradient">Projects</span>
        </h1>
        <p className="header-subtitle">
          A showcase of my passion for building innovative solutions
        </p>
      </header>

      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            ref={el => projectRefs.current[project.id] = el}
            data-id={project.id}
            className={`project-card ${visibleProjects.has(String(project.id)) ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="card-glow" style={{ background: project.gradient }}></div>
            
            <div className="card-header">
              <div className="card-icon-wrapper" style={{ background: project.gradient }}>
                <span className="card-icon">P</span>
              </div>
              <span className="card-category">{project.category}</span>
            </div>

            <h2 className="card-title">{project.title}</h2>
            
            <p className="card-description">{project.description}</p>

            <div className="card-features">
              <h4>Key Features</h4>
              <div className="features-list">
                {project.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>

            <div className="card-tech">
              <h4>Tech Stack</h4>
              <div className="tech-list">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="card-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn btn-github"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Source Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn btn-demo"
                style={{ background: project.gradient }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                <span>Live Demo</span>
              </a>
            </div>

            <div className="card-border" style={{ background: project.gradient }}></div>
          </article>
        ))}
      </div>

      <div className="projects-cta">
        <p>Interested in working together?</p>
        <a href="/contact" className="cta-button">
          <span>Let's Connect</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Projects;
