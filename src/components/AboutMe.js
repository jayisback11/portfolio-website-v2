import React from 'react'
import './aboutme.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutMe () {
  AOS.init({duration: 400, mirror: true,});

  return (
    <div className='aboutme' data-aos='fade-up-left'>
      AboutMe
    </div>
  )
}

export default AboutMe
