import React from 'react'
import "./portfolio.css"
import projFive from "../../assets/work.jpg";

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My Projects</span>

            <div className="portfolio__container container">
                <div>
                    <div className="portfolio__content grid">
                        <iframe className="portfolio__video" width="840" height="472.5" src="https://www.youtube.com/embed/HrXssc7vn2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Interact</h3>
                            <p className="portfolio__description">Developed a RPG game that provides a preliminary diagnosis for ADHD depending on how you interact with the
                                controls, environment, dialogues, and mini games, using common symptoms listed by the DSM-V testing for
                                inattention and hyperactivity.</p>
                            <a href="https://github.com/Yatsz/Interact" className="button button--flex button--small portfolio__button">
                                View Repository
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio__content grid">
                    <iframe className="portfolio__video" width="840" height="472.5" src="https://www.youtube.com/embed/HpOUCSkEpC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Mem Extension</h3>
                            <p className="portfolio__description">Developed a Google Chrome Extension using Mem’s REST API to save either the current tab or every tab in a
                                window into a page in Mem via an API key given by the user. The user is also given the choice to add notes to the
                                page or choose to be given the three most relevant words from the current tab.</p>
                            <a href="https://github.com/Yatsz/Final-Mem-Take-Home---Daniel-Kim" className="button button--flex button--small portfolio__button">
                                View Repository
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio__content grid">
                        <iframe className="portfolio__video" src="https://drive.google.com/file/d/1fL3qPq79dwJ0_C47Aa-Cx9hVuJct639E/preview" title="Google Drive video player" width="840" height="472.5" allow="autoplay"></iframe>

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Gesture Detector (0:16-1:31)</h3>
                            <p className="portfolio__description">Developed a program that detects letters in the alphabet using the accelerometer on a microcontroller that can be
                                registered and sent the data collected wirelessly to my computer.</p>
                            <br></br>
                            <h3 className="portfolio__title">Confidence Detector (2:20-3:03)</h3>
                            <p className="portfolio__description">Using the microphone on the microcontroller and a virtual gauge, I developed a measurement of how loud a
                                volume is around the microcontroller in order to measure the level of projection someone makes with their voice.</p>
                        </div>
                    </div>


                    <div className="portfolio__content grid">
                        <img src={projFive} alt="" className="portfolio__img" />

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">In Progress</h3>
                            <p className="portfolio__description">Working on developing a CRUD App that utilizes my own back-end API. I plan on using Python, Django, PostgreSQL, and React to complete this project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio