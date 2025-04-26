import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div 
      id="contact" 
      className="flex flex-col md:flex-row items-center justify-center bg-slate-800 text-white p-8 w-full mx-auto shadow-lg shadow-white/10 h-auto md:h-[400px] gap-5"
      data-aos="fade-right" 
      data-aos-duration="800"
    >
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center">
        <img 
          src="/images/contact.jpg" 
          alt="Contact Us" 
          className="w-full h-full object-cover md:object-cover rounded-xl shadow-lg shadow-yellow-400/30"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 p-4 md:p-8 h-full flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Contact
        </h2>
        <p className="text-slate-200 mb-6 leading-relaxed">
          <strong className="text-white">Email:</strong>{' '}
          <a href="mailto:hafiz@example.com" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
            📧 hafiz@example.com
          </a>
          <br />
          <strong className="text-white">Phone: 📞</strong>{' '}
          <a href="tel:+92-314-XXXXXXX" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
            +92-314-.......
          </a>
          <br /><br />
          For collaboration or inquiries, feel free to reach out to us. <br /> We are always happy to connect!
        </p>
        <button 
          id="cta-button"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full md:w-auto self-start"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;