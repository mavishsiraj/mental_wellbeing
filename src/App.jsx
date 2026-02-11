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

          {/* Global animation keyframes */}
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
        </>
      )}

      {currentPage === 'journal' && (
        <JournalPage navigateTo={navigateTo} />
      )}
    </div>
  );
}

export default App;
