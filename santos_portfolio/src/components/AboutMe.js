// src/components/About.js
import React from 'react';
import LandingPageIMG from '../Images/LandingPageIMG.jpg';
import './AboutMe.css';


const AboutMe = () => {
    return (
        <section id="about">
            <p>
                <img  class = "Landing-IMG" src={LandingPageIMG} alt="Landing page profile picture" />
           
            </p>
        </section>
    );
};

export default AboutMe;
