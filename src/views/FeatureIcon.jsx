import React from 'react';

// Feature icon component for safe spaces carousel
const FeatureIcon = ({ type }) => {
  const icons = {
    journal: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="18" y="10" width="44" height="60" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M28 25h24M28 35h20M28 45h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M54 55 Q58 52 62 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="58" cy="48" r="2" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="32" cy="36" r="3" fill="currentColor"/>
        <circle cx="48" cy="36" r="3" fill="currentColor"/>
        <path d="M30 48 Q40 58 50 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 18 L24 14 L28 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <path d="M56 16 L60 12 L64 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    share: (
      <svg viewBox="0 0 80 80" fill="none">
        <ellipse cx="40" cy="38" rx="28" ry="22" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="30" cy="36" r="2.5" fill="currentColor"/>
        <circle cx="40" cy="36" r="2.5" fill="currentColor"/>
        <circle cx="50" cy="36" r="2.5" fill="currentColor"/>
        <path d="M25 58 L32 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M58 20 Q62 16 66 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    talk: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="30" cy="30" r="14" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="50" cy="30" r="14" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="26" cy="28" r="2" fill="currentColor"/>
        <circle cx="34" cy="28" r="2" fill="currentColor"/>
        <circle cx="46" cy="28" r="2" fill="currentColor"/>
        <circle cx="54" cy="28" r="2" fill="currentColor"/>
        <path d="M26 35 Q30 39 34 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M46 35 Q50 39 54 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M35 50 Q40 55 45 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    calm: (
      <svg viewBox="0 0 80 80" fill="none">
        <path d="M40 12 C28 24 18 36 18 48 C18 62 28 72 40 72 C52 72 62 62 62 48 C62 36 52 24 40 12Z" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M40 58 L40 40 M32 48 L40 40 L48 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="30" cy="22" r="2" fill="currentColor" opacity="0.4"/>
        <circle cx="52" cy="18" r="1.5" fill="currentColor" opacity="0.4"/>
      </svg>
    )
  };
  return icons[type] || null;
};

export default FeatureIcon;
