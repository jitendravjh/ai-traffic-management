import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
      <img src="/src/assets/react.svg" alt="Logo" className="logo-image" />
      AI Traffic System
    </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Navigation Links */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="https://traffic-management-seven.vercel.app/" className="nav-link" onClick={() => setIsOpen(false)}>Traffic System</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
