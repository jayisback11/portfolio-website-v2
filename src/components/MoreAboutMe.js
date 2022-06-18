import React from 'react'
import './moreaboutme.css'
import { threeIcons } from './threeIcons'

function MoreAboutMe () {
  return (
    <div className='more-about-me'>
      <h2>More About Me</h2>
      <p className='more-about-me-bio' data-aos='fade-up-left'>
        Front-End developer who cares deeply about user experience. <br />I am
        from United States, Louisiana. I love coding and building cool stuff on
        the Internet. <br />
        I'm focused on building products with <strong> JavaScript</strong>,
        specifically <strong> React</strong>.
      </p>
      <div className='three-icons'>
        {threeIcons.map((icon, index) => (
          <div
            key={index}
            className='icon-container'
            data-aos={`${
              index == 0 ? 'fade-right' : index == 1 ? 'fade-up' : 'fade-left'
            }`}
            data-aos-delay={`${index == 1 ? 500 : index == 2 && 1000}`}
            data-aos-duration={1000}
          >
            <img src={icon.icon} alt='' />
            <h3>{icon.name}</h3>
            <p>{icon.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoreAboutMe
