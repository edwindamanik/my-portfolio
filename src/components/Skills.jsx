import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div>
        <h4>programming languages & tools</h4>
        <div className="skills-list">
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-square-js"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-angular"></i>
          <i class="fa-brands fa-laravel"></i>
          <i class="fa-brands fa-bootstrap"></i>
          <i class="fa-brands fa-sass"></i>
        </div>
      </div>
      <div className="workflow">
        <h4>Workflow</h4>
        <ul>
          <li>
            <i class="fa-solid fa-check"></i> Mobile-First, Responsive Design
          </li>
          <li>
            <i class="fa-solid fa-check"></i> Cross Browser Testing & Debugging
          </li>
          <li>
            <i class="fa-solid fa-check"></i> Cross Functional Teams
          </li>
          <li>
            <i class="fa-solid fa-check"></i> Agile Development & Scrum
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
