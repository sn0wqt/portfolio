import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  FiBriefcase, 
  FiCalendar, 
  FiCheckCircle 
} from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

const Experience: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section bg-light-bg dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-white mb-4">
            Experience & <span className="text-light-accent dark:text-dark-accent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-light-accent dark:bg-dark-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3
              variants={itemVariants}
              className="flex items-center gap-2 text-2xl font-bold text-light-text dark:text-white mb-8"
            >
              <FiBriefcase className="text-light-accent dark:text-dark-accent text-2xl" />
              Professional Experience
            </motion.h3>

            <div className="space-y-1">
              {portfolioData.professionalExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="timeline-item"
                >
                  <div className="timeline-dot bg-light-accent dark:bg-dark-accent">
                    <span className="w-2 h-2 bg-white dark:bg-dark-bg rounded-full"></span>
                  </div>
                  
                  <div className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-light-text dark:text-white">
                        {exp.role}
                      </h4>
                      <span className="badge bg-light-accent/10 text-light-accent dark:bg-dark-accent/10 dark:text-dark-accent">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center text-light-text dark:text-gray-300 mb-4 text-sm opacity-80">
                      <FiCalendar className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                          <FiCheckCircle className="text-light-accent dark:text-dark-accent shrink-0 mt-1" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3
              variants={itemVariants}
              className="flex items-center gap-2 text-2xl font-bold text-light-text dark:text-white mb-8"
            >
              <FaGraduationCap className="text-light-accent dark:text-dark-accent text-2xl" />
              Education
            </motion.h3>

            <div className="space-y-1">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="timeline-item"
                >
                  <div className="timeline-dot bg-light-accent dark:bg-dark-accent">
                    <span className="w-2 h-2 bg-white dark:bg-dark-bg rounded-full"></span>
                  </div>
                  
                  <div className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-light-text dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="badge bg-light-accent/10 text-light-accent dark:bg-dark-accent/10 dark:text-dark-accent">{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center text-light-text dark:text-gray-300 mb-4 text-sm opacity-80">
                      <FiCalendar className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <p className="text-light-text dark:text-gray-300 opacity-90">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications Section */}
            <motion.h3
              variants={itemVariants}
              className="flex items-center gap-2 text-2xl font-bold text-light-text dark:text-white mt-12 mb-8"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-light-accent dark:text-dark-accent" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-5 flex justify-between items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-light-text dark:text-gray-300 text-sm opacity-80">
                      {cert.institution}
                    </p>
                  </div>
                  
                  <div className="text-light-accent dark:text-dark-accent font-medium">
                    {cert.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
