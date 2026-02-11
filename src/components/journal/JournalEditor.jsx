import React, { useState, useEffect, useRef } from 'react';
import { MOOD_DATA } from '../../models';
import { JOURNAL_PROMPTS, MOOD_PROMPTS, SUGGESTED_TAGS } from '../../models/journalPrompts';
import { MoodIcon } from '../../views';

const JournalEditor = ({ entry, onSave, onBack, onDelete }) => {
    const [title, setTitle] = useState(entry?.title || '');
    const [content, setContent] = useState(entry?.content || '');
    const [mood, setMood] = useState(entry?.mood || '');
    const [tags, setTags] = useState(entry?.tags || []);
    const [tagInput, setTagInput] = useState('');
    const [showPrompt, setShowPrompt] = useState(false);
    const [currentPrompt, setCurrentPrompt] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showTagSuggestions, setShowTagSuggestions] = useState(false);
    const contentRef = useRef(null);
    const isEditing = !!entry;

    const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
    const charCount = content.length;

    useEffect(() => {
        if (!isEditing && contentRef.current) {
            contentRef.current.focus();
        }
    }, []);

    const getRandomPrompt = () => {
        const prompts = mood && MOOD_PROMPTS[mood]
            ? [...MOOD_PROMPTS[mood], ...JOURNAL_PROMPTS]
            : JOURNAL_PROMPTS;
        const prompt = prompts[Math.floor(Math.random() * prompts.length)];
        setCurrentPrompt(prompt);
        setShowPrompt(true);
    };

    const usePrompt = () => {
        setContent(prev => prev ? prev + '\n\n' + currentPrompt : currentPrompt);
        setShowPrompt(false);
        contentRef.current?.focus();
    };

    const handleAddTag = (tag) => {
        const t = (tag || tagInput).trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
        if (t && !tags.includes(t) && tags.length < 8) {
            setTags([...tags, t]);
        }
        setTagInput('');
        setShowTagSuggestions(false);
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            handleAddTag();
        }
        if (e.key === 'Backspace' && !tagInput && tags.length > 0) {
            setTags(tags.slice(0, -1));
        }
    };

    const handleSave = () => {
        if (!content.trim() && !title.trim()) return;
        onSave({
            id: entry?.id || Date.now().toString(36) + Math.random().toString(36).substr(2),
            title: title.trim(),
            content: content.trim(),
            mood: mood || 'calm',
            tags,
            isFavorite: entry?.isFavorite || false,
            createdAt: entry?.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            wordCount,
        });
        setIsSaved(true);
        setTimeout(() => onBack(), 600);
    };

    const filteredSuggestions = SUGGESTED_TAGS.filter(t => !tags.includes(t) && t.includes(tagInput.toLowerCase()));

    const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    return (
        <div className="journal-editor">
            {/* Header */}
            <div className="editor-header">
                <button className="editor-back" onClick={onBack}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    <span>Back</span>
                </button>
                <div className="editor-header-right">
                    {isEditing && (
                        <button className="editor-delete-btn" onClick={() => setShowDeleteConfirm(true)}>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14" /></svg>
                        </button>
                    )}
                    <button className={`editor-save-btn ${isSaved ? 'saved' : ''}`} onClick={handleSave} disabled={!content.trim() && !title.trim()}>
                        {isSaved ? '✓ Saved!' : 'Save Entry'}
                    </button>
                </div>
            </div>

            {/* Editor Body */}
            <div className="editor-body">
                <div className="editor-date">{todayStr}</div>

                <input
                    className="editor-title"
                    type="text"
                    placeholder="Give this entry a title..."
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    maxLength={100}
                />

                {/* Mood Selector */}
                <div className="editor-mood-section">
                    <span className="editor-label">How are you feeling?</span>
                    <div className="editor-mood-strip">
                        {Object.entries(MOOD_DATA).map(([key, data]) => (
                            <button
                                key={key}
                                className={`editor-mood-btn ${mood === key ? 'active' : ''}`}
                                onClick={() => setMood(mood === key ? '' : key)}
                                style={mood === key ? { borderColor: data.color, background: `${data.color}20` } : {}}
                                title={data.label}
                            >
                                <MoodIcon mood={key} size={28} />
                                <span>{data.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Prompt Section */}
                <div className="editor-prompt-section">
                    <button className="prompt-btn" onClick={getRandomPrompt}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 2l-2 2m-7.6 7.6a5.5 5.5 0 1 1-7.8 7.8 5.5 5.5 0 0 1 7.8-7.8" /><path d="M14 14l7-7" /></svg>
                        {showPrompt ? 'New prompt' : 'Need a prompt?'}
                    </button>
                    {showPrompt && (
                        <div className="prompt-card">
                            <p>"{currentPrompt}"</p>
                            <button className="prompt-use-btn" onClick={usePrompt}>Use this prompt →</button>
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <textarea
                    ref={contentRef}
                    className="editor-content"
                    placeholder="Start writing... pour your heart out ♡"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />

                {/* Tags */}
                <div className="editor-tags-section">
                    <span className="editor-label">Tags</span>
                    <div className="editor-tags-input-wrapper">
                        {tags.map(t => (
                            <span key={t} className="editor-tag">
                                #{t}
                                <button onClick={() => setTags(tags.filter(x => x !== t))}>✕</button>
                            </span>
                        ))}
                        {tags.length < 8 && (
                            <div className="tag-input-container">
                                <input
                                    className="editor-tag-input"
                                    type="text"
                                    placeholder={tags.length ? '' : 'Add tags...'}
                                    value={tagInput}
                                    onChange={e => { setTagInput(e.target.value); setShowTagSuggestions(true); }}
                                    onKeyDown={handleTagKeyDown}
                                    onFocus={() => setShowTagSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowTagSuggestions(false), 200)}
                                />
                                {showTagSuggestions && tagInput && filteredSuggestions.length > 0 && (
                                    <div className="tag-suggestions">
                                        {filteredSuggestions.slice(0, 5).map(s => (
                                            <button key={s} className="tag-suggestion" onMouseDown={() => handleAddTag(s)}>#{s}</button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Info */}
                <div className="editor-footer">
                    <span className="editor-word-count">{wordCount} words · {charCount} characters</span>
                    {mood && <span className="editor-mood-indicator" style={{ color: MOOD_DATA[mood]?.color }}>{MOOD_DATA[mood]?.emoji} {MOOD_DATA[mood]?.label}</span>}
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

export default JournalEditor;
