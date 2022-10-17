import React from "react";

export default function Projects({
  name,
  repo,
  deploy,
  image,
}) {
    
    return (
      <div className="project-section">
        <h1>{name}</h1>
        <a className="repo-link" href={repo}>
          Github Repository
        </a>
        <a className="repo-link" href={deploy}>
          Deployed Application URL
        </a>
        <img className="project-image" src={image} />
      </div>
    );
}
