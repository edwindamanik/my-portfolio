import React from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";

const MainContent = () => {
  return (
    <div className="main-content">
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default MainContent;
