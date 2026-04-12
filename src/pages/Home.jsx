import React, { useEffect, useState, useRef } from 'react';
import '../styles/Home.css';
import profilePic from '../assets/images/profile.jpg';
import { Link } from 'react-router-dom';

const typewriterTexts = [
  'Software Engineering Intern',
  'Agentic AI Developer',
  'LangChain & LangGraph Expert',
  'Building Autonomous AI Agents'
];

function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [countersStarted, setCountersStarted] = useState(false);
  const [counters, setCounters] = useState({ leetcode: 0, projects: 0 });
  const statsRef = useRef(null);

  useEffect(() => {
    const currentText = typewriterTexts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [countersStarted]);

  useEffect(() => {
    if (!countersStarted) return;
    
    const targets = { leetcode: 425, projects: 10 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      leetcode: targets.leetcode / steps,
      projects: targets.projects / steps
    };
    
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCounters({
        leetcode: Math.min(Math.round(increment.leetcode * current), targets.leetcode),
        projects: Math.min(Math.round(increment.projects * current), targets.projects)
      });
      if (current >= steps) clearInterval(interval);
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [countersStarted]);

  const generateParticles = () => {
    return Array.from({ length: 30 }, (_, i) => (
      <div 
        key={i} 
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      />
    ));
  };

  return (
    <div className="home-container">
      <div className="bg-gradient"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <div className="particles">
        {generateParticles()}
      </div>
      
      <div 
        className="hero-section"
        style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
      >
        <div className="home-photo fade-in">
          <div className="photo-ring ring-1"></div>
          <div className="photo-ring ring-2"></div>
          <div className="photo-glow"></div>
          <img src={profilePic} alt="Lakshya Profile" />
          <div className="orbit">
            <div className="orbit-dot"></div>
          </div>
        </div>
        
        <div className="intro-text">
          <div className="greeting slide-up delay-1">
            Hello, I'm
          </div>
          <h1 className="name slide-up delay-2">
            <span className="name-highlight glitch" data-text="Lakshya">Lakshya</span>
          </h1>
          <div className="typewriter-container slide-up delay-3">
            <span className="typewriter">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="tagline slide-up delay-4">
            Building intelligent systems and scalable solutions with passion and precision. 
            Specializing in Agentic AI development, I create autonomous agents that can reason, 
            plan, and execute complex tasks using cutting-edge frameworks like LangChain and LangGraph.
          </p>
          <div className="cta-buttons slide-up delay-5">
            <Link to="/projects" className="btn btn-primary magnetic">
              <span>View Projects</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
              <div className="btn-glow-effect"></div>
            </Link>
            <Link to="/contact" className="btn btn-secondary magnetic">
              <span>Get In Touch</span>
              <div className="btn-shimmer"></div>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="stats-section fade-in delay-6" ref={statsRef}>
        <div className="stat-item pulse-hover">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <span className="stat-number" data-value="425">+{counters.leetcode}</span>
          <span className="stat-label">LeetCode Problems</span>
          <div className="stat-glow"></div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item pulse-hover">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <span className="stat-number">+{counters.projects}</span>
          <span className="stat-label">Projects Built</span>
          <div className="stat-glow"></div>
        </div>
      </div>

      <div className="social-links slide-up delay-7">
        <a href="https://github.com/Lakshyalamba" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/lakshyachoudhary26/" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://leetcode.com/u/lakshya_choudhary/" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.483 0a1.642 1.642 0 0 0-1.644 1.643v17.31a1.642 1.642 0 0 0 1.644 1.642h.011a1.642 1.642 0 0 0 1.643-1.642V17.31c0-.906-.738-1.643-1.643-1.643h-.011V1.643zm3.565 6.928h-1.643a.821.821 0 0 1-.822-.822V3.866a.821.821 0 0 1 .822-.822h1.643a.821.821 0 0 1 .822.822v2.192a.821.821 0 0 1-.822.822zm-2.565 8.13a1.642 1.642 0 0 0 1.643-1.643v-4.642a1.642 1.642 0 1 0-3.286 0v4.642a1.642 1.642 0 0 0 1.643 1.643z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Home;
