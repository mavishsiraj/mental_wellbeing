import React from 'react';

// Footer Component - Small, playful footer
const Footer = () => {
  return (
    <footer className="footer">
      {/* Doodle decorations */}
      <div className="footer-doodles">
        <svg className="footer-doodle heart" viewBox="0 0 24 24" width="18" height="18">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
        </svg>
        <svg className="footer-doodle star" viewBox="0 0 24 24" width="14" height="14">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="currentColor" />
        </svg>
        <svg className="footer-doodle flower" viewBox="0 0 24 24" width="16" height="16">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <circle cx="12" cy="6" r="2.5" fill="currentColor" opacity="0.6" />
          <circle cx="17" cy="9" r="2.5" fill="currentColor" opacity="0.6" />
          <circle cx="17" cy="15" r="2.5" fill="currentColor" opacity="0.6" />
          <circle cx="12" cy="18" r="2.5" fill="currentColor" opacity="0.6" />
          <circle cx="7" cy="15" r="2.5" fill="currentColor" opacity="0.6" />
          <circle cx="7" cy="9" r="2.5" fill="currentColor" opacity="0.6" />
        </svg>
        <svg className="footer-doodle cloud" viewBox="0 0 50 30" width="30" height="18">
          <ellipse cx="25" cy="20" rx="18" ry="8" fill="currentColor" opacity="0.5" />
          <circle cx="15" cy="17" r="7" fill="currentColor" opacity="0.5" />
          <circle cx="32" cy="16" r="6" fill="currentColor" opacity="0.5" />
          <circle cx="24" cy="12" r="7" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <div className="footer-logo-icon">
            <svg viewBox="0 0 40 40" width="28" height="28">
              <defs>
                <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E5C4B8" />
                  <stop offset="100%" stopColor="#B8C4D4" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="url(#footerLogoGrad)" opacity="0.9" />
              <path d="M12 22 Q20 12 28 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="14" cy="18" r="2" fill="white" opacity="0.8" />
              <circle cx="26" cy="18" r="2" fill="white" opacity="0.8" />
            </svg>
          </div>
          <span className="footer-logo-text">solace</span>
        </div>

        {/* Tagline */}
        <p className="footer-tagline">your cozy corner on the internet ♡</p>

        {/* Links */}
        <div className="footer-links">
          <a href="#" className="footer-link">Home</a>
          <span className="footer-divider">✦</span>
          <a href="#" className="footer-link">Journal</a>
          <span className="footer-divider">✦</span>
          <a href="#" className="footer-link">Resources</a>
          <span className="footer-divider">✦</span>
          <a href="#" className="footer-link">About</a>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            made with <span className="footer-heart">♥</span> for your wellbeing
          </p>
          <p className="footer-year">© 2026 solace</p>
        </div>
      </div>

      {/* Wave decoration at top */}
      <svg className="footer-wave" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 Q180,60 360,30 T720,30 T1080,30 T1440,30 L1440,60 L0,60 Z" fill="currentColor" />
      </svg>
    </footer>
  );
};

export default Footer;
