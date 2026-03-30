import React from 'react';
import '../styles/Home.css';
import profilePic from '../assets/images/profile.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="home-photo fade-in">
          <img src={profilePic} alt="Lakshya Profile" />
          <div className="photo-glow"></div>
        </div>
        <div className="intro-text">
          <h1 className="fade-in delay-1">Hi, I'm <span className="name-highlight">Lakshya</span></h1>
          <h2 className="fade-in delay-2">Software Engineering Intern | Agentic AI Developer</h2>
        </div>
      </div>
      
      <div className="content-section">
        <div className="quote-card fade-in delay-3">
          <p className="quote">"Code is like humor. When you have to explain it, it's bad."</p>
        </div>
        
        <div className="description-cards">
          <div className="card fade-in delay-4">
            <h3>What I Do</h3>
            <p>
              I build systems in fast-paced team environments, delivering features end-to-end — from development 
              through deployment. Proficient in Python and JavaScript, I specialize in Agentic AI development 
              using LangChain and LangGraph, including tool-calling and orchestration.
            </p>
          </div>
          
          <div className="card fade-in delay-5">
            <h3>My Journey</h3>
            <p>
              With solid foundations in machine learning and data structures & algorithms, I've solved 
              425+ LeetCode problems. I'm an engineer focused on writing debuggable, scalable code — 
              driven by curiosity, continuous improvement, and a commitment to building software 
              that works reliably at scale.
            </p>
          </div>
        </div>
        
        <div className="cta-section fade-in delay-6">
          <button className="btn-glow" onClick={() => alert('Thanks for visiting!')}>
            Connect With Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;