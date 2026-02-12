import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;
  
  // Check if we're on home page for different navbar styling
  const isHomePage = location.pathname === '/';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isHomePage 
          ? 'bg-charcoal/90 backdrop-blur-sm' 
          : 'bg-cream'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <h1 className={`font-display text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
              isHomePage ? 'text-cream group-hover:text-white' : 'text-charcoal group-hover:text-charcoal/70'
            }`}>
              Explore India
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-lg md:text-xl font-light tracking-tight transition-all duration-300 ${
                  isHomePage 
                    ? 'text-cream hover:text-white'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isHomePage ? 'bg-cream' : 'bg-charcoal'
              } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-opacity duration-300 ${
                isHomePage ? 'bg-cream' : 'bg-charcoal'
              } ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isHomePage ? 'bg-cream' : 'bg-charcoal'
              } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 font-display text-lg ${
                  isHomePage 
                    ? 'text-cream'
                    : 'text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;