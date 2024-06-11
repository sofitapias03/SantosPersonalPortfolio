// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
                    <li><Link to="research" smooth={true} duration={500}>Research Interests</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

