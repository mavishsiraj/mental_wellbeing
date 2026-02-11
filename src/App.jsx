import { useState } from 'react';
import './App.css';

// Views
import { Navbar } from './views';

// Components (Container components combining Views + Controllers)
import {
  Hero,
  MoodPalette,
  SafeSpacesCarousel,
  ReminderSection,
  CTASection,
  Footer
} from './components';

// Pages
import JournalPage from './pages/JournalPage';
import TalkPage from './pages/TalkPage';
import CompanionPage from './pages/CompanionPage';
import ResourcesPage from './pages/ResourcesPage';
import BookCallPage from './pages/BookCallPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* ===== NAVBAR ===== */}
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />

      {currentPage === 'home' && (
        <>
          {/* ===== HERO SECTION ===== */}
          <Hero navigateTo={navigateTo} />

          {/* ===== MOOD PALETTE SECTION ===== */}
          <MoodPalette />

          {/* ===== YOUR SAFE SPACES SECTION ===== */}
          <SafeSpacesCarousel />

          {/* ===== DAILY REMINDER SECTION ===== */}
          <ReminderSection />

          {/* ===== FINAL CTA SECTION ===== */}
          <CTASection />

          {/* ===== FOOTER ===== */}
          <Footer />

          {/* Global animation keyframes have been moved to CSS, but keeping style tag for any dynamic ones if needed */}
        </>
      )}

      {currentPage === 'journal' && <JournalPage navigateTo={navigateTo} />}
      {currentPage === 'talk' && <TalkPage />}
      {currentPage === 'companion' && <CompanionPage />}
      {currentPage === 'resources' && <ResourcesPage />}
      {currentPage === 'book-call' && <BookCallPage />}
    </div>
  );
}

export default App;
