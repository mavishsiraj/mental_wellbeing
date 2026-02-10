import React from 'react';

// MoodIcon component - renders cute nature/weather inspired SVG icons for each mood
const MoodIcon = ({ mood, size = 40 }) => {
  const icons = {
    happy: (
      // Sunshine with rays
      <svg viewBox="0 0 60 60" width={size} height={size}>
        <circle cx="30" cy="30" r="14" fill="#FFE4A0" />
        <circle cx="30" cy="30" r="10" fill="#FFD770" />
        {/* Rays */}
        <g stroke="#FFD770" strokeWidth="2.5" strokeLinecap="round">
          <line x1="30" y1="6" x2="30" y2="12" />
          <line x1="30" y1="48" x2="30" y2="54" />
          <line x1="6" y1="30" x2="12" y2="30" />
          <line x1="48" y1="30" x2="54" y2="30" />
          <line x1="13" y1="13" x2="17.5" y2="17.5" />
          <line x1="42.5" y1="42.5" x2="47" y2="47" />
          <line x1="47" y1="13" x2="42.5" y2="17.5" />
          <line x1="17.5" y1="42.5" x2="13" y2="47" />
        </g>
        {/* Cute face */}
        <circle cx="26" cy="28" r="1.5" fill="#8B7355" />
        <circle cx="34" cy="28" r="1.5" fill="#8B7355" />
        <path d="M26 33 Q30 37 34 33" stroke="#8B7355" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    calm: (
      // Peaceful leaf
      <svg viewBox="0 0 60 60" width={size} height={size}>
        <path d="M30 8 C45 15 52 30 48 45 C44 52 35 55 30 55 C25 55 16 52 12 45 C8 30 15 15 30 8Z" fill="#B8D4C8" stroke="#8FB8A4" strokeWidth="1.5" />
        <path d="M30 15 Q32 30 30 50" stroke="#8FB8A4" strokeWidth="1.5" fill="none" />
        <path d="M30 25 Q22 28 18 35" stroke="#8FB8A4" strokeWidth="1" fill="none" />
        <path d="M30 35 Q38 38 42 45" stroke="#8FB8A4" strokeWidth="1" fill="none" />
        {/* Dewdrop */}
        <ellipse cx="22" cy="32" rx="3" ry="4" fill="rgba(255,255,255,0.6)" />
      </svg>
    ),
    sad: (
      // Rain cloud
      <svg viewBox="0 0 60 60" width={size} height={size}>
        <ellipse cx="30" cy="22" rx="18" ry="12" fill="#C8D4E0" />
        <ellipse cx="18" cy="20" rx="10" ry="8" fill="#C8D4E0" />
        <ellipse cx="42" cy="20" rx="10" ry="8" fill="#C8D4E0" />
        <ellipse cx="30" cy="16" rx="12" ry="9" fill="#D4E0EC" />
        {/* Rain drops */}
        <path d="M20 36 L18 44" stroke="#A4B8CC" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 38 L28 48" stroke="#A4B8CC" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 36 L38 44" stroke="#A4B8CC" strokeWidth="2" strokeLinecap="round" />
        {/* Sad face on cloud */}
        <circle cx="25" cy="20" r="1.5" fill="#8090A0" />
        <circle cx="35" cy="20" r="1.5" fill="#8090A0" />
        <path d="M26 26 Q30 23 34 26" stroke="#8090A0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    anxious: (
      // Swirling wind
      <svg viewBox="0 0 60 60" width={size} height={size}>
        <path d="M8 25 Q20 20 30 25 Q40 30 52 25" stroke="#D4C4B4" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M12 35 Q25 30 35 35 Q45 40 55 35" stroke="#C4B4A4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M5 45 Q18 40 28 45 Q38 50 48 45" stroke="#D4C4B4" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Small swirl */}
        <circle cx="48" cy="22" r="4" stroke="#C4B4A4" strokeWidth="1.5" fill="none" />
        <circle cx="52" cy="38" r="3" stroke="#D4C4B4" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    tired: (
      // Sleepy moon
      <svg viewBox="0 0 60 60" width={size} height={size}>
        <path d="M40 10 C25 12 15 25 15 40 C15 50 22 55 32 55 C42 55 52 48 55 38 C48 42 38 40 33 32 C28 24 30 14 40 10Z" fill="#E0D8EC" stroke="#C8BCD8" strokeWidth="1.5" />
        {/* Sleepy face */}
        <path d="M28 32 L34 32" stroke="#9088A0" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 32 L44 32" stroke="#9088A0" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="36" cy="42" rx="4" ry="2" fill="#9088A0" opacity="0.3" />
        {/* Z's */}
        <text x="48" y="18" fontSize="8" fill="#C8BCD8" fontFamily="sans-serif">z</text>
        <text x="52" y="12" fontSize="6" fill="#C8BCD8" fontFamily="sans-serif">z</text>
      </svg>
    ),
    frustrated: (
      // Storm cloud with lightning
      <svg viewBox="0 0 60 60" width={size} height={size}>
        <ellipse cx="30" cy="22" rx="18" ry="12" fill="#D8C8B8" />
        <ellipse cx="18" cy="20" rx="10" ry="8" fill="#D8C8B8" />
        <ellipse cx="42" cy="20" rx="10" ry="8" fill="#D8C8B8" />
        <ellipse cx="30" cy="16" rx="12" ry="9" fill="#E4D8C8" />
        {/* Lightning bolt */}
        <path d="M32 30 L28 40 L34 40 L30 52" stroke="#E8C870" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Frustrated face */}
        <path d="M22 18 L28 21" stroke="#907060" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 18 L32 21" stroke="#907060" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="25" cy="23" r="1.2" fill="#907060" />
        <circle cx="35" cy="23" r="1.2" fill="#907060" />
      </svg>
    ),
    hopeful: (
      // Rainbow
      <svg viewBox="0 0 60 60" width={size} height={size}>
        <path d="M8 45 Q30 5 52 45" stroke="#F4C4C4" strokeWidth="5" fill="none" />
        <path d="M12 45 Q30 10 48 45" stroke="#F4DCA0" strokeWidth="4" fill="none" />
        <path d="M16 45 Q30 15 44 45" stroke="#C4E4C4" strokeWidth="3.5" fill="none" />
        <path d="M20 45 Q30 20 40 45" stroke="#C4D8EC" strokeWidth="3" fill="none" />
        {/* Little clouds at base */}
        <ellipse cx="12" cy="48" rx="8" ry="5" fill="#F0EDE8" />
        <ellipse cx="48" cy="48" rx="8" ry="5" fill="#F0EDE8" />
        {/* Star */}
        <circle cx="30" cy="15" r="3" fill="#FFE8A0" />
      </svg>
    ),
    grateful: (
      // Heart flower
      <svg viewBox="0 0 60 60" width={size} height={size}>
        {/* Petals */}
        <ellipse cx="30" cy="18" rx="8" ry="10" fill="#F4D0D8" />
        <ellipse cx="42" cy="26" rx="8" ry="10" fill="#F4D0D8" transform="rotate(60 42 26)" />
        <ellipse cx="42" cy="40" rx="8" ry="10" fill="#F4D0D8" transform="rotate(120 42 40)" />
        <ellipse cx="30" cy="48" rx="8" ry="10" fill="#F4D0D8" />
        <ellipse cx="18" cy="40" rx="8" ry="10" fill="#F4D0D8" transform="rotate(-120 18 40)" />
        <ellipse cx="18" cy="26" rx="8" ry="10" fill="#F4D0D8" transform="rotate(-60 18 26)" />
        {/* Center */}
        <circle cx="30" cy="33" r="8" fill="#FFE4A0" />
        {/* Cute face */}
        <circle cx="27" cy="32" r="1" fill="#8B7355" />
        <circle cx="33" cy="32" r="1" fill="#8B7355" />
        <path d="M28 36 Q30 38 32 36" stroke="#8B7355" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>
    ),
    confused: (
      // Question mark cloud
      <svg viewBox="0 0 60 60" width={size} height={size}>
        <ellipse cx="30" cy="32" rx="20" ry="15" fill="#D0DCE8" />
        <ellipse cx="16" cy="30" rx="10" ry="9" fill="#D0DCE8" />
        <ellipse cx="44" cy="30" rx="10" ry="9" fill="#D0DCE8" />
        <ellipse cx="30" cy="24" rx="14" ry="10" fill="#DCE8F0" />
        {/* Question mark */}
        <path d="M26 28 Q26 22 30 22 Q35 22 35 27 Q35 30 30 32 L30 36" stroke="#7888A0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="42" r="2" fill="#7888A0" />
        {/* Thought bubbles */}
        <circle cx="48" cy="18" r="3" fill="#E0E8F0" />
        <circle cx="52" cy="12" r="2" fill="#E0E8F0" />
      </svg>
    )
  };

  return icons[mood] || null;
};

export default MoodIcon;
