import React from 'react';
import mylogo from './assets/images/mylogo.png';
import './assets/Navbar.css';
// create navbar
const Navbar = () => (
  <nav className="navbar">
    <div className="logoContainer">
      <img className="logo" alt="" src={mylogo} />
    </div>
    <div className="linksContainer" />
  </nav>
);

export default Navbar;
