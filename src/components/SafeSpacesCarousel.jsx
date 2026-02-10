import React, { useState, useEffect, useRef } from 'react';
import { FeatureIcon } from '../views';
import { FEATURE_CARDS } from '../models';

// Safe Spaces Carousel Component - smooth 3-card carousel with touch support
const SafeSpacesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const trackRef = useRef(null);
  
  const totalCards = FEATURE_CARDS.length;
  const cardWidth = 320;
  
  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalCards);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging, totalCards]);
  
  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + totalCards) % totalCards);
  };
  
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalCards);
  };
  
  // Touch/Mouse handlers for swipe
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };
  
  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
  };
  
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Determine if we should change slide
    const threshold = cardWidth / 4;
    if (dragOffset > threshold) {
      goToPrev();
    } else if (dragOffset < -threshold) {
      goToNext();
    }
    
    setDragOffset(0);
  };
  
  // Mouse events
  const onMouseDown = (e) => handleDragStart(e.clientX);
  const onMouseMove = (e) => handleDragMove(e.clientX);
  const onMouseUp = () => handleDragEnd();
  const onMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };
  
  // Touch events
  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const onTouchMove = (e) => handleDragMove(e.touches[0].clientX);
  const onTouchEnd = () => handleDragEnd();
  
  // Calculate position relative to current index
  const getCardPosition = (cardIndex) => {
    let diff = cardIndex - currentIndex;
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;
    return diff;
  };

  return (
    <section className="safe-spaces-section">
      {/* Floating decorative elements */}
      <div className="safe-spaces-doodles">
        <div className="floating-element cloud-1">
          <svg viewBox="0 0 100 60" width="80">
            <ellipse cx="50" cy="40" rx="35" ry="18" fill="rgba(255,255,255,0.8)" />
            <ellipse cx="30" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.8)" />
            <ellipse cx="70" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.8)" />
            <ellipse cx="50" cy="28" rx="25" ry="16" fill="rgba(255,255,255,0.9)" />
          </svg>
        </div>
        <div className="floating-element sparkle-1">✦</div>
        <div className="floating-element sparkle-2">✧</div>
        <div className="floating-element heart-1">
          <svg viewBox="0 0 24 24" width="20" fill="rgba(229,196,184,0.6)">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
      
      <div className="section-header safe-spaces-header">
        <span className="header-tag">✿ your peaceful corner</span>
        <h2>Your Safe Spaces</h2>
        <div className="carousel-header-row">
          <p className="section-subtitle">Everything here is designed with one thing in mind: <em>your peace.</em></p>
          <div className="carousel-arrows">
            <button 
              className="carousel-arrow prev" 
              onClick={goToPrev}
              type="button"
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              className="carousel-arrow next" 
              onClick={goToNext}
              type="button"
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Centered Carousel */}
      <div 
        className="carousel-viewport"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => { setIsAutoPlaying(true); if (isDragging) handleDragEnd(); }}
      >
        <div className="carousel-fade-left"></div>
        <div className="carousel-fade-right"></div>
        
        <div 
          ref={trackRef}
          className={`carousel-track-wrapper ${isDragging ? 'dragging' : ''}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {FEATURE_CARDS.map((card, idx) => {
            const position = getCardPosition(idx);
            const isVisible = Math.abs(position) <= 1;
            const isCenter = position === 0;
            const translateX = (position * cardWidth) + (isDragging ? dragOffset : 0);
            
            return (
              <div 
                key={card.id}
                className={`feature-carousel-card ${isCenter ? 'active' : ''} ${isDragging ? 'no-transition' : ''}`}
                style={{ 
                  '--card-color': card.color, 
                  '--card-accent': card.accent,
                  transform: `translateX(${translateX}px) scale(${isCenter ? 1 : 0.85})`,
                  opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
                  zIndex: isCenter ? 3 : (isVisible ? 2 : 1),
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              >
                <div className="carousel-card-inner">
                  <div className="carousel-card-icon">
                    <FeatureIcon type={card.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="carousel-card-decoration">
                    <span className="deco-dot"></span>
                    <span className="deco-dot"></span>
                    <span className="deco-dot"></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Dots indicator */}
        <div className="carousel-dots">
          {FEATURE_CARDS.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafeSpacesCarousel;
