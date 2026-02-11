import React from 'react';
import AnimatedBackground from '../components/common/AnimatedBackground';
import './ResourcesPage.css';

const ResourcesPage = () => {
    const exercises = [
        {
            id: 1,
            title: "Grounding",
            subtitle: "5-4-3-2-1 Technique",
            duration: "5 mins",
            description: "Connect with your senses to stop spiraling thoughts.",
            icon: "🌿",
            color: "#E5C4B8"
        },
        {
            id: 2,
            title: "Box Breathing",
            subtitle: "Breathe with Purpose",
            duration: "4 mins",
            description: "A rhythmic breathing pattern to reset your nervous system.",
            icon: "🌬️",
            color: "#A8B5A0"
        },
        {
            id: 3,
            title: "Body Scan",
            subtitle: "Release Tension",
            duration: "10 mins",
            description: "Systematically relax every muscle in your body.",
            icon: "🧘",
            color: "#9FB8C4"
        },
        {
            id: 4,
            title: "Movement",
            subtitle: "Gentle Stretching",
            duration: "15 mins",
            description: "Move stagnant energy out of your body gently.",
            icon: "🤸",
            color: "#E8C87A"
        },
        {
            id: 5,
            title: "Nature Walk",
            subtitle: "Mindful Steps",
            duration: "20 mins",
            description: "Walk slowly, noticing the sensation of each step.",
            icon: "🚶",
            color: "#D8B4E2"
        },
        {
            id: 6,
            title: "Safe Place",
            subtitle: "Visualization",
            duration: "8 mins",
            description: "Construct a mental sanctuary you can visit anytime.",
            icon: "🏰",
            color: "#FFCCA0"
        }
    ];

    return (
        <div className="resources-page">
            <AnimatedBackground variant="resources" />

            <div className="resources-container fade-in">
                <div className="resources-header">
                    <h1>Mind & Body Tools</h1>
                    <div className="header-decoration">
                        <span>✨</span>
                        <div className="line"></div>
                        <span>✨</span>
                    </div>
                    <p>Curated practices to help you find your center.</p>
                </div>

                <div className="exercises-grid">
                    {exercises.map((ex, index) => (
                        <div
                            key={ex.id}
                            className="exercise-card stagger-animation"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                '--card-accent': ex.color
                            }}
                        >
                            <div className="card-inner">
                                <div className="icon-wrapper" style={{ backgroundColor: `${ex.color}25` }}>
                                    <span className="card-icon">{ex.icon}</span>
                                </div>
                                <div className="card-content">
                                    <h3>{ex.title}</h3>
                                    <h4>{ex.subtitle}</h4>
                                    <span className="duration-pill">⏱ {ex.duration}</span>
                                    <p>{ex.description}</p>
                                </div>
                                <button className="start-btn" style={{ backgroundColor: ex.color }}>
                                    Begin Practice
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
