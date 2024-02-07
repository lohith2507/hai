import React from "react";
import image from "../images/HaiLogo.png";
// import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-3  ">
          <a to="/" className="logo-link">
            <img src={image} alt="Logo" className="logo-img"></img>
          </a>
        </div>
        <div className="col-md-3 ">Get Started</div>
        <div className="col-md-3 ">Tutors </div>
        <div className="col-md-3 ">About us</div>
      </div>
    </div>
  );
};
export default NavBar;
