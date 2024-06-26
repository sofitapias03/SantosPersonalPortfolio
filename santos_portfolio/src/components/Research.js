// src/components/Research.js
import React from 'react';
import './Research.css';

const Research = () => {
    return (
        <section id="research">
            <div class = "research-title">
                Research Interest:
            </div>
            <br/>
            
            <br/>
            <p class = "research-text">
            I have always been interested in research involving infectious diseases, focusing on the complex mechanisms that take place during an 
            immune response to protect our bodies. During highschool, I selected my Extended essay topic to explore the genetic mutations and 
            determinants involved during HIV infections. I looked at the genetic composition of the virus, the mechanisms via which it accesses, 
            infects and replicates within cells, and suggested a correlation between the length of genetic code and the number of infections related 
            to this. HIV sparked my interest, as it is commonly referred to as the “perfect virus”, targeting the cells meant to protect us, and thus 
            I am interested in continuing my research and expanding my knowledge in this type of infectious diseases at a molecular level. 

            </p>

            <div class = "flex-container">
            <div class = "div-item">
                <div class = "card-text"><span class = "data-number">39</span> million infected people living with HIV in 2022</div>
            </div>
            <div class = "div-item">
            <div class = "card-text"><span class = "data-number">1.3 </span> million new HIV  infections in 2022</div>
            </div>
            <div class = "div-item">
            <div class = "card-text"><span class = "data-number">63,000</span> deaths realted to HIV in 2022</div>
            </div>

            </div>
        </section>
    );
};

export default Research;
