import React from 'react'


function AboutPage() {
    return (
        <main>
            <section className="about">
                <div className="u-center-text u-margin-bottom-big">
                    {/* above classname/div here for styling purposes; a 'utility class' */}
                    <h2 className="heading-secondary">
                        A little about me
                </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiery u-margin-bottom-small ">Who is Grant Wilhelm</h3>
                        <p className="paragraph">
                           Thats me! I am an Air Force veteran who discovered a love for programming while working on the Lockheed Martin F-35 fighter jet.  I love learning and expanding my knowledge about coding and the technology industry as a whole.
                    </p>
                        <h3 className="heading-tertiery u-margin-bottom-small">Adventure is my middle name</h3>
                        <p className="paragraph">
                            When not inside learning about code I enjoy getting outside and enjoying beautiful Utah!  From skiing, hiking, camping, biking, running, swimming and everything in between you can usually find be somewhere outside on the weekends!
                    </p>

                        <a href="#" className="btn-text">Learn more > </a>
                    </div>


                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={require("../assets/img/portfoliopic1.jpg")} alt="Photo 1" className="photo photo-1" />

                            <img src={require("../assets/img/portfoliopic2.jpg")} alt="Photo 2" className="photo photo-2" />

                            <img src={require("../assets/img/HeadShot.jpg")} alt="Photo 3" className="photo photo-3" />

                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default AboutPage 
