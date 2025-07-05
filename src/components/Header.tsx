import React, { useState, useEffect, useCallback } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  // Listen for scroll events with throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for the header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-light-bg/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo/Name */}
        <motion.div 
          className="text-xl md:text-2xl font-heading font-bold text-light-text dark:text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="#hero" onClick={() => scrollToSection('hero')}>Asaad F. Rasul</a>
        </motion.div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-light-text dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            className="nav-link text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a>
          <a 
            className="nav-link text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
            href="#skills" 
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
          >
            Skills
          </a>
          <a 
            className="nav-link text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
            href="#experience" 
            onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
          >
            Experience
          </a>
          <a 
            className="nav-link text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
            href="#projects" 
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            Projects
          </a>
          <a 
            className="nav-link text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
          
          {/* Theme toggle button */}
          <motion.button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-light-accent dark:text-dark-accent"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.nav 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          y: isMenuOpen ? 0 : -20,
          display: isMenuOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="container-custom py-4 flex flex-col gap-4">
          <a 
            className="py-2 text-light-text dark:text-white hover:text-light-accent dark:hover:text-dark-accent"
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a>
          <a 
            className="py-2 text-light-text dark:text-white hover:text-light-accent dark:hover:text-dark-accent"
            href="#skills" 
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
          >
            Skills
          </a>
          <a 
            className="py-2 text-light-text dark:text-white hover:text-light-accent dark:hover:text-dark-accent"
            href="#experience" 
            onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
          >
            Experience
          </a>
          <a 
            className="py-2 text-light-text dark:text-white hover:text-light-accent dark:hover:text-dark-accent"
            href="#projects" 
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            Projects
          </a>
          <a 
            className="py-2 text-light-text dark:text-white hover:text-light-accent dark:hover:text-dark-accent"
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
          
          {/* Theme toggle in mobile menu */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-light-accent dark:text-dark-accent"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </span>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
