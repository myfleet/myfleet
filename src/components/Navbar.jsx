import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold">
          <Link
            to="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={closeMobileMenu}
          >
            myFleet
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 font-semibold transition ${
                isActive ? 'text-blue-600' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 font-semibold transition ${
                isActive ? 'text-blue-600' : ''
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/Contact-us" 
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 font-semibold transition ${
                isActive ? 'text-blue-600' : ''
              }`
            }
          >
            Contact Us
          </NavLink>
          <NavLink 
            to="/registration" 
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 font-semibold transition ${
                isActive ? 'text-blue-600' : ''
              }`
            }
          >
            Join Us
          </NavLink>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `text-gray-700 hover:text-blue-600 font-semibold transition ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-blue-600 font-semibold transition ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/Contact-us" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-blue-600 font-semibold transition ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/registration" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-blue-600 font-semibold transition ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
              onClick={closeMobileMenu}
            >
              Join Us
            </NavLink>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-center"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;