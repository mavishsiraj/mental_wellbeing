import React, { useState, useRef, useEffect } from 'react';

const PinScreen = ({ isCreating, onPinSubmit, error }) => {
    const [pin, setPin] = useState(['', '', '', '']);
    const [confirmPin, setConfirmPin] = useState(['', '', '', '']);
    const [step, setStep] = useState('enter');
    const [localError, setLocalError] = useState('');
    const [shake, setShake] = useState(false);
    const inputRefs = useRef([]);
    const confirmRefs = useRef([]);

    useEffect(() => {
        setTimeout(() => inputRefs.current[0]?.focus(), 300);
    }, []);

    useEffect(() => {
        if (error) triggerShake();
    }, [error]);

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 600);
    };

    const handleInput = (index, value, isConfirm = false) => {
        if (!/^\d*$/.test(value)) return;
        const setter = isConfirm ? setConfirmPin : setPin;
        const refs = isConfirm ? confirmRefs : inputRefs;
        const current = isConfirm ? [...confirmPin] : [...pin];

        current[index] = value.slice(-1);
        setter(current);

        if (value && index < 3) {
            refs.current[index + 1]?.focus();
        }

        if (current.every(d => d !== '')) {
            setTimeout(() => {
                if (isCreating && !isConfirm && step === 'enter') {
                    setStep('confirm');
                    setTimeout(() => confirmRefs.current[0]?.focus(), 150);
                } else if (isCreating && isConfirm) {
                    const pinStr = pin.join('');
                    const confirmStr = current.join('');
                    if (pinStr === confirmStr) {
                        onPinSubmit(pinStr);
                    } else {
                        setLocalError("Pins don't match, try again ♡");
                        triggerShake();
                        setter(['', '', '', '']);
                        setTimeout(() => refs.current[0]?.focus(), 400);
                    }
                } else {
                    onPinSubmit(current.join(''));
                }
            }, 200);
        }
    };

    const handleKeyDown = (index, e, isConfirm = false) => {
        if (e.key === 'Backspace') {
            const refs = isConfirm ? confirmRefs : inputRefs;
            const current = isConfirm ? [...confirmPin] : [...pin];
            const setter = isConfirm ? setConfirmPin : setPin;
            if (!current[index] && index > 0) {
                refs.current[index - 1]?.focus();
                current[index - 1] = '';
                setter(current);
            }
        }
    };

    const handleForgotPin = () => {
        if (window.confirm('This will erase all your journal entries. Are you sure?')) {
            localStorage.removeItem('solace_pin_hash');
            localStorage.removeItem('solace_journal_entries');
            localStorage.removeItem('solace_journal_streak');
            window.location.reload();
        }
    };

    const goBackToEnter = () => {
        setStep('enter');
        setConfirmPin(['', '', '', '']);
        setPin(['', '', '', '']);
        setLocalError('');
        setTimeout(() => inputRefs.current[0]?.focus(), 100);
    };

    const currentPinArr = (step === 'confirm' && isCreating) ? confirmPin : pin;
    const currentRefs = (step === 'confirm' && isCreating) ? confirmRefs : inputRefs;
    const isConfirmStep = step === 'confirm' && isCreating;

    return (
        <div className="journal-pin-screen">
            {/* Cute floating clouds like landing page */}
            <div className="pin-floating-doodles" aria-hidden="true">
                {/* Cute Cloud 1 - top left */}
                <svg className="pin-cute-cloud pcc-1" viewBox="0 0 100 60" width="100" height="62">
                    <ellipse cx="50" cy="40" rx="35" ry="18" fill="rgba(255,255,255,0.9)" />
                    <ellipse cx="30" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.9)" />
                    <ellipse cx="70" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.9)" />
                    <ellipse cx="50" cy="28" rx="25" ry="16" fill="rgba(255,255,255,0.95)" />
                    <ellipse cx="30" cy="42" rx="5" ry="3.5" fill="rgba(255,182,193,0.5)" />
                    <ellipse cx="70" cy="42" rx="5" ry="3.5" fill="rgba(255,182,193,0.5)" />
                    <ellipse cx="40" cy="38" rx="2.5" ry="3.2" fill="#4a4a4a" />
                    <ellipse cx="60" cy="38" rx="2.5" ry="3.2" fill="#4a4a4a" />
                    <circle cx="41" cy="36.5" r="1" fill="white" />
                    <circle cx="61" cy="36.5" r="1" fill="white" />
                    <path d="M 46 46 Q 50 49 54 46" stroke="#4a4a4a" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                </svg>

                {/* Cute Cloud 2 - right side */}
                <svg className="pin-cute-cloud pcc-2" viewBox="0 0 100 60" width="80" height="50">
                    <ellipse cx="50" cy="40" rx="35" ry="18" fill="rgba(255,255,255,0.85)" />
                    <ellipse cx="30" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.85)" />
                    <ellipse cx="70" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.85)" />
                    <ellipse cx="50" cy="28" rx="25" ry="16" fill="rgba(255,255,255,0.9)" />
                    <ellipse cx="32" cy="42" rx="5" ry="3" fill="rgba(255,182,193,0.45)" />
                    <ellipse cx="68" cy="42" rx="5" ry="3" fill="rgba(255,182,193,0.45)" />
                    <ellipse cx="40" cy="38" rx="2" ry="2.8" fill="#4a4a4a" />
                    <ellipse cx="60" cy="38" rx="2" ry="2.8" fill="#4a4a4a" />
                    <circle cx="41" cy="37" r="0.8" fill="white" />
                    <circle cx="61" cy="37" r="0.8" fill="white" />
                    <path d="M 46 45 Q 50 48 54 45" stroke="#4a4a4a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </svg>

                {/* Cute Cloud 3 - bottom left */}
                <svg className="pin-cute-cloud pcc-3" viewBox="0 0 100 60" width="70" height="44">
                    <ellipse cx="50" cy="40" rx="35" ry="18" fill="rgba(255,255,255,0.8)" />
                    <ellipse cx="30" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.8)" />
                    <ellipse cx="70" cy="35" rx="22" ry="15" fill="rgba(255,255,255,0.8)" />
                    <ellipse cx="50" cy="28" rx="25" ry="16" fill="rgba(255,255,255,0.88)" />
                    <ellipse cx="31" cy="42" rx="4.5" ry="3" fill="rgba(255,182,193,0.4)" />
                    <ellipse cx="69" cy="42" rx="4.5" ry="3" fill="rgba(255,182,193,0.4)" />
                    <circle cx="40" cy="38" r="2" fill="#4a4a4a" />
                    <circle cx="60" cy="38" r="2" fill="#4a4a4a" />
                    <circle cx="41" cy="37" r="0.7" fill="white" />
                    <circle cx="61" cy="37" r="0.7" fill="white" />
                    <path d="M 47 45 Q 50 47 53 45" stroke="#4a4a4a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </svg>

                {/* Floating hearts */}
                <span className="pin-float-doodle pfd-heart-1">♡</span>
                <span className="pin-float-doodle pfd-heart-2">♡</span>
                <span className="pin-float-doodle pfd-heart-3">❀</span>

                {/* Floating stars/sparkles */}
                <span className="pin-float-doodle pfd-star-1">✦</span>
                <span className="pin-float-doodle pfd-star-2">✧</span>
                <span className="pin-float-doodle pfd-star-3">⋆</span>
                <span className="pin-float-doodle pfd-star-4">✦</span>

                {/* Floating leaves */}
                <svg className="pin-float-doodle pfd-leaf-1" viewBox="0 0 24 24" width="18" height="18">
                    <path d="M20 4c-2 0-8 2-10 6-2 4-2 10-2 10s6 0 10-2c4-2 6-8 6-10 0-2-2-4-4-4z" fill="none" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M8 20C12 16 16 8 20 4" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <svg className="pin-float-doodle pfd-leaf-2" viewBox="0 0 24 24" width="14" height="14">
                    <path d="M20 4c-2 0-8 2-10 6-2 4-2 10-2 10s6 0 10-2c4-2 6-8 6-10 0-2-2-4-4-4z" fill="none" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M8 20C12 16 16 8 20 4" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>

                {/* Paper plane */}
                <svg className="pin-float-doodle pfd-plane" viewBox="0 0 24 24" width="22" height="22">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                </svg>

                {/* Dotted path decoration */}
                <svg className="pin-float-doodle pfd-dots" viewBox="0 0 200 40" width="140">
                    <path d="M0 20 Q 25 5 50 20 T 100 20 T 150 20 T 200 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" />
                </svg>

                {/* Tiny flowers */}
                <span className="pin-float-doodle pfd-flower-1">✿</span>
                <span className="pin-float-doodle pfd-flower-2">❁</span>
            </div>

            <div className="pin-card">
                {/* Decorative top border accent */}
                <div className="pin-card-accent" />

                <div className="pin-card-icon">
                    {isCreating ? (
                        <svg viewBox="0 0 48 48" width="56" height="56">
                            <circle cx="24" cy="24" r="21" fill="rgba(168,181,160,0.12)" stroke="#A8B5A0" strokeWidth="1.5" />
                            <rect x="16" y="24" width="16" height="14" rx="3" fill="none" stroke="#A8B5A0" strokeWidth="1.8" />
                            <circle cx="24" cy="31" r="2" fill="#A8B5A0" />
                            <line x1="24" y1="33" x2="24" y2="35" stroke="#A8B5A0" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M18 24v-4a6 6 0 0 1 12 0v4" fill="none" stroke="#A8B5A0" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 48 48" width="56" height="56">
                            <circle cx="24" cy="24" r="21" fill="rgba(229,196,184,0.12)" stroke="#E5C4B8" strokeWidth="1.5" />
                            <path d="M33 20V16c0-5-4-9-9-9s-9 4-9 9v4" fill="none" stroke="#E5C4B8" strokeWidth="1.8" strokeLinecap="round" />
                            <rect x="12" y="20" width="24" height="20" rx="4" fill="none" stroke="#E5C4B8" strokeWidth="1.8" />
                            <circle cx="24" cy="30" r="2.5" fill="#E5C4B8" />
                            <line x1="24" y1="33" x2="24" y2="36" stroke="#E5C4B8" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    )}
                </div>

                <h2 className="pin-title">
                    {isCreating ? 'Create Your Secret Pin' : 'Welcome Back ♡'}
                </h2>
                <p className="pin-subtitle">
                    {isCreating
                        ? step === 'enter'
                            ? 'Choose a 4-digit pin to keep your journal safe'
                            : 'Confirm your pin one more time'
                        : 'Enter your pin to unlock your journal'}
                </p>

                {isConfirmStep && <span className="pin-step-label">~ confirm pin ~</span>}

                <div className={`pin-inputs ${shake ? 'shake' : ''}`}>
                    {currentPinArr.map((digit, i) => (
                        <div key={i} className={`pin-input-wrapper ${digit ? 'filled' : ''}`}>
                            <input
                                ref={el => currentRefs.current[i] = el}
                                type="password"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={e => handleInput(i, e.target.value, isConfirmStep)}
                                onKeyDown={e => handleKeyDown(i, e, isConfirmStep)}
                                className="pin-digit-input"
                                autoComplete="off"
                            />
                            <div className={`pin-dot ${digit ? 'active' : ''}`} />
                        </div>
                    ))}
                </div>

                {(localError || error) && (
                    <p className="pin-error-msg">✕ {localError || error}</p>
                )}

                {!isCreating && (
                    <button className="pin-forgot-btn" onClick={handleForgotPin}>forgot your pin?</button>
                )}
                {isConfirmStep && (
                    <button className="pin-back-btn" onClick={goBackToEnter}>← go back</button>
                )}
            </div>

            <p className="pin-footer-text">
                {isCreating ? '~ your entries are stored locally on this device ♡ ~' : '~ your safe space awaits ~'}
            </p>
        </div>
    );
};

export default PinScreen;
