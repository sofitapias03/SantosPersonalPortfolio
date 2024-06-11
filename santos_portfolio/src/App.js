// src/App.js
import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Research from './components/Research';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <LandingPage />
                <AboutMe />
                <Research />
                <Contact />
            </main>
        </div>
    );
};

export default App;




