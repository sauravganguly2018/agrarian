import { Link } from 'react-router-dom';
import CTASection from './CTASection';

const Footer = () => {
  return (
    <>
      <CTASection />
      <footer className="relative bg-[#0a1f14] text-white pt-24 pb-8">
        {/* Gradient Divider */}
        <div
          className="absolute top-0 left-0 w-full h-[6px] z-30 bg-gradient-to-r from-[#F5B800] via-[#4A7C59] to-[#F5B800] bg-[length:200%_auto] animate-gradient-x"
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">

            {/* Brand Column */}
            <div className="w-full lg:max-w-xs">
              <div className="mb-8">
                <img src="/images/Isolation_Mode.svg" alt="Agrarian Logo" className="h-16 w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                An integrated agriculture solutions provider committed to Zero Residue Farming — promoting biological and scientific inputs for a safer, healthier world.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                  <img src="/images/instagram logo.svg" alt="Instagram" className="w-5 h-5 filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                  <img src="/images/facebook logo.svg" alt="Facebook" className="w-5 h-5 filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                  <img src="/images/YouTube logo.svg" alt="YouTube" className="w-5 h-5 filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Dynamic Link Columns */}
            <div className="flex-grow grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-8">

            {/* Products Column */}
            <div>
              <h4 className="text-gray-500 font-bold tracking-widest text-base uppercase mb-5">PRODUCTS</h4>
              <ul className="space-y-4">
                <li><Link to="/solutions?category=soil" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Soil Health</Link></li>
                <li><Link to="/solutions?category=plant-health" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Plant Health</Link></li>
                <li><Link to="/solutions?category=fertility" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Plant Fertility</Link></li>
                <li><Link to="/solutions?category=protection" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Plant Protection</Link></li>
                <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Explore All</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-gray-500 font-bold tracking-widest text-base uppercase mb-5">COMPANY</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
                <li><Link to="/vision" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Our Vision</Link></li>
                <li><Link to="/sustainability" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Sustainability</Link></li>
                <li><Link to="/associates" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Associates</Link></li>
                <li><Link to="/finance" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Agri Finance</Link></li>
              </ul>
            </div>            
            {/* Contact Column */}
            <div>
              <h4 className="text-gray-500 font-bold tracking-widest text-base uppercase mb-5">CONTACT</h4>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Get in Touch</Link></li>
                <li><Link to="/dealer" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Become a Dealer</Link></li>
                <li><Link to="/partner" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Distribution Partner</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500 font-medium">
          <p>Agrarian 2025 All Rights Reserved</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
