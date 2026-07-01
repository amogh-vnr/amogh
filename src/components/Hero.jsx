import React, { useState, useEffect } from 'react';

const svgDoodles = [
  // Heart
  <svg key="1" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
  // Star
  <svg key="2" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
  // Planet
  <svg key="3" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" transform="rotate(45 12 12)"></path><ellipse cx="12" cy="12" rx="14" ry="4" transform="rotate(-20 12 12)"></ellipse></svg>,
  // Cloud
  <svg key="4" width="55" height="40" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>,
  // Sparkle / Swirl
  <svg key="5" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F47D31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
  // Swoosh
  <svg key="6" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#F47D31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12c3-4 8-6 13-3 2 1 4 4 3 7-1 2-3 3-5 2"></path></svg>,
  // Paper Plane
  <svg key="7" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
];

const Hero = () => {
  const [doodles, setDoodles] = useState([]);
  const [showDoodles, setShowDoodles] = useState(false);

  useEffect(() => {
    // Generate random doodles once on mount
    const generatedDoodles = Array.from({ length: 15 }).map((_, i) => {
      const randomSvg = svgDoodles[Math.floor(Math.random() * svgDoodles.length)];
      const angle = Math.random() * Math.PI * 2;
      const radius = 150 + Math.random() * 200;
      
      const top = 50 + Math.sin(angle) * (radius / 5) + '%';
      const left = 50 + Math.cos(angle) * (radius / 5) + '%';
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 2;
      const rotation = Math.random() * 360;

      return {
        id: i,
        svg: randomSvg,
        style: {
          top,
          left,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
          transform: `rotate(${rotation}deg)`
        }
      };
    });
    setDoodles(generatedDoodles);

    // Toggle animation styles
    const interval = setInterval(() => {
      setShowDoodles(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hello-badge">
          <span>Hello!</span>
          <svg className="badge-sparkle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#F47D31"/>
          </svg>
        </div>
        
        <h1 className="hero-title">
          I'm <span className="highlight">B Amogh</span>,<br/>
          AI/ML & Software Engineer
        </h1>
        
        <div className="hero-layout">
          <div className="hero-left">
            <div className="quote-icon">“</div>
            <p className="testimonial">Winner (1st Place) at Zignasa Hackathon.<br/><strong>50+ Teams Beaten</strong></p>
          </div>
          
          <div className="hero-center">
            <div className="image-container">
              <div className="motion-bg">
                <div className="solid-circle" style={{ opacity: showDoodles ? 0 : 1 }}></div>
                <div className="doodles-container" style={{ opacity: showDoodles ? 1 : 0 }}>
                  {doodles.map(doodle => (
                    <div key={doodle.id} className="doodle" style={doodle.style}>
                      {doodle.svg}
                    </div>
                  ))}
                </div>
              </div>
              <img src="/assets/amogh-portrait.png" alt="B Amogh, AI/ML Engineer" className="hero-portrait" />
              
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">Projects ↗</a>
                <a href="#contact" className="btn btn-glass">Hire me</a>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="stars">★★★★★</div>
            <div className="experience-stats">
              <h2>Top 5%</h2>
              <p>NPTEL Cloud Computing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
