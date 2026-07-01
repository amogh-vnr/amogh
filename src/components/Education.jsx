import React from 'react';

const Education = () => {
  return (
    <section id="education" className="services" style={{ background: '#FFFFFF', color: 'var(--text-dark)' }}>
      <div className="services-header" style={{ maxWidth: '1000px' }}>
        <h2><span className="highlight">Education</span></h2>
      </div>
      
      <div className="experience" style={{ padding: '0 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="timeline-item" style={{ alignItems: 'center' }}>
          <div className="timeline-left" style={{ textAlign: 'left', paddingRight: '0', paddingBottom: '20px' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--text-dark)' }}>VNR Vignana Jyothi Institute of Engineering and Technology</h3>
            <p style={{ color: 'var(--text-gray)' }}>Hyderabad, India | 2023 - 2027</p>
          </div>
          
          <div className="timeline-right" style={{ paddingLeft: '0' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--primary-orange)' }}>B.Tech in Computer Science and Business Systems</h3>
            <p style={{ fontWeight: '600', fontSize: '18px', marginBottom: '10px' }}>CGPA: 8.35/10</p>
            <p style={{ color: 'var(--text-gray)' }}>
              <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Design & Analysis of Algorithms, Operations Research, DBMS, Machine Learning, Probability & Statistics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
