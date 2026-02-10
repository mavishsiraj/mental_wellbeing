import React from 'react';
import { CuteCloud } from '../views';

// CTA Section Component - Final call to action with doodles
const CTASection = () => {
  return (
    <section className="cta-section">
      {/* Floating doodle decorations */}
      <div className="cta-doodles">
        <svg className="cta-doodle heart-1" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
        </svg>
        <svg className="cta-doodle heart-2" viewBox="0 0 24 24" width="18" height="18">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
        </svg>
        <svg className="cta-doodle star-1" viewBox="0 0 24 24" width="20" height="20">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="currentColor" />
        </svg>
        <svg className="cta-doodle star-2" viewBox="0 0 24 24" width="16" height="16">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="currentColor" />
        </svg>
        <svg className="cta-doodle flower" viewBox="0 0 40 40" width="28" height="28">
          <circle cx="20" cy="20" r="5" fill="currentColor" />
          <circle cx="20" cy="10" r="4" fill="currentColor" opacity="0.6" />
          <circle cx="28" cy="15" r="4" fill="currentColor" opacity="0.6" />
          <circle cx="28" cy="25" r="4" fill="currentColor" opacity="0.6" />
          <circle cx="20" cy="30" r="4" fill="currentColor" opacity="0.6" />
          <circle cx="12" cy="25" r="4" fill="currentColor" opacity="0.6" />
          <circle cx="12" cy="15" r="4" fill="currentColor" opacity="0.6" />
        </svg>
        <svg className="cta-doodle sparkle-1" viewBox="0 0 24 24" width="14" height="14">
          <path d="M12 0v24M0 12h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
        <svg className="cta-doodle sparkle-2" viewBox="0 0 24 24" width="12" height="12">
          <path d="M12 0v24M0 12h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      
      <div className="cta-content">
        <span className="cta-tag">✦ your journey starts here ✦</span>
        <h2>Ready to begin?</h2>
        <p>Your peaceful corner of the internet awaits~</p>
        <button className="btn-cta">Start your safe space</button>
      </div>
      <CuteCloud top="15%" left="5%" size="small" delay={0} />
      <CuteCloud top="25%" right="8%" size="small" delay={1.5} />
      <CuteCloud top="60%" left="8%" size="small" delay={2} />
    </section>
  );
};

export default CTASection;
