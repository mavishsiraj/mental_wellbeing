import React, { useState } from 'react';
import AnimatedBackground from '../components/common/AnimatedBackground';
import './TalkPage.css';

const TalkPage = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            text: "I felt really overwhelmed today, but taking a deep breath helped.",
            timestamp: "2 hours ago",
            comments: [
                { id: 101, text: "Breathing is so important! Glad you found a moment of peace." }
            ],
            likes: 5,
            tag: "Reflection"
        },
        {
            id: 2,
            text: "Sometimes I just want to scream into the void. Is that normal?",
            timestamp: "5 hours ago",
            comments: [],
            likes: 12,
            tag: "Venting"
        }
    ]);
    const [newPost, setNewPost] = useState("");
    const [activeCommentId, setActiveCommentId] = useState(null);
    const [newComment, setNewComment] = useState("");

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (!newPost.trim()) return;
        const post = {
            id: Date.now(),
            text: newPost,
            timestamp: "Just now",
            comments: [],
            likes: 0,
            tag: "Thought"
        };
        setPosts([post, ...posts]);
        setNewPost("");
    };

    const handleCommentSubmit = (postId) => {
        if (!newComment.trim()) return;
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [...post.comments, { id: Date.now(), text: newComment }]
                };
            }
            return post;
        });
        setPosts(updatedPosts);
        setNewComment("");
        setActiveCommentId(null);
    };

    return (
        <div className="talk-page">
            <AnimatedBackground variant="talk" />

            <div className="talk-container fade-in-up">
                <div className="talk-header">
                    <h1>The Sanctuary</h1>
                    <div className="header-decoration">
                        <span className="decoration-line"></span>
                        <span className="decoration-icon">🌿</span>
                        <span className="decoration-line"></span>
                    </div>
                    <p>A safe haven to unburden your mind. No judgment, just listening.</p>
                </div>

                <div className="talk-input-section hover-scale">
                    <form onSubmit={handlePostSubmit}>
                        <textarea
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                            placeholder="Share your burden here... (It's anonymous)"
                            className="talk-textarea"
                        />
                        <div className="input-actions">
                            <span className="anon-badge">🔒 Anonymous</span>
                            <button type="submit" className="btn-primary submit-btn">
                                Release to the Void
                            </button>
                        </div>
                    </form>
                </div>

                <div className="talk-feed">
                    {posts.map(post => (
                        <div key={post.id} className="talk-card slide-in">
                            <div className="card-badge">{post.tag}</div>
                            <div className="card-content">
                                <p className="post-text">"{post.text}"</p>
                                <span className="post-meta">{post.timestamp}</span>
                            </div>

                            <div className="card-actions">
                                <button className="action-btn like-btn">
                                    <span className="icon">♥</span> {post.likes}
                                </button>
                                <button
                                    className="action-btn comment-btn"
                                    onClick={() => setActiveCommentId(activeCommentId === post.id ? null : post.id)}
                                >
                                    <span className="icon">💬</span> {post.comments.length}
                                </button>
                            </div>

                            {/* Comments Section */}
                            {(activeCommentId === post.id || post.comments.length > 0) && (
                                <div className={`comments-section ${activeCommentId === post.id ? 'open' : ''}`}>
                                    {post.comments.map(comment => (
                                        <div key={comment.id} className="comment-bubble">
                                            {comment.text}
                                        </div>
                                    ))}

                                    {activeCommentId === post.id && (
                                        <div className="comment-input-wrapper">
                                            <input
                                                type="text"
                                                placeholder="Offer support..."
                                                value={newComment}
                                                onChange={(e) => setNewComment(e.target.value)}
                                                className="comment-input"
                                            />
                                            <button
                                                onClick={() => handleCommentSubmit(post.id)}
                                                className="btn-secondary comment-send-btn"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TalkPage;
