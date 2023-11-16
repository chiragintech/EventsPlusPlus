import "./NavBar.css";
import logo from "../images/logo.png";
import React, { useEffect, useState } from "react";
//import Home from "./pages/Home.js";
//import { useHistory } from "react-router-dom";

function changeControl() {
  window.location.href = "/";
}
function NavBar() {
  //This code is for showing the navbar when scrolling down after 100 pixels
  const [show, handleShow] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(1);
      } else {
        handleShow(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="logo" onClick= {changeControl} >
      <img className="nav_logo" src={logo} alt="events++ Logo" />
      </div>
      <a href="/">Home</a>
      <a href="/reviews">Reviews</a>
      <a href="/search">Search</a>
      <a href="/create">Create Event</a>
      <a href="/signup">Sign Up</a>
      <a href="/login">Login</a>
    </div>
  );
}

export default NavBar;
