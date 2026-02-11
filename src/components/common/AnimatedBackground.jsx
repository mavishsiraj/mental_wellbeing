import React, { useMemo } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = ({ variant = 'default' }) => {
    // Cute cloud SVG component
    const CuteCloud = ({ className, size = 100 }) => (
        <svg className={className} viewBox="0 0 120 70" width={size}>
            <ellipse cx="60" cy="48" rx="42" ry="20" fill="rgba(255,255,255,0.9)" />
            <ellipse cx="36" cy="42" rx="26" ry="18" fill="rgba(255,255,255,0.9)" />
            <ellipse cx="84" cy="42" rx="26" ry="18" fill="rgba(255,255,255,0.9)" />
            <ellipse cx="60" cy="34" rx="30" ry="20" fill="rgba(255,255,255,0.95)" />
            {/* Blush cheeks */}
            <ellipse cx="36" cy="52" rx="7" ry="4.5" fill="rgba(255,182,193,0.45)" />
            <ellipse cx="84" cy="52" rx="7" ry="4.5" fill="rgba(255,182,193,0.45)" />
            {/* Eyes */}
            <ellipse cx="48" cy="46" rx="3" ry="4" fill="#555" />
            <ellipse cx="72" cy="46" rx="3" ry="4" fill="#555" />
            <circle cx="49" cy="44" r="1.2" fill="white" />
            <circle cx="73" cy="44" r="1.2" fill="white" />
            {/* Smile */}
            <path d="M 54 56 Q 60 61 66 56" stroke="#555" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
    );

    // Bird SVG component
    const Bird = ({ className }) => (
        <svg className={className} viewBox="0 0 30 15" width="24">
            <path d="M2 8 Q8 2 15 8 Q22 2 28 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );

    // Butterfly SVG component
    const Butterfly = ({ className }) => (
        <svg className={className} viewBox="0 0 30 30" width="22">
            <ellipse cx="12" cy="12" rx="8" ry="10" fill="currentColor" opacity="0.3" />
            <ellipse cx="18" cy="12" rx="8" ry="10" fill="currentColor" opacity="0.25" />
            <line x1="15" y1="5" x2="15" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="15" y1="5" x2="11" y2="2" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
            <line x1="15" y1="5" x2="19" y2="2" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        </svg>
    );

    // Leaf SVG component
    const Leaf = ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" width="20">
            <path d="M17 8c-4 0-8 2-10 6s-2 8-2 8 4 0 8-2 6-6 6-8 0-4-2-4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 22C9 18 13 10 17 8" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
    );

    // Floating quotes per variant
    const quotes = useMemo(() => {
        const map = {
            talk: ["You are heard", "Speak freely", "Safe space", "Let it go"],
            companion: ["I'm here", "You matter", "Breathe", "You're not alone"],
            resources: ["Grow gently", "One step", "Be kind", "Trust yourself"],
            book: ["You deserve care", "Take your time", "We're here"]
        };
        return map[variant] || ["Breathe", "Peace", "You are enough"];
    }, [variant]);

    return (
        <div className={`animated-bg-container variant-${variant}`}>
            {/* Warm gradient background */}
            <div className="bg-sky-gradient" />

            {/* Soft gradient blobs */}
            <div className="sky-blob sb-1" />
            <div className="sky-blob sb-2" />
            <div className="sky-blob sb-3" />

            {/* Cute clouds */}
            <CuteCloud className="sky-cloud sc-1" size={120} />
            <CuteCloud className="sky-cloud sc-2" size={90} />
            <CuteCloud className="sky-cloud sc-3" size={75} />

            {/* Flying birds */}
            <Bird className="sky-bird bird-1" />
            <Bird className="sky-bird bird-2" />
            <Bird className="sky-bird bird-3" />
            <Bird className="sky-bird bird-4" />
            <Bird className="sky-bird bird-5" />

            {/* Butterflies */}
            <Butterfly className="sky-butterfly bf-1" />
            <Butterfly className="sky-butterfly bf-2" />
            <Butterfly className="sky-butterfly bf-3" />

            {/* Falling leaves */}
            <Leaf className="sky-leaf leaf-1" />
            <Leaf className="sky-leaf leaf-2" />
            <Leaf className="sky-leaf leaf-3" />
            <Leaf className="sky-leaf leaf-4" />
            <Leaf className="sky-leaf leaf-5" />

            {/* Floating nature doodles (text) */}
            <span className="sky-doodle sd-flower-1">✿</span>
            <span className="sky-doodle sd-flower-2">❁</span>
            <span className="sky-doodle sd-flower-3">✾</span>
            <span className="sky-doodle sd-heart-1">♡</span>
            <span className="sky-doodle sd-heart-2">♡</span>
            <span className="sky-doodle sd-star-1">✦</span>
            <span className="sky-doodle sd-star-2">✧</span>
            <span className="sky-doodle sd-star-3">⋆</span>
            <span className="sky-doodle sd-star-4">✦</span>
            <span className="sky-doodle sd-sparkle-1">✨</span>
            <span className="sky-doodle sd-sparkle-2">💫</span>

            {/* Sun rays (top-right corner) */}
            <div className="sun-glow" />

            {/* Dotted path decoration */}
            <svg className="sky-path path-1" viewBox="0 0 300 50" width="200">
                <path d="M0 25 Q 37 5 75 25 T 150 25 T 225 25 T 300 25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" strokeLinecap="round" />
            </svg>

            {/* Floating quotes */}
            {quotes.map((q, i) => (
                <div key={`q-${i}`} className={`sky-quote sq-${i}`}>
                    "{q}"
                </div>
            ))}

            {/* Twinkling particles */}
            {[...Array(25)].map((_, i) => (
                <div key={`sp-${i}`} className={`sky-particle sp-${i}`} />
            ))}

            {/* Rolling hills silhouette at bottom */}
            <svg className="sky-hills" viewBox="0 0 1440 200" preserveAspectRatio="none">
                <path d="M0 200 L0 120 Q 180 60 360 100 Q 540 140 720 90 Q 900 40 1080 80 Q 1260 120 1440 70 L1440 200 Z" fill="rgba(168,181,160,0.08)" />
                <path d="M0 200 L0 140 Q 200 90 400 130 Q 600 170 800 110 Q 1000 60 1200 100 Q 1350 130 1440 90 L1440 200 Z" fill="rgba(168,181,160,0.05)" />
            </svg>
        </div>
    );
};

export default AnimatedBackground;
