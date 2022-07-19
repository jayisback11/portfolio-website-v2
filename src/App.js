import './App.css'
import Homepage from './components/Homepage/Homepage'
import AboutMe from './components/AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio'
import MoreAboutMe from './components/AboutMe/MoreAboutMe'
import Contact from './components/Contact/Contact'
import { useState, useEffect } from 'react'

function App () {
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
  console.log(offsetY)
  return (
    <div
      className='app'
      style={{
        backgroundColor:
          offsetY > 3400
            ? 'white'
            : offsetY > 2600
            ? '#2b2b2b'
            : offsetY > 1900
            ? '#1E3F7F'
            : offsetY > 1100 && '#687EAA'
      }}
    >
      <Homepage />
      <AboutMe />
      <Portfolio />
      <MoreAboutMe />
      <Contact />
    </div>
  )
}

export default App
