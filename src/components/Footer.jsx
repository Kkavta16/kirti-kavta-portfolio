import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="copyright">
          © 2025 Kirti Kavta. Designed & Built with React.
        </p>
        
        <div className="footer-social">
           <a href="#" className="footer-link"><Github size={20} /></a>
           <a href="#" className="footer-link"><Linkedin size={20} /></a>
           <a href="#" className="footer-link"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
