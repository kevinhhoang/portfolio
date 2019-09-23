import React from "react";
import "./Projects.css";
import projectpic from "./projectpic.png";
import projectpic2 from "./projectpic2.png";

const Projects = () => {
  return (
    <div className="container">
      <div className="project-container-start project-spacer">
        <div className="img-container-start">
          <img className="project-img" src={projectpic} alt="project1" />
        </div>
        <div className="project-text-start">
          <span className="project-number"> 01 - </span>
          <h2> Sasa Sushi</h2>
          <p> Redesigned the website of a sushi restaurant </p>
        </div>
      </div>
      <div className="project-container-end project-spacer">
        <div className="project-text-end">
          <span className="project-number"> 02 - </span>
          <h2> Face Recognition API</h2>
          <p> Redesigned the website of a sushi restaurant </p>
        </div>
        <div className="img-container-end">
          <img className="project-img" src={projectpic2} alt="project1" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
