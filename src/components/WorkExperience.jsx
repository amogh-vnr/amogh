import React from 'react';

const WorkExperience = () => {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-inner">
        <div className="exp-header">
          <span className="section-label" style={{ justifyContent: 'center' }}>Career</span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Professional <span className="highlight">Experience</span>
          </h2>
        </div>
        
        <div className="exp-card">
          <div className="exp-top">
            <div>
              <h3>DataDuck IT Solutions</h3>
              <span className="exp-location">Hyderabad, India</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="exp-role">Junior Analyst Intern</span>
            </div>
          </div>
          
          <div className="exp-tags">
            <span className="exp-tag">Oracle Database</span>
            <span className="exp-tag">SQL</span>
            <span className="exp-tag">Oracle SQL Developer</span>
            <span className="exp-tag">ServiceNow</span>
            <span className="exp-tag">Production Support</span>
          </div>
          
          <ul>
            <li>Assisted in enterprise production support operations for FNF (Fidelity National Financial) systems, utilizing ServiceNow to process, analyze, and track technical support tickets through their complete lifecycle.</li>
            <li>Drafted targeted SQL queries to validate complex transactional data, identifying discrepancies and generating comprehensive findings documentation to accelerate root-cause analysis for senior engineers.</li>
            <li>Collaborated closely with DBA teams to shadow production system health monitoring, user access management, and backup/recovery validation protocols for Chick-fil-A cloud databases.</li>
            <li>Gained deep hands-on exposure to standard enterprise incident management framework policies, ensuring strict operational continuity within high-volume distributed environments.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
