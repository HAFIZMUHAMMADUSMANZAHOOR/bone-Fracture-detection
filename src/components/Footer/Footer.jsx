import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="medical-footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section">
          <h4>BoneCare Diagnostics</h4>
          <p>Advanced AI-powered fracture detection and treatment advisory system</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Fracture Detection</a></li>
            <li><a href="#">Treatment Advice</a></li>
            <li><a href="#">Medicine Database</a></li>
            <li><a href="#">Recovery Timeline</a></li>
          </ul>
        </div>

        {/* Medical Resources */}
        <div className="footer-section">
          <h4>Medical Resources</h4>
          <ul>
            <li><a href="#">First Aid for Fractures</a></li>
            {/* <li><a href="#">Orthopedic Specialists</a></li> */}
            <li><a href="#">Physical Therapy</a></li>
            <li><a href="#">Pain Management</a></li>
            <li><a href="#">Emergency Contacts</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> 123 Health Street, Medical City</p>
            <p><i className="fas fa-phone"></i> +92 300 1234567</p>
            <p><i className="fas fa-envelope"></i> support@bonecare.com</p>
            <p><i className="fas fa-clock"></i> 24/7 Emergency Support</p>
          </div>
        </div>
      </div>

      {/* Disclaimer and Copyright */}
      <div className="footer-bottom">
        <div className="disclaimer">
          <p><strong>Disclaimer:</strong> This system provides preliminary fracture detection and treatment suggestions. Always consult with a qualified healthcare professional for proper diagnosis and treatment.</p>
        </div>
        <div className="copyright">
          <p>&copy; 2023 BoneCare Diagnostics. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">HIPAA Compliance</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;