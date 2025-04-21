import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Header from './Navbar';
import Footer from '../components/Fotter';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-[#01588E] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We'd love to hear from you! Reach out for questions, support, or partnership opportunities.
            </p>
          </div>
          
        </section>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#219EBC] focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#219EBC] focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#219EBC] focus:border-transparent"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#219EBC] focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#219EBC] hover:bg-[#1a7d94] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <div className="flex items-start mb-6">
                  <div className="text-[#219EBC] text-xl mr-4 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Office</h3>
                    <p className="text-gray-600">123 Fleet Management Ave, Suite 400<br />San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="text-[#219EBC] text-xl mr-4 mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (800) 123-4567<br />Mon-Fri: 9am-6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="text-[#219EBC] text-xl mr-4 mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">support@myfleet.com<br />sales@myfleet.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#219EBC] text-xl mr-4 mt-1">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 - 18:00<br />Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/company/myfleet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#219EBC] hover:text-[#1a7d94] text-2xl transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://twitter.com/myfleet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#219EBC] hover:text-[#1a7d94] text-2xl transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="https://facebook.com/myfleet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#219EBC] hover:text-[#1a7d94] text-2xl transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us on Map</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                title="Our Location on Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.665456372072!2d-122.4194156846823!3d37.77492997975923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;