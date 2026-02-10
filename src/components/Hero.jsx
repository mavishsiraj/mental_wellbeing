import React from 'react';
import introVideo from '../assets/intro.mp4';
import { CuteCloud, HeroDoodles } from '../views';
import { useQuoteRotation } from '../controllers';
import { HERO_QUOTES, CLOUD_POSITIONS } from '../models';

// Hero Section Component - combines view and controller logic
const Hero = () => {
  const currentQuote = useQuoteRotation(HERO_QUOTES, 5000);

  return (
    <section className="hero-section">
      <video src={introVideo} autoPlay loop muted playsInline className="hero-video" />
      <div className="hero-overlay" />
      <HeroDoodles />
      
      {CLOUD_POSITIONS.map((cloud, index) => (
        <CuteCloud 
          key={`cloud-${index}`} 
          top={cloud.top} 
          left={cloud.left} 
          right={cloud.right} 
          size={cloud.size} 
          delay={index * 1.5} 
        />
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
