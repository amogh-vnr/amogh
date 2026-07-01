import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-group">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
        </div>
        
        <a href="#" className="logo">
          <div className="logo-icon">BA</div>
          <span className="logo-text">B Amogh</span>
        </a>
        
        <div className="nav-group">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
