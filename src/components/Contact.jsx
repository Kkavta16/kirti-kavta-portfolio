import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Message sent! (Demo)");
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-container glass-card">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Fill up the form and I will get back to you within 24 hours.</p>
            
            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon" />
                <span>kirtikavta937@gmail.com</span>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <span>+91- 7014909252</span>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <span>India</span>
              </div>
            </div>

            <div className="contact-decoration">
              <div className="circle-small"></div>
              <div className="circle-large"></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ w: '100%' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
