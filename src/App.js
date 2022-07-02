import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import MoreAboutMe from "./components/AboutMe/MoreAboutMe";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Homepage />
      <AboutMe />
      <Portfolio />
      <MoreAboutMe />
      <Contact />
    </div>
  );
}

export default App;
