import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Gameplay from './components/Gameplay'
import Roles from './components/Roles'
import Features from './components/Features'
import Community from './components/Community'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Gameplay />
      <Roles />
      <Features />
      <Community />
      <footer className="footer">
        <p>&copy; 2025 NBTF Fan Website. Not affiliated with Ryanblaze or Roblox Corporation.</p>
      </footer>
    </div>
  )
}

export default App
