import React, { useState } from 'react';
import AnimatedBackground from '../components/common/AnimatedBackground';
import './BookCallPage.css';

const BookCallPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="book-call-page">
            <AnimatedBackground variant="book" />

            <div className="book-call-container">
                <div className="book-card">
                    {!submitted ? (
                        <>
                            <div className="book-header">
                                <h1>Speak to a Listener</h1>
                                <p>Sometimes you just need someone to hear you out. Book a free, anonymous 30-minute session with a compassionate listener.</p>
                            </div>

                            <form className="booking-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Choose a Topic (Optional)</label>
                                    <select className="form-select">
                                        <option>Just need to vent</option>
                                        <option>Feeling lonely</option>
                                        <option>Relationship issues</option>
                                        <option>Work stress</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Preferred Time</label>
                                    <input type="datetime-local" className="form-input" required />
                                </div>

                                <div className="form-group">
                                    <label>What's on your mind? (Briefly)</label>
                                    <textarea className="form-textarea" placeholder="I'm feeling..."></textarea>
                                </div>

                                <button type="submit" className="btn-book">Confirm Booking</button>
                            </form>
                        </>
                    ) : (
                        <div className="success-message">
                            <div className="success-icon">✅</div>
                            <h2>Booking Confirmed!</h2>
                            <p>We have scheduled your session. A link will be available here 5 minutes before your time.</p>
                            <button className="btn-book" onClick={() => setSubmitted(false)}>Book Another</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookCallPage;
