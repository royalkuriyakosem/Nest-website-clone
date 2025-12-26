import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent scrolling when menu is open
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about' },
        { name: 'Industries', href: '#industries' },
        { name: 'Services', href: '#services' },
        { name: 'Insights', href: '#insights' },
        { name: 'Careers', href: '#careers' },
        { name: 'CONTACT US', href: '#contact' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">
                    {/* Placeholder for Nest Digital Logo - using text for now */}
                    <h1 style={{ color: isScrolled ? 'var(--dark-blue)' : 'var(--dark-blue)', fontSize: '24px', fontWeight: '800' }}>
                        NeST Digital
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={28} color="var(--text-white)" /> : <Menu size={28} color="var(--dark-blue)" />}
                </div>

                {/* Mobile Drawer */}
                <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name} onClick={() => { setIsOpen(false); document.body.style.overflow = 'auto'; }}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
