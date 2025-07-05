import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Extract all unique project tags for filtering
const allTags = Array.from(
  new Set(portfolioData.selectedProjects.flatMap(project => project.tags))
);

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(portfolioData.selectedProjects);
  
  // Apply filter when selection changes
  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredProjects(portfolioData.selectedProjects);
    } else {
      const filtered = portfolioData.selectedProjects.filter(project => 
        project.tags.includes(selectedFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedFilter]);

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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-white mb-4">
            My <span className="text-light-accent dark:text-dark-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-light-accent dark:bg-dark-accent mx-auto"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            className={`px-4 py-2 rounded-full transition-all ${
              selectedFilter === 'All'
                ? 'bg-light-accent dark:bg-dark-accent text-white'
                : 'bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-600'
            }`}
            onClick={() => setSelectedFilter('All')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedFilter === tag
                  ? 'bg-light-accent dark:bg-dark-accent text-white'
                  : 'bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-600'
              }`}
              onClick={() => setSelectedFilter(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className="card overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -10 }}
              >
                {/* Project Image - using placeholder gradient with better dark mode support */}
                <div className="h-48 bg-gradient-to-r from-light-accent/40 to-lilac-400/40 dark:from-dark-accent/40 dark:to-lilac-600/40 opacity-75 dark:opacity-90">
                  <div className="h-full w-full flex items-center justify-center">
                    <h3 className="text-gray-800 dark:text-white font-bold text-xl drop-shadow-md">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-light-text dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-light-text dark:text-gray-300 opacity-90 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge bg-light-accent/10 text-light-accent dark:bg-dark-accent/10 dark:text-dark-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FiGithub size={20} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
