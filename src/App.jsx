import { useEffect, useState, useRef } from "react";
import introVideo from "./assets/intro.mp4";
import "./App.css";

// Cute hand-drawn nature/weather mood icons
const MoodIcon = ({ mood, size = 40 }) => {
  const icons = {
    // Happy - Bright sun with rays
    happy: (
      <svg viewBox="0 0 50 50" width={size} height={size}>
        <circle cx="25" cy="25" r="12" fill="#FFE4A0" stroke="#F5D080" strokeWidth="2"/>
        <g stroke="#FFD060" strokeWidth="2.5" strokeLinecap="round">
          <line x1="25" y1="5" x2="25" y2="10"/>
          <line x1="25" y1="40" x2="25" y2="45"/>
          <line x1="5" y1="25" x2="10" y2="25"/>
          <line x1="40" y1="25" x2="45" y2="25"/>
          <line x1="11" y1="11" x2="14" y2="14"/>
          <line x1="36" y1="36" x2="39" y2="39"/>
          <line x1="39" y1="11" x2="36" y2="14"/>
          <line x1="14" y1="36" x2="11" y2="39"/>
        </g>
        <circle cx="21" cy="23" r="1.5" fill="#E8C060"/>
        <circle cx="29" cy="23" r="1.5" fill="#E8C060"/>
        <path d="M20 28 Q25 32 30 28" stroke="#E8C060" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    // Calm - Soft fluffy cloud
    calm: (
      <svg viewBox="0 0 50 50" width={size} height={size}>
        <ellipse cx="25" cy="30" rx="18" ry="10" fill="#F0F8FF" stroke="#C8DDF0" strokeWidth="2"/>
        <circle cx="15" cy="26" r="9" fill="#F0F8FF" stroke="#C8DDF0" strokeWidth="2"/>
        <circle cx="35" cy="26" r="8" fill="#F0F8FF" stroke="#C8DDF0" strokeWidth="2"/>
        <circle cx="25" cy="20" r="10" fill="#F0F8FF" stroke="#C8DDF0" strokeWidth="2"/>
        <circle cx="20" cy="24" r="7" fill="#F0F8FF"/>
        <circle cx="30" cy="24" r="6" fill="#F0F8FF"/>
        <ellipse cx="25" cy="30" rx="14" ry="6" fill="#F8FCFF"/>
      </svg>
    ),
    // Sad - Rain cloud with drops
    sad: (
      <svg viewBox="0 0 50 50" width={size} height={size}>
        <ellipse cx="25" cy="22" rx="15" ry="9" fill="#D8E4F0" stroke="#B8C8D8" strokeWidth="2"/>
        <circle cx="15" cy="19" r="7" fill="#D8E4F0" stroke="#B8C8D8" strokeWidth="2"/>
        <circle cx="32" cy="18" r="6" fill="#D8E4F0" stroke="#B8C8D8" strokeWidth="2"/>
        <circle cx="23" cy="14" r="7" fill="#D8E4F0" stroke="#B8C8D8" strokeWidth="2"/>
        <ellipse cx="25" cy="22" rx="11" ry="5" fill="#E4ECF4"/>
        {/* Rain drops */}
        <path d="M15 32 Q14 36 15 38 Q16 40 17 38 Q18 36 17 32 Q16 30 15 32" fill="#A8C8E8"/>
        <path d="M25 35 Q24 39 25 41 Q26 43 27 41 Q28 39 27 35 Q26 33 25 35" fill="#A8C8E8"/>
        <path d="M35 32 Q34 36 35 38 Q36 40 37 38 Q38 36 37 32 Q36 30 35 32" fill="#A8C8E8"/>
      </svg>
    ),
    // Anxious - Swirling wind with leaves
    anxious: (
      <svg viewBox="0 0 50 50" width={size} height={size}>
        <path d="M8 20 Q20 15 30 20 Q40 25 35 20" stroke="#C4B8A8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M5 28 Q18 22 32 28 Q42 32 45 26" stroke="#D4C8B8" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M10 36 Q22 30 38 36" stroke="#C4B8A8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Leaves */}
        <ellipse cx="18" cy="15" rx="4" ry="2" fill="#B8C9A3" transform="rotate(-30 18 15)"/>
        <ellipse cx="38" cy="18" rx="3" ry="1.5" fill="#A8B993" transform="rotate(20 38 18)"/>
        <ellipse cx="12" cy="32" rx="3" ry="1.5" fill="#C8D9B3" transform="rotate(-15 12 32)"/>
        <line x1="18" y1="15" x2="16" y2="18" stroke="#8A9A70" strokeWidth="1"/>
        <line x1="38" y1="18" x2="40" y2="20" stroke="#8A9A70" strokeWidth="1"/>
      </svg>
    ),
    // Tired - Crescent moon with stars
    tired: (
      <svg viewBox="0 0 50 50" width={size} height={size}>
        <path d="M30 8 Q15 12 15 28 Q15 42 32 44 Q20 40 20 28 Q20 14 30 8" fill="#E8E4F0" stroke="#C8C0D8" strokeWidth="2"/>
        {/* Stars */}
        <polygon points="40,12 41,15 44,15 42,17 43,20 40,18 37,20 38,17 36,15 39,15" fill="#FFE8A0" stroke="#E8D080" strokeWidth="0.5"/>
        <polygon points="8,20 9,22 11,22 9.5,23.5 10,26 8,24.5 6,26 6.5,23.5 5,22 7,22" fill="#FFE8A0" stroke="#E8D080" strokeWidth="0.5"/>
        <polygon points="42,35 42.5,37 44,37 43,38 43.5,40 42,39 40.5,40 41,38 40,37 41.5,37" fill="#FFE8A0" stroke="#E8D080" strokeWidth="0.5"/>
        <circle cx="12" cy="38" r="1" fill="#FFE8A0"/>
        <circle cx="35" cy="8" r="0.8" fill="#FFE8A0"/>
      </svg>
    ),
    // Frustrated - Storm cloud with lightning
    frustrated: (
      <svg viewBox="0 0 50 50" width={size} height={size}>
        <ellipse cx="25" cy="20" rx="16" ry="10" fill="#C8C0C0" stroke="#A8A0A0" strokeWidth="2"/>
        <circle cx="14" cy="17" r="8" fill="#C8C0C0" stroke="#A8A0A0" strokeWidth="2"/>
        <circle cx="34" cy="16" r="7" fill="#C8C0C0" stroke="#A8A0A0" strokeWidth="2"/>
        <circle cx="24" cy="12" r="8" fill="#C8C0C0" stroke="#A8A0A0" strokeWidth="2"/>
        <ellipse cx="25" cy="20" rx="12" ry="6" fill="#D0C8C8"/>
        {/* Lightning bolt */}
        <polygon points="28,26 22,34 26,34 20,46 30,36 26,36 32,26" fill="#FFD860" stroke="#E8C040" strokeWidth="1"/>
      </svg>
    ),
    // Hopeful - Rainbow arc
    hopeful: (
      <svg viewBox="0 0 50 50" width={size} height={size}>
        <path d="M5 40 Q5 10 45 40" stroke="#F8C8C8" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <path d="M9 40 Q9 16 41 40" stroke="#FFE0B0" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M13 40 Q13 20 37 40" stroke="#FFFFC0" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M17 40 Q17 24 33 40" stroke="#C8F0C8" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M21 40 Q21 28 29 40" stroke="#C8E0F8" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Small clouds at base */}
        <ellipse cx="8" cy="42" rx="6" ry="3" fill="#F8F8FF"/>
        <ellipse cx="42" cy="42" rx="6" ry="3" fill="#F8F8FF"/>
      </svg>
    ),
    // Grateful - Blooming flower
    grateful: (
      <svg viewBox="0 0 50 50" width={size} height={size}>
        {/* Petals */}
        <ellipse cx="25" cy="12" rx="6" ry="10" fill="#F8D0D8" stroke="#E8B0C0" strokeWidth="1"/>
        <ellipse cx="37" cy="20" rx="6" ry="10" fill="#F8D0D8" stroke="#E8B0C0" strokeWidth="1" transform="rotate(60 37 20)"/>
        <ellipse cx="35" cy="33" rx="6" ry="10" fill="#F8D0D8" stroke="#E8B0C0" strokeWidth="1" transform="rotate(120 35 33)"/>
        <ellipse cx="25" cy="38" rx="6" ry="10" fill="#F8D0D8" stroke="#E8B0C0" strokeWidth="1" transform="rotate(180 25 38)"/>
        <ellipse cx="15" cy="33" rx="6" ry="10" fill="#F8D0D8" stroke="#E8B0C0" strokeWidth="1" transform="rotate(240 15 33)"/>
        <ellipse cx="13" cy="20" rx="6" ry="10" fill="#F8D0D8" stroke="#E8B0C0" strokeWidth="1" transform="rotate(300 13 20)"/>
        {/* Center */}
        <circle cx="25" cy="25" r="8" fill="#FFE8A0" stroke="#E8D080" strokeWidth="1.5"/>
        <circle cx="23" cy="23" r="1" fill="#E8C060"/>
        <circle cx="27" cy="24" r="1" fill="#E8C060"/>
        <circle cx="25" cy="27" r="1" fill="#E8C060"/>
      </svg>
    ),
    // Confused - Misty swirl with question
    confused: (
      <svg viewBox="0 0 50 50" width={size} height={size}>
        <path d="M10 25 Q15 15 25 20 Q35 25 30 35 Q25 42 15 38" stroke="#C8D4E0" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7"/>
        <path d="M35 15 Q42 20 38 30 Q34 38 42 42" stroke="#B8C4D0" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
        <path d="M8 35 Q5 42 12 45" stroke="#D8E0E8" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
        {/* Question mark */}
        <text x="22" y="30" fontSize="18" fontFamily="Comfortaa" fill="#8090A0" fontWeight="bold">?</text>
        {/* Small dots for fog effect */}
        <circle cx="40" cy="12" r="2" fill="#D8E4F0" opacity="0.6"/>
        <circle cx="8" cy="18" r="1.5" fill="#D8E4F0" opacity="0.5"/>
        <circle cx="45" cy="38" r="1.5" fill="#D8E4F0" opacity="0.5"/>
      </svg>
    )
  };
  
  return icons[mood] || icons.calm;
};

// Navbar Component with doodle decorations
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* Decorative doodles */}
      <div className="nav-doodles">
        <svg className="nav-doodle doodle-1" viewBox="0 0 24 24" width="16">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="currentColor" />
        </svg>
        <svg className="nav-doodle doodle-2" viewBox="0 0 24 24" width="14">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
        <svg className="nav-doodle doodle-3" viewBox="0 0 24 24" width="12">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
        </svg>
      </div>

      <div className="nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3C8 7 5 11 5 14a7 7 0 0014 0c0-3-3-7-7-11z" fill="currentColor" opacity="0.2" />
              <path d="M12 3C8 7 5 11 5 14a7 7 0 0014 0c0-3-3-7-7-11z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M12 18c2 0 4-2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="logo-text">MindfulSpace</span>
          <span className="logo-sparkle">✦</span>
        </a>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#safe-spaces" className="nav-link">
            <span>Safe Spaces</span>
            <div className="link-underline"></div>
          </a>
          <a href="#features" className="nav-link">
            <span>Features</span>
            <div className="link-underline"></div>
          </a>
          <a href="#about" className="nav-link">
            <span>About</span>
            <div className="link-underline"></div>
          </a>
          <a href="#community" className="nav-link">
            <span>Community</span>
            <div className="link-underline"></div>
          </a>
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

