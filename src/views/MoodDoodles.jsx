import React from 'react';

// Mood Section Doodles Component - decorative elements for the mood palette section
const MoodDoodles = () => (
  <div className="mood-doodles">
    {/* Cute Cloud 1 */}
    <svg className="mood-doodle cloud-doodle-1" viewBox="0 0 80 50" width="70" height="45">
      <ellipse cx="40" cy="32" rx="35" ry="16" fill="rgba(255,255,255,0.6)" />
      <circle cx="25" cy="28" r="14" fill="rgba(255,255,255,0.6)" />
      <circle cx="50" cy="25" r="16" fill="rgba(255,255,255,0.6)" />
      <circle cx="38" cy="20" r="12" fill="rgba(255,255,255,0.6)" />
    </svg>

    {/* Sun */}
    <svg className="mood-doodle sun-doodle" viewBox="0 0 60 60" width="55" height="55">
      <circle cx="30" cy="30" r="14" fill="#FFE4A0" stroke="#FFD580" strokeWidth="2" />
      <g stroke="#FFD580" strokeWidth="2" strokeLinecap="round">
        <line x1="30" y1="6" x2="30" y2="12" />
        <line x1="30" y1="48" x2="30" y2="54" />
        <line x1="6" y1="30" x2="12" y2="30" />
        <line x1="48" y1="30" x2="54" y2="30" />
        <line x1="13" y1="13" x2="17" y2="17" />
        <line x1="43" y1="43" x2="47" y2="47" />
        <line x1="47" y1="13" x2="43" y2="17" />
        <line x1="17" y1="43" x2="13" y2="47" />
      </g>
      {/* Cute face */}
      <circle cx="25" cy="28" r="2" fill="#333" />
      <circle cx="35" cy="28" r="2" fill="#333" />
      <path d="M25 34 Q30 38 35 34" stroke="#333" strokeWidth="1.5" fill="none" />
    </svg>

    {/* Hot Air Balloon */}
    <svg className="mood-doodle balloon-doodle" viewBox="0 0 50 70" width="45" height="60">
      <ellipse cx="25" cy="25" rx="18" ry="22" fill="#F8D9E0" stroke="#E8B4C0" strokeWidth="1.5" />
      <path d="M10 38 L18 55 L32 55 L40 38" stroke="#E8B4C0" strokeWidth="1.5" fill="none" />
      <rect x="18" y="55" width="14" height="10" rx="2" fill="#D4C5B5" stroke="#C4B5A5" strokeWidth="1" />
      <path d="M15 20 Q25 15 35 20" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
    </svg>

    {/* Hearts */}
    <svg className="mood-doodle heart-doodle-1" viewBox="0 0 30 30" width="25" height="25">
      <path d="M15 25 C5 17 2 10 8 6 C12 3 15 8 15 8 C15 8 18 3 22 6 C28 10 25 17 15 25Z" fill="#F8C8D4" stroke="#E8A8B4" strokeWidth="1" />
    </svg>
    <svg className="mood-doodle heart-doodle-2" viewBox="0 0 30 30" width="20" height="20">
      <path d="M15 25 C5 17 2 10 8 6 C12 3 15 8 15 8 C15 8 18 3 22 6 C28 10 25 17 15 25Z" fill="#B8D4E8" stroke="#98C4D8" strokeWidth="1" />
    </svg>

    {/* Stars */}
    <svg className="mood-doodle star-doodle-1" viewBox="0 0 30 30" width="22" height="22">
      <polygon points="15,2 18,11 28,11 20,17 23,27 15,21 7,27 10,17 2,11 12,11" fill="#FFE8A0" stroke="#FFD870" strokeWidth="1" />
    </svg>
    <svg className="mood-doodle star-doodle-2" viewBox="0 0 30 30" width="18" height="18">
      <polygon points="15,2 18,11 28,11 20,17 23,27 15,21 7,27 10,17 2,11 12,11" fill="#D4E8D4" stroke="#B4D8B4" strokeWidth="1" />
    </svg>

    {/* Rainbow */}
    <svg className="mood-doodle rainbow-doodle" viewBox="0 0 80 45" width="70" height="40">
      <path d="M10 40 Q40 -5 70 40" stroke="#F8C8C8" strokeWidth="5" fill="none" opacity="0.7" />
      <path d="M14 40 Q40 0 66 40" stroke="#FFE4B8" strokeWidth="4" fill="none" opacity="0.7" />
      <path d="M18 40 Q40 5 62 40" stroke="#E8F0D4" strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M22 40 Q40 10 58 40" stroke="#D4E8F0" strokeWidth="3" fill="none" opacity="0.7" />
    </svg>

    {/* Cute Cloud 2 */}
    <svg className="mood-doodle cloud-doodle-2" viewBox="0 0 70 45" width="55" height="35">
      <ellipse cx="35" cy="28" rx="30" ry="14" fill="rgba(255,255,255,0.5)" />
      <circle cx="22" cy="25" r="12" fill="rgba(255,255,255,0.5)" />
      <circle cx="45" cy="22" r="13" fill="rgba(255,255,255,0.5)" />
    </svg>

    {/* Music Notes */}
    <svg className="mood-doodle music-doodle" viewBox="0 0 35 35" width="28" height="28">
      <circle cx="10" cy="26" r="5" fill="#C9C1D1" />
      <line x1="15" y1="26" x2="15" y2="8" stroke="#C9C1D1" strokeWidth="2" />
      <path d="M15 8 Q25 5 25 15" stroke="#C9C1D1" strokeWidth="2" fill="none" />
    </svg>

    {/* Paper Airplane */}
    <svg className="mood-doodle airplane-doodle" viewBox="0 0 40 35" width="35" height="30">
      <path d="M5 18 L35 5 L20 30 L17 20 Z" fill="#B5C4D1" stroke="#95A4B1" strokeWidth="1" />
      <line x1="17" y1="20" x2="35" y2="5" stroke="#95A4B1" strokeWidth="1" />
    </svg>

    {/* Sparkles */}
    <svg className="mood-doodle sparkle-1" viewBox="0 0 20 20" width="16" height="16">
      <path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
    <svg className="mood-doodle sparkle-2" viewBox="0 0 20 20" width="14" height="14">
      <path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>

    {/* Flower */}
    <svg className="mood-doodle flower-doodle" viewBox="0 0 40 40" width="32" height="32">
      <circle cx="20" cy="20" r="5" fill="#FFE4A0" />
      <circle cx="20" cy="10" r="6" fill="#F8D0D8" opacity="0.8" />
      <circle cx="28" cy="15" r="6" fill="#F8D0D8" opacity="0.8" />
      <circle cx="28" cy="25" r="6" fill="#F8D0D8" opacity="0.8" />
      <circle cx="20" cy="30" r="6" fill="#F8D0D8" opacity="0.8" />
      <circle cx="12" cy="25" r="6" fill="#F8D0D8" opacity="0.8" />
      <circle cx="12" cy="15" r="6" fill="#F8D0D8" opacity="0.8" />
    </svg>

    {/* Swirl/Spiral */}
    <svg className="mood-doodle swirl-doodle" viewBox="0 0 40 40" width="30" height="30">
      <path d="M20 20 Q25 20 25 15 Q25 10 20 10 Q12 10 12 20 Q12 32 25 32 Q38 32 38 20" stroke="#B8C9A3" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
    </svg>
  </div>
);

export default MoodDoodles;
