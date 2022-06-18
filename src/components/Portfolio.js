import React from 'react'
import './portfolio.css'
import { projects } from './projects'
import PublicIcon from '@mui/icons-material/Public'
import CodeIcon from '@mui/icons-material/Code'

function Portfolio () {
  return (
    <div className='porfolio' id='portfolio'>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div
          className='project'
          key={index}
          data-aos='fade-up'
          data-aos-duration={1000}
        >
          <img src={project.image} alt='' />
          <div className='project-description'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className='libraries'>
              {project.libraries.map((library, index) => (
                <p key={index}>{library}</p>
              ))}
              <div className='project-links'>
                <a href={project.liveLink} target='_blank'>
                  <PublicIcon className='project-icon' />
                  Live
                </a>
                <a href={project.githubLink} target='_blank'>
                  <CodeIcon className='project-icon' />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio
