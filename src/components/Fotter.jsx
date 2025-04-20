import React from "react";
import { FaTruck, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e] text-white py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
          <div className="text-3xl font-extrabold">
  <a
    href="/"
    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    myFleet
  </a>
</div>

            <p className="text-gray-300 text-base">
              Transforming logistics with cutting-edge fleet management solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-[#219EBC] pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors text-base">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors text-base">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors text-base">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors text-base">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-[#219EBC] pb-2">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors text-base">Fleet Tracking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors text-base">Route Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors text-base">Driver Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#219EBC] transition-colors text-base">Maintenance Alerts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-[#219EBC] pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-[#219EBC] mt-1" />
                <span className="text-gray-300 text-base">123 Logistics Park, Industrial Area, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-[#219EBC]" />
                <span className="text-gray-300 text-base">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-[#219EBC]" />
                <span className="text-gray-300 text-base">info@myfleet.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-base">
          <p>© {new Date().getFullYear()} myFleet Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;