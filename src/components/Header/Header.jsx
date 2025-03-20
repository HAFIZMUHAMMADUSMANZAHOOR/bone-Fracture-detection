import React from 'react';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./Header.css"; // Ensure this file exists and styles are properly added

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/Logo.jpg" alt="X-ray warning sign" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#upload-area">Detection</a></li>
          <li><a href="#medicine">Medicine</a></li>
          <li><a href="#advice-section">Advice</a></li>
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
