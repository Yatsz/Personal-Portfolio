import React from 'react'
import "./contact.css"

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">hyunkim03@gmail.com</span>

                            <a href="mailto:hyunkim03@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-phone-call contact__card-icon"></i>

                            <h3 className="contact__card-title">Phone Number</h3>
                            <span className="contact__card-data">408-691-7715</span>

                            <span>Call or Text</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact