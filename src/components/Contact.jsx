import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="hire-me" style={{ background: 'var(--dark-bg)', color: '#fff' }}>
      <div className="hire-me-container" style={{ flexDirection: 'column', textAlign: 'center', gap: '30px' }}>
        
        <div className="hire-right" style={{ width: '100%' }}>
          <h2>Get In <span className="highlight">Touch</span></h2>
          <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto 40px' }}>
            I am currently open to internship and full-time opportunities in Machine Learning, AI, and Software Engineering. Let's connect!
          </p>
          
          <div className="stats-row" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:amogh.vnr@gmail.com" className="stat-item" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'var(--primary-orange)', fontSize: '24px' }}>Email</h3>
              <p style={{ color: '#fff' }}>amogh.vnr@gmail.com</p>
            </a>
            <a href="https://linkedin.com/in/amogh-vnr" target="_blank" rel="noreferrer" className="stat-item" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'var(--primary-orange)', fontSize: '24px' }}>LinkedIn</h3>
              <p style={{ color: '#fff' }}>linkedin.com/in/amogh-vnr</p>
            </a>
            <a href="https://github.com/amogh-vnr" target="_blank" rel="noreferrer" className="stat-item" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'var(--primary-orange)', fontSize: '24px' }}>GitHub</h3>
              <p style={{ color: '#fff' }}>github.com/amogh-vnr</p>
            </a>
            <a href="https://leetcode.com/u/amoghvnr/" target="_blank" rel="noreferrer" className="stat-item" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'var(--primary-orange)', fontSize: '24px' }}>LeetCode</h3>
              <p style={{ color: '#fff' }}>leetcode.com/u/amoghvnr</p>
            </a>
          </div>
          
          <a href="mailto:amogh.vnr@gmail.com" className="btn btn-primary" style={{ marginTop: '20px' }}>Say Hello</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
