import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi';

const About: React.FC = () => {
  // Map category icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return <FiCode className="text-light-accent dark:text-dark-accent text-2xl" />;
      case 'frameworks':
        return <FiServer className="text-light-accent dark:text-dark-accent text-2xl" />;
      case 'infrastructure':
        return <FiTool className="text-light-accent dark:text-dark-accent text-2xl" />;
      case 'specialties':
        return <FiDatabase className="text-light-accent dark:text-dark-accent text-2xl" />;
      default:
        return <FiCode className="text-light-accent dark:text-dark-accent text-2xl" />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-white mb-4">
            About <span className="text-light-accent dark:text-dark-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-light-accent dark:bg-dark-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* This would be a placeholder for the profile image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-light-accent dark:border-dark-accent">
                <img 
                  src="https://via.placeholder.com/400x400?text=Asaad+F.+Rasul" 
                  alt="Asaad F. Rasul" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-light-accent dark:border-dark-accent"></div>
            </div>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-light-text dark:text-white mb-4">
              Backend Engineer & Data Science Enthusiast
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate software engineer with expertise in building scalable backend systems 
              and full-stack applications. Currently pursuing an M.Sc. in Data Science at the University 
              of Graz, Austria, I blend technical knowledge with a drive for continuous learning.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              With experience in developing microservices, optimizing database performance, and 
              implementing real-time features, I enjoy tackling complex problems and creating efficient solutions.
            </p>

            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-light-text dark:text-white mb-3">Languages</h4>
              <div className="flex flex-wrap gap-4">
                {portfolioData.languages.map((language, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-gray-700 dark:text-gray-300">{language.name}</span>
                    <span className="mx-2">•</span>
                    <span className="text-light-accent dark:text-dark-accent">{language.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-lg font-semibold text-light-text dark:text-white mb-3">Based in</h4>
              <p className="text-gray-700 dark:text-gray-300">{portfolioData.contact.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center text-light-text dark:text-white mb-12"
            variants={itemVariants}
          >
            My Core <span className="text-light-accent dark:text-dark-accent">Skills</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(portfolioData.coreSkills).map(([category, skills]) => (
              <motion.div 
                key={category}
                variants={itemVariants}
                className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  {getCategoryIcon(category)}
                  <h4 className="text-xl font-semibold text-light-text dark:text-white capitalize">
                    {category}
                  </h4>
                </div>
                
                <ul className="space-y-2">
                  {skills.map((skill, idx) => (
                    <li key={idx}>
                      <motion.div 
                        className="text-light-text dark:text-gray-300 flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="inline-block w-1.5 h-1.5 rounded-full bg-light-accent dark:bg-dark-accent mr-2"></div>
                        {skill}
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
