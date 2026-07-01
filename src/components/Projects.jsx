import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div>
          <h2 className="section-title">
            Research & <span className="highlight">Projects</span>
          </h2>
        </div>
        <p className="section-subtitle">
          Impactful engineering projects spanning Deep Learning, Computer Vision, Healthcare AI, and Full-Stack development.
        </p>
      </div>
      
      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
          <span className="project-card-badge">🧬 Deep Learning</span>
          <h3>Psoriasis Detection using Deep Learning</h3>
          <p className="tech-line">Python · TensorFlow · PyTorch · ResNet50 · CBAM · FastAPI · React.js</p>
          <ul>
            <li>Developed and evaluated models on 19,500+ dermatological images for automated psoriasis classification.</li>
            <li>Improved classification accuracy from 90% to 98.44% by integrating CBAM attention mechanisms into ResNet50.</li>
            <li>Deployed using FastAPI & React.js, achieving 40% lower inference latency.</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/amogh-vnr/pds" target="_blank" rel="noreferrer" className="project-link primary">GitHub ↗</a>
            <a href="https://pds-two-wheat.vercel.app/" target="_blank" rel="noreferrer" className="project-link secondary">Live Demo →</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <span className="project-card-badge">🛰️ Computer Vision</span>
          <h3>SAR Image Colorization using U-Net</h3>
          <p className="tech-line">Smart India Hackathon 2024 · Python · TensorFlow · Keras · U-Net</p>
          <ul>
            <li>Designed a U-Net framework for Synthetic Aperture Radar image colorization using satellite imagery datasets.</li>
            <li>Performed complex image preprocessing, augmentation, feature extraction, and quantitative evaluation.</li>
            <li>Selected as an Internal Finalist in the Smart India Hackathon 2024.</li>
          </ul>
          <div className="project-links">
            <span className="project-link secondary" style={{ cursor: 'default', opacity: 0.6 }}>SIH Finalist</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <span className="project-card-badge">🏥 Healthcare AI</span>
          <h3>MediSense — AI Healthcare Platform</h3>
          <p className="tech-line">Python · React.js · Node.js · Express.js · MongoDB · OCR · REST APIs</p>
          <ul>
            <li>Built a full-stack healthcare platform integrating OCR-based prescription digitization and AI-assisted workflows.</li>
            <li>Engineered 15+ secure REST API endpoints with JWT authentication and role-based access control.</li>
            <li>Awarded 1st Place out of 50+ competing teams at the Zignasa Hackathon.</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/amogh-vnr/MediSense" target="_blank" rel="noreferrer" className="project-link primary">GitHub ↗</a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <span className="project-card-badge">📅 Full-Stack</span>
          <h3>Classroom Booking System</h3>
          <p className="tech-line">MongoDB · Express.js · React.js · Node.js</p>
          <ul>
            <li>Developed a centralized scheduling platform supporting 50+ faculty across 8 academic departments.</li>
            <li>Designed optimized database schemas and conflict-resolution algorithms.</li>
            <li>Reduced manual scheduling workloads by 45% and optimized booking response times by 35%.</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/amogh-vnr/Classroom-booking" target="_blank" rel="noreferrer" className="project-link primary">GitHub ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
