import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Agrarian";
  }, []);
  return (
    <main className="flex-grow pt-24 pb-20 bg-gray-50 animate-fade-in-up">
      
      {/* Header Area */}
      <div className="bg-agrarian-dark text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in <span className="text-agrarian-accent font-serif italic">Touch</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions about our solutions, partnerships, or general inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-agrarian-light flex items-center justify-center text-agrarian-green mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900 text-xl mb-3">Our Location</h4>
            <p className="text-gray-600 leading-relaxed">
              123 Agriculture Hub,<br />
              Karnal, Haryana 132001<br />
              India
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-agrarian-light flex items-center justify-center text-agrarian-green mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900 text-xl mb-3">Phone Number</h4>
            <div className="text-gray-600 space-y-1">
              <p>+91 98765 43210</p>
              <p>+91 11 2345 6789</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-agrarian-light flex items-center justify-center text-agrarian-green mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900 text-xl mb-3">Email Address</h4>
            <div className="text-gray-600 space-y-1">
              <p>info@agrarian.com</p>
              <p>support@agrarian.com</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-agrarian-light flex items-center justify-center text-agrarian-green mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900 text-xl mb-3">Working Hours</h4>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Saturday</p>
              <p>09:00 AM - 06:00 PM</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[500px] bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1430030.13840733!2d75.14811801262967!3d29.215570076210087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d40217dc3e061%3A0xe53be0f65d606138!2sHaryana!5e0!3m2!1sen!2sin!4v1703164478174!5m2!1sen!2sin" 
            className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Agrarian Haryana Map"
          ></iframe>
          
          {/* Aesthetic Overlay hint */}
          <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]"></div>
        </div>
      </div>

    </main>
  );
};

export default Contact;
