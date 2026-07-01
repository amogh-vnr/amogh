import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="experience" style={{ maxWidth: '1200px' }}>
      <div className="experience-header">
        <h2>Research & Engineering <span className="highlight">Projects</span></h2>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
        {/* Project 1 */}
        <div className="service-card dark-card" style={{ height: 'auto', padding: '30px' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Psoriasis Detection using Deep Learning</h3>
          <p style={{ color: 'var(--primary-orange)', fontSize: '14px', marginBottom: '15px' }}>
            Python, TensorFlow, PyTorch, ResNet50, CBAM, FastAPI, React.js
          </p>
          <ul style={{ color: '#ccc', fontSize: '14px', marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Developed and evaluated deep learning models on a dataset of over 19,500 dermatological images for automated psoriasis classification.</li>
            <li>Improved classification accuracy from 90% to 98.44% by integrating CBAM attention mechanisms into ResNet50 architectures.</li>
            <li>Deployed the trained framework using FastAPI and React.js, successfully achieving 40% lower inference latency.</li>
          </ul>
          <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <a href="https://github.com/amogh-vnr/pds" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>GitHub</a>
            <a href="https://pds-two-wheat.vercel.app/" className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '14px', color: '#fff', borderColor: '#fff' }}>Live Demo</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="service-card dark-card" style={{ height: 'auto', padding: '30px' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>SAR Image Colorization using U-Net</h3>
          <p style={{ color: 'var(--primary-orange)', fontSize: '14px', marginBottom: '15px' }}>
            Smart India Hackathon 2024 | Python, TensorFlow, Keras, U-Net
          </p>
          <ul style={{ color: '#ccc', fontSize: '14px', marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Designed a U-Net based deep learning framework for Synthetic Aperture Radar (SAR) image colorization using satellite imagery datasets.</li>
            <li>Performed complex image preprocessing, augmentation, feature extraction, and quantitative evaluation of terrain reconstruction quality.</li>
            <li>Selected as an Internal Finalist in the Smart India Hackathon 2024 for innovation in Computer Vision.</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="service-card dark-card" style={{ height: 'auto', padding: '30px' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>MediSense -- AI Healthcare Platform</h3>
          <p style={{ color: 'var(--primary-orange)', fontSize: '14px', marginBottom: '15px' }}>
            Python, React.js, Node.js, Express.js, MongoDB, OCR, REST APIs
          </p>
          <ul style={{ color: '#ccc', fontSize: '14px', marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Built a full-stack, secure healthcare platform integrating OCR-based prescription digitization and AI-assisted workflows.</li>
            <li>Automated structured data extraction from handwritten prescriptions, reducing manual data-entry effort by approximately 70%.</li>
            <li>Awarded 1st Place out of 50+ competing teams at the Zignasa Hackathon.</li>
          </ul>
          <div style={{ marginTop: '20px' }}>
            <a href="https://github.com/amogh-vnr/MediSense" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>GitHub</a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="service-card dark-card" style={{ height: 'auto', padding: '30px' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Classroom Booking System</h3>
          <p style={{ color: 'var(--primary-orange)', fontSize: '14px', marginBottom: '15px' }}>
            MongoDB, Express.js, React.js, Node.js
          </p>
          <ul style={{ color: '#ccc', fontSize: '14px', marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Developed a centralized scheduling platform supporting 50+ faculty members across 8 distinct academic departments.</li>
            <li>Designed optimized database schemas and scheduling conflict-resolution algorithms to maximize resource utilization.</li>
            <li>Reduced manual administrative scheduling workloads by 45% while optimizing booking response times by 35%.</li>
          </ul>
          <div style={{ marginTop: '20px' }}>
            <a href="https://github.com/amogh-vnr/Classroom-booking" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