// Gentle rotating quotes for hero - only ONE at a time
const HERO_QUOTES = [
  "The clouds remind me that everything changes when the time comes",
  "Be gentle with yourself today",
  "You don't have to have it all figured out",
  "This moment is yours",
  "It's okay to take things slow",
  "Your feelings are valid",
];

// Mood data with care packages - soft, dreamy colors
const MOOD_DATA = {
  happy: {
    emoji: "😊",
    label: "Happy",
    color: "#B8C9A3",
    bgGradient: "linear-gradient(135deg, #F5F8F2 0%, #EEF3E8 100%)",
    quote: "Joy shared is joy doubled. Capture this moment in your heart.",
    activity: "Write down 3 things that made you smile today",
    activityIcon: "✨",
    activityTime: "2 min",
    journalPrompt: "What small moment brought unexpected happiness today?",
    affirmation: "Your happiness is valid and deserved."
  },
  calm: {
    emoji: "😌",
    label: "Calm",
    color: "#A7C4BC",
    bgGradient: "linear-gradient(135deg, #F2F7F5 0%, #E8F0ED 100%)",
    quote: "In stillness, we find our truest selves.",
    activity: "Take 5 deep breaths, inhale for 4, hold for 4, exhale for 6",
    activityIcon: "🌿",
    activityTime: "1 min",
    journalPrompt: "What helps you maintain this peaceful feeling?",
    affirmation: "This calm is yours to keep."
  },
  sad: {
    emoji: "😢",
    label: "Sad",
    color: "#B5C4D1",
    bgGradient: "linear-gradient(135deg, #F4F7FA 0%, #E9EEF3 100%)",
    quote: "It's okay to not be okay. Your tears water the garden of your growth.",
    activity: "Wrap yourself in something cozy and listen to gentle music",
    activityIcon: "🫂",
    activityTime: "5 min",
    journalPrompt: "What would you say to comfort a friend feeling this way?",
    affirmation: "This feeling will pass. You are stronger than you know."
  },
  anxious: {
    emoji: "😰",
    label: "Anxious",
    color: "#D4C5B5",
    bgGradient: "linear-gradient(135deg, #FAF8F5 0%, #F3EFE9 100%)",
    quote: "You have survived 100% of your worst days. This one is no different.",
    activity: "5-4-3-2-1 grounding: Name 5 things you see, 4 you hear, 3 you feel",
    activityIcon: "🌱",
    activityTime: "3 min",
    journalPrompt: "What's one small thing within your control right now?",
    affirmation: "This anxiety is not your truth. You are safe in this moment."
  },
  tired: {
    emoji: "😴",
    label: "Tired",
    color: "#C9C1D1",
    bgGradient: "linear-gradient(135deg, #F8F6FA 0%, #F0ECF4 100%)",
    quote: "Rest is not a reward, it's a requirement. Be gentle with yourself.",
    activity: "Close your eyes for 60 seconds and just breathe",
    activityIcon: "🌙",
    activityTime: "1 min",
    journalPrompt: "What's one thing you can let go of today to make space for rest?",
    affirmation: "You deserve rest. Your worth isn't measured by productivity."
  },
  frustrated: {
    emoji: "😤",
    label: "Frustrated",
    color: "#D9C4B8",
    bgGradient: "linear-gradient(135deg, #FBF8F5 0%, #F5EEE8 100%)",
    quote: "Frustration is just passion waiting for direction.",
    activity: "Shake your hands vigorously for 30 seconds, then let them go limp",
    activityIcon: "💨",
    activityTime: "1 min",
    journalPrompt: "What need isn't being met right now?",
    affirmation: "Your feelings are valid. It's okay to feel frustrated."
  },
  hopeful: {
    emoji: "🌟",
    label: "Hopeful",
    color: "#A8B5A0",
    bgGradient: "linear-gradient(135deg, #F5F8F3 0%, #ECF1E8 100%)",
    quote: "Hope is the thing with feathers that perches in the soul.",
    activity: "Write a letter to your future self about this hopeful moment",
    activityIcon: "📝",
    activityTime: "5 min",
    journalPrompt: "What are you looking forward to, big or small?",
    affirmation: "Beautiful things are coming. Trust the journey."
  },
  grateful: {
    emoji: "🥰",
    label: "Grateful",
    color: "#D4BFB5",
    bgGradient: "linear-gradient(135deg, #FAF6F4 0%, #F3ECE8 100%)",
    quote: "Gratitude turns what we have into enough.",
    activity: "Send a quick thank you message to someone you appreciate",
    activityIcon: "💝",
    activityTime: "2 min",
    journalPrompt: "Who or what are you grateful for today and why?",
    affirmation: "Your grateful heart attracts more blessings."
  },
  confused: {
    emoji: "🤔",
    label: "Confused",
    color: "#B5C7D1",
    bgGradient: "linear-gradient(135deg, #F4F8FA 0%, #E9F0F5 100%)",
    quote: "Confusion is the beginning of understanding.",
    activity: "Brain dump: Write everything on your mind without filtering",
    activityIcon: "🧩",
    activityTime: "3 min",
    journalPrompt: "If you knew you couldn't fail, what would you do?",
    affirmation: "Clarity will come. Trust the process of figuring things out."
  }
};

// Cute cloud positions for hero
const CLOUD_POSITIONS = [
  { top: "15%", left: "8%", size: "large" },
  { top: "25%", right: "12%", size: "medium" },
  { top: "55%", left: "5%", size: "small" },
  { top: "60%", right: "8%", size: "medium" },
];

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

// Decorative doodle elements for hero
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

// Trust Card Component
const TrustCard = ({ icon, title, desc }) => (
  <div className="trust-card">
    <div className="trust-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, desc }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

// Mood Section Doodles Component
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

// Mood Palette Component
const MoodPalette = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showCarePackage, setShowCarePackage] = useState(false);

  const handleMoodSelect = (moodKey) => {
    if (selectedMood === moodKey) {
      // If clicking the same mood, close the care package
      setShowCarePackage(false);
      setTimeout(() => setSelectedMood(null), 300);
      return;
    }
    setSelectedMood(moodKey);
    setShowCarePackage(false);
    setTimeout(() => setShowCarePackage(true), 100);
  };

  const handleCloseCarePackage = () => {
    setShowCarePackage(false);
    setTimeout(() => setSelectedMood(null), 300);
  };

  const mood = selectedMood ? MOOD_DATA[selectedMood] : null;

  return (
    <section 
      className={`mood-section ${selectedMood ? 'mood-selected' : ''}`}
      style={selectedMood ? { background: mood.bgGradient } : {}}
    >
      {/* Cute Doodles Background */}
      <MoodDoodles />

      {/* Ambient particles that change with mood */}
      <div className="mood-particles">
        {[...Array(12)].map((_, i) => (
          <span 
            key={i} 
            className={`particle particle-${i + 1}`}
            style={selectedMood ? { background: mood.color } : {}}
          />
        ))}
      </div>

      <div className="mood-content">
        <div className="mood-header">
          <span className="mood-tag">~ check in with yourself ~</span>
          <h2>How are you feeling?</h2>
          <p className="mood-subtitle">tap your mood & receive a little care package ♡</p>
        </div>

        {/* Mood Selection Grid */}
        <div className="mood-grid">
          {Object.entries(MOOD_DATA).map(([key, data]) => (
            <button
              key={key}
              className={`mood-btn ${selectedMood === key ? 'active' : ''}`}
              onClick={() => handleMoodSelect(key)}
              style={selectedMood === key ? { 
                borderColor: data.color,
                background: `linear-gradient(135deg, ${data.color}25, ${data.color}10)`
              } : {}}
            >
              <span className="mood-icon-wrapper">
                <MoodIcon mood={key} size={44} />
              </span>
              <span className="mood-label">{data.label}</span>
              {selectedMood === key && <span className="mood-check">♡</span>}
            </button>
          ))}
        </div>

        {/* Care Package */}
        {selectedMood && (
          <div className={`care-package ${showCarePackage ? 'show' : ''}`}>
            <button className="care-package-close" onClick={handleCloseCarePackage} aria-label="Close care package">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="care-package-header">
              <span className="package-icon">
                <MoodIcon mood={selectedMood} size={52} />
              </span>
              <div>
                <h3>your care package</h3>
                <p className="package-subtitle">curated with love, just for you ✿</p>
              </div>
            </div>

            <div className="care-package-content">
              {/* Quote Card */}
              <div className="care-card quote-card">
                <div className="care-card-icon">✧</div>
                <div className="care-card-content">
                  <span className="care-card-label">a gentle thought</span>
                  <p className="care-quote">"{mood.quote}"</p>
                </div>
              </div>

              {/* Activity Card */}
              <div className="care-card activity-card">
                <div className="care-card-icon">{mood.activityIcon}</div>
                <div className="care-card-content">
                  <span className="care-card-label">
                    try this activity
                    <span className="activity-time">{mood.activityTime}</span>
                  </span>
                  <p>{mood.activity}</p>
                </div>
              </div>

              {/* Journal Prompt Card */}
              <div className="care-card journal-card">
                <div className="care-card-icon">✎</div>
                <div className="care-card-content">
                  <span className="care-card-label">journal prompt</span>
                  <p>{mood.journalPrompt}</p>
                </div>
              </div>

              {/* Affirmation */}
              <div className="affirmation-banner" style={{ background: `linear-gradient(135deg, ${mood.color}35, ${mood.color}15)` }}>
                <span className="affirmation-icon">❀</span>
                <p>{mood.affirmation}</p>
              </div>
            </div>

            <div className="care-package-actions">
              <button className="care-btn-primary" style={{ background: mood.color }}>
                <span>start journaling</span>
                <span className="btn-arrow">→</span>
              </button>
              <button className="care-btn-secondary">
                save this moment ♡
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

function App() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselAutoPlay = useRef(null);

  // Auto-play carousel
  useEffect(() => {
    carouselAutoPlay.current = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(carouselAutoPlay.current);
  }, []);

  // Reset autoplay when manually navigating
  const resetAutoPlay = () => {
    clearInterval(carouselAutoPlay.current);
    carouselAutoPlay.current = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % 6);
    }, 4000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % HERO_QUOTES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <video src={introVideo} autoPlay loop muted playsInline className="hero-video" />
        <div className="hero-overlay" />
        <HeroDoodles />
        
        {CLOUD_POSITIONS.map((cloud, index) => (
          <CuteCloud key={`cloud-${index}`} top={cloud.top} left={cloud.left} right={cloud.right} size={cloud.size} delay={index * 1.5} />
        ))}

        <div className="hero-content">
          <div className="hero-title-wrapper">
            <h1 className="hero-title-line1">You don't need to introduce yourself.</h1>
            <h2 className="hero-title-line2">You can stay anonymous here</h2>
          </div>
          <div className="quote-container">
            <p key={currentQuote} className="hero-quote">"{HERO_QUOTES[currentQuote]}"</p>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">Start Journaling</button>
            <button className="btn-secondary">How this helps</button>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
        </div>
      </section>

      {/* ===== MOOD PALETTE SECTION ===== */}
      <MoodPalette />

      {/* ===== TRUST SECTION ===== */}
      <section className="trust-section">
        <div className="section-header">
          <h2>Why this exists</h2>
          <p>A space created with intention and care</p>
        </div>
        <div className="trust-cards">
          <TrustCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>} title="Private & Secure" desc="Your thoughts stay yours alone" />
          <TrustCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" /><line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" /></svg>} title="No Judgment Zone" desc="Express freely, without filters" />
          <TrustCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>} title="Emotional Clarity" desc="Designed to help you understand yourself" />
        </div>
      </section>

      {/* ===== YOUR SAFE SPACES SECTION ===== */}
      <section className="safe-spaces-section">
        {/* Floating decorative elements */}
        <div className="safe-spaces-doodles">
          {/* Floating clouds */}
          <div className="floating-element cloud-1">
            <svg viewBox="0 0 100 60" width="80">
              <ellipse cx="50" cy="40" rx="35" ry="18" fill="rgba(255,255,255,0.8)" />
              <ellipse cx="30" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.8)" />
              <ellipse cx="70" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.8)" />
              <ellipse cx="50" cy="28" rx="25" ry="16" fill="rgba(255,255,255,0.9)" />
            </svg>
          </div>
          <div className="floating-element cloud-2">
            <svg viewBox="0 0 100 60" width="60">
              <ellipse cx="50" cy="40" rx="35" ry="18" fill="rgba(255,255,255,0.7)" />
              <ellipse cx="30" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.7)" />
              <ellipse cx="70" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.7)" />
            </svg>
          </div>
          
          {/* Sparkles */}
          <div className="floating-element sparkle-1">✦</div>
          <div className="floating-element sparkle-2">✧</div>
          <div className="floating-element sparkle-3">✦</div>
          <div className="floating-element sparkle-4">✧</div>
          
          {/* Hearts */}
          <div className="floating-element heart-1">
            <svg viewBox="0 0 24 24" width="20" fill="rgba(229,196,184,0.6)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div className="floating-element heart-2">
            <svg viewBox="0 0 24 24" width="16" fill="rgba(168,181,160,0.5)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          
          {/* Stars */}
          <div className="floating-element star-1">
            <svg viewBox="0 0 24 24" width="18" fill="rgba(232,200,122,0.7)">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
            </svg>
          </div>
          <div className="floating-element star-2">
            <svg viewBox="0 0 24 24" width="14" fill="rgba(159,184,196,0.6)">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
            </svg>
          </div>
          
          {/* Dotted path */}
          <svg className="floating-element dotted-path" viewBox="0 0 200 100" width="180">
            <path d="M10 50 Q 50 10 100 50 T 190 50" fill="none" stroke="rgba(168,181,160,0.3)" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
        </div>
        
        <div className="section-header safe-spaces-header">
          <span className="header-tag">✿ your peaceful corner</span>
          <h2>Your Safe Spaces</h2>
          <div className="carousel-nav-header">
            <p>Everything here is designed with one thing in mind: <em>your peace.</em></p>
            <div className="carousel-arrows">
              <button className="carousel-arrow prev" onClick={() => {
                setCarouselIndex(prev => prev === 0 ? 5 : prev - 1);
                resetAutoPlay();
              }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button className="carousel-arrow next" onClick={() => {
                setCarouselIndex(prev => prev === 5 ? 0 : prev + 1);
                resetAutoPlay();
              }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${carouselIndex * 340}px)` }}>
          {/* Private Journal */}
          <div className="space-card">
            <div className="card-shadow"></div>
            <div className="card-body">
              <div className="card-text">
                <h3>Private Journal</h3>
                <p>A safe, locked space to pour out your thoughts. PIN protected.</p>
              </div>
              <div className="card-illustration">
                <svg viewBox="0 0 120 100" fill="none">
                  <rect x="35" y="10" width="50" height="70" rx="4" stroke="#4A5568" strokeWidth="2.5" fill="#FFF"/>
                  <path d="M45 25h30M45 35h25M45 45h20" stroke="#4A5568" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="70" cy="65" r="8" stroke="#4A5568" strokeWidth="2" fill="#E8F4F0"/>
                  <path d="M70 62v6M67 65h6" stroke="#4A5568" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M25 75 Q20 60 30 50" stroke="#A8B5A0" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <circle cx="30" cy="45" r="4" fill="#A8B5A0"/>
                </svg>
              </div>
              <span className="card-tag">🔒 encrypted</span>
            </div>
          </div>

          {/* Anonymous Share */}
          <div className="space-card">
            <div className="card-shadow"></div>
            <div className="card-body">
              <div className="card-text">
                <h3>Anonymous Share</h3>
                <p>Share what you're feeling without revealing who you are.</p>
              </div>
              <div className="card-illustration">
                <svg viewBox="0 0 120 100" fill="none">
                  <ellipse cx="60" cy="50" rx="35" ry="28" stroke="#4A5568" strokeWidth="2.5" fill="#FFF"/>
                  <ellipse cx="60" cy="50" rx="25" ry="18" stroke="#4A5568" strokeWidth="1.5" fill="#E8F4F0" strokeDasharray="4 3"/>
                  <circle cx="50" cy="48" r="3" fill="#4A5568"/>
                  <circle cx="60" cy="48" r="3" fill="#4A5568"/>
                  <circle cx="70" cy="48" r="3" fill="#4A5568"/>
                  <path d="M40 78 L50 65" stroke="#4A5568" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M90 30 Q95 25 100 30" stroke="#9FB8C4" strokeWidth="2" fill="none"/>
                  <path d="M95 20 Q100 15 105 20" stroke="#9FB8C4" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span className="card-tag">💭 no account</span>
            </div>
          </div>

          {/* Feel Better */}
          <div className="space-card">
            <div className="card-shadow"></div>
            <div className="card-body">
              <div className="card-text">
                <h3>Feel Better</h3>
                <p>Gentle breathing exercises and grounding techniques.</p>
              </div>
              <div className="card-illustration">
                <svg viewBox="0 0 120 100" fill="none">
                  <path d="M60 15 C45 30 30 45 30 60 C30 78 43 90 60 90 C77 90 90 78 90 60 C90 45 75 30 60 15Z" stroke="#4A5568" strokeWidth="2.5" fill="#FFF"/>
                  <path d="M60 75 L60 50 M50 60 L60 50 L70 60" stroke="#4A5568" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M45 35 Q50 30 55 35" stroke="#A8B5A0" strokeWidth="2" fill="none"/>
                  <circle cx="48" cy="28" r="2" fill="#A8B5A0"/>
                  <circle cx="58" cy="25" r="1.5" fill="#A8B5A0"/>
                </svg>
              </div>
              <span className="card-tag">🌿 calming</span>
            </div>
          </div>

          {/* AI Companion */}
          <div className="space-card">
            <div className="card-shadow"></div>
            <div className="card-body">
              <div className="card-text">
                <h3>AI Companion</h3>
                <p>A friendly companion who listens without judgment.</p>
              </div>
              <div className="card-illustration">
                <svg viewBox="0 0 120 100" fill="none">
                  <circle cx="60" cy="50" r="32" stroke="#4A5568" strokeWidth="2.5" fill="#FFF"/>
                  <circle cx="48" cy="45" r="4" fill="#4A5568"/>
                  <circle cx="72" cy="45" r="4" fill="#4A5568"/>
                  <path d="M45 60 Q60 75 75 60" stroke="#4A5568" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <circle cx="48" cy="44" r="1.5" fill="#FFF"/>
                  <circle cx="72" cy="44" r="1.5" fill="#FFF"/>
                  <path d="M30 25 L35 20 L40 25" stroke="#E8C87A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M85 20 L90 15 L95 20" stroke="#E8C87A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <circle cx="95" cy="35" r="3" fill="#E8C87A"/>
                </svg>
              </div>
              <span className="card-tag">🤗 always here</span>
            </div>
          </div>

          {/* Talk to Someone */}
          <div className="space-card">
            <div className="card-shadow"></div>
            <div className="card-body">
              <div className="card-text">
                <h3>Talk to Someone</h3>
                <p>Connect with a listener when you need real support.</p>
              </div>
              <div className="card-illustration">
                <svg viewBox="0 0 120 100" fill="none">
                  <circle cx="45" cy="35" r="15" stroke="#4A5568" strokeWidth="2.5" fill="#FFF"/>
                  <circle cx="75" cy="35" r="15" stroke="#4A5568" strokeWidth="2.5" fill="#FFF"/>
                  <path d="M45 32 Q45 28 48 28 M42 32 Q42 28 39 28" stroke="#4A5568" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M75 32 Q75 28 78 28 M72 32 Q72 28 69 28" stroke="#4A5568" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M41 40 Q45 44 49 40" stroke="#4A5568" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M71 40 Q75 44 79 40" stroke="#4A5568" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M25 65 Q35 55 45 60 L45 85 Q35 90 25 80 Z" stroke="#4A5568" strokeWidth="2" fill="#E8F4F0"/>
                  <path d="M95 65 Q85 55 75 60 L75 85 Q85 90 95 80 Z" stroke="#4A5568" strokeWidth="2" fill="#E8F4F0"/>
                  <path d="M55 45 Q60 50 65 45" stroke="#D4A574" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span className="card-tag">💜 connection</span>
            </div>
          </div>

          {/* Safe & Moderated */}
          <div className="space-card">
            <div className="card-shadow"></div>
            <div className="card-body">
              <div className="card-text">
                <h3>Safe & Moderated</h3>
                <p>Anti-toxicity filters ensure a space of healing.</p>
              </div>
              <div className="card-illustration">
                <svg viewBox="0 0 120 100" fill="none">
                  <path d="M60 10 L90 25 L90 55 C90 75 60 90 60 90 C60 90 30 75 30 55 L30 25 L60 10Z" stroke="#4A5568" strokeWidth="2.5" fill="#FFF"/>
                  <path d="M45 50 L55 60 L75 40" stroke="#4A5568" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="25" cy="20" r="3" fill="#7EB8D8"/>
                  <circle cx="95" cy="15" r="2" fill="#7EB8D8"/>
                  <path d="M20 35 Q15 30 20 25" stroke="#7EB8D8" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span className="card-tag">🛡️ protected</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features-section">
        <div className="section-header">
          <h2>What you can do here</h2>
          <p>Simple tools for meaningful moments</p>
        </div>
        <div className="features-grid">
          <FeatureCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>} title="Private Journal" desc="Write freely in your personal space" />
          <FeatureCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><path d="M9 9h.01M15 9h.01" strokeWidth="2" strokeLinecap="round" /></svg>} title="Mood Tracking" desc="Understand your emotional patterns" />
          <FeatureCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>} title="Daily Prompts" desc="Gentle questions to guide reflection" />
          <FeatureCard icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>} title="AI Companion" desc="A gentle presence when you need it" />
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section className="experience-section">
        <div className="section-header">
          <h2>How it feels to use</h2>
          <p>A gentle journey inward</p>
        </div>
        <div className="experience-timeline">
          <div className="timeline-line"><div className="timeline-progress" /></div>
          {[{ label: "Open", desc: "Create your safe space" }, { label: "Write", desc: "Let your thoughts flow" }, { label: "Reflect", desc: "Find patterns & insights" }, { label: "Feel lighter", desc: "Release what weighs you" }].map((step, index) => (
            <div key={index} className="timeline-step">
              <div className="step-dot"><div className="step-dot-inner" /></div>
              <h4>{step.label}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRIVACY SECTION ===== */}
      <section className="privacy-section">
        <div className="privacy-card">
          <div className="privacy-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /><circle cx="12" cy="16" r="1" fill="currentColor" /></svg>
          </div>
          <h2>Your privacy matters</h2>
          <div className="privacy-points">
            <div className="privacy-point"><span className="check">✓</span><span>Your journal is locked</span></div>
            <div className="privacy-point"><span className="check">✓</span><span>Only you can access your entries</span></div>
            <div className="privacy-point"><span className="check">✓</span><span>Your data stays private, always</span></div>
          </div>
        </div>
      </section>

      {/* ===== DAILY REMINDER SECTION ===== */}
      <section className="reminder-section">
        <div className="reminder-content">
          <CuteCloud top="-50px" left="10%" size="small" delay={0} />
          <CuteCloud top="-30px" right="15%" size="small" delay={1} />
          <p className="reminder-text">Be gentle with yourself today</p>
          <div className="reminder-decoration">✿</div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to begin?</h2>
          <p>Your peaceful corner of the internet awaits</p>
          <button className="btn-cta">Start your safe space</button>
        </div>
        <CuteCloud top="20%" left="5%" size="small" delay={0} />
        <CuteCloud top="30%" right="8%" size="small" delay={1.5} />
      </section>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes floatCloud { 0%, 100% { transform: translateY(0px) translateX(0px); } 25% { transform: translateY(-8px) translateX(5px); } 50% { transform: translateY(-12px) translateX(0px); } 75% { transform: translateY(-5px) translateX(-5px); } }
        @keyframes drift { 0% { transform: translateX(0) translateY(0) rotate(0deg); } 50% { transform: translateX(30px) translateY(-20px) rotate(10deg); } 100% { transform: translateX(60px) translateY(0) rotate(0deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.1); opacity: 0.9; } }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.2); } }
        @keyframes floatUp { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(-10px); opacity: 0.7; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes flutter { 0%, 100% { transform: translateY(0) rotate(-5deg) scale(1); } 25% { transform: translateY(-8px) rotate(5deg) scale(1.05); } 50% { transform: translateY(-3px) rotate(-3deg) scale(0.95); } 75% { transform: translateY(-10px) rotate(8deg) scale(1.02); } }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .hero-quote { animation: fadeIn 0.8s ease-in-out; }
      `}</style>
    </div>
  );
}

export default App;
