import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const allTags = Array.from(
  new Set(portfolioData.selectedProjects.flatMap((project) => project.tags))
);

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(
    portfolioData.selectedProjects
  );

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredProjects(portfolioData.selectedProjects);
    } else {
      const filtered = portfolioData.selectedProjects.filter((project) =>
        project.tags.includes(selectedFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-bg-primary">
      <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
            My <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
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
            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
              selectedFilter === "All"
                ? "bg-accent text-bg-primary shadow-lg"
                : "card-orange text-text-secondary hover:shadow-lg border px-6 py-3"
            }`}
            onClick={() => setSelectedFilter("All")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>

          {allTags.map((tag) => (
            <motion.button
              key={tag}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedFilter === tag
                  ? "bg-accent text-bg-primary shadow-lg"
                  : "card-orange text-text-secondary hover:shadow-lg border px-6 py-3"
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
                className="card-orange overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-accent to-accent-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="h-full w-full flex items-center justify-center relative z-10">
                    <h3 className="text-bg-primary font-bold text-xl drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>

                  {/* Subtle hover overlay for visual feedback */}
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-3 font-heading">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full font-medium bg-accent text-bg-primary"
                      >
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
                      className="text-text-secondary hover:text-accent transition-colors duration-200"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors duration-200"
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
