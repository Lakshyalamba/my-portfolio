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
          <h2 className="fade-in delay-2">Full Stack Developer | Tech Enthusiast</h2>
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
              I love turning ideas into reality using beautiful, responsive designs and interactive UI/UX experiences. 
              With expertise in React, JavaScript, and modern web technologies, I create seamless digital solutions 
              that combine functionality with aesthetic appeal.
            </p>
          </div>
          
          <div className="card fade-in delay-5">
            <h3>My Journey</h3>
            <p>
              Currently pursuing Computer Science at Newton School of Technology, I'm passionate about 
              problem-solving and have solved 200+ coding challenges. I enjoy building projects that 
              make a difference and continuously learning new technologies to stay ahead in this 
              ever-evolving field.
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