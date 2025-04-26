import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Reuseable Component/LoginForm';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="bg-[#005f73] flex items-center justify-between px-6 py-4 h-20 text-white sticky top-0 z-50 shadow-md">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <Link to="/">
            <img 
              src="/images/Logo.jpg" 
              alt="X-ray warning sign" 
              className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center mx-8">
          <ul className="flex space-x-5 items-center">
            <li>
              <Link 
                to="home" 
                className="font-bold text-lg relative px-3 py-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-1 after:bg-yellow-400 hover:after:w-4/5 hover:after:left-[10%] after:transition-all after:duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="about" 
                className="font-bold text-lg relative px-3 py-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-1 after:bg-yellow-400 hover:after:w-4/5 hover:after:left-[10%] after:transition-all after:duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                className="font-bold text-lg relative px-3 py-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-1 after:bg-yellow-400 hover:after:w-4/5 hover:after:left-[10%] after:transition-all after:duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="upload" 
                className="font-bold text-lg relative px-3 py-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-1 after:bg-yellow-400 hover:after:w-4/5 hover:after:left-[10%] after:transition-all after:duration-300"
              >
                Upload
              </Link>
            </li>
            <li>
              <Link 
                to="medicine" 
                className="font-bold text-lg relative px-3 py-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-1 after:bg-yellow-400 hover:after:w-4/5 hover:after:left-[10%] after:transition-all after:duration-300"
              >
                Medicine
              </Link>
            </li>
            <li>
              <Link 
                to="adviceSection" 
                className="font-bold text-lg relative px-3 py-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-1 after:bg-yellow-400 hover:after:w-4/5 hover:after:left-[10%] after:transition-all after:duration-300"
              >
                Advice
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button (Desktop) */}
        <div className="hidden md:block flex-shrink-0">
          <button 
            onClick={handleToggle}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div 
          className="md:hidden text-3xl cursor-pointer p-2"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>
          
          {/* Sidebar Content */}
          <div className="fixed top-0 left-0 h-full w-72 bg-[#005f73] shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="p-6 flex justify-between items-center border-b border-gray-600">
              <Link to="/" onClick={toggleMobileMenu}>
                <img 
                  src="/images/Logo.jpg" 
                  alt="X-ray warning sign" 
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                />
              </Link>
              <button 
                onClick={toggleMobileMenu}
                className="text-white text-3xl hover:text-yellow-400 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            
            <nav className="mt-6">
              <ul className="space-y-6 px-6 py-4">
                <li>
                  <Link 
                    to="home" 
                    onClick={toggleMobileMenu}
                    className="block text-white text-xl font-bold py-3 px-4 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="about" 
                    onClick={toggleMobileMenu}
                    className="block text-white text-xl font-bold py-3 px-4 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="contact" 
                    onClick={toggleMobileMenu}
                    className="block text-white text-xl font-bold py-3 px-4 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    to="upload" 
                    onClick={toggleMobileMenu}
                    className="block text-white text-xl font-bold py-3 px-4 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    Upload
                  </Link>
                </li>
                <li>
                  <Link 
                    to="medicine" 
                    onClick={toggleMobileMenu}
                    className="block text-white text-xl font-bold py-3 px-4 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    Medicine
                  </Link>
                </li>
                <li>
                  <Link 
                    to="adviceSection" 
                    onClick={toggleMobileMenu}
                    className="block text-white text-xl font-bold py-3 px-4 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    Advice
                  </Link>
                </li>
                <li className="pt-8 pb-4">
                  <button 
                    onClick={() => {
                      handleToggle();
                      toggleMobileMenu();
                    }}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 text-lg"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Login Form Modal */}
      {toggle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg relative max-w-md w-full mx-4 shadow-2xl">
            <button 
              onClick={handleToggle}
              className="absolute top-4 right-4 text-red-600 bg-gray-200 p-1 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
            <LoginForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;