import React from 'react';
import '../styles/Home.css';
import profilePic from '../assets/images/profile.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="fade-in">Hi, I'm Lakshya 👋</h1>
        <h2 className="fade-in delay-1">Frontend Developer | Tech Enthusiast</h2>
        <p className="fade-in delay-2 quote">
          “Code is like humor. When you have to explain it, it’s bad.”
        </p>
        <p className="fade-in delay-3">
          I love turning ideas into reality using beautiful, responsive designs and interactive UI/UX experiences.
        </p>
        <button className="btn-glow fade-in delay-4" onClick={() => alert('Thanks for visiting!')}>
          Connect With Me 🚀
        </button>
      </div>
      <div className="home-photo fade-in delay-5">
        <img src={profilePic} alt="Lakshya Profile" />
      </div>
    </div>
  );
}

export default Home;
