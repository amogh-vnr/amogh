import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="skills-header">
          <div>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Technical <span className="highlight">Skills</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Comprehensive expertise across Machine Learning, Full-Stack Engineering, and Algorithmic Research.
          </p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-card-number">01</span>
            <h3>Machine Learning & AI</h3>
            <p>Building and deploying deep learning models for computer vision, NLP, and beyond. Expertise in attention mechanisms, transfer learning, and model optimization.</p>
            <div className="skill-tags">
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">PyTorch</span>
              <span className="skill-tag">Keras</span>
              <span className="skill-tag">ResNet50</span>
              <span className="skill-tag">CBAM</span>
              <span className="skill-tag">U-Net</span>
              <span className="skill-tag">Computer Vision</span>
              <span className="skill-tag">CNNs</span>
            </div>
          </div>
          
          <div className="skill-card featured">
            <span className="skill-card-number">02</span>
            <h3>Software Engineering</h3>
            <p>Full-stack development with modern frameworks. Building secure, scalable REST APIs, microservices, and responsive web applications end-to-end.</p>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </div>
          
          <div className="skill-card">
            <span className="skill-card-number">03</span>
            <h3>Core CS & Research</h3>
            <p>Deep foundations in algorithmic problem-solving, optimization mathematics, and experimental analysis for research-grade engineering.</p>
            <div className="skill-tags">
              <span className="skill-tag">DSA</span>
              <span className="skill-tag">Algorithms</span>
              <span className="skill-tag">DBMS</span>
              <span className="skill-tag">Statistics</span>
              <span className="skill-tag">Optimization</span>
              <span className="skill-tag">OS</span>
              <span className="skill-tag">Networks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
