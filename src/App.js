import './App.css'
import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import MoreAboutMe from './components/MoreAboutMe'
import Contact from './components/Contact'

function App () {
  return (
    <div className='app'>
      <Homepage />
      <AboutMe />
      <Portfolio />
      <MoreAboutMe />
      <Contact />
    </div>
  )
}

export default App
