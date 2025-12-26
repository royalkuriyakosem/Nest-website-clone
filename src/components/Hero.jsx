import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Digital Transformation <br />
                        <span className="highlight">Simplified</span>
                    </h1>
                    <p className="hero-subtitle">
                        Helping businesses navigate the digital landscape with innovative engineering and technology solutions.
                    </p>
                    <div className="hero-actions">
                        <Button>Explore Now</Button>
                    </div>
                </div>
                <div className="hero-visual">
                    {/* Decorative geometric elements acting as visual focus since we don't have the exact image */}
                    <div className="circle-bg"></div>
                    <div className="floating-card card-1">
                        <span>60+</span>
                        <p>Clients</p>
                    </div>
                    <div className="floating-card card-2">
                        <span>25+</span>
                        <p>Years</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
