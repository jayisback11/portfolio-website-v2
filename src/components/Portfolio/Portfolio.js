import React, { useState, useEffect } from 'react'
import './portfolio.css'
import { projects } from './projects'
import PublicIcon from '@mui/icons-material/Public'
import CodeIcon from '@mui/icons-material/Code'
import CodeOffIcon from '@mui/icons-material/CodeOff'

function Portfolio () {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const scrollMove = () => {
      setOffsetY(window.pageYOffset)
    }

    window.addEventListener('scroll', scrollMove)

    return () => {
      window.removeEventListener('scroll', scrollMove)
    }
  }, [])
  return (
    <div className='porfolio' id='portfolio'>
      <h2 style={{ color: offsetY > 1100 && 'white' }}>Projects</h2>
      {projects.map((project, index) => (
        <div
          className='project'
          key={index}
          data-aos='fade-up'
          data-aos-duration={1000}
        >
          <img src={project.image} alt='Project' />
          <div
            className='project-description'
            style={{
              color:
                offsetY > 3000
                  ? 'white'
                  : offsetY > 2100
                  ? 'white'
                  : offsetY > 1100 && 'white'
            }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className='libraries'>
              {project.libraries.map((library, index) => (
                <p key={index}>{library}</p>
              ))}
              <div className='project-links'>
                <a href={project.liveLink} target='_blank' rel='noreferrer'>
                  <PublicIcon className='project-icon' />
                  Live
                </a>
                {project.private ? (
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className={`${project.private && 'hidden'}`}
                    title='Code is not available'
                  >
                    <CodeOffIcon className='project-icon' />
                    Code
                  </a>
                ) : (
                  <a href={project.githubLink} target='_blank' rel='noreferrer'>
                    <CodeIcon className='project-icon' />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio
