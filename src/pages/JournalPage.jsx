import React, { useState, useEffect, useCallback } from 'react';
import PinScreen from '../components/journal/PinScreen';
import JournalDashboard from '../components/journal/JournalDashboard';
import JournalEditor from '../components/journal/JournalEditor';
import JournalEntryView from '../components/journal/JournalEntryView';
import './JournalPage.css';

// Animated background — rich, warm, eye-catching
const JournalBackground = () => (
    <div className="journal-bg-animation" aria-hidden="true">
        {/* Large animated gradient mesh */}
        <div className="jbg-gradient-mesh" />

        {/* Floating gradient blobs — large & visible */}
        <div className="jbg-blob blob-1" />
        <div className="jbg-blob blob-2" />
        <div className="jbg-blob blob-3" />
        <div className="jbg-blob blob-4" />
        <div className="jbg-blob blob-5" />
        <div className="jbg-blob blob-6" />

        {/* Cute Cloud 1 */}
        <svg className="jbg-cloud jcloud-1" viewBox="0 0 120 70" width="130">
            <ellipse cx="60" cy="48" rx="42" ry="20" fill="rgba(255,255,255,0.92)" />
            <ellipse cx="36" cy="42" rx="26" ry="18" fill="rgba(255,255,255,0.92)" />
            <ellipse cx="84" cy="42" rx="26" ry="18" fill="rgba(255,255,255,0.92)" />
            <ellipse cx="60" cy="34" rx="30" ry="20" fill="rgba(255,255,255,0.95)" />
            <ellipse cx="36" cy="52" rx="7" ry="4.5" fill="rgba(255,182,193,0.55)" />
            <ellipse cx="84" cy="52" rx="7" ry="4.5" fill="rgba(255,182,193,0.55)" />
            <ellipse cx="48" cy="46" rx="3.5" ry="4.5" fill="#555" />
            <ellipse cx="72" cy="46" rx="3.5" ry="4.5" fill="#555" />
            <circle cx="49.5" cy="44" r="1.5" fill="white" />
            <circle cx="73.5" cy="44" r="1.5" fill="white" />
            <path d="M 54 56 Q 60 61 66 56" stroke="#555" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </svg>

        {/* Cute Cloud 2 */}
        <svg className="jbg-cloud jcloud-2" viewBox="0 0 120 70" width="100">
            <ellipse cx="60" cy="48" rx="42" ry="20" fill="rgba(255,255,255,0.88)" />
            <ellipse cx="36" cy="42" rx="26" ry="18" fill="rgba(255,255,255,0.88)" />
            <ellipse cx="84" cy="42" rx="26" ry="18" fill="rgba(255,255,255,0.88)" />
            <ellipse cx="60" cy="34" rx="30" ry="20" fill="rgba(255,255,255,0.92)" />
            <ellipse cx="38" cy="52" rx="6" ry="4" fill="rgba(255,182,193,0.45)" />
            <ellipse cx="82" cy="52" rx="6" ry="4" fill="rgba(255,182,193,0.45)" />
            <ellipse cx="48" cy="46" rx="3" ry="3.8" fill="#555" />
            <ellipse cx="72" cy="46" rx="3" ry="3.8" fill="#555" />
            <circle cx="49" cy="44.5" r="1.2" fill="white" />
            <circle cx="73" cy="44.5" r="1.2" fill="white" />
            <path d="M 55 55 Q 60 58 65 55" stroke="#555" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>

        {/* Cute Cloud 3 */}
        <svg className="jbg-cloud jcloud-3" viewBox="0 0 120 70" width="85">
            <ellipse cx="60" cy="48" rx="42" ry="20" fill="rgba(255,255,255,0.82)" />
            <ellipse cx="36" cy="42" rx="26" ry="18" fill="rgba(255,255,255,0.82)" />
            <ellipse cx="84" cy="42" rx="26" ry="18" fill="rgba(255,255,255,0.82)" />
            <ellipse cx="60" cy="34" rx="30" ry="20" fill="rgba(255,255,255,0.88)" />
            <ellipse cx="39" cy="52" rx="5.5" ry="3.5" fill="rgba(255,182,193,0.4)" />
            <ellipse cx="81" cy="52" rx="5.5" ry="3.5" fill="rgba(255,182,193,0.4)" />
            <circle cx="48" cy="46" r="2.5" fill="#555" />
            <circle cx="72" cy="46" r="2.5" fill="#555" />
            <circle cx="49" cy="44.8" r="1" fill="white" />
            <circle cx="73" cy="44.8" r="1" fill="white" />
            <path d="M 56 54 Q 60 57 64 54" stroke="#555" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>

        {/* Large floating doodles */}
        <span className="jbg-doodle jd-heart-1">♡</span>
        <span className="jbg-doodle jd-heart-2">♡</span>
        <span className="jbg-doodle jd-star-1">✦</span>
        <span className="jbg-doodle jd-star-2">✧</span>
        <span className="jbg-doodle jd-star-3">✦</span>
        <span className="jbg-doodle jd-flower-1">✿</span>
        <span className="jbg-doodle jd-flower-2">❁</span>
        <span className="jbg-doodle jd-sparkle-1">⊹</span>
        <span className="jbg-doodle jd-sparkle-2">⊹</span>

        {/* SVG doodles */}
        <svg className="jbg-doodle jd-leaf" viewBox="0 0 24 24" width="28">
            <path d="M17 8c-4 0-8 2-10 6s-2 8-2 8 4 0 8-2 6-6 6-8 0-4-2-4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 22C9 18 13 10 17 8" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <svg className="jbg-doodle jd-plane" viewBox="0 0 24 24" width="30">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="jbg-doodle jd-music" viewBox="0 0 24 24" width="24">
            <path d="M9 18V5l12-2v13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="18" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Animated dots trail */}
        <svg className="jbg-doodle jd-wave" viewBox="0 0 300 50" width="220">
            <path d="M0 25 Q 37 5 75 25 T 150 25 T 225 25 T 300 25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 8" strokeLinecap="round" />
        </svg>

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
            <div key={`fp-${i}`} className={`jbg-particle jpart-${i + 1}`} />
        ))}
    </div>
);

// Simple hash function for PIN (client-side privacy, not security-critical)
const hashPin = (pin) => {
    let hash = 5381;
    const str = 'solace_' + pin + '_journal';
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
    }
    return Math.abs(hash).toString(16);
};

const STORAGE_KEYS = {
    PIN: 'solace_pin_hash',
    ENTRIES: 'solace_journal_entries',
    STREAK: 'solace_journal_streak',
};

const JournalPage = ({ navigateTo }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pinError, setPinError] = useState('');
    const [entries, setEntries] = useState([]);
    const [view, setView] = useState('dashboard'); // 'dashboard' | 'editor' | 'entry'
    const [currentEntry, setCurrentEntry] = useState(null);
    const [streak, setStreak] = useState(0);

    const hasPin = !!localStorage.getItem(STORAGE_KEYS.PIN);

    // Load entries from localStorage
    useEffect(() => {
        if (isAuthenticated) {
            try {
                const saved = localStorage.getItem(STORAGE_KEYS.ENTRIES);
                if (saved) setEntries(JSON.parse(saved));
            } catch { setEntries([]); }
            calculateStreak();
        }
    }, [isAuthenticated]);

    // Save entries to localStorage
    const saveEntries = useCallback((newEntries) => {
        setEntries(newEntries);
        localStorage.setItem(STORAGE_KEYS.ENTRIES, JSON.stringify(newEntries));
    }, []);

    // Calculate streak
    const calculateStreak = () => {
        try {
            const saved = localStorage.getItem(STORAGE_KEYS.ENTRIES);
            if (!saved) { setStreak(0); return; }
            const all = JSON.parse(saved);
            if (!all.length) { setStreak(0); return; }

            const dates = [...new Set(all.map(e => new Date(e.createdAt).toDateString()))].sort((a, b) => new Date(b) - new Date(a));
            const today = new Date().toDateString();
            const yesterday = new Date(Date.now() - 86400000).toDateString();

            if (dates[0] !== today && dates[0] !== yesterday) { setStreak(0); return; }

            let count = 1;
            for (let i = 0; i < dates.length - 1; i++) {
                const d1 = new Date(dates[i]), d2 = new Date(dates[i + 1]);
                const diff = Math.round((d1 - d2) / 86400000);
                if (diff === 1) count++;
                else break;
            }
            setStreak(count);
        } catch { setStreak(0); }
    };

    // PIN handlers
    const handlePinSubmit = (pin) => {
        if (hasPin) {
            const stored = localStorage.getItem(STORAGE_KEYS.PIN);
            if (hashPin(pin) === stored) {
                setPinError('');
                setIsAuthenticated(true);
            } else {
                setPinError('Incorrect pin, try again');
            }
        } else {
            localStorage.setItem(STORAGE_KEYS.PIN, hashPin(pin));
            setIsAuthenticated(true);
        }
    };

    // CRUD operations
    const handleSaveEntry = (entry) => {
        const existing = entries.findIndex(e => e.id === entry.id);
        let newEntries;
        if (existing >= 0) {
            newEntries = [...entries];
            newEntries[existing] = entry;
        } else {
            newEntries = [entry, ...entries];
        }
        saveEntries(newEntries);
        calculateStreak();
        setView('dashboard');
        setCurrentEntry(null);
    };

    const handleDeleteEntry = (id) => {
        saveEntries(entries.filter(e => e.id !== id));
        setView('dashboard');
        setCurrentEntry(null);
    };

    const handleToggleFavorite = (id) => {
        const newEntries = entries.map(e => e.id === id ? { ...e, isFavorite: !e.isFavorite } : e);
        saveEntries(newEntries);
        if (currentEntry?.id === id) setCurrentEntry({ ...currentEntry, isFavorite: !currentEntry.isFavorite });
    };

    const handleViewEntry = (id) => {
        const entry = entries.find(e => e.id === id);
        if (entry) { setCurrentEntry(entry); setView('entry'); }
    };

    const handleEditEntry = (entry) => {
        setCurrentEntry(entry);
        setView('editor');
    };

    const handleNewEntry = () => {
        setCurrentEntry(null);
        setView('editor');
    };

    // Stats calculation
    const stats = {
        streak,
        totalEntries: entries.length,
        totalWords: entries.reduce((sum, e) => sum + (e.wordCount || 0), 0),
        topMood: (() => {
            if (!entries.length) return null;
            const counts = {};
            entries.forEach(e => { counts[e.mood] = (counts[e.mood] || 0) + 1; });
            return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
        })(),
    };

    // PIN screen
    if (!isAuthenticated) {
        return (
            <div className="journal-page">
                <JournalBackground />
                <PinScreen isCreating={!hasPin} onPinSubmit={handlePinSubmit} error={pinError} />
            </div>
        );
    }

    return (
        <div className="journal-page">
            <JournalBackground />
            <div className="journal-page-inner">
                {view === 'dashboard' && (
                    <JournalDashboard
                        entries={entries}
                        onNewEntry={handleNewEntry}
                        onViewEntry={handleViewEntry}
                        onToggleFavorite={handleToggleFavorite}
                        stats={stats}
                    />
                )}
                {view === 'editor' && (
                    <JournalEditor
                        entry={currentEntry}
                        onSave={handleSaveEntry}
                        onBack={() => { setView('dashboard'); setCurrentEntry(null); }}
                        onDelete={handleDeleteEntry}
                    />
                )}
                {view === 'entry' && currentEntry && (
                    <JournalEntryView
                        entry={currentEntry}
                        onBack={() => { setView('dashboard'); setCurrentEntry(null); }}
                        onEdit={handleEditEntry}
                        onDelete={handleDeleteEntry}
                        onToggleFavorite={handleToggleFavorite}
                    />
                )}
            </div>
        </div>
    );
};

export default JournalPage;
