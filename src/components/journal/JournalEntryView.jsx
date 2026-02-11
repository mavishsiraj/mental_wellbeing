import React from 'react';
import { MOOD_DATA } from '../../models';
import { MoodIcon } from '../../views';

const JournalEntryView = ({ entry, onBack, onEdit, onDelete, onToggleFavorite }) => {
    const mood = MOOD_DATA[entry.mood];
    const createdDate = new Date(entry.createdAt);
    const updatedDate = entry.updatedAt ? new Date(entry.updatedAt) : null;

    const formatFullDate = (d) => d.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);

    return (
        <div className="journal-entry-view">
            {/* Header */}
            <div className="entry-view-header">
                <button className="editor-back" onClick={onBack}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    <span>Back</span>
                </button>
                <div className="entry-view-actions">
                    <button className={`entry-view-fav ${entry.isFavorite ? 'active' : ''}`} onClick={() => onToggleFavorite(entry.id)}>
                        {entry.isFavorite ? '♥' : '♡'}
                    </button>
                    <button className="entry-view-edit" onClick={() => onEdit(entry)}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        <span>Edit</span>
                    </button>
                    <button className="entry-view-delete" onClick={() => setShowDeleteConfirm(true)}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14" /></svg>
                    </button>
                </div>
            </div>

            {/* Entry Content */}
            <div className="entry-view-content">
                {/* Mood & Date */}
                <div className="entry-view-meta">
                    {mood && (
                        <div className="entry-view-mood" style={{ background: `${mood.color}18`, borderColor: `${mood.color}40` }}>
                            <MoodIcon mood={entry.mood} size={24} />
                            <span style={{ color: mood.color }}>{mood.label}</span>
                        </div>
                    )}
                    <div className="entry-view-date-info">
                        <span className="entry-view-date">{formatFullDate(createdDate)}</span>
                        <span className="entry-view-time">{formatTime(createdDate)}</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="entry-view-title">{entry.title || 'Untitled Entry'}</h1>

                {/* Tags */}
                {entry.tags?.length > 0 && (
                    <div className="entry-view-tags">
                        {entry.tags.map(t => <span key={t} className="entry-view-tag">#{t}</span>)}
                    </div>
                )}

                {/* Body */}
                <div className="entry-view-body">
                    {entry.content.split('\n').map((paragraph, i) => (
                        paragraph.trim() ? <p key={i}>{paragraph}</p> : <br key={i} />
                    ))}
                </div>

                {/* Footer */}
                <div className="entry-view-footer">
                    <span>{entry.wordCount || 0} words</span>
                    {updatedDate && updatedDate.getTime() !== createdDate.getTime() && (
                        <span>Edited {formatFullDate(updatedDate)}</span>
                    )}
                </div>
            </div>

            {/* Delete Confirmation */}
            {showDeleteConfirm && (
                <div className="delete-overlay" onClick={() => setShowDeleteConfirm(false)}>
                    <div className="delete-modal" onClick={e => e.stopPropagation()}>
                        <h3>Delete this entry?</h3>
                        <p>This cannot be undone.</p>
                        <div className="delete-actions">
                            <button className="delete-cancel" onClick={() => setShowDeleteConfirm(false)}>Keep it</button>
                            <button className="delete-confirm" onClick={() => { onDelete(entry.id); onBack(); }}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JournalEntryView;
