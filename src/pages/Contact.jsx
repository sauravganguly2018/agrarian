import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Agrarian";
  }, []);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.contact.trim()) newErrors.contact = "Contact details are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // We'll use Formspree as an example service (requires no backend)
      // The user should replace 'YOUR_FORMSPREE_ID' with their actual ID
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgleneg";

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          alert("Thank you! Your message has been sent successfully.");
          setFormData({ name: '', email: '', contact: '', message: '' });
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      } catch (error) {
        alert("Oops! There was a problem connecting to the server.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main className="flex-grow bg-white animate-fade-in-up">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/0c92d06746f135612ff1172b9ae4f720da293224.jpg"
            alt="Become a Partner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 md:pb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            BECOME A <span className="text-[#76b947]">PARTNER</span>
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] border border-gray-100">

          {/* Left Info Panel */}
          <div className="lg:w-[45%] bg-[#0a1f14] text-white p-10 md:p-16 flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wider">Queries</h3>
                <a href="mailto:connect@myagrarian.com" className="text-xl md:text-2xl font-medium border-b border-white/30 hover:border-white transition-colors">
                  connect@myagrarian.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wider">Customer Care No.</h3>
                <p className="text-xl md:text-2xl font-medium">+91 80-764328671</p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wider">Corporate Office</h3>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  506, Fifth Floor, Welldone
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wider">Manufacturing Unit</h3>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Block RS. 1302, Paiki, Samarkha - Tech Park, Sector-48, Gurgaon-122018 Ajarpura Road, Ajarpura, Dist- Anand-388 310
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:w-[55%] p-10 md:p-16 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Channel Partner</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full px-6 py-4 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50/30' : 'border-gray-200'} focus:border-[#76b947] focus:ring-2 focus:ring-[#76b947]/20 outline-none transition-all text-lg`}
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm font-medium">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-6 py-4 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50/30' : 'border-gray-200'} focus:border-[#76b947] focus:ring-2 focus:ring-[#76b947]/20 outline-none transition-all text-lg`}
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm font-medium">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Contact Details <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Phone number or other contact info"
                  className={`w-full px-6 py-4 rounded-xl border ${errors.contact ? 'border-red-500 bg-red-50/30' : 'border-gray-200'} focus:border-[#76b947] focus:ring-2 focus:ring-[#76b947]/20 outline-none transition-all text-lg`}
                />
                {errors.contact && <p className="mt-1 text-red-500 text-sm font-medium">{errors.contact}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="4"
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#76b947] focus:ring-2 focus:ring-[#76b947]/20 outline-none transition-all text-lg resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ffb300] hover:bg-[#ffa000] text-black font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] text-xl uppercase tracking-wider"
              >
                Submit
              </button>
            </form>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Contact;
