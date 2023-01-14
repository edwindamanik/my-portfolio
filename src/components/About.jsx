import React from "react";

const About = () => {
  return (
    <div className="about">
      <h2>Edwin </h2>
      <p className="description-profile">
        <span>
          Rakutta Sembiring Street - Pematangsiantar, North Sumatra, Indonesia
        </span>
        <span>+62 852 6260 7679</span>
        <a href="#">edwindamanik5@gmail.com</a>
      </p>
      <p className="skills-description">
        I am experienced in develop a website and mobile application. My
        expertise is in building a website display using React, and I use
        Laravel to create databases and APIs. To build a mobile application I
        use flutter and React Native.
      </p>
      <div className="social-media">
        <a href="#">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
