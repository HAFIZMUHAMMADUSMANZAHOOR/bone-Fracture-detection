import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a3d62] text-white pt-10 font-sans">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        {/* Brand Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 px-4">
          <h4 className="text-[#82ccdd] mb-5 text-lg relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#3c6382] sm:after:left-1/2 sm:after:-translate-x-1/2">
            BoneCare Diagnostics
          </h4>
          <p className="text-[#d1d8e0] mb-4 leading-relaxed">
            Advanced AI-powered fracture detection and treatment advisory system
          </p>
          <div className="flex mt-5 space-x-4 sm:justify-center md:justify-start">
            <a href="#" className="text-[#82ccdd] text-xl hover:text-white transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-[#82ccdd] text-xl hover:text-white transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-[#82ccdd] text-xl hover:text-white transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-[#82ccdd] text-xl hover:text-white transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 px-4">
          <h4 className="text-[#82ccdd] mb-5 text-lg relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#3c6382] sm:after:left-1/2 sm:after:-translate-x-1/2">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#d1d8e0] hover:text-[#82ccdd] transition-colors">Home</a></li>
            <li><a href="#" className="text-[#d1d8e0] hover:text-[#82ccdd] transition-colors">Fracture Detection</a></li>
            <li><a href="#" className="text-[#d1d8e0] hover:text-[#82ccdd] transition-colors">Treatment Advice</a></li>
            <li><a href="#" className="text-[#d1d8e0] hover:text-[#82ccdd] transition-colors">Medicine Database</a></li>
            <li><a href="#" className="text-[#d1d8e0] hover:text-[#82ccdd] transition-colors">Recovery Timeline</a></li>
          </ul>
        </div>

        {/* Medical Resources */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 px-4">
          <h4 className="text-[#82ccdd] mb-5 text-lg relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#3c6382] sm:after:left-1/2 sm:after:-translate-x-1/2">
            Medical Resources
          </h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#d1d8e0] hover:text-[#82ccdd] transition-colors">First Aid for Fractures</a></li>
            <li><a href="#" className="text-[#d1d8e0] hover:text-[#82ccdd] transition-colors">Physical Therapy</a></li>
            <li><a href="#" className="text-[#d1d8e0] hover:text-[#82ccdd] transition-colors">Pain Management</a></li>
            <li><a href="#" className="text-[#d1d8e0] hover:text-[#82ccdd] transition-colors">Emergency Contacts</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 px-4">
          <h4 className="text-[#82ccdd] mb-5 text-lg relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#3c6382] sm:after:left-1/2 sm:after:-translate-x-1/2">
            Contact Us
          </h4>
          <div className="space-y-3">
            <p className="text-[#d1d8e0] flex items-center sm:justify-center md:justify-start">
              <i className="fas fa-map-marker-alt text-[#82ccdd] mr-2 w-5 text-center"></i>
              123 Health Street, Medical City
            </p>
            <p className="text-[#d1d8e0] flex items-center sm:justify-center md:justify-start">
              <i className="fas fa-phone text-[#82ccdd] mr-2 w-5 text-center"></i>
              +92 300 1234567
            </p>
            <p className="text-[#d1d8e0] flex items-center sm:justify-center md:justify-start">
              <i className="fas fa-envelope text-[#82ccdd] mr-2 w-5 text-center"></i>
              support@bonecare.com
            </p>
            <p className="text-[#d1d8e0] flex items-center sm:justify-center md:justify-start">
              <i className="fas fa-clock text-[#82ccdd] mr-2 w-5 text-center"></i>
              24/7 Emergency Support
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer and Copyright */}
      <div className="bg-[#082a44] py-5 text-center">
        <div className="max-w-4xl mx-auto mb-4 px-5">
          <p className="text-[#d1d8e0] text-xs leading-relaxed">
            <strong className="font-bold">Disclaimer:</strong> This system provides preliminary fracture detection and treatment suggestions. Always consult with a qualified healthcare professional for proper diagnosis and treatment.
          </p>
        </div>
        <div className="text-[#82ccdd] text-sm">
          <p>
            &copy; 2023 BoneCare Diagnostics. All Rights Reserved. | 
            <a href="#" className="hover:text-white mx-2 sm:mx-3 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-white mx-2 sm:mx-3 transition-colors">Terms of Service</a> | 
            <a href="#" className="hover:text-white mx-2 sm:mx-3 transition-colors">HIPAA Compliance</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;