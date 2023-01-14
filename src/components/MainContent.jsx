import React from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const MainContent = () => {
  return (
    <div className="main-content">
      <About />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

export default MainContent;
