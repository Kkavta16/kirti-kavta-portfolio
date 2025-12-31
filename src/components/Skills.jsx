import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Settings, Brain, BarChart2, Award } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="skill-icon" />,
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: <Database className="skill-icon" />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "Cloud Services"]
    },
    {
      title: "Data Science & AI",
      icon: <Brain className="skill-icon" />,
      skills: ["Data Analytics", "Machine Learning", "Artificial Intelligence", "Python", "SQL", "Pandas/NumPy"]
    },
    {
      title: "Management & Certs",
      icon: <Award className="skill-icon" />,
      skills: ["Google Project Mgmt Cert", "Agile & Scrum", "Strategic Planning", "Git & GitHub", "Technical Writing"]
    }
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">
            A blend of technical expertise in development, data science, and professional project management.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="check-icon">✓</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
