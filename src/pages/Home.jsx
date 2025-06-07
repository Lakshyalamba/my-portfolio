import React from 'react';
import '../styles/Home.css';
import profilePic from '../assets/images/profile.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="fade-in">Welcome to My Portfolio</h1>
        <p className="fade-in delay-1">
          Hello! I am Lakshya, a passionate developer who loves creating beautiful and functional web apps.
        </p>
        <button className="btn fade-in delay-2" onClick={() => alert('Thanks for visiting!')}>
          Say Hi 👋
        </button>
      </div>
      <div className="home-photo fade-in delay-3">
        <img src={profilePic} alt="Lakshya Profile" />
      </div>
    </div>
  );
}

export default Home;
