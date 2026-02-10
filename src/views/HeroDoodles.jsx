import React from 'react';

// Decorative doodle elements for hero section
const HeroDoodles = () => (
  <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
    {/* Paper airplane */}
    <svg style={{ position: "absolute", top: "10%", right: "15%", width: "40px", animation: "drift 15s linear infinite" }} viewBox="0 0 24 24">
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
    </svg>
    
    {/* Heart */}
    <svg style={{ position: "absolute", top: "5%", left: "8%", width: "25px", animation: "pulse 3s ease-in-out infinite" }} viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
    </svg>
    
    {/* Star top right */}
    <svg style={{ position: "absolute", top: "20%", right: "25%", width: "20px", animation: "twinkle 2s ease-in-out infinite" }} viewBox="0 0 24 24">
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="rgba(255,255,255,0.5)" />
    </svg>
    
    {/* Dotted wave path */}
    <svg style={{ position: "absolute", top: "35%", left: "10%", width: "180px", opacity: 0.4 }} viewBox="0 0 100 50">
      <path d="M0 25 Q 25 0 50 25 T 100 25" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
    
    {/* Music notes */}
    <svg style={{ position: "absolute", bottom: "25%", right: "5%", width: "25px", animation: "floatUp 8s ease-in-out infinite" }} viewBox="0 0 24 24">
      <path d="M9 18V5l12-2v13" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="3" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <circle cx="18" cy="16" r="3" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
    </svg>
    
    {/* Crescent moon */}
    <svg style={{ position: "absolute", top: "8%", right: "8%", width: "35px", animation: "floatCloud 12s ease-in-out infinite" }} viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
    </svg>
    
    {/* Butterfly left */}
    <svg style={{ position: "absolute", top: "45%", left: "3%", width: "30px", animation: "flutter 4s ease-in-out infinite" }} viewBox="0 0 24 24">
      <path d="M12 2C8 6 4 8 4 12c0 4 4 6 8 2 4 4 8 2 8-2 0-4-4-6-8-10z" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
      <line x1="12" y1="6" x2="12" y2="18" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
    </svg>
    
    {/* Sparkle cluster top left */}
    <svg style={{ position: "absolute", top: "12%", left: "20%", width: "18px", animation: "twinkle 2.5s ease-in-out infinite 0.5s" }} viewBox="0 0 24 24">
      <path d="M12 0v24M0 12h24M3.5 3.5l17 17M20.5 3.5l-17 17" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
    
    {/* Little flower bottom left */}
    <svg style={{ position: "absolute", bottom: "15%", left: "8%", width: "28px", animation: "pulse 4s ease-in-out infinite 1s" }} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.5)" />
      <circle cx="12" cy="6" r="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <circle cx="17" cy="9" r="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <circle cx="17" cy="15" r="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <circle cx="12" cy="18" r="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <circle cx="7" cy="15" r="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <circle cx="7" cy="9" r="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
    </svg>
    
    {/* Spiral/swirl */}
    <svg style={{ position: "absolute", bottom: "35%", left: "15%", width: "35px", opacity: 0.35, animation: "spin 20s linear infinite" }} viewBox="0 0 24 24">
      <path d="M12 12c0-2 1.5-3 3-3s3 1 3 3-1.5 4-4 4-5-1.5-5-4 2-5 5-5 6 2 6 5-2.5 6-6 6" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
    
    {/* Small stars scattered */}
    <svg style={{ position: "absolute", top: "30%", right: "10%", width: "12px", animation: "twinkle 3s ease-in-out infinite 0.3s" }} viewBox="0 0 24 24">
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="rgba(255,255,255,0.6)" />
    </svg>
    <svg style={{ position: "absolute", top: "50%", right: "18%", width: "10px", animation: "twinkle 2.8s ease-in-out infinite 1s" }} viewBox="0 0 24 24">
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="rgba(255,255,255,0.5)" />
    </svg>
    <svg style={{ position: "absolute", bottom: "40%", right: "30%", width: "14px", animation: "twinkle 3.2s ease-in-out infinite 0.7s" }} viewBox="0 0 24 24">
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="rgba(255,255,255,0.45)" />
    </svg>
    
    {/* Diamond sparkle */}
    <svg style={{ position: "absolute", top: "65%", left: "25%", width: "16px", animation: "twinkle 2.2s ease-in-out infinite 0.2s" }} viewBox="0 0 24 24">
      <path d="M12 2L2 12l10 10 10-10L12 2z" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
    </svg>
    
    {/* Dotted circle */}
    <svg style={{ position: "absolute", top: "18%", left: "35%", width: "22px", opacity: 0.3, animation: "spin 30s linear infinite reverse" }} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
    
    {/* Small heart bottom */}
    <svg style={{ position: "absolute", bottom: "18%", right: "20%", width: "18px", animation: "pulse 3.5s ease-in-out infinite 0.8s" }} viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="rgba(255,255,255,0.35)" />
    </svg>
    
    {/* Leaf/feather */}
    <svg style={{ position: "absolute", top: "70%", right: "12%", width: "24px", animation: "drift 18s linear infinite 2s" }} viewBox="0 0 24 24">
      <path d="M20 4c-2 0-8 2-10 6-2 4-2 10-2 10s6 0 10-2c4-2 6-8 6-10 0-2-2-4-4-4z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <path d="M8 20C12 16 16 8 20 4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    </svg>
    
    {/* Bow/ribbon */}
    <svg style={{ position: "absolute", top: "55%", left: "30%", width: "20px", animation: "floatUp 10s ease-in-out infinite 1.5s" }} viewBox="0 0 24 24">
      <path d="M12 12c-3-3-6-2-6 1s3 4 6 3c3 1 6 0 6-3s-3-4-6-1z" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.5" fill="rgba(255,255,255,0.5)" />
    </svg>
    
    {/* Plus signs */}
    <svg style={{ position: "absolute", top: "40%", right: "35%", width: "12px", animation: "twinkle 4s ease-in-out infinite 0.4s" }} viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <svg style={{ position: "absolute", bottom: "30%", left: "40%", width: "10px", animation: "twinkle 3.5s ease-in-out infinite 1.2s" }} viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
    </svg>

    {/* Curly bracket decoration */}
    <svg style={{ position: "absolute", bottom: "45%", right: "3%", width: "18px", opacity: 0.35, animation: "floatCloud 14s ease-in-out infinite 3s" }} viewBox="0 0 24 24">
      <path d="M8 4c-2 0-3 1-3 3v4c0 1-1 2-2 2 1 0 2 1 2 2v4c0 2 1 3 3 3" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

export default HeroDoodles;
