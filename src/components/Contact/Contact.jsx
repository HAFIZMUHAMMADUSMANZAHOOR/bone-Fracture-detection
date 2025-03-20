import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div id="contact" className="contact-container" data-aos="fade-right" data-aos-duration="800">
      
      {/* Left Side - Image */}
      <div className="contact-image">
        <img src="/images/contact.jpg" alt="Contact Us" />
      </div>

      {/* Right Side - Content */}
      <div className="contact-content">
        <h2>
          <FontAwesomeIcon icon={faPhoneAlt} /> Contact
        </h2>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:hafiz@example.com">📧 hafiz@example.com</a>
          <br />
          <strong>Phone: 📞</strong>{' '}
          <a href="tel:+92-314-XXXXXXX">+92-314-.......</a>
          <br /><br />
          For collaboration or inquiries, feel free to reach out to us. We are always happy to connect!
        </p>
        <button className="cta-button">Contact Us</button>
      </div>
      
    </div>
  )
}

export default Contact
