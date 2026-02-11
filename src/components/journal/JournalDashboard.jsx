import React, { useState, useMemo } from 'react';
import { MOOD_DATA } from '../../models';

const JournalDashboard = ({ entries, onNewEntry, onViewEntry, onToggleFavorite, stats }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [viewMode, setViewMode] = useState('grid');

    const filters = [
        { id: 'all', label: 'All', icon: '✦' },
        { id: 'favorites', label: 'Favorites', icon: '♡' },
        ...Object.entries(MOOD_DATA).slice(0, 6).map(([key, data]) => ({
            id: key, label: data.label, icon: data.emoji
        }))
    ];

    const filteredEntries = useMemo(() => {
        let result = [...entries];
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(e =>
                (e.title || '').toLowerCase().includes(q) ||
                e.content.toLowerCase().includes(q) ||
                e.tags?.some(t => t.toLowerCase().includes(q))
            );
        }
        if (activeFilter === 'favorites') result = result.filter(e => e.isFavorite);
        else if (activeFilter !== 'all') result = result.filter(e => e.mood === activeFilter);
        return result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }, [entries, searchQuery, activeFilter]);

    const formatDate = (dateStr) => {
        const d = new Date(dateStr), now = new Date();
        const diff = Math.floor((now - d) / 86400000);
        if (diff === 0) return 'Today';
        if (diff === 1) return 'Yesterday';
        if (diff < 7) return `${diff} days ago`;
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className="journal-dashboard">
            {/* Cute floating doodles for dashboard */}
            <div className="dash-doodles" aria-hidden="true">
                {/* Cute cloud top-right */}
                <svg className="dash-cute-cloud dcc-1" viewBox="0 0 100 60" width="75" height="47">
                    <ellipse cx="50" cy="40" rx="35" ry="18" fill="rgba(255,255,255,0.85)" />
                    <ellipse cx="30" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.85)" />
                    <ellipse cx="70" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.85)" />
                    <ellipse cx="50" cy="28" rx="25" ry="16" fill="rgba(255,255,255,0.9)" />
                    <ellipse cx="32" cy="42" rx="5" ry="3" fill="rgba(255,182,193,0.4)" />
                    <ellipse cx="68" cy="42" rx="5" ry="3" fill="rgba(255,182,193,0.4)" />
                    <circle cx="40" cy="38" r="2" fill="#5a5a5a" />
                    <circle cx="60" cy="38" r="2" fill="#5a5a5a" />
                    <circle cx="41" cy="37" r="0.7" fill="white" />
                    <circle cx="61" cy="37" r="0.7" fill="white" />
                    <path d="M 46 45 Q 50 48 54 45" stroke="#5a5a5a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </svg>

                {/* Cute cloud bottom-left */}
                <svg className="dash-cute-cloud dcc-2" viewBox="0 0 100 60" width="60" height="37">
                    <ellipse cx="50" cy="40" rx="35" ry="18" fill="rgba(255,255,255,0.75)" />
                    <ellipse cx="30" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.75)" />
                    <ellipse cx="70" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.75)" />
                    <ellipse cx="50" cy="28" rx="25" ry="16" fill="rgba(255,255,255,0.82)" />
                    <ellipse cx="33" cy="42" rx="4" ry="2.5" fill="rgba(255,182,193,0.35)" />
                    <ellipse cx="67" cy="42" rx="4" ry="2.5" fill="rgba(255,182,193,0.35)" />
                    <circle cx="40" cy="38" r="1.8" fill="#5a5a5a" />
                    <circle cx="60" cy="38" r="1.8" fill="#5a5a5a" />
                    <circle cx="41" cy="37" r="0.6" fill="white" />
                    <circle cx="61" cy="37" r="0.6" fill="white" />
                    <path d="M 47 45 Q 50 47 53 45" stroke="#5a5a5a" strokeWidth="1.1" fill="none" strokeLinecap="round" />
                </svg>

                {/* Floating sparkles & doodles */}
                <span className="dash-float dd-sparkle-1">✦</span>
                <span className="dash-float dd-sparkle-2">✧</span>
                <span className="dash-float dd-sparkle-3">⋆</span>
                <span className="dash-float dd-heart-1">♡</span>
                <span className="dash-float dd-heart-2">❀</span>
                <span className="dash-float dd-flower-1">✿</span>
                <span className="dash-float dd-flower-2">❁</span>

                {/* Dotted wave decoration */}
                <svg className="dash-float dd-wave" viewBox="0 0 200 30" width="120">
                    <path d="M0 15 Q 25 3 50 15 T 100 15 T 150 15 T 200 15" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 5" />
                </svg>

                {/* Floating leaf */}
                <svg className="dash-float dd-leaf" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M20 4c-2 0-8 2-10 6-2 4-2 10-2 10s6 0 10-2c4-2 6-8 6-10 0-2-2-4-4-4z" fill="none" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M8 20C12 16 16 8 20 4" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            </div>

            {/* Playful section title */}
            <div className="dash-welcome">
                <span className="dash-welcome-tag">~ your journal ~</span>
            </div>

            {/* Stats Bar */}
            <div className="journal-stats-bar">
                <div className="stat-card">
                    <span className="stat-emoji">🔥</span>
                    <span className="stat-value">{stats.streak}</span>
                    <span className="stat-label">day streak</span>
                </div>
                <div className="stat-card">
                    <span className="stat-emoji">📝</span>
                    <span className="stat-value">{stats.totalEntries}</span>
                    <span className="stat-label">entries</span>
                </div>
                <div className="stat-card">
                    <span className="stat-emoji">✍️</span>
                    <span className="stat-value">{stats.totalWords >= 1000 ? `${(stats.totalWords / 1000).toFixed(1)}k` : stats.totalWords}</span>
                    <span className="stat-label">words</span>
                </div>
                <div className="stat-card">
                    <span className="stat-emoji">{stats.topMood ? MOOD_DATA[stats.topMood]?.emoji : '✨'}</span>
                    <span className="stat-value">{stats.topMood ? MOOD_DATA[stats.topMood]?.label : '—'}</span>
                    <span className="stat-label">top mood</span>
                </div>
            </div>

            {/* Toolbar */}
            <div className="journal-toolbar">
                <div className="journal-search">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                    <input type="text" placeholder="Search entries..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                    {searchQuery && <button className="search-clear" onClick={() => setSearchQuery('')}>✕</button>}
                </div>
                <div className="journal-view-toggle">
                    <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')} title="Grid view">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
                    </button>
                    <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')} title="List view">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="3" y="4" width="18" height="3" rx="1" /><rect x="3" y="10.5" width="18" height="3" rx="1" /><rect x="3" y="17" width="18" height="3" rx="1" /></svg>
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="journal-filters">
                {filters.map(f => (
                    <button key={f.id} className={`filter-pill ${activeFilter === f.id ? 'active' : ''}`} onClick={() => setActiveFilter(f.id)}>
                        <span>{f.icon}</span> {f.label}
                    </button>
                ))}
            </div>

            {/* Entry Cards */}
            {filteredEntries.length > 0 ? (
                <div className={`journal-entries ${viewMode}`}>
                    {filteredEntries.map(entry => {
                        const mood = MOOD_DATA[entry.mood];
                        return (
                            <div key={entry.id} className="journal-entry-card" onClick={() => onViewEntry(entry.id)} style={{ '--entry-color': mood?.color || '#A8B5A0' }}>
                                <div className="entry-card-strip" />
                                <div className="entry-card-body">
                                    <div className="entry-card-top">
                                        <span className="entry-card-date">{formatDate(entry.createdAt)}</span>
                                        <button className={`entry-fav-btn ${entry.isFavorite ? 'active' : ''}`} onClick={e => { e.stopPropagation(); onToggleFavorite(entry.id); }}>
                                            {entry.isFavorite ? '♥' : '♡'}
                                        </button>
                                    </div>
                                    <h3 className="entry-card-title">{entry.title || 'Untitled Entry'}</h3>
                                    <p className="entry-card-preview">{entry.content.substring(0, viewMode === 'list' ? 200 : 100)}{entry.content.length > (viewMode === 'list' ? 200 : 100) ? '...' : ''}</p>
                                    <div className="entry-card-bottom">
                                        <span className="entry-mood-badge">{mood?.emoji} {mood?.label}</span>
                                        {entry.tags?.length > 0 && (
                                            <div className="entry-tags-row">
                                                {entry.tags.slice(0, 2).map(t => <span key={t} className="entry-mini-tag">#{t}</span>)}
                                                {entry.tags.length > 2 && <span className="entry-mini-tag more">+{entry.tags.length - 2}</span>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="journal-empty">
                    <div className="empty-icon">
                        {/* Cute notebook illustration */}
                        <svg viewBox="0 0 120 120" width="110" height="110">
                            <circle cx="60" cy="60" r="50" fill="rgba(168,181,160,0.08)" />
                            <rect x="35" y="25" width="50" height="68" rx="8" fill="white" stroke="#d4ddd0" strokeWidth="2" />
                            {/* Notebook lines */}
                            <line x1="45" y1="42" x2="75" y2="42" stroke="#E8DED1" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="45" y1="52" x2="70" y2="52" stroke="#E8DED1" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="45" y1="62" x2="65" y2="62" stroke="#E8DED1" strokeWidth="1.5" strokeLinecap="round" />
                            {/* Cute pen */}
                            <line x1="72" y1="68" x2="80" y2="80" stroke="#A8B5A0" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="81" cy="81" r="1.5" fill="#A8B5A0" />
                            {/* Little heart */}
                            <path d="M56 76 Q58 72 60 76 Q62 72 64 76 Q60 82 56 76Z" fill="rgba(229,196,184,0.6)" />
                            {/* Sparkle */}
                            <path d="M75 30 l2 4 l2-4 l-2 4 l2 4 l-2-4 l-2 4 l2-4z" stroke="#E8C87A" strokeWidth="1" fill="none" />
                        </svg>
                    </div>
                    <h3>{searchQuery ? 'No entries found' : activeFilter !== 'all' ? 'No entries with this filter' : 'Your journal awaits ♡'}</h3>
                    <p>{searchQuery ? 'Try a different search term' : 'Start writing your first entry ~ it\'s your safe space ✿'}</p>
                    {!searchQuery && activeFilter === 'all' && (
                        <button className="empty-cta-btn" onClick={onNewEntry}>Write your first entry ✎</button>
                    )}
                </div>
            )}

            {/* FAB */}
            <button className="journal-fab" onClick={onNewEntry}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                <span>New Entry</span>
            </button>
        </div>
    );
};

export default JournalDashboard;
