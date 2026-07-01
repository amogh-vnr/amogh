import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <span className="section-label" style={{ justifyContent: 'center' }}>Let's Connect</span>
        <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>
          Get In <span className="highlight">Touch</span>
        </h2>
        <p className="section-desc">
          Open to internships and full-time roles in Software Engineering, Machine Learning, and AI. Let's build something great together.
        </p>
        
        <div className="contact-grid">
          <a href="mailto:amogh.vnr@gmail.com" className="contact-card">
            <h4>Email</h4>
            <p>amogh.vnr@gmail.com</p>
          </a>
          <a href="https://linkedin.com/in/amogh-vnr" target="_blank" rel="noreferrer" className="contact-card">
            <h4>LinkedIn</h4>
            <p>/in/amogh-vnr</p>
          </a>
          <a href="https://github.com/amogh-vnr" target="_blank" rel="noreferrer" className="contact-card">
            <h4>GitHub</h4>
            <p>amogh-vnr</p>
          </a>
          <a href="https://leetcode.com/u/amoghvnr/" target="_blank" rel="noreferrer" className="contact-card">
            <h4>LeetCode</h4>
            <p>amoghvnr</p>
          </a>
        </div>
        
        <a href="mailto:amogh.vnr@gmail.com" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '18px' }}>
          Say Hello ↗
        </a>
      </div>
    </section>
  );
};

export default Contact;
