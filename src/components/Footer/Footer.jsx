import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
// import './Footer.css'

const Footer = () => {
  const socialIcons = [
    { icon: faFacebookF, link: '#' },
    { icon: faTwitter, link: '#' },
    { icon: faInstagram, link: '#' },
    { icon: faLinkedinIn, link: '#' },
    { icon: faWhatsapp, link: '#' }
  ]

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <h2 className="footer-title">Bone Fracture Detection</h2>
        <p className="footer-tagline">
          Powered by AI to detect fractures and provide expert advisory support for better recovery.
        </p>

        {/* Contact Info */}
        <div className="footer-contact">
          <p>Email: <a href="mailto:info@fractureai.com">info@fractureai.com</a></p>
          <p>Phone: <a href="tel:+923001234567">+92 300 1234567</a></p>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-newsletter">
          <input type="email" placeholder="Your Email" />
          <button type="button">Subscribe</button>
        </div>

        <ul className="footer-social-icons">
          {socialIcons.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noreferrer" className="footer-social-icon">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          ))}
          
        </ul>

        
      </div>
    </footer>
  )
}

export default Footer
