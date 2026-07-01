import React, { useState, useEffect } from 'react';

const svgDoodles = [
  <svg key="h1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  <svg key="s1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  <svg key="p1" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="14" ry="4" transform="rotate(-20 12 12)"/></svg>,
  <svg key="c1" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  <svg key="sw1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F47D31" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12c3-4 8-6 13-3 2 1 4 4 3 7-1 2-3 3-5 2"/></svg>,
  <svg key="pp1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  <svg key="h2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F47D31" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
];

const Hero = () => {
  const [doodles, setDoodles] = useState([]);
  const [showDoodles, setShowDoodles] = useState(false);

  useEffect(() => {
    const positions = [
      { top: '5%', left: '5%' },
      { top: '10%', left: '80%' },
      { top: '25%', left: '0%' },
      { top: '20%', left: '90%' },
      { top: '50%', left: '-5%' },
      { top: '45%', left: '95%' },
      { top: '65%', left: '10%' },
      { top: '70%', left: '85%' },
      { top: '35%', left: '15%' },
      { top: '40%', left: '82%' },
      { top: '55%', left: '92%' },
      { top: '75%', left: '5%' },
      { top: '15%', left: '20%' },
      { top: '60%', left: '88%' },
      { top: '80%', left: '20%' },
    ];

    const generatedDoodles = positions.map((pos, i) => {
      const randomSvg = svgDoodles[Math.floor(Math.random() * svgDoodles.length)];
      return {
        id: i,
        svg: randomSvg,
        style: {
          top: pos.top,
          left: pos.left,
        }
      };
    });
    setDoodles(generatedDoodles);

    const interval = setInterval(() => {
      setShowDoodles(prev => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hello-badge">
          <span>Hello, I'm Amogh!</span>
          <svg className="badge-sparkle" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#F47D31"/>
          </svg>
        </div>
        
        <h1 className="hero-title">
          AI/ML &<br/><span className="highlight">Software Engineer</span>
        </h1>
        
        <div className="hero-layout">
          <div className="hero-left">
            <div className="quote-icon">"</div>
            <p className="testimonial">Winner (1st Place) at Zignasa Hackathon, outperforming 50+ teams.<br/><strong>Hackathon Champion</strong></p>
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
              <img src="/assets/amogh-portrait.png" alt="B Amogh" className="hero-portrait" />
              
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
