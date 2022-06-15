import React from 'react'
import './homepage.css'
import { Parallax } from 'react-parallax'
import BackgroundImage from '../assets/images/image.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepage () {
  AOS.init({duration: 400, mirror: true,});
  return (
    <Parallax
      className='background-image'
      bgImage={BackgroundImage}
      bgImageAlt='the cat'
      strength={200}
    >
      <div className='homepage-content'>
        <h1 data-aos="fade-up-right" >Jay Bautista Crisostomo</h1>
        <h2 data-aos="fade-up-left" data-aos-delay={400}>Front-End Developer</h2>
        <button data-aos="fade-down-right" data-aos-delay={800}>Portfolio</button>
      </div>
    </Parallax>
  )
}

export default Homepage
