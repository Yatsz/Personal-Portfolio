import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">GPA</h3>
            <span className="about__subtitle">4.0</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>

            <h3 className="about__title">Ready</h3>
            <span className="about__subtitle">To Learn</span>
        </div>
    </div>
  )
}

export default info