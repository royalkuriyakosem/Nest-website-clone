import React from 'react';
import { Plane, Building2, Train, Factory, Landmark, ShieldCheck, Stethoscope } from 'lucide-react';
import './Industries.css';

const Industries = () => {
    const industries = [
        { icon: <Plane size={48} />, name: 'Aerospace & Defence' },
        { icon: <Stethoscope size={48} />, name: 'Healthcare' },
        { icon: <Train size={48} />, name: 'Locomotive' },
        { icon: <Factory size={48} />, name: 'Industrial' },
        { icon: <Landmark size={48} />, name: 'Banking & Finance' },
        { icon: <ShieldCheck size={48} />, name: 'Insurance' },
        { icon: <Building2 size={48} />, name: 'Mobility' },
    ];

    return (
        <section id="industries" className="industries-section section-padding">
            <div className="container">
                <h2 className="section-title">Industries We Serve</h2>
                <div className="industries-grid">
                    {industries.map((item, index) => (
                        <div key={index} className="industry-card">
                            <div className="industry-icon">
                                {item.icon}
                            </div>
                            <h3 className="industry-name">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
