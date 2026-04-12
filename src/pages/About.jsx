import React, { useEffect, useState, useRef } from 'react';
import '../styles/About.css';

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'Bash'],
  ai: ['LangChain', 'LangGraph', 'OpenAI API', 'Pinecone', 'Vector Databases', 'RAG Systems'],
  frameworks: ['React', 'FastAPI', 'Flask', 'Node.js', 'Next.js', 'Django'],
  tools: ['Git', 'Docker', 'AWS', 'Google Cloud', 'PostgreSQL', 'MongoDB', 'Redis'],
  concepts: ['Machine Learning', 'Deep Learning', 'NLP', 'Agentic AI', 'System Design', 'CI/CD']
};

function About() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState('languages');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = Object.keys(skills);

  return (
    <div className="about-container">
      <div className="bg-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-bg"></div>
      </div>

      <section 
        id="intro" 
        ref={el => sectionRefs.current['intro'] = el}
        className={`about-section intro-section ${visibleSections.has('intro') ? 'visible' : ''}`}
      >
        <div className="section-label">
          <span className="label-line"></span>
          <span className="label-text">Get to know me</span>
        </div>
        <h1 className="section-title">
          <span className="title-line">About</span>
          <span className="title-gradient">Me</span>
        </h1>
        
        <div className="intro-content">
          <div className="intro-text">
            <p className="lead-text">
              I'm <span className="highlight">Lakshya Choudhary</span>, a passionate Software Engineering Intern 
              specializing in <span className="highlight-accent">Agentic AI Development</span>.
            </p>
            <p className="description">
              I build intelligent systems that can reason, plan, and execute complex tasks autonomously. 
              With a strong foundation in machine learning and data structures & algorithms, I combine 
              technical expertise with creative problem-solving to deliver impactful solutions.
            </p>
            <p className="description">
              My journey in tech is driven by curiosity and a relentless desire to learn. I've solved 
              425+ LeetCode problems, built multiple production-ready projects, and continue to explore 
              the cutting edge of AI technology.
            </p>
          </div>
          
          <div className="quick-facts">
            <div className="fact-card">
              <div className="fact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="fact-content">
                <span className="fact-number">425+</span>
                <span className="fact-label">LeetCode Problems</span>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="fact-content">
                <span className="fact-number">10+</span>
                <span className="fact-label">Projects Built</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="skills" 
        ref={el => sectionRefs.current['skills'] = el}
        className={`about-section skills-section ${visibleSections.has('skills') ? 'visible' : ''}`}
      >
        <div className="section-label">
          <span className="label-line"></span>
          <span className="label-text">What I work with</span>
        </div>
        <h2 className="section-title small">
          <span className="title-line">Technical</span>
          <span className="title-gradient">Skills</span>
        </h2>

        <div className="skills-tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              className={`skill-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="skills-display">
          {skills[activeTab].map((skill, index) => (
            <div 
              key={skill} 
              className="skill-tag"
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <span className="skill-name">{skill}</span>
              <span className="skill-glow"></span>
            </div>
          ))}
        </div>

        <div className="core-competencies">
          <h3>Core Competencies</h3>
          <div className="competencies-grid">
            <div className="competency-card">
              <div className="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
                  <path d="M20 12a8 8 0 0 0-8-8v8h8z"/>
                </svg>
              </div>
              <h4>Agentic AI</h4>
              <p>Building autonomous agents with LangChain, LangGraph, tool calling, and multi-agent orchestration systems.</p>
            </div>
            <div className="competency-card">
              <div className="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h4>Full Stack</h4>
              <p>End-to-end development from frontend interfaces to backend APIs, databases, and deployment pipelines.</p>
            </div>
            <div className="competency-card">
              <div className="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h4>Problem Solving</h4>
              <p>Strong fundamentals in algorithms and data structures with 425+ LeetCode problems solved.</p>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="interests" 
        ref={el => sectionRefs.current['interests'] = el}
        className={`about-section interests-section ${visibleSections.has('interests') ? 'visible' : ''}`}
      >
        <div className="section-label">
          <span className="label-line"></span>
          <span className="label-text">Beyond code</span>
        </div>
        <h2 className="section-title small">
          <span className="title-line"> Interests &</span>
          <span className="title-gradient"> Hobbies</span>
        </h2>

        <div className="interests-grid">
          <div className="interest-card">
            <div className="interest-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h4>AI Research</h4>
            <p>Keeping up with the latest breakthroughs in artificial intelligence and machine learning.</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h4>Open Source</h4>
            <p>Contributing to open source projects and building tools for the developer community.</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <h4>Tech Blogging</h4>
            <p>Writing articles about AI, development best practices, and coding tutorials.</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h4>Hackathons</h4>
            <p>Participating in coding competitions and hackathons to solve challenging problems.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
