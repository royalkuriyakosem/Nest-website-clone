import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2 className="footer-logo">NeST Digital</h2>
                        <p className="footer-desc">
                            Transforming businesses with cutting-edge technology solutions.
                        </p>
                        <div className="social-icons">
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">News & Media</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-services">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Digital Engineering</a></li>
                            <li><a href="#">Cloud & DevOps</a></li>
                            <li><a href="#">Data & Analytics</a></li>
                            <li><a href="#">Cyber Security</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <ul>
                            <li>
                                <MapPin size={16} />
                                <span>NeST Tech Park, Kochi, India</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span>+91 484 123 4567</span>
                            </li>
                            <li>
                                <Mail size={16} />
                                <span>info@nestdigital.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NeST Digital. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
