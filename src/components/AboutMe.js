import React from 'react'
import './aboutme.css'

function AboutMe () {
  return (
    <div className='aboutme' id='about-me'>
      <h2 className='about-me-header'>About me</h2>
      <p
        className='hello-background'
        data-aos='fade-up'
        data-aos-duration={1000}
      >
        Hello!
      </p>
      <p
        className='about-me-bio'
        data-aos='fade-up'
        data-aos-delay={500}
        data-aos-duration={1000}
      >
        My name is Jay B. Crisostomo, and I love
        <strong> front-end development</strong>. Using existing web technologies
        to create cool products and solve problems.
      </p>
    </div>
  )
}

export default AboutMe
