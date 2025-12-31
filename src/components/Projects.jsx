import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured digital marketplace with cart functionality, user authentication, and Stripe payments integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      imageGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
      links: { demo: "#", github: "#" }
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool featuring drag-and-drop boards, real-time updates, and team analytics.",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      imageGradient: "linear-gradient(135deg, #581c87 0%, #a855f7 100%)",
      links: { demo: "#", github: "#" }
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard visualization for AI model performance metrics using D3.js and modern charting libraries.",
      tags: ["React", "D3.js", "Python API"],
      imageGradient: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
      links: { demo: "#", github: "#" }
    }
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A selection of my recent works showcasing different stacks and problem-solving abilities.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image" style={{ background: project.imageGradient }}>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.links.demo} className="link-btn" title="View Demo">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.links.github} className="link-btn" title="View Code">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
