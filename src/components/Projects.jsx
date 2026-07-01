import React from 'react';

const projects = [
  {
    num: '01',
    badge: 'Deep Learning',
    title: 'Psoriasis Detection using Deep Learning',
    tech: 'Python · TensorFlow · PyTorch · ResNet50 · CBAM · FastAPI · React.js',
    points: [
      'Developed and evaluated deep learning models on 19,500+ dermatological images for automated psoriasis classification.',
      'Improved accuracy from 90% to 98.44% by integrating CBAM attention mechanisms into ResNet50 architectures.',
      'Deployed using FastAPI and React.js, achieving 40% lower inference latency.',
    ],
    github: 'https://github.com/amogh-vnr/pds',
    live: 'https://pds-two-wheat.vercel.app/',
  },
  {
    num: '02',
    badge: 'Computer Vision',
    title: 'SAR Image Colorization using U-Net',
    tech: 'Smart India Hackathon 2024 · Python · TensorFlow · Keras · U-Net',
    points: [
      'Designed a U-Net framework for Synthetic Aperture Radar image colorization using satellite imagery datasets.',
      'Performed complex image preprocessing, augmentation, feature extraction, and quantitative evaluation.',
      'Selected as an Internal Finalist in the Smart India Hackathon 2024 for innovation in Computer Vision.',
    ],
    github: null,
    live: null,
  },
  {
    num: '03',
    badge: 'Healthcare AI',
    title: 'MediSense — AI Healthcare Platform',
    tech: 'Python · React.js · Node.js · Express.js · MongoDB · OCR · REST APIs',
    points: [
      'Built a full-stack healthcare platform integrating OCR-based prescription digitization and AI-assisted workflows.',
      'Engineered 15+ secure REST API endpoints with JWT authentication and role-based access control.',
      'Automated data extraction from handwritten prescriptions, reducing manual effort by 70%.',
      'Awarded 1st Place out of 50+ competing teams at the Zignasa Hackathon.',
    ],
    github: 'https://github.com/amogh-vnr/MediSense',
    live: null,
  },
  {
    num: '04',
    badge: 'Full-Stack',
    title: 'Classroom Booking System',
    tech: 'MongoDB · Express.js · React.js · Node.js',
    points: [
      'Developed a centralized scheduling platform supporting 50+ faculty across 8 academic departments.',
      'Designed optimized database schemas and conflict-resolution algorithms.',
      'Reduced manual scheduling workloads by 45% and optimized response times by 35%.',
    ],
    github: 'https://github.com/amogh-vnr/Classroom-booking',
    live: null,
  },
  {
    num: '05',
    badge: 'Java · OOD',
    title: 'APKA — Automated Purchase Kirana Application',
    tech: 'Java · MySQL · JDBC · Relational Database Design',
    points: [
      'Designed a terminal-based commercial management system using strict OOD principles and modular MVC architecture.',
      'Developed role-based access security layer isolating data access across four relational database tables.',
      'Optimized analytics with composite indices, multi-table JOINs, and relational grouping algorithms for real-time revenue computation.',
    ],
    github: 'https://github.com/amogh-vnr/apka-final',
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <span className="section-label">Featured Work</span>
        <h2 className="section-title">
          Research & <span className="highlight">Projects</span>
        </h2>
      </div>
      
      {projects.map((p) => (
        <div className="project-row" key={p.num}>
          <div className="project-number">{p.num}</div>
          <div className="project-info">
            <span className="project-badge">{p.badge}</span>
            <h3>{p.title}</h3>
            <p className="project-tech">{p.tech}</p>
            <ul>
              {p.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="project-links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link primary">GitHub ↗</a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="project-link ghost">Live Demo →</a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
