import React from 'react';
import { CuteCloud } from '../views';

// Reminder Section Component - Daily reminder banner with doodles
const ReminderSection = () => {
  return (
    <section className="reminder-section">
      {/* Floating doodle decorations */}
      <div className="reminder-doodles">
        <svg className="reminder-doodle star-1" viewBox="0 0 24 24" width="20" height="20">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="currentColor" />
        </svg>
        <svg className="reminder-doodle star-2" viewBox="0 0 24 24" width="16" height="16">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="currentColor" />
        </svg>
        <svg className="reminder-doodle heart-1" viewBox="0 0 24 24" width="18" height="18">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
        </svg>
        <svg className="reminder-doodle sparkle" viewBox="0 0 24 24" width="14" height="14">
          <path d="M12 0v24M0 12h24M3.5 3.5l17 17M20.5 3.5l-17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      
      <div className="reminder-content">
        <CuteCloud top="-60px" left="5%" size="small" delay={0} />
        <CuteCloud top="-40px" right="10%" size="small" delay={1} />
        <span className="reminder-tag">~ a little reminder ~</span>
        <p className="reminder-text">Be gentle with yourself today</p>
        <div className="reminder-decoration">✿</div>
      </div>
    </section>
  );
};

export default ReminderSection;
