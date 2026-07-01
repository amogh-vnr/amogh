import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="services">
      <div className="services-header">
        <h2>Technical <span className="highlight">Skills</span></h2>
        <p>Comprehensive expertise across Machine Learning, Software Engineering, and Core Computer Science disciplines.</p>
      </div>
      
      <div className="services-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', display: 'grid' }}>
        <div className="service-card dark-card" style={{ height: 'auto', minHeight: '350px' }}>
          <h3>Machine Learning & AI</h3>
          <p style={{ color: '#ccc', marginBottom: '20px' }}>
            TensorFlow, PyTorch, Keras, Deep Learning, Computer Vision, CNNs, ResNet50, CBAM, U-Net, Transfer Learning, Data Preprocessing, Model Evaluation.
          </p>
          <div className="card-mockup" style={{ position: 'relative', bottom: '0', width: '100%', boxShadow: 'none' }}>
            {/* Tech stack icons could go here */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ padding: '5px 15px', background: '#333', borderRadius: '20px', fontSize: '12px' }}>PyTorch</span>
              <span style={{ padding: '5px 15px', background: '#333', borderRadius: '20px', fontSize: '12px' }}>TensorFlow</span>
              <span style={{ padding: '5px 15px', background: '#333', borderRadius: '20px', fontSize: '12px' }}>Computer Vision</span>
            </div>
          </div>
        </div>
        
        <div className="service-card primary-card center-card" style={{ height: 'auto', minHeight: '350px' }}>
          <h3>Software Engineering</h3>
          <p style={{ color: '#fff', marginBottom: '20px' }}>
            Python, Java, JavaScript, C++, SQL, C, React.js, Node.js, Express.js, FastAPI, REST APIs, JWT Authentication, MongoDB, MySQL, Git, Linux.
          </p>
          <div className="card-mockup" style={{ position: 'relative', bottom: '0', width: '100%', boxShadow: 'none' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ padding: '5px 15px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '12px' }}>React.js</span>
              <span style={{ padding: '5px 15px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '12px' }}>Node.js</span>
              <span style={{ padding: '5px 15px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '12px' }}>FastAPI</span>
            </div>
          </div>
        </div>
        
        <div className="service-card dark-card" style={{ height: 'auto', minHeight: '350px' }}>
          <h3>Core CS & Research</h3>
          <p style={{ color: '#ccc', marginBottom: '20px' }}>
            Algorithmic Foundations of Optimization, Data Structures, Design and Analysis of Algorithms, Statistical Analysis, Operations Research, DBMS, OS.
          </p>
          <div className="card-mockup" style={{ position: 'relative', bottom: '0', width: '100%', boxShadow: 'none' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ padding: '5px 15px', background: '#333', borderRadius: '20px', fontSize: '12px' }}>Algorithms</span>
              <span style={{ padding: '5px 15px', background: '#333', borderRadius: '20px', fontSize: '12px' }}>Data Structures</span>
              <span style={{ padding: '5px 15px', background: '#333', borderRadius: '20px', fontSize: '12px' }}>Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
