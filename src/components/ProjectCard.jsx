import React from "react";

function ProjectCard({ title, description, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} width="100%" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
