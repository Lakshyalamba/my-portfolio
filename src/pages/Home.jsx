import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import profilePic from '../assets/images/profile.jpg';
import { Link } from 'react-router-dom';

const typewriterTexts = [
  'Software Engineering Intern',
  'Agentic AI Developer',
  'Python & JavaScript Enthusiast',
  'Problem Solver'
];

function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <div className="home-container">
      <div className="bg-gradient"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <div className="hero-section">
        <div className="home-photo fade-in">
          <div className="photo-ring ring-1"></div>
          <div className="photo-ring ring-2"></div>
          <img src={profilePic} alt="Lakshya Profile" />
        </div>
        
        <div className="intro-text">
          <div className="greeting fade-in delay-1">Hello, I'm</div>
          <h1 className="name fade-in delay-2">
            <span className="name-highlight">Lakshya</span>
          </h1>
          <div className="typewriter-container fade-in delay-3">
            <span className="typewriter">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="tagline fade-in delay-4">
            Building intelligent systems and scalable solutions with passion and precision.
          </p>
          <div className="cta-buttons fade-in delay-5">
            <Link to="/projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="stats-section fade-in delay-6">
        <div className="stat-item">
          <span className="stat-number">425+</span>
          <span className="stat-label">LeetCode Problems</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Projects Built</span>
        </div>
      </div>

      <div className="scroll-indicator fade-in delay-7">
        <span>Scroll to explore</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
