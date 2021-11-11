import React from 'react';
import { NavLink } from 'react-router-dom';
import mylogo from './assets/images/mylogo.png';
import './assets/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="logoContainer">
        <img className="logo" alt="" src={mylogo} />
        <h1> Space Traveler&apos;s hub </h1>
      </div>
      <div className="linksContainer">
        <ul className="nav-elements">
          <li>
            <NavLink
              className="links"
              activeClassName="activelinks"
              to="/Rockets"
            >
              Rockets
            </NavLink>

          </li>
          <li>
            <NavLink
              className="links"
              activeClassName="activelinks"
              to="/Missions"
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              className="links"
              activeClassName="activelinks"
              to="/Profile"
            >
              My Profile
            </NavLink>

          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
