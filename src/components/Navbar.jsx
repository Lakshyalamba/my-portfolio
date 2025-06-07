import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
