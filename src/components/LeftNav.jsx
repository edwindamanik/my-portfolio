import React from "react";
import ProfilePicture from "../my-picture-sidamanik.png";
import { useState } from "react";

const LeftNav = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <div
      className={`left-navbar ${navbar ? "navbar-active" : "navbar-inactive"}`}
    >
      <i onClick={navbarHandler} className={`fa-solid fa-bars `}></i>
      <div className="profile-picture">
        <a href="#">
          <img src={ProfilePicture} alt="My Profile Picture" />
        </a>
      </div>

      <ul className="menu-items">
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">experience</a>
        </li>
        <li>
          <a href="#">education</a>
        </li>
        <li>
          <a href="#">skills</a>
        </li>
        <li>
          <a href="#">interest</a>
        </li>
        <li>
          <a href="#">certifications</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
