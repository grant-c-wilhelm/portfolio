import React from 'react'
import Header from './header/Header';
import HeaderSubGrid from './grid-layout/HeaderSubGrid';
import AboutPage from './AboutPage/AboutPage';
import Feature from './features/Feature';
import Projects from './projects/Projects';

const MainView = () => {
    return (
        <div className="main">
            <Header />
            <AboutPage />
            <Feature />
            <Projects />


        </div>
    )
}

export default MainView