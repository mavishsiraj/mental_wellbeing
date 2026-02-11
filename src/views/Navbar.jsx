import React, { useState, useEffect } from 'react';

// Navbar component with scroll state, menu toggle, and page navigation
const Navbar = ({ currentPage = 'home', navigateTo = () => { } }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (page) => {
    navigateTo(page);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* Subtle doodle decorations */}
      <div className="nav-doodles">
        <svg className="nav-doodle d1" viewBox="0 0 30 30" width="18" height="18">
          <circle cx="15" cy="15" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.2" />
        </svg>
        <svg className="nav-doodle d2" viewBox="0 0 30 30" width="14" height="14">
          <path d="M15 5 L15 25 M5 15 L25 15" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
        </svg>
        <svg className="nav-doodle d3" viewBox="0 0 30 30" width="16" height="16">
          <path d="M8 22 Q15 8 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="nav-content">
        {/* Logo */}
        <div className="nav-logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" width="32" height="32">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E5C4B8" />
                  <stop offset="100%" stopColor="#B8C4D4" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="url(#logoGrad)" opacity="0.9" />
              <path d="M12 22 Q20 12 28 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="14" cy="18" r="2" fill="white" opacity="0.8" />
              <circle cx="26" cy="18" r="2" fill="white" opacity="0.8" />
            </svg>
          </div>
          <span className="logo-text">solace</span>
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
          <a href="#" className={`nav-link ${currentPage === 'journal' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('journal'); }}>Journal</a>
          <a href="#" className="nav-link">Talk</a>
          <a href="#" className="nav-link">Resources</a>
          <a href="#" className="nav-link">About</a>
        </div>

        {/* CTA Button */}
        <div className="nav-actions">
          <button className="nav-btn-secondary">Sign In</button>
          <button className="nav-btn-primary">
            <span>Get Help</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="nav-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`hamburger ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
