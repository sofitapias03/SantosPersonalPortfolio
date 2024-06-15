// src/components/About.js
import React from 'react';
import LandingPageIMG from '../Images/LandingPageIMG.jpg';
import './AboutMe.css';


const AboutMe = () => {
    return (
        <section id="about">
            
            
            
            <div class="container">

            <div class = "aboutMeIMG">
                <img  class = "Landing-IMG" src={LandingPageIMG} alt="Landing page profile picture"  />
           
            </div>
            
            <p  class = "aboutMeText">
            <div class="aboutMe-title"> <b>About Me </b> </div>
                
            I was born and raised in El Salvador, where I got the opportunity of attending the Academia 
            Britanica Cuscatleca for my studies from early education up until completing both the IGCSE 
            and the complete IB curriculum. When I got to grade 9, I decided to concentrate my studies 
            towards a more scientific route as there were no other classes as interesting to me as biology and chemistry . 
            When I got to my senior year, my passion and genuine intrigue for science had only grown, and so 
            I decided to pursue a career down that same path, by attending the University of Alberta to for my bachelors 
            degree in Biochemistry Honors and start my journey in becoming a researcher.
            
            </p>
            </div>
        </section>
    );
};

export default AboutMe;
