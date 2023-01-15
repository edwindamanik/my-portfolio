import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div>
        <h4>programming languages & tools</h4>
        <div className="skills-list">
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-square-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-angular"></i>
          <i className="fa-brands fa-laravel"></i>
          <i className="fa-brands fa-bootstrap"></i>
          <i className="fa-brands fa-sass"></i>
        </div>
      </div>
      <div className="workflow">
        <h4>Workflow</h4>
        <ul>
          <li>
            <i className="fa-solid fa-check"></i> Mobile-First, Responsive
            Design
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Cross Browser Testing &
            Debugging
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Cross Functional Teams
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Agile Development & Scrum
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
