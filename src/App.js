import './App.css';
import Navbar from '../src/components/navbar'
import Home from '../src/components/home'
import About from '../src/components/about'
import Skills from '../src/components/skills'
import Work from '../src/components/work'
import Contact from '../src/components/contact'

function App() {
  return (
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </div>
  );
}

export default App;
