import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from '../../User/Login';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="nav-logo">Pooling Platform</div>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/pools">Pools</a>
          <Link to="/login">Logout</Link>
          {/* Add more navigation links as needed */}
        </div>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    );
  };
  

export default Navbar;
