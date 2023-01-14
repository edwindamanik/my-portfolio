import React from "react";
import About from "./About";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import Interest from "./Interest";
import Skills from "./Skills";

const MainContent = () => {
  return (
    <div className="main-content">
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interest />
      <Certifications />
    </div>
  );
};

export default MainContent;
