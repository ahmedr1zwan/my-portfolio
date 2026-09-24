import { WovenBorder } from './components/HeritageArt.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Techno from './components/Techno.jsx'
import ExperienceProjects from './components/ExperienceProjects.jsx'


function App() {

  return (
    <>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">
        <Home />
        <WovenBorder />
        <Techno />
        <ExperienceProjects />
        </main>
        <footer className="site-footer">
          <WovenBorder />
          <div><span>Ahmed Rizwan</span><a href="mailto:ahmed.rizwan@queensu.ca">Let’s build something thoughtful ↗</a></div>
        </footer>
    </>
  )
}

export default App
