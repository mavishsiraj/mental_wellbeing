import React from 'react';
import { MoodIcon, MoodDoodles } from '../views';
import { useMoodSelection } from '../controllers';
import { MOOD_DATA } from '../models';

// Mood Palette Component - combines view and controller logic
const MoodPalette = () => {
  const {
    selectedMood,
    showCarePackage,
    handleMoodSelect,
    handleCloseCarePackage
  } = useMoodSelection();

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

export default MoodPalette;
