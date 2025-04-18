import React from 'react';
import { Link } from 'react-router-dom';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./Header.css"; // Ensure this file exists and styles are properly added

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
        <img src="/images/Logo.jpg" alt="X-ray warning sign" />
        </Link>
        
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="upload">Uplaod</Link></li>
          <li><Link to="medicine">Medicine</Link></li>
          <li><Link to="adviceSection">Advice</Link></li>
        </ul>
      </nav>
      <button className="button-1">Login</button>
      
      {/* Responsive Menu Icon */}
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
