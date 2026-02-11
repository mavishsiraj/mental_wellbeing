import React, { useState, useEffect, useRef } from 'react';
import AnimatedBackground from '../components/common/AnimatedBackground';
import './CompanionPage.css';

const CompanionPage = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: "Hi there, I'm Solace. I'm here to listen, support, and help you find calm. What's on your mind?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), sender: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const responses = [
                "It sounds like you're carrying a lot right now. I'm here.",
                "That's a valid way to feel. Have you been kind to yourself today?",
                "Sending you a digital hug. 🫂 Tell me more if it helps.",
                "Take a deep breath with me. In... and out...",
                "You are stronger than you think, even in this moment."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const aiMsg = { id: Date.now() + 1, sender: 'ai', text: randomResponse };

            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="companion-page">
            <AnimatedBackground variant="companion" />

            <div className="chat-container fade-in-scale">
                <div className="chat-header">
                    <div className="header-info">
                        <h2>Solace Companion</h2>
                        <span className="status-text">Always here for you</span>
                    </div>
                </div>

                <div className="chat-window">
                    <div className="chat-date">Today</div>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message-row ${msg.sender === 'user' ? 'user-row' : 'ai-row'}`}>
                            {msg.sender === 'ai' && <div className="avatar-small">🤖</div>}
                            <div className={`message-bubble ${msg.sender === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message-row ai-row">
                            <div className="avatar-small">🤖</div>
                            <div className="message-bubble ai-bubble typing-indicator">
                                <span>•</span><span>•</span><span>•</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chat-input-area">
                    <form onSubmit={handleSend} className="chat-form">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="chat-input"
                        />
                        <button type="submit" className="send-btn">
                            <svg className="send-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CompanionPage;
