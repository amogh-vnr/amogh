import React from 'react';

const WorkExperience = () => {
  return (
    <section id="experience" className="experience" style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 20px' }}>
      <div className="experience-header">
        <h2>Professional <span className="highlight">Experience</span></h2>
      </div>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-left">
            <h3 style={{ fontSize: '24px' }}>DataDuck IT Solutions</h3>
            <p>Hyderabad, India</p>
          </div>
          <div className="timeline-center">
            <div className="timeline-dot primary-dot"></div>
          </div>
          <div className="timeline-right">
            <h3 style={{ fontSize: '24px' }}>Junior Analyst Intern</h3>
            <p style={{ color: 'var(--primary-orange)', fontWeight: '500', marginBottom: '10px' }}>
              Oracle Database, SQL, ServiceNow, Production Support
            </p>
            <ul style={{ color: 'var(--text-gray)', marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Assisted in enterprise production support operations for FNF (Fidelity National Financial) systems, utilizing ServiceNow to process, analyze, and track technical support tickets.</li>
              <li>Drafted targeted SQL queries to validate complex transactional data, identifying discrepancies and generating comprehensive findings documentation to accelerate root-cause analysis.</li>
              <li>Collaborated closely with DBA teams to shadow production system health monitoring, user access management, and backup/recovery validation protocols for cloud databases.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
