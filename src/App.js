import './App.css'
import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App () {
  return (
    <div className='app'>
      <Homepage />
      <AboutMe />
    </div>
  )
}

export default App
