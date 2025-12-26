import React from 'react';
import Button from './Button';
import './SuccessStories.css';

const SuccessStories = () => {
    const stories = [
        {
            title: 'Digital Banking Transformation',
            desc: 'Modernizing legacy systems for a leading global bank.',
            tag: 'FINTECH'
        },
        {
            title: 'Smart Factory Automation',
            desc: 'Implementing IoT solutions to optimize production lines.',
            tag: 'INDUSTRIAL'
        },
        {
            title: 'Healthcare Data Analytics',
            desc: 'Leveraging AI/ML for predictive patient care insights.',
            tag: 'HEALTHCARE'
        }
    ];

    return (
        <section className="stories-section section-padding">
            <div className="container">
                <h2 className="section-title">Our Success Stories</h2>
                <div className="stories-grid">
                    {stories.map((story, index) => (
                        <div key={index} className="story-card">
                            <span className="story-tag">{story.tag}</span>
                            <h3 className="story-title">{story.title}</h3>
                            <p className="story-desc">{story.desc}</p>
                            <a href="#" className="read-more">Read More &rarr;</a>
                        </div>
                    ))}
                </div>
                <div className="stories-action">
                    <Button>View All Stories</Button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
