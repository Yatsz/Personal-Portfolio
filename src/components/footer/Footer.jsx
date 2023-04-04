import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Daniel</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/dan.k.12103/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/dhyunkim/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/Yatsz" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Daniel Kim
                </span>
            </div>
        </footer>
    )
}

export default Footer