import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="radiation-symbol">☢️</div>
        <h1 className="hero-title">Nuclear Blast Testing Facility</h1>
        <p className="hero-tagline">Enter the Facility — Survive the Blast</p>
        <p className="hero-description">
          Step into the most intense nuclear roleplay experience on Roblox. 
          Choose your side, master your role, and determine the fate of the facility.
        </p>
        <div className="hero-buttons">
          <a 
            href="https://www.roblox.com/games/6153709" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            💣 Play on Roblox
          </a>
          <a 
            href="#community" 
            className="btn btn-secondary"
          >
            🎮 Join Discord
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
