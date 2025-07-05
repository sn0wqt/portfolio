import React from 'react';
import { FiGithub, FiLinkedin, FiGlobe, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container-custom">
        {/* Scroll to top button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-light-accent dark:bg-dark-accent text-white"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
        
        {/* Name and social links */}
        <div className="text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-light-text dark:text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Asaad F. Rasul
          </motion.h2>
          
          <div className="flex justify-center gap-6 mb-8">
            <motion.a 
              href={`https://${portfolioData.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
            >
              <FiGithub size={22} />
            </motion.a>
            
            <motion.a 
              href={`https://${portfolioData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={22} />
            </motion.a>
            
            <motion.a 
              href={`https://${portfolioData.contact.portfolio}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Portfolio Website"
            >
              <FiGlobe size={22} />
            </motion.a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Asaad F. Rasul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
