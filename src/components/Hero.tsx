import React from 'react';
import { motion } from 'framer-motion';
import TypedText from './common/TypedText';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 to-accent-100/20 dark:from-accent-950/10 dark:to-accent-900/5"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Asaad F. Rasul <span className="text-light-accent dark:text-dark-accent">(sn0wqt)</span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-muted mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <TypedText 
              strings={[
                "Backend Engineer", 
                "Future Data Scientist",
                "Reverse Engineer"
              ]} 
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              View My Work <FiArrowRight className="ml-2" />
            </motion.a>
            
            <motion.a
              href="/CV.pdf"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV <FiDownload className="ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator with animation */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-light-accent dark:border-dark-accent flex justify-center"
          >
            <motion.div 
              className="w-1 h-3 bg-light-accent dark:bg-dark-accent rounded-full mt-2"
              animate={{ 
                y: [0, 4, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut" 
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
