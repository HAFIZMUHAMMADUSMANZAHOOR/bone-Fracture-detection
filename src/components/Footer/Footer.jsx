import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const socialIcons = [
    { icon: faFacebookF, link: '#' },
    { icon: faTwitter, link: '#' },
    { icon: faInstagram, link: '#' },
    { icon: faWhatsapp, link: '#' },
    { icon: faLinkedinIn, link: '#' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Bone Fracture Detection</h2>
        <p>Enhancing medical diagnostics with advanced deep learning technology.</p>
        <ul className="social-icons">
          {socialIcons.map((social, index) => (
            <li key={index}>
              <a href={social.link} className="social-icon">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Bone Fracture Detection | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer

/* Footer CSS */

