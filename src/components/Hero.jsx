import React, { useState, useEffect, useRef, useCallback } from 'react';

const svgDoodles = [
  <svg key="h1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  <svg key="s1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  <svg key="p1" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="14" ry="4" transform="rotate(-20 12 12)"/></svg>,
  <svg key="c1" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  <svg key="sw1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F47D31" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12c3-4 8-6 13-3 2 1 4 4 3 7-1 2-3 3-5 2"/></svg>,
  <svg key="pp1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  <svg key="h2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F47D31" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  <svg key="s2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C45D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
];

const doodlePositions = [
  { top: '5%', left: '8%' },
  { top: '8%', left: '82%' },
  { top: '22%', left: '-2%' },
  { top: '18%', left: '92%' },
  { top: '45%', left: '-6%' },
  { top: '42%', left: '96%' },
  { top: '62%', left: '6%' },
  { top: '68%', left: '88%' },
  { top: '32%', left: '12%' },
  { top: '38%', left: '85%' },
  { top: '55%', left: '94%' },
  { top: '78%', left: '10%' },
  { top: '12%', left: '22%' },
  { top: '58%', left: '90%' },
  { top: '82%', left: '24%' },
];

const Hero = () => {
  const [showDoodles, setShowDoodles] = useState(false);
  const containerRef = useRef(null);
  const doodleRefs = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  const doodles = doodlePositions.map((pos, i) => ({
    id: i,
    svg: svgDoodles[i % svgDoodles.length],
    baseTop: pos.top,
    baseLeft: pos.left,
  }));

  // Interactive mouse tracking — doodles repel/scatter from cursor
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      doodleRefs.current.forEach((el, i) => {
        if (!el) return;
        const elRect = el.getBoundingClientRect();
        const elCenterX = elRect.left + elRect.width / 2 - rect.left;
        const elCenterY = elRect.top + elRect.height / 2 - rect.top;
        
        const dx = elCenterX - mousePos.current.x;
        const dy = elCenterY - mousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const maxDist = 250;
        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 45;
          const angle = Math.atan2(dy, dx);
          const moveX = Math.cos(angle) * force;
          const moveY = Math.sin(angle) * force;
          const scale = 1 + (1 - dist / maxDist) * 0.3;
          el.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
        } else {
          el.style.transform = 'translate(0, 0) scale(1)';
        }
      });
    });
  }, []);

  useEffect(() => {
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
          Software<br/><span className="highlight">Developer</span>
        </h1>
        
        <div className="hero-layout">
          <div className="hero-left">
            <div className="quote-icon">"</div>
            <p className="testimonial">Winner (1st Place) at Zignasa Hackathon, outperforming 50+ teams.<br/><strong>Hackathon Champion</strong></p>
          </div>
          
          <div className="hero-center">
            <div
              className="image-container"
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                doodleRefs.current.forEach(el => {
                  if (el) el.style.transform = 'translate(0, 0) scale(1)';
                });
              }}
            >
              <div className="motion-bg">
                <div className="solid-circle" style={{ opacity: showDoodles ? 0 : 1 }}></div>
                <div className="doodles-container" style={{ opacity: showDoodles ? 1 : 0 }}>
                  {doodles.map((doodle, i) => (
                    <div
                      key={doodle.id}
                      className="doodle"
                      ref={el => doodleRefs.current[i] = el}
                      style={{ top: doodle.baseTop, left: doodle.baseLeft }}
                    >
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
