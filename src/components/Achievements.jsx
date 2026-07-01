import React from 'react';

const Achievements = () => {
  return (
    <section className="achievements-strip">
      <div className="achievements-inner">
        <div className="achievements-header">
          <h2 className="section-title">
            Achievements & <span className="highlight">Certifications</span>
          </h2>
        </div>
        
        <div className="achievements-grid">
          <div className="achievement-item">
            <div className="icon">🏆</div>
            <h4>Zignasa Hackathon Winner</h4>
            <p>1st Place out of 50+ competing software engineering teams.</p>
          </div>
          <div className="achievement-item">
            <div className="icon">☁️</div>
            <h4>Top 5% — NPTEL Cloud Computing</h4>
            <p>Ranked within the top 5% nationwide in the rigorous NPTEL professional certification.</p>
          </div>
          <div className="achievement-item">
            <div className="icon">☕</div>
            <h4>Java Certified — Infosys</h4>
            <p>Professional certification in Software Programming using Java via Infosys Springboard.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
