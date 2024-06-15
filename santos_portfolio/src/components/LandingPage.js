// src/components/Home.js
import React from 'react';
import './LandingPage.css';



const LandingPage = () => {
    return (
        <section id="home">
           <div class = "landing-container">
            <p className='name'><h1><b>Hello! I'm Juan Fernando Santos</b></h1></p>
            <div class = "underline"></div>
            <hr />
            <p className='description'>A passionate biochemistry student from El Salvador, currently studying at the University of Alberta.
            My academic journey is driven by a deep curiosity about the molecular mechanisms that 
        govern life. I am particularly fascinated by the intersection of biochemistry and 
        molecular biology, and I am committed to contributing to advancements in medical research 
        and biotechnology. Join me as I explore the wonders of biochemistry, share my research 
        interests, and work towards making meaningful contributions to science and society.
            </p>
            </div>

            
        </section>

        
       

        
    );
};

export default LandingPage;
