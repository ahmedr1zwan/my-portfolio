import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Techno from './components/Techno.jsx'
import ExperienceProjects from './components/ExperienceProjects.jsx'
import { BackgroundGradientAnimation } from './components/background-gradient-animation.jsx'


function App() {

  return (
    <>
  <BackgroundGradientAnimation />
  <div className="relative z-10">
    <Navbar />
    <Home />
    <Techno />
    <ExperienceProjects />
  </div>
  </>

  )
}

export default App
