import React from 'react';

// Cute cloud component with face
const CuteCloud = ({ top, left, right, size, delay }) => {
  const sizes = {
    small: { width: 80, height: 50 },
    medium: { width: 120, height: 75 },
    large: { width: 160, height: 100 },
  };
  
  const { width, height } = sizes[size];
  
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        width: `${width}px`,
        height: `${height}px`,
        animation: `floatCloud ${8 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        zIndex: 2,
        pointerEvents: "none",
      }}
    >
      {/* Cloud shape using CSS */}
      <svg viewBox="0 0 100 60" style={{ width: "100%", height: "100%" }}>
        <defs>
          <filter id={`shadow-${delay}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="rgba(255,255,255,0.3)" />
          </filter>
        </defs>
        {/* Main cloud body */}
        <ellipse cx="50" cy="40" rx="35" ry="18" fill="rgba(255,255,255,0.9)" filter={`url(#shadow-${delay})`} />
        <ellipse cx="30" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.9)" />
        <ellipse cx="70" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.9)" />
        <ellipse cx="50" cy="28" rx="25" ry="16" fill="rgba(255,255,255,0.95)" />
        
        {/* Cute face */}
        {/* Blush */}
        <ellipse cx="30" cy="42" rx="6" ry="4" fill="rgba(255,182,193,0.6)" />
        <ellipse cx="70" cy="42" rx="6" ry="4" fill="rgba(255,182,193,0.6)" />
        
        {/* Eyes */}
        <ellipse cx="38" cy="38" rx="3" ry="4" fill="#4a4a4a" />
        <ellipse cx="62" cy="38" rx="3" ry="4" fill="#4a4a4a" />
        
        {/* Eye shine */}
        <circle cx="39" cy="36" r="1.2" fill="white" />
        <circle cx="63" cy="36" r="1.2" fill="white" />
        
        {/* Cute smile */}
        <path d="M 45 46 Q 50 50 55 46" stroke="#4a4a4a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default CuteCloud;
