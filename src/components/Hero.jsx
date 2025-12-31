import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Available for Work</span>
          <h1 className="hero-title">
            Building Digital <span className="gradient-text">Experiences</span> That Matter.
          </h1>
          <p className="hero-subtitle">
            I'm a Full Stack Developer passionate about creating beautiful, functional, and user-centered digital products.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon"><Github size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
            <a href="#" className="social-icon"><Mail size={20} /></a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="circle-gradient"></div>
          <div className="visual-content glass-card">
             <div className="code-block">
               <div className="code-header">
                 <span className="dot red"></span>
                 <span className="dot yellow"></span>
                 <span className="dot green"></span>
               </div>
               <pre>
                 <code>
<span className="keyword">const</span> <span className="variable">developer</span> = &#123;
  <span className="property">name</span>: <span className="string">'Kirti Kavta'</span>,
  <span className="property">role</span>: <span className="string">'Full Stack Dev'</span>,
  <span className="property">skills</span>: [
    <span className="string">'React'</span>, 
    <span className="string">'Data Analytics'</span>, 
    <span className="string">'Project Mgmt'</span>
  ],
  <span className="property">hardWorker</span>: <span className="boolean">true</span>
&#125;;
                 </code>
               </pre>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
