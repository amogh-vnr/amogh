import React from 'react';

const Education = () => {
  return (
    <section id="education" className="edu-section">
      <div className="edu-inner">
        <div className="edu-header">
          <span className="section-label" style={{ justifyContent: 'center' }}>Academics</span>
          <h2 className="section-title">
            <span className="highlight">Education</span>
          </h2>
        </div>
        
        <div className="edu-card">
          <div className="edu-cgpa">
            <div className="edu-cgpa-value">8.35</div>
            <div className="edu-cgpa-label">CGPA / 10</div>
          </div>
          <div className="edu-details">
            <h3>VNR Vignana Jyothi Institute of Engineering and Technology</h3>
            <div className="edu-degree">B.Tech in Computer Science and Business Systems</div>
            <div className="edu-year">Hyderabad, India · 2023 — 2027</div>
            <p className="edu-coursework">
              <strong>Relevant Coursework: </strong>
              Data Structures & Algorithms, Design & Analysis of Algorithms, Operations Research, DBMS, Machine Learning, Probability & Statistics, Object-Oriented Programming
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
