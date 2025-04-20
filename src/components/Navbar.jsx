import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold">
  <a
    href="/"
    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    myFleet
  </a>
</div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition">About Us</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition">Contact Us</a>
          <a href="/registration" className="text-gray-700 hover:text-blue-600 font-semibold transition">Join Us</a>
          <a
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Login
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition">Contact Us</a>
            <a href="/registration" className="text-gray-700 hover:text-blue-600 font-semibold transition">Join Us</a>
            <a
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-center"
            >
              Login
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;