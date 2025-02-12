import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className='hero-logo'></div>
      <div className='nav-menu'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/use-cases">Use Cases</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </div>
      <div className='user-login'>
        <button >LogIn</button>
      </div>
    </nav>
  );
}

export default Navbar;
