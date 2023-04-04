import React from 'react'
import { useState } from 'react'
import "./experiences.css"

const Experiences = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="experiences section" id="experiences">
            <h2 className="section__title">Experiences</h2>
            <span className="section__subtitle">Past Work</span>

            <div className="experiences__container container grid">
                <div className="experiences__content">
                    <div>
                        <i className="uil uil-web-grid experiences__icon"></i>
                        <h3 className="experiences__title">
                            Curieus Co-Director <br /> of Technology
                        </h3>
                    </div>

                    <span className="experiences__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right experiences__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "experiences__modal active-modal" : "experiences__modal"}>
                        <div className="experiences__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experiences__modal-close"></i>

                            <h3 className="experiences__modal-title">Curieus Co-Director of Technology</h3>
                            <p className="experiences__modal-description">Worked on making curriculum and lessons to be taught to low-income youth of color.</p>

                            <ul className="experiences__modal-experiences grid">
                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Developed basic lessons in Computer Science utilizing Scratch and HTML</p>
                                </li>

                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Taught workshops on Computer Science and technology-related topics</p>
                                </li>

                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Communicated clearly with the leadership team at Curieus to bridge Computer Science into the curriculum</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experiences__content">
                    <div>
                        <i className="uil uil-arrow experiences__icon"></i>
                        <h3 className="experiences__title">
                            OmniscientCRM <br /> Software Intern
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="experiences__button">View More
                        <i className="uil uil-arrow-right experiences__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "experiences__modal active-modal" : "experiences__modal"}>
                        <div className="experiences__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experiences__modal-close"></i>

                            <h3 className="experiences__modal-title">OmniscientCRM Software Intern</h3>
                            <p className="experiences__modal-description">Got first-hand experience in working in the CRM industry</p>

                            <ul className="experiences__modal-experiences grid">
                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Assembled a linux based local testing environment for the company's product</p>
                                </li>

                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Developed email templates for the company utilizing HTML and CSS</p>
                                </li>

                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Created guides to the usage of the company's product</p>
                                </li>

                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Restructred the networking and routing of company's server</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experiences__content">
                    <div>
                        <i className="uil uil-edit experiences__icon"></i>
                        <h3 className="experiences__title">
                            UC Davis IoT <br /> Cosmos Student
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="experiences__button">View More
                        <i className="uil uil-arrow-right experiences__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "experiences__modal active-modal" : "experiences__modal"}>
                        <div className="experiences__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experiences__modal-close"></i>

                            <h3 className="experiences__modal-title">UC Davis Cosmos</h3>
                            <p className="experiences__modal-description">Selected to be part of the UC Davis Cosmos Summer Program as part of the Internet of Things Cluster</p>

                            <ul className="experiences__modal-experiences grid">
                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Coded in C with interrupts and wireless connections on a microcontroller</p>
                                </li>

                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Developed projects such as a Gesture Detector and Confidence Detector that collected data from a microcontroller and sent it wirelessly to my computer</p>
                                </li>

                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Learned about different niches of Computer Science from several professors that presented their research associated with IoT</p>
                                </li>

                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">Improved on creating my own project through the engineering process and presenting it to a group of people</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences