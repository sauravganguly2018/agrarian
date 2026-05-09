import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isAbout = location.pathname.startsWith('/about');
  const isSustainability = location.pathname.startsWith('/sustainability');
  const isGallery = location.pathname.startsWith('/gallery');
  const isNews = location.pathname.startsWith('/news');
  const isSolutions = location.pathname.startsWith('/solutions');
  const isContact = location.pathname.startsWith('/contact');

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a1f14]/95 backdrop-blur-md py-2 border-b border-white/10 shadow-xl' 
        : 'bg-white/90 backdrop-blur-md py-3.5 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/Isolation_Mode.svg" alt="Agrarian Logo" className="h-8 md:h-10 w-auto" />
            </Link>
          </div>
 
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-2">
              <Link 
                to="/" 
                className={`px-6 py-2 rounded-full text-[15px] font-bold transition-all ${
                  scrolled 
                    ? (isHome ? 'bg-white text-[#0a1f14]' : 'text-white hover:text-[#76b947]')
                    : (isHome ? 'bg-[#214d3e] text-white shadow-md' : 'text-gray-800 hover:text-agrarian-green')
                }`}
              >
                Home
              </Link>
 
              <Link 
                to="/solutions" 
                className={`px-6 py-2 rounded-full text-[15px] font-bold transition-all ${
                  scrolled 
                    ? (isSolutions ? 'bg-white text-[#0a1f14]' : 'text-white hover:text-[#76b947]')
                    : (isSolutions ? 'bg-[#214d3e] text-white shadow-md' : 'text-gray-800 hover:text-agrarian-green')
                }`}
              >
                Our solutions
              </Link>
 
              <Link 
                to="/about" 
                className={`px-6 py-2 rounded-full text-[15px] font-bold transition-all ${
                  scrolled 
                    ? (isAbout ? 'bg-white text-[#0a1f14]' : 'text-white hover:text-[#76b947]')
                    : (isAbout ? 'bg-[#214d3e] text-white shadow-md' : 'text-gray-800 hover:text-agrarian-green')
                }`}
              >
                About Us
              </Link>

              <Link 
                to="/sustainability" 
                className={`px-6 py-2 rounded-full text-[15px] font-bold transition-all ${
                  scrolled 
                    ? (isSustainability ? 'bg-white text-[#0a1f14]' : 'text-white hover:text-[#76b947]')
                    : (isSustainability ? 'bg-[#214d3e] text-white shadow-md' : 'text-gray-800 hover:text-agrarian-green')
                }`}
              >
                Sustainability
              </Link>

              <Link 
                to="/gallery" 
                className={`px-6 py-2 rounded-full text-[15px] font-bold transition-all ${
                  scrolled 
                    ? (isGallery ? 'bg-white text-[#0a1f14]' : 'text-white hover:text-[#76b947]')
                    : (isGallery ? 'bg-[#214d3e] text-white shadow-md' : 'text-gray-800 hover:text-agrarian-green')
                }`}
              >
                Gallery
              </Link>

              <Link 
                to="/news" 
                className={`px-6 py-2 rounded-full text-[15px] font-bold transition-all ${
                  scrolled 
                    ? (isNews ? 'bg-white text-[#0a1f14]' : 'text-white hover:text-[#76b947]')
                    : (isNews ? 'bg-[#214d3e] text-white shadow-md' : 'text-gray-800 hover:text-agrarian-green')
                }`}
              >
                News
              </Link>
 
              <Link 
                to="/contact" 
                className={`px-6 py-2 rounded-full text-[15px] font-bold transition-all ${
                  scrolled 
                    ? (isContact ? 'bg-white text-[#0a1f14]' : 'text-white hover:text-[#76b947]')
                    : (isContact ? 'bg-[#214d3e] text-white shadow-md' : 'text-gray-800 hover:text-agrarian-green')
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>
 
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className={`focus:outline-none ${scrolled ? 'text-white' : 'text-gray-600'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50 border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-bold transition-all ${isHome ? 'bg-[#214d3e] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Home
            </Link>
            
            <Link 
              to="/solutions" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-bold transition-all ${isSolutions ? 'bg-[#214d3e] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Our solutions
            </Link>

            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-bold transition-all ${isAbout ? 'bg-[#214d3e] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              About Us
            </Link>

            <Link 
              to="/sustainability" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-bold transition-all ${isSustainability ? 'bg-[#214d3e] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Sustainability
            </Link>

            <Link 
              to="/gallery" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-bold transition-all ${isGallery ? 'bg-[#214d3e] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Gallery
            </Link>

            <Link 
              to="/news" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-bold transition-all ${isNews ? 'bg-[#214d3e] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              News
            </Link>

            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className={`block px-4 py-3 rounded-xl font-bold transition-all ${isContact ? 'bg-[#214d3e] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
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
