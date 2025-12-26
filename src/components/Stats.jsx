import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        { number: '60+', label: 'Clients' },
        { number: '25+', label: 'Years of Experience' },
        { number: '6', label: 'Countries' },
        { number: '2k+', label: 'Professionals' }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h3 className="stat-number">{stat.number}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
