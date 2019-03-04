import React from 'react'
import ScrollableAnchor from "react-scrollable-anchor";

import image from '../assets/img/Snow-motion.mp4'
import video from '../assets/img/candideThovex.mp4'


function Projects() {
    return (
        <ScrollableAnchor id="section2">
        <section className="section-tours">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={image} type='video/mp4'/>
                </video>
            </div>
            <div className="u-center-text u-margin-bottom-big" >
                <h2 className="heading-secondary">
                    Some of my Projects
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1"></div>
                            <h4 className="card__heading">
                                <span className="card__heading--span card__heading--span--1" >Ski Local</span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>React</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>Node</li>
                                    <li>SASS</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card__side card__side--back card__side--back--1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Ski Local was a group project.  I was the lead front end developer.  I used React and SASS as my primary tools to create the user experience. The purpose of the web app was to provide skiers coming to Utah a platform for finding ski resort guides without involving the ski resort. This saves money for visitors and puts a little extra cash in the locals pockets.  </p>

                                </div>
                                <a href="https://github.com/kensnow/GroupProject" className="btn btn-white">The Git Repository!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--2"></div>
                            <h4 className="card__heading">
                                <span className="card__heading--span card__heading--span--2" >Coffee Connection</span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>React</li>
                                    <li>SASS</li>
                                    <li>GUI</li>
                                    <li>MongoDB / Compass</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card__side card__side--back card__side--back--1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">I was the only developer that worked on this project. This is a full stack project.  I used React, SASS, MongoDB / Compass, Axios, React-Router-DOM, Node and Express. The purpose of this app was to provide a platform to connect local companies to local coffee companies.  Once connected local companies can order brewed coffee from the local roasters!  I really enjoyed this project, coffee is a love of mine! I am still currently working on this project!</p>

                                </div>
                                <a href="https://github.com/grant-c-wilhelm/Assignments/tree/master/Personal/coffee-connect" className="btn btn-white"> The Git Repository!</a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
            <div className="u-center-text u-margin-top-big" >
                <a href="https://github.com/grant-c-wilhelm" className="btn btn-color">Check out my Github</a>
            </div>
            <div className="u-center-text u-margin-top-small" >
                <a href="https://www.linkedin.com/in/grant-wilhelm" className="btn btn-color">Get in touch on LinkedIn</a>
            </div>
        </section>
        </ScrollableAnchor>
    )
}

export default Projects
// .card
//     perspective: 150rem
//     -moz-perspective: 150rem

//     &__side
//         background-color: orangered
//         height: 50rem
//         transition: all .8s

//         &--front
//             background-color: orangered


//         &--back
//             background-color: green
//             transform: rotateY(180deg)



//     &:hover &.__side
//         transform: rotateY(180deg) 

//     // &:hover &--front
//     //     transform: rotateY(0) 