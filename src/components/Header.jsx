import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isSolutions = location.pathname === '/solutions';
  const isContact = location.pathname === '/contact';

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/Isolation_Mode.svg" alt="Agrarian Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              aria-current={isHome ? "page" : undefined}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${isHome ? 'bg-agrarian-green text-white shadow-md' : 'text-gray-600 hover:text-agrarian-green'}`}
            >
              Home
            </Link>

            <Link 
              to="/solutions" 
              aria-current={isSolutions ? "page" : undefined}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${isSolutions ? 'bg-agrarian-green text-white shadow-md' : 'text-gray-600 hover:text-agrarian-green'}`}
            >
              Our Solutions
            </Link>

            <Link 
              to="/about" 
              aria-current={isAbout ? "page" : undefined}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${isAbout ? 'bg-agrarian-green text-white shadow-md' : 'text-gray-600 hover:text-agrarian-green'}`}
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              aria-current={isContact ? "page" : undefined}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${isContact ? 'bg-agrarian-green text-white shadow-md' : 'text-gray-600 hover:text-agrarian-green'}`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:block w-10"></div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              label={isOpen ? "Close menu" : "Open menu"}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50 transform origin-top transition-all">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-medium ${isHome ? 'bg-agrarian-green text-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Home
            </Link>
            
            <Link 
              to="/solutions" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-medium mt-2 ${isSolutions ? 'bg-agrarian-green text-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Our Solutions
            </Link>

            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-medium mt-2 ${isAbout ? 'bg-agrarian-green text-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-medium mt-2 ${isContact ? 'bg-agrarian-green text-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
