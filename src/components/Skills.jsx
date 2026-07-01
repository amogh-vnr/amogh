import React from 'react';

const allSkills = [
  // Row 1
  ['Python', 'Java', 'JavaScript', 'C++', 'SQL', 'TensorFlow', 'PyTorch', 'Keras', 'Deep Learning', 'Computer Vision', 'CNNs', 'ResNet50', 'CBAM', 'U-Net', 'Transfer Learning'],
  // Row 2
  ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth', 'MongoDB', 'MySQL', 'Git', 'Linux', 'Postman', 'Data Structures', 'Algorithms', 'DBMS', 'Operating Systems'],
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-top">
        <div>
          <span className="section-label">What I Work With</span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Technical <span className="highlight">Skills</span>
          </h2>
        </div>
        <p className="section-desc">
          From deep learning research to full-stack web applications — a versatile toolkit built through real projects.
        </p>
      </div>
      
      {allSkills.map((row, rowIndex) => (
        <div className="marquee-row" key={rowIndex}>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {/* Duplicate for seamless loop */}
              {[...row, ...row].map((skill, i) => (
                <span className="skill-pill" key={`${rowIndex}-${i}`}>
                  <span className="dot"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
