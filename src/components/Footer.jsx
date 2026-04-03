import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-agrarian-dark text-white p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
        
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-2 pr-8">
          <div className="flex items-center gap-3 mb-6">
            <img src="/images/Isolation_Mode.svg" alt="Agrarian Logo White" className="h-10 w-auto filter brightness-0 invert" />
            <span className="text-2xl font-bold">Agrarian</span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Pioneering the modern era of sustainable agriculture. We combine nature's wisdom with technological innovation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agrarian-accent transition-colors">
              <img src="/images/facebook logo.svg" alt="Facebook" className="w-5 h-5 filter brightness-0 invert" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agrarian-accent transition-colors">
              <img src="/images/instagram logo.svg" alt="Instagram" className="w-5 h-5 filter brightness-0 invert" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agrarian-accent transition-colors">
              <img src="/images/YouTube logo.svg" alt="YouTube" className="w-5 h-5 filter brightness-0 invert" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6">Services</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Precision Farming</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Crop Management</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Organic Methods</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Data Analysis</a></li>
          </ul>
        </div>


      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Agrarian. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
