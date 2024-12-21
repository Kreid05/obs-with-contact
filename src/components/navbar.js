import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import elysianLogo from '../assets/elysiangold.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={elysianLogo} alt="Elysian Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/facilities" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Facilities
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/room" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="book-btn">Book now</button>
        <FaUserCircle className="user-icon" size={30} />
      </div>
    </nav>
  );
}

export default Navbar;
