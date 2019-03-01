import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
 

import Header from './header/Header';
import HeaderSubGrid from './grid-layout/HeaderSubGrid';
import AboutPage from './AboutPage/AboutPage';
import Skills from './Skills/Skills';
import Projects from './projects/Projects';

const MainView = () => {
    return (
        <div className="main">
            <Header /> 
            <AboutPage />
            
            <Skills />
            <Projects />


        </div>
    )
}

export default MainView